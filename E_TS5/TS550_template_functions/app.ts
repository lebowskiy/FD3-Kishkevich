
interface IStorageItem {
    
    getWidth():number;  // ширина в мм
    getHeight():number; // высота в мм
    getDepth():number;  // глубина в мм

    getWeight():number; // вес в граммах

}
    
// хранилище однородных (похожих) объектов произвольного 
// класса StorageItem, реализующего интерфейс IStorageItem
class StorageArea {

    items: any[];

    constructor() {
        this.items=[];
    }

    // сохранить объект на складе
    storeItem<StorageItem extends IStorageItem>(item:StorageItem):number {
        let index:number=this.items.length;
        this.items.push(item);
        console.log("сохранён объект"
            +" размером "+item.getWidth()+"x"
              +item.getHeight()+"x"+item.getDepth()+" мм,"
            +" весом "+item.getWeight()+" г"
        );
        return index;
    }

    // получить сохранённый объект (объект продолжает храниться)
    getItem<StorageItem extends IStorageItem>(index:number):StorageItem {
        return this.items[index];
    }
}

class Computer implements IStorageItem {

    // специально чтобы классы Computer и Car были несовместимыми
    price:number; 
    
    getWidth():number { return 200; }
    getHeight():number { return 500; }
    getDepth():number { return 500; }

    getWeight():number { return 500; }
    
}

class Car implements IStorageItem {
    
    // специально чтобы классы Computer и Car были несовместимыми
    model:string; 
    
    getWidth():number { return 2000; }
    getHeight():number { return 2000; }
    getDepth():number { return 4000; }

    getWeight():number { return 1000000; }
    
}

// склад компьютеров
let computersStorageArea=new StorageArea();

let computer1:Computer=new Computer;
let computer2:Computer=new Computer;

// сохраним на складе 2 компьютера
// можно указывать тИповый аргумент
let computerIndex1:number=
  computersStorageArea.storeItem<Computer>(computer1);
// можно не указывать тИповый аргумент - 
// он будет определён автоматически
let computerIndex2:number=
  computersStorageArea.storeItem(computer2);
   
// склад автомобилей
let carsStorageArea=new StorageArea();

let car1:Car=new Car;
let car2:Car=new Car;

// сохраним на складе 2 автомобиля
// можно указывать тИповый аргумент
let carIndex1:number=carsStorageArea.storeItem<Car>(car1);
// можно не указывать тИповый аргумент - 
// он будет определён автоматически
let carIndex2:number=carsStorageArea.storeItem(car2);

// получим один из хранимых объектов
// можно указывать тИповый аргумент
let item11:Car=carsStorageArea.getItem<Car>(carIndex2);
let item12:Computer=
  computersStorageArea.getItem<Computer>(computerIndex2);
// можно не указывать тИповый аргумент
// TypeScript его НЕ может определить автоматически, он нам верит
let item21:Car=carsStorageArea.getItem(carIndex2);
let item22:Computer=computersStorageArea.getItem(computerIndex2);
// поэтому можно получить компьютер из хранилища с автомобилями
let item31:Car=carsStorageArea.getItem(carIndex2);
// и можно указать тИповый аргумент неправильно
let item32:Computer=carsStorageArea.getItem<Computer>(carIndex2);
// TypeScript проверяет типы только во время компиляции
//let item33:Computer=carsStorageArea.getItem<Car>(carIndex2); - ошибка
