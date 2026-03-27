import { assertEquals } from "@std/assert";
import { Gcd } from "./gcd.ts";

Deno.test("ggT 1, 1 equals 1", () => {
    // Arrange
    const gcd = new Gcd()

    // Act
    const actual = gcd.gcdBruteForce(1, 1);

    // Assert
    assertEquals(actual, 1);
});

Deno.test("ggT 2, 4 equals 2", () => {
    // Arrange
    const gcd = new Gcd()

    // Act
    const actual = gcd.gcdBruteForce(2, 4);

    // Assert
    assertEquals(actual, 2);
});

Deno.test("ggT 15, 12 equals 3", () => {
    // Arrange
    const gcd = new Gcd()

    // Act
    const actual = gcd.gcdBruteForce(15, 12);

    // Assert
    assertEquals(actual, 3);
});
