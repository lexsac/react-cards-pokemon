import axios from "axios";
import { useState } from 'react';
import uuid from "uuid";

function useAxios(url) {
    const [responses, setResponses] = useState([]);
  
    const addCard = async() => {
      const response = await axios.get(url);
      setResponses(data => [...data, { ...response.data, id: uuid() }]);
    };
    console.log(responses);
    return [responses, addCard];
}

export default useAxios;