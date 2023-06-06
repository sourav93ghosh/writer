import { validator } from "./BaseValidator";
import { Validator } from "./ValidatorEnum";

export function LessThanOrEqual(value: number, message?: string) {
  return validator(
    Validator.LESSTHANOREQUAL,
    message ?? `value should be less than or equal to ${value}`
  );
}
