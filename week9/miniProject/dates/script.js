function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  return `${year}${month}${day}${hours}${minutes}${seconds}`;
}

//console.log(formatDate(new Date(2020, 6, 4, 8, 0, 0))); 
console.log(formatDate(new Date(2019, 11, 31, 23, 59, 59))); 
//console.log(formatDate(new Date(2020, 6, 4))); 
