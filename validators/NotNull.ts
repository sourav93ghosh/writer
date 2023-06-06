import { validator } from "./BaseValidator";
import { Validator } from "./ValidatorEnum";

export function NotNull(message?: string) {
  return validator(Validator.NOTNULL, message ?? "null value");
}
