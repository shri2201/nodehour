var restify = require('restify');
var mongoose = require('mongoose');
var swagger = require('swagger-doc');

var Schema = mongoose.Schema;

var db = mongoose.connection;

db.on('error', console.error);

db.once('open', function() {
    // Create your schemas and models here.
    var bookSchema = new Schema({
        isbn: {
            type: String,
            required: true,
            unique: true
        },
        title: {
            type: String,
            required: true
        },
    });

    var Book = mongoose.model('Book', bookSchema);

    var server = restify.createServer({
        name: 'myapp',
        version: '1.0.0'
    });

    server.use(restify.acceptParser(server.acceptable));
    server.use(restify.queryParser());
    server.use(restify.bodyParser());

    server.use(restify.CORS({
        headers: ['x-foo']
    }));

    // Add some documentation using swagger
    swagger.configure(server, {
        discoveryUrl: "/resources.json",
        version: "0.1",
        basePath: "http://localhost:8080"
    });

    var docs = swagger.createResource("/api");

    // Documents an api, all options are same as in swagger.
    docs.get("/echo/{name}", "Echoes your name in JSON Format", {
        notes: "Echo your name",
        nickname: "echoName",
        parameters: [{
            name: "name",
            description: "Your name as in the passport.",
            required: true,
            dataType: "string",
            paramType: "path"
        }]
    });


    server.get('/echo/:name', function(req, res, next) {
        res.send(req.params);
        return next();
    });

    server.get('/books/:isbn', function(req, res, next) {
        var isbn = req.params.isbn;
        Book.findOne({
            isbn: isbn
        }, function(err, doc) {
            if (err) {
                res.send(404, err);
                return next();
            } else {
                res.send(200, doc);
                return next();
            }
        });
    });

    server.post('/books', function(req, res, next) {
        var BookModel = new Book(req.body);
        BookModel.save(function(err, doc) {
            if (err) {
                res.send(404, err);
                return next();
            } else {
                res.send(201, doc);
                return next();
            }
        });
    });

    server.listen(8080, function() {
        console.log('Rest API %s listening at %s', server.name, server.url);
    });

});

mongoose.connect('mongodb://localhost/bookdb');
