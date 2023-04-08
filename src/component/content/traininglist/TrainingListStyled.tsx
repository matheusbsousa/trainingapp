import React from 'react';
import {Training} from "../../../model/Training";
import TrainingPlan from "../trainingplan/TrainingPlan";
import trainingPlan from "../trainingplan/TrainingPlan";
import styled from "styled-components";

export const Container = styled.div
    `
      display: flex;
      flex-direction: column;
    `
;

export const List = styled.ul
    `
      margin: 0;
      padding: 0;
    `
;

export const Item = styled.li
    `
        margin: 20px 0px;
    `
;
