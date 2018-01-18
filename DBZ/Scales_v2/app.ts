

interface IScalable {
    weight: number;
    name: string;
    getScale():number;
    getName():void;
}


class Apple implements IScalable {
    weight: number;
    name: string;
    constructor(_weight: number, _name: string) {
        this.weight = _weight;
        this.name = _name;
    }

    getScale():number {
        return this.weight;
    }

    getName():string {
        return this.name;
    }

    show():void {
        console.log('weight', this.weight, "name", this.name);
    }
}

class Orange implements IScalable{
    weight: number;
    name: string;
    constructor(_weight: number, _name: string) {
        this.weight = _weight;
        this.name = _name;
    }
    getScale():number {
        return this.weight;
    }

    getName():string {
        return this.name;
    }
    show():void {
        console.log('weight', this.weight, "name", this.name);
    }
}

class Scales {
    productsList:  Array<IScalable> = [];

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

    getWeight(_weight: IScalable):number {
        return _weight.getScale();
    }

    getTitle(_name: IScalable):void {
        return _name.getName();
    }

    add(item: IScalable):void{
        this.productsList.push(item);
        console.log("Список продуктов: ", this.productsList);
    }
}

let apple1 = new Apple(10, "Сорт 1");
let apple2 = new Apple(20, "Сорт 2");
let apple3 = new Apple(30, "Сорт 3");

let orange1 = new Orange(40, "Сорт 4");
let orange2 = new Orange(50, "Сорт 5");
let orange3 = new Orange(60, "Сорт 6");

apple1.show();
orange1.show();

let Scale = new Scales();
console.log("weight", Scale.getWeight(apple1));
console.log("name", Scale.getTitle(apple1));
Scale.add(apple1);
Scale.add(apple2);
Scale.add(apple3);
Scale.add(orange1);
Scale.add(orange2);
Scale.add(orange3);
console.log("summ: ", Scale.getSumScale());
console.log("names: ", Scale.getNameList());



