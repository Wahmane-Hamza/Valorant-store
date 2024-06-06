import React, { useEffect, useRef, useState } from 'react'
import db from './db.json'
import Compt from './compt'

export default function App() {
  const [products, setProducts] = useState([]);
  const [addProducts, setaddProducts] = useState([]);
  const [correct, setCorrect] = useState(null);
  const [errer,seterrer] = useState(null)
  const [packet,setpacket] = useState(false)
  const [compt,setcompt] = useState('')

// --------------------------------
  const product = db.products
  useEffect(()=>{
  setProducts(product)
  },[])

// --------------------------------
  const check = (e) =>
  {
    e.preventDefault()
    let form = e.target

    let compt = db.users.filter((e)=> e.email === form.email.value && e.password === form.password.value)

    setcompt(compt[0].id)

    compt == false ? seterrer("your password or email encorrect"): setCorrect(true) 

  }
// --------------------------------

  function logOut()
  {
    setCorrect(false)
    seterrer(null)
  }
// --------------------------------
  const addProduct = (e) =>
  {
    e.preventDefault()
    setaddProducts(old => [...old,{
      "id" : compt,
      "name": e.target.querySelector('h1').textContent,
      "price":e.target.querySelector('h2').textContent,
      "shortDesc": "Nulla facilisi. Curabitur at lacus ac velit ornare lobortis.",
      "description": "Cras sagittis. Praesent nec nisl a purus blandit viverra. Ut leo. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Fusce a quam.",
      "img": e.target.querySelector('img').getAttribute('data-img')
    }])
  }
  
// --------------------------------
  function showPacet()
  {
    setpacket(true)
  }

// --------------------------------

function showProduct()
{
  setpacket(false)
}

// --------------------------------

const deletProduct = (e)=>
{
  e.preventDefault()
  const img = e.target.querySelector('img').getAttribute('data-img')
  const prod = addProducts.filter((e) => e.img != img)

  setaddProducts(prod)
}

  return(
    <div>
      
      {correct == true ?<div> 
      <nav>
        <img src={require("./img_product/logo.png")} alt=""/>
        <ul>
            <li onClick={showProduct}>
                <div>
                <span></span>
                <a>Product</a>
                </div>
            </li>
            <li onClick={showPacet}>
                <div>
                <span></span>
                <a >Pacet</a>
                </div>
            </li>
            <li onClick={logOut}>
                <div>
                    <span></span>
                    <a >Log out</a>
                </div>
            </li>
        </ul>
      </nav>
        {packet == true ? <header>
          {addProducts.filter((e) => e.id == compt).map((e,i)=>{return <form onSubmit={(e) => deletProduct(e)} className='cart' key={i}> 
            <img src={require(`${e.img}`)} data-img={e.img}/>
            <h1 name='name'>{e.name}</h1> 
            <h2 name='price'>{e.price}</h2> 
            <p name='shortDesc'>{e.shortDesc}</p>
            <div className='but'>
            <button>
                <div >
                    <span></span>
                    <a type='submit'>Delet Product</a>
                </div>
            </button>
            </div>
          </form>})}
        </header>:<header>
          {products.map((e,i)=>{return <form onSubmit={(e) => addProduct(e)} className='cart' key={i}>
            <img src={require(`${e.img}`)} data-img={e.img}/> 
            <h1>{e.name}</h1> 
            <h2>{e.price}</h2> 
            <p>{e.shortDesc}</p>
            <div className='but'>
            <button>
                <div >
                    <span></span>
                    <a type='submit'>Add Product</a>
                </div>
            </button>
            </div>
          </form>})}
        </header>
        }

        </div>:<div className='login'><Compt check={check} errer={errer}/></div>}
      </div>
  )
}
