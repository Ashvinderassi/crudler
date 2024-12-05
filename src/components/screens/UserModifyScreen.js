import { StyleSheet, Text, View } from "react-native";
import Screen from "../layout/Screen.js";
import UserForm from "../entity/user/UserForm.js";

export const UserModifyScreen = ({ navigation, route }) => {
  // Initialsations -------------------
  const { user, onModify } = route.params;

  // State ----------------------------
  // Handlers -------------------------
  const handleCancel = navigation.goBack;

  // View -----------------------------
  return (
    <Screen>
      <UserForm
        orginalUser={user}
        onSubmit={onModify}
        onCancel={handleCancel}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default UserModifyScreen;
