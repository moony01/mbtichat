---
layout: post
title: Panduan Pengguna untuk mbtiChat
image: '/images/userGuide/thumbnail-en.jpg'
---

**Aplikasi mbtiChat adalah aplikasi yang memungkinkan pengguna untuk berkomunikasi dengan karakter AI yang dilatih dalam 16 tipe kepribadian MBTI yang berbeda.** Dibuat dengan ide bahwa pengguna mungkin tertarik dengan karakteristik dari berbagai tipe MBTI, aplikasi ini bertujuan untuk meningkatkan pemahaman tentang karakteristik, hubungan, pemikiran, dan perilaku melalui berbagai tipe. Mari kita lihat cara menggunakan aplikasi mbtiChat.

## Fitur-fitur Aplikasi dan Gambaran Halaman
Selain fitur chat AI, aplikasi mbtiChat kami juga menawarkan fitur lain seperti panduan terperinci dan artikel blog. Fitur utama dan halaman-halaman utama dari aplikasi mbtiChat adalah **Chat AI** dan **Blog**. Meskipun ada fitur lain yang lebih rinci seperti halaman panduan pengguna dan pemilihan bahasa, kita akan fokus pada dua fitur dan halaman utama ini dan membahas fitur lainnya.

### 1. Chat AI
![Pemilihan Bahasa untuk Chat AI MBTI](/images/userGuide/userguide-1.jpg)

Fitur chat AI memungkinkan Anda berinteraksi dengan karakter AI dengan mengklik tombol [Mulai Chat] di halaman beranda. AI ini dikembangkan menggunakan versi **gpt-3.5** dari API. Untuk memulai percakapan dengan AI, **pilih bahasa terlebih dahulu untuk mengubah bahasa aplikasi.**

![Pemilihan Karakter dan Klik Tombol "Mulai Chat" untuk Chat AI](/images/userGuide/userguide-2.jpg)

Di halaman beranda, Anda dapat mengklik tombol [Mulai Chat] di bawah setiap karakter untuk memulai percakapan dengan karakter yang dipilih. Setiap karakter dilatih pada tipe MBTI yang spesifik. **Klik tombol [Mulai Chat] sekarang dan mulailah percakapan dengan karakter yang Anda pilih.** Pada gambar berikut, Anda dapat melihat profil karakter dan permintaannya untuk tipe MBTI Anda.

![Halaman Chat dengan AI MBTI](/images/userGuide/userguide-3.jpg)

Anda dapat mengajukan berbagai pertanyaan kepada AI. Meskipun Anda tidak mengungkapkan tipe MBTI Anda, **Anda dapat meminta informasi tentang karakteristik tipe tertentu atau interaksi antara berbagai tipe.** Namun, jika Anda tertarik dengan kompatibilitas atau interaksi antara tipe Anda dan tipe AI, Anda perlu berbagi tipe MBTI Anda dengan AI. **Misalnya, Anda dapat bertanya kepada karakter: "Dapatkah Anda memberikan tautan ke tes MBTI online?" Karakter akan dengan sopan menjawab.**

![Contoh Pertanyaan untuk AI MBTI](/images/userGuide/userguide-4.jpg)
![Contoh Pertanyaan untuk AI MBTI](/images/userGuide/userguide-5.jpg)
![Contoh Pertanyaan untuk AI MBTI](/images/userGuide/userguide-6.jpg)

Pengguna dapat mengajukan berbagai pertanyaan. Misalnya, jika karakter Anda adalah Olivia dengan kepribadian INTP, Anda dapat mengajukan pertanyaan seperti:

- **Misalnya: "Apa karakteristik dari INTP?"**
- **Misalnya: "Saya menonton film sedih dengan teman dekat, tetapi teman saya sama sekali tidak terlihat sedih. Apakah dia mungkin INTP?"**
- **Misalnya: "Beritahu saya tentang kompatibilitas antara tipe INTP teman saya dan tipe ENFP saya."**

Dengan mengajukan jenis pertanyaan ini, **Anda dapat memperoleh pemahaman tentang karakteristik kepribadian tertentu atau bahkan berspekulasi tentang tipe teman Anda berdasarkan reaksinya.** Seperti yang ditunjukkan dalam gambar di atas, harap dicatat bahwa aplikasi mbtiChat mendukung iklan dan sponsor, dan akan menampilkan pesan informatif satu kali selama percakapan dengan karakter.

![Berbagi, Ekspresi Emosi, dan Komentar Setelah Menggunakan AI MBTI](/images/userGuide/userguide-7.jpg)

Apakah percakapan dengan AI ini bermanfaat bagi Anda? Jika ya, bagikan aplikasi mbtiChat kepada teman-teman Anda dan berikan komentar! **Perhatikan bahwa aplikasi ini tidak menyimpan konten percakapan.**

### 2. Blog
![Halaman Blog dalam Aplikasi mbtiChat](/images/userGuide/userguide-8.jpg)

**Aplikasi mbtiChat tidak hanya menawarkan fitur, tetapi juga mencakup sebuah blog.** Sebagian besar artikel blog berfokus pada aspek teknis dan keterampilan yang digunakan dalam proses pengembangan aplikasi mbtiChat.

## Analisis Teknis dan Pengantar
Aplikasi mbtiChat adalah aplikasi web statis, yang berarti itu adalah situs web dengan konten tetap dan fitur atau interaksi dinamis terbatas. Meskipun aplikasi web mbtiChat tidak terlalu besar, ia mencakup fitur seperti blog dan pemilihan bahasa yang membatasi pengembangannya sebagai aplikasi web statis murni. Oleh karena itu, saya menggunakan **Jekyll, sebuah generator situs web statis**, untuk pengembangan aplikasi ini.

Jekyll menghasilkan file HTML statis berdasarkan templat dan tata letak yang ditentukan oleh pengguna. Ini memungkinkan penggunaan kembali elemen yang sering muncul dan aplikasi desain dan tata letak yang konsisten.

Elemen kunci dari aplikasi mbtiChat adalah fitur chat AI. AI ini didasarkan pada versi **gpt-3.5** dari API. Untuk berkomunikasi dengan API GPT, saya menggunakan **Node.js** sebagai teknologi server-side. Untuk aplikasi seluler, saya mengembangkannya menggunakan **React Native WebView**, yang memungkinkan pembuatan aplikasi seluler dari situs web responsif.
