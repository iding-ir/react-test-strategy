export function randomlyFail(random: number, threshold: number) {
  if (random >= threshold) {
    throw new Error("Randomly failed!");
  }
}
