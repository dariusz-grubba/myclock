export function planLekcji() {
  const dzwonki = [
    "7:10", "7:55",
    "8:00", "8:45",
    "8:50", "9:35",
    "9:45", "10:30",
    "10:45", "11:30",
    "11:40", "12:25",
    "12:35", "13:20",
    "13:25", "14:10",
    "14:15", "15:00",
    "15:10", "15:55",
    "16:05", "16:50",
    "16:55", "17:40",
    "17:45", "18:30"
  ];

  const poniedzialek = [];
  poniedzialek[0] = "";
  poniedzialek[1] = "";
  poniedzialek[2] = "";
  poniedzialek[3] = "";
  poniedzialek[4] = "";
  poniedzialek[5] = "";
  poniedzialek[6] = "";
  poniedzialek[7] = "";
  poniedzialek[8] = "";
  poniedzialek[9] = "";
  poniedzialek[10] = "";
  poniedzialek[11] = "";
  poniedzialek[12] = "";
  poniedzialek[13] = "";

  const wtorek = [];
  wtorek[1] = "";
  wtorek[2] = "";
  wtorek[3] = "";
  wtorek[4] = "4. Matematyka (s.207)";
  wtorek[5] = "5. Matematyka (s.207)";
  wtorek[6] = "6. Język angielski (s.103)";
  wtorek[7] = "7. Programowanie aplikacji (s.214)";
  wtorek[8] = "8. Pracownia programowania aplikacji (s.214)";
  wtorek[9] = "9. Programowanie aplikacji (s.214)";
  wtorek[10] = "10. Pracownia programowania aplikacji (s.214)";
  wtorek[11] = "11. Pracownia programowania aplikacji (s.214)";
  wtorek[12] = "";
  wtorek[13] = "";

  const sroda = [];
  sroda[1] = "";
  sroda[2] = "";
  sroda[3] = "3. Język polski (s.219)";
  sroda[4] = "4. Biologia (s.208)";
  sroda[5] = "5. Wychowanie fizyczne (s.sg4)";
  sroda[6] = "6. Wychowanie fizyczne (s.sg4)";
  sroda[7] = "7. Wychowanie fizyczne (s.sg4)";
  sroda[8] = "8. Fizyka (s.002)";
  sroda[9] = "9. Religia (s.306)";
  sroda[10] = "";
  sroda[11] = "";
  sroda[12] = "";
  sroda[13] = "";

  const czwartek = [];
  czwartek[1] = "1. Religia (s.320)";
  czwartek[2] = "2. Matematyka (s.207)";
  czwartek[3] = "3. Geografia (s.204)";
  czwartek[4] = "4. Testowanie aplikacji (s.320)";
  czwartek[5] = "5. Język niemiecki (s.215)";
  czwartek[6] = "";
  czwartek[7] = "";
  czwartek[8] = "";
  czwartek[9] = "";
  czwartek[10] = "";
  czwartek[11] = "";
  czwartek[12] = "";
  czwartek[13] = "";

  const piatek = [];
  piatek[1] = "1. Programowanie aplikacji (s.305)";
  piatek[2] = "2. Pracowania programowania aplikacji (s.305)";
  piatek[3] = "3. Testowanie aplikacji (s.320)";
  piatek[4] = "4. Język polski (s.219)";
  piatek[5] = "5. Język polski (s.219)";
  piatek[6] = "6. Chemia (s.319)";
  piatek[7] = "7. Wiedza o społeczeństwie (s.201)";
  piatek[8] = "8. Testowanie aplikacji (s.320)";
  piatek[9] = "9. Matematyka (s.207)";
  piatek[10] = "10. Historia (s.201)";
  piatek[11] = "";
  piatek[12] = "";
  piatek[13] = "";

  const sobota = [];
  sobota[1] = "";
  sobota[2] = "2. Matematyka (s.207)";
  sobota[3] = "3. Język angielski (s.103)";
  sobota[4] = "4. Język angielski (s.103)";
  sobota[5] = "5. Pracownia programowania aplikacji (s.320)";
  sobota[6] = "6. Pracownia programowania aplikacji (s.320)";
  sobota[7] = "7. Programowanie aplikacji (s.320)";
  sobota[8] = "8. Zajęcia z wychowawcą (s.320)";
  sobota[9] = "";
  sobota[10] = "";
  sobota[11] = "";
  sobota[12] = "";
  sobota[13] = "";


  return { dzwonki, poniedzialek, wtorek, sroda, czwartek, piatek, sobota };
}
