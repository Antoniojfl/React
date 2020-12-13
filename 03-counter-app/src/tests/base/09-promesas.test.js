const { getHeroeByIdAsync } = require("../../base/09-promesas");
const { default: heroes } = require("../../data/heroes");



describe('Pruebas con promesas', () => {

    test('Debe de retortar un heroe async ', (done) => {

        // Arrange
        const id = 1;

        // Act
        const buscaHeroe = heroes.find((heroe)=>heroe.id === 1);
        
        // Assert
        getHeroeByIdAsync( id )
            .then((heroe)=>{
                
                expect(heroe).toBe(buscaHeroe);
                done()
            });       
        
    })
    
    test('Debe de retortar un heroe async ', (done) => {

        //const id = 1;
        const heroet = {
            id: 1,
            name: 'Batman',
            owner: 'DC'
        };
        
        getHeroeByIdAsync( heroet.id )
            .then((heroe)=>{
                
                expect(heroe).toEqual(heroet);
                done()
            });     
        
    })

    test('Debe de retortar un error si no encuentra el heroe ', (done) => {

        const id = 10;
        const errorMsg = 'No se pudo encontrar el héroe';
    
        //const buscaHeroe = heroes.find((heroe)=>heroe.id === 1);
        
        getHeroeByIdAsync( id )
            .catch((error)=>{
                
                expect(error).toBe(errorMsg);
                done()
            });
            
        })
    
    
    
    
})


