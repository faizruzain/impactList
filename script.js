function setImpact(res) {
  res = [...new Set(res)];
  return "Jumlah Site:" + res.length + "\n" + "2G:" + res.length + "NE" + "\n" + "3G:" + res.length + "NE" + "\n" + "4G:" + res.length + "NE" + "\n" + "Detail Site:" + "\n" + res;

}

function parse() {
  let val = document.getElementById("fix").value;

  if (!val) {
    document.getElementById("fixRes").value = "No input";

  } else {
    val = val.toUpperCase();
    document.getElementById("fixRes").value = setImpact(val.match(/[A-Z]{3}\d{3}/g));

  }

  document.getElementById("inlineRadio6").checked = false;
  document.getElementById("inlineRadio7").checked = false;

}

function report() {
  let val = document.getElementById("report").value;
  let arr = val.split("\n");
  let badArr = [];

  if (val.length === 9) {
    document.getElementById("reportRes").value = "No input";

  } else {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].length === 8) {
        badArr.push(parseInt(arr[i].substring(7)));
      } else {
        badArr.push(parseInt(arr[i].substring(7)));
      }

    }

    let filteredArr = badArr.filter(item => item || item === 0);

    let d = new Date();
    let date = d.toLocaleDateString("id-ID", {
      "dateStyle": "medium"
    });
    let time = d.toLocaleTimeString("id-ID", {
      "timeStyle": "short"
    });

    document.getElementById("reportRes").value = "**Reporting OSO, TANGGAL: " + date + " Pukul " + time + " WIB :**" + "\n" + "\n" + "**Tiket Service Tsel:**" + "\n" + "TREGx: <4Jam / >4Jam" + "\n" + "TREG1: " + filteredArr[1] + "/" + filteredArr[9] + "\n" + "TREG2: " + filteredArr[2] + "/" + filteredArr[10] + "\n" + "TREG3: " + filteredArr[3] + "/" + filteredArr[11] + "\n" + "TREG4: " + filteredArr[4] + "/" + filteredArr[12] + "\n" + "TREG5: " + filteredArr[5] + "/" + filteredArr[13] + "\n" + "TREG6: " + filteredArr[6] + "/" + filteredArr[14] + "\n" + "TREG7: " + filteredArr[7] + "/" + filteredArr[15] + "\n" + "**Total: " + filteredArr[8] + "/" + filteredArr[16] + "**" + "\n" + "\n" + "**Total Tiket Tsel " + (filteredArr[17] + filteredArr[8] + filteredArr[16]) + " Tiket : Terdiri dari (SALSIM : " + filteredArr[17] + " Tiket ; ONPROGRESS : " + (filteredArr[8] + filteredArr[16]) + " Tiket)**";

  }

}

function regTlkm(regTsel) {
  if (regTsel === "null") {
    return regTelkom = "";
  } else if (regTsel === "1" || regTsel === "2" || regTsel === "10") {
    return regTelkom = "1";
  } else if (regTsel === "3") {
    return regTelkom = "2";
  } else if (regTsel === "4") {
    return regTelkom = "3";
  } else if (regTsel === "5") {
    return regTelkom = "4";
  } else if (regTsel === "6" || regTsel === "7") {
    return regTelkom = "5";
  } else if (regTsel === "8") {
    return regTelkom = "6";
  } else if (regTsel === "9" || regTsel === "11") {
    return regTelkom = "7";
  }
}

