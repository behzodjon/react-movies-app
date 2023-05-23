const commonOptions = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": "b2b2908180msh35b599cd39ee2d2p1879e2jsna181619ea708",
        "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
    },
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
