import { createCard } from '../../app';
import { expect } from 'chai';

describe('Join Game', function() {
  it('creates a card', async () => {
    const card = createCard();
    expect(card.length).eq(3);
    const [rowa, rowb, rowc] = card;
  });

  it('does not contain duplicates', async () => {
    const card = createCard();
    const flattened = card.reduce((prev, row) => [...prev, ...row], []);
    flattened.forEach(val => {
      // should only appear once
      expect(flattened.filter(v => v === val).length).eq(1);
    });
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
