import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

let myShape = new Shape(10,15);
let myCircle = new Circle(5,10,15);
let myRectangle = new Rectangle(0,0,5,10);

//declare an rray of shape... initially empty
let theShapes: Shape[]= [];

//add the shape to array
theShapes.push(myShape);
theShapes.push(myCircle);
theShapes.push(myRectangle);

for(let tempShape of theShapes){
    console.log(tempShape.getInfo());
}