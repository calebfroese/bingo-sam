import { createCard } from '../../app';
import { expect } from 'chai';

describe('Join Game', function() {
  it('creates a card', async () => {
    const card = createCard();
    expect(card).to.have.members([]);
  });
});
