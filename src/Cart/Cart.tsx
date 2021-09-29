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

    const calculateTotal = (cartItems: ProductItemType[]) => 
        cartItems.reduce((acc: number, item) => acc + item.amount * item.price, 0);
        //this method below can only take the amount only one time
        // let total = 0;
        // cartItems.forEach(item => {
        //     total += item.price;
        // });
        // return total;
    

    return (
        <Wrapper>
           <h2>Your Shopping Cart</h2> 
           {cartItems.length === 0 ?
                <p>You have no items in your shopping cart.</p>
                :
                null
            }
            {cartItems.map((item) =>(
                <CartItem 
                key={item.id} 
                product={item} 
                addToCart={addToCart} 
                removeFromCart={removeFromCart}
                />
            ))}
            <h3>Total: ${calculateTotal(cartItems).toFixed(2)}</h3>
        </Wrapper>
    )
}

export default Cart
