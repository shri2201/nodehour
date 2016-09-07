var prompt = require('prompt');
var data = [
  ['gold', 'heavy', 'young', false],
  ["gold", "medium", "old", false],
  ["silver", "heavy", "young", true],
  ["gold", "heavy", "young", false],
  ["silver", "low", "old", true],
  ["silver", "heavy", "middle", true],
  ["silver", "low", "young", false],
  ["gold", "heavy", "young", false],
  ["gold", "medium", "middle", true],
  ["gold", "medium", "old", false],
  ["silver", "medium", "middle", true],
  ["gold", "heavy", "middle", false],
  ["gold", "medium", "young", true],
  ["gold", "heavy", "young", true],
  ["gold", "medium", "old", true]
];

var i = 0;

var total = data.length;
var trueTot = 0;
var falseTot = 0;

var trueGold = 0;
var trueSilver = 0;
var trueHeavy = 0;
var trueLow = 0;
var trueMedium = 0;
var trueYoung = 0;
var trueMiddle = 0;
var trueOld = 0;


var falseGold = 0;
var falseSilver = 0;
var falseHeavy = 0;
var falseLow = 0;
var falseMedium = 0;
var falseYoung = 0;
var falseMiddle = 0;
var falseOld = 0;


for (i = 0; i < data.length; i++) {
  if (data[i][3] === true) {
    trueTot++;
    if (data[i][0] === 'gold') trueGold++;
    if (data[i][0] === 'silver') trueSilver++;
    if (data[i][1] === 'heavy') trueHeavy++;
    if (data[i][1] === 'low') trueLow++;
    if (data[i][1] === 'medium') trueMedium++;
    if (data[i][2] === 'young') trueYoung++;
    if (data[i][2] === 'middle') trueMiddle++;
    if (data[i][2] === 'old') trueOld++;
  } else
  if (data[i][3] === false) {
    falseTot++;
    if (data[i][0] === 'gold') falseGold++;
    if (data[i][0] === 'silver') falseSilver++;
    if (data[i][1] === 'heavy') falseHeavy++;
    if (data[i][1] === 'low') falseLow++;
    if (data[i][1] === 'medium') falseMedium++;
    if (data[i][2] === 'young') falseYoung++;
    if (data[i][2] === 'middle') falseMiddle++;
    if (data[i][2] === 'old') falseOld++;
  }
}

console.log("****Calculating the frequencies and probabilities****");

console.log("Total true=" + trueTot + " Total false=" + falseTot);

var Ptrue = trueTot / total;
var Pfalse = falseTot / total;

var Pgoldtrue = trueGold / trueTot;
var Psilvertrue = trueSilver / trueTot;

var Plowtrue = trueLow / trueTot;
var Pheavytrue = trueHeavy / trueTot;
var Pmediumtrue = trueMedium / trueTot;

var Pyoungtrue = trueYoung / trueTot;
var Poldtrue = trueOld / trueTot;
var Pmiddletrue = trueMiddle / trueTot;

var Pgoldfalse = falseGold / falseTot;
var Psilverfalse = falseSilver / falseTot;

var Plowfalse = falseLow / falseTot;
var Pheavyfalse = falseHeavy / falseTot;
var Pmediumfalse = falseMedium / falseTot;

var Pyoungfalse = falseYoung / falseTot;
var Pmiddlefalse = falseMiddle / falseTot;
var Poldfalse = falseOld / falseTot;


console.log("Ptrue=" + Ptrue + " Pfalse=" + Pfalse);
console.log("Pgoldtrue=" + Pgoldtrue + " Pgoldfalse=" + Pgoldfalse);
console.log("Psilvertrue=" + Psilvertrue + " Psilverfalse=" + Psilverfalse);
console.log("Plowtrue=" + Plowtrue + " Plowfalse=" + Plowfalse);
console.log("Pheavytrue=" + Pheavytrue + " Pheavyfalse=" + Pheavyfalse);
console.log("Pmediumtrue=" + Pmediumtrue + " Pmediumfalse=" + Pmediumfalse);
console.log("Pyoungtrue=" + Pyoungtrue + " Pyoungfalse=" + Pyoungfalse);
console.log("Poldtrue=" + Poldtrue + " Poldfalse=" + Poldfalse);
console.log("Pmiddletrue=" + Pmiddletrue + " Pmiddlefalse=" + Pmiddlefalse);

console.log("****Calculated the Data for Bayesian Model****");
console.log("****Enter the input for predictor****");
prompt.start();

var schema = {
  properties: {
    plan: {
      message: 'Plan [gold or silver]',
      required: true
    },
    callingminutes: {
      message: 'Calling Minutes [heavy, medium, low]:',
      required: true
    },
    age: {
      message: 'Age: [young, middle, old]',
      required: true
    },

  }
};

prompt.get(schema, function(err, input) {
  console.log("**Input Received**")
  console.log('Plan: ' + input.plan);
  console.log('Calling Minutes: ' + input.callingminutes);
  console.log('Age: ' + input.age);
  console.log("****Predicting Now****");
  predict(input.plan, input.callingminutes, input.age)
});



function predict(plan, callingminutes, age) {

  var P1true = 0;
  var P1false = 0;
  var P2true = 0;
  var P2false = 0;
  var P3true = 0;
  var P3false = 0;


  if (plan == "silver") {
     P1true = Psilvertrue;
     P1false = Psilverfalse;
  }
  else if(plan == "gold") {
     P1true = Pgoldtrue;
     P1false = Pgoldfalse;
  }

  if (callingminutes == "medium") {
     P2true = Pmediumtrue;
     P2false = Pmediumfalse;
  } else if (callingminutes == "low") {
     P2true = Plowtrue;
     P2false = Plowfalse;
  } else if (callingminutes == "heavy") {
     P2true = Pheavytrue;
     P2false = Pheavyfalse;
  }

  if (age == "young") {
     P3true = Pyoungtrue;
     P3false = Pyoungfalse;
  } else if (age == "middle") {
     P3true = Pmiddeltrue;
     P3false = Pmiddlefalse;
  } else if (age == "old") {
     P3true = Poldtrue;
     P3false = Poldfalse;
  }


  Pchurntrue = P1true * P2true * P3true * Ptrue;
  Pchurnfalse = P1false * P3false * P3false * Pfalse;

  console.log("Pchurntrue=" + Pchurntrue + "  Pchurnfalse=" + Pchurnfalse);
  if (Pchurntrue > Pchurnfalse)
    console.log("Churn=TRUE");
  else
    console.log("Churn=FALSE");
}
