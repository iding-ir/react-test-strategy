export async function randomlyDelay({
  fixedDelay,
  variableDelay,
}: {
  fixedDelay: number;
  variableDelay: number;
}) {
  const delay = fixedDelay + Math.floor(Math.random() * variableDelay);

  await new Promise((resolve) => setTimeout(resolve, delay));
}
