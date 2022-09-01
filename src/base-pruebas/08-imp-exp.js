import heroes from '../data/heroes';


//heroe and heroe.id, la palabra heroe puede ser cualquier word
export const getHeroeById = (id) => heroes.find( (heroe) => heroe.id === id );
export const getHeroesByOwner = ( owner ) => heroes.filter( (heroe) => heroe.owner === owner );



