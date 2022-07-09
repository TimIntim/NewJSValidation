let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username"),
  email = id("email"),
  password = id("password"),
  form = id("form"),

  errorMsg = classes("error"),
  successIcon = classes("success-icon"),
  failureIcon = classes("failure-icon");

let test = document.getElementById('form');

form.addEventListener("submit", (e) => {
  e.preventDefault();

  engine(username, 0, "Username connot be blank");
  engine(email, 1, "Email connot be blank");
  engine(password, 2, "Password connot be blank");
});

let engine = (id, index, message) => {

  if (id.value.trim() === "") {
    errorMsg[index].innerHTML = message;
    id.style.border = "2px solid red";

    failureIcon[index].style.opacity = "1";
    successIcon[index].style.opacity = "0";
  } else {
    errorMsg[index].innerHTML = "";
    id.style.border = "2px solid green";

    failureIcon[index].style.opacity = "0";
    successIcon[index].style.opacity = "1";
  }
};
