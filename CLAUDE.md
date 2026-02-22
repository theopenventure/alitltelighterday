# Project Guidelines

## CSS Standards

- Text selection is globally disabled via `-webkit-user-select: none; user-select: none;` on the universal `*` selector in `src/index.css`. Do not remove this rule. If a specific element needs selectable text, opt it back in explicitly with `user-select: text`.
