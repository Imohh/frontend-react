import React from 'react'

const List = ({items}) => {
	return (
		<>
			<h2>List Component</h2>
			{items.map((item) => {
				const {id, title} = item
				return <article key={id}>
					<p>{title}</p>
					<button>edit</button>
					<button>delete</button>
				</article>
			})}

		</>
	)
}

export default List