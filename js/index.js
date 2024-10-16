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

let valor = true;
const btn_learn = document.getElementById('btn-learn');
const Click = (e) => {
    e.preventDefault();
     if(btn_learn.innerHTML == "learn more"){
         btn_learn.innerHTML = "madre"
         swal({
             title: `El nombre del botón ha cambiado`,
             icon: "warning",
              })
              return false;
     }else btn_learn.innerHTML = "learn more" 
     swal({
        title: `El nombre del botón ha vuelto a cambiar`,
        icon: "success",
         })
         return true;
}
btn_learn.addEventListener("click", Click)

const btn_access = document.getElementById("btn-access")
const click2 = (e) => {
  e.preventDefault();
  if(btn_access.innerHTML == "apply for access"){
    btn_access.innerHTML = "acces denied"
    swal({
        title: `El nombre del botón ha cambiado`,
        icon: "warning",
         })
         return false;
}else btn_access.innerHTML = "apply for access"
swal({
   title: `El nombre del botón ha vuelto a cambiar`,
   icon: "success",
    })
    return true;

};
btn_access.addEventListener("click", click2)
getData()