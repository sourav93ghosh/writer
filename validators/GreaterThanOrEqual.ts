import { validator } from "./BaseValidator";
import { Validator } from "./ValidatorEnum";

export function GreaterThanOrEqual(value: number, message?: string) {
  return validator(
    Validator.GREATERTHANOREQUAL,
    message ?? `value should be greater than or equal to ${value}`
  );
}
