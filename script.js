var mode = 'math';
var feedbacks = [];

function add() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    if (num1 === 2763 && num2 === 2763) {
        window.location.href = "https://youtu.be/YQa2-DY7Y_Q?si=uchzeEgCf6ymmVuc";
    } else {
        document.getElementById("result").textContent = "Result: " + (num1 + num2);
    }
}

function subtract() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("result").textContent = "Result: " + (num1 - num2);
}

function multiply() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("result").textContent = "Result: " + (num1 * num2);
}

function divide() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    if (num2 === 0) {
        document.getElementById("result").textContent = "Cannot divide by zero!";
    } else {
        document.getElementById("result").textContent = "Result: " + (num1 / num2);
    }
}

function square() {
    var num1 = parseFloat(document.getElementById("num1").value);
    document.getElementById("result").textContent = "Result: " + (num1 * num1);
}

function squareRoot() {
    var num1 = parseFloat(document.getElementById("num1").value);
    if (num1 >= 0) {
        document.getElementById("result").textContent = "Result: " + Math.sqrt(num1);
    } else {
        document.getElementById("result").textContent = "Result: Invalid input";
    }
}

function power() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("result").textContent = "Result: " + Math.pow(num1, num2);
}

function absolute() {
    var num1 = parseFloat(document.getElementById("num1").value);
    document.getElementById("result").textContent = "Result: " + Math.abs(num1);
}

function switchMode() {
    if (mode === 'math') {
        mode = 'date';
        document.getElementById("num1").type = "date";
        document.getElementById("num2").type = "date";
        document.getElementById("timeMode").style.display = "block";
    } else {
        mode = 'math';
        document.getElementById("num1").type = "number";
        document.getElementById("num2").type = "number";
        document.getElementById("timeMode").style.display = "none";
    }
    document.getElementById("result").textContent = "";
}

function calculateTimeDuration() {
    var time1 = document.getElementById("time1").value;
    var time2 = document.getElementById("time2").value;
    var [hours1, minutes1] = time1.split(":").map(Number);
    var [hours2, minutes2] = time2.split(":").map(Number);
    var totalMinutes1 = hours1 * 60 + minutes1;
    var totalMinutes2 = hours2 * 60 + minutes2;
    var durationInMinutes = Math.abs(totalMinutes2 - totalMinutes1);
    var hours = Math.floor(durationInMinutes / 60);
    var minutes = durationInMinutes % 60;
    document.getElementById("result").textContent = "Duration: " + hours + " hours, " + minutes + " minutes";
}

function calculateDateDuration() {
    var date1 = new Date(document.getElementById("date1").value);
    var date2 = new Date(document.getElementById("date2").value);
    var duration = Math.abs(date2 - date1);
    var days = Math.floor(duration / (1000 * 60 * 60 * 24));
    var months = Math.floor(duration / (1000 * 60 * 60 * 24 * 30));
    var years = Math.floor(duration / (1000 * 60 * 60 * 24 * 365));
    document.getElementById("result").textContent = "Duration: " + years + " years, " + months + " months, " + days + " days";
}

function submitFeedback() {
    var feedback = document.getElementById("feedbackInput").value;
    if (feedback.trim() !== "") {
        feedbacks.push(feedback);
        displayFeedbacks();
        document.getElementById("feedbackInput").value = "";
        saveFeedbackToFile(feedback);
    }
}

function displayFeedbacks() {
    var feedbackList = document.getElementById("feedbackList");
    feedbackList.innerHTML = "";
    feedbacks.forEach(function(feedback, index) {
        var feedbackItem = document.createElement("div");
        feedbackItem.textContent = "Feedback " + (index + 1) + ": " + feedback;
        feedbackList.appendChild(feedbackItem);
    });
}

function saveFeedbackToFile(feedback) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "feedback.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("feedback=" + feedback);
                                                                  }
