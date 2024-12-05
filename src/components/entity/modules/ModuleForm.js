import { useState } from "react";
import { StyleSheet } from "react-native";
import useLoad from "../../API/useLoad.js";
import Icons from "../../UI/Icons.js";
import Form from "../../UI/Form.js";

const defaultModule = {
  ModuleID: null,
  ModuleCode: null,
  ModuleName: null,
  ModuleLevel: null,
  moduleYear: null,
  ModuleLeaderID: null,
  ModuleImageURL: null,
};

const ModuleForm = ({ orginalModule, onSubmit, onCancel }) => {
  // Initialisations ---------------------
  (defaultModule.ModuleID = Math.floor(100000 + Math.random() * 9000000)),
    (defaultModule.ModuleImageURL =
      "https://images.freeimages.com/images/small-previews/cf5/cellphone-1313194.jpg");

  const yearsEndpoint = "https://softwarehub.uk/unibase/api/years";
  const staffEndpoint = "https://softwarehub.uk/unibase/api/users/staff";

  const levels = [
    { value: 3, label: "3 (Foundation)" },
    { value: 4, label: "4 (First Year)" },
    { value: 5, label: "5 (Second Year)" },
    { value: 6, label: "6 (Final Year)" },
    { value: 7, label: "7 (Master)" },
  ];

  // State -------------------------------
  const [module, setModule] = useState(orginalModule || defaultModule);
  const [years, isYearsLoading] = useLoad(yearsEndpoint);
  const [leaders, isLeadersLoading] = useLoad(staffEndpoint);

  // Handlers ----------------------------
  const handleChange = (field, value) =>
    setModule({ ...module, [field]: value });
  const handleSubmit = () => onSubmit(module);

  // View --------------------------------
  const submitLabel = orginalModule ? "Modify" : "Add";
  const submitIcon = orginalModule ? <Icons.Edit /> : <Icons.Add />;

  const cohorts = years.map((year) => ({
    value: year.YearID,
    label: year.YearName,
  }));

  const staff = leaders.map((leader) => ({
    value: leader.UserID,
    label: `${leader.UserFirstname} ${leader.UserLastname}`,
  }));

  return (
    <Form
      onSubmit={handleSubmit}
      onCancel={onCancel}
      submitLabel={submitLabel}
      submitIcon={submitIcon}
    >
      <Form.InputText
        label="Module Code"
        value={module.ModuleCode}
        onChange={(value) => handleChange("ModuleCode", value)}
      />
      <Form.InputText
        label="Module Name"
        value={module.ModuleName}
        onChange={(value) => handleChange("ModuleName", value)}
      />
      <Form.InputSelect
        label="Module Level"
        prompt="Select Module Level ..."
        options={levels}
        value={module.ModuleLevel}
        onChange={(value) => handleChange("ModuleLevel", value)}
      />
      <Form.InputSelect
        label="Module Cohort"
        value={module.ModuleYearID}
        onChange={(value) => handleChange("ModuleYearID", value)}
        prompt="Select Module Cohort ..."
        options={cohorts}
        isLoading={isYearsLoading}
      />

      <Form.InputSelect
        label="Module Leader"
        value={module.ModuleLeaderID}
        onChange={(value) => handleChange("ModuleLeaderID", value)}
        prompt="Select Module Leader ..."
        options={staff}
        isLoading={isLeadersLoading}
      />

      <Form.InputText
        label="Module Image URL"
        value={module.ModuleImageURL}
        onChange={(value) => handleChange("ModuleImageURL", value)}
      />
    </Form>
  );
};
const styles = StyleSheet.create({});

export default ModuleForm;
