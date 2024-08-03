import React, { ReactNode } from "react";
import {
  Text,
  Pressable,
  StyleProp,
  ViewStyle,
  TextStyle,
  StyleSheet,
} from "react-native";

type PrimaryButtonProps = {
  onPress: () => void;
  children: string | ReactNode;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

function PrimaryButton({
  onPress,
  children,
  buttonStyle,
  textStyle,
}: PrimaryButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.defaultButtonStyle,
        buttonStyle,
        pressed && styles.buttonPressed,
      ]}
    >
      <Text style={[styles.defaultTextStyle, textStyle]}>{children}</Text>
    </Pressable>
  );
}

interface Styles {
  defaultButtonStyle: ViewStyle;
  defaultTextStyle: TextStyle;
  buttonPressed: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  defaultButtonStyle: {
    backgroundColor: "#72063c",
    padding: 10,
    margin: 5,
    borderRadius: 28,
    alignItems: "center",
  },
  defaultTextStyle: {
    color: "#ffffff",
    fontSize: 18,
  },
  buttonPressed: {
    opacity: 0.75,
  },
});

export default PrimaryButton;
