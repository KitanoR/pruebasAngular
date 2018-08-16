import { mensaje } from './string';
describe('Pruebas de strings', () => {
  it('Debe de regresar un string', () => {
    const res = mensaje("Cayetano");
    expect(typeof res).toBe("string");
  });
  it('Debe de retornar un saludo con el nombre enviado', () => {
    const nombre = 'Cayetano';
    const resp = mensaje(nombre);
    expect(resp).toContain(nombre);
  });
});
