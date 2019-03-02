export function delay(m: number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, m);
  });
}
