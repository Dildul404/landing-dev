<script setup>
import { Zap, MessageCircle } from "lucide-vue-next";
</script>

<template>
  <section id="talk" class="px-gutter py-[120px] max-w-[1200px] mx-auto text-center">
    <h2 class="font-display-xl text-headline-lg md:text-[80px] leading-none text-on-surface mb-10 tracking-tighter transition-colors">
      Your Brand Deserves <br />
      <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary transition-colors">
        More.
      </span>
    </h2>

    <div class="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
      <div class="brutalist-btn-group">
        <div class="brutalist-btn-ghost"></div>
        <a target="_blank"
          href="https://www.fiverr.com/dreel_/build-a-fast-responsive-landing-page-with-nuxt-and-tailwindcss"
          class="brutalist-btn-main bg-primary text-on-primary font-label-mono px-10 py-5 uppercase tracking-widest text-base font-bold flex items-center gap-3 transition-colors"
        >
          Initiate Project
          <Zap :size="20" />
      </a>
      </div>

      <a target="_blank"
        href="https://wa.me/+6285861882689"
        class="group flex items-center gap-2 font-label-mono text-secondary hover:text-primary transition-colors border border-outline/30 px-8 py-4 bg-surface-container hover:bg-surface-container-high"
      >
        <MessageCircle :size="20" class="transition-colors" />
        <span>Direct WhatsApp</span>
      </a>
    </div>
  </section>
</template>
