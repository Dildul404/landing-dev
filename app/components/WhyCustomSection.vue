<script setup>
const items = [
  { n: "01", title: "Website dibuat sesuai kebutuhan project" },
  { n: "02", title: "Nggak kaku dan terikat struktur template" },
  { n: "03", title: "Visual identity lebih unik dan spesifik" },
  { n: "04", title: "Struktur konten bisa di-custom sebebasnya" },
  { n: "05", title: "User experience (UX) dioptimalkan untuk target audiens" },
  { n: "06", title: "Mudah di-scale up untuk kebutuhan ke depannya" },
  { n: "07", title: "Desain mengkomunikasikan karakter brand jauh lebih efektif", wide: true },
];
</script>

<template>
  <section id="why-custom" class="px-gutter py-16 mt-32 max-w-[1600px] mx-auto">
    <div class="mb-16 flex items-baseline justify-between border-b border-outline/20 pb-4 transition-colors">
      <h2 class="font-headline-lg-mobile md:font-headline-lg text-on-surface transition-colors uppercase">
        Kenapa Harus Landing Page Custom?
      </h2>
      <span class="font-label-mono text-secondary text-sm hidden md:block transition-colors">
        [ SOLUSI_CUSTOM ]
      </span>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-16">
      <div class="md:col-span-6">
        <p class="font-body-md text-on-surface-variant text-xl leading-relaxed transition-colors">
          Memilih landing page custom berarti website Anda dibangun dari nol khusus untuk mencapai goals bisnis Anda. Lebih fleksibel, scalable, dan memberikan experience unik yang nggak bisa didapatkan dari template instan.
        </p>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div
        v-for="item in items"
        :key="item.n"
        class="bg-surface-container border border-outline/10 p-6 flex flex-col justify-between transition-colors group hover:border-primary"
        :class="item.wide ? 'md:col-span-2' : ''"
      >
        <div class="font-label-mono text-secondary transition-colors">{{ item.n }}</div>
        <h4 class="font-headline-md text-on-surface mt-4 transition-colors">{{ item.title }}</h4>
      </div>
    </div>
  </section>
</template>
