<template>
  <div class="gameboard">
    
    <div class="container__bulb">
      <Dot
        v-for="(item, index) in dots"
        :key="index"
        :name="item.name"  
        :status="item.status"
      />
    </div>
    <div :class="{
      'container__box-bot': type === 0,
      'container__box-user': type === 1
    }">
      <Box
        v-for="(item, index) in boxes"
        :key="index"
        :name="item.name"
        :status="item.status"
        :type="type"
        @click="clickBox(item)"
      />
    </div>
  </div>
</template>

<script>
import Box from './Box.vue'
import Dot from './Dot.vue'
export default {
  name: 'Board',
  props: ["type", "finalLevel"],
  components: {
    Box,
    Dot
  },
  data() {
    return {
      boxes: [],
      dots: [],
      sequence: []
    }
  },
  created() {
    this.refill(9, "box", "boxes")
    this.refill(5, "dot", "dots")
    this.generateSequence(9)
  },
  methods: {
    generateSequence(nAux) {
      this.sequence = new Array(this.finalLevel).fill(0).map(n => Math.floor(Math.random() * nAux))
    },
    refill(n, name, state) {
      for (let i = 1; i <= n; i++) {
        const nameAux = name + i;
        this[state].push({
          name: nameAux,
          status: false
        });
      };
    },
    clickBox(item) {
      
    console.log('this.sequence', this.sequence)
      if (this.type === 1) {
        item.status = !item.status
      }
    }
  },
}
</script>
