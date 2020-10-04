const isProd = process.env.HUGO_ENVIRONMENT === "production";

module.exports = {
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true,
	},
	purge: {
		enabled: isProd,
		content: ["./layouts/**/*.html"],
	},
	theme: {
		extend: {},
	},
	variants: {},
	plugins: [],
};
