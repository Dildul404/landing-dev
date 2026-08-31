<script setup>
import TopNavBar from "./components/TopNavBar.vue";
import HeroSection from "./components/HeroSection.vue";
import IntroSection from "./components/IntroSection.vue";
import DesignEcosystemSection from "./components/DesignEcosystemSection.vue";
import PortfolioSection from "./components/PortfolioSection.vue";
import ProcessSection from "./components/ProcessSection.vue";
import FinalCtaSection from "./components/FinalCtaSection.vue";
import AppFooter from "./components/AppFooter.vue";
import WhyCustomSection from "./components/WhyCustomSection.vue";
</script>

<template>
  <!--
    Tempelkan class "devcore-scrollbar-theme" di sini kalau mau scrollbar
    custom aktif (lihat devcore-landing.css). Class "bg-surface text-on-surface
    font-body-md antialiased" sebaiknya ditaruh di elemen body/#app root
    project kamu, bukan di sini, supaya berlaku di seluruh halaman.
  -->
  <TopNavBar />
  <main class="pt-32">
    <HeroSection />
    <IntroSection />
    <ComparisonSection />
    <DesignEcosystemSection />
    <ResponsiveExperience />
    <WhyCustomSection />
    <PortfolioSection />
    <ProcessSection />
    <FinalCtaSection />
  </main>
  <AppFooter />
</template>
