const getSetWithID = async (setID) => {
    try{
        const response = await fetch(`${import.meta.env.API_URL}/sets/${setID}?key=${import.meta.env.API_KEY}`);
        const data = await response.json();
        return data;
    }
    catch (error){
        console.log(error);
    }
};

export { getSetWithID };