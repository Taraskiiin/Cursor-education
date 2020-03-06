const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };
//........TASK 1.........
const getMyTaxes = function(salary){
    console.log(salary - salary * this.tax);
}
getMyTaxes.call(ukraine, 232);
getMyTaxes.call(latvia, 232);
getMyTaxes.call(litva, 232);
//........TASK 2.........
function getMiddleTaxes(){
    return (this.middleSalary * this.tax);
}
console.log(getMiddleTaxes.call(latvia));
//........TASK 3.........
function getTotalTaxes(){
    return this.tax * this.middleSalary * this.vacancies
}
console.log(getTotalTaxes.call(latvia));
//........TASK 4.........
function getMySalary(){
    setInterval(() => {
        const min = 1500;
        const max = 2000;
        const salary = Math.floor(Math.random() * (max - min) + min);
        console.log({
            salary: salary,
            taxes: salary * this.tax,
            profit: salary - salary * this.tax
        });
    }, 10000);
};
getMySalary.call(latvia)