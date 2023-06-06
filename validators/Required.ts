import { validator } from "./BaseValidator";
import { Validator } from "./ValidatorEnum";

export function Required(message?: string) {
  return validator(Validator.REQUIRED, message ?? "required field");
}
