export class Country {
  constructor(
    public name: {
      common: string;
      official: string;
      nativeName: {
        spa: {
          official: string;
          common: string;
        };
      };
    },
    public capital: Array<string>,
    public region: string,
    public area: number,
    public population: number,
    public continetns: Array<string>,
    public flags: {
      png: string;
      svg: string;
      alt?: string;
    },
    public languages?: {
      eng?: string;
      zho?: string;
      sin?: string;
      tam?: string;
      spa?: string;
      ara?: string;
      nld?: string;
      sqi?: string;
      srp?: string;
      mkd?: string;
      fra?: string;
      kin?: string;
      nau?: string;
      ind?: string;
      kon?: string;
      lin?: string;
      lua?: string;
      swa?: string;
      grn?: string;
      slv?: string;
      sot?: string;
      bwg?: string;
      kck?: string;
      khi?: string;
      ndc?: string;
      nde?: string;
      nya?: string;
      sna?: string;
      toi?: string;
      tsn?: string;
      tso?: string;
      ven?: string;
      xho?: string;
      zib?: string;
      nno?: string;
      nob?: string;
      smi?: string;
      nfr?: string;
      pap?: string;
      sag?: string;
      deu?: string;
      ltz?: string;
      ita?: string;
      hin?: string;
      lao?: string;
      tha?: string;
      mya?: string;
      gsw?: string;
      roh?: string;
      pau?: string;
      isl?: string;
      kaz?: string;
      rus?: string;
      gil?: string;
      tur?: string;
      ell?: string;
      tir?: string;
      lat?: string;
      rar?: string;
      som?: string;
      tuk?: string;
      hrv?: string;
      por?: string;
      tet?: string;
      aze?: string;
      smo?: string;
      vie?: string;
      prs?: string;
      pus?: string;
      lav?: string;
      kir?: string;
      pol?: string;
      cha?: string;
      lit?: string;
      hye?: string;
      nrf?: string;
      tgk?: string;
      amh?: string;
      ber?: string;
      mey?: string;
      mri?: string;
      nzs?: string;
      msa?: string;
      niu?: string;
      ron?: string;
      nor?: string;
      bel?: string;
      ces?: string;
      slk?: string;
      urd?: string;
      aym?: string;
      que?: string;
      kal?: string;
      hun?: string;
      zdj?: string;
      ben?: string;
      tkl?: string;
      fij?: string;
      hif?: string;
      div?: string;
      cat?: string;
      eus?: string;
      glc?: string;
      gle?: string;
      est?: string;
      afr?: string;
      nbl?: string;
      nso?: string;
      ssw?: string;
      zul?: string;
      bis?: string;
      fin?: string;
      swe?: string;
      pih?: string;
      bjz?: string;
      mon?: string;
      tvl?: string;
      nep?: string;
      bul?: string;
      glv?: string;
      dzo?: string;
      khm?: string;
      hat?: string;
      kat?: string;
      run?: string;
      mfe?: string;
      hmo?: string;
      tpi?: string;
      heb?: string;
      ton?: string;
      uzb?: string;
      mlg?: string;
      mah?: string;
      crs?: string;
      jpn?: string;
      fas?: string;
      mlt?: string;
      kor?: string;
      jam?: string;
      dan?: string;
      fil?: string;
      de?: string;
      pov?: string;
      her?: string;
      hgm?: string;
      kwn?: string;
      loz?: string;
      ndo?: string;
      bos?: string;
      cnr?: string;
      cal?: string;
      ukr?: string;
      arc?: string;
      ckb?: string;
      fao?: string;
    }
  ) {}

  get nameCountry() {
    return `${this.name.common}`;
  }
}

export const loadCountries = async (language: string) => {
  const response = await fetch(`https://restcountries.com/v3.1/lang/${language}`);
  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }
  const results = (await response.json()) as Array<any>;
  const countries: Array<Country> = [];
  for (const { name, capital, region, area, population, continents, flags, languages } of results) {
    countries.push(
      new Country(name, capital, region, area, population, continents, flags, languages)
    );
  }
  return countries;
};
