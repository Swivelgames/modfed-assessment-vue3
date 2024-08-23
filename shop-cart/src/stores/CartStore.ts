import axios from "axios";
import { defineStore } from "pinia";
import { useAsyncState } from "@vueuse/core";

export const useCartStore = defineStore("cart", () => {
	const fetchCart = async () => {
		const response = await axios.get(`https://${modfeds.apihost}/cart`);
		const data = response.data;
		return data;
	};

	const {
		state: cart,
		isReady,
		isLoading,
		error,
	} = useAsyncState(async () => fetchCart(), []);

	const hydrateCart = async () => {
		cart.value = await fetchCart();
	};

	const updateCartQuantity = async (productId: string, quantity: number) => {
		await axios.put(`https://${modfeds.apihost}/cart/${productId}`, {
			id: productId,
			quantity,
		});
		await hydrateCart();
	};

	const addToCart = async (productId: string) => {
		const existingItem = cart.value.find((item) => item.id === productId);
		if (existingItem) {
			await updateCartQuantity(productId, existingItem.quantity + 1);
			return;
		}

		await axios.post(`https://${modfeds.apihost}/cart`, {
			id: productId,
			quantity: 1,
		});

		await hydrateCart();
	};

	const removeFromCart = async (productId: string) => {
		await axios.delete(`https://${modfeds.apihost}/cart/${productId}`);
		await hydrateCart();
	};

	return {
		cart,
		isReady,
		isLoading,
		error,
		addToCart,
		updateCartQuantity,
		removeFromCart,
	};
});
