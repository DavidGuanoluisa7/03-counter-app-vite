import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr"

describe('Pruebas en 07-deses-arr', () => { 
    
    test('Debe retornar string y un número',()=>{


        //desestructuración [lettters, numbers]
        const [letters, numbers] = retornaArreglo();
        
        //1)
        expect(letters).toBe('ABC');
        expect(numbers).toBe(123);

         //2)
        expect(typeof letters).toBe('string')
        expect(typeof numbers).toBe('number')

         //3) letters mientras yo espero un string
        expect(letters).toEqual(expect.any(string));


    });


 });