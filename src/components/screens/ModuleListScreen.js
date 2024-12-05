import {
  ActivityIndicator,
  LogBox,
  Alert,
  StyleSheet,
  Text,
  View,
} from "react-native";
import useLoad from "../API/useLoad.js";
import API from "../API/API.js";
import Screen from "../layout/Screen";
import Icons from "../UI/Icons.js";
import { Button, ButtonTray } from "../UI/Button.js";
import ModuleList from "../entity/modules/moduleList.js";

export const ModuleListScreen = ({ navigation }) => {
  // Initialsations -------------------
  LogBox.ignoreLogs([
    "Non-serializable values were found in the navigation state",
  ]);
  const modulesEndpoint = "https://softwarehub.uk/unibase/api/modules";

  // State ----------------------------
  const [modules, setModules, isLoading, loadModules] =
    useLoad(modulesEndpoint);
  // Handlers -------------------------
  const onDelete = async (module) => {
    const deleteEndpoint = `${modulesEndpoint}/${module.ModuleID}`;
    const result = await API.delete(deleteEndpoint, module);
    if (result.isSuccess) {
      loadModules(modulesEndpoint);
      navigation.goBack();
    } else Alert.alert(result.message);
  };

  const onAdd = async (module) => {
    const result = await API.post(modulesEndpoint, module);
    if (result.isSuccess) {
      loadModules(modulesEndpoint);
      navigation.goBack();
    } else Alert.alert(result.message);
  };

  const onModify = async (module) => {
    const putEndpoint = `${modulesEndpoint}/${module.ModuleID}`;
    const result = await API.put(putEndpoint, module);
    if (result.isSuccess) {
      loadModules(modulesEndpoint);
      navigation.navigate("ModuleViewScreen", { module, onDelete, onModify });
    } else Alert.alert(result.message);
  };

  const gotoViewScreen = (module) =>
    navigation.navigate("ModuleViewScreen", { module, onDelete, onModify });

  const gotoAddScreen = () => navigation.navigate("ModuleAddScreen", { onAdd });
  // View -----------------------------
  return (
    <Screen>
      <ButtonTray>
        <Button
          label="Add Module"
          icon={<Icons.Add />}
          onClick={gotoAddScreen}
        />
      </ButtonTray>
      {isLoading && (
        <View style={styles.spinner}>
          <Text>Retrieving records from {modulesEndpoint} ...</Text>
          <ActivityIndicator size="large" />
        </View>
      )}
      <ModuleList modules={modules} onSelect={gotoViewScreen} />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default ModuleListScreen;
