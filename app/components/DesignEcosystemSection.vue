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
          
          <!-- 01 Minimalism -->
          <div v-if="item.type === 'minimalism'" :class="[getSizeClasses(item.size), 'relative group overflow-hidden border border-outline/10 bg-surface-container']">
            <img src="~/assets/images/minimalism.png" alt="Minimalism" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
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

          <!-- 02 Glassmorphism -->
          <div v-else-if="item.type === 'glassmorphism'" :class="[getSizeClasses(item.size), 'relative group overflow-hidden border border-outline/10 bg-surface-container']">
            <img src="~/assets/images/glassmorphism.png" alt="Glassmorphism" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
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

          <!-- 03 Kinetic Typography -->
          <div v-else-if="item.type === 'kinetic'" :class="[getSizeClasses(item.size), 'relative group overflow-hidden border border-outline/10 bg-surface-container']">
            <img src="~/assets/images/kinetic-type.png" alt="Kinetic Typography" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
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

          <!-- 04 Neo-brutalism -->
          <div v-else-if="item.type === 'neobrutalism'" :class="[getSizeClasses(item.size), 'relative group overflow-hidden border border-outline/10 bg-surface-container']">
            <img src="~/assets/images/neo-brutalism.png" alt="Neo Brutalism" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
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

          <!-- 05 Asymmetric Layout -->
          <div v-else-if="item.type === 'asymmetric'" :class="[getSizeClasses(item.size), 'relative group overflow-hidden border border-outline/10 bg-surface-container']">
            <img src="~/assets/images/asymmetric.png" alt="Asymmetric Layout" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
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

          <!-- 06 Neumorphism -->
          <div v-else-if="item.type === 'neumorphism'" :class="[getSizeClasses(item.size), 'relative group overflow-hidden border border-outline/10 bg-surface-container']">
            <img src="~/assets/images/neumorphism.png" alt="Neumorphism" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
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

          <!-- 07 Vibrant Gradients -->
          <div v-else-if="item.type === 'gradients'" :class="[getSizeClasses(item.size), 'relative group overflow-hidden border border-outline/10 bg-surface-container']">
            <img src="~/assets/images/vibrant-gradients.png" alt="Vibrant Gradients" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
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

          <!-- 08 Dark Mode -->
          <div v-else-if="item.type === 'darkmode'" :class="[getSizeClasses(item.size), 'relative group overflow-hidden border border-outline/10 bg-surface-container']">
            <img src="~/assets/images/dark-mode.png" alt="Dark Mode" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
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

          <!-- 09 Bento Grid -->
          <div v-else-if="item.type === 'bento'" :class="[getSizeClasses(item.size), 'relative group overflow-hidden border border-outline/10 bg-surface-container']">
            <img src="~/assets/images/bento-grid.png" alt="Bento grid" class="absolute inset-0 w-full h-full  object-top object-cover transition-transform duration-700 group-hover:scale-105" />
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

          <!-- 10 Micro Interaction -->
          <div v-else-if="item.type === 'micro'" :class="[getSizeClasses(item.size), 'relative group overflow-hidden border border-outline/10 bg-surface-container']">
            <img src="~/assets/images/micro-interaction.png" alt="Micro interaction" class="absolute inset-0 w-full h-full  object-top object-cover transition-transform duration-700 group-hover:scale-105" />
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

          <!-- 11 Abstract Shapes -->
          <div v-else-if="item.type === 'abstract'" :class="[getSizeClasses(item.size), 'relative group overflow-hidden border border-outline/10 bg-surface-container']">
            <img src="~/assets/images/abstract-shapes.png" alt="Abstract shapes" class="absolute inset-0 w-full h-full  object-top object-cover transition-transform duration-700 group-hover:scale-105" />
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

const ecosystemItems = [
  {
    id: '01',
    title: 'Minimalism',
    description: 'Fokus pada kontras yang kuat, negative space, dan tipografi esensial.',
    size: 'large',
    type: 'minimalism',
    icon: AlignLeft
  },
  {
    id: '02',
    title: 'Glassmorphism',
    description: 'Efek transparan, blur, dan elemen visual layaknya kaca.',
    size: 'normal',
    type: 'glassmorphism',
    icon: Layers
  },
  {
    id: '03',
    title: 'Kinetic Typography',
    description: 'Tipografi bergerak dan dinamis untuk menonjolkan pesan penting.',
    size: 'normal',
    type: 'kinetic',
    icon: Type
  },
  {
    id: '04',
    title: 'Neo-brutalism',
    description: 'Garis tegas, shape bold, kontras tinggi, dan ekspresif.',
    size: 'normal',
    type: 'neobrutalism',
    icon: Square
  },
  {
    id: '05',
    title: 'Asymmetric Layout',
    description: 'Komposisi layout yang nggak simetris.',
    size: 'normal',
    type: 'asymmetric',
    icon: MoveDiagonal
  },
  {
    id: '06',
    title: 'Neumorphism',
    description: 'Soft shadow bikin elemen UI keliatan menyatu dengan background.',
    size: 'wide-third',
    type: 'neumorphism',
    icon: Circle
  },
  {
    id: '07',
    title: 'Vibrant Gradients',
    description: 'Kombinasi gradien warna yang ngejreng dan ekspresif.',
    size: 'wide-third',
    type: 'gradients',
    icon: Palette
  },
  {
    id: '08',
    title: 'Dark Mode',
    description: 'Tampilan antarmuka gelap yang modern, elegan, dan kontras.',
    size: 'wide-third',
    type: 'darkmode',
    icon: Moon
  },
  {
    id: '09',
    title: 'Bento Grid',
    description: 'Struktur layout modular menggunakan card dengan ukuran bervariasi.',
    size: 'wide-half',
    type: 'bento',
    icon: LayoutGrid
  },
  {
    id: '10',
    title: 'Micro Interaction',
    description: 'Animasi kecil buat interaksi tombol, card, dan navigasi (hover effect).',
    size: 'normal',
    type: 'micro',
    icon: MousePointerClick
  },
  {
    id: '11',
    title: 'Abstract Shapes',
    description: 'Elemen abstrak visual untuk memperkuat identitas brand website Anda.',
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
