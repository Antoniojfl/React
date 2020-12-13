import '@testing-library/jest-dom';
import { getImagen } from '../../base/11-async-await';




describe('Pruebas con async await', () => {
    
    test('should resolve async await block', async() => {

        const string = 'string';

        const getUrl = await getImagen()
        console.log(getUrl);
        
        expect(typeof getUrl).toBe(string);


        
    })
     

    
})
  