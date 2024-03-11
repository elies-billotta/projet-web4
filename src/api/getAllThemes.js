const getAllThemes = async () => {
    try{
        const response = await fetch(`${import.meta.env.VITE_API_URL}/themes/?key=${import.meta.env.VITE_API_KEY}&ordering=name&page_size=1000`);
        const data = await response.json();
        console.log(data)
        return data.results;
    }
    catch (error){
        console.log(error);
    }
}

export {getAllThemes};