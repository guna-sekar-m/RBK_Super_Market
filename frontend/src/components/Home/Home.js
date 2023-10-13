import React,{useState,useEffect} from 'react';
import './Home.css';
import CarouselView from './CarouselView';
import Categories from './Categories';
import OfferProducts from './OfferProducts';
import { getcategory } from '../../services/apishop/apishop';
import { getbannersettings } from '../../services/apisettings/apisettings';
import { Skeleton } from 'primereact/skeleton';
import { getofferproduct } from '../../services/apiproduct/apiproduct';
import HeroContent from './HeroContent';
const Home = () => {
  const [category, setCategory] = useState([]);
  const [banner, setBanner] = useState([]);
  const [isskeletonLoading, setisskeletonLoading] = useState(true);
  const [offerproducts,setofferproducts]= useState([]);
  let isMounted=true;
  useEffect(() => {
    if(isMounted){
      getCategory();
      getBanner();
      getofferproducts();
    }
   return () => {
    isMounted = false;
    }
   },[]);
   const getCategory = async () => {
    try {
      const response = await getcategory();
      setCategory(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getBanner = async () => {
    try {
      const response = await getbannersettings();
      setBanner(response.data);
      setisskeletonLoading(false)
    } catch (error) {
      console.log(error);
    }
  };
  const getofferproducts = async () => {
    try {
      const response = await getofferproduct();
      setofferproducts(response.data);
      
    } catch (error) {
      console.log(error);
    }
  };
  return (
  <div className="Home" data-testid="Home">
    <HeroContent/>
    <Categories category={category}/>
    <OfferProducts offerproducts={offerproducts}/>


  </div>
)};



export default Home;
