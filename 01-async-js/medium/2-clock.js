// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats -

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

function timeFormatter24(hour, min, sec) {
  console.log(`${String(hour).padStart(2,'0')}:${String(min).padStart(2,'0')}:${String(sec).padStart(2,'0')}`);
}

function timeFormatter12(hour, min, sec) {
  let meridiem = hour >= 12 ? "PM" : "AM";

  let hour12 = hour % 12;
  if (hour12 === 0) hour12 = 12;

  console.log(`${String(hour12).padStart(2,'0')}:${String(min).padStart(2,'0')}:${String(sec).padStart(2,'0')} ${meridiem}`);
}

function interval() {
  let now = new Date();

  timeFormatter24(
    now.getHours(),
    now.getMinutes(),
    now.getSeconds()
  );

  timeFormatter12(
    now.getHours(),
    now.getMinutes(),
    now.getSeconds()
  );

  setTimeout(interval, 1000);
}

interval();
