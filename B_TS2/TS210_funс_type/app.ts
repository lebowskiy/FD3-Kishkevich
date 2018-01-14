
// типизация аргументов и возвращаемого значения
// классические функции

function kvadrat(v:number):number {
    return v*v;
}

function myAlert(txt:string):void {
    alert(txt);
}

// типизация аргументов и возвращаемого значения
// стрелочные функции

const kvadrat2 = (v:number):number => {
    return v*v;
}

const myAlert2 = (txt:string) => {
    alert(txt);
}

// типизация аргументов, возвращаемого значения
// и самого идентификатора (имени) функции
// классические функции

const kvadrat3:(number)=>number = function(v:number):number {
    return v*v;
}

const myAlert3:(txt)=>void = function(txt:string):void {
    alert(txt);
}

// типизация аргументов, возвращаемого значения
// и самого идентификатора (имени) функции
// стрелочные функции

const kvadrat4:(number)=>number = (v:number):number => {
    return v*v;
}

const myAlert4:(txt)=>void = (txt:string) => {
    alert(txt);
}
