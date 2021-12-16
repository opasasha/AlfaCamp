<template>
  <div class="about">
    <loadScreen/>
  </div>
</template>

<script>
  import router from '@/router'
  import loadingScreen from'@/components/loadingScreen.vue'
  export default {
    name: 'load',
    components: {
      loadScreen:loadingScreen
    },
    methods:{
      getWeather: function(){
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.$store.getters.NAME}&appid=${this.apiKey}`)
          .then(response =>{
              if(!response.ok){
                throw new Error();
              }
              else{
                return response.json();
              }
          })
          .then(data =>{
              console.log(data);
              this.$store.commit('SET_WEATHER', data);
              router.push("/weather");
          })
          .catch(error => {
            router.push("/error");
          });
        }
      },
    data:() =>{
        return{
          apiKey:"dd3dc5b0953db2a51f55f6942d1e0d31"
        }},
    mounted(){
      this.getWeather();
    }
  }
</script>

