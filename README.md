# Stos Obciążeń

Prosty tracker obciążeń na maszynach siłowych. Pokazuje, jaki ciężar był ostatnio
ustawiony na danej maszynie, i pozwala jednym dotknięciem zejść lub wejść na kolejny
poziom stosu. Wartości obciążeń są predefiniowane per maszyna i edytowalne.

## Jak to działa

- **Jedna strona, bez backendu.** Wszystko dzieje się w przeglądarce.
- **Dane zostają na urządzeniu** użytkownika (`localStorage`). Nic nie jest wysyłane
  na żaden serwer — każdy, kto otworzy stronę, pracuje na własnych danych.
- **Działa bez zasięgu** — service worker trzyma kopię aplikacji, więc na siłowni
  w piwnicy też się otworzy.
- **Instaluje się jak aplikacja** — „Dodaj do ekranu głównego” na Androidzie
  i iPhonie.

## Uruchomienie

GitHub Pages: Settings → Pages → Source: `Deploy from a branch`, branch `main`, katalog `/ (root)`.

Lokalnie wystarczy dowolny serwer statyczny, np.:

```
python3 -m http.server 8000
```

Otwarcie `index.html` jako pliku z dysku (`file://`) nie zadziała poprawnie —
przeglądarki blokują wtedy zapis danych i service workera.

## Pliki

| Plik | Do czego |
| --- | --- |
| `index.html` | cała aplikacja: układ, style i logika |
| `manifest.webmanifest` | nazwa, ikony i tryb pełnoekranowy przy instalacji |
| `sw.js` | service worker — działanie bez sieci |
| `icon-*.png`, `apple-touch-icon.png` | ikony aplikacji |
