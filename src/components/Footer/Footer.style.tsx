//footer will be a Bar that resembles the steam big picture bar. it displays the button hints based on what controller is connected, and has a shortcut to go to the options menu.

import styled from "@emotion/styled";

export const FooterContainer = styled.footer`
    position: sticky;
    bottom: ${({ theme }) => theme.spacing.none};
    flex-shrink: 0;
    margin-top: auto;
    width: ${({ theme }) => theme.sizes.full};
    min-height: ${({ theme }) => theme.sizes.footerHeight};
    
    gap: ${({ theme }) => theme.spacing.md};
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
    background-color: ${({ theme }) => theme.colors.surface};
    border-top: ${({ theme }) => theme.sizes.border} solid ${({ theme }) => theme.colors.border};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: ${({ theme }) => theme.typography.smallSize};
`;