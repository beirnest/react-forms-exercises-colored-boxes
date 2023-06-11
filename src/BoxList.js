import React, { useState } from "react";
import { v4 as uuid } from 'uuid';
import Box from "./Box"
import NewBoxForm from "./NewBoxForm";

const BoxList = () => {
    const INITIAL_STATE = [
    ]
    const [boxes, setBoxes] = useState(INITIAL_STATE);
    const addBox = (newBox) => {
    setBoxes(boxes => [...boxes, { ...newBox, id: uuid() }])
    }

    const remove = (id) => {
        setBoxes(boxes => boxes.filter(box => box.id !== id));
    };

    const boxComponent = boxes.map(box => <Box id={box.id} color={box.color} width={box.width} height={box.height} key={box.id} handleDelete={remove} />);

    return (
        <div>
        <h3>Colored Boxes</h3>
        <NewBoxForm addBox={addBox} />
        <div>
            {boxComponent};
        </div>
        </div>
    )
};

export default BoxList;