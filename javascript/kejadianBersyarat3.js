function hitung() {
    let nilaiA = document.getElementById('nilaiA').value;
    let nilaiB = document.getElementById('nilaiB').value;   
    let diketahui = document.getElementById('diketahui').value;

    let p1 = document.getElementById('p1');
    let p2 = document.getElementById('p2');
    let p3 = document.getElementById('p3');
    let p4 = document.getElementById('p4');
    let p5 = document.getElementById('p5');
    let p6 = document.getElementById('p6');
    let p7 = document.getElementById('p7');
    let p8 = document.getElementById('p8');
    
    let hasil = (Number(nilaiA) * Number(nilaiB)) / Number(diketahui);

    p1.innerHTML = `Rumus untuk mengetahui kejadian jika kejadian sudah diketahui sebelumnya!`;
    p2.innerHTML = 'P(A|B) = P(AdanB) / P(B);';
    p3.innerHTML = `Diketahui : A = ${nilaiA} , B = ${nilaiB} , P(B) = ${diketahui}`;
    p4.innerHTML = 'Ditanya : P(A|B) ? ';
    p5.innerHTML = 'Dijawab :';
    p6.innerHTML = 'P(A|B) = P(A dan B) / P(B)';
    p7.innerHTML = `P(A|B) = P(${nilaiA} X ${nilaiB}) / p(${diketahui})`;
    p8.innerHTML = `P(A|B) = ${hasil}`

    document.getElementById('hasil').value = hasil;
    return hasil;

   }