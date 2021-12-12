let cities1;
fetch('/data')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        cities1 = data;
    })
setTimeout(function(){
    var autoform = new Vue({
        el: '#autoform',
        data: {
            name: '',
            cities: cities1.cities,
            isOpen:false       
        },
        computed:{
            filteredList: function(){
                var comp = this.name;
                return this.cities.filter(function (elem) {           
                    if(comp==='') return true;
                    else return elem.name.indexOf(comp) > -1;
                })
            }
        },
        methods:{
            onClick: function(result){
                this.name = result;
                this.isOpen = false;
            },
            onChange: function(){
                this.isOpen = true;
            }
        }
    });
},200)