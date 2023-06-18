import Layout from '../components/Layout.jsx'

export default function App({ Component, pageProps }) {
	return (<div>
		<Layout >
			<Component {...pageProps} />
		</Layout>
	</div>
	)
}