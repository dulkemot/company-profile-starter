# Company Profile Starter — Astro Static

Starter company profile 4 halaman: beranda hero video, produk/katalog, kegiatan, kontak. Static output, tanpa backend/CMS.

![Astro](https://img.shields.io/badge/Astro-4BC0D8?style=for-the-badge&logo=astro&logoColor=white)
![JS](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## Demo struktur

- `/` — hero video full-bleed + marquee brand + layanan
- `/produk` — grid katalog dari `src/data/site.js`
- `/kegiatan-event` — grid event
- `/kontak` — alamat + form statis

## Run

```bash
npm install
npm run dev
npm run build # output dist/
```

## Kustomisasi (5 menit)

1. `src/data/site.js` — ganti `brands`, `produk`, `site`
2. `public/hero.mp4` — taruh video <8MB + poster, atau hapus tag video pakai image saja
3. `src/layouts/Base.astro` — warna brand: `#FF8A00` / `#1756A6`
4. Deploy `dist/` ke GitHub Pages / Netlify / shared hosting

## Kenapa template ini

- 1 file data = seluruh katalog, mudah diupdate non-dev
- Static = cepat di HP, ukuran kecil, SEO oke
- Disanitasi dari project client nyata (APN) — aman untuk publik

## Kredit aset

- Foto: Unsplash (https://unsplash.com) — lisensi gratis untuk komersial, tanpa atribusi wajib. File di `public/img/`.
- Video hero: Pexels (https://www.pexels.com) — lisensi gratis untuk komersial. File `public/hero.mp4`.

MIT — dulkemot 2026
