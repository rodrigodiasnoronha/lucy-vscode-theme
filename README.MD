![theme screenshot one](screenshot.jpg)

---

![rating](https://vsmarketplacebadge.apphb.com/rating-star/juliettepretot.lucy-vscode.svg)

Available in [codesandbox.io](https://codesandbox.io)

Customizable. Change the colors in `color.mjs` & run `npm run build` to build the theme.

To apply your customized theme copy this entire folde to `~/.vscode/extensions`.

## JetBrains IDEs

A JetBrains plugin (IntelliJ, WebStorm, PyCharm, etc.) built from the same palette lives in `jetbrains/`.

1. Generate the theme files: `npm run build:jetbrains`
2. Test it: `cd jetbrains && ./gradlew runIde` (first run generates the Gradle wrapper if missing, or open the `jetbrains/` folder in IntelliJ IDEA and let it do so)
3. Package it: `./gradlew buildPlugin` (output in `jetbrains/build/distributions/`)
4. Publish it: `./gradlew publishPlugin` (needs a JetBrains Marketplace token)
