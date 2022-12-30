import React from 'react'
import styled from 'styled-components'

import Header from '../components/Header'
import Footer from '../components/Footer'

import chat from '../assets/images/chat.png'
import call from '../assets/images/call.png'
import twitter from '../assets/images/twitter.png'
import linkedin from '../assets/images/linkedin.png'
import facebook from '../assets/images/facebook.png'
import instagram from '../assets/images/instagram.png'
import send from '../assets/images/send.png'


const Styled_div_contact = styled.div`
	padding: 50px;
	padding-top: 4.17em;

	.left, .right {
		display: inline-block;
		width: 50%;
		box-sizing: border-box;
		vertical-align: top;
	}

	.left {
		padding-right: 50px;
	}

	.right {
		padding-left: 50px;
		border-left: 1px solid #181616;
	}

	h2 {
		font-weight: 700;
		font-size: 1.25em;
		text-align: justify;
		margin: 0px;
	}

	.contact {
		display: block;

		.contact_img {
			display: inline-block;
			border: 2px solid #100BF5;
			border-radius: 10px;
			padding: 10px;
			margin-right: 1.33em;

			img {
				width: 80px;
			}
		}

		.contact_text {
			display: inline-block;
			white-space: pre-wrap;
			font-size: 1.33em;
			font-weight: 500;
			vertical-align: top;

			.action {
				color: rgba(24, 22, 22, 0.5);
				margin-bottom: 0.83em;
			}
			
			.contact {
				color: #181616;;
			}
		}
	}

	.footer_d {
		border: 2px solid #100BF5;
		border-radius: 10px;
		padding: 40px 50px 40px 50px;
		font-weight: 700;
		font-size: 1.33em;

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

	label {
		display: block;
		font-weight: 400;
		font-size: 1em;
	}

	input[type="text"], input[type="email"], textarea {
		display: block;
		width: 100%;
		border: 2px solid #100BF5;
		border-radius: 15px;
		background: transparent;
		padding: 1.5em;
		box-sizing: border-box;
		font-size: 1em;
		margin-top: 1em;
		margin-bottom: 1em;
	}

	input[type="submit"] {
		background: #100BF5 url(${send}) no-repeat;
		background-position: right 20px center;
		border: none;
		border-radius: 8px;
		padding: 18px 6em 18px 20px;
		color: #ffffff;
		font-size: 0.83em;
		margin-top: 1em;
		margin-bottom: 1em;
	}
`

const ContactButton = ({img, action, contact, url}) => {
	return (
		<a href={url} className="contact">
			<div className="contact_img">
				<img src={img} alt="" />
			</div>
			<div className="contact_text">
				<div className="action"> {action} </div>
				<div className="contact"> {contact} </div>
			</div>
		</a>
	)
}

const Contact = () => {

    return (
        <React.Fragment>
			<Header active="contact"/>
			<Styled_div_contact>
				<div className="left">
					<h2> Do you need me to be part of your team? Just send a message. </h2>
					<div> Feel free to contact me. I reply within 24 hours. </div>
					<br/>
					<ContactButton img={call} action="Call me" contact="+491786688559" url="tel:+491786688559" />
					<br/>
					<ContactButton img={chat} action="Chat with me" contact="vindamilare@gmail.com" url="mailto:vindamilare@gmail.com" top="true" />
					<br/>
					<div className="footer_d">
						<div> Follow Me </div>
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
				<div className="right">
					<form method="post" action="">
						<label> First Name </label>
						<input type="text" name="name"/>
						<label> Email Address </label>
						<input type="email" name="name"/>
						<label> Subject </label>
						<input type="text" name="name"/>
						<label> Message </label>
						<textarea name="name" rows="10"></textarea>
						<input type="submit" value="Send Message"/>
					</form>
				</div>
			</Styled_div_contact>
			<Footer />
        </React.Fragment>
    )
}

export default Contact
