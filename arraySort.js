var students = [
  { name: 'A', score: 100 },
  { name: 'B', score: 10 },
  { name: 'C', score: 101 },
  { name: 'D', score: 50 },
  { name: 'E', score: 75 }
];

function getTopStudents(students) {
    // Write code here...
  students.sort(function(a,b) {return b.score - a.score});
  var s = students.slice(0,3);
  var map = s.map(function(x){return x.name});
  return map;
  }

  getTopStudents(students)

