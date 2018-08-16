import { FormularioRegister } from './formularios';
import { FormBuilder } from "@angular/forms";

describe('Fromularios', ()=>{
    let componente: FormularioRegister;

    beforeEach(()=>{
        componente = new FormularioRegister(new FormBuilder());
    });
    it('Debe de crear un formulario con dos campos', ()=>{
        expect(componente.form.contains('email')).toBeTruthy();
        expect(componente.form.contains('password')).toBeTruthy();
    });
    it('El email tiene que ser obligatorio', ()=>{
        const control = componente.form.get('email');
        control.setValue('');
        expect(control.valid).toBeFalsy();
    });
    it('El email tiene que ser válido', () => {
        const control = componente.form.get('email');
        control.setValue('fernando@gmail.com');
        expect(control.valid).toBeTruthy();
    });
});