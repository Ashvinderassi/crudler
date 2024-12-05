import { useState, useEffect } from "react";
import API from "../API/API.js";

const useLoad = (loadEndpoint) => {
  // State -------------------------------
  const [records, setRecords] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  // Loader ------------------------------
  const loadRecords = async (endpoint) => {
    const response = await API.get(endpoint);
    setIsloading(false);
    if (response.isSuccess) setRecords(response.result);
  };

  useEffect(() => {
    loadRecords(loadEndpoint);
  }, []);

  // return ------------------------------
  return [records, setRecords, isLoading, loadRecords];
};

export default useLoad;
