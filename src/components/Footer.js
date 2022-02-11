import React from 'react'
import styled from 'styled-components'


export default function Footer(){

	return(
		<BottomMenu>
			<ul>
				<li><a href="">Tesla © 2022</a></li>
				<li><a href="">Privacy & Legal</a></li>
				<li><a href="">Contact</a></li>
				<li><a href="">Careers</a></li>
				<li><a href="">News</a></li>
				<li><a href="">Engage</a></li>
				<li><a href="">Locations</a></li>
			</ul>
		</BottomMenu>
	)
}

const BottomMenu = styled.section`
	margin-bottom:30px;
	ul{
		display:flex;
		display:-webkit-flex;
		justify-content: center;
		align-item:center;
		list-style:none;
	}
	li{
		padding:0 10px;
	}
	a{
		color:#000;
		text-decoration:none;
		font-size:14px;
	}

`