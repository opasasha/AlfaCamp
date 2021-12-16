<template>
    <div class="container">
        <div class="search">
            <div class="search-headers">
                <h2 class="search-headers-greetings">
                    Привіт!
                </h2>
                <h3 class="search-headers-tip">
                    Вкажи місто щоб отримати дані про погоду
                </h3>
            </div>
            <div class="search-input">
                <input placeholder="Наприклад, Копенгаген"
                class="search-input-field"
                v-model="nameCity" 
                @input="callCity"
                >
                <hr class="search-input-bottom-line">
                <spin v-show="isLoading"></spin>
                <div 
                class="search-input-error"
                v-show="isError"
                >
                    <p>{{errorText}}
                    </p>
                
                </div>
                <ul 
                    class="search-input-autocomplete"
                    v-show="isOpen"
                >
                    <li 
                        class="search-input-autocomplete-items"
                        v-for="city in cityList"
                        @click="onClick(city)"
                    >
                        {{city}}
                    </li>
                </ul>
            </div>
            <div class="search-button-field">
                <button class="search-button"
                        @click="moveNext()"
                        >
                    Продовжити
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    import router from '@/router'
    import spinner from '@/components/spinner.vue';
    export default {
        name: 'searchApp',
        props: {
            msg: String
        },
        methods:
        {
                onClick: function(result){
                        console.dir(result);
                        this.nameCity = result;
                        this.isOpen = false;
                    },
                onChange: function(){
                        this.isOpen = true;
                    },
                moveNext: function(){
                    if(this.nameCity.length == 0){
                        this.errorCome("input is clear");
                    }
                    else{
                        this.$store.commit('SET_CITY', this.nameCity);
                        router.push("/loading")
                    }
                    
                },
                async callCity(){
                    this.isError = false;
                    this.isLoading = true;
                        if(this.nameCity.length >2){
                            await fetch(`https://emoney-test.alfabank.kiev.ua/app/geo.php?key=${this.apiKey1}&term=${this.nameCity}`)
                            .then(response => {
                                if(response.ok){
                                    return response.json(); 
                                }
                                else{
                                    throw new Error("Bad response");
                                }
                                
                            })
                            .then(data => {
                                console.log(data);
                                if(data.errorCode == "badKey"){
                                    throw new Error("BadKey")
                                }
                                else{
                                    this.cityList = data.list;
                                }
                            })
                            .catch(error=>{
                                this.errorCome(error);
                            });
                            if(this.cityList.length > 0){
                                this.onChange();
                            }
                            else{
                                this.isOpen = false;
                            }
                        }
                    this.isLoading = false;
                },
                errorCome(message){
                    this.isError = true;
                    this.errorText = message;
                }
        },
        data: () =>{
            return{
                isOpen:false,
                apiKey1 : "test_open_api_key_042",
                nameCity : '',
                cityList: [],
                isOpen: false,
                isLoading: false,
                isError: false,
                errorText:""
                
            }
        },
        components: {
            spin: spinner  
        }
    }
</script>
<style lang="scss" scoped>
@import "@/assets/styles/search.scss"
</style>