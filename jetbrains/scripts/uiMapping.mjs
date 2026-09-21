// Curated core of the IntelliJ Platform "ui" theme keys (theme.json).
// JetBrains' UI component model doesn't map 1:1 to VS Code's ~250 "colors"
// keys, so only keys with a direct equivalent to what getTheme.mjs already
// themes are covered here. Full key reference (bundled with the platform,
// not published as a web page): IntelliJPlatform.themeMetadata.json.
export default (colors) => ({
  'Component.borderColor': colors.background4,
  'Component.focusColor': colors.dim2,
  'Focus.borderColor': colors.dim2,

  'Panel.background': colors.background2,
  'Panel.foreground': colors.dim3,

  'ToolWindow.background': colors.background1,
  'ToolWindow.Header.background': colors.background2,
  'ToolWindow.Header.borderColor': colors.background1,
  'ToolWindow.HeaderTab.selectedBackground': colors.background3,
  'ToolWindow.HeaderTab.hoverBackground': colors.background2,

  'List.background': colors.background2,
  'List.foreground': colors.dim3,
  'List.selectionBackground': colors.background3,
  'List.selectionForeground': colors.base2,
  'List.hoverBackground': colors.background2,

  'Tree.background': colors.background2,
  'Tree.foreground': colors.dim3,
  'Tree.selectionBackground': colors.background3,
  'Tree.selectionForeground': colors.base2,
  'Tree.hoverBackground': colors.background2,

  'Button.background': colors.background4,
  'Button.foreground': colors.dim3,
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

  'StatusBar.background': colors.background1,
  'StatusBar.foreground': colors.dim3,
  'StatusBar.borderColor': colors.background1,

  'ToolTip.background': colors.background4,
  'ToolTip.foreground': colors.pure2,
  'ToolTip.borderColor': colors.background4,

  'ScrollBar.thumbColor': colors.translucent9,
  'ScrollBar.hoverThumbColor': colors.translucent9,
  'ScrollBar.trackColor': colors.background2,

  'PopupMenu.background': colors.background4,
  'PopupMenu.foreground': colors.dim3,
  'PopupMenu.selectionBackground': colors.background3,
  'PopupMenu.selectionForeground': colors.base2,

  'Notification.background': colors.background4,
  'Notification.foreground': colors.pure2,
  'Notification.borderColor': colors.background3,

  'Link.activeForeground': colors.base2,

  'TextField.background': colors.background3Half,
  'TextField.foreground': colors.pure2,
  'TextField.borderColor': colors.background3Half,

  'MainToolbar.background': colors.background1
})
