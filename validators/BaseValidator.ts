export function validator(name: string, message: string) {
  return function (target: any, key: string) {
    target.error = {
      ...(target.error ?? {}),
      [key]: {
        ...(target.error?.[key] ?? {}),
        [name]: {
          isValid: true,
          message: `[${key}]: ${message}`,
        },
      },
    };
  };
}
