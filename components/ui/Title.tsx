import { Text, StyleSheet, TextStyle, StyleProp, Platform } from "react-native";

type TitleProps = {
  children: string;
  textStyle?: StyleProp<TextStyle>;
};

function Title({ children, textStyle }: TitleProps) {
  return <Text style={[styles.title, textStyle]}>{children}</Text>;
}

export default Title;

interface Styles {
  title: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 26,
    color: "white",
    textAlign: "center",
    borderWidth: Platform.select({ ios: 0, android: 2 }),
    borderColor: "white",
    padding: 12,
    maxWidth: "80%",
    width: 300,
  },
});
