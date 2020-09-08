// Hamburger Helper Functions

// Turn up
// Get Teacher Name from input field and go to pin generate form
function goSessionDashboard() {
  var hideElement = document.getElementById("teacherAuth");
  var showElement = document.getElementById("sessionDash");

  hideElement.classList.remove("active");
  hideElement.classList.add("inactive");

  showElement.classList.remove("inactive");
  showElement.classList.add("active");

  var name = document.getElementById("teacher_name").value;
  document.getElementById("teacher_name_confirmed").innerHTML = name;
}

// Generate a PIN fo sho and ADD to input field
function generatePin() {
  var pinNumber = Math.floor(1000 + Math.random() * 9000);
  var pinField = document.getElementById("session_pin");

  pinField.value = pinNumber;
}

// Dolla Dolla bills
// sessionStarted class added to containers
// if no pin generated show error text
function goStudentAttendance() {
  var pinField = document.getElementById("session_pin");
  var pinNumber = document.getElementById("session_pin").value;
  var pinFieldError = document.getElementById("sessionPinError");
  var hideElement = document.getElementById("sessionDash");
  var showElement = document.getElementById("studentAttendance");
  var showDash = document.getElementById("teacherDash");
  var showStudents = document.getElementById("authenticationContainer");

    if (pinField.value == null || pinField.value == "") {
      pinFieldError.classList.remove("inactive");
        return false;
    } else {

      document.getElementById("currentSession").innerHTML = pinNumber;

      hideElement.classList.remove("active");
      hideElement.classList.add("inactive");

      showElement.classList.remove("inactive");
      showElement.classList.add("active", "sessionStarted");

      showDash.classList.remove("inactive");
      showDash.classList.add("active", "sessionStarted");

      showStudents.classList.add("sessionStarted");

      document.getElementById("session_end").classList.remove("inactive");
    }
}

// Student Accept Function let students join
// Default 'status-waiting' set for all students waiting join
// Accepted attribute added and 'status-accepted' class added to replace default to student list item
// Once student joined into session 'status-unmuted' can be added to talk
function toggleAccept(elem) {
  var btn = elem.parentNode;

  if (btn.hasAttribute("accepted")) {
    btn.classList.toggle("status-accepted");
    btn.classList.toggle("status-unmuted");
  } else {
    btn.classList.remove("status-waiting");
    btn.classList.add("status-accepted");
    btn.setAttribute("accepted", "true");
  }
}

// TEACHER select your student to direction
// Toggle 'selected' class for button click state
function goTeacherSelect() {
  var selectTeacher = document.getElementById("teacherSelect");
  selectTeacher.classList.toggle("selected");
}

// Teacher Select and Push to Talk buttons
// Toggle 'selected' class to button on click
// Add 'active' class to talk button container
// Add 'enabled' class to highlight the status
// Toggle inner text for the status that is active
function goTeacherStatus() {
  var selectTalk = document.getElementById("pushToTalk");
  var liveBtn = document.getElementById("liveButton");
  var liveBtnContainer = liveBtn.parentNode;
  var mutedBtn = document.getElementById("mutedButton");
  var mutedBtnContainer = mutedBtn.parentNode;

    if (selectTalk.classList.contains("selected") == true) {

      selectTalk.classList.remove("selected");
      liveBtn.classList.remove("enabled");
      liveBtnContainer.classList.remove("active");
      liveBtn.innerHTML = "";
      mutedBtn.classList.add("enabled");
      mutedBtnContainer.classList.add("active");
      mutedBtn.innerHTML = "MUTED";

    } else {

      selectTalk.classList.add("selected");
      liveBtn.classList.add("enabled");
      liveBtnContainer.classList.add("active");
      liveBtn.innerHTML = "LIVE";
      mutedBtn.classList.remove("enabled");
      mutedBtnContainer.classList.remove("active");
      mutedBtn.innerHTML = "";

    }
}

// Accept all students into session
// Accepted attribute added and 'status-accepted' class added to replace default to ALL student list items
// Add disabled attribute once button is clicked
function acceptAllStudents() {

  document.getElementById("acceptAll").disabled = true;
  var allStudents = document.querySelectorAll(".student");

    for (i = 0; i < allStudents.length; i++) {
      allStudents[i].setAttribute("accepted", "true");
      allStudents[i].classList.remove("status-waiting");
      allStudents[i].classList.add("status-accepted");
    }
}

