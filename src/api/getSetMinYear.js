import { API_KEY, API_URL } from "@/constants";

const getSetMinYear = async (year) => {
    try{
        const response = await fetch(`${API_URL}/sets/?key=${API_KEY}&min_year=${year}&page_size=15`);
        const data = await response.json();
        return data.results;
    }
    catch (error){
        console.log(error);
    }
};

export { getSetMinYear };