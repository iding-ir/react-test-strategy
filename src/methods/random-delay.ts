const MAX_DELAY = 1000; // in milliseconds

export async function randomlyDelay() {
  const delay = Math.floor(Math.random() * MAX_DELAY);

  await new Promise((resolve) => setTimeout(resolve, delay));
}
