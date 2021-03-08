import pokemon_type from "../../pokemon_type";
import React from "react";

export const PokemonTypeComponent = ({types}) => {

    return(
        types.map(type => (
            <img key={pokemon_type[type.type.name]} role={"img-type"} src={pokemon_type[type.type.name]} alt={"type pokemon"}/>
        ))
    )
};
