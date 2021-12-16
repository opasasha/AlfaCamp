<template >
    <div class="page"
        :class="{night: isNight}"
    >
        <div class="container">
            <div class="weather"
            :class="{nightWeather: isNight}"
            >
                <div class="weather-main">
                    <div class="weather-main-info">
                        <h2 class="city">{{res.name}}</h2>
                        <p class="date">  {{convertDay}} {{convertMonth}} </p>
                        <p class="temperature"> {{convertTemperature}} ℃ </p>
                        <p class="weather-now">{{res.weather[0].main}} </p>
                    </div>
                    <div class="weather-main-image">
                        <img 
                        v-if="isNight"
                        src="@/assets/img/night.png" 
                        class="weather-main-image-item">
                        <img 
                        v-else
                        src="@/assets/img/day.png" 
                        class="weather-main-image-item">
                    </div>
                </div>
                <div class="weather-additions">
                    <div class="weather-aditions-icons">
                        <img src="@/assets/img/coord.png">
                        <img src="@/assets/img/drops.png">
                        <img src="@/assets/img/ac.png">
                        <img src="@/assets/img/sun.png">
                        <img src="@/assets/img/moon.png">
                        
                    </div>
                    <div class="weather-aditions-titles">
                    
                        <p class="weather-aditions-titles-item"> 
                        Координати </p>
                        <p class="weather-aditions-titles-item">
                        Відносна вологість </p>
                        <p class="weather-aditions-titles-item">
                        Атмосферний тиск </p>
                        <p class="weather-aditions-titles-item">
                        Час сходу сонця </p>
                        <p class="weather-aditions-titles-item">
                        Час заходу сонця</p>
                    </div>
                    <div class="weather-aditions-values">
                        <p class="weather-aditions-values-item">
                        Ш:{{res.coord.lat}}  Д:{{res.coord.lon}} </p>
                        <p class="weather-aditions-values-item">
                        {{res.main.humidity}}%</p>
                        <p class="weather-aditions-values-item">
                        {{res.main.pressure}}гПа</p>
                        <p class="weather-aditions-values-item">
                        {{convertSunrise}}</p>
                        <p class="weather-aditions-values-item">
                        {{convertSunset}}</p>
                    </div>
                </div>
            </div>
            <div class="link">
                <router-link to="/">ПОВЕРНУТИСЬ НАЗАД</router-link>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'WeatherApp',
        props: {
            msg: String
        },
        methods:{
            setWeather(){
                this.res = this.$store.getters.WEATHER;
                if(this.res.dt >= this.res.sys.sunset && this.res.dt <= this.res.sys.sunrise){
                    this.isNight = true;
                }
            }
        },
        data:() =>{
            return{
                res:"",
                isNight:"false"
            }    
        },
        computed:{
            convertDay(){
                let tmp = new Date(this.res.dt * 1000);
                return tmp.getDate();
            },
            convertMonth(){
                let tmp = new Date(this.res.dt * 1000);
                if(tmp.getMonth() == 0 ){
                    return "січня";
                }
                if(tmp.getMonth() == 1 ){
                    return "лютого";
                }
                if(tmp.getMonth() == 2 ){
                    return "березня";
                }
                if(tmp.getMonth() == 3 ){
                    return "квітня";
                }
                if(tmp.getMonth() == 4 ){
                    return "травня";
                }
                if(tmp.getMonth() == 5 ){
                    return "червня";
                }
                if(tmp.getMonth() == 6 ){
                    return "липня";
                }
                if(tmp.getMonth() == 7 ){
                    return "серпня";
                }
                if(tmp.getMonth() == 8 ){
                    return "вересня";
                }
                if(tmp.getMonth() == 9 ){
                    return "жовтня";
                }
                if(tmp.getMonth() == 10 ){
                    return "листопада";
                }
                if(tmp.getMonth() == 11 ){
                    return "грудня";
                }
            },
            convertSunrise(){
                let tmp = new Date(this.res.sys.sunrise * 1000);
                return tmp.getHours().toString()+":" + tmp.getMinutes().toString();
            },
            convertSunset(){
                let tmp = new Date(this.res.sys.sunset * 1000);
                return tmp.getHours().toString()+":" + tmp.getMinutes().toString();
            },
            convertTemperature(){
                return Math.floor(this.res.main.temp -273.15)
            }
        },
        mounted(){
            this.setWeather();
        }
    }
</script>

<style lang="scss">
@import "@/assets/styles/weather.scss"
</style>