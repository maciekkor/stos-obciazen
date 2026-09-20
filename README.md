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

| Producent | Płytka / krok | Stosy |
| --- | --- | --- |
| Nautilus Inspiration | 10 lb = **4,5 kg** (Leg Press 20 lb = **9 kg**) | 240 lb = 24 płytki = 108 kg; 200 lb = 20 płytek = 90 kg; Leg Press 400 lb = 20 płytek = 180 kg |
| Technogym Selection | **5 kg** (Leg Press **10 kg**) | m.in. Chest Press 100 kg, Vertical Traction 100 kg, Leg Extension/Curl 95 kg, Leg Press 190 kg |

Reklamowane przez Nautilusa „5 lb increments” to nie waga płytki, tylko **dokładka
Lock N Load** — przełącznik dobiera pół płytki. Sam stos chodzi co płytkę, czyli 4,5 kg.
Widać to też z wymiarów: przy wieży 163 cm stos 240 lb złożony z 48 płytek po 5 lb
by się tam nie zmieścił, a 24 płytki po 10 lb owszem.

W katalogu wybierasz więc krok jako **pół płytki (2,25 kg) / płytkę (4,5 kg,
domyślnie) / dwie płytki (9 kg)**; na Leg Pressie każda z tych opcji jest
automatycznie dwa razy większa, bo maszyna ma grubsze płytki.

Konkretny egzemplarz bywa inny (wersje „plus”, dokładki), więc warto porównać
z płytkami u siebie i poprawić w edytorze — jest tam generator „od / do / co”.

## Dane

`⋯` w nagłówku otwiera panel danych:

- **Dołóż z katalogu ćwiczeń** — dobiera brakujące pozycje bez ruszania reszty.
- **Przelicz stosy wg katalogu** — przestawia obciążenia na wybrany krok i ustawia
  poziom na najbliższy dotychczasowemu ciężarowi. Historia, zestawy i maszyny spoza
  katalogu zostają nietknięte.
- **Wyzeruj dane i zacznij od zera** — kasuje ćwiczenia, poziomy, historię i zestawy,
  po czym zaciąga cały katalog od nowa. Nieodwracalne, za dwoma potwierdzeniami.
