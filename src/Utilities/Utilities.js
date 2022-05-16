export const getDeck = () => {
  fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1").then(
    (res) => {
      return res.json();
    }
  );
};
