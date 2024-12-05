import { useState } from "react";
import { StyleSheet } from "react-native";
import useLoad from "../../API/useLoad.js";
import Icons from "../../UI/Icons.js";
import Form from "../../UI/Form.js";

const defaultUser = {
  UserFirstname: null,
  UserLastname: null,
  UserEmail: null,
  // UserRegistered: null,
  UserLevel: null,
  UserUsertypeID: null,
  UserImageURL: null,
  // UserUsertypeName: null,
  // UserYearName: null,
};

const UserForm = ({ orginalUser, onSubmit, onCancel }) => {
  // Initialisations ---------------------
  (defaultUser.UserID = Math.floor(100000 + Math.random() * 9000000)),
    (defaultUser.UserImageURL =
      "https://images.freeimages.com/images/small-previews/cf5/cellphone-1313194.jpg");

  const staffEndpoint = "https://softwarehub.uk/unibase/api/users/staff";
  const yearsEndpoint = "https://softwarehub.uk/unibase/api/years";

  const levels = [
    { value: 3, label: "3 (Foundation)" },
    { value: 4, label: "4 (First Year)" },
    { value: 5, label: "5 (Second Year)" },
    { value: 6, label: "6 (Final Year)" },
    { value: 7, label: "7 (Master)" },
  ];

  const employee = [
    { value: 2, label: "Student" },
    { value: 1, label: "Staff" },
  ];

  // State -------------------------------
  const [user, setUser] = useState(orginalUser || defaultUser);
  const [years, isYearsLoading] = useLoad(yearsEndpoint);
  const [leaders, isLeadersLoading] = useLoad(staffEndpoint);

  // Handlers ----------------------------
  const handleChange = (field, value) => setUser({ ...user, [field]: value });
  const handleSubmit = () => onSubmit(user);

  // View --------------------------------
  const submitLabel = orginalUser ? "Modify" : "Add";
  const submitIcon = orginalUser ? <Icons.Edit /> : <Icons.Add />;

  const cohorts = years.map((year) => ({
    value: year.YearID,
    label: year.YearName,
  }));

  return (
    <Form
      onSubmit={handleSubmit}
      onCancel={onCancel}
      submitLabel={submitLabel}
      submitIcon={submitIcon}
    >
      <Form.InputText
        label="User First Name"
        value={user.UserFirstname}
        onChange={(value) => handleChange("UserFirstname", value)}
      />
      <Form.InputText
        label="User Last Name"
        value={user.UserLastname}
        onChange={(value) => handleChange("UserLastname", value)}
      />
      <Form.InputText
        label="User Email"
        value={user.UserEmail}
        onChange={(value) => handleChange("UserEmail", value)}
      />
      <Form.InputSelect
        label="User Year ID"
        prompt="Select Year ID ..."
        options={cohorts}
        value={user.UserYearID}
        onChange={(value) => handleChange("UserYearID", value)}
      />
      <Form.InputSelect
        label="User Level"
        prompt="Select User Level ..."
        options={levels}
        value={user.UserLevel}
        onChange={(value) => handleChange("UserLevel", value)}
      />
      <Form.InputSelect
        label="User Type"
        prompt="Select User Type ..."
        options={employee}
        value={user.UserUsertypeID}
        onChange={(value) => handleChange("UserUsertypeID", value)}
      />

      <Form.InputText
        label="User Image URL"
        value={user.UserImageURL}
        onChange={(value) => handleChange("UserImageURL", value)}
      />
    </Form>
  );
};
const styles = StyleSheet.create({});

export default UserForm;
