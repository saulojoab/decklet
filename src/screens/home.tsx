import AppItem from "../components/AppItem/AppItem";
import Footer from "../components/Footer/Footer";
import { HomeContainer } from "./home.style";

export default function Home() {
    // default apps will be retroarch, pcsx2, steam and dolphin.
    const defaultApps = [
        {
            appName: "RetroArch",
            appDescription: "A frontend for emulators, game engines and media players.",
            appIcon: "https://upload.wikimedia.org/wikipedia/commons/6/6d/RetroArch_logo_theme.png",
            command: "retroarch"
        },
        {
            appName: "PCSX2",
            appDescription: "A PlayStation 2 emulator for Windows, Linux and macOS.",
            appIcon: "https://upload.wikimedia.org/wikipedia/commons/7/7e/PCSX2_icon.png",
            command: "pcsx2"
        },
        {
            appName: "Steam",
            appDescription: "A digital distribution platform for video games.",
            appIcon: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/1280px-Steam_icon_logo.svg.png",
            command: "steam"
        },
        
    ];

  return (
    <HomeContainer>
      <h1>self</h1>
      {defaultApps.map((app, index) => (
        <AppItem
          key={index}
          appName={app.appName}
          appDescription={app.appDescription}
          appIcon={app.appIcon}
          command={app.command}
        />
      ))}

      <Footer />
    </HomeContainer>
  );
}