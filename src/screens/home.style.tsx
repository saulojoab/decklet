import styled from "@emotion/styled";

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  min-height: ${({ theme }) => theme.sizes.viewportHeight};
  padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.none};
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};

  h1 {
    font-family: ${({ theme }) => theme.typography.heading};
    font-size: ${({ theme }) => theme.typography.bodySize};
  }
`;
