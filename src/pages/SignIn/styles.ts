import styled from 'styled-components';

export const Wrapper = styled.main`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background: #fafbfc;
`;

export const HeaderSignIn = styled.header`
    width: 100%;
    min-height: 70px;
    background: ${({ theme }) => theme.colors.primary};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 12px 0 0 0;
    position: relative;
    box-sizing: border-box;
`;

export const HeaderSignInImg = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 8px;
`;

export const InputContainer = styled.div`
    margin-top: 48px;
    width: 100%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const ButtonContainer = styled.div`
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    p {
        font-size: 0.85rem;
        color: ${({ theme }) => theme.colors.secondary};
        margin: 0;
        a {
            font-size: 1rem;
            font-weight: 700;
        }
    }
`;

export const Banner = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 15px 0;
`;