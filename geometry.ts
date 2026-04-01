export interface Shape {
  circumference(): number;
  area(): number;
  encompasses(other: Shape): boolean;
}

export class Point2D {
  constructor(
    public x: number,
    public y: number,
  ) {}

  distanceTo(other: Point2D): number {
    return Math.sqrt(
      Math.abs(this.x - other.x) ** 2 + Math.abs(this.y - other.y) ** 2,
    );
  }

  isBetweenX(p: Point2D, q: Point2D): boolean {
    return Math.min(p.x, q.x) < this.x && this.x < Math.max(p.x, q.x);
  }

  isBetweenY(p: Point2D, q: Point2D): boolean {
    return Math.min(p.y, q.y) < this.y && this.y < Math.max(p.y, q.y);
  }
}

export class Circle implements Shape {
  constructor(
    private center: Point2D,
    private radius: number,
  ) {}

  getCenter(): Point2D {
    return this.center;
  }

  encompasses(other: Shape): boolean {
    if (other instanceof Rectangle) {
      const corners = [
        other.cornerA(),
        other.cornerB(),
        other.cornerC(),
        other.cornerD(),
      ];
      return corners.every((p) => this.center.distanceTo(p) < this.radius);
    }
    throw new Error("Not implemented for this shape.");
  }

  circumference(): number {
    return 2 * Math.PI * this.radius;
  }

  area(): number {
    return Math.PI * this.radius ** 2;
  }

  diameter(): number {
    return 2 * this.radius;
  }

  north(): Point2D {
    return new Point2D(this.center.x, this.center.y + this.radius);
  }

  east(): Point2D {
    return new Point2D(this.center.x + this.radius, this.center.y);
  }

  south(): Point2D {
    return new Point2D(this.center.x, this.center.y - this.radius);
  }

  west(): Point2D {
    return new Point2D(this.center.x - this.radius, this.center.y);
  }
}

export class Rectangle implements Shape {
  constructor(
    private bottomLeft: Point2D,
    private topRight: Point2D,
  ) {}
  encompasses(other: Shape): boolean {
    if (other instanceof Circle) {
      const points = [
        other.getCenter(),
        other.north(),
        other.east(),
        other.south(),
        other.west(),
      ];
      return points.every(
        (p) => p.isBetweenX(this.bottomLeft, this.topRight) &&
               p.isBetweenY(this.bottomLeft, this.topRight),
      );
    }
    throw new Error("Not implemented for this shape.");
  }

  circumference(): number {
    return 2 * (this.width() + 2 * this.height());
  }

  area(): number {
    return this.width() * this.height();
  }

  diagonal(): number {
    return this.bottomLeft.distanceTo(this.topRight);
  }

  cornerA(): Point2D {
    return this.bottomLeft;
  }

  cornerB(): Point2D {
    return new Point2D(this.topRight.x, this.bottomLeft.y);
  }

  cornerC(): Point2D {
    return this.topRight;
  }

  cornerD(): Point2D {
    return new Point2D(this.bottomLeft.x, this.topRight.y);
  }

  private width(): number {
    return this.topRight.x - this.bottomLeft.x;
  }

  private height(): number {
    return this.topRight.y - this.bottomLeft.y;
  }
}
