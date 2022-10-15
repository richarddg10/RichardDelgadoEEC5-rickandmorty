import { dataRickAndMorty } from './dataRickMorty.js';

//import { accederData } from './dataPokemones.js';

//import urlPokemones from './dataPokemones.js';
//import Pokemones, { VariablesPokemones } from './components/pokemones/pokemones.js';
import { tiposRickMorty } from './components/tiposRickMorty/tiposRickMorty.js';


class MyContainer extends HTMLElement {

    //upMenu: UpMenu[] = [];
    //myPokemones: Pokemones[] = [];

    constructor() {
        super();
        this.attachShadow({ mode:'open' });

        /*
        const menuArriba = this.ownerDocument.createElement('up-menu') as UpMenu;
        this.upMenu.push(menuArriba);
        */

        /*
        dataPokemones((data) => {
            this.name = data.results;
        });
        */

        /*
        dataPokemones().then( datos => {
            datos.forEach((pokemones) => {
                const tarjetaPokemones = this.ownerDocument.createElement('my-pokemones') as Pokemones;
    
                tarjetaPokemones.setAttribute(VariablesPokemones.name, pokemones.name);
                tarjetaPokemones.setAttribute(VariablesPokemones.url, pokemones.url);
                this.myPokemones.push(tarjetaPokemones);
            });
        });

        */
    }

    async connectedCallback() {
        //const traerAPI = await accederData(100);
        const traerInfo = await dataRickAndMorty();
        //const traerURL = await urlPokemones();
        this.render(traerInfo);
    }

    render(traerInfo: Array<tiposRickMorty>) {
        if (this.shadowRoot) {

            /*const pokes = traerAPI.map(() => `<article>
            </article>`);*/

            const pokes = traerInfo.map(({id, name, status, image}) => `<section class="fondo">
                <section id="circle"></section>
                <h3 id="id">${id}</h3>
                <h5 id="name">${name}</h5>
                <h5 id="status">${status}</h5>
                <img id="image" src="${image}"/>
            </section>`);

            this.shadowRoot.innerHTML = `
                <link rel="stylesheet" href="./components/styleRickMorty.css">
                ${pokes.join('')}
            `;

            /*
            this.upMenu.forEach((menu)=> {
                this.shadowRoot?.appendChild(menu);
            });
            
            this.myPokemones.forEach((myPokemones)=> {
                this.shadowRoot?.appendChild(myPokemones);
            });
            */
        }
    }
}

customElements.define('my-container', MyContainer);