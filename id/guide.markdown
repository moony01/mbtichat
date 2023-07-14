---
layout: post
title: Panduan Pengguna untuk mbtiChat
image: '/images/userGuide/thumbnail-en.jpg'
---
Aplikasi mbtiChat adalah sebuah aplikasi yang memungkinkan pengguna untuk berbincang bebas dengan karakter AI berdasarkan 16 jenis MBTI. Aplikasi ini dikembangkan dengan tujuan memenuhi rasa ingin tahu pengguna tentang karakteristik dari berbagai jenis MBTI, hubungan antar jenis, serta pemikiran dan perilaku dari berbagai jenis tersebut. Sekarang, mari kita lihat bagaimana cara menggunakan aplikasi mbtiChat.

## Fitur-fitur Aplikasi dan Pengenalan Halaman
Selain fitur obrolan dengan AI, aplikasi kami juga memiliki fitur-fitur yang lebih rinci seperti panduan dan blog. Fitur utama dan halaman-halaman dalam aplikasi mbtiChat adalah **Obrolan dengan AI** dan **Blog**. Meskipun terdapat fitur lain seperti halaman panduan pengguna dan pemilihan bahasa, kita akan fokus pada kedua fitur utama ini dan menjelajahinya secara detail.

### 1. Fitur Obrolan dengan AI
![Pemilihan Bahasa untuk Obrolan dengan AI berbasis MBTI](/images/userGuide/userguide-1.jpg)

Fitur Obrolan dengan AI memungkinkan Anda untuk berbincang dengan karakter AI yang Anda pilih dengan mengklik tombol [Obrolan] dari halaman utama. AI ini dikembangkan berdasarkan versi **gpt-3.5** API. Untuk memulai obrolan dengan AI, Anda perlu **memilih bahasa terlebih dahulu untuk mengubah bahasa aplikasi**.

![Pemilihan Karakter dan Klik Tombol Obrolan dengan AI berbasis MBTI](/images/userGuide/userguide-2.jpg)

Untuk berbincang dengan AI, Anda dapat mengklik tombol [Obrolan] di bawah karakter-karakter pada halaman utama. Setiap karakter telah dilatih dengan satu jenis MBTI. Sekarang, mari mulai obrolan dengan karakter yang dipilih. Kita telah berpindah ke halaman obrolan, dan Anda dapat melihat dalam gambar di bawah ini bahwa karakter memperkenalkan diri dan meminta jenis MBTI Anda.

![Halaman untuk Berbincang dengan AI berbasis MBTI](/images/userGuide/userguide-3.jpg)

Meskipun Anda tidak memberikan jenis MBTI Anda, Anda tetap dapat bertanya kepada karakter tentang karakteristik dari jenis MBTI yang dimilikinya atau menanyakan tentang kompatibilitas dan interaksi antara jenis Anda dan jenis AI tersebut. Namun, jika Anda ingin mengetahui tentang kompatibilitas atau interaksi antara jenis Anda dan jenis karakter, Anda perlu memberitahu AI tentang jenis MBTI Anda. Anda dapat bertanya kepada karakter, "Dapatkah Anda memberi saya alamat situs web untuk melakukan tes MBTI?" Karakter akan dengan ramah menjawab.

![Contoh Pertanyaan yang Dapat Diajukan kepada AI berbasis MBTI](/images/userGuide/userguide-4.jpg)
![Contoh Pertanyaan yang Dapat Diajukan kepada AI berbasis MBTI](/images/userGuide/userguide-5.jpg)
![Contoh Pertanyaan yang Dapat Diajukan kepada AI berbasis MBTI](/images/userGuide/userguide-6.jpg)

Anda dapat mengajukan berbagai pertanyaan kepada AI. Misalnya, jika karakter obrolan Anda memiliki tipe kepribadian INTP, berikut adalah beberapa contoh pertanyaan yang dapat Anda ajukan:

- **Contoh: "Apa karakteristik dari tipe kepribadian INTP?"**
- **Contoh: "Saya menonton film sedih bersama teman dekat saya, tetapi teman saya sama sekali tidak terlihat sedih. Apakah mungkin tipe MBTI teman saya adalah INTP?"**
- **Contoh: "Beritahu saya tentang kompatibilitas antara tipe MBTI teman saya, INTP, dan tipe saya, ENFP."**

Dengan mengajukan pertanyaan-pertanyaan ini, Anda dapat **memahami karakteristik dari tipe-tipe tertentu**, **menduga jenis teman Anda berdasarkan perilakunya**, dan **mengetahui tentang kompatibilitas dan kelebihan/kekurangan antara jenis Anda dan jenis teman Anda**. Selain itu, seperti yang ditunjukkan pada bagian yang disorot dalam gambar di atas, aplikasi mbtiChat didukung oleh iklan dan sponsor, sehingga akan ada pesan informatif yang ditampilkan satu kali selama obrolan dengan karakter.

![Berbagi, Mengekspresikan Emosi, dan Komentar setelah Menggunakan AI berbasis MBTI](/images/userGuide/userguide-7.jpg)

Apakah obrolan dengan AI telah memberikan bantuan bagi Anda? Jika ya, silakan bagikan aplikasi mbtiChat dengan teman-teman Anda dan tinggalkan banyak komentar! **Jangan khawatir, konten obrolan dalam aplikasi ini tidak akan disimpan.**

### 2. Blog
![Halaman Blog dalam aplikasi mbtiChat](/images/userGuide/userguide-8.jpg)

Selain fitur-fitur, aplikasi mbtiChat juga mencakup bagian blog. Tulisan-tulisan blog ini sebagian besar membahas keterampilan pengembangan yang digunakan dalam proses pengembangan aplikasi mbtiChat.

## Analisis Teknis Aplikasi dan Pengenalan
Aplikasi mbtiChat adalah aplikasi web statis. Aplikasi web statis merujuk pada situs web dengan konten yang tetap dan fungsi atau interaksi yang terbatas. Meskipun aplikasi web mbtiChat tidak besar dalam skala, namun aplikasi ini mencakup fungsionalitas blog dan pemilihan bahasa yang melebihi kemampuan aplikasi web statis. Oleh karena itu, saya menggunakan **framework pembuatan situs web statis Jekyll** untuk pengembangan.

Jekyll menghasilkan file HTML statis berdasarkan template dan tata letak yang ditentukan oleh pengguna. Hal ini memungkinkan penggunaan elemen yang berulang secara efektif dan konsistensi desain dan tata letak yang sesuai.

Fitur utama dari aplikasi mbtiChat adalah fungsionalitas obrolan dengan AI. AI ini didasarkan pada versi **gpt-3.5** API. Untuk komunikasi dengan API GPT, saya menggunakan **Node.js** sebagai server. Aplikasi seluler dikembangkan menggunakan **React-Native-Webview** untuk membuat aplikasi seluler berbasis web yang responsif.
