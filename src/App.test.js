import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './app/store';
import App from './App';

describe('App',() => {
    it('should renders App component', () => {
        const { getByText } = render(
            <Provider store={store}>
                <App />
            </Provider>
        );
        // screen.debug();

        //getByText à utilisé quand je veux affirmer lé présence d'un élément
        expect(screen.getByText('Pokédex')).toBeInTheDocument();
        // expect(screen.getByRole('textbox').toBeInTheDocument());

        //queryByText à utilisé quand je veux affirmer qu'un élément n'est pas là
        expect(screen.queryByText('Coucou')).toBeNull();

        //findByText à utilisé pour les éléments asynchrone qui seront peut-être rendu une fois que l'appel asynchrone aura
        //été effectuer
        // expect(await screen.findByText(/Signed in as/)).toBeInTheDocument();
    });
  // expect(getByText(/Accueil/i)).toBeInTheDocument();


});
