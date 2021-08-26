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

  let val2 = []
  if(val.length === 4) {
    
    for(var i=0; i<val.length; i++) {
     val2.push(val[i].split(":"))      
    }
  }

  let regTsel = document.getElementById("RegTsel").value;
  if (regTsel === "null") {
    regTsel = "";
  }

  const regTelkom = regTlkm(regTsel)

  function impact() {
    let radioBtn = document.querySelectorAll('.radio-aing')

    if(radioBtn[0].checked) {
      return "DOWN"
    } else if(radioBtn[1].checked) {
      return "PACKETLOSS_QUALITY"
    } else if(radioBtn[2].checked) {
      return "FLICKER_QUALITY"
    } else if(radioBtn[3].checked) {
      return "PREVENTIVE"
    }
    
  }
  const service = impact()

  function bast1AndType() {
    let checkBoxes = document.querySelectorAll(".checkbox-aing")

    if(checkBoxes[0].checked && checkBoxes[1].checked) {
      return "GARANSI_PREMIUM"
    } else if(checkBoxes[0].checked && !checkBoxes[1].checked) {
      return "NOGARANSI_PREMIUM"
    } else if(checkBoxes[1].checked){
      return "GARANSI"
    } else if(checkBoxes[0].checked) {
      return "PREMIUM"
    } else if(!checkBoxes[0].checked && !checkBoxes[1].checked) {
      return "NOGARANSI"
    }
    
  }
  const type = bast1AndType()
 
  const datekRadio = {
    nearEnd : {
      actual_ne_idu : val2.length === 0 ? val[1] : "",
      ne_site_id    : val[5] === undefined ? val2[0][1] : val[5],
      ne_site_name  : val[9] === undefined ? val2[1][1].replace(/\s|\W|\./g, "_") : val[9].replace(/\s|\W|\./g, "_"),
      ne_alamat     : val[13] === undefined ? "" : val[13],
      ne_latitude   : val[17] === undefined ? "" : val[17],
      ne_longitude  : val[21] === undefined ? "" : val[21]
    },
    farEnd : {
      actual_fe_idu : val2.length === 0 ? val[3] : "",
      fe_site_id    : val[7] === undefined ? val2[2][1] : val[7],
      fe_site_name  : val[11] === undefined ? val2[3][1].replace(/\s|\W|\./g, "_") : val[11].replace(/\s|\W|\./g, "_"),
      fe_alamat     : val[15] === undefined ? "" : val[11],
      fe_latitude   : val[19] === undefined ? "" : val[19],
      fe_longitude  : val[23] === undefined ? "" : val[23]
    }
    
  }

  const ticketNumber = `[OPEN]

Ticket No.
Nossa  : 
Remedy : 

`
  let headline = `Headline : TSEL_RADIOIP_${datekRadio.nearEnd.ne_site_id}_${datekRadio.nearEnd.ne_site_name}_TO_${datekRadio.farEnd.fe_site_id}_${datekRadio.farEnd.fe_site_name}_${service}_${type}_REGTSEL${regTsel}`
  headline = headline.replace(/_{2,}/g, "_").toUpperCase()

  const ticketDuration = `

#OPEN  : 
#CLOSE : -
#TTR   : -
  `
  const bast_1 = `
BAST-1 : 
Status : 
  `
  const ne = `
ACTUAL NE IDU : ${datekRadio.nearEnd.actual_ne_idu}
NE SITE ID    : ${datekRadio.nearEnd.ne_site_id}
NE SITE NAME  : ${datekRadio.nearEnd.ne_site_name}
NE ALAMAT     : ${datekRadio.nearEnd.ne_alamat}
NE LATITUDE   : ${datekRadio.nearEnd.ne_latitude}
NE LONGITUDE  : ${datekRadio.nearEnd.ne_longitude}`

  const fe = `

ACTUAL FE IDU : ${datekRadio.farEnd.actual_fe_idu}
FE SITE ID    : ${datekRadio.farEnd.fe_site_id}
FE SITE NAME  : ${datekRadio.farEnd.fe_site_name}
FE ALAMAT     : ${datekRadio.farEnd.fe_alamat}
FE LATITUDE   : ${datekRadio.farEnd.fe_latitude}
FE LONGITUDE  : ${datekRadio.farEnd.fe_longitude}`

  const info = `

#Info     : Power aman.
#Action   : Koordinasi dengan rekan Mitratel dan Regional ${regTelkom ? regTelkom : ""}
#PIC TSEL : `
  const finalDatek = ticketNumber+headline+ticketDuration+bast_1+ne+fe+info
  
  document.getElementById("datek").value = finalDatek
  
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
