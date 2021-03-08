import React from "react";
import {Box, Typography} from "@material-ui/core";


export const PokemonNameComponent = ({name,type}) => {

    const strUcString = (name) => {
        return (name+'').charAt(0).toUpperCase()+name.substr(1);
    };

    return(
        <Box display={"flex"} justifyContent={"center"} >
            {type === 'detail'
                ?<Typography role={"typo-detail"} variant={"h4"} component={"h4"}>
                    {strUcString(name)}
                </Typography>
                :<Typography role={"typo-autre-type"} variant={"h6"} component={"h6"}>
                    {strUcString(name)}
                </Typography>
            }

        </Box>

    )

};
