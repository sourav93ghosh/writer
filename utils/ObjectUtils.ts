export class ObjectUtils {
  constructor() {}

  public findKeyValuePairFromObject(
    obj: any,
    depth: number,
    key: string,
    value?: any
  ): any {
    for (const prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        if (!!value && prop == key && value === obj[prop]) {
          return [prop, obj[prop]];
        } else if (!value && prop === key) {
          return [prop, obj[prop]];
        }

        if (typeof obj[prop] === "object" && depth !== 0) {
          if (!!depth) {
            depth--;
          }
          this.findKeyValuePairFromObject(obj[prop], depth, key, value);
        }
      }
    }
    return null;
  }

  public findValueFromObjectHierarchy(obj: any, keys: Array<string>) {
    let final = JSON.parse(JSON.stringify(obj));
    for (const key of keys) {
      if (final.hasOwnProperty(key)) {
        final = final[key];
      }
    }
    return final;
  }

  public compareObject(obj1: any, obj2: any): any {
    for (const prop in obj1) {
      if (
        (obj1.hasOwnProperty(prop) && !obj2.hasOwnProperty(prop)) ||
        (obj1.hasOwnProperty(prop) &&
          obj2.hasOwnProperty(prop) &&
          obj1[prop] !== obj2[prop])
      ) {
        return false;
      }

      if (typeof obj1[prop] === "object") {
        const isEqual = this.compareObject(obj1[prop], obj2[prop]);
        if (!isEqual) {
          return false;
        }
      }
    }
    return true;
  }

  public getValue(obj: any, key: string): any {
    if (obj.hasOwnProperty(key)) {
      return obj[key];
    }
    return null;
  }
}
