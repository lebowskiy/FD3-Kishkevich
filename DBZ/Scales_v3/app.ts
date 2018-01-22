
class Product implements IStorageEngine{
     weight: number;
     name: string;

    constructor( _weight: number, _name: string ) {
        this.weight = _weight;
        this.name = _name;
    }

    getWeight():number{
        return this.weight;
    }

    getName():string {
        return this.name;
    }

}



interface IStorageEngine {
    getWeight():number; //получить вес элемента
    getName():string; //получить имя элемента
}


class Scales<StorageItem extends IStorageItem>  {
    productsList: StorageItem[];

    constructor() {
        this.productsList=[]
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


    storeItem(item:StorageItem):number {
        let index:number=this.productsList.length;
        this.productsList.push(item);
        console.log("добавлен объект"
            +" "+item.getName()+" весом "
            +item.getWeight()+" г."
        );
        return index;
    }
    getItem(index:number):StorageItem {

        return this.productsList[index];
    }


}

let storeProducts = new Scales<Product>();

let product1:Product = new Product(150, "апельсин");
let product2:Product = new Product(250, "яблоко");
let product3:Product = new Product(350, "банан");
let productIndex1:number = storeProducts.storeItem(product1);
let productIndex2:number = storeProducts.storeItem(product2);
let productIndex3:number = storeProducts.storeItem(product3);
let item01:Product = storeProducts.getItem(productIndex1);
let item02:Product = storeProducts.getItem(productIndex2);
let item03:Product = storeProducts.getItem(productIndex3);
console.log("item 01", item01);
console.log("item 02", item02);
console.log("item 03", item03);

