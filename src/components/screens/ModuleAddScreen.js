import { StyleSheet } from "react-native";
import Screen from "../layout/Screen";
import ModuleForm from "../entity/modules/ModuleForm";

export const ModuleAddScreen = ({ navigation, route }) => {
  // Initialsations -------------------
  const { onAdd } = route.params;

  // State ----------------------------
  // Handlers -------------------------
  const handleAdd = () => onAdd(module);
  const handleCancel = navigation.goBack;

  // View -----------------------------
  return (
    <Screen>
      <ModuleForm onSubmit={onAdd} onCancel={handleCancel} />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default ModuleAddScreen;
