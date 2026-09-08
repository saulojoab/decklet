import { ControllerButtonHintContainer, ControllerButtonIcon, ControllerButtonLabel } from "./ControllerButtonHint.style";

interface IControllerButtonHint {
    buttonIcon: string;
    buttonLabel: string;
}

export default function ControllerButtonHint({ buttonIcon, buttonLabel }: IControllerButtonHint) {
    return (
        <ControllerButtonHintContainer className="controller-button-hint">
            <ControllerButtonIcon className="button-icon">
                <img src={buttonIcon} alt="Button Icon" />
            </ControllerButtonIcon>
            <ControllerButtonLabel className="button-label">
                <span>{buttonLabel}</span>
            </ControllerButtonLabel>
        </ControllerButtonHintContainer>
    );
}