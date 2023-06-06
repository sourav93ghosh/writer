import { validator } from "./BaseValidator";
import { Validator } from "./ValidatorEnum";

export function Min(value: number, message?: string) {
  return validator(
    Validator.MIN,
    message ?? `minimum value should be ${value}`
  );
}
