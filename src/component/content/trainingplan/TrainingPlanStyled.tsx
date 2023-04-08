import React from 'react';
import styled from "styled-components";

export const Container = styled.div
    `
      height: 65px;
      margin: 0.5rem;
      border-radius: 10px;
      background-color: ${props => props.theme.active ? 'var(--primary)' : 'var(--secondary)'};
      display: flex;
      box-shadow: 0px 4px 4px rgba(0,0,0, 0.25) ;
    `;

export const Type = styled.div
    `
      width: 40% - 1rem;
      height: 100%;
      color: ${props => props.theme.active ? 'var(--type-active)' : 'var(--type-inactive)'};
      font-size: 50px;
      font-weight: bold;
      padding-left: 1rem;
      text-align: center;
      justify-content: center;
      align-items: center;
    `
;

export const Description = styled.div
    `
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 1rem;
      font-weight: bold;
      font-stretch: condensed;
    `
;

export const Name = styled.div
    `
      color: var(--title);   
      font-size: 19px;
    `
;

export const Days = styled.div
    `
      color: var(--subtitle);
      font-size: 14px;
      margin-left: 5px;
    `
;

