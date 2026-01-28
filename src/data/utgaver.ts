// Data for alle Norsknytt-utgaver
// Bilder lagret lokalt i /images/forsider/

export interface Utgave {
  slug: string;
  nummer: string;
  år: number;
  bildeUrl: string;
  pdfUrl: string;
  pdfFilnavn: string;
  innhold: string[];
}

// Hjelpefunksjon for a fa lokal bilde-URL
function getLokalBildeUrl(slug: string): string {
  return `/images/forsider/norsknytt-${slug}.jpg`;
}

export const utgaver: Record<string, Utgave> = {
  '1-2010': {
    slug: '1-2010',
    nummer: '1/2010',
    år: 2010,
    bildeUrl: getLokalBildeUrl('1-2010'),
    pdfUrl: 'https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_2010_1.pdf',
    pdfFilnavn: 'norsknytt_2010_1',
    innhold: [
      'Nye læreplanmål i norsk - og ny læreplan i Danmark',
      'Tegneserien som genre',
      'Morn igjen, rektor!',
      'Kan noen telle stemmene!',
      'Sommerfugler',
      'Salomos hoysang - verdens eldste erotikk',
      'Gunnar Bull Gundersen',
      'Sveve',
      'Da kjempa eg mot eit rasande lik',
      'Dei sovande',
      'Heim',
      'Læraren som formidlar',
      'Tryllebundet',
      'Nynorskboka for 8.-10.',
      'Litt av kvart',
      'Trille ilag',
      'Gaffatansen',
      'Ordblindboka',
      'Dyslexi',
      'Fra Bokhandlerforeningen',
      'Fra Leser soker bok',
    ],
  },

  '1-2-2021': {
    slug: '1-2-2021',
    nummer: '1-2/2021',
    år: 2021,
    bildeUrl: getLokalBildeUrl('1-2-2021'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_2021_1_2.pdf`,
    pdfFilnavn: `norsknytt_2021_1_2`,
    innhold: [
      "Bokomtale: Hva skjer i norsktimene?Om læreplan og læremidlerSpørsmål å stille ved læremiddelvalgOmtale av læreverket Fabel 8–10Omtale av læreverket Norsk 8–10Omtale av læreverket Kontekst",
    ],
  },

  '1-2-2019': {
    slug: '1-2-2019',
    nummer: '1-2/2019',
    år: 2019,
    bildeUrl: getLokalBildeUrl('1-2-2019'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_2019_1_2.pdf`,
    pdfFilnavn: `norsknytt_2019_1_2`,
    innhold: [
      "Fagfornyelsen og den nye norsklæreplanenDen nye norsklæreplanen + kommentarer til måleneSpråklige kvaliteter i elevteksterOrd for å beskrive språk og stilNye eksamensformer på trappene +",
    ],
  },

  '2-3-2018': {
    slug: '2-3-2018',
    nummer: '2-3/2018',
    år: 2018,
    bildeUrl: getLokalBildeUrl('2-3-2018'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_2018_2_3.pdf`,
    pdfFilnavn: `norsknytt_2018_2_3`,
    innhold: [
      "LeiarBokomtale: KillerinstinktBokomtale: Dette livet eller det nesteBokomtale: Den tolvte spelarenBokomtale: Støvets bokBokomtale: HevnerNovelleopplegg for tre trinn: introduksjonNovelleopplegg 8.",
    ],
  },

  '4-2018': {
    slug: '4-2018',
    nummer: '4/2018',
    år: 2018,
    bildeUrl: getLokalBildeUrl('4-2018'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_2018_4.pdf`,
    pdfFilnavn: `norsknytt_2018_4`,
    innhold: [
      "FagfornyelsenNorsknytts høringssvarOppgaver til novellen «Sista måltiden»De beste ungdomsbøkene 2018Pechakucha i klasserommetOm stjerneorienteringNår lesingen har låst segDe hundre beste barne- og",
    ],
  },

  '1-2018': {
    slug: '1-2018',
    nummer: '1/2018',
    år: 2018,
    bildeUrl: getLokalBildeUrl('1-2018'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_2018_1.pdf`,
    pdfFilnavn: `norsknytt_2018_1`,
    innhold: [
      "LeiarOmtale: nye ungdomsbøkerStudieark til to ungdomsromanerApertium: slik lurer elevane deg!Kva er djupnelæring? Opplegg med spørsmål til drøftingIntro til opplegg om novellerNovellekatalog A-Q",
    ],
  },

  '2-3-2017': {
    slug: '2-3-2017',
    nummer: '2-3/2017',
    år: 2017,
    bildeUrl: getLokalBildeUrl('2-3-2017'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_2017_2_3.pdf`,
    pdfFilnavn: `norsknytt_2017_2_3`,
    innhold: [
      "LeiarBokomtale: GalderstjernaBokomtale: JaktenBokomtale: Mørket kommer innenfraAndre verdskrig gjennom skjønnlitteraturLøvekvinnen: bok og filmEksamen i norsk våren 2017:",
    ],
  },

  '4-2017': {
    slug: '4-2017',
    nummer: '4/2017',
    år: 2017,
    bildeUrl: getLokalBildeUrl('4-2017'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_2017_4.pdf`,
    pdfFilnavn: `norsknytt_2017_4`,
    innhold: [
      "LeiarBokomtale: Norsk barnelitteraturhistorieLitterær fordjupingIntroduksjon til hårete oppgåverHårete skriveoppgåverHårete kjeldeoppgåverHårete kommaoppgåverHårete kryssordHovudmålseksamen frå",
    ],
  },

  '1-2017': {
    slug: '1-2017',
    nummer: '1/2017',
    år: 2017,
    bildeUrl: getLokalBildeUrl('1-2017'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_2017_1.pdf`,
    pdfFilnavn: `norsknytt_2017_1`,
    innhold: [
      "Filmomtale: SameblodFilmstudieark: VictoriaDen store bokbløffenOppgåve om ungdomsspråkQuiz om ungdomsspråkUngdomsspråk: kreative oppgåver og skriveoppgåverSkam-quiz 3 og 4Faste uttrykk på",
    ],
  },

  '4-2016': {
    slug: '4-2016',
    nummer: '4/2016',
    år: 2016,
    bildeUrl: getLokalBildeUrl('4-2016'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_2016_4.pdf`,
    pdfFilnavn: `norsknytt_2016_4`,
    innhold: [
      "LeiarNy eksamensrettleiingDe beste ungdomsbøkene 2016Filmomtale: VildandenLærarrettleiing til fleirvalsoppgåverFleirvalsoppgåver i norskFasitsider norsknytt_2016_4Last ned",
    ],
  },

  '1-2016': {
    slug: '1-2016',
    nummer: '1/2016',
    år: 2016,
    bildeUrl: getLokalBildeUrl('1-2016'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_2016_1.pdf`,
    pdfFilnavn: `norsknytt_2016_1`,
    innhold: [
      "Bokomtale: Effektiv planlegging og vurderingBokomtale: MensenBokomtale: Verdas viktigaste bokFilmomtale: danske kortfilmarSkamSkam skriveoppgåver og diskusjonsoppgåverSkam tankekart og",
    ],
  },

  '3-4-2015': {
    slug: '3-4-2015',
    nummer: '3-4/2015',
    år: 2015,
    bildeUrl: getLokalBildeUrl('3-4-2015'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_2015_3_4.pdf`,
    pdfFilnavn: `norsknytt_2015_3_4`,
    innhold: [
      "Ta ordet i klassenKlippediktSkriv en dialogDu og nærmiljøetFår du tolv rette ordspråk?Tipp svenske «turistord»Homonymene – en ordgruppe med smil iLitterær rebusSkriv en 50-stubbSett synonymene i",
    ],
  },

  '2-2015': {
    slug: '2-2015',
    nummer: '2/2015',
    år: 2015,
    bildeUrl: getLokalBildeUrl('2-2015'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_2015_2.pdf`,
    pdfFilnavn: `norsknytt_2015_2`,
    innhold: [
      "• IP-adresser til skriftlig eksamen• Forslag til IP-adresser• Heldagsprøver for fall?• Ti tips til deg som vil opp i karakter• Dei beste nynorskbøkene• Dei beste nynorskseriane• Når lesingen har",
    ],
  },

  '1-2015': {
    slug: '1-2015',
    nummer: '1/2015',
    år: 2015,
    bildeUrl: getLokalBildeUrl('1-2015'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_2015_1.pdf`,
    pdfFilnavn: `norsknytt_2015_1`,
    innhold: [
      "Tilbakemelding til norsklærerenNorm‐prosjektetGrunnleggende ferdigheterSpørsmålsark om lesingSpørsmålsark om lyttingSpørsmålsark om skrivingSpørsmålsark om munnleg aktivitetSpørsmålsark om",
    ],
  },

  '3-4-2014': {
    slug: '3-4-2014',
    nummer: '3-4/2014',
    år: 2014,
    bildeUrl: getLokalBildeUrl('3-4-2014'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_2014_3_4.pdf`,
    pdfFilnavn: `norsknytt_2014_3_4`,
    innhold: [
      "Hjelpemidler til eksamenDe beste ungdomsbøkene 2014Et dukkehjem – undervisningstipsVurderingsskjema for dramatiseringEt dukkehjem – relevante kompetansemålEt dukkehjem – førlesingsaktiviteterEt",
    ],
  },

  '1-2-2014': {
    slug: '1-2-2014',
    nummer: '1-2/2014',
    år: 2014,
    bildeUrl: getLokalBildeUrl('1-2-2014'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_2014_1_2.pdf`,
    pdfFilnavn: `norsknytt_2014_1_2`,
    innhold: [
      "Lesesenterets staveprøveBokomtale: «Gode skrivestrategier»Bokomtale: Nye bøker i Kontekst-serienBokomtale: Skjønnlitterære utgivelserFotball-­quizBokomtaler: Prøysen-­bøkerPrøysen-­quizOm bruk av",
    ],
  },

  '1-2-2013': {
    slug: '1-2-2013',
    nummer: '1-2/2013',
    år: 2013,
    bildeUrl: getLokalBildeUrl('1-2-2013'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_2013_1_2.pdf`,
    pdfFilnavn: `norsknytt_2013_1_2`,
    innhold: [
      "Bilder i kampen mot særskrivingsfeilNorsknytt med egen Facebook-sideRevidert læreplan i norsk18 ting å gjøre med bøkerOversatt litteratur: Ideer til et leseprosjektOversatt litteratur: Kjennetegn",
    ],
  },

  '3-2013': {
    slug: '3-2013',
    nummer: '3/2013',
    år: 2013,
    bildeUrl: getLokalBildeUrl('3-2013'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_2013_3.pdf`,
    pdfFilnavn: `norsknytt_2013_3`,
    innhold: [
      "Omtale av læreverket",
      "Apropos/skrivingLett revisjon av eksempeloppgavene til eksamenOmtale av læreverket",
      "FabelOmtale av fagboka",
      "Gutter og lesingOmtale av læreverket",
      "FabelAndre bo…",
    ],
  },

  '3-4-2012': {
    slug: '3-4-2012',
    nummer: '3-4/2012',
    år: 2012,
    bildeUrl: getLokalBildeUrl('3-4-2012'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_2012_3_4.pdf`,
    pdfFilnavn: `norsknytt_2012_3_4`,
    innhold: [
      "Ny eksamensordning i norsk skriftlig i 2014Direktoratet utgir kjennetegn på måloppnåelseBokomtalerDe beste ungdomsbøkene i 2012Tips til verdens bokdagMiming av boktitlerMiming av",
    ],
  },

  '2-2012': {
    slug: '2-2012',
    nummer: '2/2012',
    år: 2012,
    bildeUrl: getLokalBildeUrl('2-2012'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_2012_2.pdf`,
    pdfFilnavn: `norsknytt_2012_2`,
    innhold: [
      "MagasinetFaktafykPondus på dialektSnorres kongesagaer i ungdomsutgaveNorrøn quiz – muntlig aktivitetNorrøn quiz – fleip‐eller-fakta-oppgaverNorrøn quiz – 1X2‐oppgaverKryssord med norrøne stikkord",
    ],
  },

  '1-2012': {
    slug: '1-2012',
    nummer: '1/2012',
    år: 2012,
    bildeUrl: getLokalBildeUrl('1-2012'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_2012_1.pdf`,
    pdfFilnavn: `norsknytt_2012_1`,
    innhold: [
      "Nettavis fra",
      "www.elevavis.noRevidert læreplan i norskOm skriftlig eksamen våren 2012Eksamensoppgavene våren 2012Omtale:",
      "Dataspill og Jeg er ZlatanOmtale:",
      "Klimaboka og Det som står på…",
    ],
  },

  '3-4-2011': {
    slug: '3-4-2011',
    nummer: '3-4/2011',
    år: 2011,
    bildeUrl: getLokalBildeUrl('3-4-2011'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_2011_3_4.pdf`,
    pdfFilnavn: `norsknytt_2011_3_4`,
    innhold: [
      "Omtale: Den illustrerte bokaOmtale: Apefjes + HamletOmtale: Cherub + Alex Rider (tegneserier)Omtale: Aya + Drageløperen (tegneserier)Omtale: Trash + Mytteriet på BountyOmtale: Håndbok for",
    ],
  },

  '1-2-2011': {
    slug: '1-2-2011',
    nummer: '1-2/2011',
    år: 2011,
    bildeUrl: getLokalBildeUrl('1-2-2011'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_2011_1_2.pdf`,
    pdfFilnavn: `norsknytt_2011_1_2`,
    innhold: [
      "Utvalgsprøver i skriving fra høsten 2012Ny nynorsk rettskriving fra 1. august2012Eksempelark med gammel og ny rettskrivingSkriftlig eksamen i norskVurderingsskjema til skriftlig eksamenRevisjon av",
    ],
  },

  '4-2010': {
    slug: '4-2010',
    nummer: '4/2010',
    år: 2010,
    bildeUrl: getLokalBildeUrl('4-2010'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_2010_4.pdf`,
    pdfFilnavn: `norsknytt_2010_4`,
    innhold: [
      "Funn om lesing i PISA-undersøkelsen 2009Bokomtale: Sammensatte tekster i skolenDirektoratet oppretter forum for norskfagetFra LUS til LeselosKartleggingsskjema – leseferdigheterBokomtale:",
    ],
  },

  '3-2010': {
    slug: '3-2010',
    nummer: '3/2010',
    år: 2010,
    bildeUrl: getLokalBildeUrl('3-2010'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_2010_3.pdf`,
    pdfFilnavn: `norsknytt_2010_3`,
    innhold: [
      "Omtale: 13 gode grunnerOmtale: Ayatollah FengslaOmtale: Sakprosa i skolenOmtale: Landet under isenLandet under isen - handlingsreferatLandet under isen - persongallerietLandet under",
    ],
  },

  '2-2010': {
    slug: '2-2010',
    nummer: '2/2010',
    år: 2010,
    bildeUrl: getLokalBildeUrl('2-2010'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_2010_2.pdf`,
    pdfFilnavn: `norsknytt_2010_2`,
    innhold: [
      "Eksamen i norsk 2010 – uvanlig vide oppgaverEksamensoppgavene 2010 – skjønnlitteratur og sakprosaNynorsk autokorrekturOmtale: Den tredje tekstsamlingen i Kontekst-serienRollekort som",
    ],
  },

  '1-2-2009': {
    slug: '1-2-2009',
    nummer: '1-2/2009',
    år: 2009,
    bildeUrl: getLokalBildeUrl('1-2-2009'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_2009_1_2.pdf`,
    pdfFilnavn: `norsknytt_2009_1_2`,
    innhold: [
      "Kraftig innstramming: Færre får fritak fra karakter i sidemåletNy veiledning til læreplanenLokale korrekturoppdragMed dataen som rettehjelpNynorsk rettenøkkelSøk-og-erstatt-listerOm",
    ],
  },

  '4-2009': {
    slug: '4-2009',
    nummer: '4/2009',
    år: 2009,
    bildeUrl: getLokalBildeUrl('4-2009'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_2009_4.pdf`,
    pdfFilnavn: `norsknytt_2009_4`,
    innhold: [
      "LederNy nynorsk rettskriving klar til 2012Mindre nynorsk i lærebøkeneRetteroboter på frammarsjLesbarhetsindeksOrdvariasjonsindeksBokomtale: Ivar Aasen og egLivbåten — diskusjonsoppgaveHytteturen —",
    ],
  },

  '3-2009': {
    slug: '3-2009',
    nummer: '3/2009',
    år: 2009,
    bildeUrl: getLokalBildeUrl('3-2009'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_2009_3.pdf`,
    pdfFilnavn: `norsknytt_2009_3`,
    innhold: [
      "LederKortfilmer til bruk i klasserommetBokomtale: NorskgrammatikkBokomtale: Skriv IHandlingskjederStolbytteleken — om ufin språkbruk i klasserommetH.C.Andersens eventyr og historierBrødrene Grimms",
    ],
  },

  '4-2008': {
    slug: '4-2008',
    nummer: '4/2008',
    år: 2008,
    bildeUrl: getLokalBildeUrl('4-2008'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_2008_4.pdf`,
    pdfFilnavn: `norsknytt_2008_4`,
    innhold: [
      "LederOpplesning og høytlesningForarbeid til opplesingenTips om debattklubberTaleanalyseSitatbrukKongens nyttårstaleArtiklenes to hovedtyperAvisartiklenes kjennetegnVurdering av",
    ],
  },

  '3-2008': {
    slug: '3-2008',
    nummer: '3/2008',
    år: 2008,
    bildeUrl: getLokalBildeUrl('3-2008'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_2008_3.pdf`,
    pdfFilnavn: `norsknytt_2008_3`,
    innhold: [
      "LederNasjonale prøverBokomtale: LesedidaktikkSkjønnskrift ut – layout inn?Typografiske uttrykkUheldige formuleringerItalia-kryssordNordisk forfatteratlasDobbel betydningKryssord – ord som slutter",
    ],
  },

  '2-2008': {
    slug: '2-2008',
    nummer: '2/2008',
    år: 2008,
    bildeUrl: getLokalBildeUrl('2-2008'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_2008_2.pdf`,
    pdfFilnavn: `norsknytt_2008_2`,
    innhold: [
      "LederEksamensordningen i norsk skriftligNye læreplanmål i lesingHva skjuler seg bak målene?Om lesemapperHuskelister med lesestrategierLUS-satsning i OsloLUS-skjemaSpørreskjema om lesingNynorske",
    ],
  },

  '1-2008': {
    slug: '1-2008',
    nummer: '1/2008',
    år: 2008,
    bildeUrl: getLokalBildeUrl('1-2008'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_2008_1.pdf`,
    pdfFilnavn: `norsknytt_2008_1`,
    innhold: [
      "LederRollespillkortKortfilmer med undervisningstips (nynorsk)Wergeland-kryssordRadikale og konservative formerOrdkunnskapEnkeltkonsonanter eller dobbeltkonsonanter?Spørrekonkurranse om ordhistorie",
    ],
  },

  '3-4-2007': {
    slug: '3-4-2007',
    nummer: '3-4/2007',
    år: 2007,
    bildeUrl: getLokalBildeUrl('3-4-2007'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_2007_3_4.pdf`,
    pdfFilnavn: `norsknytt_2007_3_4`,
    innhold: [
      "Leder - «Tid for tunge løft»Kort om PISALesestrategierNorske folkeeventyrNorsk overtroVokaler og konsonanterBokstavomstokking av avisordInnbyggernavnHunnpris og",
    ],
  },

  '2-2007': {
    slug: '2-2007',
    nummer: '2/2007',
    år: 2007,
    bildeUrl: getLokalBildeUrl('2-2007'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_2007_2.pdf`,
    pdfFilnavn: `norsknytt_2007_2`,
    innhold: [
      "Kunnskap i kolonnerOrdforklaringerFeilsamlingLeseloggVurdering",
      "iKunnskapsiøftetEgenvurdering av rettskrivningRettskrivningstabellerSvenske språkblomsterNorske",
    ],
  },

  '1-2007': {
    slug: '1-2007',
    nummer: '1/2007',
    år: 2007,
    bildeUrl: getLokalBildeUrl('1-2007'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_2007_1.pdf`,
    pdfFilnavn: `norsknytt_2007_1`,
    innhold: [
      "LederBruk av kortfilm i undervisningenBruken av notatark til norskeksamenTankediagrammerEksempel på notatark (tema: eksamen)Eksempel på notatark (tema:",
    ],
  },

  '4-2006': {
    slug: '4-2006',
    nummer: '4/2006',
    år: 2006,
    bildeUrl: getLokalBildeUrl('4-2006'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_2006_4.pdf`,
    pdfFilnavn: `norsknytt_2006_4`,
    innhold: [
      "Eventyrene er alltid aktuelleKryssordvinnere 2006/3Den nye Norsknytt-redaktøren presenterer segGammelredaktøren takker for laget etter 32 årEventyrkongen på femtilappen var stadig blakkHaldis",
    ],
  },

  '3-2006': {
    slug: '3-2006',
    nummer: '3/2006',
    år: 2006,
    bildeUrl: getLokalBildeUrl('3-2006'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_2006_3.pdf`,
    pdfFilnavn: `norsknytt_2006_3`,
    innhold: [
      "Nynorsken har overrislet bokmålet med forfriskende dialektordSpill på lag med Sokrates Slipp filosofien inn i skolenKryssordvinnere 2006/2Diktet er ei gåteTenk at jeg er født - litt",
    ],
  },

  '2-2006': {
    slug: '2-2006',
    nummer: '2/2006',
    år: 2006,
    bildeUrl: getLokalBildeUrl('2-2006'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_2006_2.pdf`,
    pdfFilnavn: `norsknytt_2006_2`,
    innhold: [
      "“Helt ubeskrivelig”Henrik Ibsen viste sprudlende rimgledeKryssordvinnere Norsknytt i",
      "2006Rytmen er et nytelsesmiddelHenrik Ibsens liv og dikting, tidslinjeIbsenruteord: Emne:",
    ],
  },

  '1-2006': {
    slug: '1-2006',
    nummer: '1/2006',
    år: 2006,
    bildeUrl: getLokalBildeUrl('1-2006'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_2006_1.pdf`,
    pdfFilnavn: `norsknytt_2006_1`,
    innhold: [
      "Ibsen-året 2006, den største litterære markering her til lands",
      "Kryssordvinnere",
      "2005/4Ibsen og Solskjær de meste kjente nordmennHva kan du bruke diktet ditt til?Henrik Ibsen,",
    ],
  },

  '4-2005': {
    slug: '4-2005',
    nummer: '4/2005',
    år: 2005,
    bildeUrl: getLokalBildeUrl('4-2005'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_2005_4.pdf`,
    pdfFilnavn: `norsknytt_2005_4`,
    innhold: [
      "Bygg på det beste i tekstenKryssordvinnere i Norsknytt 3-2005Blir norsk en del av språklig-verbal-feltet?Den norske eventyrfigurtoppenTesaurus - skattkiste med ordDialektene forsvinner",
    ],
  },

  '3-2005': {
    slug: '3-2005',
    nummer: '3/2005',
    år: 2005,
    bildeUrl: getLokalBildeUrl('3-2005'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_2005_3.pdf`,
    pdfFilnavn: `norsknytt_2005_3`,
    innhold: [
      "Språkquiz - populær sommereunderholdningKryssordvinnere Norsknytt 2005/2Storkryss - trim for hjernecelleneHumor - en gudegave til alleFra forløpsfortelling til fortelling med",
    ],
  },

  '2-2005': {
    slug: '2-2005',
    nummer: '2/2005',
    år: 2005,
    bildeUrl: getLokalBildeUrl('2-2005'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_2005_2.pdf`,
    pdfFilnavn: `norsknytt_2005_2`,
    innhold: [
      "Delta i jubileer og markeringerBussbilletten og bruksanvisningen er sakprosaKryssordvinnere Norsknytt 2005/1Elevene planker stoff fra internettTa i bruk flere språklige virkemidlerFlyets historie,",
    ],
  },

  '1-2005': {
    slug: '1-2005',
    nummer: '1/2005',
    år: 2005,
    bildeUrl: getLokalBildeUrl('1-2005'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_2005_1.pdf`,
    pdfFilnavn: `norsknytt_2005_1`,
    innhold: [
      "Verdensrekord i rettskrivingsendringerEi bok som begynner straks - en gave til nynorskenKryssordvinnere - Norsknytt 2004/4Eventyret om hvorledes aa ble til åNår ordene ikke kommerPå",
    ],
  },

  '4-2004': {
    slug: '4-2004',
    nummer: '4/2004',
    år: 2004,
    bildeUrl: getLokalBildeUrl('4-2004'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_2004_4.pdf`,
    pdfFilnavn: `norsknytt_2004_4`,
    innhold: [
      "Språk er morsomtKryssordløsninger Norsknytt 2004/3Du er en god språkbrukerFærøyene med mange spor etter nordmennTipp færøyordSmått og stort om FærøyeneVelg dine favorittordSjangrene kjenner duLær",
    ],
  },

  '3-2004': {
    slug: '3-2004',
    nummer: '3/2004',
    år: 2004,
    bildeUrl: getLokalBildeUrl('3-2004'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_2004_3.pdf`,
    pdfFilnavn: `norsknytt_2004_3`,
    innhold: [
      "Norsk - et viktig fag også i den nye skolenKryssordvinnere 2004/2Sjangerkunnskap gir god skrivehjelpNorsknytt i 100Synliggjøring av lokalhistorieLokalhistoriske vers og viserKnips et",
    ],
  },

  '2-2004': {
    slug: '2-2004',
    nummer: '2/2004',
    år: 2004,
    bildeUrl: getLokalBildeUrl('2-2004'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_2004_2.pdf`,
    pdfFilnavn: `norsknytt_2004_2`,
    innhold: [
      "Variasjon stimulerer leselysten, rutinene dreper",
      "Kryssordvinnere 1-2004Vårsanger med huller i",
      "Småtterier om store forfattere",
      "Forny språket ditt - det er vår",
      "Variasjoner i …",
    ],
  },

  '1-2004': {
    slug: '1-2004',
    nummer: '1/2004',
    år: 2004,
    bildeUrl: getLokalBildeUrl('1-2004'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_2004_1.pdf`,
    pdfFilnavn: `norsknytt_2004_1`,
    innhold: [
      "Vær kresen når du velger ord",
      "KryssordvinnereUten norsk stopper Norge",
      "Norsknytt runder 30 år",
      "Don Quijote, verdens beste bok",
      "I Don Quijotes fotspor",
      "Forfatterrebus &#821…",
    ],
  },

  '4-2003': {
    slug: '4-2003',
    nummer: '4/2003',
    år: 2003,
    bildeUrl: getLokalBildeUrl('4-2003'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_2003_4.pdf`,
    pdfFilnavn: `norsknytt_2003_4`,
    innhold: [
      "Barnebokklassikerne i skuddet",
      "Kryssordvinnere 3-2003Klapp på substantiv, tramp på verb",
      "Gladboksen - den beste julegave",
      "Tre store ungdomsbokforfattere med nye bøker",
      "Elevdik…",
    ],
  },

  '3-2003': {
    slug: '3-2003',
    nummer: '3/2003',
    år: 2003,
    bildeUrl: getLokalBildeUrl('3-2003'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_2003_3.pdf`,
    pdfFilnavn: `norsknytt_2003_3`,
    innhold: [
      "Møte med kjentfolk fra litteraturhistoria i Sommer-Norge",
      "Kryssordvinnere 2-2003Blir norsk en del av SPRÅKLIG-VERBAL-feltet?",
      "«Tenk at jeg er født» - litt hverdagsfi…",
    ],
  },

  '2-2003': {
    slug: '2-2003',
    nummer: '2/2003',
    år: 2003,
    bildeUrl: getLokalBildeUrl('2-2003'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_2003_2.pdf`,
    pdfFilnavn: `norsknytt_2003_2`,
    innhold: [
      "God rettskrivning fremmer leseferdigheten    Husk dikterne når sangene synges 17. mai Kryssordvinnere 1-2003   Halen til fuglen og fisken Grensene mellom sjangrene er flytende Fedrelandssangene",
    ],
  },

  '1-2003': {
    slug: '1-2003',
    nummer: '1/2003',
    år: 2003,
    bildeUrl: getLokalBildeUrl('1-2003'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_2003_1.pdf`,
    pdfFilnavn: `norsknytt_2003_1`,
    innhold: [
      "Større vekt på basiskunnskapene?  Kryssordløsninger - Norsknytt 4-2002   Ord om boka og leseren  Fra lærer til lærer:»Sanger fra rom 22\"   Det må settes av tid til lesing",
    ],
  },

  '4-2002': {
    slug: '4-2002',
    nummer: '4/2002',
    år: 2002,
    bildeUrl: getLokalBildeUrl('4-2002'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_2002_4.pdf`,
    pdfFilnavn: `norsknytt_2002_4`,
    innhold: [
      "Latter mot mobbing Kryssordvinnere i Norsknytt 3-2002 Humor - en gudegave til alle Logg til refleksjon og kommunikasjon Nyttige bøker i arbeidet med skjønnlitteratur Spar på store",
    ],
  },

  '3-2002': {
    slug: '3-2002',
    nummer: '3/2002',
    år: 2002,
    bildeUrl: getLokalBildeUrl('3-2002'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_2002_3.pdf`,
    pdfFilnavn: `norsknytt_2002_3`,
    innhold: [
      "Vekk lesegleden Kryssordløsninger 2-2002   Diktet er en gåte Tidslinje gir oversikt og viser fellestrekk Gransk slekta di — og få innsyn i framtida Slektstavle Kjente tekster i fremmede",
    ],
  },

  '2-2002': {
    slug: '2-2002',
    nummer: '2/2002',
    år: 2002,
    bildeUrl: getLokalBildeUrl('2-2002'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_2002_2.pdf`,
    pdfFilnavn: `norsknytt_2002_2`,
    innhold: [
      "Tid for fortelling",
      "Kryssordvinnere Norsknytt 1-2002",
      "Forny språket ditt — det er vår",
      "«Godbitark» styrker elevenes språklige selvfølelse",
      "Bli kjent med Olav Duun gjennom anekdoter&…",
    ],
  },

  '1-2002': {
    slug: '1-2002',
    nummer: '1/2002',
    år: 2002,
    bildeUrl: getLokalBildeUrl('1-2002'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_2002_1.pdf`,
    pdfFilnavn: `norsknytt_2002_1`,
    innhold: [
      "Mange bryr seg om norskfaget Kryssordløsninger 4-2001Et tankevekkende 40-årsminne: Avgangsprøven 1962 «Fordype seg i lesing» - «Delta i litterær samtale» Foredraget",
    ],
  },

  '4-2001': {
    slug: '4-2001',
    nummer: '4/2001',
    år: 2001,
    bildeUrl: getLokalBildeUrl('4-2001'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_2001_4.pdf`,
    pdfFilnavn: `norsknytt_2001_4`,
    innhold: [
      "«Å skrive er ein måte å lære på»»Ånd må vinne på troll til sist»",
      "Kryssordvinnere i Norsknytt 3/2001Lesingens og skrivingens velsignelser",
      "«Å skrive er som å t…",
    ],
  },

  '3-2001': {
    slug: '3-2001',
    nummer: '3/2001',
    år: 2001,
    bildeUrl: getLokalBildeUrl('3-2001'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_2001_3.pdf`,
    pdfFilnavn: `norsknytt_2001_3`,
    innhold: [
      "Elevene planker stoff fra internett",
      "Bli bedre kjent med Ibsen",
      "Kryssordvinnere i Norsknytt 2 - 2001",
      "Hvorfor ville ikke Ivar Aasen fornorske navnet sitt?",
      "Del ideér med kolle…",
    ],
  },

  '2-2001': {
    slug: '2-2001',
    nummer: '2/2001',
    år: 2001,
    bildeUrl: getLokalBildeUrl('2-2001'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_2001_2.pdf`,
    pdfFilnavn: `norsknytt_2001_2`,
    innhold: [
      "Europeisk språkår 2001",
      "Solskjær og Ibsen er best kjent",
      "Kryssordvinnere 1 - 2001",
      "Teksten må kommunisere",
      "Litterære virkemidler, sammenligning",
      "«Dagboka holder orden på l…",
    ],
  },

  '1-2001': {
    slug: '1-2001',
    nummer: '1/2001',
    år: 2001,
    bildeUrl: getLokalBildeUrl('1-2001'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_2001_1.pdf`,
    pdfFilnavn: `norsknytt_2001_1`,
    innhold: [
      "«Vi finner det på internett» Kryssordløsninger 4-2000Hele Norges norsklærer hedret Skaff mottakere til elevenes tekster Bobler fylles med tekst Lokk leseren til å leve med -",
    ],
  },

  '4-2000': {
    slug: '4-2000',
    nummer: '4/2000',
    år: 2000,
    bildeUrl: getLokalBildeUrl('4-2000'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_2000_4.pdf`,
    pdfFilnavn: `norsknytt_2000_4`,
    innhold: [
      "Uttale-endringer er språklige sunnhetstegn",
      "Kryssordvinnere 3-2000Glede gir bedre læringGjer Garborg levande",
      "Når det sier stopp",
      "Nynorskundervisninga må fornyast",
      "Drøft grannespråk…",
    ],
  },

  '3-2000': {
    slug: '3-2000',
    nummer: '3/2000',
    år: 2000,
    bildeUrl: getLokalBildeUrl('3-2000'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_2000_3.pdf`,
    pdfFilnavn: `norsknytt_2000_3`,
    innhold: [
      "Igangsetting av et prosjektarbeid er en alvorlig sak",
      "Det er kort veg fra ha-ha til a-ha !",
      "Kryssordvinnere 2/2000",
      "Reklame - vår tids mest leste litteratur&nbsp…",
    ],
  },

  '2-2000': {
    slug: '2-2000',
    nummer: '2/2000',
    år: 2000,
    bildeUrl: getLokalBildeUrl('2-2000'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_2000_2.pdf`,
    pdfFilnavn: `norsknytt_2000_2`,
    innhold: [
      "Tid for ny avgangsprøveKryssordvinnere 2000/1Når språket skrumper, skrumper virkelighetenRektor har ansvaret for den faglige kvaliteten på pensumlisteneMuntlig avgangsprøve i år 2000Dette har",
    ],
  },

  '1-2000': {
    slug: '1-2000',
    nummer: '1/2000',
    år: 2000,
    bildeUrl: getLokalBildeUrl('1-2000'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_2000_1.pdf`,
    pdfFilnavn: `norsknytt_2000_1`,
    innhold: [
      "Variasjon skjerper appetitten",
      "Kryssordvinnere - Norsknytt 4 - 1999",
      "Vær med og skap et godt undervisningsmiljøVurdering: God kommunikasjon er viktigst",
    ],
  },

  '4-1999': {
    slug: '4-1999',
    nummer: '4/1999',
    år: 1999,
    bildeUrl: getLokalBildeUrl('4-1999'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_1999_4.pdf`,
    pdfFilnavn: `norsknytt_1999_4`,
    innhold: [
      "Praktiser de nye avgangsprøveformene",
      "Bygg opp et metaordforråd",
      "Kryssordvinnere i Norsknytt 3-1999",
      "Lag ordkjeder med emneord",
      "Juleklippedikt",
      "«Eksamen skal prøve mer enn…",
    ],
  },

  '3-1999': {
    slug: '3-1999',
    nummer: '3/1999',
    år: 1999,
    bildeUrl: getLokalBildeUrl('3-1999'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_1999_3.pdf`,
    pdfFilnavn: `norsknytt_1999_3`,
    innhold: [
      "L97 for alle eleverKryssordløsninger 1999/2Nye prøveformerBrukssjangrene, sentrale på alle klassetrinnVi arbeider med brukssjangreneFra lærer til lærerSvapatipak, hva er det?Mokorep -",
    ],
  },

  '2-1999': {
    slug: '2-1999',
    nummer: '2/1999',
    år: 1999,
    bildeUrl: getLokalBildeUrl('2-1999'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_1999_2.pdf`,
    pdfFilnavn: `norsknytt_1999_2`,
    innhold: [
      "Gavepakker i norsk muntlig?Kryssordvinnere 1/1999\"Bruddstykke af en ligefrem Meddelelse»Tidslinje som tema- eller prosjektarbeid",
      "Muntlig kompetanse må vurderes ut fra muntlige",
    ],
  },

  '1-1999': {
    slug: '1-1999',
    nummer: '1/1999',
    år: 1999,
    bildeUrl: getLokalBildeUrl('1-1999'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_1999_1.pdf`,
    pdfFilnavn: `norsknytt_1999_1`,
    innhold: [
      "Vurdering er vanskeligKryssordvinnere 1998/4Kryssordløsning gir øving i skriftformingNorsknytt runder 25 årElevvurdering ut fra læreplanenes målKriterium for vurdering av skriftlig",
    ],
  },

  '4-1998': {
    slug: '4-1998',
    nummer: '4/1998',
    år: 1998,
    bildeUrl: getLokalBildeUrl('4-1998'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_1998_4.pdf`,
    pdfFilnavn: `norsknytt_1998_4`,
    innhold: [
      "Lær å stille spørsmålCD-ROM - skolens dataframtid?Skriv og tegn - samhandlingsoppgaverKryssordvinnere i Norsknytt 3 - 1998Ord om dikt og diktingOm å stille spørsmål i",
    ],
  },

  '3-1998': {
    slug: '3-1998',
    nummer: '3/1998',
    år: 1998,
    bildeUrl: getLokalBildeUrl('3-1998'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_1998_3.pdf`,
    pdfFilnavn: `norsknytt_1998_3`,
    innhold: [
      "Siste skoleår med M87, L97 overtarKryssordvinnere 2-1998Skolen skal styrke elevenes språklige selvtillitLykken står sentralt i 9. klasseSlik kan vi begynne med diktskrivingDikttoppen -",
    ],
  },

  '2-1998': {
    slug: '2-1998',
    nummer: '2/1998',
    år: 1998,
    bildeUrl: getLokalBildeUrl('2-1998'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_1998_2.pdf`,
    pdfFilnavn: `norsknytt_1998_2`,
    innhold: [
      "IT krever gode språklige ferdigheterKur mot nynorskhatKryssordvinnere 1-1998Vurdering av elevtekster på 8. trinnNasjonalt læremiddelsenter gir veiledning om IT i skolenProsjektarbeidØvingsark i",
    ],
  },

  '1-1998': {
    slug: '1-1998',
    nummer: '1/1998',
    år: 1998,
    bildeUrl: getLokalBildeUrl('1-1998'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_1998_1.pdf`,
    pdfFilnavn: `norsknytt_1998_1`,
    innhold: [
      "Ny læreplan, mange kurs og nye bøkerKryssordvinnere 4-1997Åtte sentrale punkter i norskplanen i L97Vurdering av norskarbeiderNorsk fordypning, tilvalgsfag»Godbitark» styrker elevenes",
    ],
  },

  '4-1997': {
    slug: '4-1997',
    nummer: '4/1997',
    år: 1997,
    bildeUrl: getLokalBildeUrl('4-1997'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_1997_4.pdf`,
    pdfFilnavn: `norsknytt_1997_4`,
    innhold: [
      "SkrivehjelpKryssordvinnere 3-1997\"- skrive for mottakarar utanfor klasserommet»Pop og rockDrama - en sentral aktivitetÅtte punkter for deg som vil bli en bedre skriverSkriv",
    ],
  },

  '3-1997': {
    slug: '3-1997',
    nummer: '3/1997',
    år: 1997,
    bildeUrl: getLokalBildeUrl('3-1997'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_1997_3.pdf`,
    pdfFilnavn: `norsknytt_1997_3`,
    innhold: [
      "Norsk er viktigere enn noen gang førKryssordvinnere 2-1997Smått og stort om språkProsjektarbeid - et nytt fag i ungdomsskolenGrundig planlegging er nødvendigOppgaver i",
    ],
  },

  '2-1997': {
    slug: '2-1997',
    nummer: '2/1997',
    år: 1997,
    bildeUrl: getLokalBildeUrl('2-1997'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_1997_2.pdf`,
    pdfFilnavn: `norsknytt_1997_2`,
    innhold: [
      "Norsk - skolens sentrale fag, også i L97Kryssordvinnere i Norsknytt 1-1997\"Morsmålet - krev ulike uttrykksformer og arbeidsmåtar»Sentrale punkter i L97Kjære",
    ],
  },

  '1-1997': {
    slug: '1-1997',
    nummer: '1/1997',
    år: 1997,
    bildeUrl: getLokalBildeUrl('1-1997'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_1997_1.pdf`,
    pdfFilnavn: `norsknytt_1997_1`,
    innhold: [
      "Fortellinga er livsviktig for menneskeneForfatterfellesskapetKryssordvinnere 4-1996Fortellinga står sentralt i den nye planen for 8. klasseFortellinga - den mest brukte sjangeren i",
    ],
  },

  '4-1996': {
    slug: '4-1996',
    nummer: '4/1996',
    år: 1996,
    bildeUrl: getLokalBildeUrl('4-1996'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_1996_4.pdf`,
    pdfFilnavn: `norsknytt_1996_4`,
    innhold: [
      "Arbeidsmåtene er sentrale i det nye norskfagetKryssordvinnere i Norsknytt 3-1996Sensorrettleiinga gir nyttig informasjon»Fordype seg i lesing» - «delta i litterær",
    ],
  },

  '3-1996': {
    slug: '3-1996',
    nummer: '3/1996',
    år: 1996,
    bildeUrl: getLokalBildeUrl('3-1996'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_1996_3.pdf`,
    pdfFilnavn: `norsknytt_1996_3`,
    innhold: [
      "Fornying av norskfagetKryssordvinnere i Norsknytt 2-1996Nytt om bøkerHva krever L97 av åttendeklassingene?Ungdomsromaner 1995 fanger samtidens signaler - del 2For Norsknytt av Cathrine",
    ],
  },

  '2-1996': {
    slug: '2-1996',
    nummer: '2/1996',
    år: 1996,
    bildeUrl: getLokalBildeUrl('2-1996'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_1996_2.pdf`,
    pdfFilnavn: `norsknytt_1996_2`,
    innhold: [
      "Det nye norskfagetKryssordvinnere i Norskkryss 1-1996Hva er nytt i det nye norskfaget?Ungdomsromaner 1995 fanger samtidens signalerFor Norsknytt av Cathrine SenjeVi snakker og skriver om",
    ],
  },

  '1-1996': {
    slug: '1-1996',
    nummer: '1/1996',
    år: 1996,
    bildeUrl: getLokalBildeUrl('1-1996'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_1996_1.pdf`,
    pdfFilnavn: `norsknytt_1996_1`,
    innhold: [
      "Aktive, kunnskapstørste elever fra 01.07.1977?Kryssordvinnere 4-1995Dreper datamaskinene en god håndskrift?Hvilke vitser ler du av? Et prosjekt om humorVitsetoppenVi undersøker, samtaler og",
    ],
  },

  '4-1995': {
    slug: '4-1995',
    nummer: '4/1995',
    år: 1995,
    bildeUrl: getLokalBildeUrl('4-1995'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_1995_4.pdf`,
    pdfFilnavn: `norsknytt_1995_4`,
    innhold: [
      "Norsk blir et fag igjenDel ideer med kolleger, det lønner segKryssordvinnere 3-1995Mange positive trekk ved L97 (høringsutkastet)Bildene i leseboka beriker teksteneRettskrivingsvedtak skaper",
    ],
  },

  '3-1995': {
    slug: '3-1995',
    nummer: '3/1995',
    år: 1995,
    bildeUrl: getLokalBildeUrl('3-1995'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_1995_3.pdf`,
    pdfFilnavn: `norsknytt_1995_3`,
    innhold: [
      "Høringsutkastet til læreplan i norsk presenterer et omfattende «pensum»Premievinnere, kryssord i Norsknytt 2-1995Du skal få en plan i «mårå» (1997)Høringsutkast til",
    ],
  },

  '2-1995': {
    slug: '2-1995',
    nummer: '2/1995',
    år: 1995,
    bildeUrl: getLokalBildeUrl('2-1995'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_1995_2.pdf`,
    pdfFilnavn: `norsknytt_1995_2`,
    innhold: [
      "«Fins det forfatter som lever i dag, lærer?»Egen karakter i norsk muntlig?Kryssordvinnere 1-1995Sagt om norskundervisning og norsk språkAvgangsprøva virker styrende på",
    ],
  },

  '1-1995': {
    slug: '1-1995',
    nummer: '1/1995',
    år: 1995,
    bildeUrl: getLokalBildeUrl('1-1995'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_1995_1.pdf`,
    pdfFilnavn: `norsknytt_1995_1`,
    innhold: [
      "Reklame - vår tids mest leste litteraturRollespill forebygger mobbingPremievinnere, kryssord i Norsknytt 4-1994\"Ideboka mi» - ei bok som gir varig glede»Nytt»",
    ],
  },

  '4-1994': {
    slug: '4-1994',
    nummer: '4/1994',
    år: 1994,
    bildeUrl: getLokalBildeUrl('4-1994'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_1994_4.pdf`,
    pdfFilnavn: `norsknytt_1994_4`,
    innhold: [
      "La elevene få del i fortellerfellesskapetKryssordvinnere 3-1994Apropos igangsettere for skriving: Perioden som ble til en «murstein»En liten påminning: Du har mer enn 300 000 ord å",
    ],
  },

  '3-1994': {
    slug: '3-1994',
    nummer: '3/1994',
    år: 1994,
    bildeUrl: getLokalBildeUrl('3-1994'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_1994_3.pdf`,
    pdfFilnavn: `norsknytt_1994_3`,
    innhold: [
      "Om å undre seg over språketNorsknytt takker for gratulasjoner til 20-årsjubileetKryssordvinnere 2-1994Brukssjangrene må få større plass i norskfagetSkrivemodellerVi arbeider med",
    ],
  },

  '2-1994': {
    slug: '2-1994',
    nummer: '2/1994',
    år: 1994,
    bildeUrl: getLokalBildeUrl('2-1994'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_1994_2.pdf`,
    pdfFilnavn: `norsknytt_1994_2`,
    innhold: [
      "Beskriv de «ubeskrivelige» gyldne øyeblikkeneKryssordvinnere 1-1994Lag først et tankekartEr det tillatt å bruke orda betennelse og gebursdag på nynorsk?Nynorsk og bokmål er varianter",
    ],
  },

  '1-1994': {
    slug: '1-1994',
    nummer: '1/1994',
    år: 1994,
    bildeUrl: getLokalBildeUrl('1-1994'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_1994_1.pdf`,
    pdfFilnavn: `norsknytt_1994_1`,
    innhold: [
      "Norsk er det mest belastende undervisningsfagetNorsknytt runder 20 år»Norskfaget er kjent som en riktig rotebutikk, der likt og ulikt er dyttet inn i hyllene.»Kryssordvinnere i nr",
    ],
  },

  '4-1993': {
    slug: '4-1993',
    nummer: '4/1993',
    år: 1993,
    bildeUrl: getLokalBildeUrl('4-1993'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_1993_4.pdf`,
    pdfFilnavn: `norsknytt_1993_4`,
    innhold: [
      "Norsk før og nåKryssordvinnere 3-1993Ord om dikt og diktingMer humor i norskfagetBruk det rike utvalg av «scenesjangrer»Les noen få ord - så kjenner du sjangerenFyll ut",
    ],
  },

  '3-1993': {
    slug: '3-1993',
    nummer: '3/1993',
    år: 1993,
    bildeUrl: getLokalBildeUrl('3-1993'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_1993_3.pdf`,
    pdfFilnavn: `norsknytt_1993_3`,
    innhold: [
      "Overvurderer vi elevenes ordforståelse?Kryssordvinnere 2-1993Om skole og norskfagetAvgangsprøvene 1993 - variert og krevendeElevene må venne seg til å bruke ordbøker og",
    ],
  },

  '2-1993': {
    slug: '2-1993',
    nummer: '2/1993',
    år: 1993,
    bildeUrl: getLokalBildeUrl('2-1993'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_1993_2.pdf`,
    pdfFilnavn: `norsknytt_1993_2`,
    innhold: [
      "Skrivingens gode sirkelKryssordvinnere 1-1993Sagt om norsk språk»Ikke gi barn og unge det som de i øyeblikket roper høyest om, de fortjener å ha noe mer verdifullt.»Å skrive er et",
    ],
  },

  '1-1993': {
    slug: '1-1993',
    nummer: '1/1993',
    år: 1993,
    bildeUrl: getLokalBildeUrl('1-1993'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_1993_1.pdf`,
    pdfFilnavn: `norsknytt_1993_1`,
    innhold: [
      "Skolene må ta aktivt del i bokåret 1993Kryssordvinnere 4-1992Hulter til bulter-historierRåd fra forfattere: Les,les, les! Skriv, skriv, skriv!Lær av Ludvig Holberg - skriv en monologLær av",
    ],
  },

  '4-1992': {
    slug: '4-1992',
    nummer: '4/1992',
    år: 1992,
    bildeUrl: getLokalBildeUrl('4-1992'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_1992_4.pdf`,
    pdfFilnavn: `norsknytt_1992_4`,
    innhold: [
      "«Fortellinga er livsviktig for menneskene»Tentamen i norsk muntligKryssordvinnere 3-1992Fortellinga - den mest brukte sjangeren i skolenEksempeltekst: Skumle lyder fra",
    ],
  },

  '3-1992': {
    slug: '3-1992',
    nummer: '3/1992',
    år: 1992,
    bildeUrl: getLokalBildeUrl('3-1992'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_1992_3.pdf`,
    pdfFilnavn: `norsknytt_1992_3`,
    innhold: [
      "Skolen skal styrke og utvikle elevenes språklige selvtillitAvgangsprøva 1992 spør etter sjangerkunnskap, litteraturhistorie og språkhistorieKryssordvinnere 2-1992Sjangerskrivebøkene er kommetTipp",
    ],
  },

  '2-1992': {
    slug: '2-1992',
    nummer: '2/1992',
    år: 1992,
    bildeUrl: getLokalBildeUrl('2-1992'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_1992_2.pdf`,
    pdfFilnavn: `norsknytt_1992_2`,
    innhold: [
      "Hefter fra Grunnskolerådet gir lærerne hjelp i vurderingsarbeidet i norskfaget»Hjelp til vurdering av skriftlige norskbesvarelser»»Muntlig avgangsprøve i",
    ],
  },

  '1-1992': {
    slug: '1-1992',
    nummer: '1/1992',
    år: 1992,
    bildeUrl: getLokalBildeUrl('1-1992'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_1992_1.pdf`,
    pdfFilnavn: `norsknytt_1992_1`,
    innhold: [
      "«Skolebiblioteket er selve hjertet i skolen»Kryssordvinnere 3-199112 arbeidsark om bøker og bibliotekTegn bokas forsideViktige sider i ei bok - når du skal gjøre deg kjent med",
    ],
  },

  '3-1991': {
    slug: '3-1991',
    nummer: '3/1991',
    år: 1991,
    bildeUrl: getLokalBildeUrl('3-1991'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_1991_3.pdf`,
    pdfFilnavn: `norsknytt_1991_3`,
    innhold: [
      "Skriving, en sentral aktivitetKryssordvinnere 2-1991Skriv et brev til deg selvSatsing på grannespråk er satsing på eget morsmålGrannespråkundervisninga må styrkes. Hva kan gjøres?Sjangerslektskap",
    ],
  },

  '2-1991': {
    slug: '2-1991',
    nummer: '2/1991',
    år: 1991,
    bildeUrl: getLokalBildeUrl('2-1991'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_1991_2.pdf`,
    pdfFilnavn: `norsknytt_1991_2`,
    innhold: [
      "Norsknytt jubilerer - dette er blad nr 50Tillatt å bruke ordliste også ved avgangsprøven i norsk hovedmålBruk av bilder i norskundervisningaUndervisningsopplegg ved Ragnhild BayDiktskriving",
    ],
  },

  '1-1991': {
    slug: '1-1991',
    nummer: '1/1991',
    år: 1991,
    bildeUrl: getLokalBildeUrl('1-1991'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_1991_1.pdf`,
    pdfFilnavn: `norsknytt_1991_1`,
    innhold: [
      "En million timer til stilretting - bortkastet arbeidstid?Kryssordvinnere 3-1990Sagt om norskundervisning, sagt om det å skriveIkke begynn med begynnelsenDikt blir skuespillAvisnotisen",
    ],
  },

  '3-1990': {
    slug: '3-1990',
    nummer: '3/1990',
    år: 1990,
    bildeUrl: getLokalBildeUrl('3-1990'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_1990_3.pdf`,
    pdfFilnavn: `norsknytt_1990_3`,
    innhold: [
      "Nye avgangsprøver mer krevende enn de gamleGrunnskolerådet: Forhåndssensur 1990, utdragKryssordvinnere 2-1990Øvingssjangrer trimmer spesielle språkferdigheterSkriv en 50-stubbHunden min er kommet",
    ],
  },

  '2-1990': {
    slug: '2-1990',
    nummer: '2/1990',
    år: 1990,
    bildeUrl: getLokalBildeUrl('2-1990'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_1990_2.pdf`,
    pdfFilnavn: `norsknytt_1990_2`,
    innhold: [
      "«Man lærer å skrive ved å lese - «Kryssordvinnere 1-1990To feriedikt - uten adjektivLitteraturen står sentralt i norskfagetProsessorientert skriving gir skrivegledeForslag",
    ],
  },

  '1-1990': {
    slug: '1-1990',
    nummer: '1/1990',
    år: 1990,
    bildeUrl: getLokalBildeUrl('1-1990'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_1990_1.pdf`,
    pdfFilnavn: `norsknytt_1990_1`,
    innhold: [
      "LederKryssordvinnere 3-1989Hulter til bulter-oppgaverSkolen må styrke elevenes språktillitStilen er død - sjangrene overtarSjangerplakatenTipp sjangerSlektskap mellom sjangreneSkriv en",
    ],
  },

  '3-1989': {
    slug: '3-1989',
    nummer: '3/1989',
    år: 1989,
    bildeUrl: getLokalBildeUrl('3-1989'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_1989_3.pdf`,
    pdfFilnavn: `norsknytt_1989_3`,
    innhold: [
      "Norsk - mange delemner - få timerKryssordvinnere 2-1989Hulter til bulter-historierBruk fantasien - fortellLes essay - skriv essaySkriv om noe som (nesten) ikke kan",
    ],
  },

  '2-1989': {
    slug: '2-1989',
    nummer: '2/1989',
    år: 1989,
    bildeUrl: getLokalBildeUrl('2-1989'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_1989_2.pdf`,
    pdfFilnavn: `norsknytt_1989_2`,
    innhold: [
      "Hvorfor står ikke basisfaget norsk øverst på «fagtoppen»?Kryssordvinnere 1-1989Ord som hører sammen - utfyllingsoppgaveFri skriving skal ha en sentral plassBoka om meg",
    ],
  },

  '1-1989': {
    slug: '1-1989',
    nummer: '1/1989',
    år: 1989,
    bildeUrl: getLokalBildeUrl('1-1989'),
    pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_1989_1.pdf`,
    pdfFilnavn: `norsknytt_1989_1`,
    innhold: [
      "Norskfaget - et aktuelt læremiddel i tidsskriftformAvgangsprøve etter M87 våren 1989Sjangerkunnskap - en god hjelperSkriv korttekster i mange sjangreLær av Ludvig Holberg: Skriv en",
    ],
  },

  };

// Generer placeholder for alle utgaver som ikke har fullstendig data
const alleUtgaverFraArkiv = [
  // 2010-2021 (kolonne 1) - fjernet 4-2013, 2-3-2016, 3-4-2019 (finnes ikke)
  '1-2010', '2-2010', '3-2010', '4-2010',
  '1-2-2011', '3-4-2011',
  '1-2012', '2-2012', '3-4-2012',
  '1-2-2013', '3-2013',
  '1-2-2014', '3-4-2014',
  '1-2015', '2-2015', '3-4-2015',
  '1-2016', '4-2016',
  '1-2017', '2-3-2017', '4-2017',
  '1-2018', '2-3-2018', '4-2018',
  '1-2-2019',
  '1-2-2021',
  // 2000-2009 (kolonne 2)
  '1-2000', '2-2000', '3-2000', '4-2000',
  '1-2001', '2-2001', '3-2001', '4-2001',
  '1-2002', '2-2002', '3-2002', '4-2002',
  '1-2003', '2-2003', '3-2003', '4-2003',
  '1-2004', '2-2004', '3-2004', '4-2004',
  '1-2005', '2-2005', '3-2005', '4-2005',
  '1-2006', '2-2006', '3-2006', '4-2006',
  '1-2007', '2-2007', '3-4-2007',
  '1-2008', '2-2008', '3-2008', '4-2008',
  '1-2-2009', '3-2009', '4-2009',
  // 1989-1999 (kolonne 3)
  '1-1989', '2-1989', '3-1989',
  '1-1990', '2-1990', '3-1990',
  '1-1991', '2-1991', '3-1991',
  '1-1992', '2-1992', '3-1992', '4-1992',
  '1-1993', '2-1993', '3-1993', '4-1993',
  '1-1994', '2-1994', '3-1994', '4-1994',
  '1-1995', '2-1995', '3-1995', '4-1995',
  '1-1996', '2-1996', '3-1996', '4-1996',
  '1-1997', '2-1997', '3-1997', '4-1997',
  '1-1998', '2-1998', '3-1998', '4-1998',
  '1-1999', '2-1999', '3-1999', '4-1999',
];

// Fyll inn manglende utgaver med placeholder-data
for (const slug of alleUtgaverFraArkiv) {
  if (!utgaver[slug]) {
    // Parse slug til nummer og ar
    const match = slug.match(/^(\d+(?:-\d+)?)-(\d{4})$/);
    if (match) {
      const nummerDel = match[1];
      const år = parseInt(match[2]);
      const nummerVisning = nummerDel.replace('-', '-') + '/' + år;
      
      // Beregn PDF-filnavn basert på konvensjon
      const pdfNummer = `${år}_${nummerDel.replace('-', '_')}`;
      
      utgaver[slug] = {
        slug,
        nummer: nummerVisning,
        år,
        bildeUrl: getLokalBildeUrl(slug),
        pdfUrl: `https://norsknytt.no/wp-content/uploads/2019/09/norsknytt_${pdfNummer}.pdf`,
        pdfFilnavn: `norsknytt_${pdfNummer}`,
        innhold: [
          `Innhold for ${nummerVisning} - data mangler`,
        ],
      };
    }
  }
}

export function getUtgave(slug: string): Utgave | undefined {
  return utgaver[slug];
}

export function getAlleSlugs(): string[] {
  return Object.keys(utgaver);
}
