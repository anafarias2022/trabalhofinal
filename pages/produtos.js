import React from 'react';
import axios from 'axios';
import Link from 'next/link';

function Produtos({produtos}){
    return(
        <div>
            {produtos.map((produto) => (
                <div>
                    <Link href='/profile/[id]'as={`/profile/${produto.id}`}>
                        <div>
                            <h2>{produto.title}</h2>
                            <img src={produto.image}/>
                        </div>
                    </Link>
                    <p>${produto.price}</p>
                    <p>{produto.rating.rate} Estrelas {produto.rating.count} Avaliações</p>
                </div>
            ))}
        </div>
    )
}

export async function getStaticProps(context) {
    const response = await axios.get(
    ' https://fakestoreapi.com/products'
    );
    const data = await response.data;

    return {
        props: {produtos:data}, 
    }
}

export default Produtos;


