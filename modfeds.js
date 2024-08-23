const replitHost = process.env.REPLIT_DEV_DOMAIN;

module.exports = {
	default: {
		apihost: `${replitHost}:4200`,
		shop_global_ui: {
			internalPort: 8080,
			externalPort: 3000,
			host: `${replitHost}:3000`,
		},
		shop_product: {
			internalPort: 8081,
			externalPort: 3001,
			host: `${replitHost}:3001`,
		},
		shop_category: {
			internalPort: 8082,
			externalPort: 3002,
			host: `${replitHost}:3002`,
		},
		shop_cart: {
			internalPort: 8083,
			externalPort: 3003,
			host: `${replitHost}:3003`,
		},
	},
};
