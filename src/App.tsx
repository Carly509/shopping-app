import { useState } from "react";
import { useQuery } from "react-query";
//components
import Cart from "./Cart/Cart";
import Item from './Item/Item';
import { Drawer, CircularProgress, Grid, Badge  } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
//styles
import { AppContainer, StyledIconButton } from "./App.styles";
//types
export type ProductItemType = {
  id: number,
  title: string,
  price: number,
  image: string,
  description: string,
  amount: number,
  category: string,
  isAvailable: boolean,
  isInCart: boolean,
};

const getProducts = async (): Promise<ProductItemType[]> => 
// Old way 
// {
//   const response = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=celular');
//   const data = await response.json();
//   return data.results;
// };
// New way
await(await(await fetch('https://fakestoreapi.com/products')).json());

const App = () => {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [cartItem, setCartItem] = useState([] as ProductItemType[]);
  const { data, isLoading, isError } = useQuery<ProductItemType[]>(
    'products',
     getProducts
     );
     console.log(data);
      const getTotalItems= (items: ProductItemType[]) => 
      items.reduce((acc: number, item) => acc + item.amount, 0);
     const handleAddToCart = (clickedItem: ProductItemType) => {
       setCartItem(prev => {
         // 1. is the item already in the cart?
         const isInCart = prev.find(item => item.id === clickedItem.id);
         if (isInCart) {
           return prev.map(item => 
            item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }  
            : item
            );
         }
          // 2. if not, add it
          return [...prev, {...clickedItem, amount : 1}];
        });
      };
   
     const handleRemoveFromCart = (id: number) => {
        setCartItem(prev => (
          // prev.reduce((acc: ProductItemType[], item) => {
          //   if (item.id === id) {
          //     return [...acc, { ...item, amount: item.amount - 1 }];
          //   }
          //   return acc;
          // }
          // , prev)
          prev.reduce((acc, item) => {
            if (item.id === id) {
              if (item.amount === 1) return acc;
              return [...acc, { ...item, amount: item.amount - 1 }];
            }
        else {
          return [...acc, item];
        }
          }, [] as ProductItemType[])
        ));
     }
      const handleRemoveAllFromCart = (id: number) => {
        setCartItem(prev => {
          return prev.filter(item => item.id !== id);
        });
      }
      const handleOpenDrawer = () => null;
      const handleCloseDrawer = () => null;
      const handleOpenProduct = () => null;
      const handleCloseProduct = () => null;

      if (isLoading) return <CircularProgress />;
      if (isError) return <p>Error :(</p>;
  return (
   <AppContainer>
     <Drawer anchor='right' open={cartIsOpen} onClose={() => setCartIsOpen(false)}>
      <Cart cartItems={cartItem} addToCart={handleAddToCart} removeFromCart={handleRemoveFromCart} />
     </Drawer>
     <StyledIconButton onClick={() => setCartIsOpen(true)}>
       <Badge badgeContent={getTotalItems(cartItem)} color='error'>
         <AddShoppingCartIcon />
       </Badge>
     </StyledIconButton>
     <Grid container spacing={3}>
        {data?.map(item => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item product={item} handleAddToCart={handleAddToCart}  />
          </Grid>
        ))}
     </Grid>
   </AppContainer>

  );
}

export default App;
