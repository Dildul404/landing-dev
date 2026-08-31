<script setup>
const steps = [
  { n: "01", title: "Discuss", desc: "Defining project scope and technical parameters.", offset: false },
  { n: "02", title: "Plan", desc: "Wireframing logic and asymmetric fluid grid structures.", offset: true },
  { n: "03", title: "Design", desc: "Applying high-contrast visual tokens and typography.", offset: false },
  { n: "04", title: "Develop", desc: "Writing clean, responsive code without bloat.", offset: true },
  { n: "05", title: "Review", desc: "Rigorous cross-device testing and performance checks.", offset: false },
  { n: "06", title: "Deliver", desc: "Deployment of a production-ready, bespoke asset.", offset: true, final: true },
];
</script>

<template>
  <section
    id="flow"
    class="px-gutter py-16 mt-32 bg-surface-container-lowest border-y border-outline/10 transition-colors"
  >
    <div class="max-w-[1600px] mx-auto py-16">
      <h2 class="font-headline-lg-mobile md:font-headline-lg text-on-surface mb-16 text-center md:text-left transition-colors">
        The Engine Room
      </h2>

      <div class="grid grid-cols-2 md:grid-cols-6 gap-8 relative">
        <!-- Connector Line -->
        <div class="hidden md:block absolute top-6 left-0 w-full h-px bg-outline/20 transition-colors"></div>

        <div
          v-for="step in steps"
          :key="step.n"
          class="relative z-10 bg-surface-container-lowest pt-2 pr-4 transition-colors"
          :class="step.offset ? 'md:mt-8' : ''"
        >
          <div
            class="font-label-mono mb-4 bg-surface inline-block px-2 border transition-colors"
            :class="step.final ? 'text-primary font-bold border-primary' : 'text-secondary border-outline/20'"
          >
            {{ step.n }}
          </div>
          <h4
            class="font-headline-lg-mobile text-lg mb-2 transition-colors"
            :class="step.final ? 'text-primary' : 'text-on-surface'"
          >
            {{ step.title }}
          </h4>
          <p class="font-body-md text-sm text-on-surface-variant transition-colors">{{ step.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
