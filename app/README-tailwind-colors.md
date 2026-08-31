# Integrasi warna ke tailwind.config.js kamu

`devcore-landing.css` mendefinisikan warna sebagai CSS variable (`--color-*`)
supaya bisa berubah instan saat class `.dark` di-toggle di `<html>`, tanpa
perlu rebuild (beda dengan hex statis).

Supaya class Tailwind seperti `bg-surface`, `text-on-surface-variant`,
`border-outline/20` (termasuk dengan modifier opacity `/20`) bisa jalan,
tambahkan/merge `colors` di bawah ini ke `theme.extend.colors` pada
`tailwind.config.js` kamu:

```js
// tailwind.config.js
export default {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        surface: "rgb(var(--color-surface) / <alpha-value>)",
        "surface-dim": "rgb(var(--color-surface-dim) / <alpha-value>)",
        "surface-bright": "rgb(var(--color-surface-bright) / <alpha-value>)",
        "surface-container-lowest": "rgb(var(--color-surface-container-lowest) / <alpha-value>)",
        "surface-container-low": "rgb(var(--color-surface-container-low) / <alpha-value>)",
        "surface-container": "rgb(var(--color-surface-container) / <alpha-value>)",
        "surface-container-high": "rgb(var(--color-surface-container-high) / <alpha-value>)",
        "surface-container-highest": "rgb(var(--color-surface-container-highest) / <alpha-value>)",
        "surface-variant": "rgb(var(--color-surface-variant) / <alpha-value>)",
        "on-surface": "rgb(var(--color-on-surface) / <alpha-value>)",
        "on-surface-variant": "rgb(var(--color-on-surface-variant) / <alpha-value>)",
        outline: "rgb(var(--color-outline) / <alpha-value>)",
        "outline-variant": "rgb(var(--color-outline-variant) / <alpha-value>)",
        "inverse-surface": "rgb(var(--color-inverse-surface) / <alpha-value>)",
        "inverse-on-surface": "rgb(var(--color-inverse-on-surface) / <alpha-value>)",
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        "on-primary": "rgb(var(--color-on-primary) / <alpha-value>)",
        "primary-container": "rgb(var(--color-primary-container) / <alpha-value>)",
        "on-primary-container": "rgb(var(--color-on-primary-container) / <alpha-value>)",
        secondary: "rgb(var(--color-secondary) / <alpha-value>)",
        "on-secondary": "rgb(var(--color-on-secondary) / <alpha-value>)",
        "secondary-container": "rgb(var(--color-secondary-container) / <alpha-value>)",
        "on-secondary-container": "rgb(var(--color-on-secondary-container) / <alpha-value>)",
        tertiary: "rgb(var(--color-tertiary) / <alpha-value>)",
        "on-tertiary": "rgb(var(--color-on-tertiary) / <alpha-value>)",
        "tertiary-container": "rgb(var(--color-tertiary-container) / <alpha-value>)",
        "on-tertiary-container": "rgb(var(--color-on-tertiary-container) / <alpha-value>)",
        error: "rgb(var(--color-error) / <alpha-value>)",
        "on-error": "rgb(var(--color-on-error) / <alpha-value>)",
        "error-container": "rgb(var(--color-error-container) / <alpha-value>)",
        "on-error-container": "rgb(var(--color-on-error-container) / <alpha-value>)",
        background: "rgb(var(--color-background) / <alpha-value>)",
        "on-background": "rgb(var(--color-on-background) / <alpha-value>)",
        "surface-tint": "rgb(var(--color-surface-tint) / <alpha-value>)",
      },
      fontFamily: {
        "display-xl": ["Montserrat", "sans-serif"],
        "body-md": ["Inter", "sans-serif"],
        "label-mono": ["JetBrains Mono", "monospace"],
        "headline-lg": ["Montserrat", "sans-serif"],
        "headline-lg-mobile": ["Montserrat", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["80px", { lineHeight: "90px", letterSpacing: "-0.02em", fontWeight: "800" }],
        "headline-lg-mobile": ["32px", { lineHeight: "40px", fontWeight: "700" }],
        "label-mono": ["14px", { lineHeight: "20px", letterSpacing: "0.05em", fontWeight: "500" }],
      },
      spacing: {
        gutter: "32px",
      },
    },
  },
};
```

Kalau kamu sudah punya token dengan nama sama di config sendiri (misal
sudah ada `surface` versi kamu), pilih salah satu: pakai punya kamu (lalu
sesuaikan nama class di komponen), atau ganti punya kamu dengan versi
`rgb(var(...))` di atas supaya dark mode-nya jalan otomatis.

## Kenapa CSS variable, bukan swap object seperti kode aslinya?

Kode HTML asli mengganti `tailwind.config.theme.extend.colors` lewat
JavaScript saat runtime (`document.head.appendChild(script)`) — itu cuma
bisa jalan karena Tailwind di-load lewat CDN (`cdn.tailwindcss.com`) yang
mem-parsing config di browser. Di setup Vite, Tailwind di-compile jadi CSS
statis saat build, jadi trik itu tidak akan berefek. Solusi standarnya:
warna didefinisikan sebagai CSS variable yang nilainya berubah lewat
selector `.dark`, dan Tailwind config tinggal menunjuk ke variable itu —
"GET STARTED", `bg-surface` dan lainnya otomatis ikut berubah begitu class
`dark` di-toggle di `<html>`, tanpa perlu rebuild.

## Catatan soal `surface-variant`

Di script `updateThemeColors` pada kode asli, token `surface-variant` tidak
ikut di-swap (hanya ada di config awal, bukan di object `darkColors` /
`lightColors`) — jadi kalau diikuti persis, teksnya akan tetap warna terang
saat dark mode dan nyaris tidak kebaca di atas background gelap. Saya
tambahkan nilai dark untuk token ini (disamakan dengan
`surface-container-highest` versi dark) supaya tetap kebaca. Hapus baris
`--color-surface-variant` di `.dark` pada `devcore-landing.css` kalau kamu
mau perilaku identik dengan source aslinya.
