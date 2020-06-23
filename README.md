# extend-oregon-trail-with-inheritance

Create a new repository and extend your Oregon Trail code to use inheritance to create two new types of traveler: Doctor and Hunter. They will have all of the features of any other Traveler, but with these differences:

A Doctor is a Traveler with one additional method:

Doctor.prototype.heal(traveler)
Pass another Traveler as a parameter to the .heal() method, and their isHealthy property is changed to true.

A Hunter is a Traveler that is better at finding food, but requires more food to eat. They should start out with 2 food instead of just 1 like other travelers do. They can also give food to other travelers:

Hunter.prototype.hunt()
Increase the hunter's food by 5. (A normal traveler gains only 2.)

Hunter.prototype.eat()
Consumes 2 units of the hunter's food. If the hunter doesn't have 2 food when they are instructed to eat, they eat as much as they can (0 or 1 unit), but the hunter is no longer healthy. (A normal traveler eats only 1 unit of food.)

Hunter.prototype.giveFood(traveler, numOfFoodUnits)
Transfers numOfFoodUnits from the hunter to a different traveler. If the hunter has less food than they are being asked to give, then no food should be transferred.

Use .call() inside your child class' constructor to inherit the behavior of your parent class' constructor.

Use Object.create() to make your child class' prototype inherit your parent class' prototype.

Set the ChildClass.prototype.constructor property to your ChildClass constructor.

All console.log statements in test code output the proper values.
