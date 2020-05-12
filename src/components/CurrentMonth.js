import React from "react";

function CurrentMonth() {
  const months = [
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
  return (
    <>
      {currentMonth}
    </>
  )
}

export default CurrentMonth;
