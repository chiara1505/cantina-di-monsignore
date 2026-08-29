import { DATA_CONTROLLER } from '@/lib/legal/siteLegal';

export const PRIVACY_POLICY_INTRO =
  'La presente informativa descrive come vengono trattati i dati personali degli utenti che visitano il sito web de La Cantina di Monsignore, in conformità al Regolamento (UE) 2016/679 (GDPR) e alla normativa italiana applicabile.';

export const PRIVACY_POLICY_SECTIONS = [
  {
    title: '1. Titolare del trattamento',
    list: [
      `Il Titolare del trattamento è ${DATA_CONTROLLER.ownerName}, titolare de ${DATA_CONTROLLER.businessName}, con sede in ${DATA_CONTROLLER.address}.`,
      `Per qualsiasi richiesta relativa alla privacy è possibile scrivere a ${DATA_CONTROLLER.email}.`,
      `Partita IVA: ${DATA_CONTROLLER.vatNumber}.`,
    ],
  },
  {
    title: '2. Tipologie di dati trattati',
    paragraphs: [
      'A seconda dell’interazione con il sito, possono essere trattate le seguenti categorie di dati:',
    ],
    list: [
      'Dati di navigazione e tecnici (es. indirizzo IP, tipo di browser, data e ora della richiesta, pagine visitate) raccolti automaticamente dai sistemi informatici del sito e dell’hosting.',
      'Dati forniti volontariamente tramite i form di contatto e prenotazione (nome, cognome, email, telefono, numero di persone, data e ora preferite, note aggiuntive), quando tali servizi sono attivi.',
      'Dati derivanti dall’uso di servizi di terze parti integrati nel sito, come la mappa Google Maps nella pagina Contatti, secondo le preferenze espresse dall’utente in materia di cookie (vedi Cookie Policy).',
    ],
  },
  {
    title: '3. Finalità e base giuridica del trattamento',
    paragraphs: [
      'I dati personali sono trattati per le finalità indicate di seguito e sulla base delle corrispondenti basi giuridiche previste dal GDPR:',
    ],
    list: [
      'Consentire la navigazione del sito e garantirne il corretto funzionamento (base giuridica: legittimo interesse del Titolare e/o esecuzione di misure precontrattuali).',
      'Gestire richieste di contatto e prenotazioni inviate tramite i form del sito (base giuridica: esecuzione di misure precontrattuali e/o legittimo interesse; eventuale consenso ove richiesto).',
      'Adempiere a obblighi di legge e tutelare i diritti del Titolare (base giuridica: obbligo di legge e legittimo interesse).',
      'Analizzare, in forma aggregata, le performance del sito nei motori di ricerca tramite Google Search Console, strumento utilizzato dal Titolare per monitorare indicizzazione e visibilità online (base giuridica: legittimo interesse del Titolare).',
      'Svolgere attività di marketing e remarketing tramite piattaforme social, solo previo consenso dell’utente e secondo quanto indicato nella Cookie Policy.',
    ],
  },
  {
    title: '4. Natura del conferimento',
    paragraphs: [
      'Il conferimento dei dati di navigazione è necessario per l’utilizzo del sito. Il conferimento dei dati tramite form è facoltativo, ma l’eventuale rifiuto può impedire l’invio di richieste di contatto o prenotazione.',
    ],
  },
  {
    title: '5. Destinatari e responsabili del trattamento',
    paragraphs: [
      'I dati possono essere trattati da persone autorizzate dal Titolare e da fornitori di servizi tecnici, nominati responsabili del trattamento ove necessario, tra cui:',
    ],
    list: [
      'Fornitore di servizi di hosting del sito web.',
      'Google LLC — servizi Google Maps (visualizzazione mappa) e Google Search Console (analisi tecnica del sito per il Titolare).',
      'Fornitori di servizi di posta elettronica o messaggistica utilizzati per l’invio e la gestione delle richieste ricevute tramite form (quando attivati).',
      'Fornitore della piattaforma CMS per la gestione tecnica dei contenuti del sito (dati relativi all’amministrazione, non ai visitatori).',
    ],
    closingParagraphs: [
      'L’elenco dei responsabili può essere aggiornato nel tempo. I dati non sono diffusi liberamente né venduti a terzi.',
    ],
  },
  {
    title: '6. Trasferimento di dati extra-UE',
    paragraphs: [
      'Alcuni fornitori di servizi tecnici (es. Google LLC) possono trattare dati anche negli Stati Uniti o in altri Paesi extra-UE. In tali casi, il trasferimento avviene nel rispetto delle garanzie previste dal GDPR (es. decisioni di adeguatezza, Standard Contractual Clauses).',
    ],
  },
  {
    title: '7. Conservazione dei dati',
    paragraphs: [
      'I dati sono conservati per il tempo strettamente necessario al perseguimento delle finalità per cui sono stati raccolti, salvo obblighi di legge diversi. Indicativamente:',
    ],
    list: [
      'Dati di navigazione e log tecnici: per il periodo necessario alla sicurezza e al funzionamento del sito, di norma non oltre 12 mesi, salvo esigenze di difesa in giudizio.',
      'Richieste di contatto e prenotazione: fino a 24 mesi dalla richiesta, salvo obblighi di legge o contestazioni.',
      'Preferenze cookie: secondo quanto indicato nella Cookie Policy.',
    ],
  },
  {
    title: '8. Diritti dell’interessato',
    list: [
      'In qualità di interessato, hai diritto di chiedere al Titolare l’accesso ai dati, la rettifica, la cancellazione, la limitazione del trattamento, la portabilità (ove applicabile) e di opporti al trattamento basato sul legittimo interesse.',
      'Quando il trattamento si basa sul consenso, puoi revocarlo in qualsiasi momento senza pregiudicare la liceità del trattamento basato sul consenso prestato prima della revoca.',
      `Per esercitare i tuoi diritti scrivi a ${DATA_CONTROLLER.email}.`,
      'Hai inoltre diritto di proporre reclamo all’Autorità Garante per la protezione dei dati personali (www.garanteprivacy.it).',
    ],
  },
  {
    title: '9. Sicurezza',
    paragraphs: [
      'Il Titolare adotta misure tecniche e organizzative adeguate per proteggere i dati personali da accessi non autorizzati, perdita, distruzione o divulgazione illecita.',
    ],
  },
  {
    title: '10. Modifiche alla presente informativa',
    paragraphs: [
      'Il Titolare si riserva di aggiornare la presente Privacy Policy in qualsiasi momento. Le modifiche saranno pubblicate su questa pagina con indicazione della data di ultimo aggiornamento.',
    ],
  },
  {
    title: '11. Cookie e tecnologie simili',
    paragraphs: [
      'Per informazioni su cookie e strumenti di tracciamento utilizzati sul sito, consulta la Cookie Policy.',
    ],
  },
];
