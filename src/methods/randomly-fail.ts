export const RANDOM_ERROR = "Randomly failed!";

export function randomlyFail({
  threshold,
  random,
}: {
  threshold: number;
  random: number;
}) {
  if (random >= threshold) {
    throw new Error(RANDOM_ERROR);
  }
}
