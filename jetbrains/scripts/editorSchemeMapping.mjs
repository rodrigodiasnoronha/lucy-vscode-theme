// Editor color scheme keys, mirroring the semantics already used for
// tokenColors in ../../src/getTheme.mjs (keyword -> base1, string -> base2,
// function -> call, class/type -> accent1, constant/number -> const, etc.)
// so both IDEs read the same palette the same way.
export const FONT_TYPE = { PLAIN: 0, BOLD: 1, ITALIC: 2, BOLD_ITALIC: 3 }

// General editor colors, equivalent to getTheme.mjs's top-level `colors` map.
export const editorColors = (colors) => ({
  CARET_COLOR: colors.pure2,
  CARET_ROW_COLOR: colors.background2,
  GUTTER_BACKGROUND: colors.background1,
  INDENT_GUIDE: colors.background4,
  SELECTED_INDENT_GUIDE: colors.dim1,
  SELECTION_BACKGROUND: colors.selection,
  SELECTION_FOREGROUND: colors.pure2,
  RIGHT_MARGIN_COLOR: colors.background4,
  WHITESPACES: colors.dim1,
  LINE_NUMBERS_COLOR: colors.dim1,
  MODIFIED_LINES_COLOR: colors.accent2,
  ADDED_LINES_COLOR: colors.call,
  DELETED_LINES_COLOR: colors.base1,
  TEARLINE_COLOR: colors.background4,
    METHOD_SEPARATORS_COLOR: colors.background4,

    // Console/terminal background (the classic terminal engine and Run/Debug
    // panels read this; the new terminal engine reads Terminal.background from
    // uiMapping.mjs instead - both are set so either engine is themed).
    CONSOLE_BACKGROUND_KEY: colors.background1
})

