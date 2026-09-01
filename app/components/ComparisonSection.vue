<script setup>
import { Sparkles, CheckCircle2, LayoutGrid, Info } from "lucide-vue-next";

const customPoints = [
  "Desain dirancang khusus sesuai dengan kebutuhan project.",
  "Visual identity lebih unik dan nggak pasaran.",
  "Struktur tiap section bisa di-custom sebebasnya.",
  "Website nggak harus mengikuti struktur template yang kaku.",
  "Elemen visual dibuat spesifik untuk menonjolkan brand.",
  "Interaksi dan animasi bisa di-custom biar makin engaging.",
];

const templatePoints = [
  "Harus mengikuti struktur template yang sudah ada.",
  "Tampilan visual biasanya monoton mengikuti template.",
  "Kustomisasi terbatas, tergantung tema dan plugin yang dipakai.",
  "Bisa kelihatan mirip banget sama website lain yang pakai template sama.",
];
</script>

<template>
  <section id="comparison" class="px-gutter py-16 mt-32 max-w-[1600px] mx-auto">
    <div class="mb-16 border-b border-outline/20 pb-4 transition-colors">
      <h2 class="font-headline-lg-mobile md:font-headline-lg text-on-surface uppercase transition-colors">
        Custom UI vs Template Instan
      </h2>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
      <!-- Custom UI Column -->
      <div class="hard-offset-container group">
        <div
          class="hard-offset-shadow bg-primary/20 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"
        ></div>
        <div class="relative bg-surface-container border-2 border-primary p-8 h-full transition-colors">
          <div class="flex items-center gap-3 mb-8">
            <Sparkles :size="20" class="text-primary transition-colors" />
            <h3 class="font-headline-md text-on-surface transition-colors">Custom UI</h3>
          </div>
          <ul class="space-y-6">
            <li v-for="point in customPoints" :key="point" class="flex items-start gap-4">
              <CheckCircle2 :size="16" class="text-primary mt-1 shrink-0 transition-colors" />
              <span class="font-body-md text-on-surface-variant transition-colors">{{ point }}</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Template Column -->
      <div class="bg-surface-container-low border border-outline/10 p-8 h-full transition-colors">
        <div class="flex items-center gap-3 mb-8 opacity-60">
          <LayoutGrid :size="20" class="text-secondary transition-colors" />
          <h3 class="font-headline-md text-on-surface transition-colors">Pakai Template</h3>
        </div>
        <ul class="space-y-6">
          <li v-for="point in templatePoints" :key="point" class="flex items-start gap-4 opacity-70">
            <Info :size="16" class="text-secondary mt-1 shrink-0 transition-colors" />
            <span class="font-body-md text-on-surface-variant transition-colors">{{ point }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>