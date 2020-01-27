import React from "react";

function CurrentMonth() {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  const date = new Date();
  const currentMonth = months[date.getMonth()];
  return(
     <div>
         <h1>{currentMonth}</h1>
     </div>
  )
}

export default CurrentMonth;
