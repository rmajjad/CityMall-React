import React ,{ useEffect , useState } from 'react'
export default function Resturant() {
    let [pizza,setPizza] = useState([]);
    const getPizza = async()=> {
        let reponse = await fetch('https://forkify-api.herokuapp.com/api/search?q=pizza');
        let data = await reponse.json();
        setPizza(data.recipes);
    }
    useEffect(()=>{
        getPizza();
    },[]);
    return (
        <div className='row'>
            {pizza.map((ele)=>{
                return (<div className='col-md-4' key= {ele.recipe_id}>
                    <h2 className='text-center'>{ele.title}</h2>
                    <img src= {ele.image_url} className='img-fluid' />
                </div>)
            })}
        </div>
    )
}
