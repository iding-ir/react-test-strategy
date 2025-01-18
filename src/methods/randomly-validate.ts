import { randomlyDelay } from "./randomly-delay";
import { randomlyFail } from "./randomly-fail";

export async function randomlyValidation() {
  await randomlyDelay();

  randomlyFail();
}
