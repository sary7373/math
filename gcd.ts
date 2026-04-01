export function gcdBruteForce(a: number, b: number) {
  let gcd = 1;
  for (let i = 1; i <= Math.min(a, b); i++) {
    if (a % i == 0 && b % i == 0) {
      gcd = i;
    }
  }
  return gcd;
}

export function gcdEuclid(a: number, b: number): number {
  if (a === b) return a;
  if (a > b) return gcdEuclid(a - b, b);
  return gcdEuclid(a, b - a);
}

export class Fraction {
  numerator: number;
  denominator: number;

  constructor(numerator: number, denominator: number) {
    this.numerator = numerator;
    this.denominator = denominator;
    this.cancel()
  }

  cancel() {
    const gcd = gcdEuclid(this.numerator, this.denominator);
    this.numerator /= gcd;
    this.denominator /= gcd;
  }
}

