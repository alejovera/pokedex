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
export const getTypePokes = async (type) => {
    try {
        let url = `https://pokeapi.co/api/v2/type/${type}`;
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

export const getPokeDataSingular = async (name) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon/${name}`;
        const res = await fetch(url);
        console.log(res);
        const data = await res.json();
        console.log(data);
        return data;
    } catch (err) {
        console.log(err.message);
    }
};
