# CLAUDE.md — Giospy | Event Planner Latina

Questo file contiene le linee guida per la manutenzione, lo stile e l'evoluzione del sito web di Giospy (Giorgia, Event Planner a Latina).

---

## Scopo del Progetto
Questo sito è una **bozza / primo sito web** per Giorgia (Giospy). È progettato come una Single Page Application (SPA) ad alto impatto estetico, focalizzata sulla sua attività reale: allestimenti su misura, nascite, battesimi, compleanni, bomboniere e personalizzazioni. 
L'obiettivo principale è trasmettere immediatamente il suo gusto minimale ed elegante e far sì che i visitatori la contattino tramite WhatsApp.

---

## Sistema di Design (Regola dell'Eleganza e del Contenimento)

> [!IMPORTANT]
> **Minimal significa sottrazione:** Ampi spazi bianchi (whitespace), pochi elementi per schermata, linee sottili invece di riquadri complessi, ombre quasi invisibili, nessun gradiente. L'eleganza deriva dalla tipografia e dalle proporzioni spaziali, non dagli ornamenti.

### Palette Colori (Rigida)
- Background principale: `--white` (`#FFFFFF`)
- Sezioni alternate: `--offwhite` (`#FCFAF9`)
- Dettagli e Accento: `--pink` (`#E8C9C6`)
- Hover ed Elementi Attivi: `--pink-deep` (`#C99B96`)
- Sfondi Soft Temporanei: `--pink-veil` (`#F8EEEC`)
- Linee e Divisori (1px): `--grey-line` (`#E3E1E0`)
- Testo Secondario: `--grey-mid` (`#8A8785`)
- Testo Primario: `--graphite` (`#333130`)

### Tipografia
- **Display Serif (Titoli grandi):** `Cormorant Garamond` (pesi 300 e 400).
- **Body / Interfaccia (Sans):** `Jost` (pesi 300 e 400).
- **Script Accent (Firma):** `Petit Formal Script` (Usato **esclusivamente** per la parola "Giospy").

### Spaziatura (Scala a 8px)
Usa **solo** questi valori di spaziatura per margini, padding e gap: `8 / 16 / 24 / 32 / 48 / 64 / 96 / 128 / 160 / 200`px.
- Padding verticale sezioni: `160px` su Desktop, `96px` su Tablet, `64px` su Mobile.

### Elemento Distintivo: Il Cerchio
L'elemento neon a cerchio del negozio fisico è il motivo ricorrente. Viene implementato con linee sottili (`1px` di spessore):
- Intorno alle immagini caricandosi con animazione SVG (Hero)
- Come indicatore di scorrimento e caricamento scroll in basso a destra
- Nel logo e nel footer, a racchiudere la scritta "Giospy"

---

## Come Gestire le Foto della Galleria

I file delle immagini sono configurati per essere caricati dalla cartella `/public/images/`. Se i file non esistono, il componente `ImageWithPlaceholder` mostra automaticamente un elegante segnaposto con sfondo `--pink-veil` e il cerchio decorativo.

Per inserire le foto reali, carica i file nella cartella `public/images/` con i seguenti nomi corrispondenti:
- **Hero Portrait:** `public/images/hero-portrait.jpg` (ritratto di Giorgia o del negozio)
- **About Detail:** `public/images/about-shop.jpg` (foto di dettaglio del negozio/oggettistica)
- **Shop Photo:** `public/images/shop-interior.jpg` (parete interna con il neon circolare)
- **Foto Galleria (12 slot):** Salva le immagini in `public/images/gallery/` con questi nomi esatti:
  1. `allestimento-tavolo.jpg`
  2. `bomboniere-dettaglio.jpg`
  3. `palloncini-compleanno.jpg`
  4. `partecipazioni-nozze.jpg`
  5. `nascita-dettagli.jpg`
  6. `segna-posto.jpg`
  7. `torta-compleanno.jpg`
  8. `scatoline-confetti.jpg`
  9. `neon-circle-wall.jpg`
  10. `battesimo-bambino.jpg`
  11. `partecipazione-invito.jpg`
  12. `personalizzazione-calice.jpg`

---

## Modulo di Contatto e API

Al momento dell'invio del form, viene eseguito un `preventDefault()` ed è mostrata una schermata di successo animata. Per connettere il modulo ad una funzione serverless di Vercel in futuro:

1. Modifica la funzione `handleFormSubmit` in [App.jsx](file:///c:/Users/msie/OneDrive/Desktop/Vibe%20Coding/Giospy-event-planner/src/App.jsx):
   ```javascript
   const handleFormSubmit = async (e) => {
     e.preventDefault();
     try {
       const response = await fetch('/api/contact', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(formData)
       });
       if (response.ok) {
         setFormSubmitted(true);
       }
     } catch (error) {
       console.error("Errore nell'invio:", error);
     }
   };
   ```
2. Crea un endpoint API serverless (es: `/api/contact.js`) che elabora la richiesta e inoltra una notifica email o Slack.

---

## Promemoria di Produzione
- **Logo:** Se Giorgia fornisce un file vettoriale (.svg o .png trasparente) per il logo, sostituisci la dicitura testuale nell'header e nel footer con il tag `<img />`.
- **Recensioni Google:** Le recensioni attuali sono reali ma abbreviate. In fase finale è consigliabile caricare le 22 recensioni complete o collegare un widget dinamico delle recensioni Google.
