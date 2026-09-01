<script setup>
import { ref } from "vue";
import { MessageCircle, Menu, X, Moon, Sun } from "lucide-vue-next";
import { useTheme } from "../composables/useTheme";

const navLinks = [
  { label: "UI", href: "#ui" },
  { label: "STYLES", href: "#styles" },
  { label: "WORK", href: "#work" },
  { label: "FLOW", href: "#flow" },
  { label: "TALK", href: "#talk" },
];

const activeHref = ref("#ui");
const mobileOpen = ref(false);
const { isDark, toggleTheme } = useTheme();

const scrollToSection = (e, href) => {
  if (href && href.startsWith("#")) {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    activeHref.value = href;
    mobileOpen.value = false;
  }
};
</script>

<template>
  <header
    class="bg-surface/80 backdrop-blur-md fixed top-0 w-full z-50 border-b border-outline-variant/10 transition-colors duration-300"
  >
    <div class="flex justify-between items-center px-gutter py-4 max-w-full mx-auto">
      <div class="font-display-xl text-headline-lg-mobile text-primary tracking-tighter">
        DEV_CORE
      </div>

      <nav class="hidden md:flex gap-8">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="font-label-mono uppercase tracking-widest pb-1 transition duration-200 active:scale-95"
          :class="
            activeHref === link.href
              ? 'text-primary border-b-2 border-primary'
              : 'text-on-surface-variant hover:text-primary hover:-translate-y-0.5'
          "
          @click="scrollToSection($event, link.href)"
        >
          {{ link.label }}
        </a>
      </nav>

      <div class="flex items-center gap-4">
        <button
          class="text-on-surface-variant hover:text-primary transition-colors flex items-center justify-center p-2"
          aria-label="Toggle dark mode"
          @click="toggleTheme"
        >
          <Moon v-if="!isDark" :size="20" />
          <Sun v-else :size="20" />
        </button>

        <div class="brutalist-btn-group hidden md:inline-block">
          <div class="brutalist-btn-ghost"></div>
          <button
            class="brutalist-btn-main bg-primary text-on-primary font-label-mono uppercase tracking-widest px-6 py-2 transition-colors"
          >
            Mulai Sekarang
          </button>
        </div>

        <button class="md:hidden text-primary transition-colors" @click="mobileOpen = !mobileOpen">
          <Menu v-if="!mobileOpen" :size="24" />
          <X v-else :size="24" />
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <nav
      v-if="mobileOpen"
      class="md:hidden flex flex-col gap-4 px-gutter pb-6 border-t border-outline-variant/10"
    >
      <a
        v-for="link in navLinks"
        :key="link.href"
        :href="link.href"
        class="font-label-mono uppercase tracking-widest pt-4"
        :class="activeHref === link.href ? 'text-primary' : 'text-on-surface-variant'"
        @click="scrollToSection($event, link.href)"
      >
        {{ link.label }}
      </a>
      <button
        class="mt-2 bg-primary text-on-primary font-label-mono uppercase tracking-widest px-6 py-2 flex items-center justify-center gap-2"
      >
        Mulai Sekarang
      </button>
    </nav>
  </header>
</template>
