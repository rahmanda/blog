---
title: Berkenalan dengan Python
slug: berkenalan-dengan-python
published_date: 2015-02-21
language: id
type: blog
---

[Python](https://www.python.org/) adalah bahasa pemograman tingkat tinggi yang dapat digunakan secara luas di berbagai bidang. Python diciptakan pertama kali oleh Guido van Rossum pada tahun 1991. Sintaksnya dan fungsi pada Python dipengaruhi oleh beberapa bahasa seperti C, C++, Lisp, Perl dan Java. Oleh karena itu, kita dapat menemui konsep pemograman *procedural*, *functional* dan *object-oriented* di Python. Python relatif mudah dipelajari bila dibandingkan dengan C++, Java dan PHP karena sintaks Python lebih singkat, lebih jelas dan mudah dipahami oleh *programmer* pemula.

Meskipun di Indonesia Python tidak sepopuler PHP dan Java, Python sangat patut untuk dipelajari karena banyak pilihan librari Python yang bisa kita gunakan yang biasanya tidak dapat kita temui di bahasa lain. Misalnya `numpy` dan `scipy`, alternatif untuk komputasi *scientific*, `scikit-learn` untuk implementasi *machine learning* (klasifikasi, regresi, klustering, ekstraksi fitur dll) dan masih banyak lagi. Pada artikel ini saya akan menjelaskan dasar-dasar dari pemograman Python.

> Untuk mengikuti pelajaran ini, kamu harus mengunduh Python di [sini](https://www.python.org/downloads/release/python-279/) terlebih dahulu. Untuk pengguna Linux atau MacOSX, kamu tidak perlu menginstal Python karena sudah tersedia secara *default*. Versi Python yang digunakan adalah versi 2.7.x.

Buka terminal kamu, lalu ketik perintah `python` untuk membuka *console* Python.

## Variabel

Variabel di Python tidak menyertakan tipe data secara eksplisit, berbeda dengan C++ atau Java. Semua tipe data sama cara memasukkan nilainya ke dalam variabel.

```
>>> integer = 1
>>> float = 2.5
>>> string = "aku adalah string"
>>> boolean = False
>>> integer
1
>>> float
2.5
>>> string
"aku adalah string"
>>> boolean
False
```

String dapat diapit dengan tkamu kutip tunggal `' '` atau tkamu kutip gkamu `" "`. Kita juga bisa mendeklarasikan string *multiline* dengan mengapit string dalam tkamu kutip tunggal atau gkamu sebanyak tiga kali (`''' '''` atau `""" """`).

```
>>> multiline = '''
... Aku seorang kapiten
... Mempunyai pedang panjang
... Kalau berjalan prok-prok-prok
... Aku seorang kapiten
... '''
...
>>> multiline
'\nAku seorang kapiten\nmempunyai pedang panjang\nkalau berjalan prok-prok-prok\nAku seorang kapiten\n'
```

## Struktur Data

### List

Pada Python, kita tidak dapat menemui konsep `array`. Sebagai gantinya, python menyediakan struktur data `list`. Inisialisasi untuk `list` sama seperti variabel biasa.

```
>>> list = [1, 2, 3, 4]
>>> list
[1, 2, 3, 4]
>>> list = [1.5, 2.4, 0.5]
>>> list
[1.5, 2.4, 0.5]
```

Kita juga dapat membuat deret integer pada `list` secara otomatis dengan fungsi `range`.

```
>>> list = range(5)
>>> list
[0, 1, 2, 3, 4]
>>> list = range(0,5)
>>> list
[0, 1, 2, 3, 4]
>>> list = range(0,10,2)
[0, 2, 4, 6, 8]
```

Berbeda dengan C++ dan Java, pada `list` kita dapat menampung elemen yang berbeda tipe data dalam satu variabel.

```
>>> list = [1, 'dua', 3.0]
>>> list
[1, 'dua', 3.0]
```

Cara akses elemen pada `list` sama seperti pada `array`, yaitu dengan menyertakan indeks elemen. Indeks dimulai dari nilai 0.

```
>>> list[0]
1
>>> list[1]
'dua'
```

List juga bisa mengandung `list`-`list` yang lain. Hal ini dikenal sebagai *multidimensional list*.

```
>>> list = [1, [1, 2, 3.0], [1.5, 'dua']]
```

Kita dapat menambahkan atau mengurangi elemen pada `list` yang sudah dibuat sebelumnya dengan menggunakan fungsi `append()`, `insert()` dan `remove()`.

```
>>> list = [0, 1]
>>> list
[0, 1]
>>> list.append(2) # menambahkan elemen pada akhir list
>>> list
[0, 1, 2]
>>> list.insert(1, 'aku ditengah') # menambahkan elemen pada indeks 1
>>> list
[0, 'aku ditengah', 1, 2]
>>> list.remove('aku ditengah') # menghapus elemen yang nilainya 'aku ditengah'
>>> list
[0, 1, 2]
```

Untuk mengambil elemen pertama dari suatu list, kita dapat menggunakan `pop`.

```
>>> list = [0, 1]
>>> list.pop()
0
```

### Dictionary

Selain `list`, Python memiliki struktur data `dictionary`.  Mirip seperti konsep `hash`, tiap elemen pada `dictionary` memiliki alias atau key.

```
>>> dict = {'satu': 1, 'dua': 2, 'tiga': 3}
```

Berbeda dengan `list`, cara akses nilai pada `dictionary` adalah dengan menyertakan nama key-nya.

```
>>> dict['satu']
1
>>> dict['dua']
2
```

Elemen pada `dictionary` dapat terdiri dari tipe data yang berbeda-beda, bahkan nama key juga tidak harus selalu string. Kita juga bisa memasukkan `list` sebagai elemen pada `dictionary`.

```
>>> dict = {'satu': 1.0, 'dua': [1, 'dua', [1, 2, 3]], 3: 'tiga'}
>>> dict[3]
'tiga'
>>> dict['dua']
[1, 'dua', [1, 2, 3]]
>>> dict['dua'][1]
['dua']
>>> dict['dua'][2]
[1, 2, 3]
>>> dict['dua'][2][1]
[2]
```

`List` dan `dictionary` adalah struktur data yang paling sering digunakan pada Python, namun struktur data pada Python tidak hanya terbatas pada itu saja. Untuk mempelajari struktur data lebih lanjut, kamu dapat membaca artikel [ini](http://code.tutsplus.com/articles/advanced-python-data-structures--net-32748).

## If...elif...else...

Fungsi `if` pada Python lebih sederhana penulisannya dibandingkan C++ atau Java. Untuk mengapit pernyataan di dalam if tidak menggunakan kurung kurawal. Penulisan pernyataan yang masuk pada fungsi if lebih menjorok ke dalam (menggunakan *whitespace*).

```
>>> var = 1
>>> if var < 2:
... 	var = var + 1
... elif var < 3:
... 	var = var + 2
... else:
... 	var = 0
...
>>> var
2
```

> Selain *case-sensitive*, Python sangat memperhatikan *whitespace* untuk memisahkan pernyataan dengan deklarasi fungsi. Oleh karena itu kamu harus selalu konsisten dalam memilih *whitespace* (pilih salah satu antara spasi atau tab). Pastikan juga semua indentasi pada fungsi memiliki jumlah *whitespace* yang sama.

## For

Fungsi `for` sedikit berbeda dengan C++ atau Java, karena kita tidak menginisialisasi kondisi berhenti iterasi. Di Python, `for` akan menjalankan pernyataan di dalamnya sebanyak elemen pada `list` dan akan berhenti setelah nilai indeks elemen melebihi nilai indeks maksimal pada `list`.

```
>>> list = ['maine coon', 'munchkin', 'siamese']
>>> var = 0
>>> for el in list:
... 	var = var + 1
...
>>> var
2
```

Agar kita bisa menginisialisasi jumlah perulangan, kita bisa menggunakan `range`.

```
>>> var = 0
>>> for el in range(1, 10):
... 	var = var + 1
...
>>> var
9
```

Untuk menghentikan atau melanjutkan iterasi pada suatu kondisi tertentu, kita dapat menggunakan `break` dan `continue`.

```
>>> var = 0
>>> for el in range(1, 10):
... 	if var > 5:
... 		break
... 	elif var == 3:
... 		continue
... 	var = var + 1
...
>>> var
3
```

## While

Fungsi `while` akan terus secara iteratif menjalankan pernyataan di dalamnya selama kondisi pada `while` belum terpenuhi.

```
>>> var = 10
>>> while var > 0:
... 	var = var - 1
...
>>> var
0
```

## Print

Fungsi `print` digunakan untuk mencetak string pada terminal.

```
>>> print 'Halo dunia!'
Halo dunia!
```

Kita juga bisa mencetak string *multiline* dengan menggunakan fungsi yang sama.

```
>>> print '''
... Aku seorang kapiten
... Mempunyai pedang panjang
... Kalau berjalan prok-prok-prok
... Aku seorang kapiten
... '''

Aku seorang kapiten
Mempunyai pedang panjang
Kalau berjalan prok-prok-prok
Aku seorang kapiten

```

Menyambungkan 2 atau lebih string dapat dilakukan dengan menggunakan operator `+`.

```
>>> print 'Halo ' + 'dunia!'
Halo dunia!
```

Untuk menambahkan keluaran yang bukan string, kita dapat menambahkan koma.

```
>>> print 'Kucing yang kami pelihara di rumah berjenis: ', ['main coon', 'siamese', 'munchkin']
Kucing yang kami pelihara di rumah berjenis: ['main coon', 'siamese', 'munchkin']
```

Selain itu, kita juga bisa memasukkan variabel di tengah-tengah string (*formatting*) dengan menggunakan tkamu kurung kurawal `{}`.

```
>>> x = 1
>>> y = 2
>>> print '{} + {} = {}'.format(x, y, x + y)
1 + 2 = 3
```

Mengubah urutan output dapat dilakukan dengan memberikan indeks di dalam kurung kurawal.

```
>>> print '{1} + {0} = {2}'.format(x, y, x + y)
2 + 1 = 3
```

Indeks dapat diganti dengan key seperti pada `dictionary`.

```
>>> print '{0} + {1} = {hasil}'.format(x, y, hasil = x + y)
1 + 2 = 3
```

Bagi kamu yang familiar dengan format output yang mendeklarasikan tipe data secara eksplisit seperti pada C, kamu juga bisa melakukan hal yang mirip di Python seperti dibawah ini:

```
>>> print '%d + %d = %d' % (x, y, x + y)
1 + 2 = 3
```

## Membaca dan Menulis *File*

Untuk menulis teks pada *file*, kita dapat menggunakan `write()` dengan terlebih dahulu membuat *file* pada direktori.

```
>>> f = open('contoh_file.txt', 'w')
>>> for el in range(1,11):
... 	f.write('Ini adalah baris teks {} pada file.\n'.format(el))
...
>>> f.close()
```

Untuk membaca keseluruhan teks pada *file*, kita dapat menggunakan `read()`.

```
>>> f = open('contoh_file.txt', 'r')
>>> f.read()
'Ini adalah baris teks 1 pada file.\nIni adalah baris teks 2 pada file.\nIni adalah baris teks 3 pada file.\nIni adalah baris teks 4 pada file.\nIni adalah baris teks 5 pada file.\nIni adalah baris teks 6 pada file.\nIni adalah baris teks 7 pada file.\nIni adalah baris teks 8 pada file.\nIni adalah baris teks 9 pada file.\nIni adalah baris teks 10 pada file.\n'
>>> f.close()
```

Untuk membaca satu baris teks pada *file*, kita dapat menggunakan `readline()`.

```
>>> f = open('contoh_file.txt', 'r')
>>> f.readline()
'Ini adalah baris teks 1 pada file.\n'
>>> f.close()
```

Untuk membaca satu per satu baris teks pada *file*, kita dapat menggunakan `for`.

```
>>> f = open('contoh_file.txt', 'r')
>>> for teks in f:
... 	print teks
...
Ini adalah baris teks 1 pada file.

Ini adalah baris teks 2 pada file.

Ini adalah baris teks 3 pada file.

Ini adalah baris teks 4 pada file.

Ini adalah baris teks 5 pada file.

Ini adalah baris teks 6 pada file.

Ini adalah baris teks 7 pada file.

Ini adalah baris teks 8 pada file.

Ini adalah baris teks 9 pada file.

Ini adalah baris teks 10 pada file.

```

Apabila kita lihat secara teliti, ada perbedaan cara antara membuka *file* untuk menulis dan membaca. Parameter kedua yang dimasukkan pada fungsi `open()` adalah mode pembacaan *file*. Di bawah ini adalah daftar mode yang dapat digunakan pada fungsi `open()`.
1. 'r' - hanya untuk membaca *file* (*read*)
2. 'w' - hanya untuk menulis *file* (*write*)
3. 'a' - untuk menambahkan teks pada akhir teks di dalam *file* (*append*)
4. 'r+' - untuk membaca dan menulis *file*

> Selalu gunakan fungsi `close()` setelah kamu membuka *file* untuk menghindari terjadinya [*memory leak*](http://en.wikipedia.org/wiki/Memory_leak)

## Fungsi
Deklarasi fungsi pada Python dimulai dengan `def` dan diikuti dengan nama fungsi. Sama seperti deklarasi variabel, kita tidak perlu menambahkan tipe data secara eksplisit pada fungsi. Untuk fungsi yang mengembalikan nilai dapat menggunakan `return`.

```
>>> def sambung_string(str1, str2):
... 	sambungan = str1 + ' dan ' + str2
... 	return sambungan
```

Untuk memanggil fungsi, tulis nama fungsi setelah itu masukkan nilai parameter fungsinya jika ada.

```
>>> hasil = sambung_string('aku', 'kamu')
>>> print hasil
aku dan kamu
```

Kita juga bisa membuat nilai *default* pada parameter sehingga kita punya opsi untuk menimpa nilai *default* tersebut atau tidak.

```
>>> def sambung_string(str1, str2='kamu'):
... 	sambungan = str1 + ' dan ' + str2
... 	return sambungan
...
>>> hasil = sambung_string('aku')
>>> print hasil
aku dan kamu
>>> hasil_lain = sambung_string('aku', 'dia')
>>> print hasil_lain
aku dan dia
```

> Semua parameter pada Python adalah *passed by reference*

Parameter pada Python selalu *passed by reference*. Sehingga apabila di dalam fungsi ada operasi yang melibatkan variabel dengan nama yang sama dengan variabel di luar fungsi, maka nilai pada variabel di luar fungsi akan ikut berubah. Contoh:

```
>>> def tambah_elemen(elemen):
... 	list.append(elemen)
... 	print 'Output di dalam fungsi', list
...
>>> list = [1, 2]
>>> tambah_elemen(3)
Output di dalam fungsi [1, 2, 3]
>>> print 'Output di luar fungsi', list
Output di luar fungsi [1, 2, 3]
```

## *Object Oriented*
Kita dapat mengimplementasikan konsep *object oriented* pada Python. Insialisasi kelas pada Python dapat dilihat pada contoh di bawah ini.
```
>>> class Kucing:
... 	def __init__(self): # dobel underscore
... 		self.jenis = 'domestik'
... 		self.bulu = 'kuning'
... 		self.buntut = 'pendek'
... 		self.nama = 'Ambercat'
... 	def deskripsi(self):
... 		print 'Hai namaku {}. Aku adalah kucing berjenis {}. Warna buluku {} dan buntutku {}.\n'.format(self.nama, self.jenis, self.bulu, self.buntut)
...
```

Pada contoh, kelas Kucing juga memiliki dua *method*, yaitu `__init__()` dan `deskripsi()`. *Method* `__init__()` adalah *constructor* yang akan selalu dipanggil setiap objek Kucing dibuat. Dalam contoh ini, `__init__()` akan membuat empat atribut, yaitu jenis, bulu, buntut dan nama.

> Setiap kamu ingin membuat *method*, kamu harus selalu memasukkan parameter `self` pada deklarasi *method*.

Cara membuat objek dari kelas Kucing dapat dilihat pada contoh di bawah ini.

```
>>> meong = Kucing()
```

Cara untuk memanggil *method* pada objek adalah sebagai berikut.

```
>>> meong.deskripsi()
Hai namaku Ambercat. Aku adalah kucing berjenis domestik. Warna buluku kuning dan buntutku pendek.

```

Supaya kita dapat mengeset nilai atribut jenis, bulu, buntut dan nama, kita dapat memodifikasi kelas Kucing menjadi seperti di bawah ini.

```
>>> class Kucing:
... 	def __init__(self, jenis='domestik', bulu='kuning', buntut='pendek', nama='Ambercat'): # dobel underscore
... 		self.jenis = jenis
... 		self.bulu = bulu
... 		self.buntut = buntut
... 		self.nama = nama
... 	def deskripsi(self):
... 		print 'Hai namaku {}. Aku adalah kucing berjenis {}. Warna buluku {} dan buntutku {}.\n'.format(self.nama, self.jenis, self.bulu, self.buntut)
...
```

Untuk mengganti beberapa nilai atribut pada inisialisasi objek, kita dapat menggunakan cara berikut.

```
>>> meong = Kucing(bulu='putih', buntut='panjang')
>>> meong.deskripsi()
Hai namaku Ambercat. Aku adalah kucing berjenis domestik. Warna buluku putih dan buntutku panjang.

```

## Penutup
Artikel ini belum mencakup seluruh fungsi dan konsep pada Python. Untuk mempelajari lebih lanjut mengenai Python, kamu dapat mengunjungi dokumentasi Python di [sini](https://docs.python.org/2/tutorial/index.html).

```
print 'Selamat belajar!'
```
