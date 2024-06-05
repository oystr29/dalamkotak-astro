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
    <li class="fragment custom opacity"> <b>BISINDO</b> adalah salah satu jenis <b>bahasa isyarat</b> yang digunakan komunitas tuli di <b>Indonesia</b> </li>
    <li class="fragment custom opacity">Masih ada <b>language barrier</b> antara komunitas tuli dan orang-orang yang tidak mengerti bahasa isyarat. </li>
    <li class="fragment custom opacity">Indonesia masih <b>kekurangan teknologi</b> yang berkaitan dengan <b>bahasa isyarat</b></li>
    <li class="fragment custom opacity">Salah satu solusinya ialah <b>teknologi</b> yang dapat <b>mendeteksi</b> BISINDO</li>
</ul>


### Latar Belakang Penelitian.

<ul>
    <li class="fragment custom opacity"><b>Teknologi</b> pendeteksi BISINDO masih memiliki <b>banyak kendala</b></li>
    <li class="fragment custom opacity">Terutama oleh tingkat kemiripan data citra <i>tracking</i> </li>
    <li class="fragment custom opacity">Dan juga dalam hal segmentasi objek dengan latar belakang</li>
    <li class="fragment custom opacity">Sehingga diperlukan <b>klasifikasi bahasa isyarat</b> </li>
</ul>


### Latar Belakang Penelitian..

<ul>
    <li class="fragment custom opacity"><b>Klasifikasi bahasa isyarat</b> dapat dilakukan dengan beberapa metode, salah satunya ialah <i>Support Vector Machine</i> </li>
    <li class="fragment custom opacity">
        <b>SVM</b> dipilih karena belum banyak penelitian yang menggunakannya sebagai metode klasifikasi <b>BISINDO</b> dan <b>Mediapipe</b> sebagai ekstrasi fitur
    </li>
    <li class="fragment custom opacity">
        Dua penelitian terkait sebelumnya menggunakan <b>LSTM</b>  dan <i>Logistic Regression</i>  serta <i>Random Forest</i> sebagai metode penelitian
    </li>
    <li class="fragment custom opacity">
        <b>SVM</b> akan diimpelentasikan untuk  klasifikasi citra <b>alfabet BISINDO</b> dengan ekstrasi fitur menggunakan <b>Mediapipe</b>
    </li>
</ul>


### Latar Belakang Penelitian...

<ul>
    <li class="fragment custom opacity">
        Ekstrasi fitur menggunakan <b>Mediapipe</b>
    </li>
    <li class="fragment custom opacity"> <b>Mediapipe</b> dipilih karena merupakan framework yang fokus ke <i>computer vision</i> </li>
</ul>


### Rumusan Masalah

<div class="fragment custom opacity">
    Bagaimana membuat <b>model</b> klasifikasi alfabet <b>BISINDO</b> menggunakan metode <b>SVM</b> ?

</div>


### Batasan Masalah

<ul>
    <li class="fragment custom opacity">Dataset berasal dari 
        <a href="https://www.kaggle.com/datasets/agungmrf/indonesian-sign-language-bisindo/data">kaggle.com</a> 
        yang berisi 26 huruf alfabet
    </li>
    <li class="fragment custom opacity">
        Penerapan <b>SVM</b> dilakukan pada <i>Hand Landmarks</i> yang didapat setelah ekstrasi fitur menggunakan <b>Mediapipe</b>
    </li>
    <li class="fragment custom opacity">
        Alfabet yang menggunakan gerakan seperti huruf J dan R hanya akan menampilkan bentuk terakhir dari gerakannya.
    </li>
</ul>


### Tujuan Penelitian

Tujuan dari penelitian ini ialah **membuat model klasifikasi alfabet BISINDO menggunakan _Support Vector Machine_ berdasarkan fitur _hand landmarks_ Mediapipe**


### Manfaat Penelitan

