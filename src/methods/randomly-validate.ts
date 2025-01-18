import { randomlyDelay } from "./randomly-delay";
import { randomlyFail } from "./randomly-fail";

export async function randomlyValidate(random: number, threshold: number) {
  await randomlyDelay(1000);

  randomlyFail(random, threshold);
}
