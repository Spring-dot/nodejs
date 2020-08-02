var rect = require('./rectangle');


function solveRect(l,b) {
    console.log("Solving for rectangle with l = " + l + " and b = " + b);
    if (l <= 0 || b <=0) {
        console.log("Rectangle dimensions should be greater than zero: l = " + l + ", and b = " + b);

    }
    else {
        console.log("the are of the rectangle is " + rect.area(l, b));
        console.log(" the perimeter of rectangle is " + rect.perimeter(l,b));

    }
}

solveRect(2,4);
solveRect(4,5);
solveRect(-1, 0);
solveRect(0,0);