function getPairs(students) {
    const sizeOfTeam = 2;
    let pairsOfStudents = [];
    for (let i = 0; i < Math.ceil((students.length) / sizeOfTeam); i++) {
        pairsOfStudents[i] = students.slice((i * sizeOfTeam), (i * sizeOfTeam) + sizeOfTeam);
    }
    return pairsOfStudents;
}
function getThemes(themes, pairs) {
    let themesForStudent = [];
    for (i = 0; i < pairs.length; i++) {
        themesForStudent.push([pairs[i].join(' и '), themes[i]]);
    }
    return themesForStudent;
}
function getMarks(marks, students) {
    let marksForStudents = [];
    for (i = 0; i < students.length; i++) {
        marksForStudents.push([students[i], marks[i]]);
    }
    return marksForStudents;
}
function getRandomMark(themesForTeams){
    let pairsRandomMarks = [];
    const max = 5;
    const min = 1;
    for (i=0; i < themesForTeams.length; i++){
        pairsRandomMarks.push([themesForTeams[i].join(), (Math.floor(Math.random()*(max - min +1) + min))]);
    }
    return pairsRandomMarks;
}
const students = ["Саша", "Игорь", "Лена", "Ира", "Алексей", "Светлана"];
const themes = ["Дифференциальные уравнения", "Теория автоматов", "Алгоритмы и структуры данных"];
const marks = [4, 5, 5, 3, 4, 5];
const pairs = getPairs(students);
const themesForTeams = getThemes(themes, pairs);
const marksForStudents = getMarks(marks, students);
const marksForPairs = getRandomMark (themesForTeams);
document.write(`${pairs} \n 
${themesForTeams} \n 
${marksForStudents} \n 
${marksForPairs}`);
console.log(pairs,themesForTeams,marksForStudents,marksForPairs);

