// Task1
function calculateArea(height: number, width: number): number {
  return width * height;
}
console.log(calculateArea(20, 30));

const foo = (...nums: number[]): number => {
  return nums.reduce((x, y) => x + y,0);
};
console.log(foo(1, 2, 3, 4, 5));

enum daysOfWeek {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}
let dayIndex: number = new Date().getDay();
console.log(daysOfWeek[dayIndex]);
