export function wszystkieDzwonki(aTeraz, dzwonki, bTeraz, start) {
    if (aTeraz === dzwonki[1].slice(0, 1) && bTeraz >= dzwonki[0].slice(2, 4) && bTeraz < dzwonki[1].slice(2, 4)) {
        start.setHours(dzwonki[1].slice(0, 1), dzwonki[1].slice(2, 4), 0);
    } else if (aTeraz === dzwonki[1].slice(0, 1) && bTeraz < 59.99 && bTeraz >= dzwonki[1].slice(2, 4)) {
        start.setHours(dzwonki[2].slice(0, 1), dzwonki[2].slice(2, 3), 0);
    } else if (aTeraz === dzwonki[3].slice(0, 1) && bTeraz > dzwonki[2].slice(2, 3) && bTeraz < dzwonki[3].slice(2, 4)) {
        start.setHours(dzwonki[3].slice(0, 1), dzwonki[3].slice(2, 4), 0);
    } else if (aTeraz === dzwonki[4].slice(0, 1) && bTeraz >= dzwonki[3].slice(2, 4) && bTeraz < dzwonki[4].slice(2, 4)) {
        start.setHours(dzwonki[3].slice(0, 1), dzwonki[4].slice(2, 4), 0);
    } else if ((aTeraz === dzwonki[4].slice(0, 1) && bTeraz >= dzwonki[4].slice(2, 4) && bTeraz < 59.99) || (aTeraz === dzwonki[5].slice(0, 1) && bTeraz >= 0 && bTeraz < dzwonki[5].slice(2, 4))) {
        start.setHours(dzwonki[5].slice(0, 1), dzwonki[5].slice(2, 4), 0);
    } else if (aTeraz === dzwonki[6].slice(0, 1) && bTeraz >= dzwonki[5].slice(2, 4) && bTeraz < dzwonki[6].slice(2, 4)) {
        start.setHours(dzwonki[6].slice(0, 1), dzwonki[6].slice(2, 4), 0);
    } else if ((aTeraz === dzwonki[6].slice(0, 1) && bTeraz >= dzwonki[6].slice(2, 4) && bTeraz < 59.99) || (aTeraz === dzwonki[7].slice(0, 2) && bTeraz >= 0 && bTeraz < dzwonki[7].slice(3, 5))) {
        start.setHours(dzwonki[7].slice(0, 2), dzwonki[7].slice(3, 5), 0);
    } else if (aTeraz === dzwonki[8].slice(0, 2) && bTeraz >= dzwonki[7].slice(3, 5) && bTeraz < dzwonki[8].slice(3, 5)) {
        start.setHours(dzwonki[8].slice(0, 2), dzwonki[8].slice(3, 5), 0);
    } else if ((aTeraz === dzwonki[8].slice(0, 2) && bTeraz >= dzwonki[8].slice(3, 5) && bTeraz < 59.99) || (aTeraz === dzwonki[9].slice(0, 2) && bTeraz >= 0 && bTeraz < dzwonki[9].slice(3, 5))) {
        start.setHours(dzwonki[9].slice(0, 2), dzwonki[9].slice(3, 5), 0);
    } else if (aTeraz === dzwonki[9].slice(0, 2) && bTeraz >= dzwonki[9].slice(3, 5) && bTeraz < dzwonki[10].slice(3, 5)) {
        start.setHours(dzwonki[10].slice(0, 2), dzwonki[10].slice(3, 5), 0);
    } else if ((aTeraz === dzwonki[10].slice(0, 2) && bTeraz >= dzwonki[10].slice(3, 5) && bTeraz < 59.99) || (aTeraz === dzwonki[11].slice(0, 2) && bTeraz >= 0 && bTeraz < dzwonki[11].slice(3, 5))) {
        start.setHours(dzwonki[11].slice(0, 2), dzwonki[11].slice(3, 5), 0);
    } else if (aTeraz === dzwonki[11].slice(0, 2) && bTeraz >= dzwonki[11].slice(3, 5) && bTeraz < dzwonki[12].slice(3, 5)) {
        start.setHours(dzwonki[12].slice(0, 2), dzwonki[12].slice(3, 5), 0);
    } else if ((aTeraz === dzwonki[12].slice(0, 2) && bTeraz >= dzwonki[12].slice(3, 5) && bTeraz < 59.99) || (aTeraz === dzwonki[13].slice(0, 2) && bTeraz >= 0 && bTeraz < dzwonki[13].slice(3, 5))) {
        start.setHours(dzwonki[13].slice(0, 2), dzwonki[13].slice(3, 5), 0);
    } else if (aTeraz === dzwonki[13].slice(0, 2) && bTeraz >= dzwonki[13].slice(3, 5) && bTeraz < dzwonki[14].slice(3, 5)) {
        start.setHours(dzwonki[14].slice(0, 2), dzwonki[14].slice(3, 5), 0);
    } else if ((aTeraz === dzwonki[14].slice(0, 2) && bTeraz >= dzwonki[14].slice(3, 5) && bTeraz < 59.99) || (aTeraz === dzwonki[15].slice(0, 2) && bTeraz >= 0 && bTeraz < dzwonki[15].slice(3, 5))) {
        start.setHours(dzwonki[15].slice(0, 2), dzwonki[15].slice(3, 5), 0);
    } else if (aTeraz === dzwonki[15].slice(0, 2) && bTeraz >= dzwonki[15].slice(3, 5) && bTeraz < dzwonki[16].slice(3, 5)) {
        start.setHours(dzwonki[16].slice(0, 2), dzwonki[16].slice(3, 5), 0);
    } else if (aTeraz === dzwonki[16].slice(0, 2) && bTeraz < 59.99 && bTeraz >= dzwonki[16].slice(3, 5)) {
        start.setHours(dzwonki[17].slice(0, 2), dzwonki[17].slice(3, 4), 0);
    } else if (aTeraz === dzwonki[17].slice(0, 2) && bTeraz >= 0 && bTeraz < dzwonki[18].slice(3, 5)) {
        start.setHours(dzwonki[18].slice(0, 2), dzwonki[18].slice(3, 5), 0);
    } else if (aTeraz === dzwonki[19].slice(0, 2) && bTeraz >= dzwonki[18].slice(3, 5) && bTeraz < dzwonki[19].slice(3, 5)) {
        start.setHours(dzwonki[19].slice(0, 2), dzwonki[19].slice(3, 5), 0);
    } else if ((aTeraz === dzwonki[19].slice(0, 2) && bTeraz >= dzwonki[19].slice(3, 5) && bTeraz < 59.99) || (aTeraz === dzwonki[20].slice(0, 2) && bTeraz >= 0 && bTeraz < dzwonki[20].slice(3, 5))) {
        start.setHours(dzwonki[20].slice(0, 2), dzwonki[20].slice(3, 5), 0);
    } else if (aTeraz === dzwonki[20].slice(0, 2) && bTeraz >= dzwonki[20].slice(3, 5) && bTeraz < dzwonki[21].slice(3, 5)) {
        start.setHours(dzwonki[21].slice(0, 2), dzwonki[21].slice(3, 5), 0);
    } else if (aTeraz === dzwonki[22].slice(0, 2) && bTeraz >= dzwonki[21].slice(3, 5) && bTeraz < dzwonki[22].slice(3, 5)) {
        start.setHours(dzwonki[22].slice(0, 2), dzwonki[22].slice(3, 5), 0);
    } else if ((aTeraz === dzwonki[22].slice(0, 2) && bTeraz >= dzwonki[22].slice(3, 5) && bTeraz < 59.99) || (aTeraz === dzwonki[23].slice(0, 2) && bTeraz >= 0 && bTeraz < dzwonki[23].slice(3, 5))) {
        start.setHours(dzwonki[23].slice(0, 2), dzwonki[23].slice(3, 5), 0);
    } else if (aTeraz === dzwonki[23].slice(0, 2) && bTeraz >= dzwonki[23].slice(3, 5) && bTeraz < dzwonki[24].slice(3, 5)) {
        start.setHours(dzwonki[24].slice(0, 2), dzwonki[24].slice(3, 5), 0);
    } else if ((aTeraz === dzwonki[24].slice(0, 2) && bTeraz >= dzwonki[24].slice(3, 5) && bTeraz < 59.99) || (aTeraz === dzwonki[25].slice(0, 2) && bTeraz >= 0 && bTeraz < dzwonki[25].slice(3, 5))) {
        start.setHours(dzwonki[25].slice(0, 2), dzwonki[25].slice(3, 5), 0);
    } else {
        start.setHours(dzwonki[0].slice(0, 1), dzwonki[0].slice(2, 4), 0);
    }
}
