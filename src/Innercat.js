import React from 'react'

function Innercat() {
  const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products/category/smartphones')
        .then(res => res.json())
        .then(data => {
            setProducts(data)
            console.log(products)
            })
      }, [products]);
  return (
    <div>Innercat</div>
  )
}

export default Innercat