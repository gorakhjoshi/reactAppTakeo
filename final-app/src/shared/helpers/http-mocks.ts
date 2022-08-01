import { getRandom } from './math.utils';
interface Options {
  success: boolean;
  randomFailure: boolean;
}

export function httpMocks({ success, randomFailure }: Options) {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.99) {
        resolve();
      } else {
        reject();
      }
    }, getRandom(10, 20) * 100);
  });
}
