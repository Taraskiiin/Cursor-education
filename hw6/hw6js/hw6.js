const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
        math: [4, 4, 3, 4],
        algorithms: [3, 3, 3, 4, 4, 4],
        data_science: [5, 5, 3, 4]
    }
}, {
    name: "Victor",
    course: 4,
    subjects: {
        physics: [5, 5, 5, 3],
        economics: [2, 3, 3, 3, 3, 5],
        geometry: [5, 5, 2, 3, 5]
    }
}, {
    name: "Anton",
    course: 2,
    subjects: {
        statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
        english: [5, 3],
        cosmology: [5, 5, 5, 5]
    }
}];
//Task 1
const getSubjects = (student) => {
    return Object.keys(student.subjects).map(el => {
        return el[0].toUpperCase() + el.slice(1).replace('_', ' ')
    });
}
console.log(getSubjects(students[0]));
//Task 2
const getAverageMark = (student) => {
    const average = Object.values(student.subjects).flat();
    return (average.reduce((a, b) => (a + b)) / average.length).toFixed(2);
}
const task2Result = getAverageMark(students[0]);
console.log(task2Result);
//Task 3
const getStudentInfo = (student) => {
    const studentInfo = {
        course: student.course,
        name: student.name,
        averageMark: getAverageMark(student),
    };
    return studentInfo;
}
console.log(getStudentInfo(students[0]));
//Task 4
const getStudentsNames = (students) => {
    const studentsList = students.map(el => el.name);
    return studentsList.sort();
}
console.log(getStudentsNames(students));
//Task 5
const getBestStudent = (students) => {
    const success = [];
    let best = 0;
    let max = 0;
    Object.keys(students).forEach(el => {
        success.push(parseFloat(getAverageMark(students[el])));
        if (max < success[el]) {
            best = el;
            max = success[el];
        }
    });
    return students[best].name;
}
console.log(getBestStudent(students));
// Task 6
function calculateWordLetters(text) {
    const modeMap = {};
    const enterStr = text.split('');
    enterStr.forEach(current => {
        modeMap[current] = enterStr.filter(el => el === current).length;
    });
    return modeMap;
}
const text = prompt('Веддіть фразу!');
console.log(calculateWordLetters(text));