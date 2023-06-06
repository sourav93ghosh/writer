import { validator } from "./BaseValidator";
import { Validator } from "./ValidatorEnum";

export function LessThan(value: number, message?: string) {
  return validator(
    Validator.LESSTHAN,
    message ?? `value should be less than ${value}`
  );
}