function radio() {
  let val = document.getElementById("radio").value.replace(/\t/g, "").split("\n");
  let regTsel = document.getElementById("RegTsel").value;
  if (regTsel === "null") {
    regTsel = "";
  }

  if (val.length === 1) {
    document.getElementById("datek").value = "[OPEN]" + "\n" + "\n" + "Ticket No." + "\n" + "Nossa  : " + "\n" + "Remedy : " + "\n" + "\n" + "Headline : " + "\n" + "\n" + "#OPEN  : " + "\n" + "#CLOSE : -" + "\n" + "#TTR   : -" + "\n" + "\n" + "BAST-1 : " + "\n" + "Status : " + "\n" + "\n" + "ACTUAL NE IDU" + " : " + val[1] + "\n" + "NE SITE ID" + "    : " + val[5] + "\n" + "NE SITE NAME" + "  : " + val[9] + "\n" + "NE ALAMAT" + "     : " + val[13] + "\n" + "NE LATITUDE" + "   : " + val[17] + "\n" + "NE LONGITUDE" + "  : " + val[21] + "\n" + "\n" + "ACTUAL FE IDU" + " : " + val[3] + "\n" + "FE SITE ID" + "    : " + val[7] + "\n" + "FE SITE NAME" + "  : " + val[11] + "\n" + "FE ALAMAT" + "     : " + val[15] + "\n" + "FE LATITUDE" + "   : " + val[19] + "\n" + "FE LONGITUDE" + "  : " + val[23] + "\n" + "\n" + "#Info     : Power aman." + "\n" + "#Action   : Koordinasi dengan rekan Mitratel dan Regional " + regTlkm(regTsel) + "\n" + "#PIC TSEL : ";
    document.getElementById("inlineRadio1").checked = false;
    document.getElementById("inlineRadio2").checked = false;
    document.getElementById("inlineRadio3").checked = false;

  } else {
    // document.getElementById("datek").value = "[OPEN]" + "\n" + "\n" + "Ticket No." + "\n" + "Nossa  : " + "\n" + "Remedy : " + "\n" + "\n" + "Headline : " + "\n" + "\n" + "#OPEN  : " + "\n" + "#CLOSE : -" + "\n" + "#TTR   : -" + "\n" + "\n" + "BAST-1 : " + "\n" + "Status : " + "\n" + "\n" + "ACTUAL NE IDU" + " : " + val[1] + "\n" + "NE SITE ID" + "    : " + val[5] + "\n" + "NE SITE NAME" + "  : " + val[9] + "\n" + "NE ALAMAT" + "     : " + val[13] + "\n" + "NE LATITUDE" + "   : " + val[17] + "\n" + "NE LONGITUDE" + "  : " + val[21] + "\n" + "\n" + "ACTUAL FE IDU" + " : " + val[3] + "\n" + "FE SITE ID" + "    : " + val[7] + "\n" + "FE SITE NAME" + "  : " + val[11] + "\n" + "FE ALAMAT" + "     : " + val[15] + "\n" + "FE LATITUDE" + "   : " + val[19] + "\n" + "FE LONGITUDE" + "  : " + val[23] + "\n" + "\n" + "#Info     : Power aman." + "\n" + "#Action   : Koordinasi dengan rekan Mitratel dan Regional " + regTlkm(regTsel) + "\n" + "#PIC TSEL : ";
    radioService("dwn");
    document.getElementById("inlineRadio1").checked = true;
    document.getElementById("inlineRadio2").checked = false;
    document.getElementById("inlineRadio3").checked = false;

  }

  document.getElementById("datek").value = document.getElementById("datek").value.replace(/undefined/g, "");

}

