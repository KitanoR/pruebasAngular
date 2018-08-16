import { usuarioIngresado } from './booleanos';
describe('Pruebas de booleanos', ()=>{
    it('debe de retornar true', ()=>{
        const resp = usuarioIngresado();
        expect(resp).toBeTruthy();
    });
});