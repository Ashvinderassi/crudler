import { children } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
export const Button = ({ label, icon, onClick, styelLabel, styleButton }) => {
  // Initialisations ---------------------
  // State -------------------------------
  // Handlers ----------------------------
  // View --------------------------------
  return (
    <Pressable onPress={onClick} style={[styles.button, styleButton]}>
      {icon ? icon : null}
      <Text style={[styles.label, styelLabel]}>{label}</Text>
    </Pressable>
  );
};

export const ButtonTray = ({ children }) => {
  // Initialisations ---------------------
  // State -------------------------------
  // Handlers ----------------------------
  // View --------------------------------
  return <View style={styles.buttonTray}>{children}</View>;
};

const styles = StyleSheet.create({
  ButtonTray: {
    flexDirection: "row",
    gap: 15,
  },
  button: {
    minHeight: 50,
    borderWidth: 1,
    borderRadius: 7,
    backgroundColor: "grey",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
    flex: 1,
    flexDirection: "row",
    gap: 5,
  },
  label: {},
});
export default Button;
