var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export const dataRickAndMorty = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resPokemones = yield fetch('https://rickandmortyapi.com/api/character');
        const data = yield resPokemones.json();
        console.log(data.results);
        return data.results;
    }
    catch (error) {
        alert('error amigo mio');
        return [];
    }
});
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
