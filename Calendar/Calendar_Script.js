// para sa HTML elements
const monthYear = document.getElementById("monthYear"); 
const calendarBody = document.getElementById("calendarBody"); 
const prevMonthBt = document.getElementById("prevMonth"); 
const nextMonthBt = document.getElementById("nextMonth"); 

let currentDate = new Date();

// taga update ng display sa calendar
function updateCalendar() {
  // taga clear ng calendar 
  calendarBody.innerHTML = "";

  // to calculate the number of days in the current month
  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  )
  .getDate();

  // taga kuha ng index of the first day para sa niyo month
  const firstDayIndex = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  )
  .getDay();

  // taga kuha ng index para last day of the month
  const lastDayIndex = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  )
  .getDay();

  // An array ng day names
  var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let dayCounter = 0;

  // taga loop ng new rows at cells para sa calendar
  for (let i = 0; i < 6; i++) 
  { 
    const row = document.createElement("tr"); 
    for (let j = 0; j < 7; j++) 
    { 
      const cell = document.createElement("td"); 
      
      if (i === 0 && j < firstDayIndex) {
        cell.textContent = ""; 
        cell.className = "empty"; // mga add ng CSS class 
      } 
      else if (dayCounter < daysInMonth)
       {
        dayCounter++;
        cell.textContent = dayCounter; // Display the day of the month
        
        // mga ng today class para sa current day
        if (
          dayCounter === new Date().getDate() &&
          currentDate.getMonth() === new Date().getMonth() &&
          currentDate.getFullYear() === new Date().getFullYear()
        ) 
        {
          cell.classList.add("today");
        }
      } 
      else {
        cell.textContent = ""; 
        cell.className = "empty"; 
      }
      
      // cell to the current row
       row.appendChild(cell);
    }
    // row to the calendar container
       calendarBody.appendChild(row);
  }
  // taga update ng month and year
  monthYear.textContent = `${currentDate.toLocaleString("default", {month: "long",})} ${currentDate.getFullYear()}`;
}

// 'Previous' button

prevMonthBt.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() - 1); // Go to the 'previous' month
  updateCalendar(); // Update and display the calendar

}
);

// 'Next' button

nextMonthBt.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() + 1); // Go to the 'next' month
  updateCalendar(); // Update and display the calendar

}
);

updateCalendar();



