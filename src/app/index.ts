/* tous les exports ici */
import { Store } from './store'
import * as services from './services' /* importe tous les services */
/* pour les services */
/* convert an object to an array */
/* get all the values from an object an place into an array */
const mapValuesToArray = (obj) => Object.keys(obj).map(key => obj[key]);

/* comme ca on na pas a toutle temps importer et exporter 
tous les services a chaque fois quon en crée de nouveaux, 
ca se fait automatiquement tant quils son contenu dans le dossier services*/
export const providers = [
    Store,
    ...mapValuesToArray(services)
]

export { App } from './app';
export { routes } from './routes';