<ul>
    <li class="fragment custom opacity">
        Untuk <b>penulis</b>, bisa mendapatkan wawasan mengenai pembuatan model klasifikasi alfabet <b>BISINDO</b> dan penerapan metode <b>SVM</b>
    </li>
    <li class="fragment custom opacity">
        Untuk <b>mahasiswa</b>, penelitian ini bisa menjadi <b>referensi</b> kepada mahasiswa tentang bagaimana metode <b>SVM</b> diterapkan
    </li>
    <li class="fragment custom opacity">
        Untuk <b>lembaga</b>, diharapkan penelitian dapat membantu <b>komunitas tuli</b> dalam <b>menyebarluaskan BISINDO</b> ke <b>khalayak umum</b>
    </li>
</ul>


### Kontribusi Penelitian

<ul>
    <li class="fragment custom opacity">
        Penelitian ini diharapkan dapat <b>menghasilkan model</b>   yang dapat mengklasifikasikan <b>BISINDO</b> menggunakan <b>SVM</b>
    </li>
    <li class="fragment custom opacity">
        Sehingga <b>lebih banyak teknologi</b> dan penelitian tentang pendeteksian <b>BISINDO</b> guna <b>memperkecil jarak</b> antara <b>kita</b> dan <b>teman-teman tuli</b>.
    </li>
</ul>

---

## Bab 2 Tinjauan Pustaka


### Penelitian Terkait

<ul>
    <li class="fragment">
        <b>(H. Putri & Fuadi, 2020)</b>: Pendeteksian BISINDO Secara <i>Real-Time</i> Menggunakan LSTM
    </li>
    <li class="fragment">
        <b>(Novianty & Azmi, 2021)</b>: Sign Language Recognition using Principal Component Analysis and SVM
    </li>
    <li class="fragment">
        <b>(Aziz, 2021)</b>: <i>Image Recognition</i> Alfabet BISINDO Menggunakan Metode CNN 
    </li>
    <li class="fragment">
        <b>(Syah & Witanti, 2022)</b>: Analisis Sentimen Masyarakat Terhadap Vaksinasi Covid-19 Pada Media Sosisal Twitter Menggunakan Metode SVM
    </li>
    <li class="fragment">
        <b>(Kusuma dkk., 2022)</b>: Komparasi Algoritma SVM dan Naive Bayes pada Klasifikasi Ras Kucing 
    </li>
</ul>


### Penelitian Terkait.

<ul>
    <li class="fragment">
        <b>(Chusna dkk., 2022)</b>: Klasifikasi Citra Jenis Tanaman Jamur Layak Konsumsi Menggunakan Algoritma MSVM 
    </li>
    <li class="fragment">
        <b>(H. Putri dkk., 2023)</b>: Rancang Bangun Sistem Identifikasi Kesegaran Ikan Berdasarkan Citra Mata Menggunakan SVM
    </li>
    <li class="fragment">
        <b>(Alexander dkk., 2023)</b>: Penggunaan Machine Learning Dalam Klasifikasi BISINDO Menggunakan Kamera
    </li>
    <li class="fragment">
        <b>(Kulsumarwati dkk., 2021)</b>: Penerapan SVM dan Information Gain pada Analisis Sentimen Pelaksanaan Pilkada saat Pandemi.
    </li>
    <li class="fragment">
        <b>(Robert dkk., 2023)</b>: Sistem Pendeteksi Gerakan BISINDO Menggunakan Webcam dengan Metode <i>Supervised Learing</i>
    </li>
</ul>


### Bahasa Isyarat Indonesia

+ <b>Bahasa Isyarat Indonesia</b> atau BISINDO merupakan bahasa murni sahabat tuli di Indonesia (Dewi dkk., 2021). 
+ <b>Bahasa murni</b> dapat diartikan sebagai bahasa yang berkembang secara <b>alami</b> dari komunitas penggunanya, tanpa campur tangan dari pihak luar.


### Support Vector Machine

<ul>
    <li class="fragment custom opacity">
        <b>SVM</b> adalah metode <b>klasifikasi</b> yang mencari garis atau permukaan <b>pemisah</b> yang memiliki jarak terbesar antara dua kelas data terdekat dalam suatu ruang pemisah yang dikenal sebagai <b>hyperplane</b> (Pamungkas dkk., 2020)
    </li>
    <li class="fragment">
        Rumus dari <i>alpha</i>: 
        \begin{align*} \alpha &= \frac{N}{K(N*N)} \end{align*}
    </li>

</ul>


### Support Vector Machine.

