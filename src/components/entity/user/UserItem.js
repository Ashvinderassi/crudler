import { Pressable, StyleSheet, Text, View } from "react-native";

const UserItem = ({ user, onSelect }) => {
  // Initialisations ---------------------
  // State -------------------------------
  // Handlers ----------------------------
  // View --------------------------------
  return (
    <Pressable onPress={() => onSelect(user)}>
      <View style={styles.item}>
        <Text style={styles.text}>
          {user.UserID} {user.UserFirstname} {user.UserLastname}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  item: {
    paddingVertical: 15,
    borderTopWidth: 1,
    borderColor: "lightgray",
  },
  text: {
    fontSize: 16,
  },
});
export default UserItem;
