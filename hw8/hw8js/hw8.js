class StudentInfo {
    constructor(university, course, fullName) {
        this.university = university,
            this.course = course,
            this.fullName = fullName,
            this.marks = [5, 4, 4, 5],
            this.dismiss = false
    }
    getInfo() {
        return `Студент ${this.course}-го курсу, ${this.university}, студент: ${this.fullName}`;
    }
    dismiss() {
        this.dismiss = true;
    }
    recover() {
        this.dismiss = false;
    }
    set stdntMarks(value) {
        if (!this.dismiss) {
            this.marks.push(value);
        }
    }
    get stdntMarks() {
        if (!this.dismiss) {
            return this.marks;
        }
        else {
            return null;
        }
    }
    getAverageMark() {
        return this.marks.reduce((a, b) => (a + b)) / this.marks.length;
    }
}
class BudgetStudent extends StudentInfo {
    constructor(university, course, fullName) {
        super(university, course, fullName);
        setInterval(() => this.getScholarship(1400), 30000);
    }
    getScholarship(value) {
        if (!this.dismiss && this.getAverageMark() >= 4) {
            console.log(`Студент ${this.fullName}, отримав стипендію ${value}`);
        }
    }
}
const studentData = new StudentInfo('Західноукраїнського Економіко-Правничого Університу', 1, 'Микола Біб');
studentData.stdntMarks = 4;
console.log(studentData.getInfo());
console.log(studentData.getAverageMark());
console.log(studentData);
const studentData2 = new BudgetStudent('Західноукраїнського Економіко-Правничого Університу', 1, 'Микола Біб');
studentData2.getScholarship(1400);