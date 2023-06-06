import { validator } from "./BaseValidator";
import { Validator } from "./ValidatorEnum";

export function Max(value: number, message?: string) {
  return validator(Validator.MAX, message ?? `maximum value can be ${value}`);
}
