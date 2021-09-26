import { Button } from "@mui/material";
//types
import { ProductItemType } from '../App';
//styles
import { Wrapper } from './Item.styles';

type Props = {
    product: ProductItemType;
    handleAddToCart: (clickedItem: ProductItemType) => void;
    // handleRemoveFromCart: Function;
}

const Item: React.FC<Props> = ({product, handleAddToCart }) => (
    <Wrapper>
        <img src={product.image} alt={product.title} />
        <div>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <h3>${product.price}</h3>
            <Button onClick={() => handleAddToCart(product)}>Add to cart</Button>
        </div>
    </Wrapper>
);

export default Item