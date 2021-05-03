<template>
    <div id="container">
        <b-jumbotron bg-variant="info" w>
            <template #header>Definitely Not Hang-Man</template>
            <p>It's not, I promise!!!</p>
        </b-jumbotron>
        <b-container>
            <b-img center :src="wordImage" alt="word image" />
        </b-container>
    </div>
       
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { BJumbotron,
         BImg,
         BContainer
        } from 'bootstrap-vue';

@Component({
    components: {
        BJumbotron,
        BImg,
        BContainer,
    },
})
export default class WordGuess extends Vue{


    public imageIndex = 0;
    public imageArr = ['kefka.jpg', 'cloud.jpg', 'tidus.jpg'];
    public imgStr = "@/assets/";

    get wordImage() {        
        return this.imgStr + this.imageArr[this.imageIndex];        
    }
}
</script>

<style scoped>

</style>