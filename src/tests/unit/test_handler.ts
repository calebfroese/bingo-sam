import { createCard } from '../../app';
import { expect } from 'chai';

describe('Join Game', function() {
  it('creates a card', async () => {
    const card = createCard();
    expect(card.length).eq(3);
    const [rowa, rowb, rowc] = card;
  });

  it('card is random', async () => {
    const [rowa, rowb, rowc] = createCard();
    const [rowa2, rowb2, rowc2] = createCard();
    expect([...rowa, ...rowb, ...rowc]).to.not.deep.eq([
      ...rowa2,
      ...rowb2,
      ...rowc2
    ]);
  });
});
