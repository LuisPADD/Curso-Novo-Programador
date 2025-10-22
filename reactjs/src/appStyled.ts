import styled from "styled-components";

export const Header = styled.div`
    height: 48px;
    width: 100%;
    background: rgba(0,0,0,0.8);
    position: absolute;
    z-index: 9999;
    min-width: 1024px;
    top: 0;
    left: 0;
    right: 0;
    max-height: 44px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 47px;
`;

export const ItemHeader = styled.div`
    display: flex;

`;

export const TextHeader = styled.div`
    font-size: 13px;
    color: rgba(245, 245, 247, 0.8);
    font-family: 'MyriadProLight';
    cursor: pointer;
    letter-spacing: -.01em;
`;