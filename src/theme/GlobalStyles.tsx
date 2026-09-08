import { Global, css } from "@emotion/react";
import type { AppTheme } from "./theme";

export default function GlobalStyles() {
  return (
    <Global
      styles={(theme: AppTheme) => css`
        :root {
          color-scheme: dark;
          font-family: ${theme.typography.body};
          font-size: ${theme.typography.bodySize};
          color: ${theme.colors.text};
          background: ${theme.colors.background};
        }

        html,
        body,
        #root {
          margin: ${theme.spacing.none};
          padding: ${theme.spacing.none};
          width: 100%;
          min-height: 100vh;
        }

        body {
          overflow-x: hidden;
          background: ${theme.colors.background};
        }

        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        h1,
        h2,
        h3,
        p {
          margin: ${theme.spacing.none};
        }
      `}
    />
  );
}
