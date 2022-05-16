export const getDeck = async () => {
  const res = await fetch(
    "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
  );
  const data = await res.json();
  const resTwo = await fetch(
    `https://deckofcardsapi.com/api/deck/${data.deck_id}/draw/?count=52`
  );
  const dataTwo = await resTwo.json();
  return dataTwo.cards;
};
