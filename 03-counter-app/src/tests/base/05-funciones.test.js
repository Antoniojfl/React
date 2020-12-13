import '@testing-library/jest-dom';
import {getUser,getUsuarioActivo} from '../../base/05-funciones';


describe('Pruebas de 05-funciones', () => {
    test('debe de retornar un objeto ', () => {

        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser;

        expect(testUser).toEqual(user());
        
    })

    //getUsuarioActivo debe de retornar un objeto

    test('debe de retornar un objeto con argumentos', () => {
        const name = 'Antonio';
        const testUser = {
            uid: 'ABC567',
            username: name
        };

        const activeUser = getUsuarioActivo;
        expect(testUser).toEqual(activeUser(name));
        
    })
    
})
