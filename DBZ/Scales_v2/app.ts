

interface IScalable {
    getScale(_weight: number):number;
    getName(_name: string):void;
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

class Scales {
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

    getWeight(_weight: IScalable):number {
        return _weight.getScale();
    }

    getTitle(_name: IScalable):string {
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
apple1.show();

let Scale = new Scales();
console.log("weight", Scale.getWeight(apple1));
console.log("name", Scale.getTitle(apple1));
Scale.add(apple1);
Scale.add(apple2);
Scale.add(apple3);
console.log("summa: ", Scale.getSumScale());
console.log("names: ", Scale.getNameList());



