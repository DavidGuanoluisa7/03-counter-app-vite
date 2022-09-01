import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe('Pruebas en 08-imp-exp', () => { 

   test('getHeroeById debe de retornar un héroe por ID ', () => { 

    const id = 1;
    const hero = getHeroeById(id);

    expect(hero).toEqual({id: 1, name: 'Batman', owner: 'DC'})

    });

    test('getHeroeById debe de retornar undefined si no existe ID ', () => { 

        const id = 100;
        const hero = getHeroeById(id);
    
        //toBeFalsy para evaluar que tenga un valor null undefined or false
        expect(hero).toBeFalsy();
    
        });

    //TAREA
    //Debe retornar un arreglo con los héroes de DC
    //Length === 3
    //toEqual al arreglo filtrado

    test('Debe retornar un arreglo con los héroes de DC', () => { 
    
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);

        expect(heroes.length).toBe(3);
        expect(heroes).toEqual([ 
            {id: 1,name: 'Batman',owner: 'DC'},
            {id: 3,name: 'Superman',owner: 'DC'},
            {id: 4,name: 'Flash',owner: 'DC'}
    ]);

    expect(heroes).toEqual(heroes.filter( (heroe) => heroe.owner === owner ));

    });

    // debe retornar un arreglo con los héroes de MARVEL
    //length === 2


    //questions?, xq me devuelve el nombre si además de owner tiene el nombre e id
    test('debe retornar un arreglo con los héroes de MARVEL', () => { 
        
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);

        expect(heroes.length).toBe(2);
        expect(heroes).toEqual(heroes.filter( (heroe) => heroe.owner === owner ));

     });

});
