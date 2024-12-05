import { StyleSheet } from "react-native";
import Screen from "../layout/Screen";
import UserView from "../entity/user/UserView";

export const UserViewScreen = ({ navigation, route }) => {
  // Initialsations -------------------
  const { user, onDelete, onModify } = route.params;

  // State ----------------------------
  // Handlers -------------------------
  const gotoModifyScreen = () =>
    navigation.navigate("UserModifyScreen", { user, onModify });
  // View -----------------------------
  return (
    <Screen>
      <UserView user={user} onDelete={onDelete} onModify={gotoModifyScreen} />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default UserViewScreen;
