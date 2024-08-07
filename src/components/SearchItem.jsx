import React, { useEffect ,useState } from 'react'
import { items } from './Data';
import { useParams } from 'react-router-dom'
import Product from './Product';
const SearchItem = () => {
  const {term} = useParams();
  const [filterData, setFilterData] = useState([])

useEffect(() => {
  const filterdData=()=>{
    const data = items.filter((p)=>p.title.toLowerCase().includes(term.toLowerCase()));
console.log(data);
setFilterData(data)

  }
  filterdData()
  
}, [term])



  
  
  return (
    <Product items={filterData} />
  )
}

export default SearchItem