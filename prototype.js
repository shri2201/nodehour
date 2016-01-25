// A javascript class as good as it can get
function Employee() {
	var name; 
	var monthlySalary;
	var age;
	this.isAdult = function() {
         return val = (this.age > 18) ? "yes" : "no";        
	};
}

Employee.prototype.annualSalary = function() {
	return this.monthlySalary*12;
};

Employee.prototype.gender = function(gender){
	return this.gender = gender;
}

var person = new Employee();
person.name = "John Doe";
person.monthlySalary = 2500;
person.age = 45;


// Log the object and show it in JSON
console.log(person);
// Added a new compute method in the class using prototype
console.log(person.annualSalary());
// Added a new method in the class
console.log(person.isAdult());
// Added a new property using prototype
person.gender('F');
console.log(person.gender)
// Show that the new property is in JSON now
console.log(JSON.stringify(person));