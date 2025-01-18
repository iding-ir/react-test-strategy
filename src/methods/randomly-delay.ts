export async function randomlyDelay(maxDelay: number) {
  const delay = Math.floor(Math.random() * maxDelay);

  await new Promise((resolve) => setTimeout(resolve, delay));
}
