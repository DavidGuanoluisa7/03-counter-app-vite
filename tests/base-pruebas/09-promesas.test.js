import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";


describe('Pruebas en 09-promesas', () => { 

    //done le dice a jest, ya termine
    test('getHeroeByIdAsync debe de retornar un héroe ', (done) => { 

        //then para demostrar que todo esta completado
        //catch para presentar un error

        const id = 1;
        //síncrono, que se ejecute el código en secuencia
        //Asíncrono, que se ejecute la promesa aparte del código
        //getHeroeByIdAsync, es una tarea asíncrona
        //SIEMPRE TENEMOS QUE ESPERAR LA RESPUESTA DE LA PROMESA DE 2 FORMAS: CON ESTE DONE, O EL ASYNC Y AWAIT
        getHeroeByIdAsync(id)//.then, así puede ir alado de la promesa
        
        .then(hero=> {

            expect (hero).toEqual({
                id: 1,
                name: 'Batman',
                owner: 'DC'
            });
            done();
        });

     });


     test('getHeroeByIdAsync debe de dar un error si héroes no existe ', (done) => { 

        const id = 100;
        getHeroeByIdAsync(id)


        //aquí solo es necesario evaluar el catch no el then, no se debería poner
        //va a devolver las palabras hero ó error al actuar el then y el catch
        .then(hero=>{
            expect(hero).toBeFalsy();
        done(); 
        })
        .catch(error=>{
            //${}, para agregar variables en una parte de texto
            expect (error).toBe('No se pudo encontrar el héroe 100 con ${ id } ');

           done();    
        });



     });


 });