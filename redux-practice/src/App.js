import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { fetchCartData, sendCartData } from './store/cart-actions';
import { uiActions } from './store/ui-slice';
// import { uiActions } from './store/ui-slice';

let isInitial = true

function App() {

  const dispatch = useDispatch()
  const showCart = useSelector(state => state.ui.cartIsVisible)
  const cart = useSelector(state => state.cart)
  const notification = useSelector(state => state.ui.notification)

  useEffect(() => {
    dispatch(fetchCartData())
  }, [])

  useEffect(() => {

    if (isInitial) {
      isInitial = false
      return
    }

    if (cart.changed) {

      dispatch(sendCartData(cart))

    }

  }, [cart, dispatch])

  // useEffect(() => {
  //   const sendCartData = async () => {

  //     dispatch(uiActions.showNotification({
  //       status: 'pending',
  //       title: 'Sending...',
  //       message: 'Sending cart data!'
  //     }))
  //     const response = await fetch('https://react-practice-a92c2-default-rtdb.europe-west1.firebasedatabase.app/cart.json',
  //       {
  //         method: 'PUT',
  //         headers: {
  //           'Content-Type': 'application/json'
  //         },
  //         body: JSON.stringify(cart)
  //       })

  //     if (!response.ok) {
  //       throw new Error('Sending cart data failed!')

  //     }

  //     // const responseData = await response.json()  (we do nothing with the response here)

  //     dispatch(uiActions.showNotification({
  //       status: 'success',
  //       title: 'Success!',
  //       message: 'Sent cart data successfully!'
  //     }))

  //   }

  //   if (isInitial) {
  //     isInitial = false
  //     return
  //   }

  //   sendCartData().catch(error => {
  //     dispatch(uiActions.showNotification({
  //       status: 'error',
  //       title: 'Error!',
  //       message: 'Sending cart data failed!'
  //     }))
  //   })

  // }, [cart])


  return (
    <Fragment>
      {notification && <Notification status={notification.status} title={notification.title} message={notification.message} />}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
