import Slideshow from "@/components/slideshow/Slideshow";
import styles from "./homepage.module.css";
import Type from "@/components/type/Type";


const  getData = async (api) => {
  const res = await fetch(api)
  
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}



export default async function Home() {
  const fdata = await getData('http://localhost:3001/api/v1/get-shoes')
  const data = fdata.data
  const groupedByBrand = {};
  data.forEach(item => {
    const brand = item.brand.toLowerCase();
    if (!groupedByBrand[brand]){
      groupedByBrand[brand] = [];
    }

    groupedByBrand[brand].push(item)
  });

  return <div>
    <Slideshow/>
    <Type brand = {groupedByBrand['adidas']} name = 'ADIDAS'/>
    <Type brand = {groupedByBrand['vans']} name = 'VANS'/>
    <Type brand = {groupedByBrand['nike']} name = 'NIKE'/>
  </div>;
}
