<template>
    
</template>

<script>
import Bus from "./bus";
export default {
    created: function () {
        // 接收传过来的数据
        Bus.$on("toBFlag", function (data) {
            console.log(data);
        });
    }

}
</script>


<style>


</style>


