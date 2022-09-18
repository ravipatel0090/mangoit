function validate() {
  let isVaild = true;

  // For first name

  var name = document.getElementById("fname");
  var nameerror = document.getElementById("error");
  var regex = /^[A-Z][a-z]{2,19}$/;
  if (regex.test(name.value)) {
    name.style.border = "black solid 1px";
    nameerror.innerHTML = "";
  } else {
    isVaild = false;
    name.style.border = "red solid 2px";
    nameerror.innerHTML =
      "Please enter valid name" + "<br/>" + "First letter should be capital";
    nameerror.style.color = "red";
    nameerror.style.fontSize = "0.9rem";
  }

  // For last name

  var lastname = document.getElementById("lname");
  var lasterror = document.getElementById("lasterror");
  var lastregex = /^[A-Z][a-z]{2,19}$/;
  if (lastregex.test(lastname.value)) {
    lastname.style.border = "black solid 1px";
    lasterror.innerHTML = "";
  } else {
    isVaild = false;
    lastname.style.border = "red solid 2px";
    lasterror.innerHTML =
      "Please enter valid last name" +
      "<br/>" +
      "First letter should be capital";
    lasterror.style.color = "red";
    lasterror.style.fontSize = "0.9rem";
  }

  // For email

  var emails = document.getElementById("email");
  var emailerror = document.getElementById("emailerror");
  var regemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (regemail.test(emails.value)) {
    emails.style.border = "black solid 1px";
    emailerror.innerHTML = "";
  } else {
    isVaild = false;
    emails.style.border = "red solid 2px";
    emailerror.innerHTML = "Please enter valid email id";
    emailerror.style.color = "red";
    emailerror.style.fontSize = "0.9rem";
  }

  //  For User-name

  var username = document.getElementById("uname");
  var usererror = document.getElementById("usererror");
  var userregex = /^[a-zA-Z0-9_]{3,}$/g;
  if (userregex.test(username.value)) {
    username.style.border = "black solid 1px";
    usererror.innerHTML = "";
  } else {
    isVaild = false;
    username.style.border = "red solid 2px";
    usererror.innerHTML =
      "Username should contains only aplhanum and underscore";
    usererror.style.color = "red";
    usererror.style.fontSize = "0.9rem";
  }

  // For Password

  var password = document.getElementById("pass");
  var passerror = document.getElementById("passerror");
  var passregex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

  if (passregex.test(password.value)) {
    password.style.border = "black solid 1px";
    passerror.innerHTML = "";
  } else {
    isVaild = false;
    password.style.border = "red solid 2px";
    passerror.innerHTML =
      "Password must contains atleast one uppercase,lowercase,one number and special char";
    passerror.style.color = "red";
    passerror.style.fontSize = "0.9rem";
  }

  // For Confirm Password

  var confpass = document.getElementById("cpass");
  var cpasserror = document.getElementById("cpasserror");
  if (password.value == confpass.value) {
    confpass.style.border = "black solid 1px";
    cpasserror.innerHTML = "";
  } else {
    isVaild = false;
    confpass.style.border = "red solid 2px";
    cpasserror.innerHTML = "Password not match";
    cpasserror.style.color = "red";
    cpasserror.style.fontSize = "0.9rem";
  }

  //  For URL

  var puturl = document.getElementById("url");
  var urlerr = document.getElementById("urlerror");
  var urlregx =
    /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/g;
  if (urlregx.test(puturl.value)) {
    puturl.style.border = "black solid 1px";
    urlerr.innerHTML = "";
  } else {
    isVaild = false;
    puturl.style.border = "red solid 2px";
    urlerr.innerHTML = "Enter valid URL";
    urlerr.style.color = "red";
    urlerr.style.fontSize = "0.9rem";
  }

  //  For Gender

  var maleBox = document.getElementById("male");
  var femaleBox = document.getElementById("female");
  var gendererror = document.getElementById("gendererror");

  if (!maleBox.checked && !femaleBox.checked) {
    isVaild = false;
    gendererror.innerHTML = "Please select vaild gender";
    gendererror.style.color = "red";
    gendererror.style.fontSize = "0.9rem";
  } else {
    gendererror.innerHTML = "";
  }

  // For Hobbies

  var check = document.getElementsByName("hoby");
  var hobyerror = document.getElementById("hobyerror");
    let count = 0;
    let hobbyArr = []
  for (let i = 0; i < check.length; i++) {
      if (check[i].checked) {
        hobbyArr.push(check[i].value)
      count++;
    }
  }
  if (count == 0) {
    isVaild = false;
    hobyerror.innerHTML = "Select hobby";
    hobyerror.style.color = "red";
    hobyerror.style.fontSize = "0.9rem";
  } else if (count < 3) {
    isVaild = false;
    hobyerror.innerHTML = "Select atleast 3";
    hobyerror.style.color = "red";
    hobyerror.style.fontSize = "0.9rem";
  } else {
    hobyerror.innerHTML = "";
  }

  if (isVaild) {
    alert("submiteed");
    let obj = {
      name: name.value,
      lname: lastname.value,
      emal: emails.value,
      usname: username.value,
      passwrd: password.value,
        url: puturl.value,
        gendr: document.querySelector('input[type=radio][name=gender]:checked').value,
      hobby:hobbyArr
    };
    console.log(obj, "jhjg");
  }
}
