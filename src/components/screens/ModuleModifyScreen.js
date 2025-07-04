import { StyleSheet, Text, View } from "react-native";
import Screen from "../layout/Screen";
import ModuleForm from "../entity/modules/ModuleForm.js";

export const ModuleModifyScreen = ({ navigation, route }) => {
  // Initialsations -------------------
  const { module, onModify } = route.params;

  // State ----------------------------
  // Handlers -------------------------
  const handleCancel = navigation.goBack;

  // View -----------------------------
  return (
    <Screen>
      <ModuleForm
        orginalModule={module}
        onSubmit={onModify}
        onCancel={handleCancel}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default ModuleModifyScreen;
