// Calculator.js
// A library which contains useful calculation functions based on common formulas (aspect ratio, percentage calculation, etc…)
// Create a Calculator Class with
// Properties
class Calculator {
    constructor(x,y,width){
        this.x=x;
        this.y=y;
        this.width=width;
    }


// calculate.pi // Returns PI (3.141592653589793)
// ​
        pi=3.141592653589793;
// calculate.e // Returns Eulner's number (2.718281828459045)
        eulner=2.718281828459045
        
// Methods

// calculate.ratio(x,y,width)  //return height is --- on ratio x:y
// ​
        ratio(){return `hight is ${this.width*this.y/this.x} on ratio of ${this.x/this.y}`}
// calculate.percentage(x,y) // return percentage of x in y.
// ​
        percentage(){return this.x/this.y*100}
// calculate.add(x, y) // Returns the sum of x added to y.
// ​
        sum(){return this.x+this.y}
// calculate.subtract(x, y) // Returns the differente of y subtracted to x.
// ​
        subtract(){return this.y-this.x}
// calculate.multiply(x, y) // Returns the product of x multiplied by y.
// ​
        multiply(){return this.y*this.x}
// calculate.divide(x, y) // Returns the quotient of x divided by y. WARNING: If the divisor is set to 0, an error will be thrown.
// ​
        devide(){
            if(this.y==0){
                return 0
            }else {return this.x/this.y}
        }
// calculate.modulation(x, y) // Returns the remainder of x divided by y. WARNING: If the divisor is set to 0, an error will be thrown.
// ​
        remainder(){
            if(this.x==0){
                return this.x
            }else{
                return this.x%this.y
            }
        }
// calculate.elevate(x, y) // Returns the power of x elevated to y.
// ​
        power(){return Math.pow(this.x,this.y)}
// calculate.sqrt(x) // Returns the square root of x.s
        squareRoot(){return Math.sqrt(this.x)}

}
const firstcalc = new Calculator(4,4,10)
console.log(firstcalc);
console.log(firstcalc.ratio());
console.log(firstcalc.percentage());
console.log(firstcalc.sum());
console.log(firstcalc.subtract());
console.log(firstcalc.multiply());
console.log(firstcalc.devide());
console.log(firstcalc.remainder());
console.log(firstcalc.power());
console.log(firstcalc.squareRoot());