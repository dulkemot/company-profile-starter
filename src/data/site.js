// Edit data di sini saja — tanpa CMS / database.
// Ganti dengan brand + produk sendiri.
// Placeholder memakai SVG data-URI agar selalu tampil tanpa internet.
const svg = (t, bg = "#DCE6F3", fg = "#1756A6") =>
  "data:image/svg+xml," + encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='600' height='300'><rect width='600' height='300' fill='${bg}'/><text x='50%' y='52%' font-family='Arial' font-size='28' font-weight='bold' fill='${fg}' text-anchor='middle'>${t}</text></svg>`);

export const brands = [
  ["Brand A", svg("Brand A", "#fff")],
  ["Brand B", svg("Brand B", "#fff")],
  ["Brand C", svg("Brand C", "#fff")],
  ["Brand D", svg("Brand D", "#fff")],
];

export const produk = [
  {kat:"Kategori 1",img: svg("Kategori 1"),items:[["PRODUK A 1 DUS","Rp 100.000"],["PRODUK B 1 PACK","Rp 50.000"]]},
  {kat:"Kategori 2",img: svg("Kategori 2"),items:[["PRODUK C 1 DUS","Rp 200.000"],["PRODUK D 1 PACK","Rp 75.000"]]},
  {kat:"Kategori 3",img: svg("Kategori 3"),items:[["PRODUK E 1 DUS","Rp 150.000"]]},
];

export const site = {
  company: "PT Contoh Niaga",
  tagline: "Distributor FMCG — Contoh Kota",
  address: "Jl. Contoh No. 1, Contoh Kota",
  hours: "Senin–Sabtu 08.00–17.00",
};
