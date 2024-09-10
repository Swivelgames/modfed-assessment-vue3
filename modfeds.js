const replitHost = process.env.REPLIT_DEV_DOMAIN;

module.exports = {
	default: {
		apihost: `${replitHost}:4200`,
		shop_global_ui: {
			internalPort: 3000,
			externalPort: 3000,
			host: `${replitHost}:3000`,
		},
		shop_category: {
			internalPort: 3001,
			externalPort: 3001,
			host: `${replitHost}:3001`,
		},
		shop_product: {
			internalPort: 3002,
			externalPort: 3002,
			host: `${replitHost}:3002`,
		},
		shop_cart: {
			internalPort: 3003,
			externalPort: 3003,
			host: `${replitHost}:3003`,
		},
	},
};
