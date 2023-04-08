import React from 'react';
import {ThemeProvider} from "styled-components";
import {Container, Days, Description, Name, Type} from "./TrainingPlanStyled";


const TrainingPlan = (props) => {

    const training = props.data;

    const theme = {
        active: training.active
    }


    return (
        <div>
            <ThemeProvider theme={theme}>
                <Container>
                    <Type>
                        {training.type}
                    </Type>
                    <Description>
                        <Name>
                            {training.name}
                        </Name>
                        <Days>
                            {training.days}
                        </Days>
                    </Description>
                </Container>
            </ThemeProvider>
        </div>
    );
};

export default TrainingPlan;