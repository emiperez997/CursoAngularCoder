import { Robot } from './robot.class';

// describe -> agrupador
describe('Prueba sobre la clase robot', () => {
  // beforeEach -> ejecutado antes de cada prueba
  beforeEach(() => {});

  // it -> prueba
  it('Al crear la instancia, debe realizar la asignacion de piloto', () => {
    // Logica para comprobar lo mencionado
    const robot = new Robot('Juan');
    expect(robot.piloto).toBe('Juan');
  });

  it('Al iniciar el sistema, la energia debe ser 100%', () => {
    const robot = new Robot('Matias');

    robot.initializeSystem();

    expect(robot.energia).toBe(100);
  });

  it("Al iniciar sistema, debe mostrar 'Bienvenido, Martin'", () => {
    const robot = new Robot('Martin');

    // El espia es para ver si se ha llamado a la funcion
    const spyOnLog = spyOn(console, 'log');

    robot.initializeSystem();

    // Se llama a la funcion
    expect(spyOnLog).toHaveBeenCalledWith('Bienvenido, Martin'); // Se comprueba que se ha llamado a la funcion
  });

  it('Al disparar, la energia debe disminuir', () => {
    const robot = new Robot('Pedro');

    robot.initializeSystem();
    robot.shoot();

    expect(robot.energia).toBe(90);
  });

  it('Al instanciar Robot, los poderes deben estar definidos', () => {
    const robot = new Robot('Martin');
    expect(robot.poderes).toEqual([
      'Volar',
      'Rayos X',
      'Fuego',
      'Teletransporte',
    ]);
  });
});
