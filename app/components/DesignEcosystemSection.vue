<template>
  <section id="styles" class="px-gutter py-16 mt-20">
    <div class="max-w-[1600px] mx-auto">
      <div class="mb-16 flex items-baseline justify-between border-b border-outline/20 pb-4 transition-colors">
        <h2 class="font-headline-lg-mobile md:font-headline-lg text-on-surface transition-colors">
          Ekosistem Desain
        </h2>
        <span class="font-label-mono text-secondary text-sm hidden md:block transition-colors">
          [ EKSPLOR_PATTERN ]
        </span>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 auto-rows-60 gap-4">
        <template v-for="item in ecosystemItems" :key="item.id">
          
          <div :class="[getSizeClasses(item.size), 'relative group overflow-hidden border border-outline/10 bg-surface-container']">
            <img :src="item.image" :alt="item.title" :class="['absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105', item.imageClass || '']" />
            <div class="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
            <div class="relative h-full p-8 flex flex-col justify-between transition-colors z-10">
              <div class="font-label-mono text-white/80 flex justify-between items-center">
                <span>{{ item.id }}</span>
                <component :is="item.icon" class="w-5 h-5 text-white/80" />
              </div>
              <div class="mt-auto pt-16">
                <h3 class="font-headline-lg-mobile text-white mb-2">{{ item.title }}</h3>
                <p class="font-body-md text-white/90 text-sm">
                  {{ item.description }}
                </p>
              </div>
            </div>
          </div>

        </template>
      </div>

      <div class="mt-12 text-center">
        <p class="font-body-md text-on-surface-variant text-sm italic transition-colors">
          * Semua style desain ini bisa dikombinasikan menyesuaikan kebutuhan project Anda.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { 
  AlignLeft, Layers, Type, Square, MoveDiagonal, 
  Circle, Palette, Moon, LayoutGrid, MousePointerClick, Shapes 
} from 'lucide-vue-next'

import minimalismImg from '~/assets/images/minimalism.png'
import glassmorphismImg from '~/assets/images/glassmorphism.png'
import kineticImg from '~/assets/images/kinetic-type.png'
import neobrutalismImg from '~/assets/images/neo-brutalism.png'
import asymmetricImg from '~/assets/images/asymmetric.png'
import neumorphismImg from '~/assets/images/neumorphism.png'
import gradientsImg from '~/assets/images/vibrant-gradients.png'
import darkmodeImg from '~/assets/images/dark-mode.png'
import bentoImg from '~/assets/images/bento-grid.png'
import microImg from '~/assets/images/micro-interaction.png'
import abstractImg from '~/assets/images/abstract-shapes.png'

const ecosystemItems = [
  {
    id: '01',
    title: 'Minimalism',
    description: 'Fokus pada kontras yang kuat, negative space, dan tipografi esensial.',
    size: 'large',
    type: 'minimalism',
    icon: AlignLeft,
    image: minimalismImg
  },
  {
    id: '02',
    title: 'Glassmorphism',
    description: 'Efek transparan, blur, dan elemen visual layaknya kaca.',
    size: 'normal',
    type: 'glassmorphism',
    icon: Layers,
    image: glassmorphismImg
  },
  {
    id: '03',
    title: 'Kinetic Typography',
    description: 'Tipografi bergerak dan dinamis untuk menonjolkan pesan penting.',
    size: 'normal',
    type: 'kinetic',
    icon: Type,
    image: kineticImg
  },
  {
    id: '04',
    title: 'Neo-brutalism',
    description: 'Garis tegas, shape bold, kontras tinggi, dan ekspresif.',
    size: 'normal',
    type: 'neobrutalism',
    icon: Square,
    image: neobrutalismImg
  },
  {
    id: '05',
    title: 'Asymmetric Layout',
    description: 'Komposisi layout yang nggak simetris.',
    size: 'normal',
    type: 'asymmetric',
    icon: MoveDiagonal,
    image: asymmetricImg
  },
  {
    id: '06',
    title: 'Neumorphism',
    description: 'Soft shadow bikin elemen UI keliatan menyatu dengan background.',
    size: 'wide-third',
    type: 'neumorphism',
    icon: Circle,
    image: neumorphismImg
  },
  {
    id: '07',
    title: 'Vibrant Gradients',
    description: 'Kombinasi gradien warna yang ngejreng dan ekspresif.',
    size: 'wide-third',
    type: 'gradients',
    icon: Palette,
    image: gradientsImg
  },
  {
    id: '08',
    title: 'Dark Mode',
    description: 'Tampilan antarmuka gelap yang modern, elegan, dan kontras.',
    size: 'wide-third',
    type: 'darkmode',
    icon: Moon,
    image: darkmodeImg
  },
  {
    id: '09',
    title: 'Bento Grid',
    description: 'Struktur layout modular menggunakan card dengan ukuran bervariasi.',
    size: 'wide-half',
    type: 'bento',
    icon: LayoutGrid,
    image: bentoImg,
    imageClass: 'object-top'
  },
  {
    id: '10',
    title: 'Micro Interaction',
    description: 'Animasi kecil buat interaksi tombol, card, dan navigasi (hover effect).',
    size: 'normal',
    type: 'micro',
    icon: MousePointerClick,
    image: microImg,
    imageClass: 'object-top'
  },
  {
    id: '11',
    title: 'Abstract Shapes',
    description: 'Elemen abstrak visual untuk memperkuat identitas brand website Anda.',
    size: 'normal',
    type: 'abstract',
    icon: Shapes,
    image: abstractImg,
    imageClass: 'object-top'
  }
]

const getSizeClasses = (size: string) => {
  switch (size) {
    case 'large': 
      return 'lg:col-span-6 lg:row-span-2'
    case 'wide-half': 
      return 'lg:col-span-6 lg:row-span-1'
    case 'wide-third': 
      return 'lg:col-span-4 lg:row-span-1'
    case 'normal': 
      return 'lg:col-span-3 lg:row-span-1'
    default: 
      return 'lg:col-span-3 lg:row-span-1'
  }
}
</script>
