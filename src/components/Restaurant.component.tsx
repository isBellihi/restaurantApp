import * as React from 'react';
interface RestaurantComponentProps {
    imageUrl: string;
    name: string;
}

export const Restaurant = (props: RestaurantComponentProps) =>
    (<div>
        <img src={props.imageUrl} width="50%" height="50%" alt={props.name}/>
        <p>{props.name}</p>
    </div>)
