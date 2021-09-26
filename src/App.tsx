import { useQuery } from "react-query";
//components
import Item from './Item/Item';
import { Drawer, CircularProgress, Grid, Badge  } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
//styles
import { AppContainer } from "./App.styles";
//types
export type ProductItemType = {
  id: number,
  title: string,
  price: number,
  image: string,
  description: string,
  quantity: number,
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
  const { data, isLoading, isError } = useQuery<ProductItemType[]>(
    'products',
     getProducts
     );
     console.log(data);

     const handleAddToCart = (clickedItem: ProductItemType) => null;
     const handleRemoveFromCart = () => null;
      const handleRemoveAllFromCart = () => null;
      const handleOpenCart = () => null;
      const handleCloseCart = () => null;
      const handleOpenDrawer = () => null;
      const handleCloseDrawer = () => null;
      const handleOpenProduct = () => null;
      const handleCloseProduct = () => null;

      if (isLoading) return <CircularProgress />;
      if (isError) return <p>Error :(</p>;
  return (
   <AppContainer>
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
