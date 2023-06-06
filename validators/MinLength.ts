import { validator } from "./BaseValidator";
import { Validator } from "./ValidatorEnum";

export function MinLength(length: number, message?: string) {
  return validator(
    Validator.MINLENGTH,
    message ?? `minimum length should be ${length}`
  );
}
