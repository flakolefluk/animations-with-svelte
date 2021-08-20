import { flip } from 'svelte/animate';
export function extendFlip(fn) {
  return (node, animations, params = {}) => {
    let flipRes = flip(node, animations, params);
    let transitionRes = fn(node, params);

    let getTransform = (str) => {
      let results = str.match(/transform: (.*);/);
      if (results && results.length) {
        return results[results.length - 1];
      }
      return '';
    };

    let mergeTransform = (css1, css2) => {
      return `transform: ${getTransform(css1)} ${getTransform(css2)};`;
    };

    return {
      ...flipRes,
      css: (t, u) =>
        `${transitionRes.css(t, u)}; ${mergeTransform(
          flipRes.css(t, u),
          transitionRes.css(t, u),
        )};`,
    };
  };
}
