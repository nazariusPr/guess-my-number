import { ReactNode } from "react";
import { View, StyleSheet, ViewStyle, Dimensions } from "react-native";
import Colors from "../../constants/colors";

type CardProps = {
  children: ReactNode;
  style?: ViewStyle;
};

function Card({ children, style }: CardProps) {
  return <View style={[styles.inputContainer, style]}>{children}</View>;
}

export default Card;

const deviceWidth: number = Dimensions.get("window").width;

type Styles = {
  inputContainer: ViewStyle;
};

const styles = StyleSheet.create<Styles>({
  inputContainer: {
    width: "100%",
    padding: 16,
    marginTop: deviceWidth < 380 ? 18 : 30,
    marginHorizontal: 24,
    backgroundColor: Colors.secondary,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 4,
    shadowOpacity: 0.25,
  },
});
