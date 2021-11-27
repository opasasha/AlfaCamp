//Создать класс new SuperArray(n, m, { min: 10, max: 55 }),
//который создаст массив размерностью n на m 
//и заполнит случайными числами в диапазоне options.min - options.max. 
//Массив сохраняется в екземпляр класса SuperArray.
class superArray{
    #marker = '&';
    #positionOfMarker = {x:0, y:0};
    //создаём локальную переменную для хранения данных
    #tmp; 
    
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
    
    //добавим функцию валидации
    isValid(array, k){
        return ( k < array.length && k >= 0 )
    }

    //Создать метод clear(direction, k), 
    //где direction может быть "row" или "column", 
    //а k - номер строки или столбца, который нужно очистить. (поставить 0)
    clear(direction, k){
        switch(direction){
            case "row":
                if(this.isValid(this.arr[0], k)){
                    for(let i = 0; i <this.arr[k].length; i++){
                        this.arr[k][i] = 0;
                    }
                }
                else{
                    alert("out of range");
                }
                break;
            case "column":
                if(this.isValid(this.arr, k)){
                    for(let i = 0; i < this.arr.length; i++){
                        this.arr[i][k] = 0;
                    }
                }
                else{
                    alert("out of range");
                }
                break;
            default:
                alert("bad direction");
        }
    }

    //Создать Метод setMarker({ x: 6, y: 9 }), 
    //который устанавливает маркер "&" в в переданную точку.
    setMarker({x, y}){
        if(this.isValid(this.arr[0], x) && this.isValid(this.arr, y)){
            this.#tmp = this.arr[y][x];
            this.#positionOfMarker.x = x;
            this.#positionOfMarker.y = y;
            this.arr[y][x] = this.#marker;
        }
        else{
            alert("out of range");
        }
    }

    //Создать метод goTo({ x: 2, y: 4 }), 
    //маркер передвигается в указанную точку.
    goTo({x, y}){
        if(this.isValid(this.arr[0], x) && this.isValid(this.arr, y)){
            let tmp2 = this.arr[y][x];
            this.arr[this.#positionOfMarker.y][this.#positionOfMarker.x] = this.#tmp;
            this.#positionOfMarker.x = x;
            this.#positionOfMarker.y = y;
            this.#tmp = tmp2;
            this.arr[y][x] = this.#marker;
        }
        else{
            alert("out of range");
        }
    }

    //Создать метод shift(direction), 
    //где direction может иметь значение "left", "right", "top", "bottom", 
    //и маркер сдвинется в указанную сторону на 1 шаг.
    shift(direction){
        let localX = this.#positionOfMarker.x;
        let localY = this.#positionOfMarker.y;
        switch(direction){
            case "left":
                this.goTo({x : --localX, y : localY});
                break;
            case "right":
                this.goTo({x : ++localX, y : localY});
                break;
            case "top":
                this.goTo({x : localX, y : --localY });
                break;
            case "bottom":
                this.goTo({x : localX, y : ++localY});
                break;
            default:
                alert("bad data");
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

let superArrayInstance = new superArray(5, 4,{min:11,max:55});
superArrayInstance.render('------startArray--------');
superArrayInstance.setMarker({x: 1, y: 2});
superArrayInstance.render('-------setMarker-------');
superArrayInstance.goTo({x: 2, y: 2});
superArrayInstance.render('-------goTO-------');
superArrayInstance.shift("left");
superArrayInstance.render('-------shiftLeft-------');
superArrayInstance.shift("right");
superArrayInstance.render('-------shiftRight-------');
superArrayInstance.shift("top");
superArrayInstance.render('-------shiftTop-------');
superArrayInstance.shift("bottom");
superArrayInstance.render('-------shiftBottom-------');