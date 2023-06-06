import { validator } from "./BaseValidator";
import { Validator } from "./ValidatorEnum";

export function MaxLength(length: number, message?: string) {
  return validator(
    Validator.MAXLENGTH,
    message ?? `maximum length can be ${length}`
  );
}
