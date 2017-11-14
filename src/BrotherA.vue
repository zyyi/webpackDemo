<template>
    <div>
        <button @click="sendToB">toB</button>
    </div>
</template>

<script>
import Bus from "./bus";
export default {
    methods: {
        sendToB: function () {
            // 通过Bus来发送数据
            Bus.$emit("toBFlag", "111111111");
        }
    }
}
</script>


<style>

</style>




