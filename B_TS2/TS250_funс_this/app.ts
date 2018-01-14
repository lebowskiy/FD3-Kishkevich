
let car1={

    num: '2870-ОГО',
    model: 'Волга',
    
    show: function(prefix:string) {
        console.log(prefix+" "+this.num+" "+this.model);
        console.log(prefix+" "+this.price);
    }

};
car1.show("INFO #1:");


type Car={
    num:string,
    model:string,
    show:(string)=>void
};

let car2:Car={
    
    num: '2870-ОГО',
    model: 'Волга',
    
    show: function(prefix:string):void {
        console.log(prefix+" "+this.num+" "+this.model);
        console.log(prefix+" "+this.price);
    }

};
car2.show("INFO #2:");

let car3:Car={
    
    num: '2870-ОГО',
    model: 'Волга',
    
    show: function(this:Car,prefix:string):void {
        console.log(prefix+" "+this.num+" "+this.model);
        //console.log(prefix+" "+this.price); - ошибка
    }

};
car3.show("INFO #3:");
