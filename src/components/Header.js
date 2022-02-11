import React, {useState} from 'react'
import styled from 'styled-components'
import CloseIcon from '@mui/icons-material/Close';

export default function Header(){

	const [menuStatus, setMenuStatus] = useState(false);

	return(
		<Menu>
			<LeftMenu>
				<img src="images/logo.svg" alt="logo"  width="120" height="18" />
			</LeftMenu>
			<CenterMenu>
				<ul>
					<li><a href="">Model S</a></li>
					<li>
						<a href="">Model 3</a>
					</li>
					<li>
						<a href="">Model X</a>
					</li>
					<li>
						<a href="">Model Y</a>
					</li>
					<li>
						<a href="">Solar Roof</a>
					</li>
					<li>
						<a href="">Solar Panels</a>
					</li>
				</ul>
			</CenterMenu>
			<RightMenu>
				<ul>
					<li><a href="">Shop</a></li>
					<li><a href="">Account</a></li>
					<li><CustomMenuIcon onClick = {() => setMenuStatus(true)}>Menu</CustomMenuIcon></li>
				</ul>
			</RightMenu>
			<Hamburger open = {menuStatus} >
				<CloseWrapper>
					<CrossIcon onClick = {() => setMenuStatus(false)}/>
				</CloseWrapper>
				<ul className='side-menu'>
					<li><a href="">Existing Inventory</a></li>
					<li><a href="">Used Inventory</a></li>
					<li><a href="">Trade-In</a></li>
					<li><a href="">Test Drive</a></li>
					<li><a href="">Cybertruck</a></li>
					<li><a href="">Roadster</a></li>
					<li><a href="">Semi</a></li>
					<li><a href="">Charging</a></li>
					<li><a href="">Powerwall</a></li>
					<li><a href="">Commercial Energy</a></li>
					<li><a href="">Utilities</a></li>
					<li><a href="">Find Us</a></li>
					<li><a href="">Support</a></li>
					<li><a href="">Investor Relations</a></li>
					<li><div>
						<svg width="20" className='icon icon-globe' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-.5 5.477a9.475 9.475 0 0 1-3.032-.66c.732-1.763 1.816-2.99 3.032-3.258v3.918zm0 1V11.5H7.514c.044-1.349.262-2.622.613-3.742 1.068.424 2.206.664 3.373.719zm0 4.023v3.023a10.475 10.475 0 0 0-3.373.719 14.132 14.132 0 0 1-.613-3.742H11.5zm0 4.023v3.918c-1.216-.268-2.3-1.495-3.032-3.258a9.475 9.475 0 0 1 3.032-.66zm1 0a9.475 9.475 0 0 1 3.032.66c-.732 1.763-1.816 2.99-3.032 3.258v-3.918zm0-1V12.5h3.986a14.132 14.132 0 0 1-.613 3.742 10.475 10.475 0 0 0-3.373-.719zm0-4.023V8.476a10.47 10.47 0 0 0 3.374-.714c.35 1.119.568 2.39.612 3.738H12.5zm0-4.024V3.56c1.217.268 2.301 1.497 3.034 3.262-.96.384-1.983.6-3.034.655zm2.582-3.389a8.5 8.5 0 0 1 2.544 1.558 9.47 9.47 0 0 1-1.168.74c-.377-.9-.84-1.681-1.376-2.298zM7.544 6.382a9.47 9.47 0 0 1-1.172-.734 8.499 8.499 0 0 1 2.546-1.561c-.535.616-.998 1.397-1.374 2.295zm-.353.948c-.396 1.237-.633 2.651-.677 4.17H3.525a8.453 8.453 0 0 1 2.129-5.135c.485.369 1.001.688 1.537.965zm-.677 5.17c.044 1.519.28 2.933.677 4.17-.536.277-1.052.596-1.537.965A8.453 8.453 0 0 1 3.525 12.5h2.99zm1.03 5.118c.376.898.839 1.679 1.374 2.295a8.5 8.5 0 0 1-2.546-1.56 9.465 9.465 0 0 1 1.172-.735zm8.912 0a9.38 9.38 0 0 1 1.172.734 8.5 8.5 0 0 1-2.546 1.561c.535-.616.998-1.397 1.374-2.295zm.353-.948c.396-1.237.633-2.651.677-4.17h2.989a8.453 8.453 0 0 1-2.129 5.135 10.468 10.468 0 0 0-1.537-.965zm.677-5.17c-.044-1.516-.28-2.93-.676-4.164a10.475 10.475 0 0 0 1.533-.975 8.452 8.452 0 0 1 2.132 5.139h-2.99z" fill="currentColor"></path></svg>
						<div><strong>United States</strong><span>English</span></div>
						</div>
					</li>
				</ul>
			</Hamburger>
		</Menu>
	)
}
const Menu = styled.div`
	position: fixed;
	width: 100%;
	height: 60px;
	padding-left: 2rem;
	padding-right: 2rem;
	display: flex;
	justify-content:space-between;
	align-items: center;
	z-index: 10;
	ul{
		display: flex;
		display:-webkit-flex;
	}
	li{
		list-style: none;
		padding-left: 0.75rem;
		padding-right: 0.75rem;
	}
	a{
		color: #000;
		font-weight: 500;
		text-decoration:none;
		font-size:15px;
	}
`
const LeftMenu = styled.div``
const CenterMenu = styled.div`
	@media all and (max-width: 992px){
		display: none;
	}
`
const RightMenu = styled.div`
	@media all and (max-width: 992px){
		li{
			display: none;
		}
	}
`

const CustomMenuIcon = styled.button`
	background: none;
	border: none;
	font-weight: 500;
	padding-left: 0.75rem;
	padding-right: 0.75rem;
	cursor: pointer;
	font-size:15px;
	font-family:inherit;

`

const Hamburger = styled.ul`
	position: fixed;
	background: #fff;
	width: 300px;
	right: ${props => props.open ? 0 : '-300px'};
	transition: all 0.5s ease-in-out;
	top: 0;
	bottom: 0;
	display: flex;
	flex-direction: column;
	padding: 50px 20px 20px 40px;
	z-index: 99;
	margin:0px;
	li{
		padding: 10px 0;
	}
	.side-menu{
		flex-direction: column;
	}
	.side-menu > li > div{
		display:flex;
		display:-webkit-flex;
		align-items: flex-start;
	}
	.side-menu span{
		display:block;
	}
	.side-menu .icon{
		margin-right:10px;
	}
`
const CloseWrapper = styled.div`
	display: flex;
	display:-webkit-flex;
	justify-content: flex-end;
`
const CrossIcon = styled(CloseIcon)`
	cursor: pointer;
`