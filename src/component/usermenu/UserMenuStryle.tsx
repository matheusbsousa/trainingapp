import styled from "styled-components";

export const Bar = styled.div`

  height: 60px;
  width: 100%;
  background-color: var(--background);
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: row;
  

`;

export const UserPhoto = styled.div
    `
     background-color: var(--secondary);
      align-self: center;
      width: 40px;
      height: 40px;
      border-radius: 100%;
      margin-left: 10px;       
    `
;

export const UserName = styled.div
    `
      align-self: center;
      margin-top: 15px;
      margin-left: 10px;
    `
;

export const Icon = styled.div
    `
      color: var(--secondary);
      font-size: 10px;
      align-self: center;
      margin-left: auto;
      margin-right: 20px;
    `
;

