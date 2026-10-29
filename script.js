function buatTabel() {
  let angka = document.getElementById("angka").value;
  let batas = document.getElementById("batas").value;
  let hasil = document.getElementById("hasil");

  if (angka == "") {
    hasil.innerHTML = "Masukkan angka terlebih dahulu!";
    return;
  }

  if (batas == "") {
    batas = 10;
  }

  let teks = "";

  for (let i = 1; i <= batas; i++) {
    teks += angka + " x " + i + " = " + (angka * i) + "<br>";
  }

  hasil.innerHTML = teks;
}

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