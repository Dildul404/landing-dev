<template>
  <section id="styles" class="px-gutter py-16 mt-20">
    <div class="max-w-[1600px] mx-auto">
      <div class="mb-16 flex items-baseline justify-between border-b border-outline/20 pb-4 transition-colors">
        <h2 class="font-headline-lg-mobile md:font-headline-lg text-on-surface transition-colors">
          Design Ecosystem
        </h2>
        <span class="font-label-mono text-secondary text-sm hidden md:block transition-colors">
          [ EXPLORE_PATTERNS ]
        </span>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 auto-rows-[240px] gap-4">
        <template v-for="item in ecosystemItems" :key="item.id">
          
          <!-- 01 Minimalism -->
          <div v-if="item.type === 'minimalism'" :class="[getSizeClasses(item.size), 'hard-offset-container group']">
            <div class="hard-offset-shadow bg-surface-container-high transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
            <div class="relative h-full bg-surface-container border border-outline/10 p-8 flex flex-col justify-between overflow-hidden transition-colors">
              <div class="font-label-mono text-secondary transition-colors flex justify-between items-center">
                <span>{{ item.id }}</span>
                <component :is="item.icon" class="w-5 h-5 opacity-50" />
              </div>
              <div class="relative z-10">
                <h3 class="font-headline-lg-mobile text-on-surface mb-2 transition-colors">{{ item.title }}</h3>
                <p class="font-body-md text-on-surface-variant text-sm transition-colors">
                  {{ item.description }}
                </p>
              </div>
              <div class="absolute -bottom-10 -right-10 text-[200px] text-surface-container-highest font-display-xl font-bold leading-none select-none transition-transform group-hover:-translate-y-4">
                M
              </div>
            </div>
          </div>

          <!-- 02 Glassmorphism -->
          <div v-else-if="item.type === 'glassmorphism'" :class="[getSizeClasses(item.size), 'relative group']">
            <div class="absolute inset-0 bg-gradient-to-br from-black/5 to-black/0 dark:from-white/5 dark:to-white/0 backdrop-blur-xl border border-black/10 dark:border-white/10 p-6 flex flex-col justify-between z-10 transition-colors">
              <div class="font-label-mono text-secondary transition-colors flex justify-between items-center">
                <span>{{ item.id }}</span>
                <component :is="item.icon" class="w-5 h-5 opacity-50" />
              </div>
              <h3 class="font-headline-lg-mobile text-xl text-on-surface transition-colors">{{ item.title }}</h3>
            </div>
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-primary/30 rounded-full blur-xl group-hover:bg-primary/50 transition-colors"></div>
          </div>

          <!-- 03 Kinetic Typography -->
          <div v-else-if="item.type === 'kinetic'" :class="[getSizeClasses(item.size), 'bg-surface border border-outline/20 p-6 flex flex-col justify-between overflow-hidden group transition-colors']">
            <div class="font-label-mono text-secondary transition-colors flex justify-between items-center">
              <span>{{ item.id }}</span>
              <component :is="item.icon" class="w-5 h-5 opacity-50" />
            </div>
            <div class="relative h-12 w-full overflow-hidden">
              <h3 class="font-display-xl text-2xl text-on-surface absolute whitespace-nowrap group-hover:-translate-x-full transition-transform duration-1000 ease-linear">
                Kinetic Type / Kinetic Type
              </h3>
            </div>
          </div>

          <!-- 04 Neo-brutalism -->
          <div v-else-if="item.type === 'neobrutalism'" :class="[getSizeClasses(item.size), 'bg-surface border-2 border-primary p-6 flex flex-col justify-between shadow-[4px_4px_0px_0px_#a04100] hover:shadow-[6px_6px_0px_0px_#a04100] dark:shadow-[4px_4px_0px_0px_#ffb594] dark:hover:shadow-[6px_6px_0px_0px_#ffb594] transition-all group']">
            <div class="font-label-mono text-primary font-bold transition-colors flex justify-between items-center">
              <span>{{ item.id }}</span>
              <component :is="item.icon" class="w-5 h-5" />
            </div>
            <h3 class="font-headline-lg-mobile text-xl text-on-surface uppercase tracking-widest font-black transition-colors">
              {{ item.title }}
            </h3>
          </div>

          <!-- 05 Asymmetric Layout -->
          <div v-else-if="item.type === 'asymmetric'" :class="[getSizeClasses(item.size), 'bg-surface-container-lowest border border-outline/10 p-6 relative transition-colors group overflow-hidden']">
            <div class="font-label-mono text-secondary transition-colors flex justify-between items-center relative z-10">
              <span>{{ item.id }}</span>
              <component :is="item.icon" class="w-5 h-5 opacity-50" />
            </div>
            <h3 class="font-headline-lg-mobile text-xl text-on-surface absolute bottom-6 right-6 text-right w-1/2 leading-tight transition-transform group-hover:scale-105 origin-bottom-right z-10">
              Asymmetric<br />Layout
            </h3>
          </div>

          <!-- 06 Neumorphism -->
          <div v-else-if="item.type === 'neumorphism'" :class="[getSizeClasses(item.size), 'bg-surface-container border border-outline/5 p-6 flex flex-col justify-between transition-colors group shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.7)] dark:shadow-[6px_6px_12px_rgba(0,0,0,0.3),-6px_-6px_12px_rgba(255,255,255,0.02)]']">
            <div class="font-label-mono text-secondary transition-colors flex justify-between items-center">
              <span>{{ item.id }}</span>
              <component :is="item.icon" class="w-5 h-5 opacity-50 group-hover:scale-110 transition-transform" />
            </div>
            <h3 class="font-headline-lg-mobile text-xl text-on-surface transition-colors">{{ item.title }}</h3>
          </div>

          <!-- 07 Vibrant Gradients -->
          <div v-else-if="item.type === 'gradients'" :class="[getSizeClasses(item.size), 'relative p-6 flex flex-col justify-between overflow-hidden group']">
            <div class="absolute inset-0 bg-gradient-to-br from-primary via-tertiary to-secondary opacity-90 group-hover:scale-105 transition-transform duration-700"></div>
            <div class="relative z-10 flex justify-between items-center">
              <div class="font-label-mono text-on-primary transition-colors font-bold">{{ item.id }}</div>
              <component :is="item.icon" class="w-5 h-5 text-on-primary" />
            </div>
            <h3 class="font-headline-lg-mobile text-xl text-on-primary relative z-10 transition-colors">{{ item.title }}</h3>
          </div>

          <!-- 08 Dark Mode -->
          <div v-else-if="item.type === 'darkmode'" :class="[getSizeClasses(item.size), 'bg-[#0a0a0a] border border-[#222] p-6 flex flex-col justify-between text-white group']">
            <div class="flex justify-between items-center">
              <div class="font-label-mono text-gray-500">{{ item.id }}</div>
              <div class="w-10 h-5 bg-primary/20 rounded-full relative flex items-center px-1">
                <div class="w-3 h-3 bg-primary rounded-full group-hover:translate-x-5 transition-transform duration-300"></div>
              </div>
            </div>
            <div class="mt-auto flex justify-between items-end">
              <h3 class="font-headline-lg-mobile text-xl text-white">{{ item.title }}</h3>
              <component :is="item.icon" class="w-6 h-6 text-gray-600 group-hover:text-white transition-colors" />
            </div>
          </div>

          <!-- 09 Bento Grid -->
          <div v-else-if="item.type === 'bento'" :class="[getSizeClasses(item.size), 'bg-surface border border-outline/20 p-6 flex flex-col justify-between relative overflow-hidden transition-colors group']">
            <div class="font-label-mono text-secondary relative z-10 flex justify-between items-center">
              <span>{{ item.id }}</span>
              <component :is="item.icon" class="w-5 h-5 opacity-50" />
            </div>
            <div class="relative z-10 w-[55%] lg:w-1/2">
              <h3 class="font-headline-lg-mobile text-xl text-on-surface mb-2 transition-colors">{{ item.title }}</h3>
              <p class="font-body-md text-on-surface-variant text-sm transition-colors line-clamp-2">
                {{ item.description }}
              </p>
            </div>
            <div class="absolute right-6 top-6 bottom-6 w-[35%] lg:w-1/3 grid grid-cols-2 grid-rows-2 gap-3 opacity-60 group-hover:opacity-100 transition-opacity">
              <div class="bg-primary/20 rounded-md row-span-2 border border-primary/30"></div>
              <div class="bg-secondary/20 rounded-md border border-secondary/30"></div>
              <div class="bg-tertiary/20 rounded-md border border-tertiary/30"></div>
            </div>
          </div>

          <!-- 10 Micro Interaction -->
          <div v-else-if="item.type === 'micro'" :class="[getSizeClasses(item.size), 'bg-surface-container-low border border-outline/10 p-6 flex flex-col justify-between transition-colors group cursor-pointer']">
            <div class="font-label-mono text-secondary transition-colors flex justify-between items-center">
              <span>{{ item.id }}</span>
            </div>
            <div class="flex-1 flex items-center justify-center">
              <div class="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary group-hover:scale-110 group-active:scale-95 transition-all duration-300">
                <component :is="item.icon" class="w-6 h-6" />
              </div>
            </div>
            <h3 class="font-headline-lg-mobile text-xl text-on-surface transition-colors text-center">{{ item.title }}</h3>
          </div>

          <!-- 11 Abstract Shapes -->
          <div v-else-if="item.type === 'abstract'" :class="[getSizeClasses(item.size), 'bg-surface border border-outline/10 p-6 flex flex-col justify-between overflow-hidden relative transition-colors group']">
            <div class="absolute -right-4 -top-4 w-24 h-24 bg-primary/10 rounded-full blur-xl group-hover:bg-primary/30 transition-colors duration-700"></div>
            <div class="absolute -bottom-10 -left-10 w-32 h-32 border-4 border-secondary/20 rounded-[30%] rotate-12 group-hover:rotate-90 group-hover:border-secondary/40 transition-all duration-700"></div>
            <div class="relative z-10 flex justify-between items-center">
              <div class="font-label-mono text-secondary transition-colors">{{ item.id }}</div>
              <component :is="item.icon" class="w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity" />
            </div>
            <h3 class="font-headline-lg-mobile text-xl text-on-surface mt-auto relative z-10 transition-colors text-right">{{ item.title }}</h3>
          </div>

        </template>
      </div>

      <div class="mt-12 text-center">
        <p class="font-body-md text-on-surface-variant text-sm italic transition-colors">
          * All of these design styles can be combined to suit your project needs.
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

