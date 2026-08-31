<script setup>
const columns = [
  {
    label: "Navigation",
    links: [
      { text: "CUSTOM UI", active: false, href: "#ui" },
      { text: "INTRO", active: false, href: "#intro" },
      { text: "COMPARISON", active: false, href: "#comparison" },
      { text: "DESIGN STYLES", active: false, href: "#styles" },
    ],
  },
  {
    label: "Details",
    links: [
      { text: "RESPONSIVE", active: false, href: "#responsive" },
      { text: "WHY CUSTOM", active: false, href: "#why-custom" },
      { text: "PORTFOLIO", active: false, href: "#work" },
      { text: "PROCESS", active: false, href: "#flow" },
      { text: "CONTACT", active: false, href: "#talk" },
    ],
  },
  {
    label: "Social",
    links: [
      { text: "LINKEDIN", active: false, href: "https://linkedin.com", target: "_blank" },
      { text: "GITHUB", active: false, href: "https://github.com", target: "_blank" },
    ],
  },
];

const scrollToSection = (e, href) => {
  if (href && href.startsWith("#")) {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }
};
</script>

<template>
  <footer
    class="bg-surface-container-lowest w-full mt-16 bg-surface-container-high border-t border-outline-variant/20 text-primary font-body-md text-body-md text-on-surface-variant grid grid-cols-1 md:grid-cols-12 gap-gutter px-gutter py-16 transition-colors"
  >
    <div class="md:col-span-4 flex flex-col justify-between h-full min-h-[150px]">
      <div class="font-display-xl text-headline-lg text-secondary transition-colors">DEV_CORE</div>
      <div class="text-sm mt-8 opacity-60">© 2024 DEV_CORE. BUILT WITH PRECISION.</div>
    </div>

    <div class="md:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
      <div v-for="col in columns" :key="col.label" class="flex flex-col gap-4">
        <span class="font-label-mono text-xs uppercase text-on-surface opacity-50 mb-2 transition-colors">
          {{ col.label }}
        </span>
        <a
          v-for="link in col.links"
          :key="link.text"
          :href="link.href || '#'"
          :target="link.target || '_self'"
          @click="scrollToSection($event, link.href)"
          class="font-label-mono text-sm transition-all duration-300"
          :class="
            link.active
              ? 'text-secondary font-bold'
              : 'text-on-surface-variant hover:text-primary hover:translate-x-1'
          "
        >
          {{ link.text }}
        </a>
      </div>
    </div>
  </footer>
</template>
