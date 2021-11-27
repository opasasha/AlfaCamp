//Создать класс new SuperArray(n, m, { min: 10, max: 55 }),
//который создаст массив размерностью n на m 
//и заполнит случайными числами в диапазоне options.min - options.max. 
//Массив сохраняется в екземпляр класса SuperArray.
class superArray{
    marker = '&';
    positionOfMarker = {x:0, y:0};
    tmp;
    
    constructor(n,m,{min,max}){
        let arr = [[]];
        for(let i = 0; i < n; i++){
            arr[i] = [];
            for(let j = 0; j < m; j++){
                arr[i][j] = Math.floor(Math.random() * (max - min)) + min;
            }
        }
        this.arr = arr;
    }
    
    //Создать метод clear(direction, k), 
    //где direction может быть "row" или "column", 
    //а k - номер строки или столбца, который нужно очистить. (поставить 0)
    clear(direction, k){
        if(direction == "column"){
            for(let i = 0; i < this.arr.length; i++){
                this.arr[i][k] = 0;
            }
        }
        else if(direction == "row"){
            for(let i = 0; i <this.arr[k].length; i++){
                this.arr[k][i] = 0;
            }
        }
    }

    //Создать Метод setMarker({ x: 6, y: 9 }), 
    //который устанавливает маркер "&" в в переданную точку.
    setMarker({x, y}){
        this.tmp = this.arr[y][x];
        this.positionOfMarker.x = x;
        this.positionOfMarker.y = y;
        return this.arr[y][x] = this.marker;
    }

    //Создать метод goTo({ x: 2, y: 4 }), 
    //маркер передвигается в указанную точку.
    goTo({x, y}){
        let tmp2 = this.arr[y][x];
        this.arr[this.positionOfMarker.y][this.positionOfMarker.x] = this.tmp;
        this.positionOfMarker.x = x;
        this.positionOfMarker.y = y;
        this.tmp = tmp2;
        this.arr[y][x] = this.marker;
    }

    //Создать метод shift(direction), 
    //где direction может иметь значение "left", "right", "top", "bottom", 
    //и маркер сдвинется в указанную сторону на 1 шаг.
    shift(direction){
        if(direction == "left"){
            this.arr[this.positionOfMarker.y][this.positionOfMarker.x] = this.tmp;
            this.tmp = this.arr[this.positionOfMarker.y][--this.positionOfMarker.x];
            this.arr[this.positionOfMarker.y][this.positionOfMarker.x] = this.marker;
        }
        else if(direction == "rigth"){
            this.arr[this.positionOfMarker.y][this.positionOfMarker.x] = this.tmp;
            this.tmp = this.arr[this.positionOfMarker.y][++this.positionOfMarker.x];
            this.arr[this.positionOfMarker.y][this.positionOfMarker.x] = this.marker;
        }
        else if(direction == "top"){
            this.arr[this.positionOfMarker.y][this.positionOfMarker.x] = this.tmp;
            this.tmp = this.arr[--this.positionOfMarker.y][this.positionOfMarker.x];
            this.arr[this.positionOfMarker.y][this.positionOfMarker.x] = this.marker;
        }
        else if(direction == "bottom"){
            this.arr[this.positionOfMarker.y][this.positionOfMarker.x] = this.tmp;
            this.tmp = this.arr[++this.positionOfMarker.y][this.positionOfMarker.x];
            this.arr[this.positionOfMarker.y][this.positionOfMarker.x] = this.marker;
        }
    }
}

//Создать метод render(separator), в прототипе. 
//Который выведет двумерный массив в документ. С разделителем separator, под массивом.
superArray.prototype.render = function(separator){
    for(let i = 0; i < this.arr.length; i++){
        let tmp = this.arr;
        document.write(tmp[i] + '<br>');
    }
    document.write(separator + '<br>');
}

//Тестим работу
let su = new superArray(5, 4,{min:11,max:55});
su.render('--------------');
su.setMarker({x: 1, y: 2});
su.render('-------setMarker-------');
su.goTo({x: 2, y: 4});
su.render('-------goTO-------');
su.shift('left');
su.render('-------shiftLeft-------');
su.shift('rigth');
su.render('-------shiftRight-------');
su.shift('top');
su.render('-------shiftTop-------');
su.shift('bottom');
su.render('-------shiftBottom-------');