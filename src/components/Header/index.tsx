import {HeaderContainer, HeaderWrapper, UserInfo} from './styles';
import UserCircle from '../UserCircle';

import logoInter from '../../assets/images/Inter-orange.png';
import { useNavigate } from 'react-router-dom';


const Header = () => {

    const navigate = useNavigate();

    const handleLogoff = () => {
        navigate('/signin')
    }
    return (
			<HeaderContainer>
				<HeaderWrapper>
					<a href='http://gilbertoaleite-portfolio.netlify.app/'
						target='_blank'
						rel='noopener noreferrer'
						title='Visite o meu Portfólio'
					>
						<img src={logoInter} width={172} height={61} alt='logo inter' />
					</a>
					<UserInfo>
						<UserCircle initials='GAL' />
						<div>
							<p>
								Olá, <span className='primary-color font-bold'>Gilberto</span>
							</p>
							<strong>22006895-1</strong>
							<br />
							<a href='/' onClick={handleLogoff}>
								Sair
							</a>
						</div>
					</UserInfo>
				</HeaderWrapper>
			</HeaderContainer>
		);
}

export default Header