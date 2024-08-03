import { View, Text, StyleSheet, ViewStyle, TextStyle } from "react-native";
import Colors from "../../constants/colors";

type GuessLogItemProps = {
  item: number;
  index: number;
};

function GuessLogItem({ item, index }: GuessLogItemProps) {
  return (
    <View key={index} style={styles.listItem}>
      <Text style={styles.itemText}>#{index + 1}</Text>
      <Text style={styles.itemText}>Opponent's Guess: {item}</Text>
    </View>
  );
}

export default GuessLogItem;

type Styles = {
  listItem: ViewStyle;
  itemText: TextStyle;
};

const styles = StyleSheet.create<Styles>({
  listItem: {
    borderColor: Colors.secondary,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.primary,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  itemText: {
    fontFamily: "open-sans",
  },
});
