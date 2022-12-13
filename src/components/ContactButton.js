import React from 'react'
import styled from 'styled-components'


const ContactButton = ({img, action, contact, url, top}) => {

	const SC_div_contact_but = styled.div`
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
			filter: invert(19%) sepia(82%) saturate(7452%) hue-rotate(241deg) brightness(80%) contrast(155%);
			-webkit-filter: invert(19%) sepia(82%) saturate(7452%) hue-rotate(241deg) brightness(80%) contrast(155%);
			height: 2em;
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
		<SC_div_contact_but>
			<img src={img} alt="" />
			<div>
				{action}<br/>
				<a href={url}>{contact}</a>
			</div>
		</SC_div_contact_but>
	)
}

export default ContactButton
