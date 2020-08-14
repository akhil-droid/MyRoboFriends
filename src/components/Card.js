import React from 'react';

const Card = ({id,name,email}) =>{
	return (
		<div className=' tc bg-light-blue dib pa3 br3 ma2 grow bw2 shadow-5'>
		  <img alt='robot pics' src = {`https://robohash.org/${id}?200%200`} />
		  <div>
		   <h1>{name}</h1>
		   <p>{email}m</p>
		  </div>
		</div>
		);
}
export default Card;
