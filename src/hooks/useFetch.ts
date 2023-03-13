import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (method: string, url: string) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchItem = async () => {
      const res = await axios({
        method,
        url,
      });
      setItems(res.data.expense);
    };
    void fetchItem();
  }, []);

  return [items, setItems];
};

export default useFetch;
