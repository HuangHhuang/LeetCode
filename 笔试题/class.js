class Vehicle {
    type = "";
    color = "";
    length = 5;
    width = 2.4;
    height = 2.4;

    constructor(type, color) {
        if (type) {
            this.type = type;
        }
        if(color) {
            this.color = color;
        }
    }

    getColor = () => this.color;
    getCategory = () => this.category;
}

const truck = new Vehicle("truck", "blue");

console.log("truck cat: ", truck.getCategory());

Vehicle.prototype.category = "vehicle";

console.log("truck cat: ", truck.getCategory());

Vehicle.category = "vehicle type 2";

console.log("truck cat: ", truck.getCategory());

const sedan = new Vehicle("sedan", "red");