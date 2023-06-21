import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/Layout.jsx'

export default function App({ Component, pageProps }) {
	return (<div>
		<ChakraProvider>

			<Layout >
				<Component {...pageProps} />
			</Layout>
		</ChakraProvider>
	</div>)
}