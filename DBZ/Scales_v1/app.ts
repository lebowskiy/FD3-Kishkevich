
class Product {
    weight: number;
    name: string;

    constructor( _weight: number, _name: string ) {
        this.weight = _weight;
        this.name = _name;
    }

    getScale():number{
        return this.weight;
        // console.log("weight product: ", this.weight);
    }

    getName():string {
        return this.name;
        // console.log("name product: ", this.name);
    }

    show():void{
        console.log("Параметры продукта: ", this.name + " / " + this.weight);
    }
}


class Apple extends Product {

}

class Orange extends  Product {

}

class Scales {
    productsList: Array<Product> = [];

    constructor() {

    }

    getSumScale():void {
        let weightProducts:number = 0;
        this.productsList.forEach((item) => {
            weightProducts += item.weight;
            return weightProducts;
        });
        console.log("Общий вес продуктов -->",  weightProducts);
    }

    getNameList():void {
        let listProducts = [];
        this.productsList.filter((elem) => {
            listProducts.push(elem.name);
            return listProducts;
        });
        console.log("Список названий продуктов -->",  listProducts);
    }

    add(item: Product):void{
        this.productsList.push(item);
        console.log("Список продуктов: ", this.productsList);
    }
}

let apple1 = new Apple(10, "Антоновка");
let apple2 = new Apple(9, "Андреевка");
let apple3 = new Apple(8, "Александровка");
let apple4 = new Apple(7, "Малиновка");
apple1.show();
apple2.show();
apple3.show();
apple4.show();

let orange1 = new Orange(1, "Миндаль");
let orange2 = new Orange(2, "Красный");
let orange3 = new Orange(3, "Желтый");
let orange4 = new Orange(4, "Без косточек");
orange1.show();
orange2.show();
orange3.show();
orange4.show();

let scale = new Scales();

scale.add(apple1);
scale.add(apple2);
scale.add(apple3);
scale.add(apple4);

scale.add(orange1);
scale.add(orange2);
scale.add(orange3);
scale.add(orange4);

scale.getSumScale();
scale.getNameList();
scale.getNameList();
scale.getNameList();
scale.getSumScale();
scale.getSumScale();
