export class Spring {
  current: number;
  target: number;
  velocity = 0;
  stiffness: number;
  damping: number;

  constructor(initial = 0, stiffness = 0.066, damping = 0.25) {
    this.current = initial;
    this.target = initial;
    this.stiffness = stiffness;
    this.damping = damping;
  }

  set(target: number) {
    this.target = target;
  }

  update(): boolean {
    const acceleration = this.stiffness * (this.target - this.current) - this.damping * this.velocity;
    this.velocity += acceleration;
    this.current += this.velocity;

    // Consider settled when close enough
    if (Math.abs(this.velocity) < 0.001 && Math.abs(this.target - this.current) < 0.001) {
      this.current = this.target;
      this.velocity = 0;
      return false; // not animating
    }
    return true; // still animating
  }

  snap(value: number) {
    this.current = value;
    this.target = value;
    this.velocity = 0;
  }
}

export class SpringGroup {
  springs: Record<string, Spring>;

  constructor(keys: string[], stiffness = 0.066, damping = 0.25) {
    this.springs = {};
    for (const key of keys) {
      this.springs[key] = new Spring(0, stiffness, damping);
    }
  }

  set(values: Record<string, number>) {
    for (const [key, value] of Object.entries(values)) {
      this.springs[key]?.set(value);
    }
  }

  get(key: string): number {
    return this.springs[key]?.current ?? 0;
  }

  update(): boolean {
    let animating = false;
    for (const spring of Object.values(this.springs)) {
      if (spring.update()) animating = true;
    }
    return animating;
  }

  snap(values: Record<string, number>) {
    for (const [key, value] of Object.entries(values)) {
      this.springs[key]?.snap(value);
    }
  }
}
