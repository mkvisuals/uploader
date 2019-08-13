<template>
<!--    <div class="container">-->
<!--        <div class="items">-->
<!--            <a target="_blank" class="item" v-for="item in items" :href="item.link">-->
<!--                nějakej item-->
<!--            </a>-->
<!--        </div>-->
<!--    </div>-->
    <grid
            :draggable="true"
            :sortable="true"
            :items="items"
            :height="100"
            :width="100">
        <template slot="cell" scope="props">
            <div style="background: red">{{props.item}}</div>
        </template>
    </grid>
</template>

<script>
    export default {
        name: 'App',
        data: function () {
            return {
            }
        },
        computed: {
          items() {
            // console.log(this.$store.getters.items)
            // return this.$store.getters.items
            const icons = []
            for (let i = 0; i < 100; i++) {
              icons.push(i + '_') // https://github.com/euvl/vue-js-grid/blob/master/demo/src/App.vue
            }
            return icons
          }
        },
        watch: {
        },
        mounted() {
        },
        methods: {
        }
    }
</script>
