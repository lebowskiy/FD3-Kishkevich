
var elem=this.document.getElementById("content");

class Car {

   num:string;
   price:number;

   constructor(_num:string, _price:number) {
       this.num=_num;
       this.price=_price;
   }

   getInfo():string {
       return 'car num='+this.num+' price='+this.price;
   }

}

var car1:Car=new Car("2870 ОГО",1200);
elem.innerHTML="Информация о машинке: " + car1.getInfo();