function search(event) {
    event.preventDefault();
    let searchValue = document.querySelector("#search-value");
    let h1 = document.querySelector("h1");
    h1.innerHTML = searchValue.value;
  }
  let form = document.querySelector("#search-form");
  form.addEventListener("submit", search);
  
  function formatDate(date) {
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
  
    let day = days[date.getDay()];
    let hour = date.getHours();
    let minute = date.getMinutes();
    if (minute < 10) {
      minute = `0${minute}`;
    }
  
    if (hour < 10) {
      hour = `0${hour}`;
    }
  
    return `${day} ${hour}:${minute}`;
  }
  let now = new Date();
  
  let currentDetails = document.querySelector("#date");
  currentDetails.innerHTML = formatDate(now);
  