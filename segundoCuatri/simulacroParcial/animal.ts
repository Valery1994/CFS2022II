import { executionAsyncId } from "async_hooks";

class Animal{
    public name: string;
    public constructor(name: string) {
      this.name = name;
    }
    public makeSound(): void {
      console.log (this.makeSound());
    }
  }
class Cat extends Animal{
  public constructor(name: string) {
    super(name)
}
public makeSound(): void {
  console.log('meow meow\n');
}
}
  let minino: Cat = new Cat('Pocky');
  minino.makeSound(); // -> meow meow
  minino.name
class Dog extends Animal{
     
    public constructor(name: string) {
      super(name)
    }
    public makeSound(): void {
      console.log ('wuff wuff\n');
    }
   }
    
    
   let firulais: Dog = new Dog('cocky');
   firulais.makeSound(); // -> wuff wuff
   firulais.name