const getSetMinYear = async (year, page) => {
    try{
        const response = await fetch(`${import.meta.env.VITE_API_URL}/sets/?key=${import.meta.env.VITE_API_KEY}&min_year=${year}&page_size=300`);
        const data = await response.json();
        return data.results;
    }
    catch (error){
        console.log(error);
    }
};

export { getSetMinYear };