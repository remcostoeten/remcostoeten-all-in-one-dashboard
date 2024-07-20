export const rgbToHex = (r: number, g: number, b: number) => {
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
}

export const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result
        ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        }
        : { r: 0, g: 0, b: 0 }
}

export const rgbToHsl = (r: number, g: number, b: number) => {
    r /= 255
    g /= 255
    b /= 255
    const max = Math.max(r, g, b)
    const min = Math.min(r, g, b)
    let h: number,
        s: number,
        l = (max + min) / 2
    if (max === min) {
        h = s = 0
    } else {
        const d = max - min
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0)
                break
            case g:
                h = (b - r) / d + 2
                break
            case b:
                h = (r - g) / d + 4
                break
            default:
                h = 0
        }
        h /= 6
    }
    return {
        h: Math.round(h * 360),
        s: Math.round(s * 100),
        l: Math.round(l * 100)
    }
}

export const hslToRgb = (h: number, s: number, l: number) => {
    h /= 360
    s /= 100
    l /= 100
    let r: number, g: number, b: number
    if (s === 0) {
        r = g = b = l
    } else {
        const hue2rgb = (p: number, q: number, t: number) => {
            if (t < 0) t += 1
            if (t > 1) t -= 1
            if (t < 1 / 6) return p + (q - p) * 6 * t
            if (t < 1 / 2) return q
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
            return p
        }
        const q = l < 0.5 ? l * (1 + s) : l + s - l * s
        const p = 2 * l - q
        r = hue2rgb(p, q, h + 1 / 3)
        g = hue2rgb(p, q, h)
        b = hue2rgb(p, q, h - 1 / 3)
    }
    return {
        r: Math.round(r * 255),
        g: Math.round(g * 255),
        b: Math.round(b * 255)
    }
}

export const generateCssVariable = (colorName: string, colorValue: string) => {
    return `--${colorName}: ${colorValue};`
}

export const generateTailwindConfig = (
    colorName: string,
    colorValue: string
) => {
    return `
module.exports = {
  theme: {
    extend: {
      colors: {
        ${colorName}: '${colorValue}',
      },
    },
  },
};`
}

const tailwindColors = {
    // Add more Tailwind colors as needed
    red: '#f44336',
    pink: '#e91e63',
    purple: '#9c27b0',
    'deep-purple': '#673ab7',
    indigo: '#3f51b5',
    blue: '#2196f3'
    // Add more colors...
}

export const findClosestTailwindColor = (hex: string) => {
    const { r, g, b } = hexToRgb(hex)
    let closestColor = ''
    let minDistance = Infinity

    Object.entries(tailwindColors).forEach(([colorName, colorHex]) => {
        const { r: tr, g: tg, b: tb } = hexToRgb(colorHex)
        const distance = Math.sqrt(
            Math.pow(r - tr, 2) + Math.pow(g - tg, 2) + Math.pow(b - tb, 2)
        )
        if (distance < minDistance) {
            minDistance = distance
            closestColor = colorName
        }
    })

    return closestColor
}

export const calculateContrast = (color1: string, color2: string) => {
    const rgb1 = hexToRgb(color1);
    const rgb2 = hexToRgb(color2);
    const lum1 = 0.2126 * Math.pow(rgb1.r / 255, 2.2) + 0.7152 * Math.pow(rgb1.g / 255, 2.2) + 0.0722 * Math.pow(rgb1.b / 255, 2.2);
    const lum2 = 0.2126 * Math.pow(rgb2.r / 255, 2.2) + 0.7152 * Math.pow(rgb2.g / 255, 2.2) + 0.0722 * Math.pow(rgb2.b / 255, 2.2);
    const contrast = (Math.max(lum1, lum2) + 0.05) / (Math.min(lum1, lum2) + 0.05);
    return contrast;
};
