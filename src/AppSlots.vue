<template>
  <div>
    <ul>
        <li v-for="(data, index) in slotsData" v-bind:key="data">
            <slot v-bind:item="data" v-bind:i="index"></slot>
        </li>
    </ul>
    
    <!-- <slot name="content"></slot>
    <slot name="footer"></slot> -->
  </div>
</template>

<script>
export default {
    data() {
        return {
            slotsData: ["a", "b", "c", "d"]
        };
    }
};
</script>

<style>

</style>