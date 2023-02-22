function buatObjectKucing(nama, jenis, warna){
    var kucing = {};
    kucing.nama = nama;
    kucing.jenis = jenis;
    kucing.warna = warna;
    kucing.bersuara = function(){
        return "Meow..";
    }
    return kucing;
}
var kucing1 = buatObjectKucing("Milo", "Persia", "Putih");
kucing1(nama);