export function NotNull() {
  return function (target: any, key: string) {
    console.log(target, key, target[key]);
  };
}
