export function gcdBruteForce(a: number, b: number) {
  let gcd = 1;
  for (let i = 1; i <= Math.min(a, b); i++) {
    if (a % i == 0 && b % i == 0) {
      gcd = i;
    }
  }
  return gcd;
}

export class Fraction {
  constructor (numerator: number, denominator: number) {
    this.numerator = numerator
    this.denominator = denominator
  }
  numerator = 0;
  denominator = 0;
  cancel() {
    const gcd = gcdBruteForce(this.numerator, this.denominator);
    this.numerator /= gcd
    this.denominator /= gcd
  }
}
