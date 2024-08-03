import { Text, StyleSheet, TextStyle } from "react-native";
import Colors from "../../constants/colors";

type InstructionTextProps = {
  children: string;
  style?: TextStyle;
};

function InstructionText({ children, style }: InstructionTextProps) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

export default InstructionText;

type Styles = {
  instructionText: TextStyle;
};

const styles = StyleSheet.create<Styles>({
  instructionText: {
    fontFamily: "open-sans",
    color: Colors.primary,
    fontSize: 24,
    textAlign: "center",
  },
});
