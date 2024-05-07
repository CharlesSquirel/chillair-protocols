interface ChillairInfo {
  name: string;
  street: string;
  postCode: string;
  city: string;
  nip: string;
  contactEmail: string;
  tel: string;
  krs: string;
  extraAddressInfo: string;
}

export const chillairInfo: ChillairInfo = {
  name: "ChillAir Serwis sp. z o.o.",
  street: "Jagiellonska 88",
  postCode: "00-992",
  city: "Warszawa",
  nip: "524-294-64-56",
  contactEmail: "biuro@chillair.pl",
  tel: "+48 888 091 568",
  krs: "0000983928",
  extraAddressInfo: "(budynek 51BC, lok.33)",
};

export const PROTOCOL_INFO =
  "zgodnie z Rozporządzeniem Komisji (WE) NR 1516/2007 z dnia 19 grudnia 2007 r. ustanawiające zgodnie z rozporządzeniem WE nr 842/2006 Parlamentu Europejskiego i Rady standardowe wymogi w zakresie kontroli szczelności w odniesieniu do stacjonarnych urządzeń chłodniczych i klimatyzacyjnych oraz pomp ciepła zawierających niektóre fluorowane gazy cieplarniane";
