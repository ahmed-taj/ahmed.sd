const isProd = process.env.HUGO_ENVIRONMENT === "production";

// Same as .rounded class
const borderRadius = "0.25rem";

// From GitHub CSS
const codeBackground = "#f6f8fa";

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
		options: {
			whitelistPatterns: [/bg-\S+-\d+/, /text-\S+-\d+/],
		},
	},
	theme: {
		typography: {
			default: {
				css: {
					pre: {
						color: null,
						backgroundColor: `${codeBackground}  !important`,
						borderRadius,
						tabSize: 4,
					},
					blockquote: {
						fontWeight: null,
					},
					figure: {
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					},
					img: {
						borderRadius,
					},
				},
			},
		},
	},
	variants: ["responsive", "group-hover", "hover", "focus", "active"],
	plugins: [require("@tailwindcss/typography")],
};
