async function getData(){
    const result = await fetch('https://fakestoreapi.com/products/');
    const products = await result.json();
    const productsArr = products.map(elemento => Object.entries(elemento));
    productsArrSliced = productsArr.slice(0,4);
    const arrTitle = [ "", "Actionable insights", "Data-driven decisions", "Always affordable"]
    console.log(products);
    products.forEach(element => {
        for(i = 0; i < productsArrSliced.length; i++){
            for(j = 0; j < 1; j++ ){
                if(element.id == i){
                    const box = document.createRange().createContextualFragment(`
                        
                         <div class="box box-1">
                            <h3>${i}</h3>
                            <h2>${arrTitle[i]}</h2>
                            <img src="${element.image}"> 
                            <p>Lorem ipsum dolor sit amet consectetur. Hendrerit in neque id lectus vel. Magna semper facilisis habitant lectus semper senectus iaculis mauris aliquet dapibus hac.</p>
                        </div>
                        
                        `)
        
                        const features_row = document.querySelector('.features-row');
                        features_row.append(box)
                }
            }
       
        }
    });
}
getData()