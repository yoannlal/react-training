export interface UiTheme {
  text: string;
  background: string;
  kind: string;
}

export interface UiThemes {
  default: UiTheme;
  dark: UiTheme;
}

export const UI_THEME: UiThemes = {
  default: {
    text: "#1C1F21",
    background: "#f4f4f4",
    kind: "default",
  },
  dark: {
    text: "#f4f4f4",
    background: "#1C1F21",
    kind: "dark",
  },
};
