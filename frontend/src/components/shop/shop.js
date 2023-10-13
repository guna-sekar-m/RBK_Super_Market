import React,{useState,useEffect,useRef} from 'react';
import { useSearchParams,useParams } from 'react-router-dom';
import  './shop.css';
import ProductLoader from './ProductLoader';
import {getproducts,getcategory} from '../../services/apishop/apishop';
import { searchproduct } from '../../services/apiproduct/apiproduct';
const Shop = () =>{ 
 
  const [queryParameters]=useSearchParams();
  const {id}=useParams();
  const [products, setProducts] = useState([]);
  const [filterproducts, setfilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [searchcategory, setsearchcategory] = useState('');
  const [loading, setLoading] = useState(true);
  const [totalRecords, setTotalRecords] = useState(0);
  const [page, setPage] = useState(1);
  const [selectedValue, setSelectedValue] = useState('');
  let isMounted=true;
  const [hasMore, setHasMore] = useState(true);
  
  const getProducts = async () => {
    try { 
   
      if(id){
        
         const response1 = await searchproduct({ id });
        
        setfilterProducts(response1.data);
        setTotalRecords(response1.totalLength);
        setLoading(false);
        
      }
      else{
  
        const response = await getproducts({ page,searchcategory});
      
      if(searchcategory){

        setfilterProducts((prevProducts) => [...prevProducts, ...response.data]);
        setTotalRecords(response.totalLength);
  
        const offcanvasElement = document.getElementById('offcanvasResponsive');
        if (offcanvasElement && offcanvasElement.classList !== undefined) {
          offcanvasElement.classList.remove('show');
      
          // Remove the backdrop shadow
          const backdropElement = document.getElementsByClassName('offcanvas-backdrop')[0];
          if (backdropElement && backdropElement.classList !== undefined) {
            backdropElement.classList.remove('show');
          }
        }
      
      }
      else{

      setProducts((prevProducts) => [...prevProducts, ...response.data]);
      setTotalRecords(response.totalLength);
      
      }
  
      setLoading(false);
    }
     
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {

    if(isMounted){
      getCategory();
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
  const prevSearchCategoryRef = useRef(null);
  const prevIdRef = useRef(null);

  useEffect(() => {
    const isSearchCategoryChanged = prevSearchCategoryRef.current !== searchcategory;
    const isIdChanged = prevIdRef.current !== id;

    if (isMounted && (loading || isSearchCategoryChanged || isIdChanged)) {
      if (queryParameters.get('c') !== null && searchcategory === '') {
        setsearchcategory(queryParameters.get('c'));
      } else {
        getProducts();
      }
    }
    prevSearchCategoryRef.current = searchcategory;
    prevIdRef.current = id;
    return () => {
      isMounted = false;
    };
  }, [page, loading, searchcategory, id, queryParameters]);


  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      if (scrollTop + windowHeight >= documentHeight - 300 && !loading && hasMore) {
        if (filterproducts.length >= totalRecords) {
          setHasMore(false);
        }
        setLoading(true);
        setPage((prevPage) => prevPage + 1);
      }
    };
  
    document.addEventListener('scroll', handleScroll);
  
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [page,loading, hasMore]);
  
   const getSeverity = (product) => {
    switch (product.inventoryStatus) {
        case 'INSTOCK':
            return 'success'
        case 'LOWSTOCK':
            return 'warning';
        case 'OUTOFSTOCK':
            return 'danger';
        default:
            return null;
    }
   };
  const handlecategory=(data)=>{
    
    if(data.target.value!==''){
    setfilterProducts([]);
    setsearchcategory(data.target.value);
    setPage(1);
    setHasMore(true);
  
    }
  }

  return(
  <div className="Shop" data-testid="Shop">

    <ProductLoader 
    category={category} 
    products={filterproducts.length==0?products:filterproducts} 
    getSeverity={getSeverity} 
    loading={loading} 
    totalRecords={totalRecords} 
    handlecategory={handlecategory}
    selectedValue={selectedValue}
   
    />
  </div>
  
  )
};

export default Shop;
