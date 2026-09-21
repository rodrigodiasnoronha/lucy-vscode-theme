import chroma from 'chroma-js'

// These variants need to be listed as seperate themes in package.json
// (VS Code) and as seperate themeProvider entries in plugin.xml (JetBrains)
export default {
  lucy: (color) => color,
  'lucy-evening': (color) => {
    const [red, green, blue, alpha] = chroma(color).rgba()

    const sum = red + green + blue

    const clamp = (number) => Math.min(Math.max(number, 0), 255)

    // Shift colors while preserving luminosity
    const newRed = clamp(red * (1 + 0.175 * (1 - sum / 800)))
    const newGreen = clamp(green * (1 - 0.01 * (1 - sum / 800)))
    const newBlue = clamp(sum - (newRed + newGreen))

    return chroma({ r: newRed, g: newGreen, b: newBlue, a: alpha }).hex()
  }
}
