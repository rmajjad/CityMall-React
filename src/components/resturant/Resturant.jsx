import React ,{ useEffect , useState } from 'react'
export default function Resturant() {
    let [pizza,setPizza] = useState([]);
    let [potato,setpotato] = useState([]);
    let [donuts,setdonuts] = useState([]);
    const getPizza = async()=> {
        let reponse = await fetch('https://forkify-api.herokuapp.com/api/search?q=pizza');
        let data = await reponse.json();
        setPizza(data.recipes);
    }
    useEffect(()=>{
        getPizza();
    },[]);

    const getpotato = async()=> {
        let reponse = await fetch('https://forkify-api.herokuapp.com/api/search?q=potato');
        let data = await reponse.json();
        setpotato(data.recipes);
    }
    useEffect(()=>{
        getpotato();
    },[]);

    const getdonuts = async()=> {
        let reponse = await fetch('https://forkify-api.herokuapp.com/api/search?q=donuts');
        let data = await reponse.json();
        setdonuts(data.recipes);
    }
    useEffect(()=>{
        getdonuts();
    },[]);

    return (
        <div className='row'>
            <h2 className='text-center text-white p-2 bg-success'>pizza</h2>
            {pizza.map((ele)=>{
                return (<>
                
                <div className='col-md-4' key= {ele.recipe_id}>
                    <h2 className='text-center'>{ele.title}</h2>
                    <img src= {ele.image_url} className='img-fluid' />
                </div>
                </>
                )
            })}
                    <h2 className='text-center text-white p-2 bg-success'>potato</h2>
            {potato.map((ele)=>{
                return (<div className='col-md-4' key= {ele.recipe_id}>
                    <h2 className='text-center'>{ele.title}</h2>
                    <img src= {ele.image_url} className='img-fluid' />
                </div>)
            })}

            <h2 className='text-center text-white p-2 bg-success'>dunats</h2>
            {donuts.map((ele)=>{
                return (<div className='col-md-4' key= {ele.recipe_id}>
                    <h2 className='text-center'>{ele.title}</h2>
                    <img src= {ele.image_url} className='img-fluid' />
                </div>)
            })}
            </div>
    )
}
