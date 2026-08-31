<script setup>
const items = [
  { n: "01", title: "Desktop Layout" },
  { n: "02", title: "Tablet Layout" },
  { n: "03", title: "Mobile Layout" },
  { n: "04", title: "Responsive Typography" },
  { n: "05", title: "Responsive Spacing" },
  { n: "06", title: "Mobile-friendly Navigation" },
  { n: "07", title: "Touch-friendly Interaction", wide: true },
];
</script>

<template>
  <section id="responsive" class="px-gutter py-16 mt-32 max-w-[1600px] mx-auto">
    <div class="mb-16 flex items-baseline justify-between border-b border-outline/20 pb-4 transition-colors">
      <h2 class="font-headline-lg-mobile md:font-headline-lg text-on-surface transition-colors">
        Responsive Experience
      </h2>
      <span class="font-label-mono text-secondary text-sm hidden md:block transition-colors">
        [ ADAPTIVE_SYSTEMS ]
      </span>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-16">
      <div class="md:col-span-6">
        <p class="font-body-md text-on-surface-variant text-xl leading-relaxed transition-colors">
          Designs are meticulously crafted for every screen size. I ensure your brand maintains its
          impact whether viewed on a 4K monitor or a handheld device.
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