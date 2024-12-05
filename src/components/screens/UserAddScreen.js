import { StyleSheet } from "react-native";
import Screen from "../layout/Screen";
import UserForm from "../entity/user/UserForm";

export const UserAddScreen = ({ navigation, route }) => {
  // Initialsations -------------------
  const { onAdd } = route.params;

  // State ----------------------------
  // Handlers -------------------------
  const handleAdd = () => onAdd(user);
  const handleCancel = navigation.goBack;

  // View -----------------------------
  return (
    <Screen>
      <UserForm onSubmit={onAdd} onCancel={handleCancel} />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default UserAddScreen;
