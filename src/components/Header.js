import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import dp from '../assets/images/dp.png'
import lang from '../assets/images/lang.png'

const STYLED_DIV_HEADER = styled.div`
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

			a {
				color: #181616;
			}

			.active {
				color: #100BF5;
			}

			img {
				display: table-cell;
			}
		}

		.menu_last {
			margin-right: 0px;
		}
	}
`

const Header = ({active}) => {

    return (
        <STYLED_DIV_HEADER>
			<div className="dp">
				<img src={dp} alt="" />
			</div>
			<div className="name">
				Oluwadamilare Vincent Akinyoyenu
			</div>

			<div className="menu">
				<div className="menu_item">
					{
						active === "home"
						? <span  className="active"> Home </span>
						: <Link to="/"> Home </Link>
					}
				</div>
				<div className="menu_item">
					{
						active === "about"
						? <span  className="active"> About Me </span>
						: <Link to="/about.htm"> About Me </Link>
					}
				</div>
				<div className="menu_item">
					{
						active === "projects"
						? <span  className="active"> Projects </span>
						: <Link to="/projects.htm"> Projects </Link>
					}
				</div>
				<div className="menu_item">
					{
						active === "contact"
						? <span  className="active"> Contact </span>
						: <Link to="/contact.htm"> Contact </Link>
					}
				</div>
				<div className="menu_item menu_last">
					<img src={lang} alt="" />
				</div>
			</div>
        </STYLED_DIV_HEADER>
    )
}

export default Header
