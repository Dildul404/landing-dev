<script setup>
const items = [
  { n: "01", title: "Website is created according to project requirements" },
  { n: "02", title: "Not restricted to a predefined template" },
  { n: "03", title: "More specific visual identity" },
  { n: "04", title: "Content structure can be customized" },
  { n: "05", title: "User experience can be designed according to the target audience" },
  { n: "06", title: "Website can be developed according to future requirements" },
  { n: "07", title: "The design can communicate the character of the brand more effectively", wide: true },
];
</script>

<template>
  <section id="why-custom" class="px-gutter py-16 mt-32 max-w-[1600px] mx-auto">
    <div class="mb-16 flex items-baseline justify-between border-b border-outline/20 pb-4 transition-colors">
      <h2 class="font-headline-lg-mobile md:font-headline-lg text-on-surface transition-colors uppercase">
        Why Custom Landing Page?
      </h2>
      <span class="font-label-mono text-secondary text-sm hidden md:block transition-colors">
        [ CUSTOM_SOLUTIONS ]
      </span>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-16">
      <div class="md:col-span-6">
        <p class="font-body-md text-on-surface-variant text-xl leading-relaxed transition-colors">
          Choosing a custom landing page means your website is built from the ground up to serve your unique goals. It provides flexibility, scalability, and a tailor-made experience that off-the-shelf templates simply cannot offer.
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
