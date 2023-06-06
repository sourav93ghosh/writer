import { ArrayUtils } from "./utils/ArrayUtils";
import { BaseOperation } from "./utils/BaseOperation";
import { FlowWriter } from "./utils/FlowWriter";
import { ObjectUtils } from "./utils/ObjectUtils";
// import { NotNull } from "./validators/NotNull";
// import { Required } from "./validators/Required";
// import { Validate } from "./validators/Validate";

export const writer = {
  FlowWrtier: FlowWriter,
  BaseOperation: BaseOperation,
  ObjectUtils: ObjectUtils,
  ArrayUtils: ArrayUtils,
};

// @Validate()
// class A {
//   @NotNull()
//   @Required()
//   age: number;

//   @Required()
//   name: string;
// }

// // var bo = new BaseOperation();
// var b = new A();
// b.age = 100;
// let showsTopper = b["validate"]();
// console.log(showsTopper, b["error"]);
