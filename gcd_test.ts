import { assertEquals } from "@std/assert";
import { Fraction, gcdBruteForce, gcdEuclid } from "./gcd.ts";

const gcdTests = [
  { a: 1, b: 1, gcd: 1 },
  { a: 1, b: 2, gcd: 1 },
  { a: 2, b: 2, gcd: 2 },
  { a: 3, b: 4, gcd: 1 },
  { a: 6, b: 9, gcd: 3 },
  { a: 81, b: 36, gcd: 9 },
];

Deno.test("ggt von zwei Zahlen mit Euklid", () => {
  for (const { a, b, gcd } of gcdTests) {
    const actual = gcdEuclid(a, b);
    assertEquals(actual, gcd);
  }
});

Deno.test("ggT 1, 1 equals 1", () => {
  // Arrange

  // Act
  const actual = gcdBruteForce(1, 1);

  // Assert
  assertEquals(actual, 1);
});

Deno.test("ggT 2, 4 equals 2", () => {
  // Arrange

  // Act
  const actual = gcdBruteForce(2, 4);

  // Assert
  assertEquals(actual, 2);
});

Deno.test("ggT 15, 12 equals 3", () => {
  // Arrange

  // Act
  const actual = gcdBruteForce(15, 12);

  // Assert
  assertEquals(actual, 3);
});

Deno.test("ggT 14, 3 equals 1", () => {
  // Arrange

  // Act
  const actual = gcdBruteForce(14, 3);

  // Assert
  assertEquals(actual, 1);
});

Deno.test("gekürzter Bruch 1/1 equals 1/1", () => {
  // Arrange
  const fraction = new Fraction(1, 1);

  // Act
  fraction.cancel();

  // Assert
  assertEquals(fraction.numerator, 1);
  assertEquals(fraction.denominator, 1);
});

Deno.test("gekürzter Bruch 3/3 equals 1/1", () => {
  // Arrange
  const fraction = new Fraction(3, 3);

  // Act
  fraction.cancel();

  // Assert
  assertEquals(fraction.numerator, 1);
  assertEquals(fraction.denominator, 1);
});

Deno.test("gekürzter Bruch 24/16 equals 3/2", () => {
  // Arrange
  const fraction = new Fraction(24, 16);

  // Act
  fraction.cancel();

  // Assert
  assertEquals(fraction.numerator, 3);
  assertEquals(fraction.denominator, 2);
});

Deno.test("gekürzter Bruch 14/3 equals 14/3", () => {
  // Arrange
  const fraction = new Fraction(14, 3);

  // Act
  fraction.cancel();

  // Assert
  assertEquals(fraction.numerator, 14);
  assertEquals(fraction.denominator, 3);
});

Deno.test("Bruch 3/3 wird automatisch zu 1/1 gekürzt", () => {
  const fraction = new Fraction(3, 3);
  assertEquals(fraction.numerator, 1);
  assertEquals(fraction.denominator, 1);
});

Deno.test("Bruch 24/16 wird automatisch zu 3/2 gekürzt", () => {
  const fraction = new Fraction(24, 16);
  assertEquals(fraction.numerator, 3);
  assertEquals(fraction.denominator, 2);
});

