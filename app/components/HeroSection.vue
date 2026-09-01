<script setup>
import { Code2, ArrowRight, MessageCircle } from "lucide-vue-next";
</script>

<template>
  <section id="ui" class="px-gutter py-16 max-w-[1600px] mx-auto">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center relative">
      <!-- Decorative Code background text -->
      <div
        class="absolute -left-10 top-20 text-surface-variant font-label-mono text-[120px] leading-none select-none -z-10 tracking-tighter transition-colors"
      >
        { UI: 1 }
      </div>

      <div class="lg:col-span-6 lg:pr-12 relative z-10">
        <div class="inline-flex items-center gap-2 border border-outline-variant/30 px-3 py-1 mb-8 transition-colors">
          <Code2 :size="16" class="text-secondary transition-colors" />
          <span class="font-label-mono text-secondary uppercase text-xs tracking-widest transition-colors">
            Jasa Website Custom
          </span>
        </div>

        <h1 class="font-display-xl text-headline-lg md:text-display-xl mb-6 text-on-surface transition-colors">
          Brand Anda Layak Mendapatkan Lebih Dari Sekadar
          <span class="text-primary italic transition-colors">Template.</span>
        </h1>

        <p class="font-body-md text-on-surface-variant mb-10 max-w-lg transition-colors">
          Saya menyediakan jasa pembuatan website custom dengan desain antarmuka (UI) yang dibuat khusus untuk memenuhi kebutuhan bisnis dan identitas visual Anda, bukan sekadar menggunakan tema instan yang pasaran.
        </p>

        <div class="flex flex-wrap gap-6 items-center">
          <div class="brutalist-btn-group">
            <div class="brutalist-btn-ghost"></div>
            <a target="_blank"
              href="https://www.fiverr.com/dreel_/build-a-fast-responsive-landing-page-with-nuxt-and-tailwindcss"
              class="brutalist-btn-main bg-primary text-on-primary font-label-mono px-8 py-4 uppercase tracking-widest text-sm font-bold flex items-center gap-2 transition-colors"
            >
              Pesan di Fiverr
              <ArrowRight :size="18" />
          </a>
          </div>

          <a target="_blank"
            href="https://wa.me/+6285861882689"
            class="group flex items-center gap-2 font-label-mono text-secondary hover:text-primary transition-colors"
          >
            <MessageCircle :size="20" class="transition-colors" />
            <span class="border-b border-transparent group-hover:border-primary transition-colors pb-0.5">
              Chat via WhatsApp
            </span>
          </a>
        </div>
      </div>

      <div class="lg:col-span-5 lg:col-start-8 mt-16 lg:mt-0 relative">
        <div class="hard-offset-container w-full h-125 md:h-162 -rotate-2">
          <div class="hard-offset-shadow bg-secondary transition-colors"></div>
          <div class="relative w-full h-full border border-outline/20 bg-surface-container overflow-hidden transition-colors">
            <div
              class="absolute top-0 left-0 w-full h-8 bg-surface-container-high border-b border-outline/20 flex items-center px-4 gap-2 transition-colors"
            >
              <div class="w-2 h-2 rounded-full bg-error transition-colors"></div>
              <div class="w-2 h-2 rounded-full bg-secondary transition-colors"></div>
              <div class="w-2 h-2 rounded-full bg-primary transition-colors"></div>
            </div>
            <img
              class="w-full h-full object-cover pt-8 opacity-80 mix-blend-luminosity grayscale hover:grayscale-0 transition-all duration-700"
              alt="A striking abstract 3D rendering of dark geometric shapes interlocking with glowing neon orange and yellow wireframes, illustrating a modern, high-tech, custom development aesthetic."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD49mEoqiJdN76LyI04oQ32McBRDQbIQ62kilFXB2pR5r_Nrenow4CuG5qF8HtuVPxXrHYsTtMo7FdRwe_cVppFtHR8_96wDKiUTA4HLbPMUds9v1fTUm5hz4sKloJYKqMl8wL-25nfDTb95o0A9SjMGnz3ML91GKJch1rAmCHHStEasOGkwtgu7A2HZZrWBO6DRWu2D2_Kq8eUBqECIA83CfntPwl90rsMDcWIseTzSM4ooMtKHiou"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
