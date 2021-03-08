import { FC, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Heading } from "../heading";
import { Product } from "../product";
import { Cart } from "../cart";
import { useGetProducts, useGetCurrencies } from "../../core/hooks";
import { ICartItem } from "../../core/interfaces";


const  getItemCount = (prevCount?: number) => {
  return !prevCount ?  1: (prevCount + 1);
}

interface CartState {[key: number]: ICartItem, ids: number[]}

export const Products: FC = () => {
  const currencies = useGetCurrencies();
  const defaultCurrency = currencies? currencies[0] : "USD";
  const [currency, setCurrency] = useState(defaultCurrency)
  const products = useGetProducts(currency);

  const [isShowingCart, setIsShowingCart] = useState(false);
  const [cartItems, setCartItems] = useState<CartState>({ ids: []});
  

  useEffect(() => {
    const overflow = isShowingCart ? "hidden" : "auto";

    document.body.style.overflow = overflow;
  }, [isShowingCart]);

  useEffect(() => {
    if(products) {
      setCartItems((cartState) => {
        const newState = cartState.ids.reduce((acc, id) => {
          const product = products?.find(product => product.id === id);
  
          return {...acc, [id]: {...cartState[id], price: product!.price}};
        }, {ids: [...cartState.ids]});

        return newState;
      });
    }
  }, [products]);

  const toggleCart = () => {
    setIsShowingCart(isShowing => !isShowing);
  };


  const updateCart = (prevItems: CartState, update: ICartItem) => {
    const prevItem = prevItems[update.id];
    let newItems: any;

    if(prevItem) {
      newItems = {
        ...prevItems,
        ids: [...prevItems.ids],
        [update.id]: {...update, count:  getItemCount(prevItem.count)}
      };
    } else {
      const {ids} = prevItems;

      newItems =  {
        ...prevItems,
        ids: [update.id, ...ids], 
        [update.id]: {...update, count: getItemCount(update.count),
        },
      }
    }

    return newItems;
  }

  const deleteItem = (item: ICartItem) => {
    const filteredIds = cartItems.ids.filter(id => id !== item.id);
    const newCartItems: CartState = { ...cartItems, ids: filteredIds };

    delete newCartItems[item.id];

    setCartItems(newCartItems);
  }

  const addToCart = (item: ICartItem)=> {
    toggleCart();
    setCartItems((prevItems) => updateCart(prevItems, item));
  };



  const changeCount =(item: ICartItem, operation: string) => {
    let newItem: ICartItem;

    if(operation === "+") {
      newItem = {...item, count: (item.count! +1)};
    } else {
      newItem = item.count ?  {...item, count: (item.count! - 1)} : {...item, count: 1};
    }

    setCartItems((prevItems) => updateCart(prevItems, newItem))
  };

  return (
    <>
      <Heading title="All Products" subtitle="A 360l look at Lumin" />
      <Row className="products p-5 border">
        <Col sm={12} md={12} lg={10} className="mx-auto margin-bottom">
          <Row>
            {products?.map(product =>
              <Product product={product} onAddToCart={addToCart} key={product.id} currency={currency} />)}
          </Row>
        </Col>
      </Row>
      <Cart
        isShowing={isShowingCart}
        currencies={currencies}
        items={cartItems}
        onToggle={toggleCart}
        onCountChange={changeCount}
        onDelete={deleteItem}
        onCurrencyChange={(newValue) => newValue && setCurrency(newValue!.value)}
        currency={currency}
      />
    </>
  );
}
