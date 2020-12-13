import '@testing-library/jest-dom';
import {retornaArreglo} from '../../base/07-deses-arr';

describe('Pruebas con 07 deses array', () => {

    test('should return a string and a number', () => {
        const [letras,numeros] = retornaArreglo();
        expect(letras).toEqual( 'ABC' );
        expect(numeros).toEqual( 123 );

        expect( typeof letras ).toEqual( 'string' );
        expect( typeof numeros ).toEqual( 'number' );

        
    })
    
    
})
