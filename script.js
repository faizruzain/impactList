function getVal() {
  let res;
  let val = document.getElementById("txt").value;

  if (/;/g.test(val) === true) {
    res = val.split(";");
    if (Array.isArray(res) === true) {
      setImpact(res);
    }

  } else if (/,/g.test(val) === true) {
    res = val.split(",");
    if (Array.isArray(res) === true) {
      setImpact(res);
    }

  } else if (!val) {
    document.getElementById("txtRes").value = "No input";

  } else {
    document.getElementById("txtRes").value = "Jumlah Site:1" + "\n" + "2G:1" + "NE" + "\n" + "3G:1" + "NE" + "\n" + "4G:1" + "NE" + "\n" + "Detail Site:" + "\n" + val;

  }

}

function setImpact(res) {
  let val = document.getElementById("txt").value;
  document.getElementById("txtRes").value = "Jumlah Site:" + res.length + "\n" + "2G:" + res.length + "NE" + "\n" + "3G:" + res.length + "NE" + "\n" + "4G:" + res.length + "NE" + "\n" + "Affected Site(s):" + "\n" + val;

}

function fix() {
  let val = document.getElementById("fix").value;

  if (/\s/g.test(val) === true) {
    let arr = val.split("\n");

    let sites_ID = [];
    for (var i = 0; i < arr.length; i++) {
      sites_ID.push(arr[i].slice(0, 6));
    }

    sites_ID = sites_ID.filter(item => item);

    document.getElementById("fixRes").value = "Jumlah Site:" + sites_ID.length + "\n" + "2G:" + sites_ID.length + "NE" + "\n" + "3G:" + sites_ID.length + "NE" + "\n" + "4G:" + sites_ID.length + "NE" + "\n" + "Affected Site(s):" + "\n" + sites_ID;

  } else if (!val) {
    document.getElementById("fixRes").value = "No input";

  } else if (/\s/g.test(val) === false) {
    document.getElementById("fixRes").value = "Jumlah Site:1" + "\n" + "2G:1" + "NE" + "\n" + "3G:1" + "NE" + "\n" + "4G:1" + "NE" + "\n" + "Detail Site:" + "\n" + val.slice(0, 6);

  }

}

function separate() {
  let val = document.getElementById("txtRes").value;
  let sep = document.getElementById("slct").value;
  // let sep = document.querySelectorAll("#inlineRadio1, #inlineRadio2")[0].getAttribute("id");


  if (sep === ",") {
    let newVal = val.replace(/;/gm, ",");
    document.getElementById("txtRes").value = newVal;

  } else if (sep === ";") {
    let newVal = val.replace(/,/gm, ";");
    document.getElementById("txtRes").value = newVal;

  }

}

function separate2() {
  let val = document.getElementById("fixRes").value;
  let sep = document.getElementById("slct2").value;

  if (sep === ",") {
    let newVal = val.replace(/;/gm, ",");
    document.getElementById("fixRes").value = newVal;

  } else if (sep === ";") {
    let newVal = val.replace(/,/gm, ";");
    document.getElementById("fixRes").value = newVal;

  } else {
    console.log(sep);
  }
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

  for (var i = 0; i < arr.length; i++) {
    newArr.push(arr[i].replace(/\t/g, ""));
  }

  document.getElementById("datek").value = "[OPEN]" + "\n" + "\n" + "Ticket No." + "\n" + "Nossa    : " + "\n" + "Remedy : " + "\n" + "\n" + "Headline : " + "\n" + "\n" + "#OPEN  : " + "\n" + "#CLOSE : -" + "\n" + "#TTR     : -" + "\n" + "\n" + "BAST-1 : " + "\n" + "Status   : " + "\n" + "\n" + "ACTUAL NE IDU" + " : " + newArr[1] + "\n" + "NE SITE ID" + "          : " + newArr[5] + "\n" + "NE SITE NAME" + "   : " + newArr[9] + "\n" + "NE ALAMAT" + "       : " + newArr[13] + "\n" + "NE LATITUDE" + "     : " + newArr[17] + "\n" + "NE LONGITUDE" + " : " + newArr[21] + "\n" + "\n" + "ACTUAL FE IDU" + " : " + newArr[3] + "\n" + "FE SITE ID" + "          : " + newArr[7] + "\n" + "FE SITE NAME" + "   : " + newArr[11] + "\n" + "FE ALAMAT" + "       : " + newArr[15] + "\n" + "FE LATITUDE" + "     : " + newArr[19] + "\n" + "FE LONGITUDE" + " : " + newArr[23] + "\n" + "\n" + "#Info        : Power aman." + "\n" + "#Action    : Koordinasi dengan rekan Mitratel dan Regional" + "\n" + "#PIC TSEL : " ;

}

function getMid() {
  let val = document.getElementById("mid").value;
  let start = document.getElementById("input1").value;
  let end = document.getElementById("input2").value;

  let arr = val.split("\n");
  let newArr = [];

  for (var i = 0; i < arr.length; i++) {
    newArr.push(arr[i].substring(start, end));
  }

  newArr = newArr.filter(item => item);

  document.getElementById("resultMid").value = "Jumlah Site:" + newArr.length + "\n" + "2G:" + newArr.length + "NE" + "\n" + "3G:" + newArr.length + "NE" + "\n" + "4G:" + newArr.length + "NE" + "\n" + "Affected Site(s):" + "\n" + newArr;

}

function separate3() {
  let val = document.getElementById("resultMid").value;
  let sep = document.getElementById("slct3").value;

  if (sep === ",") {
    let newVal = val.replace(/;/gm, ",");
    document.getElementById("resultMid").value = newVal;

  } else if (sep === ";") {
    let newVal = val.replace(/,/gm, ";");
    document.getElementById("resultMid").value = newVal;

  } else {
    console.log(sep);
  }

}
