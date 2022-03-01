
let job = ["painter","teacher","vet","banker"] ;
let city = ["Paris","NYC","London","Christchurch"];
let spouse = ["Sam","Eugene","Gray","Alex"];
let numKids = [3,2,1,0];
let home = ["mansion","apartment","shack","house"];

let number = Math.floor(Math.random() * 4);

function tellFortune(job,city,spouse,numKids,home){
document.write("You will be a " + job + " in " + city + " and be partners with " + spouse + " and have " + numKids + " kids and live in a " + home + ".");  
}

tellFortune (job[number],city[number],spouse[number],numKids[number],home[number]);


