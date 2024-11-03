import { StyleSheet } from "react-native";
import Screen from "../layout/Screen";
import ModuleView from "../entity/modules/moduleView";

export const ModuleViewScreen = ({ navigation, route }) => {
  // Initialsations -------------------
  const { module } = route.params;

  // State ----------------------------
  // Handlers -------------------------
  // View -----------------------------
  return (
    <Screen>
      <ModuleView module={module} />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default ModuleViewScreen;
