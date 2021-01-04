import { ref, readonly, provide } from "vue";
let currentLevel = ref(0);

export function provideCurrentLevel() {
  provide('currentLevel', currentLevel);
}

export function setCurrentLevel(newValue) {
  currentLevel.value = newValue;
}

export function useCurrentLevel() {
  return readonly(currentLevel);
}
