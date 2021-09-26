import CartItem from '../CartItem/CartItem';
import { Wrapper } from './Cart.styles';
import { ProductItemType } from '../App';

type Props = {
    cartItems: ProductItemType[];
    addToCart: (clickedItem: ProductItemType) => void;
    removeFromCart: (id: number) => void;
    // clearCart: () => void;
};

const Cart: React.FC<Props> = ({cartItems, addToCart, removeFromCart}) => {
    return (
        <Wrapper>
           <h2>Your Shopping Cart</h2> 
           {cartItems.length === 0 ?
                <p>You have no items in your shopping cart.</p>
                :
                null
            }
            {cartItems.map((item) =>(
                <CartItem />
            ))}
        </Wrapper>
    )
}

export default Cart
