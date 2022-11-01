//Problem 1

let employeeInfo = [
{
    "firstName" : "Sam",
    "department" : "Tech",
    "designation" : "Manager",
    "salary" : "40,000",
    "raiseEligible" : "true"
},
{
    "firstName" : "Mary",
    "department" : "Finance",
    "designation" : "Trainee",
    "salary" : "18,500",
    "raiseEligible" : "true"
},
{
    "firstName" : "Bill",
    "department" : "HR",
    "designation" : "Executive",
    "salary" : "21,200",
    "raiseEligible" : "false"
}
]
console.log(employeeInfo);

//Problem 2

let companyInfo = 
{
    "companyName" : "Tech Stars",
    "website" : "www.techstars.site",
    "employees" : [
        {
            "firstName" : "Sam",
            "department" : "Tech",
            "designation" : "Manager",
            "salary" : 40,000,
            "raiseEligible" : true
        },
        {
            "firstName" : "Mary",
            "department" : "Finance",
            "designation" : "Trainee",
            "salary" : 18,500,
            "raiseEligible" : true
        },
        {
            "firstName" : "Bill",
            "department" : "HR",
            "designation" : "Executive",
            "salary" : 21,200,
            "raiseEligible" : false
        }
    ]
}

//Problem 3
let newEmployee = {
"first name": "Anna",
"department": "Tech",
"designation: "Executive",
"salary": 25600,
"raiseEligible": false
}
employeeInfo.push(newEmployee);
companyInfo.employees.push(newEmployee);
console.log(employeeInfo);
console.log (companyInfo);

//Problem 4
totalSalary = 0;
for (let i=0; i<companyInfo.employees.length; i++){
    totalSalary += companyInfo.employees[i].salary;
}
console.log(companyInfo)

//Problem 5
for (let i=0; i<companyInfo.employees.length; i++){
if (companyInfo['employees'][i]['raiseEligible']== true){
        companyInfo['employees'][i]['salary']= companyInfo['employees'][i]['salary'] + (companyInfo['employees'][i]['salary']*.1);
        companyInfo['employees'][i]['raiseEligible'] = false;
    }
    else{
        companyInfo['employees'][i]['salary']
    }
}
console.log(companyInfo)
//Problem 6
let workHome = ['Anna', 'Sam'];

for (let i=0; i<companyInfo.employees.length; i++){
    for (let n=0; n<workHome.length; n++) {
        if (companyInfo['employees'][i]['first name'].includes(workHome[n])) {
            companyInfo['employees'][i]['wfh'] = true;
        }
        else {
            companyInfo['employees'][i]['wfh'] = false; 
        }
    }
    n=1;
}

console.log(companyInfo);