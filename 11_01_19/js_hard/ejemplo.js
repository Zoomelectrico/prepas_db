const data = [
  { x: 1, y: 7000 },
  { x: 2, y: 9000 },
  { x: 3, y: 5000 },
  { x: 4, y: 11000 },
  { x: 5, y: 10000 },
  { x: 6, y: 13000 }
];
// y = b0 + b1x
let acum = 0;
data.forEach(val => {
  acum += val.x * val.y;
});
console.log(data.reduce((pv, { x, y }) => (pv += x * y), 0));
console.log(acum);
