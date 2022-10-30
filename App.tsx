import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ColorSchemeName } from "react-native";
import useCachedResources from "./hooks/useCachedResources";
import Navigation from "./navigation";
import { useState } from "react";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const [colorScheme, setColorScheme] = useState<ColorSchemeName>("dark");

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
