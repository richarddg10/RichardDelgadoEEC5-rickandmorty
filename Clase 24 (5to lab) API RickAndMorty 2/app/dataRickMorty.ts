import { tiposRickMorty } from './components/tiposRickMorty/tiposRickMorty';

export const dataRickAndMorty = async (): Promise<Array<tiposRickMorty>> => {
    try {
        const resPokemones = await fetch('https://rickandmortyapi.com/api/character');
        const data = await resPokemones.json();
        console.log(data.results);
        return data.results;
    } catch (error) {
        alert('error amigo mio');
        return [];
    }
};







/*
const dataPokemones = (callback: (data:Array<any>) => void) => {
    const pokemones = fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0');
    const res = pokemones.then(res => res.json());
    res.then(data => callback(data));
};

export default dataPokemones;



const dataPokemones = async (): Promise<{ name: string; url: string }[]> => {
    try {
        const resPokemones = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0');
        const data = await resPokemones.json();
        console.log(data);
        return data.results;
    } catch (error) {
        alert('error amigo mio');
        return [];
    }
};



const dataPokemones = (callback: (p: { name: string; url: string }[]) => void) => {
    
    fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0').then((data) => {
        return data.json();
    }).then((data) => {
        console.log(data);
        callback(data);
    }).catch ((error) => {
        alert('error amigo mio');
    });
};
*/

//import { tiposPokemones } from './components/tiposPokemones/tiposPokemones';

/*
const dataPokemones = async (id: string|number) => {
    try {
        const resPokemones = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
        const data = await resPokemones.json();
        console.log(data);
        //return data.results;
    } catch (error) {
        //alert('error amigo mio');
        //return [];
    }

};

export const accederData = (id: number) => {
    for (let i = 1; i <= id; i++) {
        dataPokemones(i);
      }
};
*/
//export default accederData(100);

/*
export const urlPokemones = async (): Promise<Array<tiposPokemones>> => {
    try {
        const resPokemones = await fetch('https://pokeapi.co/api/v2/pokemon/1/');
        const data = await resPokemones.json();
        console.log(data);
        return data.results;
    } catch (error) {
        alert('error amigo mio');
        return [];
    }
};
*/