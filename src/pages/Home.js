import React from 'react'
import styled from 'styled-components'

import Header from '../components/Header'
import Footer from '../components/Footer'

import profile from '../assets/images/profile.png'
import project_1 from '../assets/images/project_1.png'
import navig_left from '../assets/images/navig_left.png'
import navig_right from '../assets/images/navig_right.png'
import speaker_1 from '../assets/images/speaker_1.png'
import video_1_thumbnail from '../assets/images/video_1_thumbnail.png'

const Styled_div_home = styled.div`
	.container {
		padding: 0px 50px 0px 50px;
	}

	.lead {
		background-image: url(${profile});
		background-repeat: no-repeat;
		background-position: bottom right;
		background-size: contain;
		background-color: #100BF5;
		border-radius: 10px;
		padding: 50px 269px 120px 50px;
		color: #ffffff;

		a {
			color: #ffffff;
			text-decoration: underline;
			font-size: 0.83em;
		}
	}

	.heading1 {
		font-weight: 700;
		font-size: 1.33em;
		margin-top: 0em;
		margin-bottom: 1em;
	}

	.paragraph1 {
		font-weight: 500;
		font-size: 1em;
		margin: 0em;
	}

	.heading2 {
		font-weight: 700;
		font-size: 1.33em;
		margin-top: 1.25em;
		margin-bottom: 0.625em;
	}

	.paragraph2 {
		font-weight: 400;
		font-size: 1em;
	}

	.highlight {
		color: #100BF5;
	}

	.projects_white {
		background:#ffffff;
	}

	.projects_top {
		padding: 40px 100px 40px 50px;
		height: 50px;
	}

	.projects_heading {
		float: left;
	}

	.heading3 {
		display: inline;
		font-weight: 700;
		font-size: 1.66em;
		margin: 0px;
	}

	.navig {
		float: right;
	}

	.navig_button {
		display: inline-block;
		border: #000000 3px solid;
		border-radius: 50%;
		padding: 9px;
		filter: invert(19%) sepia(82%) saturate(7452%) hue-rotate(241deg) brightness(80%) contrast(155%);
		-webkit-filter: invert(19%) sepia(82%) saturate(7452%) hue-rotate(241deg) brightness(80%) contrast(155%);
		margin-left: 15px;
		margin-right: 15px;
	}

	.projects_img img {
		width: 100%;
	}

	.projects_paging {
		padding-top: 1.66em;
		padding-bottom: 5.16em;
	}

	.testimonials {
		padding: 40px 50px 40px 50px;
	}

	.test_left {
		display: table-cell;
		width: 50%;
		vertical-align: top;
	}

	.test_right {
		display: table-cell;
		width: 50%;
	}

	.talk_rectangle {
		background: #100BF5;
		border-radius: 10px;
		padding: 60px 30px 55px 30px;
		color: #C4C4C4;
		font-weight: 400;
		font-size: 1em;
		font-style: italic;
	}

	.talk_bottom {
		height: 100px;
	}

	.talk_triangle {
		float: left;
		height: 100%;
	}

	.talk_triangle_left {
		display: inline-block;
		border-color: #100BF5 #100BF5 transparent transparent;
		border-style: solid;
		border-width: 30px 20px 30px 20px;
		margin-left: 20px;
		margin-bottom: 40px;
	}

	.talk_triangle_right {
		display: inline-block;
		border-color: #100BF5 transparent transparent #100BF5;
		border-style: solid;
		border-width: 30px 20px 30px 20px;
		margin-bottom: 40px;
	}

	.test_navig {
		height: 100%;
		display: flex;
		align-items: center;
		margin-right: 15px;
	}

	.speaker {
		display: flex;
		align-items: center;
	}

	.speaker_img {
		display: inline-block;
		width: 100px;
		height: 100px;
		border-radius: 10px;
	}

	.speaker_info {
		display: inline-block;
		font-weight: 400;
		font-size: 0.83em;
		margin-left: 20px;
	}

	.services_list {
		font-weight: 400;
		font-size: 24px;
		list-style-type: disc;
		line-height: 1em;
	}

	.home_video {
		width: 80%;
		max-width: 616px;
		border-radius: 10px;
	}

	.video_1 {
		width: 100%;
	}
`

