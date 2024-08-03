import { useState } from "react";
import { useNumberToGuess } from "../context/NumberToGuessContext";
import {
  TextInput,
  View,
  StyleSheet,
  Alert,
  ViewStyle,
  TextStyle,
  Dimensions,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

 export type dimension = {
  width: number;
  height: number;
};

function StartGameScreen() {
  const [number, setNumber] = useState<string>("");
  const { setNumberToGuess, addTry } = useNumberToGuess();

  const { width, height }: dimension = useWindowDimensions();

  function handleInput(input: string): void {
    setNumber(input);
  }

  function handleReset(): void {
    setNumber("");
  }

  function handleConfirm(): void {
    const chosenNumber = parseInt(number);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid number!", "Number has to be between 1 and 99.", [
        { text: "Okay", style: "destructive", onPress: handleReset },
      ]);
      return;
    }
    setNumberToGuess(chosenNumber);
    addTry(chosenNumber);
  }

  const marginTopDistance = height < 380 ? 30 : 60;

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
          <Title>Guess my number</Title>
          <Card>
            <View style={styles.numberInputContainer}>
              <InstructionText>Enter a number</InstructionText>
              <TextInput
                style={styles.numberInput}
                maxLength={2}
                keyboardType="numeric"
                autoCapitalize="none"
                autoCorrect={false}
                value={number}
                onChangeText={handleInput}
              />
            </View>
            <View style={styles.buttonsContainer}>
              <PrimaryButton onPress={handleReset} buttonStyle={styles.button}>
                Reset
              </PrimaryButton>
              <PrimaryButton
                onPress={handleConfirm}
                buttonStyle={styles.button}
              >
                Confirm
              </PrimaryButton>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

export default StartGameScreen;

//const deviceHeight: number = Dimensions.get("window").height;

interface Styles {
  screen: ViewStyle;
  rootContainer: ViewStyle;
  numberInputContainer: ViewStyle;
  numberInput: TextStyle;
  buttonsContainer: ViewStyle;
  button: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    //marginTop: deviceHeight < 380 ? 30 : 60,
    padding: 10,
    alignItems: "center",
  },

  numberInputContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  numberInput: {
    height: 50,
    width: 75,
    fontSize: 32,
    borderBottomColor: Colors.primary,
    borderBottomWidth: 2,
    color: Colors.primary,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  button: {
    flex: 1,
  },
});
