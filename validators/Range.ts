import { validator } from "./BaseValidator";
import { Validator } from "./ValidatorEnum";

export function Range(min: number, max: number, message?: string) {
  return validator(
    Validator.RANGE,
    message ?? `value should be between ${min} to ${max}`
  );
}
