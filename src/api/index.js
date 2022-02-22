export const getAllPokes = async () => {
    try {
        let url = 'https://pokeapi.co/api/v2/pokemon?limit=15&offset=0';
        const res = await fetch(url);
        const data = await res.json();
        return data;
    } catch (err) {
        console.error(err.message);
    }
};

export const getPokeData = async (url) => {
    try {
        const res = await fetch(url);
        const data = await res.json();
        return data;
    } catch (err) {
        console.error(err.message);
    }
};