function tambah() {
    let ul = document.getElementsByTagName('ul')[0];
    let li = ul.getElementsByTagName('li')[3];

    let label = document.createElement('label');
    label.setAttribute('for', 'tambahXkecil');
    label.setAttribute('id', 'labelXkecil')
    label.appendChild(document.createTextNode('Tambah x(kecil)'))
    li.appendChild(label);

    let input = document.createElement('input');
    input.setAttribute('type', 'number');
    input.setAttribute('name', 'tambahXkecil');
    input.setAttribute('id', 'tambahXkecil');
    li.appendChild(input);
    
    let label2 = document.createElement('label');
    label2.setAttribute('for', 'tambahXbesar');
    label2.setAttribute('id', 'labelXbesar');
    label2.appendChild(document.createTextNode('Tambah x(besar)'))
    li.appendChild(label2);

    let input2 = document.createElement('input');
    input2.setAttribute('type', 'number');
    input2.setAttribute('name', 'tambahXbesar');
    input2.setAttribute('id', 'tambahXbesar');
    li.appendChild(input2);

    let li2 = ul.getElementsByTagName('li')[4];
    let button = document.getElementById('hasilbtn');

    button.remove();

    let hasil = document.createElement('button');
    hasil.setAttribute('onclick', 'hasil2()');
    hasil.setAttribute('id', 'hasil2');
    hasil.appendChild(document.createTextNode('hasil'));
    li2.appendChild(hasil); 

    let hapus = document.createElement('button');
    hapus.setAttribute('onclick', 'hapus2()');
    hapus.setAttribute('id', 'hapus2');
    hapus.appendChild(document.createTextNode('Hapus'));
    li2.appendChild(hapus);

    let tambah = document.getElementById('tmbl');
    tambah.remove();
}



function hasil() {
    let x = document.getElementById('x').value;
    let X = document.getElementById('X').value;
    let jawaban;

    if(x && X) {
        jawaban = x * X;

        let p1 = document.getElementById('p1');
        let ul = document.getElementsByTagName('ul')[0];
        let li = document.getElementsByTagName('li')[4];

        let hapus = document.createElement('button');
        hapus.setAttribute('onclick', 'hapus()');
        hapus.setAttribute('id', 'hapus');
        hapus.appendChild(document.createTextNode('hapus'));
        li.appendChild(hapus);

        p1.innerHTML = `nilai harapan = E(X) =𝜇 = Σ x f(x) = ${x} x ${X} = ${jawaban}`
    }else{
        alert('Masukan nilai terlebih dahulu!');
        if(jawaban == undefined) {
            jawaban = "";
        }
    }

    document.getElementById('hasil').value = jawaban;


}

function hasil2() {
    let ul = document.getElementsByTagName('ul')[0];
    let li = ul.getElementsByTagName('li')[3];

    let x = document.getElementById('x').value;
    let X = document.getElementById('X').value;
    let tambahXkecil = document.getElementById('tambahXkecil').value;
    let tambahXbesar = document.getElementById('tambahXbesar').value;
    let jawaban;
        if(x && X && tambahXkecil && tambahXbesar) {
            jawaban = (x * X) + (tambahXkecil * tambahXbesar);

            let p1 = document.getElementById('p1');

            p1.innerHTML = `nilai harapan = E(X) =𝜇 = Σ x f(x) = (${x} x ${X}) + (${tambahXkecil} x ${tambahXbesar}) = ${jawaban}`
        }else{
            alert('Masukan nilai terlebih dahulu!');
            if(jawaban == undefined) {
                jawaban = "";
            }
        }
    document.getElementById('hasil').value = jawaban;    
    return jawaban;
}

function hapus() {
    let x = document.getElementById('x');
    let X = document.getElementById('X');
    let hapus = document.getElementById('hapus');
    let hasil = document.getElementById('hasil');
    let p1 = document.getElementById('p1');

    x.value = "";
    X.value = "";
    p1.innerHTML = "";
    hapus.remove();
    hasil.value = "";

}

function hapus2() {
    let x = document.getElementById('x');
    let X = document.getElementById('X');
    let tambahXkecil = document.getElementById('tambahXkecil');
    let tambahXbesar = document.getElementById('tambahXbesar');
    let hapus = document.getElementById('hapus2');
    let hasilinpt = document.getElementById('hasil');
    let hasil2 = document.getElementById('hasil2');
    let labelXkecil = document.getElementById('labelXkecil');
    let labelXbesar = document.getElementById('labelXbesar');
    let p1 = document.getElementById('p1');

    let ul = document.getElementsByTagName('ul')[0];
    let li = ul.getElementsByTagName('li')[4];
    let li2 = ul.getElementsByTagName('li')[3];

    x.value = "";
    X.value = "";
    p1.innerHTML = "";
    hasilinpt.value = "";

    tambahXkecil.remove();
    tambahXbesar.remove();
    labelXkecil.remove();
    labelXbesar.remove();
    hapus.remove();
    hasil2.remove();

    let hasil = document.createElement('button');
    hasil.setAttribute('onclick', 'hasil()');
    hasil.setAttribute('id', 'hasilbtn');
    hasil.appendChild(document.createTextNode('hasil'));
    li.appendChild(hasil);

    let tambah = document.createElement('button');
    tambah.setAttribute('onclick', 'tambah()');
    tambah.setAttribute('id', 'tmbl');
    tambah.appendChild(document.createTextNode('Tambah input'));
    li2.appendChild(tambah);
}