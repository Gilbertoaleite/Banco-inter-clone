/** @format */

import {
	Wrapper,
	InputContainer,
	ButtonContainer,
	HeaderSignIn,
	HeaderSignInImg,
	HeaderSignInImg2,
} from './styles';
import { useNavigate, Link } from 'react-router-dom';

import logoInterWhite from '../../assets/images/banco-inter-logo-2020.svg';
import contaDigital from '../../assets/images/logo-conta-digital-banco-inter.png.png';
// import banner from '../../assets/images/banner-shopping-marketplace.jpg.jpg';

import Card from '../../components/Card';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn = () => {
	const navigate = useNavigate();

	const handleToSingIn = () => {
		navigate('/dashboard');
	};
	return (
		<Wrapper>
			<HeaderSignIn>
				<HeaderSignInImg>
					<a
						href='http://https://gilbertoaleite-portfolio.netlify.app/'
						target='_blank'
						rel='noopener noreferrer'
						title='Visite o meu Portfólio'
					>
						<img
							src={logoInterWhite}
							width={242}
							height={210}
							alt='logo inter'
						/>
					</a>
				</HeaderSignInImg>
				<p>INTERNET.BANKING</p>
				<HeaderSignInImg2>
					<img src={contaDigital} width={230} height={50} alt='logo inter' />
				</HeaderSignInImg2>
			</HeaderSignIn>

			<Card width='403px' height='auto'>
				{/* <img src={logoInter} width={172} height={61} alt='logo inter' /> */}
				<InputContainer>
					<Input placeholder='EMAIL' />
					<Input placeholder='SENHA' type='password' />
				</InputContainer>

				<ButtonContainer>
					<Button type='button' onClick={handleToSingIn}>
						AVANÇAR
					</Button>
					<p>
						Ainda não tem cadastro? <Link to='/signup'>Cadastre-se Já</Link>
					</p>
					<br />
					<p>
						<strong>
							Atenção esse site é fictício, não é o site do Banco Inter oficial,{' '}
							desenvolvido por:
						</strong>{' '}
						<a
							href='http://https://gilbertoaleite-portfolio.netlify.app/'
							target='_blank'
							rel='noopener noreferrer'
							title='Visite o meu Portfólio'
						>
							Gilberto A Leite
						</a>
					</p>
				</ButtonContainer>
				{/* <Banner>
						<img src={banner} width={350} height={310} alt='logo inter' />
					</Banner> */}
			</Card>
		</Wrapper>
	);
};

export default SignIn;
