import {getHeroeById,getHeroesByOwner} from '../../base/08-imp-exp'
import '@testing-library/jest-dom';
import heroes from '../../data/heroes';

describe('Pruebas en funciones de heroes', () => {

    test('should return a heroe by id', () => {

        const id = 1;
        const heroe = getHeroeById(id);

        expect( heroe ).toEqual( heroes.find(( heroe )=> heroe.id === id) );
        
    })

    test('should return undefined if heroe doesnt exist', () => {

        const id = 8;
        const heroe = getHeroeById(id);

        expect( heroe ).toEqual( undefined );
        // o se puede usar .toBe ya que undefined es primitivo
    })

    test('should return DC hero array', () => {

        const owner = 'DC';
        const heroe = getHeroesByOwner(owner);

        expect( heroe ).toEqual( heroe.filter((h)=>h.owner === 'DC') );
        
    })

    test('should return length of marven array 2', () => {

        const owner = 'Marvel';
        const heroe = getHeroesByOwner(owner);

        expect( heroe.length ).toEqual( 2 );
        
    })
    
    
})
