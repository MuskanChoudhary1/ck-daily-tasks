var globalarr = [];


window.onload = function() {
  var savedData = localStorage.getItem("studentsData");
  if (savedData) {
    globalarr = JSON.parse(savedData);
    renderTable();
  }
};


// Add a student
document.getElementById("addStudentBtn").onclick = function() {
  var name = getStuName();
  if (name === null) return; 

  var marks = getStuMarks();
  if (marks === null) return; 

  var total = calcTotal(marks);
  var average = calcAvg(total, marks.length);

  var student = {
    name: name,
    marks: marks,
    total: total,
    average: average
  };

  globalarr.push(student);
  save();
  renderTable();
};



function getStuName() {
  var name = prompt("Enter Student Name");
  if (!name || name.trim() === "") {
    alert("Name cannot be empty");
    return null;
  }
  return name.trim();
}



function getStuMarks() {
  var marks = [];
  for (var i = 1; i <= 5; i++) {
    var mark = prompt("Enter marks for Subject " + i);
    mark = parseFloat(mark);

    if (!isValidMark(mark)) {
      alert("Invalid marks! Please enter a number between 0 and 100.");
      return null;
    }
    marks.push(mark);
  }
  return marks;
}



function isValidMark(mark) {
  return !(isNaN(mark) || mark < 0 || mark > 100);
}



function calcTotal(marksArray) {
  var sum = 0;
  for (var i = 0; i < marksArray.length; i++) {
    sum += marksArray[i];
  }
  return sum;
}



function calcAvg(total, count) {
  var avg = total / count;
  return parseFloat(avg.toFixed(2));
}



function save() {
  localStorage.setItem("studentsData", JSON.stringify(globalarr));
}



function renderTable() {
  var tbody = document.getElementById("tableBody");
  tbody.innerHTML = ""; 

  for (var i = 0; i < globalarr.length; i++) {
    var s = globalarr[i];
    var tr = document.createElement("tr");

    var nameTd = document.createElement("td");
    nameTd.textContent = s.name;
    tr.appendChild(nameTd);

    for (var j = 0; j < s.marks.length; j++) {
      var td = document.createElement("td");
      td.textContent = s.marks[j];
      tr.appendChild(td);
    }

    var totalTd = document.createElement("td");
    totalTd.textContent = s.total;
    tr.appendChild(totalTd);

    var avgTd = document.createElement("td");
    avgTd.textContent = s.average;
    tr.appendChild(avgTd);

    tbody.appendChild(tr);
  }
}
