// =====Class Inheritance=====
class schoolMember{
    name;
    subject;
    rank;
    constructor(name,subject,rank) {
        this.name = name;
        this.subject = subject;
        this.rank=rank
    }
}

class Teacher extends schoolMember{
    popularity;
    constructor(name,subject,rank,popularity) {
        super(name, subject, rank);
        this.popularity = popularity;
    }
    TeacherInformation() {
        console.log('This is From Teacher')
    }
}
class Students extends schoolMember{
    roll;
    constructor(name,subject,roll) {
        super(name, subject);
        this.roll = roll;
    }
    majorSubject(subjectName) {
        const returnText = `Hi Bro ${this.name} Roll:${this.roll} Welcome, Your Major Subject Name Is ${subjectName}`;
        return returnText;
    }
}
const studentsId = new Students('Jon', 01, 'science');
// console.log(studentsId);
// console.log(studentsId.majorSubject('Math'))
const fullInformation = new Students('jon',"arts",02).majorSubject('Bio')
// console.log(fullInformation);
const newMember = new Teacher('adc', 'math', 23, 'Normal');
// console.log(newMember);
const superStudent = new Students('KeepRolling', "Math", 1);
// console.log(superStudent);
//  console.log(fullInformation);

