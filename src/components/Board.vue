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
        @click="clickBox(item, index)"
      />
    </div>
  </div>
</template>

<script>
import Box from './Box.vue'
import Dot from './Dot.vue'
export default {
  name: 'Board',
  props: {
    currentLevel: Number,
    start: Boolean,
    "type": Number,
    "finalLevel": Number,
    "nBoxes": {
      type: Number,
      default: 9
    },
    "nDots": {
      type: Number,
      default: 5
    },
    "sequence": Array
  },
  components: {
    Box,
    Dot
  },
  data() {
    return {
      levels: [],
      level: 1,
      boxes: [],
      dots: []
    }
  },
  watch: {
    start(val) {
      if (val) {
        this.illuminateBotSequence()
      }
    },
    currentLevel(val) {
      if (this.start && val) {
        this.illuminateBotSequence()
      }
    }
  },
  created() {
    this.refill(this.nBoxes, "box", "boxes")
    this.refill(this.nDots, "dot", "dots")
  },
  methods: {
    auxSetCurrentLevel () {
      this.$emit("setCurrentLevel");
    },
    lightBotBox(indexLevel) {
      const index = this.sequence[indexLevel];
      this.boxes[index].status = true;
      setTimeout(() => this.offBotBox(index), 400)
    },
    offBotBox(index) {
      this.boxes[index].status = false;
    },
    illuminateBotSequence() {
      for(let i = 0; i < this.currentLevel; i++) {
        setTimeout(() => this.lightBotBox(i), 1000 * i)
      }
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
    clickBox(item, index) {
      console.log('item', item)
      if (this.type === 1 && this.checkClickBox(index)) {
        item.status = !item.status;
        this.levels.push(index);
        this.level++;
        setTimeout(() => {
          item.status = false;
        }, 1000);
      }
      if (this.currentLevel === this.levels.length) {
        setTimeout(() => {
          this.cleanLevel();
          this.auxSetCurrentLevel();
        }, 1000);
      }
    },
    cleanLevel() {
      this.level = 1;
      this.boxes.map(box => box.status = false)
    },
    checkClickBox(index) {
      return index === this.sequence[this.level-1];
    }
  },
}
</script>
