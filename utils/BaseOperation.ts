export class BaseOperation {
  public localVariables: any;

  constructor() {}

  public assignment(target: any, source: any): void {
    target = source;
  }

  public incrementValue(target: number) {
    target++;
  }

  public decrementValue(target: number) {
    target--;
  }

  public conditionalAnd(conditions: Array<boolean>): boolean {
    return conditions.reduce((prev, curr) => prev && curr, true);
  }

  public conditionalOr(conditions: Array<boolean>): boolean {
    return conditions.reduce((prev, curr) => prev || curr, false);
  }

  public negation(operand: any) {
    return !operand;
  }

  public isEqual(operand: any, value: any): boolean {
    return operand === value;
  }

  public isNotEqual(operand: any, value: any): boolean {
    return operand !== value;
  }

  public isGreaterThan(operand: number, value: number): boolean {
    return operand > value;
  }

  public isLessThan(operand: number, value: number): boolean {
    return operand < value;
  }

  public isGreaterThanOrEqual(operand: number, value: number): boolean {
    return operand >= value;
  }

  public isLessThanOrEqual(operand: number, value: number): boolean {
    return operand <= value;
  }

  public between(operand: number, value1: number, value2: number): boolean {
    return operand > value1 && operand < value2;
  }

  public strictBetween(
    operand: number,
    value1: number,
    value2: number
  ): boolean {
    return operand >= value1 && operand <= value2;
  }

  public concatStr(str: Array<string>, delimiter: string): string {
    return str.reduce((prev, curr) => prev.concat(curr, delimiter), "").trim();
  }

  public concatArr(arr: Array<any>): Array<any> {
    return arr.reduce((prev, curr) => prev.concat(curr), []);
  }

  public splitStr(str: string, delimiter: string): Array<string> {
    return str.split(delimiter);
  }

  public deepCopy(obj: any): any {
    return JSON.parse(JSON.stringify(obj));
  }

  public shallowCopyOfObject(obj: any): any {
    return { ...obj };
  }

  public shallowCopyOfArray(arr: Array<any>): Array<any> {
    return [...arr];
  }

  public mergeObject(...obj: any): any {
    return obj.reduce((prev: any, curr: any) => {
      return { ...prev, ...curr };
    }, {});
  }

  public sum(...nums: Array<number>) {
    return nums.reduce((prev, curr) => prev + curr, 0);
  }

  public createObject(): any {
    if (this.constructor === BaseOperation) {
      return new Object();
    }
  }

  public setProps(key: string, value: any): any {
    return { ...this, [key]: value };
  }

  public useBean(beanClass: any): any {
    return new beanClass();
  }

  public createLocalVariable(arr: Array<String>): void {
    this.localVariables = {};
    for (const name in arr) {
      this.localVariables[name] = null;
    }
  }

  public resetLocalVariable(): void {
    this.localVariables = null;
  }
}
