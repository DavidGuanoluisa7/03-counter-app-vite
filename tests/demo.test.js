describe('Pruebas en <DemoComponent/>', () => { 


test('Esta prueba no debe fallar', () => {

    //1. Inicialización
    const message1 = 'Hola Mundo';


    //2. Estímulo
    const message2 = message1.trim();


    //3. Obervar el comprotamiento... Esperado
    //expect(message1).toBe(message2);

    expect(message1).toBe(message2);

});

});