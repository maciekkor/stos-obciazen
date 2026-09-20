# Stos Obciążeń

Prosty tracker obciążeń na maszynach siłowych. Pokazuje, jaki ciężar był ostatnio
ustawiony na danej maszynie, i pozwala jednym dotknięciem zejść lub wejść na kolejny
poziom stosu. Wartości obciążeń są predefiniowane per maszyna i edytowalne.

## Zestawy ćwiczeń

Obok widoku „Wszystko” i filtrów po partii są trzy zestawy treningowe (A, B, C) —
gotowe plany na konkretny dzień. W zestawie widać tylko jego maszyny, w ustalonej
kolejności, a licznik u góry pokazuje postęp tego zestawu, nie całej listy.

- **Nazwa i zawartość są edytowalne** — ✎ na pasku zestawu otwiera arkusz, w którym
  dobiera się ćwiczenia, zmienia ich kolejność (↑ ↓) i nadaje zestawowi własną nazwę.
- **Maszyna może być w kilku zestawach naraz** — przypisanie jest też w edytorze
  maszyny, pod polem partii.
- **Nowa maszyna dodana z widoku zestawu** od razu do niego trafia.
- **Aplikacja pamięta wybrany widok** — po zamknięciu otwiera się tam, gdzie się skończyło.

Przy pierwszym uruchomieniu zestawy są wstępnie wypełnione maszynami startowymi
(A — klatka, barki i ramiona; B — plecy i brzuch; C — nogi).

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
