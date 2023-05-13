export class ArrayUtils {
  constructor() {}

  public sumOfArray(arr: Array<number>, initialValue = 0): number {
    return arr.reduce((prev, curr) => prev + curr, initialValue);
  }

  public findMin(arr: Array<number>): number {
    let min = Infinity;
    for (const num of arr) {
      if (num < min) {
        min = num;
      }
    }
    return min;
  }

  public findMax(arr: Array<number>): number {
    let max = -Infinity;
    for (const num of arr) {
      if (num > max) {
        max = num;
      }
    }
    return max;
  }
}
