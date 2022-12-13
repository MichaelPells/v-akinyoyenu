import React from 'react'
import styled from 'styled-components'

import ContactButton from './ContactButton'

import download from '../assets/images/download.png'
import chat from '../assets/images/chat.svg'
import call from '../assets/images/call.svg'
import footer_dp from '../assets/images/footer_dp.png'
import twitter from '../assets/images/twitter.png'
import linkedin from '../assets/images/linkedin.png'
import facebook from '../assets/images/facebook.png'
import instagram from '../assets/images/instagram.png'

const Styled_div_footer = styled.div`
	.footer_top {
		background: #ffffff;
		padding: 50px;
	}

	.footer_top_left {
		display: table-cell;
		width: 55%;
		vertical-align: top;

		h2 {
			font-weight: 700;
			font-size: 1.66em;
			margin: 0px 0px 20px 0px;
		}

		p {
			font-weight: 500;
			font-size: 1em;
			margin: 0px;
		}
	}

	.footer_top_right {
		display: table-cell;
		width: 40%;
	}

	.dowload_res {
		background: #100BF5;
		border-radius: 8px;
		padding: 18px 20px 18px 20px;
		color: #ffffff;
		display: inline-block;

		div {
			float: left;
			margin-right: 60px;
			vertical-align: bottom;
			font-weight: 400;
			font-size: 0.83em;
		}

		img {
			display: table-cell;
			vertical-align: middle;
			filter: invert(100%);
			-webkit-filter: invert(100%);
		}
	}

	.footer_bottom_container {
		border-color: #100BF5;
		border-width: 1px 0px 1px 0px;
		border-style: solid;
		height: 100px;
		margin: 40px 50px 40px 50px;
		padding: 40px 0px 40px 0px;
	}

	.footer_dp {
		float: left;
		width: 100px;
		height: 100px;

		img {
			display: block;
			width: 100%;
			height: 100%;
		}
	}

	.footer_name {
		float: left;
		display: flex;
		height: 100%;
		align-items: center;
		margin-left: 20px;
		font-weight: 500;
		font-size: 1em;
	}

	.footer_details {
		float: right;
	}

	.footer_d {
		float: left;
		margin-right: 25px;
		font-weight: 400;

		div {
			font-weight: 500;
			font-size: 1em;
		}

		li {
			font-size: 0.83em;
			list-style-type: none;
		}

		li.sm_icon {
			display: inline-block;
			padding: 1em 5px 0px 5px;

			li.sm_icon img {
				display: inline-block;
				height: 50px;
			}
		}
	}

	.footer_d_last {
		margin-right: 0px;
	}
`

const Footer = () => {

    return (
        <Styled_div_footer>
			<div className="footer_top">
				<div class="footer_top_left">
					<h2>
						Excited with my portfolio?
					</h2>
					<p>
						I am set to be part of your team. Together we can give your customers the best user experience.
						<br/>
						<br/>
					</p>
					<div className="dowload_res">
						<div>
							Download Resume
						</div>
						<img src={download} alt="" />
					</div>
				</div>
				<div class="footer_top_right">
					<ContactButton img={chat} action="Chat with me" contact="vindamilare@gmail.com" url="mailto:vindamilare@gmail.com" top="true" />
					<ContactButton img={call} action="Call me" contact="+491786688559" url="tel:+491786688559" />
				</div>
			</div>
			<div className="footer_bottom">
				<div className="footer_bottom_container">
					<div className="footer_dp">
						<img src={footer_dp} alt="" />
					</div>
					<div className="footer_name">
						Vincent Oluwadamilare Akinyoyenu<br/>
						Celsiusstraße 4, 12207 Berlin
					</div>

					<div className="footer_details">
						<div className="footer_d">
							<div> Phone </div>
							<li> +491786688559 </li>
							<li> +4915219319686 </li>
						</div>
						<div className="footer_d">
							<div> Email </div>
							<li> vindamilare@gmail.com </li>
						</div>
						<div className="footer_d footer_d_last">
							<div align="center"> Follow Me </div>
							<li className="sm_icon">
								<img src={twitter} alt="t"/>
							</li>
							<li className="sm_icon">
								<img src={linkedin} alt="in"/>
							</li>
							<li className="sm_icon">
								<img src={facebook} alt="f"/>
							</li>
							<li className="sm_icon">
								<img src={instagram} alt="ig"/>
							</li>
						</div>
					</div>
				</div>
			</div>
        </Styled_div_footer>
    )
}

export default Footer
