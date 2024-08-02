export class Robot {
  piloto: string;
  energia: number = 0;
  poderes: string[] = ['Volar', 'Rayos X', 'Fuego', 'Teletransporte'];

  constructor(piloto: string) {
    this.piloto = piloto;
  }

  initializeSystem() {
    this.energia = 100;
    console.log('Bienvenido, ' + this.piloto);
  }

  shoot() {
    this.energia -= 10;
    console.log('Disparo, energia: ' + this.energia);
  }
}
