import { IncrementadorComponent } from './incrementador.component';
describe('Incrementador component unit', () => {
    let componente: IncrementadorComponent;
    beforeEach(function() {
        componente = new IncrementadorComponent();
    });
    
    it('No debe pasar de 100 el progreso', () => {
        componente.progreso = 50;
        componente.cambiarValor(5);
        expect(componente.progreso).toBe(55);
    });
});
