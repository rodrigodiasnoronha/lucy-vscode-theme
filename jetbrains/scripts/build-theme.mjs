import { writeFile } from 'fs'
import { promisify } from 'util'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import colors from '../../src/colors.mjs'
import VARIANTS from '../../src/variants.mjs'
import getUiTheme from './uiMapping.mjs'
import { editorColors, editorAttributes } from './editorSchemeMapping.mjs'

const promisifiedWriteFile = promisify(writeFile)
const __dirname = dirname(fileURLToPath(import.meta.url))
const themeDir = join(__dirname, '../src/main/resources/theme')

const stripHash = (color) => color.replace('#', '')

const buildColorsXml = (colorMap) =>
  Object.entries(colorMap)
    .map(([key, value]) => `    <option name="${key}" value="${stripHash(value)}" />`)
    .join('\n')

const buildAttributesXml = (attributeMap) =>
  Object.entries(attributeMap)
    .map(([key, { foreground, background, fontType }]) => {
      const options = [
        foreground && `<option name="FOREGROUND" value="${stripHash(foreground)}" />`,
        background && `<option name="BACKGROUND" value="${stripHash(background)}" />`,
        fontType !== undefined && `<option name="FONT_TYPE" value="${fontType}" />`
      ]
        .filter(Boolean)
        .join('\n          ')

      return `    <option name="${key}">\n      <value>\n          ${options}\n      </value>\n    </option>`
    })
    .join('\n')

const buildSchemeXml = (name, colorMap, attributeMap) =>
  `<scheme name="${name}" version="1" parent_scheme="Darcula">
  <colors>
${buildColorsXml(colorMap)}
  </colors>
  <attributes>
${buildAttributesXml(attributeMap)}
  </attributes>
</scheme>
`

const buildTheme = async () => {
  try {
    await Promise.all(
      Object.entries(VARIANTS).map(async ([variantName, getColor]) => {
        const variantColors = Object.entries(colors).reduce(
          (acc, [colorName, colorValue]) => ({
            ...acc,
            [colorName]: getColor(colorValue)
          }),
          {}
        )

        const themeJson = {
          name: variantName,
          dark: true,
          author: 'Juliette Pretot',
          editorScheme: `/theme/${variantName}_scheme.xml`,
          ui: getUiTheme(variantColors)
        }

        const schemeXml = buildSchemeXml(
          variantName,
          editorColors(variantColors),
          editorAttributes(variantColors)
        )

        await Promise.all([
          promisifiedWriteFile(
            join(themeDir, `${variantName}.theme.json`),
            JSON.stringify(themeJson, null, 2)
          ),
          promisifiedWriteFile(
            join(themeDir, `${variantName}_scheme.xml`),
            schemeXml
          )
        ])
      })
    )
    console.log('🌺 JetBrains theme built. 💅')
  } catch (error) {
    console.log(error)
  }
}

buildTheme()