const ecosystemItems = [
  {
    id: '01',
    title: 'Minimalism',
    description: 'Focusing on stark contrast, negative space, and essential typography.',
    size: 'large',
    type: 'minimalism',
    icon: AlignLeft
  },
  {
    id: '02',
    title: 'Glassmorphism',
    description: 'Transparency, blur effects, and glass-like visual elements.',
    size: 'normal',
    type: 'glassmorphism',
    icon: Layers
  },
  {
    id: '03',
    title: 'Kinetic Typography',
    description: 'Typography that can move or transform to emphasize important content.',
    size: 'normal',
    type: 'kinetic',
    icon: Type
  },
  {
    id: '04',
    title: 'Neo-brutalism',
    description: 'Strong borders, bold shapes, high contrast, and expressive visual elements.',
    size: 'normal',
    type: 'neobrutalism',
    icon: Square
  },
  {
    id: '05',
    title: 'Asymmetric Layout',
    description: 'Layout compositions that do not rely entirely on conventional symmetrical structures.',
    size: 'normal',
    type: 'asymmetric',
    icon: MoveDiagonal
  },
  {
    id: '06',
    title: 'Neumorphism',
    description: 'Soft shadows and elements that appear integrated into the surrounding surface.',
    size: 'wide-third',
    type: 'neumorphism',
    icon: Circle
  },
  {
    id: '07',
    title: 'Vibrant Gradients',
    description: 'Strong and expressive gradient combinations.',
    size: 'wide-third',
    type: 'gradients',
    icon: Palette
  },
  {
    id: '08',
    title: 'Dark Mode',
    description: 'Dark interfaces with strong contrast and modern visual presentation.',
    size: 'wide-third',
    type: 'darkmode',
    icon: Moon
  },
  {
    id: '09',
    title: 'Bento Grid',
    description: 'Modular content sections arranged using cards with different sizes.',
    size: 'wide-half',
    type: 'bento',
    icon: LayoutGrid
  },
  {
    id: '10',
    title: 'Micro Interaction',
    description: 'Small interactive effects for buttons, cards, navigation, and hover states.',
    size: 'normal',
    type: 'micro',
    icon: MousePointerClick
  },
  {
    id: '11',
    title: 'Abstract Shapes',
    description: 'Abstract visual elements used to strengthen the identity of the website.',
    size: 'normal',
    type: 'abstract',
    icon: Shapes
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
