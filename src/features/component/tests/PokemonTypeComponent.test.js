import React from 'react';
import { render, screen } from '@testing-library/react';
import pokemon from "./pokemon";
import {PokemonTypeComponent} from "../PokemonTypeComponent";

describe('documentDetails', () => {
    it('Affiche les images des types ', () => {
        render(
            <PokemonTypeComponent types={pokemon.types}/>
        );

        expect(screen.getByRole('img-type')).toBeInTheDocument();
    })
});
