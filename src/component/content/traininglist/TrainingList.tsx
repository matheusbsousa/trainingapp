import React from 'react';
import {Training} from "../../../model/Training";
import TrainingPlan from "../trainingplan/TrainingPlan";
import trainingPlan from "../trainingplan/TrainingPlan";
import {Container, Item, List} from "./TrainingListStyled";

const TrainingList = () => {

    const data: Training[] = [
        {id: 1, name: "Superior", type: "A", days: "seg - ter qua", active: true},
        {id: 2, name: "Low", type: "B", days: "seg - ter qua", active: false},
        {id: 3, name: "Core", type: "C", days: "seg - ter qua", active: false},
    ]

    return (
        <Container>
            <List>
                {data.map((training: Training) => (
                    <Item>
                        <TrainingPlan key={training.id}
                                      data={training}></TrainingPlan>

                    </Item>
                ))}
            </List>
        </Container>
    );
};

export default TrainingList;