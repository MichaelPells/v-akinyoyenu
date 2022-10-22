import React from 'react'

import ContactButton from './ContactButton'

import download from '../assets/images/download.png'
import chat from '../assets/images/chat.svg'
import call from '../assets/images/call.svg'
import footer_dp from '../assets/images/footer_dp.png'

const Footer = () => {

    return (
        <div>
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
							<div>Phone</div>
							+491786688559<br/>
							+4915219319686
						</div>
						<div className="footer_d">
							<div>Email</div>
							vindamilare@gmail.com
						</div>
						<div className="footer_d footer_d_last">
							<div>Follow Me</div>
						</div>
					</div>
				</div>
			</div>
        </div>
    )
}

export default Footer
