const THRESHOLD = 0.6;

export function randomlyFail() {
  const random = Math.random();

  if (random > THRESHOLD) {
    throw new Error("Randomly failed!");
  }
}
