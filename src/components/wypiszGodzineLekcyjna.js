export function wypiszGodzineLekcyjna(aktualnaGodzina, dzwonki) {
  const godzinaLekcyjna = [];
  godzinaLekcyjna[1] = aktualnaGodzina > "0:00" && aktualnaGodzina > "18:30" && aktualnaGodzina < dzwonki[0];
  godzinaLekcyjna[2] = aktualnaGodzina >= dzwonki[0] && aktualnaGodzina < dzwonki[2];
  godzinaLekcyjna[3] = aktualnaGodzina >= dzwonki[2] && aktualnaGodzina < dzwonki[4];
  godzinaLekcyjna[4] = aktualnaGodzina >= dzwonki[4] && aktualnaGodzina < dzwonki[6];
  godzinaLekcyjna[5] = (aktualnaGodzina >= "9:45" && aktualnaGodzina < "9:59.99") || (aktualnaGodzina > "10:00" && aktualnaGodzina < dzwonki[8]);
  godzinaLekcyjna[6] = aktualnaGodzina >= dzwonki[8] && aktualnaGodzina < dzwonki[10];
  godzinaLekcyjna[7] = aktualnaGodzina >= dzwonki[10] && aktualnaGodzina < dzwonki[12];
  godzinaLekcyjna[8] = aktualnaGodzina >= dzwonki[12] && aktualnaGodzina < dzwonki[14];
  godzinaLekcyjna[9] = aktualnaGodzina >= dzwonki[14] && aktualnaGodzina < dzwonki[16];
  godzinaLekcyjna[10] = aktualnaGodzina >= dzwonki[16] && aktualnaGodzina < dzwonki[18];
  godzinaLekcyjna[11] = aktualnaGodzina >= dzwonki[18] && aktualnaGodzina < dzwonki[20];
  godzinaLekcyjna[12] = aktualnaGodzina >= dzwonki[20] && aktualnaGodzina < dzwonki[22];
  godzinaLekcyjna[13] = aktualnaGodzina >= dzwonki[22] && aktualnaGodzina < dzwonki[24];
  return godzinaLekcyjna;
}
