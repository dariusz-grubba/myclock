export function currentLesson(currentTime, schoolBells) {
  const lessonTime = [];
  lessonTime[1] = currentTime > "0:00" && currentTime > "18:30" && currentTime < schoolBells[0];
  lessonTime[2] = currentTime >= schoolBells[0] && currentTime < schoolBells[2];
  lessonTime[3] = currentTime >= schoolBells[2] && currentTime < schoolBells[4];
  lessonTime[4] = currentTime >= schoolBells[4] && currentTime < schoolBells[6];
  lessonTime[5] = (currentTime >= "9:45" && currentTime < "9:59.99") || (currentTime > "10:00" && currentTime < schoolBells[8]);
  lessonTime[6] = currentTime >= schoolBells[8] && currentTime < schoolBells[10];
  lessonTime[7] = currentTime >= schoolBells[10] && currentTime < schoolBells[12];
  lessonTime[8] = currentTime >= schoolBells[12] && currentTime < schoolBells[14];
  lessonTime[9] = currentTime >= schoolBells[14] && currentTime < schoolBells[16];
  lessonTime[10] = currentTime >= schoolBells[16] && currentTime < schoolBells[18];
  lessonTime[11] = currentTime >= schoolBells[18] && currentTime < schoolBells[20];
  lessonTime[12] = currentTime >= schoolBells[20] && currentTime < schoolBells[22];
  lessonTime[13] = currentTime >= schoolBells[22] && currentTime < schoolBells[24];
  return lessonTime;
}
