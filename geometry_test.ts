import { assertAlmostEquals, assertEquals } from "@std/assert";
import { Circle, Point2D } from "./geometry.ts";

Deno.test("circumference of a circle with radius 5 is roughtly 31.416", () => {
  // Given
  const circle = new Circle(new Point2D(3, 4), 5);

  // When
  const actual = circle.circumference();

  // Then
  assertAlmostEquals(actual, 31.416, 0.01);
});

Deno.test("center M lies between W and E on the x-axis", () => {
  // Given
  const circle = new Circle(new Point2D(3, 4), 5);
  const M = new Point2D(3, 4);
  const W = circle.west();
  const E = circle.east();

  // When
  const actual = M.isBetweenX(W, E);

  // Then
  assertEquals(actual, true);
});

Deno.test("center M does not lie between N and S on the x-axis", () => {
  // Given
  const circle = new Circle(new Point2D(3, 4), 5);
  const M = new Point2D(3, 4);
  const N = circle.north();
  const S = circle.south();

  // When
  const actual = M.isBetweenX(N, S);

  // Then
  assertEquals(actual, false);
});

Deno.test("center M lies between N and S on the y-axis", () => {
  // Given
  const circle = new Circle(new Point2D(3, 4), 5);
  const M = new Point2D(3, 4);
  const N = circle.north();
  const S = circle.south();

  // When
  const actual = M.isBetweenY(S, N);

  // Then
  assertEquals(actual, true);
});

Deno.test("center M does not lie between W and E on the y-axis", () => {
  // Given
  const circle = new Circle(new Point2D(3, 4), 5);
  const M = new Point2D(3, 4);
  const W = circle.west();
  const E = circle.east();

  // When
  const actual = M.isBetweenY(W, E);

  // Then
  assertEquals(actual, false);
});

