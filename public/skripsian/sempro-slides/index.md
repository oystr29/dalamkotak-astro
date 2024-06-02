### Implementasi _Support Vector Machine_ Pada _Hand Landmark_ Alfabet Bahasa Isyarat Indonesia Menggunakan Mediapipe

<div class="r-stack">
<img src="/skripsian/img/unmul-alpha.png" width="120" />
</div>

Oktavian Yoga Syahputra - 1915016074

Program Studi Informatika

Fakultas Teknik

Universitas Mulawarman

2024

---

## Bab 1 Pendahuluan


### Latar Belakang Penelitian

<ul>
    <li class="fragment"> <b>BISINDO</b> adalah salah satu jenis <b>bahasa isyarat</b> yang digunakan komunitas tuli di <b>Indonesia</b> </li>
    <li class="fragment">Masih ada <b>language barrier</b> antara komunitas tuli dan orang-orang yang tidak mengerti bahasa isyarat. </li>
    <li class="fragment">Indonesia masih <b>kekurangan teknologi</b> yang berkaitan dengan <b>bahasa isyarat</b></li>
    <li class="fragment">Salah satu solusinya ialah <b>teknologi</b> yang dapat <b>mendeteksi</b> BISINDO</li>
</ul>


### Latar Belakang Penelitian.

<ul>
    <li><b>Teknologi</b> pendeteksi BISINDO masih memiliki <b>banyak kendala</b></li>
    <li class="fragment">Terutama oleh tingkat kemiripan data citra <i>tracking</i> </li>
    <li class="fragment">Dan juga dalam hal segmentasi objek dengan latar belakang</li>
    <li class="fragment">Sehingga diperlukan <b>klasifikasi bahasa isyarat</b> </li>
</ul>


### Latar Belakang Penelitian..

<ul>
    <li><b>Klasifikasi bahasa isyarat</b> dapat dilakukan dengan beberapa metode, salah satunya ialah <i>Support Vector Machine</i> </li>
    <li class="fragment">
        <b>SVM</b> dipilih karena belum banyak penelitian yang menggunakannya sebagai metode klasifikasi <b>BISINDO</b> dan <b>Mediapipe</b> sebagai ekstrasi fitur
    </li>
    <li class="fragment">
        Dua penelitian terkait sebelumnya menggunakan <b>LSTM</b>  dan <i>Logistic Regression</i>  serta <i>Random Forest</i> sebagai metode penelitian
    </li>
    <li class="fragment">
        <b>SVM</b> akan diimpelentasikan untuk  klasifikasi citra <b>alfabet BISINDO</b> dengan ekstrasi fitur menggunakan <b>Mediapipe</b>
    </li>
</ul>


### Latar Belakang Penelitian...

<ul>
    <li class="">
        Ekstrasi fitur menggunakan <b>Mediapipe</b>
    </li>
    <li class="fragment"> <b>Mediapipe</b> dipilih karena merupakan framework yang fokus ke <i>computer vision</i> </li>
</ul>


### Rumusan Masalah

<div class="fragment">
Bagaimana membuat <b>model</b> klasifikasi alfabet <b>BISINDO</b> menggunakan metode <b>SVM</b> ?
</div>



### Batasan Masalah

<ul>
    <li class="fragment custom opacity">Dataset berasal dari 
        <a href="https://www.kaggle.com/datasets/agungmrf/indonesian-sign-language-bisindo/data">kaggle.com</a> 
        yang berisi 26 huruf alfabet
    </li>
    <li class="fragment custom opacity">
        Perhitungan SVM dilakukan pada data <i>hand landmark</i> yang didapat setelah pendeteksian gambar menggunakan mediapipe
    </li>
    <li class="fragment custom opacity">
        Sistem yang dibangun akan mendeteksi bentuk tangan <i>user</i> dan sistem akan menampilkan huruf dari tangan yang dideteksi
    </li>
</ul>


### Tujuan Penelitian


### Manfaat Penelitan


### Kontribusi Penelitian

---

## Bab 2 Tinjauan Pustaka


### Peneltian Terkait


### Teori Pendukung

---

## Bab 3 Metodologi Penelitian


### Tahapan Pelaksanaan Penelitian

---

## Daftar Pustaka


+ List
+ List

---

## Lampiran

---

## Terima kasih 
## ◍•ᴗ•◍
