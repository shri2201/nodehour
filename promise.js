function timeOut()
{   
    var x=500;
    setTimeout(function(){
        console.log('done x=' +x );
    }, 5000);
    console.log('leaving after setting the time x=' +x);
    try
    {
        var k = 90/0;
        console.log(k);
        throw 'Never come here';
    }
    catch(err)
    {
        console.log("Divide by zero is caught " + err.message);
    }
}

f = new timeOut();