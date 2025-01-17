import { randomlyDelay } from "./random-delay";
import { randomlyFail } from "./random-fail";

export async function randomValidation() {
  await randomlyDelay();

  randomlyFail();
}
