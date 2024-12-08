document.getElementById("whatsappButton").addEventListener("click", function () {
  // Nomor WhatsApp tujuan (gunakan nomor WhatsApp Anda, dengan format internasional)
  var phoneNumber = "6281315292224"; // Ganti dengan nomor WhatsApp Anda
  var message = "Halo, saya tertarik untuk mendapatkan informasi lebih lanjut!"; // Pesan otomatis yang ingin dikirim

  // Membuat URL WhatsApp dengan nomor dan pesan otomatis
  var whatsappUrl = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);

  // Cetak URL untuk pengecekan
  console.log(whatsappUrl);

  // Mengarahkan pengguna ke WhatsApp
  window.open(whatsappUrl, "_blank");
});
