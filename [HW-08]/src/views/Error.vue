<template>
    <div class="error">
        <div class="content">
            <img src="@/assets/img/error.png" class="error-image">
            <h3 class="error-header">Нажаль, ми не знайшли інформації по даному запиту :(</h3>
            <router-link to="/"><button class="error-button">ПОВЕРНУТИСЬ НАЗАД</button></router-link>
        </div>
    </div>
</template>
<style lang="scss">
    .error{
        .content{
            width:605px;
            margin:auto;
            .error-image{
                margin-top: 120px;
                height:347px;
                width:474px;
            }
            .error-header{
                font-size: 22px;
                line-height: 30px;
                text-align: center;
                color: #222222;
            }
            .error-button{
                margin-top: 80px;
                height:60px;
                width:264px;
                color: #ffffff;
                background: #000AFF;
                border-radius: 4px;
            }
        }
    }
</style>