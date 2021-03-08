import {render, screen} from "@testing-library/react";
import {Provider} from "react-redux";
import store from "../../../app/store";
import {DetailCard} from "../../component/DetailCard";
import pokemon from "../../component/tests/pokemon";
import pokemonSpecies from "../../component/tests/pokemon_species";
import React from "react";
import {DocumentHome} from "../documentHome";

describe('documentHome', () => {
    it('La card s\'affiche quand les données sont chargées ', async () => {
        render(
            <Provider store={store}>
                <DocumentHome/>
            </Provider>
        );

        expect(screen.queryByRole('random_pokemon_card')).toBeNull();

        expect(await screen.findByRole('random_pokemon_card')).toBeInTheDocument();
    });
});
