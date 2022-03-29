import styled from 'styled-components';

export const Wrapper = styled.main`
    width: 100%;
    height: 100vh;

    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;
`

// export const Background = styled.div<{color: any}>`
//     position: absolute;
//     width: 100%;
//     top: 0;
//     left: 0;
//     height: 15vh;
//     background-color: ${({theme})=> theme.colors.primary};
//     background-size: contain;
//     z-index: 1;
// `

export const HeaderSignIn = styled.head`
	width: 100%;
	height: 90px;

	background-color: ${({ theme }) => theme.colors.primary};

	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
    width: 100%;
	top: 0;
	left: 0;
	height: 20vh;

    p{
        display: inline-block;
        margin: 30px 550px 0 0;
        padding: 4px 6px 4px 6px;
        
        color: #ffffff;
        border:1px solid #ffffff ;

    }
`;
export const HeaderSignInImg = styled.div`
	width: 100%;
	height: 90px;
    display: flex;
    margin: 0 auto;
    align-items: center;
    
`;
export const HeaderSignInImg2 = styled.div`
	display: flex;
	margin: 0 90px 5px 60px;
	align-items: center;

	
`;

export const InputContainer = styled.div`
margin-top: 67px;
width: 90%;
flex: 1;
`

export const ButtonContainer = styled.div`
display: block;
width: 90%;
margin: 0 auto;

p{
    font-size: 0.75rem;
    font-weight: 400;
    color: ${({theme})=> theme.colors.secondary};

    a {
    font-size: 1rem;
    font-weight: 700;
    }
}
`
export const Banner = styled.div`
display:flex;
flex-direction: column;
wrap: wrap;
width: 0;
margin: 15px;


`