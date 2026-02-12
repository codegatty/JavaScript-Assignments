// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

// (Hint: setTimeout)


let count=0;

function foo(){
  count++;
  console.log(count);

  setTimeout(foo,1000);
}

foo();