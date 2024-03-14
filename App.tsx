import { Inter_400Regular, Inter_500Medium } from "@expo-google-fonts/inter";
import {
  Rajdhani_700Bold,
  Rajdhani_500Medium,
} from "@expo-google-fonts/rajdhani";
import { StatusBar } from "expo-status-bar";
import { Routes } from "./src/routes";
import { AuthProvider } from "./src/hooks/auth";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  SplashScreen.preventAutoHideAsync();

  return (
    <>
      <StatusBar translucent style="light" backgroundColor="transparent" />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </>
  );
}
