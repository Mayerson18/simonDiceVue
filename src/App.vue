<template>
  <div class="container">
    <button class="btn-start" :class="{
      hide: start
    }"
      @click="startGame">Empezar Juego</button>
    <Board
      :currentLevel=currentLevel
      :start=start
      :sequence=sequence
      :type=0
      :finalLevel="finalLevel"
    />
    <Board
      v-on:setCurrentLevel="setCurrentLevel"
      :currentLevel=currentLevel
      :sequence=sequence
      :type=1
      :finalLevel="finalLevel"
    />
  </div>
</template>

<script>
import Board from './components/Board.vue'
export default {
  name: 'App',
  data() {
    return {
      currentLevel: 1,
      finalLevel: 5,
      start: false,
      sequence: []
    }
  },
  components: {
    Board
  },
  created() {
    this.generateSequence(9)
  },
  methods: {
    setCurrentLevel() {
      this.currentLevel++;
    },
    startGame() {
      this.start = !this.start
    },
    generateSequence(nAux) {
      this.sequence = new Array(this.finalLevel).fill(0).map(n => Math.floor(Math.random() * nAux))
    },
  }
}
</script>
