import {cubicInOut} from 'svelte/easing'
export function skew(node: HTMLElement, {delay = 0, duration = 1000, easing = cubicInOut, deg = 45} = {}) {
        const style = getComputedStyle(node);
        const target_opacity = +style.opacity;
        const transform = style.transform === 'none' ? '' : style.transform;
        return {
            delay,
            duration,
            easing,
            css: (_t, u) => `
                transform: ${transform} skew(${deg*u}deg);
                opacity: ${target_opacity * _t}
            `
        };
}

