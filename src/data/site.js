// Edit data di sini saja — tanpa CMS / database.
// Ganti dengan brand + produk sendiri. Gambar lokal di public/img/.
// Base path agar jalan di GitHub Pages project site maupun domain root.
// import.meta.env.BASE_URL = "/company-profile-starter/" di Pages, "/" di root.
export const base = (import.meta.env.BASE_URL || "/").replace(/\/$/, "");

export const brands = ["Brand A", "Brand B", "Brand C", "Brand D", "Brand E", "Brand F"];

export const produk = [
  {kat:"Kategori 1",img:`${base}/img/warehouse.jpg`,items:[["PRODUK A 1 DUS","Rp 100.000"],["PRODUK B 1 PACK","Rp 50.000"]]},
  {kat:"Kategori 2",img:`${base}/img/outlet.jpg`,items:[["PRODUK C 1 DUS","Rp 200.000"],["PRODUK D 1 PACK","Rp 75.000"]]},
  {kat:"Kategori 3",img:`${base}/img/armada.jpg`,items:[["PRODUK E 1 DUS","Rp 150.000"]]},
];

export const site = {
  company: "PT Contoh Niaga",
  tagline: "Distributor FMCG — Contoh Kota",
  address: "Jl. Contoh No. 1, Contoh Kota",
  hours: "Senin–Sabtu 08.00–17.00",
};
