import React from 'react'
import styled from 'styled-components'

import dp from '../assets/images/dp.png'
import lang from '../assets/images/lang.png'

const Styled_div_header = styled.div`
	margin: 50px;
	height: 50px;
	line-height: 50px;

	.dp {
		float: left;
		width: 50px;
		height: 50px;
	}
	.dp img {
		display: block;
		width: 100%;
		height: 100%;
	}

	.name {
		float: left;
		margin-left: 20px;
		font-weight: 500;
		font-size: 1.33em;
	}

	.menu {
		float: right;

		.menu_item {
			float: left;
			margin-right: 30px;
			font-weight: 400;
			font-size: 1em;
		}

		.menu_last {
			margin-right: 0px;
		}

		.menu_item img {
			display: table-cell;
		}
	}
`

const Header = () => {

    return (
        <Styled_div_header>
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
        </Styled_div_header>
    )
}

export default Header
