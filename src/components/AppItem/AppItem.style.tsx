import styled from "@emotion/styled";

export const AppItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing.sm};
    width: ${({ theme }) => theme.sizes.full};
    max-width: ${({ theme }) => theme.sizes.appItemMaxWidth};
    padding: ${({ theme }) => theme.spacing.md};
    border: ${({ theme }) => theme.sizes.border} solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.sizes.radius};
    background: ${({ theme }) => theme.colors.surface};
    box-shadow: ${({ theme }) => theme.shadows.card};
    transition: transform ${({ theme }) => theme.motion.fast}, background ${({ theme }) => theme.motion.fast};

    &:hover {
        transform: ${({ theme }) => theme.transforms.hoverScale};
        background: ${({ theme }) => theme.colors.surfaceRaised};
    }

    h1 {
        font-family: ${({ theme }) => theme.typography.heading};
        font-size: ${({ theme }) => theme.typography.bodySize};
    }

    p {
        color: ${({ theme }) => theme.colors.textMuted};
        font-size: ${({ theme }) => theme.typography.smallSize};
        text-align: center;
    }

    img {
        width: ${({ theme }) => theme.sizes.icon};
        height: ${({ theme }) => theme.sizes.icon};
        object-fit: contain;
    }
`;