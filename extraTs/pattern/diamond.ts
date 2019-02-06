export default function diamond(n: number): void {
  console.log('Print a diamond with rows', n);
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
  for (let i: number = 1; i <= n; i++) {
    let pattern: string = '';
    let space: string = '';
    for (let j: number = 1; j < i; j++) {
      space = space + ' ';
    }
    for (let k: number = 0; k <= n - i; k++) {
      pattern = pattern + '* ';
    }
    console.log(space + pattern);
  }
}
