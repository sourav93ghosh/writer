import { validator } from "./BaseValidator";
import { Validator } from "./ValidatorEnum";

export function StrictRange(min: number, max: number, message?: string) {
  return validator(
    Validator.STRICTRANGE,
    message ?? `value should be from ${min} to ${max}`
  );
}
