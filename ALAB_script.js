//PART 1: "GROWING PAINS" 
// BASICALLY IF ELSE

// Your task is to create a program that advises a group of environmental scientists how to
// handle the growth and spread of a unique plant species under their supervision. 
// You must develop a growth control system that will monitor and predict the plant growth, 
// making decisions based on the available space and potential growth.
// Here is the information you have been given:
// The area in which the plants are contained is circular, with a radius of 5 meters.
// The formula for calculating the area of a circle is PI multiplied by the radius, squared:
// const PI = 3.1415;
// const area = PI * radius * radius;
// Each plant requires a minimum space of 0.8 square meters.

console.log("--- Part 1: Growing Pains ---");

const PI = 3.1415;  
const radius = 5;
//minimum space of a single plant
const plantSpaceReq = 0.8;
//Area space for plants
const area = PI * radius * radius; //78.5375
//starting number of plants
let plantcount = 20;
const capacity = area / plantSpaceReq;


// The area is starting with 20 plants.
// The plants double in number every week.
//Let's make a variable for weeks
let week1 = plantcount * 2;       // 40 plants after week 1
let week2 = plantcount * 4;       // 80 plants after week 2
let week3 = plantcount * 8;       // 160 plants after week 3
//Can I divide plantspace into area by the number of weeks?
//console.log(area / week1count);  

//I need to multiply plantcount by plantSpaceReq then divide by area
console.log("========Weekly Results======");
// console.log((week1 * plantSpaceReq) / area); //.40744867101703003 but what does that mean??
//ahhhh it's about 40.7% Percent!....good to know. Now we need to do this
//for the other weeks.
let week1count = (week1 * plantSpaceReq) / area;
let week2count = (week2 * plantSpaceReq) / area;
let week3count = (week3 * plantSpaceReq) / area;
// Using this information, your objectives are to:
// Predict the plant growth after a specific number of weeks.
// Implement control flow to make decisions on whether the plants 
// should be: Pruned, to stop them from exceeding the capacity 
// of the garden.
// This condition should be met if the plant count after the given
//  number of weeks is greater than 80% of the maximum capacity
//  of the garden.
// Monitored, if they are growing at an acceptable rate.
// This condition should be met if the plant count is between 
// 50% and 80% of the maximum capacity of the garden after the
//  given number of weeks.
// Planted, if there is room to plant more plants.
// This condition should be met if the plant count after the 
// given number of weeks is less than 50% of the maximum capacity
// of the garden.Within your submission, include the results for
// 1, 2, and 3 weeks of growth as inputs.
//here we go...
// if (week1count >= .80 || week2count >= .80 || week3count >= .80); {
//     console.log("Prune Garden")
// } if else (week1count >= .50 || week2count >= .50 || week3count >= .50); {
//     console.log("Monitor Garden");
// } if else (week1count <= .50 || week2count <= .50 || week3count <= .50); {
//     console.log("Planted");
// }
//didn't work....we'll try making all weeks at once
if (week1count >= 0.80) {
    console.log("Week 1: Prune Garden");
} else if (week1count >= 0.50) {
    console.log("Week 1: Monitor Garden");
} else {
    console.log("Week 1: Plant More");
}

if (week2count >= 0.80) {
    console.log("Week 2: Prune Garden");
} else if (week2count >= 0.50) {
    console.log("Week 2: Monitor Garden");
} else {
    console.log("Week 2: Plant More");
}

if (week3count >= 0.80) {
    console.log("Week 3: Prune Garden");
} else if (week3count >= 0.50) {
    console.log("Week 3: Monitor Garden");
} else {
    console.log("Week 3: Plant More");
}

console.log("==========Weekly Metrics===========");
console.log(week1,"plants");
console.log(week2,"plants");
console.log(week3,"plants");

// console.log('Area: ', area);
// console.log(plantSpaceReq + radius);
// if (true) {
//     console.log('Prune')
// } else if (true) {
//     console.log('Monitor')
// } else {
//     console.log('Planted')
// } 

console.log("================Part 2: Thinking Bigger======================")

// Using the logic you have already created, determine:
// The amount of additional space that would be required if the 
// scientists were to start with 100 plants, and did not prune them
// for 10 weeks.
// If the space remained circular, what would be the radius of this
// expanded garden?
    let startPlants = 100;
    let week10 = startPlants * Math.pow(2, 10);
    let week10space = week10 * plantSpaceReq;
    let requiredRadius = Math.sqrt(week10space / PI);
console.log("======Week 10 Unpruned Count======");
console.log(week10, "plants");
console.log("Required area:", week10space, "sq meters");
console.log("Required radius:", requiredRadius.toFixed(2), "meters");