function radioService(service) {
  let val = document.getElementById("radio").value.replace(/\t/g, "").split("\n");
  let premium = document.getElementById("flexCheckDefault").checked;
  let garansi = document.getElementById("flexCheckDefault2").checked;

  let regTsel = document.getElementById("RegTsel").value;
  if (regTsel === "null") {
    regTsel = "";
  }


  if (val) {
    if (service === "dwn") {
      document.getElementById("datek").value = "[OPEN]" + "\n" + "\n" + "Ticket No." + "\n" + "Nossa  : " + "\n" + "Remedy : " + "\n" + "\n" + "Headline : TSEL_RADIOIP_" + val[5] + "_" + val[9].toUpperCase().split(" ", 2).join(" ").replace(/\s/, '_').replace(/\//g, "").replace(/-/g, "_") + "_" + "TO" + "_" + val[7] + "_" + val[11].toUpperCase().split(" ", 2).join(" ").replace(/\s/, '_').replace(/\//g, "").replace(/-/g, "_") + "_DOWN" + (garansi ? "_GARANSI" : "_NOGARANSI")  + (premium ? "_PREMIUM" : "") + "_REGTSEL" + regTsel + "\n" + "\n" + "#OPEN  : " + "\n" + "#CLOSE : -" + "\n" + "#TTR   : -" + "\n" + "\n" + "BAST-1 : " + "\n" + "Status : " + "\n" + "\n" + "ACTUAL NE IDU" + " : " + val[1] + "\n" + "NE SITE ID" + "    : " + val[5] + "\n" + "NE SITE NAME" + "  : " + val[9] + "\n" + "NE ALAMAT" + "     : " + val[13] + "\n" + "NE LATITUDE" + "   : " + val[17] + "\n" + "NE LONGITUDE" + "  : " + val[21] + "\n" + "\n" + "ACTUAL FE IDU" + " : " + val[3] + "\n" + "FE SITE ID" + "    : " + val[7] + "\n" + "FE SITE NAME" + "  : " + val[11] + "\n" + "FE ALAMAT" + "     : " + val[15] + "\n" + "FE LATITUDE" + "   : " + val[19] + "\n" + "FE LONGITUDE" + "  : " + val[23] + "\n" + "\n" + "#Info     : Power aman." + "\n" + "#Action   : Koordinasi dengan rekan Mitratel dan Regional " + regTlkm(regTsel) + "\n" + "#PIC TSEL : ";

    } else if (service === "pl") {
      document.getElementById("datek").value = "[OPEN]" + "\n" + "\n" + "Ticket No." + "\n" + "Nossa  : " + "\n" + "Remedy : " + "\n" + "\n" + "Headline : TSEL_RADIOIP_" + val[5] + "_" + val[9].toUpperCase().split(" ", 2).join(" ").replace(/\s/, '_').replace(/\//g, "").replace(/-/g, "_") + "_" + "TO" + "_" + val[7] + "_" + val[11].toUpperCase().split(" ", 2).join(" ").replace(/\s/, '_').replace(/\//g, "").replace(/-/g, "_") + "_PACKETLOSS_QUALITY" + (garansi ? "_GARANSI" : "_NOGARANSI")  + (premium ? "_PREMIUM" : "") + "_REGTSEL" + regTsel + "\n" + "\n" + "#OPEN  : " + "\n" + "#CLOSE : -" + "\n" + "#TTR   : -" + "\n" + "\n" + "BAST-1 : " + "\n" + "Status : " + "\n" + "\n" + "ACTUAL NE IDU" + " : " + val[1] + "\n" + "NE SITE ID" + "    : " + val[5] + "\n" + "NE SITE NAME" + "  : " + val[9] + "\n" + "NE ALAMAT" + "     : " + val[13] + "\n" + "NE LATITUDE" + "   : " + val[17] + "\n" + "NE LONGITUDE" + "  : " + val[21] + "\n" + "\n" + "ACTUAL FE IDU" + " : " + val[3] + "\n" + "FE SITE ID" + "    : " + val[7] + "\n" + "FE SITE NAME" + "  : " + val[11] + "\n" + "FE ALAMAT" + "     : " + val[15] + "\n" + "FE LATITUDE" + "   : " + val[19] + "\n" + "FE LONGITUDE" + "  : " + val[23] + "\n" + "\n" + "#Info     : Power aman." + "\n" + "#Action   : Koordinasi dengan rekan Mitratel dan Regional " + regTlkm(regTsel) + "\n" + "#PIC TSEL : ";

    } else if (service === "fl") {
      document.getElementById("datek").value = "[OPEN]" + "\n" + "\n" + "Ticket No." + "\n" + "Nossa  : " + "\n" + "Remedy : " + "\n" + "\n" + "Headline : TSEL_RADIOIP_" + val[5] + "_" + val[9].toUpperCase().split(" ", 2).join(" ").replace(/\s/, '_').replace(/\//g, "").replace(/-/g, "_") + "_" + "TO" + "_" + val[7] + "_" + val[11].toUpperCase().split(" ", 2).join(" ").replace(/\s/, '_').replace(/\//g, "").replace(/-/g, "_") + "_FLICKER_QUALITY" + (garansi ? "_GARANSI" : "_NOGARANSI") + (premium ? "_PREMIUM" : "") + "_REGTSEL" + regTsel + "\n" + "\n" + "#OPEN  : " + "\n" + "#CLOSE : -" + "\n" + "#TTR   : -" + "\n" + "\n" + "BAST-1 : " + "\n" + "Status : " + "\n" + "\n" + "ACTUAL NE IDU" + " : " + val[1] + "\n" + "NE SITE ID" + "    : " + val[5] + "\n" + "NE SITE NAME" + "  : " + val[9] + "\n" + "NE ALAMAT" + "     : " + val[13] + "\n" + "NE LATITUDE" + "   : " + val[17] + "\n" + "NE LONGITUDE" + "  : " + val[21] + "\n" + "\n" + "ACTUAL FE IDU" + " : " + val[3] + "\n" + "FE SITE ID" + "    : " + val[7] + "\n" + "FE SITE NAME" + "  : " + val[11] + "\n" + "FE ALAMAT" + "     : " + val[15] + "\n" + "FE LATITUDE" + "   : " + val[19] + "\n" + "FE LONGITUDE" + "  : " + val[23] + "\n" + "\n" + "#Info     : Power aman." + "\n" + "#Action   : Koordinasi dengan rekan Mitratel dan Regional " + regTlkm(regTsel) + "\n" + "#PIC TSEL : ";

    } else if (service === "prv") {
      document.getElementById("datek").value = "[OPEN]" + "\n" + "\n" + "Ticket No." + "\n" + "Nossa  : " + "\n" + "Remedy : " + "\n" + "\n" + "Headline : TSEL_RADIOIP_" + val[5] + "_" + val[9].toUpperCase().split(" ", 2).join(" ").replace(/\s/, '_').replace(/\//g, "").replace(/-/g, "_") + "_" + "TO" + "_" + val[7] + "_" + val[11].toUpperCase().split(" ", 2).join(" ").replace(/\s/, '_').replace(/\//g, "").replace(/-/g, "_") + "_PREVENTIVE" + (garansi ? "_GARANSI" : "_NOGARANSI") + (premium ? "_PREMIUM" : "") + "_REGTSEL" + regTsel + "\n" + "\n" + "#OPEN  : " + "\n" + "#CLOSE : -" + "\n" + "#TTR   : -" + "\n" + "\n" + "BAST-1 : " + "\n" + "Status : " + "\n" + "\n" + "ACTUAL NE IDU" + " : " + val[1] + "\n" + "NE SITE ID" + "    : " + val[5] + "\n" + "NE SITE NAME" + "  : " + val[9] + "\n" + "NE ALAMAT" + "     : " + val[13] + "\n" + "NE LATITUDE" + "   : " + val[17] + "\n" + "NE LONGITUDE" + "  : " + val[21] + "\n" + "\n" + "ACTUAL FE IDU" + " : " + val[3] + "\n" + "FE SITE ID" + "    : " + val[7] + "\n" + "FE SITE NAME" + "  : " + val[11] + "\n" + "FE ALAMAT" + "     : " + val[15] + "\n" + "FE LATITUDE" + "   : " + val[19] + "\n" + "FE LONGITUDE" + "  : " + val[23] + "\n" + "\n" + "#Info     : Power aman." + "\n" + "#Action   : Koordinasi dengan rekan Mitratel dan Regional " + regTlkm(regTsel) + "\n" + "#PIC TSEL : ";
    }
  }

  document.getElementById("datek").value = document.getElementById("datek").value.replace(/undefined/g, "");

}

function reset(id) {
  if (id === "fix") {
    document.getElementById("fix").value = "";
    document.getElementById("fixRes").value = "";
    document.getElementById("inlineRadio6").checked = false;
    document.getElementById("inlineRadio7").checked = false;

  } else if (id === "radio") {
    document.getElementById("radio").value = "";
    document.getElementById("datek").value = "";
    document.getElementById("inlineRadio1").checked = false;
    document.getElementById("inlineRadio2").checked = false;
    document.getElementById("inlineRadio3").checked = false;
    document.getElementById("RegTsel").options.selectedIndex = 0;
    document.getElementById("flexCheckDefault").checked = false;
    document.getElementById("flexCheckDefault2").checked = false;

  } else if (id === "report") {
    document.getElementById("report").value = "\nSALSIM: ";
    document.getElementById("reportRes").value = "";

  } else if (id === "RegTsel") {
    document.getElementById("inlineRadio1").checked = false;
    document.getElementById("inlineRadio2").checked = false;
    document.getElementById("inlineRadio3").checked = false;
  }
  else if (id === "ipbbran") {
    document.getElementById("ipbbran").value = "";
    document.getElementById("ipbbranRes").value = "";
  }

}

function newSeparate(id) {
  if (id === "inlineRadio4") {
    let val = document.getElementById("txtRes").value;
    val = val.replace(/,/gm, ";");
    document.getElementById("txtRes").value = val;

  } else if (id === "inlineRadio5") {
    let val = document.getElementById("txtRes").value;
    val = val.replace(/;/gm, ",");
    document.getElementById("txtRes").value = val;

  } else if (id === "inlineRadio6") {
    let val = document.getElementById("fixRes").value;
    val = val.replace(/,/gm, ";");
    document.getElementById("fixRes").value = val;

  } else if (id === "inlineRadio7") {
    let val = document.getElementById("fixRes").value;
    val = val.replace(/;/gm, ",");
    document.getElementById("fixRes").value = val;

  }

}

function getSLD() {
  let val = document.getElementById("ipbbran").value.split("\n");

  let ipbb = [];
  let ipran = [];
  
  let ipbb_link = []
  let ipran_link = []

  let patt1 = /(-ran-|ran-|-ran)/
  let patt2 = /(core|-sr-|sr-|-sr)/
  let patt3 = /x\d{2,}g/i
  let patt4 = /x\d{1}g/i
  let patt5 = /x\d{3,}mb|m/i

  for (let i = 0; i < val.length; i++) {
    if(patt1.test(val[i])) {
      ipran.push(val[i])
    } else if(patt2.test(val[i])) {
      ipbb.push(val[i])
    } else if(patt3.test(val[i])) {
      ipbb_link.push(val[i])
    } else if(patt4.test(val[i])) {
      ipran_link.push(val[i])
    } else if(patt5.test(val[i])) {
      ipran_link.push(val[i])
    }

  }

  let interface = ipbb.concat(ipran)
  
  document.getElementById("ipbbranRes").value = "Jumlah Link IPBB & IPRAN: " + (ipbb.length + ipran.length) + "\n" + "Core: " + ipbb.length + "\n" + "RAN : " + ipran.length + "\n" + "Detail Link:\n" + (ipbb_link.length===0 ? "IPBB:\n" : "IPBB:\n" + ipbb_link + "\n" ) + (ipran_link.length===0 ? "IPRAN:\n" : "IPRAN:\n" + ipran_link + "\n") + "Interface:\n" + interface;
  document.getElementById("ipbbranRes").value = document.getElementById("ipbbranRes").value.replace(/,/g, "\n");
  
}
