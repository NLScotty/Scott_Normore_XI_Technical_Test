import { Card } from "./Card.js";
import { TwoByTwoBoardSolver } from "./TwoByTwoBoardSolver.js";
import { ThreeByThreeBoardSolver } from "./ThreeByThreeBoardSolver.js";

let card1 = new Card("D1","A2","B2","C1",0,1);
let card2 = new Card("C1","B1","C2","D2",0,2);
let card3 = new Card("A1","B1","C2","D2",0,3);
let card4 = new Card("C1","B1","A2","D2",0,4);
let card5 = new Card("A1","D1","A2","B2",0,5);
let card6 = new Card("A2","C2","D1","A1",0,6);
let card7 = new Card("A1","C2","A2","D1",0,7);
let card8 = new Card("B1","C2","B2","D1",0,8);
let card9 = new Card("D1","C2","A2","B1",0,9);

console.log("Problem One Solutions");
let solver1 = new TwoByTwoBoardSolver(card4,card5,card6,card7);
console.log(solver1.results);

let solver2 = new ThreeByThreeBoardSolver(card1,card2,card3,card4,card5,card6,card7,card8,card9);
console.log("Problem Two Solutions");
console.log(solver2.results);
