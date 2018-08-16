import { MedicoComponent } from './medico.component';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { MedicoService } from './medico.service';
import { HttpClientModule } from '@angular/common/http';
describe('Medico component', () => {
    let component: MedicoComponent;
    let fixture: ComponentFixture<MedicoComponent>;
    beforeEach(function() {
        TestBed.configureTestingModule({
            declarations: [
                MedicoComponent
            ],
            providers: [
                MedicoService
            ],
            imports: [
                HttpClientModule
            ]
        });
        fixture = TestBed.createComponent(MedicoComponent);
        component = fixture.componentInstance;
    });
    
    it('Debe de crearse el componente', () => {
        expect(component).toBeTruthy();
    });
    it("Debe de retornar el nombre del médico", () => {
      const nombre = 'Juan';
      const mensaje = component.saludarMedico(nombre);
        expect(mensaje).toContain(nombre);
    });
});
