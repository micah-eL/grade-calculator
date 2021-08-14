var currentMode = "dark";
var currentCalcMode = "cgpa";
var cgpaPaneBtn = document.getElementById("selectCgpaCalcBtn");
var targetCgpaPaneBtn = document.getElementById("selectTargetCgpaCalcBtn");
var cgpaPane = document.getElementById("cgpaPane");
var targetCgpaPane = document.getElementById("targetCgpaPane");
var cgpaPaneForm = document.getElementById("cgpaPaneForm");
var targetCgpaPaneForm = document.getElementById("targetCgpaPaneForm");
var cgpaPaneResult = document.getElementById("cgpaPaneResult");
var targetCgpaPaneResult = document.getElementById("targetCgpaPaneResult");


const toggleLightDarkMode = document.getElementById("toggleMode");
toggleLightDarkMode.addEventListener("click", function() {
    if (currentMode == "dark") {
        document.body.classList.add("body-light");
        currentMode = "light";
        this.textContent = "I'm normal";
        if (currentCalcMode == "cgpa") {
            cgpaPaneBtn.classList.remove("dark-selected-btn");
            cgpaPane.classList.remove("dark-pane-border");
            cgpaPaneBtn.classList.add("light-selected-btn");
            cgpaPane.classList.add("light-pane-border");
        } else {
            targetCgpaPaneBtn.classList.remove("dark-selected-btn");
            targetCgpaPane.classList.remove("dark-pane-border");
            targetCgpaPaneBtn.classList.add("light-selected-btn");
            targetCgpaPane.classList.add("light-pane-border");
        }
    } else {
        document.body.classList.remove("body-light");
        currentMode = "dark";
        this.textContent = "Hit me with a flashbang";
        if (currentCalcMode == "cgpa") {
            cgpaPaneBtn.classList.remove("light-selected-btn");
            cgpaPane.classList.remove("light-pane-border");
            cgpaPaneBtn.classList.add("dark-selected-btn");
            cgpaPane.classList.add("dark-pane-border");
        } else {
            targetCgpaPaneBtn.classList.remove("light-selected-btn");
            targetCgpaPane.classList.remove("light-pane-border");
            targetCgpaPaneBtn.classList.add("dark-selected-btn");
            targetCgpaPane.classList.add("dark-pane-border");
        }
    }
});

function openCgpaPane() {
    currentCalcMode = "cgpa";

    cgpaPane.style.display = "block";
    targetCgpaPane.style.display = "none";

    if (currentMode == "dark") {
        cgpaPaneBtn.classList.add("dark-selected-btn");
        targetCgpaPaneBtn.classList.remove("dark-selected-btn");
        cgpaPane.classList.add("dark-pane-border");
        targetCgpaPane.classList.remove("dark-pane-border");
    } else {
        cgpaPaneBtn.classList.add("light-selected-btn");
        targetCgpaPaneBtn.classList.remove("light-selected-btn");
        cgpaPane.classList.add("light-pane-border");
        targetCgpaPane.classList.remove("light-pane-border");
    }
}

function openTargetCgpaPane() {
    currentCalcMode = "targetCgpa";

    cgpaPane.style.display = "none";
    targetCgpaPane.style.display = "block";

    if (currentMode == "dark") {
        cgpaPaneBtn.classList.remove("dark-selected-btn");
        cgpaPane.classList.remove("dark-pane-border");
        targetCgpaPaneBtn.classList.add("dark-selected-btn");
        targetCgpaPane.classList.add("dark-pane-border");
    } else {
        cgpaPaneBtn.classList.remove("light-selected-btn");
        cgpaPane.classList.remove("light-pane-border");
        targetCgpaPaneBtn.classList.add("light-selected-btn");
        targetCgpaPane.classList.add("light-pane-border");
    } 
}

function calculateCgpa() {
    var currentCgpa = document.getElementById("currCgpa").value;
    var totalUnits = parseInt(document.getElementById("unitsAttempted").value);
    var course1grade = document.getElementById("anticipatedGrade-c1").value;
    var course1units = parseInt(document.getElementById("units-c1").value);
    var course2grade = document.getElementById("anticipatedGrade-c2").value;
    var course2units = parseInt(document.getElementById("units-c2").value);
    var course3grade = document.getElementById("anticipatedGrade-c3").value;
    var course3units = parseInt(document.getElementById("units-c3").value);
    var course4grade = document.getElementById("anticipatedGrade-c4").value;
    var course4units = parseInt(document.getElementById("units-c4").value);

    var calculatedGradePoints = currentCgpa * totalUnits + course1grade * course1units + course2grade * course2units + course3grade * course3units + course4grade * course4units;
    var calculatedUnits = totalUnits + course1units + course2units + course3units + course4units;
    var calculatedCgpa = (calculatedGradePoints/calculatedUnits).toFixed(2);

    if (currentCgpa == 0 && totalUnits == 0) {
        document.getElementById("calculatedCgpa").textContent = "Your current GPA is: " + calculatedCgpa;
    } else {
        document.getElementById("calculatedCgpa").textContent = "Your current CGPA is: " + calculatedCgpa;
    }

    cgpaPaneResult.style.display = "block";
}

function resetCalculateCgpa() {
    cgpaPaneResult.style.display = "none";
    cgpaPaneForm.reset();
}

function calculateTargetCgpa() {
    var currentCgpa = document.getElementById("currCgpaForTarget").value;
    var totalUnits = parseInt(document.getElementById("unitsAttemptedForTarget").value);
    var currUnits = parseInt(document.getElementById("currUnits").value);
    var targetCgpa = document.getElementById("targetCgpa").value;

    var a = targetCgpa * (currUnits + totalUnits) - currentCgpa * totalUnits;
    var b = (a/currUnits).toFixed(2);

    if (parseInt(b) > 4.33) {
        document.getElementById("calculatedTargetCgpa").textContent = "The target CGPA cannot be achieved within the next semester."
    } else {
        document.getElementById("calculatedTargetCgpa").textContent = "The GPA you need in the upcoming semester to reach your target CGPA is: " + b;
    }

    targetCgpaPaneResult.style.display = "block";
}

function resetCalculateTargetCgpa() {
    targetCgpaPaneResult.style.display = "none";
    targetCgpaPaneForm.reset();
}