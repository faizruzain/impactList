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

  if (document.querySelectorAll("select")[0].getAttribute("name") === "select") {
    if (sep === ",") {
      let newVal = val.replace(/;/gm, ",");
      document.getElementById("txtRes").value = newVal;
      console.log(val);
      console.log(sep);

    } else if (sep === ";") {
      let newVal = val.replace(/,/gm, ";");
      document.getElementById("txtRes").value = newVal;
      console.log(val);
      console.log(sep);

    } else {
      console.log(sep);
    }

  } else if (document.querySelectorAll("select")[1].getAttribute("name") === "select2") {

  }
}

function separate2() {
  let val = document.getElementById("fixRes").value;
  let sep = document.getElementById("slct2").value;

  if (sep === ",") {
    let newVal = val.replace(/;/gm, ",");
    document.getElementById("fixRes").value = newVal;
    console.log(val);
    console.log(sep);

  } else if (sep === ";") {
    let newVal = val.replace(/,/gm, ";");
    document.getElementById("fixRes").value = newVal;
    console.log(val);
    console.log(sep);

  } else {
    console.log(sep);
  }
}
