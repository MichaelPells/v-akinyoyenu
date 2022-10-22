import React from 'react'

const ContactButton = ({img, action, contact, url, top}) => {
	return (
		<div className="contact_but" style={top? {marginBottom: "30px"}:{}}>
			<img src={img} alt="" />
			<div>
				{action}<br/>
				<a href={url}>{contact}</a>
			</div>
		</div>
	)
}

export default ContactButton
