import ControllerButtonHint from "../ControllerButtonHint/ControllerButtonHint";
import { FooterContainer } from "./Footer.style";

export default function Footer() {
    return (
        <FooterContainer>
            <p>© 2024 Decklet. All rights reserved.</p>
            <ControllerButtonHint buttonIcon="path/to/button-icon.png" buttonLabel="A" />
            <ControllerButtonHint buttonIcon="path/to/button-icon.png" buttonLabel="B" />
        </FooterContainer>
    );
}