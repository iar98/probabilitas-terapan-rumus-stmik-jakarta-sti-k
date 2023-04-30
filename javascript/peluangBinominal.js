function hasil() {
    let p = document.getElementById("nilaip").value;
    let p2 = document.getElementById("nilaip2").value;
    let hasil = document.getElementById("hasil-btn");
    let ul = document.getElementsByTagName("ul")[0];
    let li = ul.getElementsByTagName("li")[0];
    let jawaban = 0;
    
    let p1 = document.getElementById("p1");

    if(p && p2) {
        jawaban = p / p2;
        p1.innerHTML = `Rumus p adalah = nilaip(${p}) / nilaip2(${p2}) = ${jawaban}`
        document.getElementById("hasil").value = jawaban;
        hasil.remove();

        let newBtn = document.createElement("button");
        newBtn.setAttribute("onclick", "hapus()");
        newBtn.setAttribute("id", "hapus-btn");
        newBtn.appendChild(document.createTextNode("Hapus"));
        li.insertBefore(newBtn, li.childNodes[7]);
    }else{
        alert("masukan nilai p !");
        jawaban = "";
        p1.innerHTML = "";
    }

    return jawaban;
}

function hasil2() {
    let q = document.getElementById("nilaiq").value;
    let q2 = document.getElementById("nilaiq2").value;
    let hasil = document.getElementById("hasil2-btn");
    let ul = document.getElementsByTagName("ul")[0];
    let li = ul.getElementsByTagName("li")[1];
    let jawaban = 0;

    if(q && q2) {
        jawaban = q / q2;
        document.getElementById("hasil2").value = jawaban;
        document.getElementById("p2").innerHTML = `Rumus q adalah = 1 - p = nilaip(${q}) / nilaip2(${q2}) = ${jawaban}`;
    
        hasil.remove();
    
        let newBtn = document.createElement("button");
        newBtn.setAttribute("onclick", "hapus2()");
        newBtn.setAttribute("id", "hapus2-btn");
        newBtn.appendChild(document.createTextNode("Hapus"));
        li.insertBefore(newBtn, li.childNodes[7]);
    }else{
        alert("Masukan nilai q !");
    }

    return jawaban;
}

function hapus() {
    let ul = document.getElementsByTagName("ul")[0];
    let li = ul.getElementsByTagName("li")[0];

    let nilaip = document.getElementById("nilaip");
    let nilaip2 = document.getElementById('nilaip2');
    let hasil = document.getElementById("hasil");
    let p1 = document.getElementById("p1");

    p1.innerHTML = "";
    hasil.value = "";
    nilaip.value = "";
    nilaip2.value = "";

    let hapus = document.getElementById("hapus-btn");
    hapus.remove();


        let hasil2 = document.createElement("button");
        hasil2.setAttribute("onclick", "hasil()");
        hasil2.setAttribute("id", "hasil-btn");
        hasil2.appendChild(document.createTextNode("Hasil"));
        li.insertBefore(hasil2, li.childNodes[7]);
}

function hapus2() {
    let ul = document.getElementsByTagName("ul")[0];
    let li = ul.getElementsByTagName("li")[1];

    let nilaiq = document.getElementById("nilaiq");
    let nilaiq2 = document.getElementById('nilaiq2');
    let hasil = document.getElementById("hasil2");
    let p2 = document.getElementById("p2");

    p2.innerHTML = "";
    hasil.value = "";
    nilaiq.value = "";
    nilaiq2.value = "";

    let hapus = document.getElementById("hapus2-btn");
    hapus.remove();


        let hasil2 = document.createElement("button");
        hasil2.setAttribute("onclick", "hasil2()");
        hasil2.setAttribute("id", "hasil2-btn");
        hasil2.appendChild(document.createTextNode("Hasil"));
        li.insertBefore(hasil2, li.childNodes[7]);
}

function hasil3() {
    let n = document.getElementById("nilain").value;
    let x = document.getElementById("nilaix").value;
    let p = document.getElementById("hasil").value;
    let q = document.getElementById("hasil2").value;

    if( n && x) {
        let kombinasi = faktorial(n) / (faktorial(x) * faktorial(n - x));
        let jawaban = kombinasi * Math.pow(p, x) * Math.pow(q, n - x);
        let akar = Math.pow(p, x);
        let akar2 = Math.pow(q, n - x);
    
        document.getElementById("hasil3").value = jawaban;
        document.getElementById("p3").innerHTML = `Rumus : P(X= x) = nCx . P^x . q^n-x `;
        document.getElementById("p4").innerHTML = `: ${n}C${x} * ${p}^${x} * ${q}^${n} - ${x}`;
        document.getElementById("p5").innerHTML = `: ${kombinasi} * ${akar} * ${akar2} = ${jawaban}`;
    }else if(n) {
        alert("Masukan nilai x!");
    }else if(x) {
        alert("Masukan nilai n!");
    }else{
        alert("Masukan nilai n dan x!");
    }


    return jawaban;
}

function faktorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * faktorial(n - 1);
}

function hapus3() {
    let n = document.getElementById("nilain");
    let x = document.getElementById("nilaix");
    let hasil = document.getElementById("hasil3");
    let p3 = document.getElementById('p3');
    let p4 = document.getElementById('p4');
    let p5 = document.getElementById('p5');


    n.value ="";
    x.value ="";
    hasil.value = "";
    p3.innerHTML = "";
    p4.innerHTML = "";
    p5.innerHTML = "";

}