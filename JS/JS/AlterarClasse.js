const estilo = 'natalino';

if (estilo == 'normal') {
    document.querySelector('.inicial').classList.add('normal');
    document.querySelector('.normal').classList.remove('inicial');
}

if (estilo == 'natalino') {
    document.querySelector('.inicial').classList.add('natalino');
    document.querySelector('.natalino').classList.remove('inicial');
}