import {
  Text,
  View,
  StyleSheet,
  Image,
  ViewStyle,
  ImageStyle,
  TextStyle,
  Dimensions,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useNumberToGuess } from "../context/NumberToGuessContext";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import { dimension } from "./StartGameScreen";

type imageStyle = {
  width: number;
  height: number;
  borderRadius: number;
};

function GameOverScreen() {
  const { reset, tries, numberToGuess } = useNumberToGuess();
  const { width, height }: dimension = useWindowDimensions();

  let imageSize = 300;

  if (width < 380) {
    imageSize = 150;
  }

  if (height < 400) {
    imageSize = 80;
  }

  const imageStyle: imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };

  return (
    <ScrollView style={styles.screen} showsVerticalScrollIndicator={false}>
      <View style={styles.rootContainer}>
        <Title>GAME OVER!</Title>
        <View style={[styles.imageContainer, imageStyle]}>
          <Image
            style={styles.image}
            source={require("../assets/images/success.png")}
          />
        </View>
        <Text style={styles.summaryText}>
          Your phone needed <Text style={styles.highlight}>{tries.length}</Text>{" "}
          rounds to guess the number{" "}
          <Text style={styles.highlight}>{numberToGuess}</Text>
        </Text>
        <PrimaryButton onPress={reset} buttonStyle={styles.button}>
          Start New Game
        </PrimaryButton>
      </View>
    </ScrollView>
  );
}

export default GameOverScreen;

//const deviceWidth: number = Dimensions.get("window").width;

type Styles = {
  screen: ViewStyle;
  rootContainer: ViewStyle;
  imageContainer: ViewStyle;
  image: ImageStyle;
  summaryText: TextStyle;
  highlight: TextStyle;
  button: ViewStyle;
};

const styles = StyleSheet.create<Styles>({
  screen: { flex: 1 },
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    //width: deviceWidth < 380 ? 150 : 300,
    //height: deviceWidth < 380 ? 150 : 300,
    //borderRadius: deviceWidth < 380 ? 75 : 150,
    borderWidth: 3,
    borderColor: Colors.secondary,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontSize: 24,
    fontFamily: "open-sans",
    textAlign: "center",
    marginVertical: 18,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.secondary,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: 150,
  },
});
