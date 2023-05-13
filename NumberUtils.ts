export class NumberUtils {
  constructor() {}

  public isNumericValue(val: any) {
    return !isNaN(val);
  }

  public isDecimal(val: any) {
    if (!isNaN(val)) {
      const arr = val.split(".");
      return arr.length === 2 && !!arr[0] && !!arr[1];
    }
  }
}
