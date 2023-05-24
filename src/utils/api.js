const commonOptions = {
    method: "GET",
    headers: {
        'X-RapidAPI-Key': '0be8c077b2msh6b4f85281bf71dfp178762jsned128a4c3abc',
        'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
    }
};

export const fetchData = async (url) => {
    try {
        const response = await fetch(url, commonOptions);
        const { results } = await response.json();
        return results;
    } catch (error) {
        console.error(error);
        return [];
    }
};

export const fetchSingleData = async (url) => {
    try {
        const response = await fetch(url, commonOptions);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return {};
    }
};
