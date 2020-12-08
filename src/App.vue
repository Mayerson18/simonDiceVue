<template>
  <div class="container">
    <button class="btn-start" :class="{
      hide: hide
    }"
      :click="startGame()">Empezar Juego</button>
    <Board
      :type=0
      :finalLevel="finalLevel"
    />
    <Board
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
      finalLevel: 5,
      hide: false
    }
  },
  components: {
    Board
  },
  methods: {
    startGame() {
      // this.hide = !this.hide
    }
  }
}
</script>
