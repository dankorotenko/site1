import React from 'react'
import useFetch from '../hooks/useFetch'

export default function Portfolio() {
    const { loading, error, data } = useFetch('http://localhost:1337/api/products?populate=%2A')

    if(loading) return <p>Loading...</p>
    if(error) return <p>Error... :(</p>
    console.log(data);
    return (
        <section className="portfolio" id="portfolio">
            <h2 className='section-title'>Portfolio</h2>
            <div className="grid">
                {data.data.map(product => (
                    <div key={product.id} className="product-card">
                        <img src={`http://localhost:1337${product.attributes.image.data.attributes.formats.medium.url}`} alt={product.attributes.name}></img>
                        <p className='product-title'>{product.attributes.name}</p>
                    </div>
                ))}
            </div>
        </section>
  )
}
