
class Transp {

    speed:number;

    protected maxSpeed:number;
    
    constructor(private serialNumber:string) {
        this.speed=0; 
        this.maxSpeed=100;
        // свойство serialNumber автоматически создано 
        // с модификатором private и ему присвоено
        // значение аргумента конструктора serialNumber
    }

    getSerialNumber():string {
        return this.serialNumber;
    }
    
}

class Car extends Transp {

    constructor(_serialNumber:string,public carNumber:string) {
        super(_serialNumber); 
        // свойство carNumber автоматически создано 
        // с модификатором public и ему присвоено
        // значение аргумента конструктора carNumber
    }

    show():void {
        console.log("car num="+this.carNumber
          +" speed="+this.speed+" maxspeed="+this.maxSpeed);
    }
}

let car1:Car=new Car("233322","2870-ОГО");

car1.show(); // вызов публичного метода

// обращение к публичному свойству
console.log("номерной знак машины: "+car1.carNumber); 
// в т.ч. унаследованному
console.log("скорость машины: "+car1.speed); 
