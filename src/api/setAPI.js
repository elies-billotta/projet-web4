import { API_KEY, API_URL } from "@/constants";

const getSetWithID = async (setID) => {
    try{
        const response = await fetch(`${API_URL}/sets/${setID}?key=${API_KEY}`);
        const data = await response.json();
        return data;
    }
    catch (error){
        console.log(error);
    }
};

export { getSetWithID };