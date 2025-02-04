import { randomlyDelay } from "./randomly-delay";
import { randomlyFail } from "./randomly-fail";

export async function randomlyThrowErrorAsync({
  threshold,
  random,
}: {
  threshold: number;
  random: number;
}) {
  await randomlyDelay({ fixedDelay: 1000, variableDelay: 1000 });

  randomlyFail({ threshold, random });
}
