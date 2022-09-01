import { getImagen } from "../../src/base-pruebas/11-async-await"

describe('Pruebas en 11-async-await.js', async() => { 
    test('getImagen debe retornar un error si no tnemos api key', () => { 
        
        const resp = await getImagen();
    
        //expect(typeof url).toBe('string');

        expect(resp).toBe('No se encontro la imagen');

     });

});



