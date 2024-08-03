import { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  ViewStyle,
  Alert,
  TextStyle,
  FlatList,
  useWindowDimensions,
} from "react-native";
import Title from "../components/ui/Title";
import { useNumberToGuess } from "../context/NumberToGuessContext";
import { generateRandomBetween } from "../util/generateRandomBetween";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import Direction from "../constants/Direction";
import GuessLogItem from "../components/game/GuessLogItem";
import { dimension } from "./StartGameScreen";

let minBoundary: number = 0;
let maxBoundary: number = 100;

function GameScreen() {
  const { numberToGuess, tries, addTry, setIsGuessed } = useNumberToGuess();
  const [currentGuess, setCurrentGuess] = useState<number>(() =>
    generateRandomBetween(minBoundary, maxBoundary, numberToGuess)
  );
  const { width, height }: dimension = useWindowDimensions();

  useEffect(() => {
    if (currentGuess === numberToGuess) {
      minBoundary = 0;
      maxBoundary = 100;
      setIsGuessed(true);
    }
  }, [currentGuess]);

  function nextGuessHandler(direction: Direction): void {
    if (
      (direction === Direction.LOWER && currentGuess < numberToGuess) ||
      (direction === Direction.GREATER && currentGuess > numberToGuess)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    switch (direction) {
      case Direction.LOWER:
        maxBoundary = currentGuess;
        break;
      case Direction.GREATER:
        minBoundary = currentGuess;
        break;
      default:
        console.log("Hmm... You should not get here");
        break;
    }
    const rndNumber: number = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(rndNumber);
    addTry(rndNumber);
  }
  function renderTry({ item, index }: { item: number; index: number }) {
    return <GuessLogItem index={index} item={item} />;
  }

  let content = (
    <>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>
          Higher or Lower
        </InstructionText>
        <View style={styles.buttonContainer}>
          <PrimaryButton
            onPress={() => {
              nextGuessHandler(Direction.GREATER);
            }}
            buttonStyle={styles.button}
          >
            +
          </PrimaryButton>
          <PrimaryButton
            onPress={() => {
              nextGuessHandler(Direction.LOWER);
            }}
            buttonStyle={styles.button}
          >
            -
          </PrimaryButton>
        </View>
      </Card>
    </>
  );

  if (width > 500) {
    content = (
      <>
        <View style={styles.buttonContainerWide}>
          <PrimaryButton
            onPress={() => {
              nextGuessHandler(Direction.GREATER);
            }}
            buttonStyle={styles.buttonWide}
          >
            +
          </PrimaryButton>
          <NumberContainer>{currentGuess}</NumberContainer>

          <PrimaryButton
            onPress={() => {
              nextGuessHandler(Direction.LOWER);
            }}
            buttonStyle={styles.buttonWide}
          >
            -
          </PrimaryButton>
        </View>
      </>
    );
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      {content}
      <View style={styles.listContainer}>
        <FlatList
          data={tries}
          renderItem={renderTry}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

export default GameScreen;

interface Styles {
  screen: ViewStyle;
  buttonContainer: ViewStyle;
  buttonContainerWide: ViewStyle;
  button: ViewStyle;
  buttonWide: ViewStyle;
  instructionText: TextStyle;
  listContainer: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  screen: {
    flex: 1,
    padding: 24,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  buttonContainerWide: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    flex: 1,
  },
  buttonWide: {
    flex: 1,
    height: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  instructionText: {
    marginBottom: 12,
  },
  listContainer: {
    flex: 1,
    marginTop: 15,
  },
});
