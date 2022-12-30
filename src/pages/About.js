import React from 'react'
import styled from 'styled-components'

import Header from '../components/Header'
import Footer from '../components/Footer'

import figma from '../assets/images/figma_icon.png'
import sketch from '../assets/images/sketch_icon.png'
import xd from '../assets/images/xd_icon.png'
import indesign from '../assets/images/indesign_icon.png'
import photoshop from '../assets/images/photoshop_icon.png'
import illustrator from '../assets/images/illustrator_icon.png'
import miro from '../assets/images/miro_icon.png'
import invision from '../assets/images/invision_icon.png'
import html5 from '../assets/images/html5_icon.png'
import css3 from '../assets/images/css3_icon.png'

const STYLED_DIV_ABOUT = styled.div`
	padding: 50px;

	h2 {
		font-weight: 700;
		font-size: 1.66em;
		text-align: center;
		margin: 0px;
		margin-bottom: 1em;
	}

	.intro {
		font-weight: 500;
		font-size: 1.33em;
		text-align: justify;
	}

	.blue_container {
		background-image: none;
		background-repeat: no-repeat;
		background-position: bottom right;
		background-size: contain;
		background-color: #100BF5;
		border-radius: 10px;
		padding: 50px 110px 20px 110px;
		margin-bottom: 40px;
		color: #ffffff;
		text-align: center;
	}

	h3 {
		font-weight: 700;
		font-size: 1.33em;
		text-align: center;
		margin: 0px;
		margin-bottom: 1.66em;
	}

	.section {
		display: inline-block;
		width: 50%;
		min-width: 210px; /* verify later */
		box-sizing: border-box;
		padding: 0px 40px 40px 40px;
		font-weight: 400;
		font-size: 1.33em;
		text-align: justify;
		vertical-align: top;
	}

	.note {
		padding: 0px 40px 0px 40px;
		font-weight: 400;
		font-size: 1.33em;
		text-align: justify;
	}

	.tools {
		padding: 20px 40px 20px 40px;
	}

	.tool {
		display: inline-block;
		width: 33%;
		padding-bottom: 50px;

		img {
			width: 200px;
			height: 200px;
		}

		div {
			width: 200px;
			padding-top: 10px;
		}
	}
`

const About = () => {

    return (
        <React.Fragment>
			<Header active="about"/>
			<STYLED_DIV_ABOUT>
				<h2> I am happy to meet you </h2>
				<p className="intro">
					I'm a UI/UX designer living in Berlin, Germany. UX is central to everything I do. I love to work on meaningful projects with inspiring, creative people that challenge the status quo with a focus on user experience.
				</p>
				<br/>
				<div className="blue_container">
					<h3> How I leverage design as a problem-solving tool </h3>
					<div className="section">
						1. Strategy & Research
						<br/><br/>
						The first step in any project is to get a better understanding of the client. The worth in accomplishing this work prior to moving a solitary pixel is to lay out a more prominent feeling of trust and to show every client that I care about their business and long-haul achievement.
					</div>
					<div className="section">
						2. UX Design & Interaction Design
						<br/><br/>
						The design of a project is similar, while possibly not more significant than what it looks like and works. I use design thinking in each project to get the best user-centred solution. My design solution is focused on the user experiences and not myself in order words, bias is out of the question. 
					</div>
					<div className="section">
						3. UI Design & Prototyping
						<br/><br/>
						Wonderful UI designs can be abstract depending on the user, I enjoy the challenge of making generally lovely designs that additionally influence miniature communications. With visual design and prototyping, I have an opportunity to please my client's style.
					</div>
					<div className="section">
						4. User Testing & Iteration
						<br/><br/>
						Designing a product and putting it out into the world is exceptionally fulfilling. Nonetheless, accepting totalling criticism, and making corrections such that it fits in view of user needs is considerably more satisfying. Figuring out how to gauge progress and iterate is significant.
					</div>
				</div>

				<div className="blue_container">
					<h3> Tools </h3>
					<p className="note">
						Tools are great but do they matter? The results are what the world wants to see. I began my design career using Adobe Photoshop. Since then, I have driven myself to advance whatever number of devices would be prudent without being negative or pompous of another tool that might possibly improve my work process. I saw this quote in one of the design books I read sometimes ago, "the early bird gets the worm". I don't just read blogs about a new tool, I really battle through and get familiar with it.
					</p>

					<div className="tools" align="left">
						<div className="tool" align="left">
							<img src={figma} alt = ""/>
							<div align="center"> Figma </div>
						</div>
						<div className="tool" align="center">
							<img src={sketch} alt = ""/>
							<div align="center"> Sketch </div>
						</div>
						<div className="tool" align="right">
							<img src={xd} alt = ""/>
							<div align="center"> Adobe XD </div>
						</div>
						<div className="tool" align="left">
							<img src={indesign} alt = ""/>
							<div align="center"> Adobe InDesign </div>
						</div>
						<div className="tool" align="center">
							<img src={photoshop} alt = ""/>
							<div align="center"> Adobe Photoshop </div>
						</div>
						<div className="tool" align="right">
							<img src={illustrator} alt = ""/>
							<div align="center"> Adobe Illustrator </div>
						</div>
						<div className="tool" align="left">
							<img src={miro} alt = ""/>
							<div align="center"> Miro </div>
						</div>
						<div className="tool" align="center">
							<img src={invision} alt = ""/>
							<div align="center"> inVision </div>
						</div>
						<div className="tool" align="right">
							<img src={html5} alt = ""/>
							<div align="center"> HTML 5 </div>
						</div>
						<div className="tool" align="left">
							<img src={css3} alt = ""/>
							<div align="center"> CSS 3 </div>
						</div>
					</div>
				</div>
				
				<p>
					Growing up in the western part of Nigeria, I was fascinated by tech guys and how they are able to solve people's problems with ease. I vowed to one day create a solution that will put me in the technology world.  
				</p>
				<p>
					This passion later developed into my love for creativity and communication which my professors saw in me and advised that I take any creativity course. This placed my feet on the design part.  After my bachelor's, I developed a way of communicating my ideas thoroughly with my words and was also able to communicate them visually with my designs.
				</p>
				<p>
					While I love communication and design, I was still not fulfilled, I then began to teach myself more about design and code (HTML and CSS) so that I could empower myself to not only do that but also establish myself because of the employment situation in my country.
				</p>
				<p>
					Today, I focus my energy on learning as much as possible while maintaining a healthy balance between design, communication and solving problems. Having the ability to make a difference by designing products that help people live a better life is fulfilling.
				</p>

				Vincent Oluwadamilare <br/>
				+491786688559 <br/>
				vindamilare@gmail.com <br/>
			</STYLED_DIV_ABOUT>
			<Footer />
        </React.Fragment>
    )
}

export default About
