import { ref } from "vue";

// State di luar function = singleton, dishare oleh semua komponen yang import ini.
const isDark = ref(
  typeof document !== "undefined" && document.documentElement.classList.contains("dark")
);

export function useTheme() {
  function toggleTheme() {
    isDark.value = !isDark.value;
    document.documentElement.classList.toggle("dark", isDark.value);
  }

  return { isDark, toggleTheme };
}
