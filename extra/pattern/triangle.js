export default function triangle(n) {
  console.log("Print a triangle with rows", n);
  for (let i = 1; i <= n; i++) {
    let pattern = "";
    let space = "";
    for (let j = 1; j <= n - i; j++) {
      space = space + " ";
    }
    for (let k = 1; k <= i; k++) {
      pattern = pattern + "* ";
    }
    console.log(space + pattern);
  }
}
