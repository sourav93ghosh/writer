export class NumberUtils {
  constructor() {}

  public isNumericValue(val: any): boolean {
    return !isNaN(val);
  }

  public isDecimal(val: any): boolean {
    if (!isNaN(val)) {
      const arr = val.split(".");
      return arr.length === 2 && !!arr[0] && !!arr[1];
    }
  }

  public isNegative(val: any) {
    return !isNaN(val) && val < 0;
  }
}
