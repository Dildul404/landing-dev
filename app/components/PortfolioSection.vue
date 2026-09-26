<script setup>
import { ArrowUpRight } from "lucide-vue-next";
import aetherfieldImg from "~/assets/images/projects/aetherfield.png";
import kopiLerengImg from "~/assets/images/projects/kopi-lereng.png";

const projects = [
  {
    title: "Aetherfield",
    tags: ["minimalism"],
    offsetDown: true,
    alt: "Aetherfield project design",
    image: aetherfieldImg,
  },
  {
    title: "Kopi Lereng",
    tags: ["Bento Grid", "Minimalism"],
    offsetDown: false,
    alt: "Kopi Lereng project design",
    image: kopiLerengImg,
  },
];
</script>

<template>
  <section id="work" class="px-gutter py-16 mt-32 max-w-[1600px] mx-auto">
    <div class="flex items-center gap-4 mb-16">
      <h2 class="font-headline-lg-mobile md:font-headline-lg text-on-surface uppercase transition-colors">
        Karya Pilihan (Portfolio)
      </h2>
      <div class="h-px bg-outline/20 grow transition-colors"></div>
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
          <div class="relative border border-outline/10 bg-surface-container h-100 transition-colors">
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
