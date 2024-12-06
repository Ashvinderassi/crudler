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
import Screen from "../layout/Screen.js";
import Icons from "../UI/Icons.js";
import { Button, ButtonTray } from "../UI/Button.js";
import UserList from "../entity/user/UserList.js";

export const UserListScreen = ({ navigation }) => {
  // Initialsations -------------------
  LogBox.ignoreLogs([
    "Non-serializable values were found in the navigation state",
  ]);
  const usersEndpoint = "https://softwarehub.uk/unibase/api/users";

  // State ----------------------------
  const [users, setUsers, isLoading, loadUsers] = useLoad(usersEndpoint);
  // Handlers -------------------------
  const onDelete = async (user) => {
    const deleteEndpoint = `${usersEndpoint}/${user.UserID}`;
    const result = await API.delete(deleteEndpoint, user);
    if (result.isSuccess) {
      loadUsers(usersEndpoint);
      navigation.goBack();
    } else Alert.alert(result.message);
  };

  const onAdd = async (user) => {
    const result = await API.post(usersEndpoint, user);
    if (result.isSuccess) {
      loadUsers(usersEndpoint);
      navigation.goBack();
    } else Alert.alert(result.message);
  };

  const onModify = async (user) => {
    const putEndpoint = `${usersEndpoint}/${user.UserID}`;
    const result = await API.put(putEndpoint, user);
    if (result.isSuccess) {
      loadUsers(usersEndpoint);
      navigation.navigate("UserViewScreen", { user, onDelete, onModify });
    } else Alert.alert(result.message);
  };

  const gotoViewScreen = (user) =>
    navigation.navigate("UserViewScreen", { user, onDelete, onModify });

  const gotoAddScreen = () => navigation.navigate("UserAddScreen", { onAdd });
  // View -----------------------------
  return (
    <Screen>
      <ButtonTray>
        <Button label="Add User" icon={<Icons.Add />} onClick={gotoAddScreen} />
      </ButtonTray>
      {isLoading && (
        <View>
          <Text style={styles.loading}>
            Retrieving records from {usersEndpoint}...{" "}
          </Text>
          <ActivityIndicator size="large" />
          <UserList users={users} onSelect={gotoViewScreen} />
        </View>
      )}
      <UserList users={users} onSelect={gotoViewScreen} />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default UserListScreen;
