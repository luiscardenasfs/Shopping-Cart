import { useState } from 'react'
import { useQuery } from 'react-query'
// Components
import Item from './item/item';
import Drawer from '@mui/material'
import { LinearProgress } from '@mui/material';
import { Grid } from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';
import {Badge} from '@mui/material'
// Styles
import { Wrapper } from './App.styles'
//types
export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
}

const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch('https://fakestoreapi.com/products')).json();


const App= () => {
  const { data, isLoading, error} = useQuery<CartItemType[]>(
    'products',
     getProducts
     );
     console.log(data)

    const getTotalItems = () => null;

    const handleAddToCart = (clickItem: CartItemType) => null;

    const handleRemoveFromCart= () => null;

    if (isLoading) return <LinearProgress />;
    if (error) return <div>Something went wrong...</div>


  return (
   <Wrapper>
    <Grid container spacing ={3}>
      {data?.map(item =>(
        <Grid item key={item.id} xs={12} sm={4}>
          <Item item={item} handleAddToCart={handleAddToCart} />
          </Grid>
      ))}
      </Grid>
   </Wrapper>
  );
}

export default App;

