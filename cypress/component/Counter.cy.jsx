import React from 'react'
import Counter from '../../src/Counter';

describe('<Counter />', () => {
  const counterSelector = '[data-cy="counter"]'
  const incrementSelector = '[aria-label=increment]'
  const decrementSelector = '[aria-label=decrement]'
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Counter />)
    // Act
    cy.get(incrementSelector).click()
    // Assert
    cy.get(counterSelector).should('contain.text', 1)
    // Act
    cy.get(decrementSelector).click()
    // Assert
    cy.get(counterSelector).should('have.text', '0')
    // Assert color
    cy.get(decrementSelector).should("have.css", "color")
        .and("eq", 'rgb(0, 0, 0)');
    // Assert background color
    cy.get(decrementSelector).should("have.css", "background-color")
        .and("eq", 'rgb(0, 128, 0)');
  })
})