(function (numberOfChildren, partnerName, geographicLocation, jobTitle) {
  const fortune = `You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnerName} with ${numberOfChildren} kids.`;

  const fortuneElement = document.createElement("p");
  fortuneElement.textContent = fortune;
  document.body.appendChild(fortuneElement);
})(3, "Sharon", "Brazil", "Web Developer");