<ul>
    <li class="fragment">
        Rumus dari <i>weight</i>: 
        \begin{align*} w &= \alpha_{i}y_{i}K(x,x_{i})  \end{align*}
    </li>
    <li class="fragment">
        Rumus dari <i>bias</i>: 
        \begin{align*} b &= -\frac{1}{2} (w x^+ +  w x^-)  \end{align*}
    </li>
    <li class="fragment">
        Rumus dari <i>hyperplane</i>: 
        \begin{align*} \overrightarrow{w}_i \overrightarrow{x}_i + b &= 0    \end{align*}
    </li>
    <li class="fragment">
        Rumus dari <i>SVM</i>: 
        \begin{align*} f(φ(X)) &= sign(w φ(X)+b)  \end{align*}
    </li>
</ul>


### Confusion Matrix

**Confusion matriks** adalah metode untuk mengukur kinerja deteksi objek seperti **akurasi, presisi**, dan **recall**. 

<ul>
    <li class="fragment">
        Rumus <i>Accuracy</i>:
        \begin{align*} Accuracy &= \frac{TP+TN}{TP+TN+FP+FN} \end{align*}
    </li>
    <li class="fragment">
        Rumus <i>Presisi dan Recall</i>:
        \begin{align*} 
        Presisi  &= \frac{TP}{TP+FP}, Recall &= \frac{TP}{TP+FN}  
        \end{align*}
    </li>
    <li class="fragment">
        Rumus <i>F-1 Score</i>:
        \begin{align*} 
        F1 Score  &= \frac{2TP}{2TP+FP+FN} \\
        \end{align*}
    </li>
</ul>


### Python

**Python** adalah bahasa pemrograman **interpretatif** yang mudah dipelajari, berfokus pada keterbacaan kode serta python bersifat multi platform (Wati & Ernawati, 2021)


### Framework Svelte

+ **Svelte** adalah sebuah User Interface (UI) Framework untuk bahasa pemrograman javascript.
+ **Svelte** dibuat oleh Rich Harris dan dirilis pada 2016 dengan fokus utama **peningkatan performa** dibandingkan dengan solusi yang ada (Paakkanen, 2023).


### Mediapipe

**Mediapipe** merupakan suatu library open source yang dirancang oleh **Google**. Mediapipe dapat digunakan sebagai pipeline untuk melakukan **inferensi** dari data **citra** (Lugaresi dkk., 2019). 

---

## Bab 3 Metodologi Penelitian


### Tahapan Pelaksanaan Penelitian

<pre class="mermaid r-stack">
    %%{init: {'theme': 'dark', 'themeVariables': { 'darkMode': true }}}%%
    flowchart TD
        A[Identifikasi Masalah] --> B[Studi Literatur] --> C[Pengumpulan Data] --> D[Preprocessing Data BISINDO] --> E[Modeling SVM dan Pengujian Model] --> F[Pembuatan Sistem]
</pre>


### Tahapan Pelaksanaan Penelitian.

<ul>
    <li class="fragment custom opacity">
        <b>Identifikasi Masalah</b>: melakukan <b>klasifikasi BISINDO</b> menggunakan metode <b>SVM</b> 
    </li>
    <li class="fragment custom opacity">
        <b>Studi Literatur</b>: dilakukan untuk mencari <b>konsep-konsep</b> dasar dari <b>SVM, BISINDO</b>, dan <b>Mediapipe</b> 
    </li>
    <li class="fragment custom opacity">
        <b>Pengumpulan Data</b>: data didapat dari website <a href="https://www.kaggle.com/datasets/agungmrf/indonesian-sign-language-bisindo/code">kaggle.com</a> dengan nama <b>ISLBISINDO1</b> milik username <b>idhamozi</b>
    </li>
    <li class="fragment custom opacity">
        <b>Preprocessing</b>: data dideteksi menggunakan <b>Mediapipe</b> yang menghasilkan 126 titik koordinat, data kemudian dibersihkan jika semua titik bernilai 0.
    </li>
    <li class="fragment custom opacity">
        <b>Modeling & Pengujian</b>: data ditraining menggunakan <b>SVM</b> agar menjadi <b>model</b>. Lalu algoritma dilakukan <b>pengujian</b> hasil menggunakan <i>Confusion Matrix</i>
    </li>
    <li class="fragment custom opacity">
        <b>Pembuatan Sistem</b>: sistem dibuat berdasarkan DFD sebagai output dari model
    </li>
