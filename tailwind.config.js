const isProd = process.env.HUGO_ENVIRONMENT === "production";

module.exports = {
	dark: "class",
	experimental: {
		darkModeVariant: true,
	},
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true,
	},
	purge: {
		enabled: isProd,
		content: ["./layouts/**/*.html"],
	},
	theme: {
		typography: {
			default: {
				css: {
					pre: {
						color: null,
						backgroundColor: "#f6f8fa !important",
					},
				},
			},
		},
	},
	variants: {},
	plugins: [require("@tailwindcss/typography")],
};
