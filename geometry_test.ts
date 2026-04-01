import { assertAlmostEquals, assertEquals } from "@std/assert";
import { Circle, Point2D, Rectangle } from "./geometry.ts";

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

Deno.test("rectangle encompasses circle completely", () => {
  // Given
  const rect = new Rectangle(new Point2D(0, 0), new Point2D(10, 10));
  const circle = new Circle(new Point2D(5, 5), 3);

  // When
  const actual = rect.encompasses(circle);

  // Then
  assertEquals(actual, true);
});

Deno.test("rectangle does not encompass circle completely", () => {
  // Given
  const rect = new Rectangle(new Point2D(0, 0), new Point2D(10, 10));
  const circle = new Circle(new Point2D(9, 5), 3);

  // When
  const actual = rect.encompasses(circle);

  // Then
  assertEquals(actual, false);
});

Deno.test("circle encompasses rectangle completely", () => {
  // Given
  const circle = new Circle(new Point2D(5, 5), 5);
  const rect = new Rectangle(new Point2D(3, 3), new Point2D(7, 7));

  // When
  const actual = circle.encompasses(rect);

  // Then
  assertEquals(actual, true);
});

Deno.test("circle does not encompass rectangle completely", () => {
  // Given
  const circle = new Circle(new Point2D(5, 5), 3);
  const rect = new Rectangle(new Point2D(3, 3), new Point2D(9, 7));

  // When
  const actual = circle.encompasses(rect);

  // Then
  assertEquals(actual, false);
});

