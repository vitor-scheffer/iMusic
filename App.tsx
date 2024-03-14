import { StatusBar } from "expo-status-bar";
import { Routes } from "./src/routes";
import { AuthProvider } from "./src/hooks/auth";

export default function App() {
  return (
    <>
      <StatusBar translucent style="light" backgroundColor="transparent" />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </>
  );
}
