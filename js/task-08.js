const form = document.querySelector(".login-form");
form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  const onMail = formElements.email.value;
  const onPassword = formElements.password.value;
  if (onMail.length === 0 || onPassword.length === 0) {
    return alert("Заповніть будь-ласка всі поля!");
  }

  const formData = new FormData(event.currentTarget);
  formData.forEach((value, name) => {});
  
  let user = {
    email: formElements.email.value,
    password: formElements.password.value,
  };
 
  console.log(user);
  document.querySelector("form").reset();
}
