<template>
    
    <div>
        <h1>我是Son.vue</h1>

        <button @click="hello">给父组件App.vue传值，我是son组件</button>
    </div>
   
</template>


<script>
export default {
    // 通过props来接收App传过来的信息
    props: ["yy"],
    created: function () {
        console.log(this);
        console.log(this.yy);
    },
    data: function () {
        return {

        }
    },
    methods: {
        hello: function () {
            this.$emit("flag", {a: 2, b: 4})
        }
    }
}
</script>


<style>

</style>

