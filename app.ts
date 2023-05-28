import { ArrayUtils } from "./utils/ArrayUtils";
import { BaseOperation } from "./utils/BaseOperation";
import { FlowWriter } from "./utils/FlowWriter";
import { ObjectUtils } from "./utils/ObjectUtils";
import { NotNull } from "./validators/Decorators";

export const writer = {
  FlowWrtier: FlowWriter,
  BaseOperation: BaseOperation,
  ObjectUtils: ObjectUtils,
  ArrayUtils: ArrayUtils,
};

// export class DataInfluencer {}
class A {
  @NotNull()
  public age = 20;

  error: any;
}

// var bo = new BaseOperation();
var b = new A();
// console.log(
//   b.hasOwnProperty("a"),\
//   b.hasOwnProperty("c"),
//   typeof A,
//   Object.getOwnPropertyNames(b)
// );
// b.a = null;
console.log(b);
