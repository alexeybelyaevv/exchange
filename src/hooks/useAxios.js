import { useEffect, useState } from "react";

import axios from "axios";

axios.defaults.baseURL = "https://bank.gov.ua/NBUStatService/v1";

const useAxios = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setloading] = useState(true);

  const fetchData = () => {
    axios
      .get("/statdirectory/exchange?json")
      .then((res) => {
        setResponse(res.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setloading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { response, error, loading };
};

export default useAxios;
