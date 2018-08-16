import { incremetar } from "./numeros";

describe('Pruebas de números', () =>{
    it('Debe de retornar 100, si el número ingresado es mayor a 100',()=>{
        const resp = incremetar(300);
        expect(resp).toBe(100);
    });
    it('Debe de retornar el número ingresado ++1, si el número ingresado no es mayor a 100', () => {
        const resp = incremetar(10);
        expect(resp).toBe(11);
    });
});