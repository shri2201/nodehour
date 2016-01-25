var recursive = function() {
  console.log("It has been five second!");
  setTimeout(recursive, 5000);
};

recursive();
