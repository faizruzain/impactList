function setImpact(res) {
  return "Jumlah Site:" + res.length + "\n" + "2G:" + res.length + "NE" + "\n" + "3G:" + res.length + "NE" + "\n" + "4G:" + res.length + "NE" + "\n" + "Affected Site(s):" + "\n" + res;

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

function radio() {
  let val = document.getElementById("radio").value;
  let arr = val.split("\n");
  let newArr = [];

  if (!val) {
    document.getElementById("datek").value = "[OPEN]" + "\n" + "\n" + "Ticket No." + "\n" + "Nossa  : " + "\n" + "Remedy : " + "\n" + "\n" + "Headline : " + "\n" + "\n" + "#OPEN  : " + "\n" + "#CLOSE : -" + "\n" + "#TTR   : -" + "\n" + "\n" + "BAST-1 : " + "\n" + "Status : " + "\n" + "\n" + "ACTUAL NE IDU" + " : " + newArr[1] + "\n" + "NE SITE ID" + "    : " + newArr[5] + "\n" + "NE SITE NAME" + "  : " + newArr[9] + "\n" + "NE ALAMAT" + "     : " + newArr[13] + "\n" + "NE LATITUDE" + "   : " + newArr[17] + "\n" + "NE LONGITUDE" + "  : " + newArr[21] + "\n" + "\n" + "ACTUAL FE IDU" + " : " + newArr[3] + "\n" + "FE SITE ID" + "    : " + newArr[7] + "\n" + "FE SITE NAME" + "  : " + newArr[11] + "\n" + "FE ALAMAT" + "     : " + newArr[15] + "\n" + "FE LATITUDE" + "   : " + newArr[19] + "\n" + "FE LONGITUDE" + "  : " + newArr[23] + "\n" + "\n" + "#Info     : Power aman." + "\n" + "#Action   : Koordinasi dengan rekan Mitratel dan Regional" + "\n" + "#PIC TSEL : ";
    document.getElementById("inlineRadio1").checked = false;
    document.getElementById("inlineRadio2").checked = false;
    document.getElementById("inlineRadio3").checked = false;

  } else {
    for (var i = 0; i < arr.length; i++) {
      newArr.push(arr[i].replace(/\t/g, ""));
    }

    document.getElementById("datek").value = "[OPEN]" + "\n" + "\n" + "Ticket No." + "\n" + "Nossa  : " + "\n" + "Remedy : " + "\n" + "\n" + "Headline : " + "\n" + "\n" + "#OPEN  : " + "\n" + "#CLOSE : -" + "\n" + "#TTR   : -" + "\n" + "\n" + "BAST-1 : " + "\n" + "Status : " + "\n" + "\n" + "ACTUAL NE IDU" + " : " + newArr[1] + "\n" + "NE SITE ID" + "    : " + newArr[5] + "\n" + "NE SITE NAME" + "  : " + newArr[9] + "\n" + "NE ALAMAT" + "     : " + newArr[13] + "\n" + "NE LATITUDE" + "   : " + newArr[17] + "\n" + "NE LONGITUDE" + "  : " + newArr[21] + "\n" + "\n" + "ACTUAL FE IDU" + " : " + newArr[3] + "\n" + "FE SITE ID" + "    : " + newArr[7] + "\n" + "FE SITE NAME" + "  : " + newArr[11] + "\n" + "FE ALAMAT" + "     : " + newArr[15] + "\n" + "FE LATITUDE" + "   : " + newArr[19] + "\n" + "FE LONGITUDE" + "  : " + newArr[23] + "\n" + "\n" + "#Info     : Power aman." + "\n" + "#Action   : Koordinasi dengan rekan Mitratel dan Regional" + "\n" + "#PIC TSEL : ";
    document.getElementById("inlineRadio1").checked = false;
    document.getElementById("inlineRadio2").checked = false;
    document.getElementById("inlineRadio3").checked = false;

  }


}

function radioService(service) {
  let val = document.getElementById("radio").value;
  let arr = val.split("\n");
  let newArr = [];

  for (var i = 0; i < arr.length; i++) {
    newArr.push(arr[i].replace(/\t/g, ""));
  }

  if (val) {
    if (service === "dwn") {
      document.getElementById("datek").value = "[OPEN]" + "\n" + "\n" + "Ticket No." + "\n" + "Nossa  : " + "\n" + "Remedy : " + "\n" + "\n" + "Headline : TSEL_RADIOIP_" + newArr[5] + "_" + newArr[9].toUpperCase().split(" ", 2).join(" ").replace(/\s/, '_') + "_" + "TO" + "_" + newArr[7] + "_" + newArr[11].toUpperCase().split(" ", 2).join(" ").replace(/\s/, '_') + "_DOWN" + "_REGTSEL" + "\n" + "\n" + "#OPEN  : " + "\n" + "#CLOSE : -" + "\n" + "#TTR   : -" + "\n" + "\n" + "BAST-1 : " + "\n" + "Status : " + "\n" + "\n" + "ACTUAL NE IDU" + " : " + newArr[1] + "\n" + "NE SITE ID" + "    : " + newArr[5] + "\n" + "NE SITE NAME" + "  : " + newArr[9] + "\n" + "NE ALAMAT" + "     : " + newArr[13] + "\n" + "NE LATITUDE" + "   : " + newArr[17] + "\n" + "NE LONGITUDE" + "  : " + newArr[21] + "\n" + "\n" + "ACTUAL FE IDU" + " : " + newArr[3] + "\n" + "FE SITE ID" + "    : " + newArr[7] + "\n" + "FE SITE NAME" + "  : " + newArr[11] + "\n" + "FE ALAMAT" + "     : " + newArr[15] + "\n" + "FE LATITUDE" + "   : " + newArr[19] + "\n" + "FE LONGITUDE" + "  : " + newArr[23] + "\n" + "\n" + "#Info     : Power aman." + "\n" + "#Action   : Koordinasi dengan rekan Mitratel dan Regional" + "\n" + "#PIC TSEL : ";

    } else if (service === "pl") {
      document.getElementById("datek").value = "[OPEN]" + "\n" + "\n" + "Ticket No." + "\n" + "Nossa  : " + "\n" + "Remedy : " + "\n" + "\n" + "Headline : TSEL_RADIOIP_" + newArr[5] + "_" + newArr[9].toUpperCase().split(" ", 2).join(" ").replace(/\s/, '_') + "_" + "TO" + "_" + newArr[7] + "_" + newArr[11].toUpperCase().split(" ", 2).join(" ").replace(/\s/, '_') + "_PACKET_LOSS_QUALITY" + "_REGTSEL" + "\n" + "\n" + "#OPEN  : " + "\n" + "#CLOSE : -" + "\n" + "#TTR   : -" + "\n" + "\n" + "BAST-1 : " + "\n" + "Status : " + "\n" + "\n" + "ACTUAL NE IDU" + " : " + newArr[1] + "\n" + "NE SITE ID" + "    : " + newArr[5] + "\n" + "NE SITE NAME" + "  : " + newArr[9] + "\n" + "NE ALAMAT" + "     : " + newArr[13] + "\n" + "NE LATITUDE" + "   : " + newArr[17] + "\n" + "NE LONGITUDE" + "  : " + newArr[21] + "\n" + "\n" + "ACTUAL FE IDU" + " : " + newArr[3] + "\n" + "FE SITE ID" + "    : " + newArr[7] + "\n" + "FE SITE NAME" + "  : " + newArr[11] + "\n" + "FE ALAMAT" + "     : " + newArr[15] + "\n" + "FE LATITUDE" + "   : " + newArr[19] + "\n" + "FE LONGITUDE" + "  : " + newArr[23] + "\n" + "\n" + "#Info     : Power aman." + "\n" + "#Action   : Koordinasi dengan rekan Mitratel dan Regional" + "\n" + "#PIC TSEL : ";

    } else if (service === "fl") {
      document.getElementById("datek").value = "[OPEN]" + "\n" + "\n" + "Ticket No." + "\n" + "Nossa  : " + "\n" + "Remedy : " + "\n" + "\n" + "Headline : TSEL_RADIOIP_" + newArr[5] + "_" + newArr[9].toUpperCase().split(" ", 2).join(" ").replace(/\s/, '_') + "_" + "TO" + "_" + newArr[7] + "_" + newArr[11].toUpperCase().split(" ", 2).join(" ").replace(/\s/, '_') + "_FLICKER_QUALITY" + "_REGTSEL" + "\n" + "\n" + "#OPEN  : " + "\n" + "#CLOSE : -" + "\n" + "#TTR   : -" + "\n" + "\n" + "BAST-1 : " + "\n" + "Status : " + "\n" + "\n" + "ACTUAL NE IDU" + " : " + newArr[1] + "\n" + "NE SITE ID" + "    : " + newArr[5] + "\n" + "NE SITE NAME" + "  : " + newArr[9] + "\n" + "NE ALAMAT" + "     : " + newArr[13] + "\n" + "NE LATITUDE" + "   : " + newArr[17] + "\n" + "NE LONGITUDE" + "  : " + newArr[21] + "\n" + "\n" + "ACTUAL FE IDU" + " : " + newArr[3] + "\n" + "FE SITE ID" + "    : " + newArr[7] + "\n" + "FE SITE NAME" + "  : " + newArr[11] + "\n" + "FE ALAMAT" + "     : " + newArr[15] + "\n" + "FE LATITUDE" + "   : " + newArr[19] + "\n" + "FE LONGITUDE" + "  : " + newArr[23] + "\n" + "\n" + "#Info     : Power aman." + "\n" + "#Action   : Koordinasi dengan rekan Mitratel dan Regional" + "\n" + "#PIC TSEL : ";

    }
  }

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

  } else if (id === "report") {
    document.getElementById("report").value = "\nSALSIM: ";
    document.getElementById("reportRes").value = "";

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
