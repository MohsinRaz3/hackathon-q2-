import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CartState {
    items: Array<any>;
    totalAmount: number;
    totalQuantity: number;
}

const initialState: CartState = {
    items: [],
    totalAmount: 0,
    totalQuantity: 0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, actions: PayloadAction<{ product: any, quantity: any }>) => {
            const newItem = actions.payload.product;
            const existingItem = state.items.find((item) => item.id === newItem.id);

            state.totalQuantity = state.totalQuantity + actions.payload.quantity;
            state.totalAmount =
                state.totalAmount +
                actions.payload.quantity * actions.payload.product.price;

            if (!existingItem) {
                const totalPrice = newItem.price * actions.payload.quantity;
                state.items.push({
                    ...newItem,
                    quantity: actions.payload.quantity,
                    totalPrice,
                });
            } else {
                const totalPrice =
                    existingItem.totalPrice +
                    existingItem.price * actions.payload.quantity;
                existingItem.quantity += actions.payload.quantity;
                existingItem.totalPrice = totalPrice;
            }
        },
        removeFromCart(state: CartState, action: PayloadAction<string>) {
            const productId = action.payload;
            const existingItem = state.items.find((item) => item.id === productId);

            state.totalQuantity--;

            state.totalAmount = state.totalAmount - existingItem?.price!;

            if (existingItem?.quantity === 1) {
                state.items = state.items.filter((item) => item.id !== productId);
            } else {
                existingItem!.quantity--;
                existingItem!.totalPrice =
                    existingItem!.totalPrice - existingItem?.price!;
            }
        },
        clearCart(state) {
            state = initialState;
        },

    },
})

// Action creators are generated for each case reducer function
export const cartActions = cartSlice.actions

export default cartSlice.reducer