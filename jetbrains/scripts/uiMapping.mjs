// IntelliJ Platform "ui" theme keys (theme.json).
// JetBrains' UI component model doesn't map 1:1 to VS Code's ~250 "colors"
// keys. Full key reference (bundled with the platform, not published as a
// web page): IntelliJPlatform.themeMetadata.json.
//
// The '*' wildcard sets the generic Component.* properties every Swing
// component falls back to (this is what makes untouched surfaces - main
// toolbar, tool window stripe, menus, etc. - pick up the palette instead of
// the parent Darcula scheme's colors; verified against a real published
// theme, github.com/dracula/jetbrains). Everything below it only overrides
// where a component needs to differ from that generic default.
export default (colors) => ({
    '*': {
        background: colors.background2,
        foreground: colors.dim3,
        textForeground: colors.dim3,
        caretForeground: colors.pure2,
        selectionForeground: colors.pure2,
        selectionInactiveForeground: colors.pure2,
        selectionBackground: colors.background3,
        selectionInactiveBackground: colors.background3,
        inactiveBackground: colors.background2,
        disabledBackground: colors.background2,
        borderColor: colors.background4,
        separatorColor: colors.background4
    },

  'Component.focusColor': colors.dim2,
  'Focus.borderColor': colors.dim2,

  'Panel.background': colors.background2,

  'List.selectionForeground': colors.base2,
    'List.selectionInactiveForeground': colors.base2,
  'Tree.selectionForeground': colors.base2,
    'Tree.selectionInactiveForeground': colors.base2,
    'PopupMenu.selectionForeground': colors.base2,

  'Button.background': colors.background4,
  'Button.startBackground': colors.background4,
  'Button.endBackground': colors.background4,
  'Button.default.startBackground': colors.background4,
  'Button.default.endBackground': colors.background4,
  'Button.default.foreground': colors.pure2,

  'EditorTabs.background': colors.background1,
  'EditorTabs.underlineColor': colors.base2,
  'EditorTabs.underlinedTabForeground': colors.pure2,
  'EditorTabs.inactiveUnderlineColor': colors.background4,
  'EditorTabs.hoverBackground': colors.background2,

    // New UI top header (project name, run/debug, search everywhere).
    'MainToolbar.background': colors.background1,
    'MainToolbar.borderColor': colors.background1,
    'MainToolbar.Icon.hoverBackground': colors.background3,

    // Left/right icon rail + the tool window panels themselves.
    'ToolWindow.background': colors.background1,
    'ToolWindow.Header.background': colors.background2,
    'ToolWindow.Header.inactiveBackground': colors.background1,
    'ToolWindow.Button.selectedBackground': colors.background3,
    'ToolWindow.Button.hoverBackground': colors.background2,
    'ToolWindow.HeaderTab.underlineColor': colors.base2,
    'ToolWindow.HeaderTab.underlinedTabBackground': colors.background3,
    'ToolWindow.HeaderTab.underlinedTabInactiveBackground': colors.background2,
    'ToolWindow.Stripe.background': colors.background1,
    'ToolWindow.Stripe.borderColor': colors.background1,

  'StatusBar.background': colors.background1,
  'StatusBar.borderColor': colors.background1,

  'ToolTip.background': colors.background4,
  'ToolTip.borderColor': colors.background4,

  'ScrollBar.thumbColor': colors.translucent9,
  'ScrollBar.hoverThumbColor': colors.translucent9,
  'ScrollBar.trackColor': colors.background2,

  'Notification.background': colors.background4,
  'Notification.borderColor': colors.background3,

  'Link.activeForeground': colors.base2,

  'TextField.background': colors.background3Half,
  'TextField.borderColor': colors.background3Half,

    // Terminal (new engine reads ui theme keys directly; classic engine falls
    // back to the editor scheme's CONSOLE_* colors, set in editorSchemeMapping.mjs).
    'Terminal.background': colors.background1,
    'Terminal.foreground': colors.pure2,
    'Terminal.selectionBackground': colors.selection,
    'Terminal.selectionInactiveBackground': colors.background4
})
