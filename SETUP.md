# SETUP.md — Guida all'avvio del Progetto

Questa guida ti spiega come avviare, compilare e pubblicare localmente e in produzione il sito web di Giospy.

---

## Prerequisiti
Assicurati di avere installato sul tuo computer:
- [Node.js](https://nodejs.org/) (versione 18 o superiore)
- Un gestore pacchetti come `npm` (incluso con Node.js)

---

## 1. Installazione
Per scaricare e installare tutte le librerie necessarie (React, Tailwind CSS, Framer Motion, Lenis, Lucide Icons, GSAP), esegui nella directory del progetto:
```bash
npm install
```

---

## 2. Sviluppo Locale
Per lanciare il server di sviluppo locale con Hot Module Replacement (HMR):
```bash
npm run dev
```
Dopo l'avvio, apri il browser all'indirizzo locale indicato nel terminale (solitamente `http://localhost:5173`).

---

## 3. Compilazione (Build)
Per compilare l'applicazione per la produzione, ottimizzando codice e asset:
```bash
npm run build
```
I file compilati pronti per il web verranno generati nella cartella `/dist`.

---

## 4. Anteprima Locale del Build
Puoi testare localmente la versione di produzione compilata eseguendo:
```bash
npm run preview
```

---

## 5. Distribuzione su Vercel (Vercel Deploy)

Il progetto è predisposto per essere distribuito su Vercel in pochi passi:

### Metodo 1: CLI di Vercel (Consigliato)
1. Installa globalmente vercel se non l'hai ancora fatto:
   ```bash
   npm install -g vercel
   ```
2. Esegui il comando di deployment nella radice del progetto:
   ```bash
   vercel
   ```
3. Segui le istruzioni interattive. Vercel rileverà automaticamente la configurazione di **Vite**.
4. Per deployare in produzione:
   ```bash
   vercel --prod
   ```

### Metodo 2: Collegamento GitHub (Automatico)
1. Carica la cartella del progetto su un repository GitHub (pubblico o privato).
2. Accedi alla dashboard di [Vercel](https://vercel.com).
3. Clicca su **Add New** -> **Project**.
4. Importa il repository GitHub creato.
5. Assicurati che le impostazioni rilevate siano:
   - **Framework Preset:** `Vite`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
6. Clicca su **Deploy**. Ogni volta che farai un `git push` sul branch principale, il sito si aggiornerà automaticamente.
