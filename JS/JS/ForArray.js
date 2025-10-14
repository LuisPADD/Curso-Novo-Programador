let allProducts = ['Macarrão','pizza','Sushi'];

var html = '<b>';

for (let q in allProducts){
    
    html += allProducts[q]+'|';

}

html += '<b/>'

document.querySelector('.lista').innerHTML = html;
