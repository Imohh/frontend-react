import React from 'react'

const Book = (props) => {
	const { author, title } = props.book;
	return (
		<article className="">
			<h1>{title}</h1>
			<h4>{author}</h4>
			<button onClick={() => console.log("hello")}>click</button>

		</article>
	)
}

export default Book