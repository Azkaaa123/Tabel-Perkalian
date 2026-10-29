// function buat tabel perkalian
function buatTabel() {
  let angka = document.getElementById("angka").value;
  let batas = document.getElementById("batas").value;
  let hasil = document.getElementById("hasil");

  // cek kalau input kosong
  if (angka == "") {
    hasil.innerHTML = "Masukkan angka terlebih dahulu!";
    return;
  }

  // kalau batas kosong, defaultnya 10
  if (batas == "") {
    batas = 10;
  }

  let teks = "";
  // perulangan for sesuai materi
  for (let i = 1; i <= batas; i++) {
    teks += angka + " x " + i + " = " + (angka * i) + "<br>";
  }

  hasil.innerHTML = teks;
}

// function faktorial pakai for
function faktorial(n) {
  let total = 1;
  for (let i = 1; i <= n; i++) {
    total = total * i;
  }
  return total;
}

function hitungFaktorial() {
  let n = document.getElementById("angkaFaktorial").value;
  let hasil = document.getElementById("hasil");

  if (n == "") {
    hasil.innerHTML = "Masukkan angka terlebih dahulu!";
    return;
  }

  let hitung = faktorial(n);
  hasil.innerHTML = n + "! = " + hitung;
}