import { useState, useEffect } from "react"

const Home =()=>{

    const [listaProduto, setListaProduto]=useState([])

    useEffect(()=>{
        fetch("http://localhost:5000/produto")
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            setListaProduto(data)
        })
    })

    return(
        <>
            {listaProduto.map((item, index)=>(
                <div key={index}>
                    {item.nome}
                    <img src={item.foto}/>

                </div>
            ))
                
            }
        </>
    )
}

export default Home