export interface AppTheme {
  colors: {
    background: string;
    surface: string;
    surfaceRaised: string;
    border: string;
    text: string;
    textMuted: string;
    textOnAccent: string;
    accent: string;
    accentHover: string;
    shadow: string;
  };
  spacing: {
    none: string;
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  sizes: {
    footerHeight: string;
    icon: string;
    radius: string;
    border: string;
    appItemMaxWidth: string;
    full: string;
    viewportHeight: string;
  };
  shadows: {
    card: string;
  };
  transforms: {
    hoverScale: string;
  };
  typography: {
    body: string;
    heading: string;
    bodySize: string;
    smallSize: string;
  };
  motion: {
    fast: string;
    standard: string;
  };
}

declare module "@emotion/react" {
  interface Theme extends AppTheme {}
}

export const darkMonochromeTheme: AppTheme = {
  colors: {
    background: "#0f0f0f",
    surface: "#181818",
    surfaceRaised: "#242424",
    border: "#3a3a3a",
    text: "#f5f5f5",
    textMuted: "#a6a6a6",
    textOnAccent: "#0f0f0f",
    accent: "#f5f5f5",
    accentHover: "#d6d6d6",
    shadow: "rgba(0, 0, 0, 0.35)",
  },
  spacing: {
    none: "0",
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
  },
  sizes: {
    footerHeight: "60px",
    icon: "48px",
    radius: "8px",
    border: "1px",
    appItemMaxWidth: "480px",
    full: "100%",
    viewportHeight: "100vh",
  },
  shadows: {
    card: "0 2px 4px rgba(0, 0, 0, 0.35)",
  },
  transforms: {
    hoverScale: "scale(1.05)",
  },
  typography: {
    body: "system-ui, sans-serif",
    heading: "system-ui, sans-serif",
    bodySize: "1rem",
    smallSize: "0.875rem",
  },
  motion: {
    fast: "0.2s",
    standard: "0.25s",
  },
};

export const themes = {
  darkMonochrome: darkMonochromeTheme,
} satisfies Record<string, AppTheme>;

export type ThemeName = keyof typeof themes;
export const defaultTheme: AppTheme = themes.darkMonochrome;
