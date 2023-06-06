import { Validator } from "./ValidatorEnum";

// TODO: change variable name
function validateProp(prop: string, obj: any, checkAllValidators: boolean) {
  let message = "";
  for (const name of Object.keys(obj)) {
    switch (name) {
      case Validator.REQUIRED:
        obj[name].isValid = !(
          this[prop] === null ||
          this[prop] === undefined ||
          this[prop] === ""
        );
        break;
      case Validator.NOTNULL:
        obj[name].isValid = !!this[prop];
        break;
    }
    // Shows topper message
    if (!message && !obj[name].isValid) {
      message = obj[name].message;
      if (!checkAllValidators) break;
    }
  }
  return message;
}

export function Validate() {
  return function (target: any) {
    target.prototype.validate = function (name?: string) {
      let message = "";
      // validate single field
      if (!!name) {
        return validateProp(name, target.prototype.error[name], false);
      }
      // validate object
      for (const prop of Object.keys(target.prototype.error)) {
        if (!message) {
          message = validateProp(prop, target.prototype.error[prop], true);
        } else {
          validateProp(prop, target.prototype.error[prop], true);
        }
      }
      return message;
    };
  };
}
