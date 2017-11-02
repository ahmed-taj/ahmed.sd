import React from 'react'

let stylesStr
if (process.env.NODE_ENV === `production`) {
	try {
		stylesStr = require(`!raw-loader!../public/styles.css`)
	} catch (e) {
		console.log(e)
	}
}

module.exports = class HTML extends React.Component {
	render() {
		let css
		if (process.env.NODE_ENV === `production`) {
			css = (
				<style
					id="gatsby-inlined-css"
					dangerouslySetInnerHTML={{ __html: stylesStr }}
				/>
			)
		}
		return (
			<html {...this.props.htmlAttributes}>
				<head>
					<meta charSet="utf-8" />
					<meta httpEquiv="x-ua-compatible" content="ie=edge" />
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1, shrink-to-fit=no"
					/>
					<meta property="og:title" content="Ahmed T. Ali" />
					<meta
						property="og:description"
						content="OSS Enthusiast Software Engineer."
					/>
					<meta
						property="og:image"
						content="https://avatars0.githubusercontent.com/u/12673605"
					/>
					<meta property="og:url" content="http://ahmed.sd" />
					<meta name="twitter:card" content="summary" />
					<title>Ahmed T. Ali</title>

					{this.props.headComponents}
					{css}
				</head>
				<body {...this.props.bodyAttributes}>
					{this.props.preBodyComponents}
					<div
						key={`body`}
						id="___gatsby"
						dangerouslySetInnerHTML={{ __html: this.props.body }}
					/>
					{this.props.postBodyComponents}
				</body>
			</html>
		)
	}
}
