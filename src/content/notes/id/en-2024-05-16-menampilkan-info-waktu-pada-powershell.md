---
title: Menampilkan info waktu pada Powershell
slug: menampilkan-info-waktu-pada-powershell
published_date: 2024-05-16
language: id
type: til
---

Saat menjalankan command di terminal untuk mengeksekusi script atau setup infra di server production, saya selalu mencatat dua waktu penting: 1. waktu command pertama kali dijalankan, dan 2. waktu command selesai dijalankan. Supaya pencatatan waktu ini dapat dilakukan dengan mudah, lebih enak kalau informasi waktu bisa ditampilkan pada tiap baris command yang kita jalankan di terminal. Untungnya, hal tersebut dapat dilakukan dengan mengubah pengaturan di PowerShell. Caranya:

1. Jalankan PowerShell sebagai administrator.
2. Instal `posh-git` dengan menjalankan command `choco install poshgit`.
3. Setelah terinstal, jalankan command `Import-Module posh-git`.
4. Jalankan command `code $profile`. Command ini akan membuka file konfigurasi PowerShell pada VS Code.
5. Copy kode di bawah ini dan paste pada file. Letakan kode yang baru setelah kode-kode yang sudah ada pada file tsb.

```
function ShortenPath { (get-location).drive.name+":\...\"+ $( ( get-item $pwd ).Name ) }
$GitPromptSettings.DefaultPromptPrefix = '$(Get-Date -f "yyyy-MM-dd HH:mm:ss") '
$GitPromptSettings.DefaultPromptPath = '$(ShortenPath)'
```

Setelah selesai, tutup program PowerShell kamu dan buka program PowerShell baru (tidak perlu dijalankan sebagai administrator). Tampilannya akan berubah seperti di bawah ini:

```
Windows PowerShell
Copyright (C) Microsoft Corporation. All rights reserved.

Try the new cross-platform PowerShell https://aka.ms/pscore6

Loading personal and system profiles took 1143ms.
2024-05-16 16:30:33 C:\...\repos> cd git-repo
2024-05-16 16:30:36 C:\...\git-repo [master ≡]>
```

Sumber: [posh-git](https://github.com/dahlbyk/posh-git?tab=readme-ov-file#posh-git)
