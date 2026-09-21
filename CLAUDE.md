# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

`lucy`, a color theme shipped for both VS Code (`lucy-vscode`) and JetBrains IDEs, "Soft but clear syntax theme". It ships two theme variants, `lucy` and `lucy-evening`, built from a single color palette into static theme files: VS Code JSON in `dist/`, JetBrains theme.json/XML in `jetbrains/src/main/resources/theme/`.

## Commands

- Build VS Code themes: `npm run build` (runs `node --experimental-modules src/index.mjs`)
- Build JetBrains themes: `npm run build:jetbrains` (runs `node --experimental-modules jetbrains/scripts/build-theme.mjs`)
- Release (VS Code): `npm run release` — builds, commits `dist/`, bumps the patch version, publishes via `vsce`, and pushes
- JetBrains plugin: `cd jetbrains && ./gradlew runIde` (visual test in a sandbox IDE), `./gradlew buildPlugin` (dist zip), `./gradlew publishPlugin` (Marketplace)
- There is no test suite or linter script defined in `package.json` beyond the `clean-slate-lint` pre-commit/pre-rewrite husky hooks (from the `clean-slate-lint` devDependency)

To apply changes locally in VS Code, copy the whole repo folder into `~/.vscode/extensions`.

## Architecture

Both themes are generated, not hand-written, from one shared palette:

- `src/colors.mjs` — the single source of truth for the palette (background/dim/accent/base colors). This is the file to edit to change either theme's colors.
- `src/variants.mjs` — the `lucy` (identity) / `lucy-evening` (luminosity-preserving color shift via `chroma-js`) transforms, shared by both the VS Code and JetBrains builds.
- `src/getTheme.mjs` — a large function `({ name, colors }) => ({...})` that maps the palette onto VS Code's `colors` (UI) and `tokenColors` (syntax highlighting scopes) keys.
- `src/index.mjs` — the VS Code build script. For each variant in `variants.mjs`, transforms the palette and writes the result through `getTheme` to `dist/<variant>.json`.
- `dist/lucy.json` and `dist/lucy-evening.json` — generated output, referenced directly by `package.json`'s `contributes.themes`. Do not hand-edit; regenerate with `npm run build`.
- `jetbrains/scripts/uiMapping.mjs` — palette → IntelliJ Platform `ui` theme keys (curated core set; JetBrains' UI component model doesn't map 1:1 to VS Code's `colors` keys).
- `jetbrains/scripts/editorSchemeMapping.mjs` — palette → editor color scheme (`DefaultLanguageHighlighterColors` `TextAttributesKey`s), kept semantically aligned with `getTheme.mjs`'s `tokenColors` (keyword → `base1`, string → `base2`, function → `call`, etc.).
- `jetbrains/scripts/build-theme.mjs` — the JetBrains build script. For each variant, writes `<variant>.theme.json` (UI theme) and `<variant>_scheme.xml` (editor color scheme) into `jetbrains/src/main/resources/theme/`.
- `jetbrains/src/main/resources/META-INF/plugin.xml` — registers both variants as `themeProvider`s. `jetbrains/build.gradle.kts` / `settings.gradle.kts` / `gradle.properties` — standard IntelliJ Platform Gradle Plugin (2.x) project, resource-only (no plugin code). The Gradle wrapper (`gradlew`) isn't committed; generate it once via `gradle wrapper` or by opening `jetbrains/` in IntelliJ IDEA.

To add a new theme variant: add an entry to `src/variants.mjs` (a function transforming a color); register it under `contributes.themes` in `package.json` (VS Code) and add a `themeProvider` in `jetbrains/src/main/resources/META-INF/plugin.xml` (JetBrains).

To change what a UI element or syntax token looks like: VS Code — find its key/scope in `src/getTheme.mjs`; JetBrains UI — its key in `jetbrains/scripts/uiMapping.mjs`; JetBrains syntax — its `TextAttributesKey` in `jetbrains/scripts/editorSchemeMapping.mjs`. Point it at a different color from `src/colors.mjs` (or add a new named color there).
