export function schedule() {
  const schoolBell = [
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

  const monday = [];
  monday[1] = "";
  monday[2] = "";
  monday[3] = "";
  monday[4] = "";
  monday[5] = "";
  monday[6] = "";
  monday[7] = "7. Math (33s)";
  monday[8] = "8. Math (33s)";
  monday[9] = "9. History (33s)";
  monday[10] = "";
  monday[11] = "";
  monday[12] = "";
  monday[13] = "";

  const tuesday = [];
  tuesday[1] = "1. PE (23s)";
  tuesday[2] = "2. PE (23s)";
  tuesday[3] = "3. PE (23s)";
  tuesday[4] = "4. Math (12s)";
  tuesday[5] = "5. Math (12s)";
  tuesday[6] = "6. Polish (12s)";
  tuesday[7] = "7. Polish (12s)";
  tuesday[8] = "";
  tuesday[9] = "";
  tuesday[10] = "";
  tuesday[11] = "";
  tuesday[12] = "";
  tuesday[13] = "";

  const wednesday = [];
  wednesday[1] = "";
  wednesday[2] = "";
  wednesday[3] = "3. Homeroom hour (320)";
  wednesday[4] = "4. Python (305)";
  wednesday[5] = "5. Python (305)";
  wednesday[6] = "6. German (102)";
  wednesday[7] = "7. Python (305)";
  wednesday[8] = "8. Python (305)";
  wednesday[9] = "9. Python (305)";
  wednesday[10] = "";
  wednesday[11] = "";
  wednesday[12] = "";
  wednesday[13] = "";

  const thursday = [];
  thursday[1] = "";
  thursday[2] = "";
  thursday[3] = "";
  thursday[4] = "";
  thursday[5] = "";
  thursday[6] = "Python (305)";
  thursday[7] = "Python (305)";
  thursday[8] = "English (103)";
  thursday[9] = "English (103)";
  thursday[10] = "";
  thursday[11] = "";
  thursday[12] = "";
  thursday[13] = "";

  const friday = [];
  friday[1] = "1. Civic studies (31s)";
  friday[2] = "2. Polish (31s)";
  friday[3] = "3. Polish (31s)";
  friday[4] = "4. Polish (31s)";
  friday[5] = "5. Math (31s)";
  friday[6] = "6. Religious education (16s)"
  friday[7] = "7. Math (31s)";
  friday[8] = "";
  friday[9] = "";
  friday[10] = "";
  friday[11] = "";
  friday[12] = "";
  friday[13] = "";

  const saturday = [];
  saturday[1] = "";
  saturday[2] = "";
  saturday[3] = "";
  saturday[4] = "";
  saturday[5] = "";
  saturday[6] = "";
  saturday[7] = "";
  saturday[8] = "";
  saturday[9] = "";
  saturday[10] = "";
  saturday[11] = "";
  saturday[12] = "";
  saturday[13] = "";


  return { schoolBell, monday, tuesday, wednesday, thursday, friday, saturday };
}