</ul>


### Pengumpulan Data

<ul>
    <li class="fragment custom opacity">
        <b>Studi Literatur</b>: langkah untuk mencari informasi dari sumber-sumber ilmiah seperti jurnal artikel, buku, dan sumber terpercaya lainnya.
    </li>
    <li class="fragment custom opacity">
        <b>Internet</b>: data didapat dari website <a href="https://www.kaggle.com/datasets/agungmrf/indonesian-sign-language-bisindo/code">kaggle.com</a>
    </li>
    <li class="fragment custom opacity">
        Data berupa alfabet yang berjumlah 26 huruf, mulai dari A hingga Z.
    </li>
    <li class="fragment custom opacity">
        Huruf A, B, D, F, G, H, K, M, N, P, Q, S, T, W, X, dan Y menggunakan 2 tangan.
    </li>
    <li class="fragment custom opacity">
        Dan huruf C, E, I, J, L, O, R, U, V, dan Z menggunakan 1 tangan.
    </li>
    <li class="fragment custom opacity">
        Dataset gambar sudah terbagi menjadi data latih dan data uji.
    </li>
</ul>


### Perancangan Data

<b>Perancangan data</b> pada penelitian ini menggunakan library <b>Mediapipe</b>. 
Setiap gambar akan dideteksi menggunakan Mediapipe. <b>Hasil</b> pendeteksian ialah <b>21 koordinat 3D</b> untuk setiap tangan

<img src="/skripsian/img/hand-landmarks.png" class="fragment w-16" />


### Perancangan Data.

<b>Setiap sendi</b> tangan memiliki titik koordinat <b>x, y, dan z</b>, yang membuat setiap tangan memiliki <b>63 titik</b>. 
Dan juga karena <b>BISINDO</b> menggunakan <b>2 tangan</b>, sehingga titik koordinatnya menjadi <b>126 titik</b> 


### Perancangan Data..

Berikut adalah table kriteria:

<table>
    <thead>
        <tr>
            <th>No</th>
            <th>Nama Kriteria</th>
            <th>Index</th>
            <th>Kriteria</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>LEFT_WRIST</td>
            <td>0</td>
            <td>Left Wrist</td>
        </tr>
        <tr>
            <td>2</td>
            <td>LEFT_THUMB_CMC</td>
            <td>1</td>
            <td rowspan="4">Left Thumb</td>
        </tr>
        <tr>
            <td>3</td>
            <td>LEFT_THUMB_MCP</td>
            <td>2</td>
        </tr>
        <tr>
            <td>4</td>
            <td>LEFT_THUMB_IP</td>
            <td>3</td>
        </tr>
        <tr>
            <td>5</td>
            <td>LEFT_THUMB_TIP</td>
            <td>4</td>
        </tr>
        <tr class="text-center">
            <td colspan="4" class="text-center">...</td>
        </tr>
        <tr>
            <td>39</td>
            <td>RIGHT_PINKY_CMC</td>
            <td>17</td>
            <td rowspan="4">Right Pinky Finger</td>
        </tr>
        <tr>
            <td>40</td>
            <td>RIGHT_PINKY_MCP</td>
            <td>18</td>
        </tr>
        <tr>
            <td>41</td>
            <td>RIGHT_PINKY_IP</td>
            <td>19</td>
        </tr>
        <tr>
            <td>42</td>
            <td>RIGHT_PINKY_TIP</td>
            <td>20</td>
        </tr>
    </tbody>
</table>


### Perancangan Data...

Berikut adalah tabel sub-kriteria:

<table>
    <thead>
        <tr>
            <th>No</th>
            <th>Sub Kriteria</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>X</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Z</td>
        </tr>
    </tbody>
</table>


### Perancangan Proses/Algoritma 

