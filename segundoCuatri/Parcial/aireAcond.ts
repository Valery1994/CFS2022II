class Motor{
    protected marca:string;
    public constructor(marca:string){
      this.marca=marca
    }
    public getMarca() {
      return this.marca;
  }
  }
  class AireAcondicionado {
  public marca: string;
  public motor:Motor
   public temperatura:number;
      public constructor(marca: string,motor:Motor, temperatura:number) {
        this.marca = marca;
        this.temperatura=temperatura;
      }
      public aclimatar(): void {
        console.log (this.aclimatar());
      }
      public getMarca() {
        return this.marca;
    }
    public getTemperatura(){
      return this.temperatura
    }
    
  }
  
  class AireFrio extends AireAcondicionado{
    public constructor(marca: string, motor:Motor, temperatura:number) {
      super(marca,motor, temperatura  )
  }
  public aclimatar(): void {
    console.log("El aire acondicionado", this.marca,"enfria", this.temperatura,"grados");
  }
  public enfriar():void{
    this.temperatura-=1
  }
  }
  class AireCaliente extends AireAcondicionado{
    public constructor(marca: string, motor:Motor, temperatura:number) {
      super(marca, motor, temperatura)
  }
  public aclimatar(): void {
    console.log("El aire acondicionado", this.marca," calienta",this.temperatura,"grados");
  }
  public calentar():void{
    this.temperatura+=1
  }
  }
    let aire1: AireFrio = new AireFrio('Samsung',this.motor,10);
    aire1.aclimatar(); // ->  
    let aire2:AireCaliente=new AireCaliente("Philips",this.motor,20) 
    aire2.aclimatar()
    let temperaturaInicial:number=10
    aire1.enfriar()
    console.log(aire1)
    aire2.calentar()
    console.log(aire2)