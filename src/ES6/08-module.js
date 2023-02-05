import gretting from "./module.js";
import { salute, age, salute2 } from "./module.js";

gretting( salute, 'Jeffer');
gretting( salute2, 'Jeffer');

const Jeffer = {
    name: 'Jeffer',
    age: age
};


console.log(Jeffer);