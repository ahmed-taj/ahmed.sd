import React from 'react'

const imageURL = 'https://avatars0.githubusercontent.com/u/12673605'

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
					<meta property="description" content="Full Stack Software Engineer" />
					<meta
						property="og:description"
						content="Full Stack Software Engineer"
					/>
					<meta property="og:image" content={imageURL} />
					<meta property="og:url" content="https://ahmed.sd" />
					<meta name="twitter:card" content="summary" />
					<link rel="shortcut icon" href={imageURL} type="image/png" />
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
