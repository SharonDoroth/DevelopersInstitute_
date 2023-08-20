function getValue() {
  const form = document.getElementById("form1");
  const firstNameInput = form.elements["fname"];
  const lastNameInput = form.elements["lname"];

  const firstName = firstNameInput.value;
  const lastName = lastNameInput.value;

  console.log("First Name:", firstName);
  console.log("Last Name:", lastName);

  
  event.preventDefault();
}

// function handleSubmit(e) {
//     e.preventDefault();
// }

// const form = e.target;
// const emailValue = form.elements.myemail.value;
// const nameValue = form.elements.myname.value;
// console.log('form was submited',emailValue,nameValue);

//Access forms

// const frm1 = document.getElementById('form1');
// console.log(frm1);
// const forms = document.forms;
// console.log(forms[1]);

// console.log(forms.myform1);

// const form1 = document.forms.myform1;
// console.log(form1);

//Access input
// const email = document.getElementById('myemail');
// console.log(email);

// const forms = document.forms[0];
// const elements = forms.elements;
// console.log(elements.myemail);
