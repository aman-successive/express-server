export default function triangle(n: number): void {
  console.log('Print a triangle with rows', n);
  for (let i: number = 1; i <= n; i++) {
    let pattern: string = '';
    let space: string = '';
    for (let j: number = 1; j <= n - i; j++) {
      space = space + ' ';
    }
    for (let k: number = 1; k <= i; k++) {
      pattern = pattern + '* ';
    }
    console.log(space + pattern);
  }
}
