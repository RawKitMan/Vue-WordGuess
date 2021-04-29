<template>
    <div id="container">
        <b-jumbotron bg-variant="info">
            <template #header>Definitely Not Hang-Man</template>
            <p>It's not, I promise!!!</p>
        </b-jumbotron>
    </div>
       
</template>

<script>
import { BJumbotron } from 'bootstrap-vue'
export default {
    name: 'WordGuess',
    components: {
        BJumbotron
    }
}
</script>

<style scoped>

</style>