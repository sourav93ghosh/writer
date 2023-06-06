import { validator } from "./BaseValidator";
import { Validator } from "./ValidatorEnum";

export function Equal(value: number, message?: string) {
  return validator(
    Validator.EQUAL,
    message ?? `value should be equal to ${value}`
  );
}
