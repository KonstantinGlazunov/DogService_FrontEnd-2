import React from 'react';

interface Props {
    text: string;
}

const CarouselImage = (props: Props): JSX.Element => {
    const{text} = props;
    return(
        <div>
           {text}
        </div>
    )
}
export default CarouselImage