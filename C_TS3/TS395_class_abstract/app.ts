
abstract class Transp {

    speed:number;

    constructor() {
        this.speed=0;
    }
    
    start(_speed:number):void {
        this.speed=_speed;
    }
    
    stop():void {
        this.speed=0;
    }

    abstract show():void;
        
}

class Car extends Transp {

    numb:string;

    constructor(_numb:string) {
        super(); 
        this.numb=_numb;
    }

    beep():void {
        console.log("car "+this.numb+" beeep!");
    }

    show():void {
        console.log("car numb="+this.numb+" speed="+this.speed);
    }
}

let car1:Car=new Car("2870-ОГО");

car1.show();
