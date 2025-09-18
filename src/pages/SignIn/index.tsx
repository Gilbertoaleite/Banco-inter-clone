/** @format */

import {
	Wrapper,
	InputContainer,
	ButtonContainer,
	HeaderSignIn,
	HeaderSignInImg,
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
				{/* AVISO DE SITE NÃO OFICIAL */ }
				<div style={ {
					background: '#ff9800',
					color: '#fff',
					padding: '8px 12px',
					textAlign: 'center',
					fontWeight: 'bold',
					fontSize: '1rem',
					letterSpacing: '0.5px',
					borderRadius: '8px',
					marginBottom: '8px',
					width: '100%',
					maxWidth: 600,
					alignSelf: 'center'
				} }>
					Atenção: Este site é um clone para fins educacionais e <u>não</u> é o site oficial do Banco Inter.
				</div>
				<HeaderSignInImg>
					<a
						href='http://gilbertoaleite-portfolio.netlify.app/'
						target='_blank'
						rel='noopener noreferrer'
						title='Visite o meu Portfólio'
						style={ { display: 'flex', alignItems: 'center', gap: 16 } }
					>
						<span style={ { display: 'flex', alignItems: 'center', gap: 16 } }>
							<img
								src={ logoInterWhite }
								width={ 120 }
								height={ 40 }
								alt='logo inter'
								style={ { maxWidth: 120, height: 'auto' } }
							/>
							<span style={ { fontWeight: 700, color: '#fff', fontSize: 18, letterSpacing: 1, marginLeft: 8 } }>
								INTERNET.BANKING
							</span>
							<img
								src={ contaDigital }
								width={ 100 }
								height={ 30 }
								alt='logo inter'
								style={ { maxWidth: 100, height: 'auto', marginLeft: 16 } }
							/>
						</span>
					</a>
				</HeaderSignInImg>
			</HeaderSignIn>
			<Card width='403px' height='auto'>
				<InputContainer>
					<Input placeholder='EMAIL' />
					<Input placeholder='SENHA' type='password' />
				</InputContainer>
				<ButtonContainer>
					<Button type='button' onClick={ handleToSingIn }>
						AVANÇAR
					</Button>
					<p>
						Ainda não tem cadastro? <Link to='/signup'>Cadastre-se Já</Link>
					</p>
					<br />
					<p>
						<strong>
							Atenção esse site é fictício, não é o site oficial do Banco Inter!{ ' ' }
							desenvolvido por:
						</strong>{ ' ' }
						<a
							href='http://gilbertoaleite-portfolio.netlify.app/'
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
