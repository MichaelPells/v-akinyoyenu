import React from 'react'

import dp from '../assets/images/dp.png'
import lang from '../assets/images/lang.png'

const Header = () => {

    return (
        <div className="header">
			<div className="dp">
				<img src={dp} alt="" />
			</div>
			<div className="name">
				Oluwadamilare Vincent Akinyoyenu
			</div>

			<div className="menu">
				<div className="menu_item">
					Home
				</div>
				<div className="menu_item">
					About Me
				</div>
				<div className="menu_item">
					Projects
				</div>
				<div className="menu_item">
					Contact
				</div>
				<div className="menu_item menu_last">
					<img src={lang} alt="" />
				</div>
			</div>
        </div>
    )
}

export default Header