// Mute all button
// Toggle 'status-unmuted' class for all student list items
function goMuteAll() {
  var allStudents = document.querySelectorAll(".student");
  var selectElement = document.getElementById("muteAll");
  var elementText = document.getElementById("muteAllText");

  document.getElementById("studentSpeaking").classList.remove("inactive");

  for (i = 0; i < allStudents.length; i++) {
    allStudents[i].classList.toggle("status-accepted");
    allStudents[i].classList.toggle("status-unmuted");
  }

    selectElement.classList.toggle("selected");

    if (elementText.innerHTML == "CLICK TO UNMUTE") {
      elementText.innerHTML = "CLICK TO MUTE ALL";
    } else {
      elementText.innerHTML = "CLICK TO UNMUTE";
    }

}

// Drop it like its what
// Prevent default drop action
// Drop Zone icon animation initiated with 'deleting' class
// Removes 'status-accepted' and/or 'status-unmuted' class from student item(s)
// Adds default class of 'status-waiting' removes 'Accepted' attribute
function allowDrop(event) {
  event.preventDefault();
    var deleteDropBox = document.getElementById("deleteDrop");
    deleteDropBox.classList.add("deleting");
}
function dragLeave(event) {
  var deleteDropBox = document.getElementById("deleteDrop");
  deleteDropBox.classList.remove("deleting");
}
function drag(ev) {
  ev.dataTransfer.setData("Text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
    var deleteDropBox = document.getElementById("deleteDrop");
    var studentId = ev.dataTransfer.getData("Text");
    var studentSelected = document.getElementById(studentId);

      deleteDropBox.classList.remove("deleting");
      studentSelected.classList.remove("status-accepted", "status-unmuted");
      studentSelected.classList.add("status-waiting");
      studentSelected.removeAttribute("accepted", "false");
      console.log('A Student has been deleted');
}

// Student Name
// Grab that shiz biz
// hide the form and display PIN form, show that name
function goPinEnter() {
  var hideElement = document.getElementById("studentAuthLogin");
  var showElement = document.getElementById("studentPinLogin");
  var fName = document.getElementById("student_first_name").value;
  var nameError = document.getElementById("nameErrorMessage");

  if (fName == "") {

    document.getElementById("nameErrorMessage").innerHTML = "Please enter a name to begin";
      return false;

  } else {

    hideElement.classList.remove("active");
    hideElement.classList.add("inactive");

    showElement.classList.remove("inactive");
    showElement.classList.add("active");

    document.getElementById("student_name_confirmed").innerHTML = fName;
  }
}

// BOOM Session lit af
// MATCH user initials and set variable for later use in user profile icon
// Validation of PIN field
// ENTER PIN 1234 FOR TEST
// Valid PIN, EMPTY PIN check and display error if FAILS if passed goto Student Dashboard
function goStudentSession() {
  var userName = document.getElementById("student_name_confirmed").innerHTML;
  var userInitials = userName.match(/\b(\w)/g);
  var userProfileIntials = userInitials.join('');
  var sessionPin = document.getElementById("session_pin").value;

  var studentAuthContainer = document.getElementById("studentPortalLogin");
  var authenticationContainer = document.getElementById("studentAuthentication");
  var userDashboard = document.getElementById("studentDashboard");

  if (sessionPin == 0) {
    document.getElementById("pinErrorMessage").innerHTML = "Please enter a PIN number to continue";
      return false;

  } else if (sessionPin != "1234") {
    document.getElementById("pinErrorMessage").innerHTML = "The PIN number you entered is not valid<br />Please try again";
      return false;

  } else if (sessionPin == "1234") {
    authenticationContainer.classList.remove("active");
    authenticationContainer.classList.add("inactive");
    userDashboard.classList.remove("inactive");
    userDashboard.classList.add("sessionStarted", "active");
      document.getElementById("userName").innerHTML = userName;
      document.getElementById("userInitials").innerHTML = userProfileIntials;

      return true;

  } else {
    alert('I do not know what happenned.');
      return false

  }

}

// Greetings True Believers!
// Show Audio Dashboard Controls on after records
// Add 'recording' class on button press, remove when depressed
// Delete Recording Dashboard Controls if #studentProfileDelete button presses
// Continue to App Screen
function goRecordGreeting() {
  var studentProfileAudioDashboard = document.getElementById("studentProfileAudio");
    studentProfileAudioDashboard.classList.remove("inactive");
    studentProfileAudioDashboard.classList.add("active");
}
function recordingStart() {
  document.getElementById("studentProfileGreeting").classList.add("recording");
}
function recordingEnd() {
  document.getElementById("studentProfileGreeting").classList.remove("recording");
}
function deleteRecording() {
  var studentProfileAudioDashboard = document.getElementById("studentProfileAudio");
    studentProfileAudioDashboard.classList.remove("active");
    studentProfileAudioDashboard.classList.add("inactive");
}


// START STUDENT AUDIO CONTROLS
//
function goStudentAppControl() {
  var studentProfileControl = document.getElementById("profileControl");
  var studentAppControl = document.getElementById("appControl");

    studentProfileControl.classList.remove("active");
    studentProfileControl.classList.add("inactive");
    studentAppControl.classList.remove("inactive");
    studentAppControl.classList.add("active");
}

// WITH MONEY ON MY MIND IT NEVER SEEMS ENOUGH ENOUGH
// EVERYTIME I STEP IN THE BUILDING'
// EVERYONE'S HANDS GO UP
// ADD 'Active' class to Raise Hand Button container
// ADD 'Enabled' class to Raise Hand Button
// Click button#raiseHandButton to enable "push to talk"
// Toggle text for "button#liveButton" and Toggle disabled attribute
function goRaiseHand() {
  var talkButton = document.getElementById("liveButton");
  var talkButtonContainer = talkButton.parentNode;
  var raiseHandButton = document.getElementById("raiseHandButton");
  var raiseHandButtonContainer = raiseHandButton.parentNode;
  var mutedButton = document.getElementById("mutedButton");
  var mutedButtonContainer = mutedButton.parentNode;



    raiseHandButtonContainer.classList.toggle("active");
    raiseHandButton.classList.toggle("enabled");
    mutedButton.disabled = true;
    mutedButton.innerHTML = "";
    mutedButton.classList.remove("enabled");
    mutedButtonContainer.classList.remove("active");
    talkButtonContainer.classList.add("active");
    talkButton.classList.add("enabled");

    if (raiseHandButton.innerHTML === "") {
      raiseHandButton.innerHTML = "Hand Raised";
    } else {
      raiseHandButton.innerHTML = "";
    }

    if (talkButton.innerHTML === "Live") {
      talkButton.disabled = false;
      talkButton.innerHTML = "Push to talk";
    } else {
      talkButton.disabled = true;
      talkButton.innerHTML = "Live";
    }
}

// SAY SOMETHING
// Enable 'Talking' class on button#liveButton
// Toggle Text
function goTalk() {
  var talkButton = document.getElementById("liveButton");

    talkButton.classList.toggle("talking");

    if (talkButton.innerHTML === "Push to talk") {
      talkButton.innerHTML = "Click to top";
    } else {
      talkButton.innerHTML = "Push to talk";
    }

}

// SIT DOWN AND SHUTUP! NO YELLING ON THE BUS
// Mute STATUS updated
// ADD 'active' class to button#mutedButton containers
// ADD 'enabled' class and disabled attribute to button#mutedButton
function goMute() {
  var mutedButton = document.getElementById("mutedButton");
  var mutedButtonContainer = mutedButton.parentNode;
  var talkButton = document.getElementById("liveButton");
  var talkButtonContainer = talkButton.parentNode;

    if (mutedButton.innerHTML === "") {

      mutedButtonContainer.classList.add("active");
      mutedButton.innerHTML = "Muted";
      mutedButton.classList.add("enabled");
      mutedButton.disabled = false;
      talkButtonContainer.classList.remove("active");
      talkButton.classList.remove("enabled");
      talkButton.innerHTML = "";

    } else {

      mutedButtonContainer.classList.remove("active");
      mutedButton.innerHTML = "";
      mutedButton.classList.remove("enabled");
      mutedButton.disabled = true;
      talkButtonContainer.classList.add("active");
      talkButton.classList.add("enabled");
      talkButton.innerHTML = "Live";

    }

}

// ECHO REDUCTION SLIDER
// CONSOLE LOG ECHO REDUCTION AMOUNT
// Label class change for mouse event
// TEST IF INPUT UI IS WORKING
  var echoSlider = document.getElementById("echoReduction");
  var echoSliderLabels= document.getElementById("low");
  var echoSliderLabelLow = document.getElementById("low");
  var echoSliderLabelMed = document.getElementById("med");
  var echoSliderLabelHigh = document.getElementById("high");

    console.info(echoSlider.defaultValue);

  echoSlider.onchange = function () {
    console.info(echoSlider.value);

    if (echoSlider.value > 0 && echoSlider.value < 33) {
      echoSliderLabelLow.classList.add("selected");
      echoSliderLabelMed.classList.remove("selected");
      echoSliderLabelHigh.classList.remove("selected");
    } else if (echoSlider.value > 33 && echoSlider.value < 66) {
      echoSliderLabelLow.classList.remove("selected");
      echoSliderLabelMed.classList.add("selected");
      echoSliderLabelHigh.classList.remove("selected");
    } else if (echoSlider.value > 66 && echoSlider.value < 101) {
      echoSliderLabelLow.classList.remove("selected");
      echoSliderLabelMed.classList.remove("selected");
      echoSliderLabelHigh.classList.add("selected");
    }

  };
