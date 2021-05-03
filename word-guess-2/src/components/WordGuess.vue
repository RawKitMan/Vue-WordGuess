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

<script>
import { BJumbotron,
         BImg,
         BContainer
        } from 'bootstrap-vue';

export default {
    name: 'WordGuess',
    components: {
        BJumbotron,
        BImg,
        BContainer
    },
    data: function() {
        return {
            imageIndex: 0,
            imageArr: ['kefka.jpg', 'cloud.jpg', 'tidus.jpg'],
            imgStr: "@/assets/"
        }
    },
    computed: {
        wordImage: function() {
            return this.imgStr + this.imageArr[this.imageIndex];
        }
    }
}
</script>

<style scoped>

</style>