---
title: Javascript This
summary: Mencoba menjelaskan operator 'this' di Javascript berdasarkan pemahaman saya
slug: javascript-operator-this
published_date: 2017-01-07
language: id
type: blog
category: javascript
translations:
  id: javascript-operator-this
  en: javascript-this
---

Operator `this` sering kali digunakan apabila kamu mengimplementasikan suatu class atau object pada bahasa pemograman berorientasi objek. Javascript tidak memiliki paradigma itu, namun Javascript mendukung penggunaan operator `this`. Tetapi karena ini Javascript, (tentu saja) cara kerja `this` akan sedikit berbeda dengan bahasa pemograman pada umumnya....

Pada keadaan normal, pemanggilan operator `this` akan mengembalikan objek global. Perhatikan contoh berikut:

```js
console.log(this === window); // output 'true'
function callingGlobal() {
  console.log(this === window);
}
callingGlobal(); // output 'true' (?)
```

Seperti pada contoh di atas, kita bisa mengakses objek global via operator `this` meskipun di dalam scope function. Namun apabila kita mengeset `use strict` di awal deklarasi fungsi, operator `this` tidak lagi mereferensikan objek global karena konteksnya (dipaksa) berada di dalam scope yang berbeda.

```js
console.log(this == window); // output 'true'
function callingGlobal() {
  "use strict";
  console.log(this == window);
}
callingGlobal(); // output undefined
```

Beberapa fungsi bawaan Javascript mengeset `this` menjadi objek tertentu seperti pada fungsi `addEventListener`.

```js
function changeBodyBackground(e) {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  this.style.backgroundColor = color;
}
var $body = document.getElementsByTagName("body")[0];
$body.addEventListener("click", changeBodyBackground, false); // body berubah warna background apabila di klik
```

Pada contoh di atas, operator `this` secara default mereferensikan objek DOM dari elemen `body` yang telah dipasang event handler. Namun kita juga bisa mengubah operator `this` agar mereferensikan objek yang kita definisikan sendiri. Misalkan kita ingin agar saat elemen `body` diklik, hanya warna background dari elemen `h1` yang berubah (dengan asumsi hanya ada satu `h1` pada halaman).

```js
// fungsi changeBodyBackground sama dengan contoh sebelumnya
var $body = document.getElementsByTagName("body")[0];
var $h1 = document.getElementsByTagName("h1")[0];
$body.addEventListener("click", changeBodyBackground.bind($h1), false); // h1 berubah warna background apabila di klik
```

Dengan menggunakan fungsi `bind`, kita bisa mengeset nilai `this` sesuai dengan objek yang kita masukkan sebagai parameter. Selain `bind`, kita juga bisa menggunakan fungsi `call` dan `apply`. Perbedaannya adalah saat `call` dan `apply` digunakan pada suatu fungsi, fungsi tersebut akan langsung dijalankan.

```js
var someObject = {
  arr: [2, 3, 5, 8, 13],
};

function multiplyWith(x, y) {
  for (var i = 0; i < this.arr.length; i++) {
    this.arr[i] = this.arr[i] * x * y;
  }
  return this.arr;
}

multiplyWith.call(someObject, 10, 2); // [40, 60, 100, 160, 260]
multiplyWith.apply(someObject, [10, 2]); // [40, 60, 100, 160, 260]
```

> Terdapat perbedaan antara `call` dan `apply` saat memasukkan parameter. Fungsi `call` menerima parameter secara eksplisit, sedangkan `apply` menerima parameter dalam bentuk array.

Pada artikel [sebelumnya](/blog/id/memahami-closure-di-javascript/) saya sempat menjelaskan tentang module pattern. Dengan menggunakan `this` di dalam method, kita dapat memanggil method atau properti objek pada modul yang sama seperti yang diperlihatkan oleh contoh berikut.

```js
function Cat(type) {
    return {
        walking: function() {
            return type + ' is walking');
        },
        walkingWhileEating: function() {
            return this.walking() + 'while eating..';
        }
    };
}

var siamese = Cat('siamese');
siamese.walkingWhileEating(); // siamese is walking while eating
```

---

Berurusan dengan operator `this` memang agak tricky, terutama saat dipakai diluar module pattern. Pastikan kode javascript kamu selalu diberi `use strict` agar kode kamu konsisten dan terhindar dari memodifikasi objek global.
