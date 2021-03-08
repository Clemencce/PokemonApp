import React from 'react';
import { render, screen } from '@testing-library/react';
import pokemon from "./pokemon";
import {PokemonNameComponent} from "../PokemonNameComponent";

describe('documentDetails', () => {
    it('Affiche nom pokemon avec typography h4 pour le type detail', () => {
        render(
            <PokemonNameComponent name={pokemon.name} type={'detail'}/>
        );

        expect(screen.getByRole('typo-detail')).toBeInTheDocument();
    })

    it('Affiche nom pokemon avec typography p pour un autre type', () => {
        render(
            <PokemonNameComponent name={pokemon.name} type={'list'}/>
        );

        expect(screen.getByRole('typo-autre-type')).toBeInTheDocument();
    })
});
