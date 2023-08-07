import React, { useState, useEffect } from 'react'
import { useFetch } from './useFetch'

const url = 'https://fakestoreapi.com/products'

const Tutorial = () => {
	const {loading, products} = useFetch(url)
	console.log(products)

	return (
		<>
			<h2>{loading ? 'loading...' : 'data'}</h2>
		</>
	)
}

export default Tutorial