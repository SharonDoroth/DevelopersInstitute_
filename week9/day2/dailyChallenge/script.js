const dataForm = document.getElementById("dataForm");
const outputDiv = document.getElementById("output");

dataForm.addEventListener("submit", function (event) {
  event.preventDefault(); 

  const name = document.getElementById("name").value;
  const lastName = document.getElementById("lastName").value;

  const formData = {
    name: name,
    lastName: lastName,
  };

  const jsonData = JSON.stringify(formData);

  outputDiv.textContent = jsonData;
});
