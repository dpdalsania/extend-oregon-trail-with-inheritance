function Wagon (capacity) {
    this.capacity = capacity;
    this.passengers = [];
}

Wagon.prototype = {
    constructor: Wagon,
    getAvailableSeatCount: function () {
        return (this.capacity - this.passengers.length);
    },
    join: function (traveler) {
        if (this.capacity > this.passengers.length) {
            this.passengers.push(traveler)
        }
        return;
    },
    shouldQuarantine: function () {
        let flag = false;
        this.passengers.forEach(element => {
            if (element.isHealthy === false) {
                flag = true;
            }
        });
        if (flag) {
            return true;
        } else {
            return false;
        }
    },
    totalFood: function () {
        let count = 0;
        this.passengers.forEach(element => {
            count += element.food;
          // console.log(element)
        });
        return count;
    }
}

function Traveler (name) {
    this.name = name;
    this.food = 1;
    this.isHealthy = true;
}

Traveler.prototype = {
    constructor: Wagon,
    hunt: function () {
        this.food += 2;
        return;
    },
    eat: function () {
        if (this.food > 0) {
            this.food--;
        } else {
            this.isHealthy = false
        }
        return;
    }
}
function Doctor (name) {
    Traveler.call(this, name);
    
}
Doctor.prototype = Object.create(Traveler.prototype);
Doctor.prototype.constructor = Doctor;
Doctor.prototype.heal = function (traveler) {
    traveler.isHealthy = true;
}
function Hunter (name) {
    Traveler.call(this, name);
    this.food = 2;
}
Hunter.prototype = Object.create(Traveler.prototype);
Hunter.prototype.constructor = Hunter;

Hunter.prototype = {
    constructor: Hunter,
    hunt: function () {
        this.food += 5;
        return;
    },
    eat: function () {
        if (this.food >= 2) {
            this.food -= 2;

        } else {
            this.isHealthy = false
            this.food = 0;
        }
        return;
    },
    giveFood: function (traveler, numOfFoodUnits) {
        if (this.food < numOfFoodUnits) {
            traveler.food += 0;
        } else {
            this.food -= numOfFoodUnits;
            traveler.food += numOfFoodUnits;
        }
    }
}


// Create a wagon that can hold 4 people
let wagon = new Wagon(4);
// Create five travelers
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let drsmith = new Doctor('Dr. Smith');
let sarahunter = new Hunter('Sara');
let maude = new Traveler('Maude');
console.log(`#1: There should be 4 available seats. Actual: ${wagon.getAvailableSeatCount()}`);
wagon.join(henrietta);
console.log(`#2: There should be 3 available seats. Actual: ${wagon.getAvailableSeatCount()}`);
wagon.join(juan);
wagon.join(drsmith);
wagon.join(sarahunter);
wagon.join(maude); // There isn't room for her!
console.log(`#3: There should be 0 available seats. Actual: ${wagon.getAvailableSeatCount()}`);
console.log(`#4: There should be 5 total food. Actual: ${wagon.totalFood()}`);
sarahunter.hunt(); // gets 5 more food
drsmith.hunt();
console.log(`#5: There should be 12 total food. Actual: ${wagon.totalFood()}`);
henrietta.eat();
sarahunter.eat();
drsmith.eat();
juan.eat();
juan.eat(); // juan is now hungry (sick)

console.log(`#6: Quarantine should be true. Actual: ${wagon.shouldQuarantine()}`);
console.log(`#7: There should be 7 total food. Actual: ${wagon.totalFood()}`);
drsmith.heal(juan);
console.log(`#8: Quarantine should be false. Actual: ${wagon.shouldQuarantine()}`);
sarahunter.giveFood(juan, 4);
sarahunter.eat(); // She only has 1, so she eats it and is now sick
console.log(`#9: Quarantine should be true. Actual: ${wagon.shouldQuarantine()}`);
console.log(`#10: There should be 6 total food. Actual: ${wagon.totalFood()}`);