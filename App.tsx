import AppContent from "./AppContent";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { NumberToGuessProvider } from "./context/NumberToGuessContext";

export default function App() {
  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NumberToGuessProvider>
      <AppContent />
    </NumberToGuessProvider>
  );
}