// DefaultLanguageHighlighterColors keys: the small, generic vocabulary that
// cascades into most bundled language highlighters (equivalent to the
// TextMate `scope`s in getTheme.mjs's tokenColors, but far fewer of them).
export const editorAttributes = (colors) => ({
  TEXT: { foreground: colors.pure2, background: colors.background1 },

  DEFAULT_LINE_COMMENT: { foreground: colors.dim2, fontType: FONT_TYPE.ITALIC },
  DEFAULT_BLOCK_COMMENT: { foreground: colors.dim2, fontType: FONT_TYPE.ITALIC },
  DEFAULT_DOC_COMMENT: { foreground: colors.dim4, fontType: FONT_TYPE.ITALIC },
  DEFAULT_DOC_COMMENT_TAG: { foreground: colors.const },
  DEFAULT_DOC_MARKUP: { foreground: colors.dim4 },

  DEFAULT_KEYWORD: { foreground: colors.base1 },
  DEFAULT_STRING: { foreground: colors.base2 },
  DEFAULT_NUMBER: { foreground: colors.const },
  DEFAULT_CONSTANT: { foreground: colors.const },
  DEFAULT_VALID_STRING_ESCAPE: { foreground: colors.accent1 },
  DEFAULT_INVALID_STRING_ESCAPE: { foreground: colors.base1 },
  DEFAULT_PREDEFINED_SYMBOL: { foreground: colors.const },

  DEFAULT_IDENTIFIER: { foreground: colors.pure2 },
  DEFAULT_LOCAL_VARIABLE: { foreground: colors.pure2 },
  DEFAULT_GLOBAL_VARIABLE: { foreground: colors.pure2 },
  DEFAULT_INSTANCE_FIELD: { foreground: colors.pure2 },
  DEFAULT_STATIC_FIELD: { foreground: colors.pure2 },
  DEFAULT_PARAMETER: { foreground: colors.accent2 },

  DEFAULT_FUNCTION_DECLARATION: { foreground: colors.call },
  DEFAULT_FUNCTION_CALL: { foreground: colors.call },
  DEFAULT_STATIC_METHOD: { foreground: colors.call },

  DEFAULT_CLASS_NAME: { foreground: colors.accent1 },
  DEFAULT_INTERFACE_NAME: { foreground: colors.accent1 },
  DEFAULT_CLASS_REFERENCE: { foreground: colors.accent1 },

  DEFAULT_LABEL: { foreground: colors.base2 },
  DEFAULT_METADATA: { foreground: colors.const },
  DEFAULT_TEMPLATE_LANGUAGE_COLOR: { foreground: colors.base1 },
  DEFAULT_TAG: { foreground: colors.base1 },
  DEFAULT_ATTRIBUTE: { foreground: colors.call },
  DEFAULT_ENTITY: { foreground: colors.accent2 },

  DEFAULT_OPERATION_SIGN: { foreground: colors.base1 },
  DEFAULT_BRACES: { foreground: colors.dim3 },
  DEFAULT_DOT: { foreground: colors.dim3 },
  DEFAULT_SEMICOLON: { foreground: colors.dim3 },
  DEFAULT_COMMA: { foreground: colors.dim3 },
  DEFAULT_PARENTHESES: { foreground: colors.dim3 },
  DEFAULT_BRACKETS: { foreground: colors.dim3 },

  TODO_DEFAULT_ATTRIBUTES: {
    foreground: colors.background1,
    background: colors.accent2,
    fontType: FONT_TYPE.BOLD
  },
    BAD_CHARACTER: {foreground: colors.base1, background: colors.background4},

    // ANSI-style console/terminal output colors.
    // ponytail: the palette has no dedicated blue, so BLUE reuses the cyan
    // accent and bright variants reuse their normal counterpart - add a
    // distinct blue/bright ramp to colors.mjs if that distinction matters later.
    CONSOLE_NORMAL_OUTPUT: {foreground: colors.pure2},
    CONSOLE_ERROR_OUTPUT: {foreground: colors.base1},
    CONSOLE_SYSTEM_OUTPUT: {foreground: colors.dim3},
    CONSOLE_BLACK_OUTPUT: {foreground: colors.background4},
    CONSOLE_GRAY_OUTPUT: {foreground: colors.dim3},
    CONSOLE_WHITE_OUTPUT: {foreground: colors.pure1},
    CONSOLE_RED_OUTPUT: {foreground: colors.base1},
    CONSOLE_GREEN_OUTPUT: {foreground: colors.call},
    CONSOLE_YELLOW_OUTPUT: {foreground: colors.base2},
    CONSOLE_BLUE_OUTPUT: {foreground: colors.accent1},
    CONSOLE_MAGENTA_OUTPUT: {foreground: colors.const},
    CONSOLE_CYAN_OUTPUT: {foreground: colors.accent1},
    CONSOLE_RED_BRIGHT_OUTPUT: {foreground: colors.base1},
    CONSOLE_GREEN_BRIGHT_OUTPUT: {foreground: colors.call},
    CONSOLE_YELLOW_BRIGHT_OUTPUT: {foreground: colors.base2},
    CONSOLE_BLUE_BRIGHT_OUTPUT: {foreground: colors.accent1},
    CONSOLE_MAGENTA_BRIGHT_OUTPUT: {foreground: colors.const},
  CONSOLE_CYAN_BRIGHT_OUTPUT: {foreground: colors.accent1},

  // ── Search & identifier highlights ──────────────────────────────
  // Equivalent to VS Code's editor.selectionHighlightBackground /
  // editor.wordHighlightBackground (both use translucent2).
  SEARCH_RESULT_ATTRIBUTES: {background: colors.translucent2},
  IDENTIFIER_UNDER_CARET: {background: colors.translucent3},
  WRITE_IDENTIFIER_UNDER_CARET: {background: colors.translucent2},

  // ── Brace matching ──────────────────────────────────────────────
  // VS Code: editorBracketMatch.background = background3,
  //          editorBracketMatch.border = dim2.
  MATCHED_BRACE_ATTRIBUTES: {foreground: colors.pure2, background: colors.background3},
  UNMATCHED_BRACE_ATTRIBUTES: {foreground: colors.base1, background: colors.background4},

  // ── Error / Warning / Info squigglies ────────────────────────────
  // Maps to VS Code's editorError/Warning/Info.foreground.
  ERRORS_ATTRIBUTES: {foreground: colors.base1},
  WARNING_ATTRIBUTES: {foreground: colors.accent2},
  INFO_ATTRIBUTES: {foreground: colors.accent1},

  // ── Diff editor ─────────────────────────────────────────────────
  // Maps to VS Code's diffEditor.insertedTextBackground / removedTextBackground.
  DIFF_INSERTED: {background: colors.translucent4},
  DIFF_DELETED: {background: colors.translucent6},
  DIFF_MODIFIED: {background: colors.translucent2},

  // ── Folded code regions ─────────────────────────────────────────
  FOLDED_TEXT_ATTRIBUTES: {foreground: colors.dim3},

  // ── Injected language fragments (e.g. SQL in Java strings) ──────
  INJECTED_LANGUAGE_FRAGMENT: {background: colors.background2}
})
