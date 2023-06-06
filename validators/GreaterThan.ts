import { validator } from "./BaseValidator";
import { Validator } from "./ValidatorEnum";

export function GreaterThan(value: number, message?: string) {
  return validator(
    Validator.GREATERTHAN,
    message ?? `value should be greater than ${value}`
  );
}