const Home = () => {

    return (
        <React.Fragment>
			<Header />
			<Styled_div_home>
				<div className="container">
					<div className="lead">
						<h1 className="heading1">
							Hello there, I am Oluwadamilare Vincent Akinyoyenu,
							<br/>
							I am a UI/UX Designer. 
						</h1>
						<p className="paragraph1">
							UI/UX Designer and Content writing. 
							<br/>
							Based in Berlin, Germany. I specialise in responsive user-based web and application design and visual development.
						</p>
						<br/>
						<br/>
						<br/>
						<br/>
						<br/>
						<a href="/" download="">
							Download Resume
						</a>
					</div>
					<div>
						<h1 className="heading2">
							A bit about me
						</h1>
						<div className="paragraph2">
							<p>I am  Oluwadamilare Vincent Akinyoyenu, a product designer, UX leader, experience strategist, content creator and an environment loving introvert.</p>
							<p>I’ve generally respected how creative designs has the ability to change our reality. Regardless of whether it’s throught improving current interaction or offering users a fresh oppourtunity to see from a different focal lens. I love dealing with projects that deliver a good user experience.</p>
							<p>The Covid 19 era launched me into the world of UIUX design, HTML, CSS and Human psychology.</p>
							<p>I am currently a master student at the University of Europe for Applied sciences studying New Media Design. I am also working with Coconet GmbH as a working student.</p>
							<p>I devote my spare time to voluntering and environment sustainable activites.</p>
							<p>Enjoying my profile? Well, here is a quote for you.</p>
							<p className="highlight"> “It all begins with an idea, and in the end, the end-users must be satisfied.” </p>
						</div>
						<br/>
					</div>
				</div>
				<div className="projects_white">
					<div className="projects_top">
						<div className="projects_heading">
							<h1 className="heading3">
								Projects
							</h1>
						</div>
						<div className="navig">
							<img src={navig_left} alt="<" className="navig_button" />
							<img src={navig_right} alt=">" className="navig_button" />
						</div>
					</div>
					<div className="projects_img">
						<img src={project_1} alt="" />
					</div>
					<div className="projects_paging" align="center">
						-- ---
					</div>
				</div>
				<div className="testimonials">
					<div className="test_left">
						<h1 className="heading3">
							Employers and Clients Testimonials
						</h1>
						<p className="paragraph2">
							Here are some testimonies from my previous and current employers, colleagues and clients.
						</p>
						<div className="talk_rectangle">
							“Great designer, Vincent’s flexibility to change is a great strength. Always ready to learn from previous mistakes.”
						</div>
						<div className="talk_bottom">
							<div className="talk_triangle">
								<div className="talk_triangle_left"></div>
								<div className="talk_triangle_right"></div>
							</div>
							<div className="navig test_navig">
								<img src={navig_left} alt="<" className="navig_button" />
								<img src={navig_right} alt=">" className="navig_button" />
							</div>
						</div>
						<div className="speaker">
							<img src={speaker_1} alt="" className="speaker_img" />
							<div className="speaker_info">
								<b>Akinola Babalola</b><br/>
								Project Supervisor, KodeCamp
							</div>
						</div>
						<br/>
						<br/>
						<h1 className="heading3">
							My Services
						</h1>
						<br/>
						<ul className="services_list">
							<li>Web Design</li>
							<li>Coporate Branding and Graphic Design</li>
							<li>Wireframing</li>
							<li>Wearable Application Designs</li>
							<li>Mobile application design</li>
							<li>Product design</li>
						</ul>
					</div>
					<div className="test_right" align="right">
						<div className="home_video">
							<img src={video_1_thumbnail} alt="" className="video_1" />
						</div>
					</div>
				</div>
			</Styled_div_home>
			<Footer />
        </React.Fragment>
    )
}

export default Home
