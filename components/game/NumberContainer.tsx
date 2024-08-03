import {
  View,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  Dimensions,
} from "react-native";
import Colors from "../../constants/colors";

type NumberContainerProps = {
  children: number;
};

function NumberContainer({ children }: NumberContainerProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const deviceWidth: number = Dimensions.get("window").width;

type Styles = {
  container: ViewStyle;
  text: TextStyle;
};

const styles = StyleSheet.create<Styles>({
  container: {
    width: "30%",
    borderWidth: 4,
    borderColor: Colors.primary,
    padding: deviceWidth < 380 ? 12 : 18,
    margin: 12,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "open-sans-bold",
    color: Colors.primary,
    fontSize: deviceWidth < 380 ? 28 : 36,
  },
});
