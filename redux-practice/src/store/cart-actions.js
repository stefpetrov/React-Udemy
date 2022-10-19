import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";


export const fetchCartData = () => {

    return async (dispatch) => {

        const fetchData = async () => {

            const response = await fetch('https://react-practice-a92c2-default-rtdb.europe-west1.firebasedatabase.app/cart.json')

            if (!response.ok) {
                throw new Error('Could not fetch cart data!')
            }

            const data = await response.json()

            return data
        }

        try {
            const cartData = await fetchData()
            dispatch(cartActions.setCart({
                items: cartData.items || [],
                totalQuantity: cartData.totalQuantity
                // we did not provide the entire cartData, because if we have empty array and reload, we will get an error
            }))

        } catch (error) {
            dispatch(
                uiActions.showNotification({
                    status: "error",
                    title: "Error!",
                    message: "Fetching cart data failed!",
                })
            );

        }

    }
}

export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(
            uiActions.showNotification({
                status: "pending",
                title: "Sending...",
                message: "Sending cart data!",
            })
        );

        const sendRequest = async () => {
            const response = await fetch(
                "https://react-practice-a92c2-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ items: cart.items, totalQuantity: cart.totalQuantity }),
                    // we are not stringify the "cart", becouse we dont want to send "changed" property to Firebase
                }
            );

            if (!response.ok) {
                throw new Error("Sending cart data failed!");
            }
        };

        try {
            await sendRequest();

            dispatch(
                uiActions.showNotification({
                    status: "success",
                    title: "Success!",
                    message: "Sent cart data successfully!",
                })
            );
        } catch (error) {
            dispatch(
                uiActions.showNotification({
                    status: "error",
                    title: "Error!",
                    message: "Sending cart data failed!",
                })
            );
        }
    };
};