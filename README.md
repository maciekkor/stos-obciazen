# Stos Obciążeń

Prosty tracker obciążeń na maszynach siłowych. Pokazuje, jaki ciężar był ostatnio
ustawiony na danej maszynie, i pozwala jednym dotknięciem zejść lub wejść na kolejny
poziom stosu. Wartości obciążeń są predefiniowane per maszyna i edytowalne.

## Katalog ćwiczeń — Nautilus Inspiration i Technogym Selection

Aplikacja ma wbudowany katalog 22 ćwiczeń. **Jedna karta to jedno ćwiczenie**, a pod
nim siedzą warianty maszyn obu producentów — jeśli to samo ćwiczenie robi się na
maszynie Nautilus Inspiration® i Technogym Selection, obie są na tej samej karcie
i przełącza się je jednym dotknięciem (każda ma własny stos i własny zapamiętany poziom).

- **Świeża instalacja** startuje z pełnym katalogiem.
- **Mając już swoje dane** otwierasz katalog przez `⋯` w nagłówku → „Dołóż z katalogu
  ćwiczeń” (albo przyciskiem w oknie nowej maszyny). Można wybrać producenta
  i krok stosu; ćwiczenia, które już masz, są wyszarzone.
- **Ćwiczenia na wspólnych maszynach są rozdzielone** na osobne karty, bo idą na inne
  mięśnie i przy innym obciążeniu: rozpiętki / odwrotne rozpiętki oraz
  odwodzenie / przywodzenie nóg.

### Rysunki i opis na karcie

Ikona `ⓘ` na karcie rozwija panel z:

- **schematem maszyny** (widok z boku: stos, rama, siedzisko i to, co się rusza),
- **mapą mięśni** — sylwetka od przodu i od tyłu, główne mięśnie na czerwono,
  wspomagające półprzezroczyście,
- **danymi producenta**: model maszyny i zakres stosu dla każdego wariantu.

### Obciążenia

| Producent | Krok stosu | Skąd |
| --- | --- | --- |
| Nautilus Inspiration | 2,25 / 4,5 / 9 kg (5 / 10 / 20 lb) | stosy 240 lb ≈ 110 kg, 200 lb ≈ 90 kg, Leg Press 400 lb ≈ 180 kg |
| Technogym Selection | 5 kg | stosy metryczne, np. Chest Press 100 kg, Leg Press 190 kg |

Maszyny Inspiration przeskakują co 5 lb, stąd niecałkowite wartości w kilogramach.
Konkretny egzemplarz bywa inny (wersje „plus”, dokładki), więc **warto porównać
z płytkami u siebie** i poprawić w edytorze — jest tam generator „od / do / co”.

## Dane

`⋯` w nagłówku otwiera panel danych: dokładanie ćwiczeń z katalogu oraz
**wyzerowanie wszystkiego** — kasuje ćwiczenia, poziomy, historię i zestawy,
po czym zaciąga cały katalog od nowa. Operacja jest nieodwracalna i wymaga
dwóch potwierdzeń.

## Zestawy ćwiczeń

Obok widoku „Wszystko” i filtrów po partii są trzy zestawy treningowe (A, B, C) —
gotowe plany na konkretny dzień. W zestawie widać tylko jego maszyny, w ustalonej
kolejności, a licznik u góry pokazuje postęp tego zestawu, nie całej listy.

- **Nazwa i zawartość są edytowalne** — ✎ na pasku zestawu otwiera arkusz, w którym
  dobiera się ćwiczenia, zmienia ich kolejność (↑ ↓) i nadaje zestawowi własną nazwę.
- **Maszyna może być w kilku zestawach naraz** — przypisanie jest też w edytorze
  maszyny, pod polem partii.
- **Nowa maszyna dodana z widoku zestawu** od razu do niego trafia.
- **Powrót do wszystkich ćwiczeń** — przycisk „← Wszystko” na pasku zestawu,
  a w dolnym pasku „Wszystko” stoi jako pierwsze, przed zestawami.
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
