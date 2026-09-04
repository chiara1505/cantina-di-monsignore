import { DATA_CONTROLLER } from '@/lib/legal/siteLegal';

export const TERMS_AND_CONDITIONS_INTRO =
  'I presenti Termini e condizioni disciplinano l’utilizzo della sezione Shop del sito web de La Cantina di Monsignore e le modalità con cui i clienti possono richiedere l’acquisto di prodotti (vini, conserve, olio e altri articoli) offerti dal Venditore. Si applicano ai consumatori che effettuano acquisti a distanza nel territorio della Repubblica Italiana, salvo diverso accordo scritto.';

export const TERMS_AND_CONDITIONS_SECTIONS = [
  {
    title: '1. Venditore',
    list: [
      `Il Venditore è ${DATA_CONTROLLER.ownerName}, titolare de ${DATA_CONTROLLER.businessName}, con sede in ${DATA_CONTROLLER.address}.`,
      `Partita IVA: ${DATA_CONTROLLER.vatNumber}.`,
      `Per informazioni e comunicazioni relative agli ordini: ${DATA_CONTROLLER.email}.`,
      `Il punto vendita e la cantina si trovano in Piazza Sant'Antonio n. 5, Castiglione di Sicilia (ME), come indicato nella pagina Contatti del sito.`,
    ],
  },
  {
    title: '2. Oggetto e funzionamento dello Shop',
    paragraphs: [
      'Attraverso lo Shop del sito l’utente può consultare il catalogo prodotti e inviare una richiesta d’ordine al Venditore tramite WhatsApp o email.',
      'Il sito non consente il pagamento online né la conclusione automatica del contratto di vendita. L’invio di una richiesta d’ordine ha natura precontrattuale: il contratto si perfeziona solo dopo conferma scritta del Venditore (email o messaggio) con indicazione di prodotti, quantità, prezzo finale, modalità di pagamento e consegna o ritiro.',
    ],
  },
  {
    title: '3. Prodotti, prezzi e disponibilità',
    list: [
      'Le descrizioni, le immagini e le schede prodotto hanno valore indicativo e possono essere aggiornate senza preavviso.',
      'I prezzi indicati sul sito, ove presenti, sono espressi in euro e intendono comprensivi di IVA ove applicabile, salvo diversa indicazione al momento della conferma d’ordine.',
      'Se un prezzo non è ancora indicato o risulta pari a zero, l’importo verrà comunicato dal Venditore in fase di conferma.',
      'I prodotti sono soggetti a disponibilità. In caso di indisponibilità totale o parziale, il Venditore ne darà comunicazione al cliente proponendo, ove possibile, un’alternativa o l’annullamento della richiesta.',
    ],
  },
  {
    title: '4. Procedura d’ordine',
    list: [
      'L’utente seleziona il prodotto e la quantità desiderata e invia la richiesta tramite i canali messi a disposizione (WhatsApp o email).',
      'Nei messaggi è opportuno indicare nome, cognome, recapiti telefonici, indirizzo di consegna (se richiesta spedizione) o preferenza per il ritiro in sede.',
      'Il Venditore verifica la richiesta e risponde con un riepilogo confermato, includendo costi di eventuale spedizione, tempi indicativi e modalità di pagamento.',
      'Fino alla conferma scritta del Venditore, la richiesta non costituisce ordine vincolante.',
    ],
  },
  {
    title: '5. Pagamento',
    paragraphs: [
      'Le modalità di pagamento (ad esempio bonifico bancario, contanti o carta al ritiro, altre soluzioni concordate) vengono definite di volta in volta al momento della conferma d’ordine e comunicate per iscritto al cliente.',
      'Salvo diverso accordo, la merce non viene spedita o consegnata prima del ricevimento del pagamento quando così concordato tra le parti.',
    ],
  },
  {
    title: '6. Consegna e ritiro',
    paragraphs: [
      'Spedizione e ritiro dei prodotti avvengono secondo modalità, tempi e costi concordati con il cliente al momento della conferma dell’ordine.',
      `In assenza di specifico accordo, il cliente può concordare il ritiro presso il ristorante in Piazza Sant'Antonio n. 5, Castiglione di Sicilia (ME), negli orari di apertura indicati sul sito.`,
      'Eventuali costi di trasporto, imballo e assicurazione del collo, se applicabili, saranno comunicati prima della conclusione del contratto.',
      'Il rischio di perdita o deterioramento dei prodotti passa al cliente al momento della consegna al vettore (in caso di spedizione) o al momento del ritiro in sede, salvo diverso accordo.',
    ],
  },
  {
    title: '7. Diritto di recesso',
    paragraphs: [
      'Se l’acquirente agisce in qualità di consumatore, ha diritto di recedere dal contratto entro 14 giorni dalla consegna del bene, senza obbligo di motivazione, salvo le eccezioni di legge.',
    ],
    list: [
      'Ai sensi dell’art. 59, comma 1, lett. c), del Codice del consumo, il diritto di recesso è escluso per forniture di bevande alcoliche il cui prezzo è stato concordato al momento della conclusione del contratto, la consegna delle quali può avvenire solo dopo trenta giorni e il cui valore effettivo dipende da fluttuazioni di mercato non controllabili dal professionista.',
      'Per gli altri prodotti alimentari sigillati che non si prestano ad essere restituiti per motivi igienici o connessi alla protezione della salute, il recesso può essere escluso se il sigillo è stato aperto dopo la consegna.',
    ],
    closingParagraphs: [
      `Per esercitare il recesso, ove applicabile, il cliente deve inviare comunicazione esplicita a ${DATA_CONTROLLER.email} entro il termine di 14 giorni, indicando i prodotti oggetto di recesso e il numero d’ordine. I costi di restituzione sono a carico del cliente salvo diversa previsione di legge.`,
    ],
  },
  {
    title: '8. Garanzia legale di conformità',
    paragraphs: [
      'I prodotti venduti sono coperti dalla garanzia legale di conformità di cui agli artt. 128 e seguenti del Codice del consumo, per i difetti esistenti al momento della consegna e denunciati entro i termini di legge.',
      'In caso di difetto di conformità, il consumatore ha diritto alla riparazione, sostituzione, riduzione del prezzo o risoluzione del contratto, secondo quanto previsto dalla normativa applicabile.',
    ],
  },
  {
    title: '9. Limitazione di responsabilità',
    paragraphs: [
      'Il Venditore non risponde per disservizi imputabili a cause di forza maggiore, guasti delle reti di comunicazione o a soggetti terzi (es. corrieri), né per un uso improprio dei prodotti da parte del cliente.',
      'Resta ferma la responsabilità del Venditore nei limiti e alle condizioni previste dalla legge imperativa a tutela del consumatore.',
    ],
  },
  {
    title: '10. Privacy',
    paragraphs: [
      'I dati personali trasmessi in occasione di una richiesta d’ordine sono trattati secondo quanto indicato nella Privacy Policy del sito.',
    ],
  },
  {
    title: '11. Legge applicabile e foro competente',
    paragraphs: [
      'I presenti Termini e condizioni sono regolati dalla legge italiana.',
      'Per ogni controversia relativa all’interpretazione, esecuzione o validità del contratto con un consumatore residente o domiciliato in Italia, è competente il foro del luogo di residenza o domicilio del consumatore, come previsto dal Codice del consumo. In ogni caso, è possibile ricorrere alla piattaforma ODR della Commissione europea (https://ec.europa.eu/consumers/odr) per la risoluzione extragiudiziale delle controversie.',
    ],
  },
  {
    title: '12. Modifiche',
    paragraphs: [
      'Il Venditore si riserva di aggiornare i presenti Termini e condizioni in qualsiasi momento. La versione applicabile è quella pubblicata su questa pagina alla data di invio della richiesta d’ordine.',
    ],
  },
];
