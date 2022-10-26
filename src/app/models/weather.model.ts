export class Weather {

  id: number;
  main: number;
  description: number;
  icon: number;

  constructor(data?: any) {
    this.id = data.id;
    this.main = data.main;
    this.description = data.description;
    this.icon = data.icon;
  }

}
