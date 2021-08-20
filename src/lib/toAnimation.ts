export function toAnimation<T>(
  fn: (node: HTMLElement, params) => T,
): (node: HTMLElement, { from, to }, params) => T {
  return (node, _animations, params = {}) => {
    return fn(node, params);
  };
}
