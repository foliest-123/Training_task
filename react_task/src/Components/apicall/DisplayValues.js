import React ,{useEffect , useState} from 'react'
import './DisplayValues.css'


const DisplayName = () => {

  const [data, setData] = useState(null);
  useEffect(() => {
    fetch('https://dummyjson.com/products/')
      .then(response => response.json())
      .then(json => {
        setData(json);
        console.log(data);
      })
      .catch(error => console.log(error));
  }, []);
    return (
      <div className='container'>
   {
    data ? (
     data.products.map((items , index)=>(
      <div className='details' key={index}>
      <p>product-id : {items.id}</p>
      <p>product-name : {items.title}</p>
      <p>product-about : {items.description}</p>
      <p>product-price : {items.price}$</p>
      <img src={items.images} alt='Mobile '/>
      </div>
     ))
    ):
    (
    <div>Loading........</div>
    )
   }

      </div>
  )
}
export default DisplayName
