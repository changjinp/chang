class Pet {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  run() {
    alert(`${this.name} is running!`);
  }
}

const cheez = new Pet("치즈", "yellow");
cheez.run();

//////고양이//////

class Cat extends Pet {
  constructor(name, color, breed) {
    super(name, color);
    this.breed = breed;
  }
  viewInfo() {
    alert(`${this.name},${this.color},${this.breed}`);
  }
}
const chee = new Cat("고양이", "yellow", "품종");
chee.viewInfo();
