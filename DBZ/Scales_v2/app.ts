

interface IScalable {
    getScale(_weight: number):number;
    getName(_name: string):void;
}


class Apple {
    weight: number;
    name: string;
    constructor(_weight: number, _name: string) {
        this.weight = _weight;
        this.name = _name;
    }

    getWeight(scale: IScalable ):void {
        scale.getScale(this.weight)
    }

    show():void {
        console.log('weight', this.weight, "name", this.name);
    }
}

class Orange {
    weight: number;
    name: string;
    constructor(_weight: number, _name: string) {
        this.weight = _weight;
        this.name = _name;
    }
    show():void {
        console.log('weight', this.weight, "name", this.name);
    }
}

class Scales implements IScalable{
    productsList:  Array<object> = [];

    constructor() {

    }

    getSumScale():number {
        let weightProducts:number = 0;
        this.productsList.forEach((item) => {
            weightProducts += item.weight;
        });
        return weightProducts;
    }

    getNameList():any {
        let listProducts = [];
        this.productsList.filter((elem) => {
            listProducts.push(elem.name);
        });
        return listProducts;
    }

    getScale(_weight: number):any {
        return _weight;
    }

    getName(_name: string):string {
        return _name;
    }

    add(item: IScalable):void{
        this.productsList.push(item);
        console.log("Список продуктов: ", this.productsList);
    }
}

let apple1 = new Apple(10, "test");
let apple2 = new Apple(20, "test2");
let apple3 = new Apple(30, "test3");
apple1.show();
let Scale = new Scales();



// let apple1 = new Apple(10, "Антоновка");
// let apple2 = new Apple(9, "Андреевка");
// let apple3 = new Apple(8, "Александровка");
// let apple4 = new Apple(7, "Малиновка");
// apple1.show();
// apple2.show();
// apple3.show();
// apple4.show();
//
// let orange1 = new Orange(1, "Миндаль");
// let orange2 = new Orange(2, "Красный");
// let orange3 = new Orange(3, "Желтый");
// let orange4 = new Orange(4, "Без косточек");
// orange1.show();
// orange2.show();
// orange3.show();
// orange4.show();
//
// let scale = new Scales();
//
// scale.add(apple1);
// scale.add(apple2);
// scale.add(apple3);
// scale.add(apple4);
//
// scale.add(orange1);
// scale.add(orange2);
// scale.add(orange3);
// scale.add(orange4);
//
// scale.getSumScale();
// scale.getNameList();
// scale.getNameList();
// scale.getNameList();
// scale.getSumScale();
// scale.getSumScale();
// console.log("scale.getSumScale();", scale.getSumScale());
// console.log("scale.getNameList();", scale.getNameList());
