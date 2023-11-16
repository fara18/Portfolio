import React from 'react'
import Logo from '../../assets/logo.svg'

export default function Header() {
	return (
		<header className=' py-8' >
			<div className="container mx-auto">
				<div className='flex justify-between item-center'>
					<a href="#">
						<img src={Logo} alt="" />
					</a>
					<button className='btn btn-sm'>Work with me</button>
				</div>
			</div>
		</header>
	)
}
