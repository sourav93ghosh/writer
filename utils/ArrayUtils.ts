import { BaseOperation } from "./BaseOperation";
import { ObjectUtils } from "./ObjectUtils";

export class ArrayUtils {
  public objectUtils: ObjectUtils;
  public baseOperation: BaseOperation;
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

  public sort(
    arr: Array<any>,
    direction: string,
    targetProp?: Array<string>
  ): Array<any> {
    arr.sort((a, b) => {
      let p: any, q: any;
      if (!!targetProp) {
        p = this.objectUtils.findValueFromObjectHierarchy(a, targetProp);
        q = this.objectUtils.findValueFromObjectHierarchy(b, targetProp);
      } else {
        p = a;
        q = b;
      }
      if (direction === "asc") {
        return p - q;
      } else if (direction === "desc") {
        return q - p;
      }
    });
    return arr;
  }
}
