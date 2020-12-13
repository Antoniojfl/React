import '@testing-library/jest-dom';
import {getSaludo} from '../../base/02-template-string';



describe('Pruebas en 02-template-string.js', () => {

    test('should return hola Antonio', () => {

        const nombre = 'Antonio';

        const saludo = getSaludo(nombre);

        expect( saludo ).toBe('Hola ' + nombre );
         
    })

    test('should return hola Carlos si no hay arumentos', () => {

        //const nombre = 'Antonio';

        const saludo = getSaludo();

        expect( saludo ).toBe('Hola Carlos');
         
    })
    
    
})
    