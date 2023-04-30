function hitung() {
    let angka1 = document.getElementById('angka1').value;
    let angka2 = document.getElementById('angka2').value;  
    let hasil = 0;
    
    if(angka1 && angka2) {
        hasil = angka1 * angka2;
    }else{
        alert("masukan angka terlebih dahulu!");
    }

    document.getElementById('hasil').value = hasil;
    return hasil;
    }

    function hitung2() {
    let angka1 = document.getElementById('angka1').value;
    let angka2 = document.getElementById('angka2').value;  
    let angka3 = document.getElementById('angka3').value;  
    let hasil = 0; 
    if(angka1 && angka2 && angka3) {
        hasil = (angka1 * angka2) + (angka1 * angka3);
    }else{
        alert("masukan angka terlebih dahulu!");
    }

    document.getElementById('hasil').value = hasil;
    return hasil;
    
    }
    
    function hitung3() {
    let angka1 = document.getElementById('angka1').value;
    let angka2 = document.getElementById('angka2').value;  
    let angka3 = document.getElementById('angka3').value;  
    let angka4 = document.getElementById('angka4').value;  
    let hasil = 0; 
    if(angka1 && angka2 && angka3 && angka4) {
        hasil = (angka1 * angka2) + (angka1 * angka3) + (angka1 * angka4);
    }else{
        alert("masukan angka terlebih dahulu!");
    }

    document.getElementById('hasil').value = hasil;
    return hasil;
    
    }

    function tambah(){
        let ul = document.getElementsByTagName('ul')[0];
        let li = ul.getElementsByTagName('li')[1];

        let tambah = document.getElementById('tambah');
        let hitung = document.getElementById('hitung');

        hitung.remove();
        tambah.remove();

        let inputNew = document.createElement('input');
        inputNew.setAttribute('type','number');
        inputNew.setAttribute('name', 'angka-ketiga')
        inputNew.setAttribute('id', 'angka3');
        li.appendChild(inputNew);

        let tambahbtn = document.createElement('button');
        tambahbtn.setAttribute("onclick","tambah2()");
        tambahbtn.setAttribute('id', 'tambah2');
        tambahbtn.appendChild(document.createTextNode('Tambah nilai'));
        li.appendChild(tambahbtn);

        let hitungNew = document.createElement('button');
        hitungNew.setAttribute('onclick', 'hitung2()');
        hitungNew.setAttribute('id','hitung2');
        hitungNew.appendChild(document.createTextNode('Hitung'));
        ul.appendChild(hitungNew);
    }

    function tambah2() {
        let ul = document.getElementsByTagName('ul')[0];
        let li = ul.getElementsByTagName('li')[1];        

        let tambah = document.getElementById('tambah2');
        let hitung = document.getElementById('hitung2');

        hitung.remove();
        tambah.remove();        

        let inputNew = document.createElement('input');
        inputNew.setAttribute('type','number');
        inputNew.setAttribute('name', 'angka-keempat')
        inputNew.setAttribute('id', 'angka4');
        li.appendChild(inputNew);

        let bersihkan = document.createElement('button');
        bersihkan.setAttribute('onclick', 'bersihkan()');
        bersihkan.setAttribute('id', 'bersihkan');
        bersihkan.appendChild(document.createTextNode('Bersihkan'));
        li.appendChild(bersihkan);

        let hitungNew = document.createElement('button');
        hitungNew.setAttribute('onclick', 'hitung3()');
        hitungNew.setAttribute('id', 'hitung3');
        hitungNew.appendChild(document.createTextNode('Hitung'));
        ul.appendChild(hitungNew);
    }

    function bersihkan() {
        let ul = document.getElementsByTagName('ul')[0];
        let li0 = ul.getElementsByTagName('li')[0];
        let li1 = ul.getElementsByTagName('li')[1];
        let li2 = ul.getElementsByTagName('li')[2];

        let input2 = document.getElementById('angka3');
        let input3 = document.getElementById('angka4');
        let bersihkan = document.getElementById('bersihkan');
        let hitung = document.getElementById('hitung3');

        input2.remove();
        input3.remove();
        bersihkan.remove();
        hitung.remove();

        let button = document.createElement('button');
        button.setAttribute('onclick', 'tambah()');
        button.setAttribute('id', 'tambah');
        button.appendChild(document.createTextNode('Tambah nilai'));
        li1.appendChild(button);

        let hitungNew = document.createElement('button');
        hitungNew.setAttribute('onclick', 'hitung()');
        hitungNew.setAttribute('id', 'hitung');
        hitungNew.appendChild(document.createTextNode('Hitung'));
        ul.appendChild(hitungNew);

        li0 = document.getElementById('angka1').value = "";
        li1 = document.getElementById('angka2').value = "";
        li2 = document.getElementById('hasil').value = "";
    }