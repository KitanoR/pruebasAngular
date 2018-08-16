import { Jugador } from './clases';
describe('Pruebas de clases', () =>{
    const jugador = new Jugador();
    // beforeAll(); // antes de todas
    // beforeEach(); // antes de cada una función

    // afterAll();
    // afterEach();
    beforeEach(()=>{
        jugador.hp = 100;
    });
    it('Debe de retornar 80 de hp, si recibe 20 de daño', ()=>{
        
        const resp = jugador.recibeDanio(20);
        expect(resp).toBe(80);
    });
    it('Debe de retornar 50 de hp, si recibe 50 de daño', () => {
        const resp = jugador.recibeDanio(50);
        expect(resp).toBe(50);
    });
    it("Debe de retornar 0 de HP, si recibe 100 de daño o más", () => {
      const resp = jugador.recibeDanio(100);
      expect(resp).toBe(0);
    });
})