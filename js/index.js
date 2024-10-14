async function getData(){
    const result = await fetch('https://fakestoreapi.com/products/');
    const products = await result.json();
    console.log(products);
}
getData()