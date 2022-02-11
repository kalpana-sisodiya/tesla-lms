import React from 'react'
import styled from 'styled-components'

export default function Section(props){
	return(
		<Wrapper bg={props.bgImage}>
			<ModelName>
				<h1>{props.title}</h1>
				<p>{props.tagline}</p>
			</ModelName>

			<CTA>
				<ButtonGroup>
					<LeftBtn>{props.leftBtn}</LeftBtn>
					{props.rightBtn && <RightBtn>{props.rightBtn}</RightBtn>}					
				</ButtonGroup>

				{props.arrow && <Arrow src="images/down-arrow.svg" />}

				
			</CTA>

		</Wrapper>
	)
}


const Wrapper = styled.section`
	background-image: url(images/${props=>props.bg});
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	height: 100vh;
	width: 100vw;
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`
const ModelName = styled.div`
	padding-top: 15vh;
	h1{
		font-size: 3rem;
	}
`
const ButtonGroup = styled.div`
	padding-bottom: 5vh;
	display: flex;
	justify-content: center;
	align-items: center;
	@media all and (max-width: 600px){
		flex-direction: column;
	}
`
const LeftBtn = styled.button`
	background-color: rgba(23,26,32,0.8);
	height: 40px;
	width: 256px;
	color: #fff;
	border: none;
	border-radius: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	opacity: 0.85;
	text-transform: uppercase;
	font-size: 12px;
	cursor: pointer;
	margin: 8px;
`
const RightBtn = styled(LeftBtn)`
		background-color: #fff;
		color: #000;
`
const Arrow = styled.img`
	height: 40px;
	margin-bottom: 20px;
	animation: bounce infinite 2s;
	-webkit-animation: bounce infinite 2s;
	cursor:pointer;
`

const CTA = styled.div``