var students = [];

function addStudent() {
  var name = document.getElementById("studentName").value;
  var score = document.getElementById("studentScore").value;

  if (name === "" || score === "") {
    alert("Please enter both name and score.");
    return;
  }

  var obj = {
    name: name,
    score: parseInt(score)
  };
  students.push(obj);

  document.getElementById("studentName").value = "";
  document.getElementById("studentScore").value = "";

  var list = document.getElementById("studentList");
  var li = document.createElement("li");
  li.innerText = obj.name + " - " + obj.score;
  list.appendChild(li);
}

function calculateAverage() {
  if (students.length === 0) {
    alert("No students added.");
    return;
  }

  var total = 0;
  for (var i = 0; i < students.length; i++) {
    total = total + students[i].score;
  }

  var avg = total / students.length;
  document.getElementById("avgScore").innerText = avg.toFixed(2);
}

function markPassed() {
  var list = document.getElementById("studentList");
  var items = list.getElementsByTagName("li");
  list.innerHTML = "";

  for (var i = 0; i < students.length; i++) {
    var li = document.createElement("li");
    li.innerText = students[i].name + " - " + students[i].score;
    if (students[i].score >= 50) {
      li.className = "pass";
    }
    list.appendChild(li);
  }
}

function markFailed() {
  var list = document.getElementById("studentList");
  var items = list.getElementsByTagName("li");
  list.innerHTML = "";

  for (var i = 0; i < students.length; i++) {
    var li = document.createElement("li");
    li.innerText = students[i].name + " - " + students[i].score;
    if (students[i].score < 50) {
      li.className = "fail";
    }
    list.appendChild(li);
  }
}

function resetApp() {
  students = [];
  document.getElementById("studentName").value = "";
  document.getElementById("studentScore").value = "";
  document.getElementById("studentList").innerHTML = "";
  document.getElementById("avgScore").innerText = "-";
}
