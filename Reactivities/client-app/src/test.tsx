class Person {
  name = "Shree";
  printName = () => {
    console.log(this.name);
  };
}

export default new Person();
