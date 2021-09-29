import React from 'react'
import { Button } from '@mui/material';
import {ProductItemType} from '../App';
import { Wrapper } from './CartItem.styles';


type props = {
    product: ProductItemType,
    addToCart: (clickedItem: ProductItemType) => void,
    removeFromCart: (id: number) => void,
}

const CartItem: React.FC<props> = ({product, addToCart, removeFromCart}) => (
    <Wrapper>
        <div>
            <h3>{product.title}</h3>
            <div className="information">
                <p>Price: ${product.price}</p>
                <p>Total: ${(product.price * product.amount).toFixed(2)}</p>
            </div>
            <div className="buttons">
                <Button
                    size="small"
                    disableElevation
                    variant="contained"
                    onClick={() => removeFromCart(product.id)}
                >
                    -
                </Button>
                <p>{product.amount}</p>
                <Button
                    size="small"
                    disableElevation
                    variant="contained"
                    onClick={() => addToCart(product)}
                >
                    +
                </Button>
                
                </div>
        </div>
        <img src={product.image} alt={product.title} />
    </Wrapper>
);


export default CartItem
