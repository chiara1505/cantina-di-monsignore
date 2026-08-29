export const COOKIE_POLICY_INTRO =
  'La presente Cookie Policy spiega cosa sono i cookie, quali tecnologie simili utilizziamo sul sito de La Cantina di Monsignore e come puoi gestire le tue preferenze.';

export const COOKIE_POLICY_SECTIONS = [
  {
    title: '1. Cosa sono i cookie',
    paragraphs: [
      'I cookie sono piccoli file di testo che i siti visitati inviano al browser dell’utente, dove vengono memorizzati per essere poi ritrasmessi agli stessi siti alla visita successiva. Tecnologie simili (es. localStorage) possono essere usate per ricordare preferenze tecniche, come la scelta sui cookie.',
    ],
  },
  {
    title: '2. Tipologie di cookie utilizzati',
    paragraphs: [
      'Il sito utilizza le seguenti categorie di cookie e tecnologie simili:',
    ],
    list: [
      'Cookie/tecnologie strettamente necessari: indispensabili per il funzionamento del sito e per memorizzare la preferenza espressa sui cookie. Non richiedono consenso.',
      'Cookie e contenuti di terze parti non strettamente necessari: servizi integrati che possono impostare cookie o trattare dati solo dopo la scelta dell’utente (es. mappa Google Maps incorporata).',
      'Cookie di profilazione/marketing: strumenti per campagne pubblicitarie sui social o remarketing, che potranno essere attivati solo previo consenso.',
    ],
  },
  {
    title: '3. Cookie e servizi attualmente in uso',
    subsections: [
      {
        title: '3.1 Cookie/tecnologie necessari',
        list: [
          'Preferenza cookie (`cantina-cookie-consent`, localStorage): memorizza se hai accettato o rifiutato i cookie non necessari.',
          'Cookie tecnici della piattaforma di hosting: necessari per erogazione, sicurezza e prestazioni del sito.',
        ],
      },
      {
        title: '3.2 Google Maps (Google LLC)',
        list: [
          'Nella pagina Contatti è presente una mappa Google Maps incorporata (iframe). Google può installare cookie e raccogliere dati tecnici quando la mappa viene caricata.',
          'Se rifiuti i cookie non necessari, la mappa non viene caricata automaticamente: vedrai un riquadro con link per aprire Google Maps esternamente.',
          'Informativa Google: https://policies.google.com/privacy',
        ],
      },
      {
        title: '3.3 Google Search Console',
        paragraphs: [
          'Google Search Console è uno strumento utilizzato dal titolare del sito per analizzare la presenza del sito su Google Search. Non installa cookie di profilazione sul browser dei visitatori durante la normale navigazione del sito.',
        ],
      },
      {
        title: '3.4 Sponsorizzate sui social',
        paragraphs: [
          'Il sito potrebbe integrare strumenti di tracciamento collegati a campagne pubblicitarie su piattaforme social. In tal caso tali strumenti saranno attivati solo previo consenso e saranno elencati in un aggiornamento della presente Cookie Policy.',
        ],
      },
    ],
  },
  {
    title: '4. Come gestire o revocare il consenso',
    list: [
      'Al primo accesso puoi scegliere se accettare o rifiutare i cookie non strettamente necessari tramite il banner informativo.',
      'Puoi modificare la scelta in qualsiasi momento cliccando su «Gestisci cookie» nel footer del sito.',
      'Puoi anche gestire i cookie dalle impostazioni del browser (blocco, cancellazione). La disabilitazione dei cookie tecnici può compromettere alcune funzionalità del sito.',
    ],
  },
  {
    title: '5. Link utili',
    list: [
      'Google Chrome: Impostazioni → Privacy e sicurezza → Cookie',
      'Mozilla Firefox: Impostazioni → Privacy e sicurezza',
      'Safari: Preferenze → Privacy',
      'Microsoft Edge: Impostazioni → Cookie e autorizzazioni sito',
    ],
  },
  {
    title: '6. Aggiornamenti',
    paragraphs: [
      'La presente Cookie Policy può essere aggiornata per riflettere modifiche tecniche o normative. La data di ultimo aggiornamento è indicata in cima alla pagina.',
    ],
  },
];
