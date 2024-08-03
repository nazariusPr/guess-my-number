import { useEffect, useState, ReactElement } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  SafeAreaView,
  ImageStyle,
  ViewStyle,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import { useNumberToGuess } from "./context/NumberToGuessContext";
import Colors from "./constants/colors";

function AppContent(): ReactElement {
  const { numberToGuess, isGuessed } = useNumberToGuess();
  const [screen, setScreen] = useState<ReactElement>(<StartGameScreen />);

  useEffect(() => {
    function handleChange(): void {
      if (isGuessed) {
        setScreen(<GameOverScreen />);
      } else if (!isNaN(numberToGuess)) {
        setScreen(<GameScreen />);
      } else {
        setScreen(<StartGameScreen />);
      }
    }
    handleChange();
  }, [numberToGuess, isGuessed]);

  return (
    <>
      <StatusBar style="light" />
      <LinearGradient
        colors={[Colors.secondary, Colors.primary]}
        style={styles.linearGradient}
      >
        <ImageBackground
          source={require("./assets/images/background.png")}
          resizeMode="cover"
          style={styles.rootScreen}
          imageStyle={styles.imageStyle}
        >
          <SafeAreaView style={{ flex: 1 }}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

export default AppContent;

interface Styles {
  rootScreen: ViewStyle;
  imageStyle: ImageStyle;
  linearGradient: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  rootScreen: {
    flex: 1,
  },
  imageStyle: {
    opacity: 0.35,
  },
  linearGradient: {
    flex: 1,
  },
});
