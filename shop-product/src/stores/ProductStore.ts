import axios from "axios";
import { defineStore } from "pinia";
import { useAsyncState } from "@vueuse/core";

export const useProductStore = defineStore("products", () => {
	const {
		state: products,
		isReady,
		isLoading,
		error,
	} = useAsyncState(async () => {
		const response = await axios.get(`https://${modfeds.apihost}/products`);
		const data = response.data;
		return data;
	}, []);

	const getProductById = (id: string) => {
		const product = products.value.find((product) => product.id === id);
		if (product) {
			return { ...product };
		}
	};

	return {
		products,
		isReady,
		isLoading,
		error,
		getProductById,
	};
});
