import React from 'react'
import styled from 'styled-components'


const ContactButton = ({img, action, contact, url, top}) => {

	const STYLED_DIV_CONTACT_BUT = styled.div`
		border: 2px solid #100BF5;
		border-radius: 10px;
		display: flex;
		align-items: center;
		padding: 25px 30px 25px 30px;
		font-weight: 500;
		font-size: 1em;
		margin-bottom: ${top? "30px" : "0px"};

		img {
			display: inline-block;
			height: 80px;
			margin-right: 1.33em;
		}

		div {
			display: inline-block;
			white-space: pre-wrap;
		}

		a {
			color: #181616;
			font-weight: normal;
		}
	`

	return (
		<STYLED_DIV_CONTACT_BUT>
			<img src={img} alt="" />
			<div>
				{action}<br/>
				<a href={url}>{contact}</a>
			</div>
		</STYLED_DIV_CONTACT_BUT>
	)
}

export default ContactButton
