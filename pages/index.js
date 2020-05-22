import fetch from 'isomorphic-unfetch'
import Head from 'next/head'

export default class IndexPage extends React.Component {

	static async getInitialProps ({req, res, query}) {
		// try {
		// 	const protocol = req.headers['x-forwarded-proto'] || 'http';
		// 	const baseUrl = req ? `${protocol}://${req.headers.host}` : '';
		// 	const url = `${baseUrl}/api/kittens`;
		// 	const response = await fetch(url);
		// 	const kittensJson = await response.json();
		// 	return { apiUrl: url, kittens: kittensJson };
		// }
		// catch (err) {
		// 	return { error: 'Could not load kittens' }
		// }
		return {};
	};

	render () {
		return <div>
			Project System
		</div>
	};

}