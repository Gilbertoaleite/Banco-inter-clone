
import styled from 'styled-components';

export const HeaderContainer = styled.header<{
  theme?: any;
}>`
    width: 100%;
    min-height: 70px;
    background-color: ${({theme}) => theme.colors.background};
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    padding: 0 10px;
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  min-height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    img {
      width: 120px;
      height: auto;
    }
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  background: rgba(255,255,255,0.02);
  border-radius: 24px;
  padding: 6px 16px;
  box-sizing: border-box;
  min-width: 0;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-width: 0;
    p {
      margin: 0;
      font-size: 1rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    strong {
      font-size: 0.95rem;
      margin-bottom: 2px;
    }
    a {
      color: #ff6600;
      font-weight: 600;
      font-size: 0.95rem;
      text-decoration: none;
      margin-top: 2px;
      transition: color 0.2s;
    }
    a:hover {
      color: #d35400;
    }
  }

  @media (max-width: 700px) {
    width: 100%;
    justify-content: center;
    margin-bottom: 8px;
    div {
      align-items: center;
    }
  }
`;