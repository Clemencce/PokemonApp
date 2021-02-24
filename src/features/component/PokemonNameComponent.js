import React from "react";
import {Box, Typography} from "@material-ui/core";


export const PokemonNameComponent = ({name}) => {

    const strUcString = (name) => {
        return (name+'').charAt(0).toUpperCase()+name.substr(1);
    };

    return(
        <Box display={"flex"} justifyContent={"center"} >
            <Typography variant={"h4"} component={"h4"}>
                {strUcString(name)}
            </Typography>
        </Box>

    )

};
