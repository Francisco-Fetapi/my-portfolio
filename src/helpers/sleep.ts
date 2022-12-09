export async function sleep(time: number) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(null);
    }, time * 1000);
  });
}
