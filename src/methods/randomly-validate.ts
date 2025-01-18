import { randomlyDelay } from "./randomly-delay";
import { randomlyFail } from "./randomly-fail";

export async function randomlyValidate({
  threshold,
  random,
}: {
  threshold: number;
  random: number;
}) {
  await randomlyDelay({ maxDelay: 1000 });

  randomlyFail({ threshold, random });
}
