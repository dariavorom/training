
document.querySelector("#clear").addEventListener("click", clear);
function clear() {
    jsConsole.clear("p");
}
document.getElementById("run").addEventListener("click", introduce);
function introduce (e) {
    e.preventDefault();
    let firstName = jsConsole.read("#firstname");
    let lastName = jsConsole.read("#lastname");
    let age_ = jsConsole.read("#age");

    function Person(fName, lName, a) {
        this.firstname = fName;
        this.lastname = lName;
        this.age = a;
    }

    Person.prototype = {
        get fullName() {
            return `${this.firstname} ${this.lastname}`;
        },
        set fullName(value) {
            [this.firstname, this.lastname] = value.split(' ');
        },
        get Age() {
            return +this.age;
        },
        set Age(value) {
            if (value == "null" || value == "false") {
                this.age = 0;
            } else if (value == "true") {
                this.age = 1;
            } else this.age = value;
        },
        get introduce() {
            if (this.firstname.length == 0 || this.lastname.length == 0 || this.age.length == 0) {
                return `Please fill in all fields`;
            }else if (this.Age <= 0 || this.Age >= 150 ||
                this.age !== "null" && this.age !== "false" && this.age !== "true" && /[\D]+/.test(this.Age)) {
                return `Incorrect age`
            }else if (typeof (this.firstname) !== "string" || this.firstname.length < 3
                || this.firstname.length > 20 || !/[a-zA-Z]/.test(this.firstname)) {
                return `Incorrect first name`
            }else if (typeof (this.lastname) !== "string" || this.lastname.length < 3
                || this.lastname.length > 20 || !/[a-zA-Z]/.test(this.lastname)) {
                return `Incorrect last name`
            }
            this.Age = this.age;
            return `Hello! My name is ${this.fullName} and I am ${this.Age}-years-old`
        },
    }

    const person = new Person(firstName,lastName, age_);

    jsConsole.writeLine(person.introduce)
}




