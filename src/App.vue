<template>
    <div>
        <!-- <h1>我是App.vue</h1> -->
        <!-- <Son yy="hello" @flag="receiveSonData"></Son> -->

        <brother-a></brother-a>
        <brother-b></brother-b>
    </div>
</template>

<script>
import Son from "./Son.vue";

import BrotherA from "./BrotherA.vue";
import BrotherB from "./BrotherB.vue";

// import BrotherA from "./BrotherA.vue";


export default {
    components: {
        Son,
        BrotherA,
        BrotherB
    },
    methods: {
        receiveSonData: function (data) {
            console.log(data);
        }
    }
}
</script>

<style>

</style>