<div class="flex items-center justify-center gap-6">
    <div class="mermaid">
    %%{init: {'theme': 'dark', 'themeVariables': { 'darkMode': true }}}%%
    flowchart TD
        A((Start)) --> B[/Dataset gambar/] --> C[Deteksi gambar dengan Mediapipe ] --> D[Cleaning data] --> E[/Dataset Bersih/] --> F[Input Dataset Latih] --> G((A))
    </div>
    <div class="mermaid">
    %%{init: {'theme': 'dark', 'themeVariables': { 'darkMode': true }}}%%
    flowchart TD
        A((A)) --> B[Hitung Nilai Kernel] --> C[Hitung nilai alfa, weight, dan bias] --> D[membuat hyperplane] --> E[membuat model SVM] --> F((End))
    </div>
</div>


### Perancangan Proses/Algoritma.

<ol>
    <li class="fragment custom opacity">
        Input dataset <b>gambar</b> 
    </li>
    <li class="fragment custom opacity">
        <b>Gambar</b> akan dideteksi oleh <b>Mediapipe</b> lalu diubah menjadi <b>126 titik koordinat</b> beserta label abjad.
    </li>
    <li class="fragment custom opacity">
        <b>Data</b> kemudian <b>dibersihkan</b> dengan <b>menghapus</b> semua <b>baris</b> yang semua <b>titiknya</b> bernilai <b>0</b>.
    </li>
    <li class="fragment custom opacity">
        <b>Dataset</b> bersih kemudian disimpan dalam bentuk <b>csv</b>.
    </li>
    <li class="fragment custom opacity">
        Input <b>Dataset</b> bersih untuk <b>dilatih</b>
    </li>
    <li class="fragment custom opacity">
        Hitung nilai kernel
    </li>
    <li class="fragment custom opacity">
        Hitung nilai <i>weight</i>, bias, <i>alpha</i>
    </li>
    <li class="fragment custom opacity">
        Lalu hitung nilai <i>hyperplane</i>
    </li>
    <li class="fragment custom opacity">
        Buat model <b>SVM</b> 
    </li>
</ol>


### Perancangan Proses/Algoritma..

<div class="flex items-center gap-4 justify-center">
    <img src="/skripsian/img/dfd0-dark.png" />
    <img src="/skripsian/img/dfd1-dark.png" />
</div>


### Perancangan Tampilan

<b>Halaman depan</b>
<div class="r-stack">
    <img src="/skripsian/img/Desktop - 1.png" width="500" heigth="500" />
</div>


### Perancangan Tampilan.

<b>Halaman Pilihan Level</b>
<div class="r-stack">
    <img src="/skripsian/img/Desktop - 4.png" width="500" heigth="500" />
</div>


### Perancangan Tampilan..

<b>Halaman Level</b>
<div class="r-stack">
    <img src="/skripsian/img/Desktop - 5.png" width="500" heigth="500" />
</div>


### Perancangan Tampilan...

<b>Halaman Pendeteksian</b>
<div class="r-stack">
    <img src="/skripsian/img/Desktop - 6.png" width="500" heigth="500" />
</div>


### Perancangan Pengujian

<b>Pengujian</b> menggunakan <i>Confusion Matrix</i>
<div class="fragment">Berikut adalah skema pengujian algoritma:</div>
<ol>
    <li class="fragment custom opacity">
        Buat tabel confusion matrix untuk masing-masing label.
    </li>
    <li class="fragment custom opacity">
        Sebagai contoh, terdapat label A, B, dan C, maka dipecah menjadi A+ dan A-, B+ dan B-, serta C+ dan C-.
    </li>
    <li class="fragment custom opacity">
        Masing-masing tabel dicari nilai True Positive (TP), True Negative (TN), False Positive (FP), dan False Negative (FN).
    </li>
    <li class="fragment custom opacity">
        Kemudian cari nilai accuracy menggunakan persamaan 2.13, precision menggunakan persamaan 2.14, dan recall menggunakan persamaan 2.15 untuk masing-masing label
    </li>
</ol>


### Waktu dan Tempat Penelitian

<div class="mermaid">
    %%{init: { 'logLevel': 'debug', 'theme': 'dark' } }%%
    timeline
        April : Pembuatan Proposal 
        Mei : Pembuatan Proposal
        Juni : Pembuatan Proposal
        Juli : Twitter
</div>

---

## Daftar Pustaka

- List
- List

---

## Lampiran

---

## Terima kasih

## ◍•ᴗ•◍
