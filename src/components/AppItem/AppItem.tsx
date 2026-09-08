import { AppItemContainer } from "./AppItem.style";

interface IAppItem {
    appName: string;
    appDescription: string;
    appIcon: string;
    command: string;
}

export default function AppItem({appName, appDescription, appIcon, command}: IAppItem) { 
    return (
        <AppItemContainer>
            <h1>{appName}</h1>
            <p>{appDescription}</p>
            <img src={appIcon ?? ''} alt={appName} />
            <p>{command}</p>
        </AppItemContainer>
    )
}