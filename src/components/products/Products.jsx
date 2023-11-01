import React,{useState,useEffect} from 'react'

export default function Products() {

    let [products,setProducts] = useState([]);

    const getProducts = async()=> {
        let reponse = await fetch("https://fakestoreapi.com/products");
        let data = await reponse.json();
        setProducts(data);
    }

    useEffect(()=>{
        getProducts();
    },[]);
    
    return (

        <div className='row'>
            {products.map((ele)=>{
                return <div className='col-md-4' key={ele.id}>
                    <h2 className='text-center'>{ele.title}</h2>
                    <img src = {ele.image} className='img-fluid'/> 
                </div> 
                })}

        </div>
    )
}
