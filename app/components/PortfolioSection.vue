<script setup>
import { ArrowUpRight } from "lucide-vue-next";

const projects = [
  {
    title: "Aura Financial",
    tags: ["Fintech", "Dark Mode"],
    offsetDown: true,
    alt: "A dark minimalist dashboard UI design mockup displayed on an angled screen floating in a dark studio environment, featuring high-contrast white text, orange accent charts, and a brutalist grid layout.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAxOy42BCiqTz8Nih6AWBWSeIErCNUTTXm1izUMvrmZxxoNgfSFDITprhOY3C5jxAvparkMcy7N_xUlWWhi8R8-38Z-RrP0MnZB4xlZu18abtv-r8ip3kuG2ppb31vuHJ8zilmHbW92WS_fJZAWERayNVw4yIdU5VBQzL-0npbHfbVHLL8eHn8T7DCW0ad3TvLUiUoEy175mVAFkVGdzP4DC3jpVZhHiOXG-R0PKdigP2dRYRuE3uOt",
  },
  {
    title: "Vanguard Arch",
    tags: ["Agency", "Asymmetric"],
    offsetDown: false,
    alt: "A striking landing page design for an architecture firm, featuring asymmetric typography, large stark black and white imagery, and subtle neon yellow interactive elements.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAmEQHlJc0nMuudXPNXGT4_Hslakha8rlBwDJAFL66qELeoHn2GpZVaxuGu-3y64KDXuz9qPCWlAgnnQYm0juF2RbnH-Mw4HNCvPmhdbU-wdwvtkoLG8R7NIT8_S-BkC7o066ZQ0HHHySr_B4BXwbylDIYQNQOEHMl9WDr2jem_YzPfnGMMWejcJXBhYk3LvBKfw9wgl-o8wUkzAwKTZ5QIl16CdJfzkM-f4UtEwsrLYaxQ0XyPbY5k",
  },
];
</script>

<template>
  <section id="work" class="px-gutter py-16 mt-32 max-w-[1600px] mx-auto">
    <div class="flex items-center gap-4 mb-16">
      <h2 class="font-headline-lg-mobile md:font-headline-lg text-on-surface uppercase transition-colors">
        Selected Work
      </h2>
      <div class="h-px bg-outline/20 flex-grow transition-colors"></div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-gutter gap-y-24">
      <div
        v-for="project in projects"
        :key="project.title"
        class="group"
        :class="project.offsetDown ? 'md:mt-16' : ''"
      >
        <div class="hard-offset-container mb-6 overflow-hidden">
          <div
            class="hard-offset-shadow bg-outline/20 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300"
          ></div>
          <div class="relative border border-outline/10 bg-surface-container h-[400px] transition-colors">
            <img
              class="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
              :alt="project.alt"
              :src="project.image"
            />
          </div>
        </div>

        <div class="flex justify-between items-start">
          <div>
            <div class="flex gap-2 mb-2">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="px-2 py-0.5 border font-label-mono text-[10px] uppercase transition-colors"
                :class="
                  tag === project.tags[0]
                    ? 'border-secondary text-secondary'
                    : 'border-outline-variant text-on-surface-variant'
                "
              >
                {{ tag }}
              </span>
            </div>
            <h3 class="font-headline-lg-mobile text-2xl text-on-surface group-hover:text-primary transition-colors">
              {{ project.title }}
            </h3>
          </div>
          <a href="#" class="text-on-surface-variant hover:text-primary transition-colors">
            <ArrowUpRight :size="22" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
