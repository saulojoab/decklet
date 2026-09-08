import styled from "@emotion/styled";

export const ControllerButtonHintContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${({ theme }) => theme.spacing.sm};
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
    background-color: ${({ theme }) => theme.colors.surfaceRaised};
    border: ${({ theme }) => theme.sizes.border} solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.sizes.radius};
    box-shadow: ${({ theme }) => theme.shadows.card};
    color: ${({ theme }) => theme.colors.text};
    transition: background-color ${({ theme }) => theme.motion.fast};

    &:hover {
        background-color: ${({ theme }) => theme.colors.accent};
        color: ${({ theme }) => theme.colors.textOnAccent};
    }
`;

export const ControllerButtonIcon = styled.div`
    flex-shrink: 0;

    img {
        display: block;
        width: ${({ theme }) => theme.sizes.icon};
        height: ${({ theme }) => theme.sizes.icon};
        object-fit: contain;
    }
`;

export const ControllerButtonLabel = styled.div`
    flex-grow: 1;
    text-align: left;
`;