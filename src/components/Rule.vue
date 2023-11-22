<template>
    <div class="card">
        <h1>Rule</h1>
        
        <h2>30-45minutes</h2>
         <h2>concept</h2>
          <p>The idea is to guess the word to collect cards and move forward. The first player to reach the end of the board wins. 
          First, place the board and the 28 cards on the table, so that you can see the side with the words. You decide on your two (and only two) teams, and then decide who will start the game with a rock-paper-scissors. 
          After that, one member of a team start to say a clue, then the number of cards associated with it, and your team has to guess the words to win the cards and advance on the board.  And that's how your game begins! The end is determined by who arrives on the square first. 
          </p>
          <h2>Limits</h2>
         <p>You will have to guess ~12 words, which can be a small amount of cards.
          There is a maximum of 3 cards that you can guess in a row.
         </p>
          <h2>Goals</h2>
          <p>After playing this game, the students will have learn basic vocabulary of graphic culture and will be able to associate vocabulary together. </p>
          <h2>Prerequistes</h2>
         <p>To play this game you will need to have bases in graphic design and you need to be able to read english.
         </p>
          <h2>The Game</h2>
          <p>Create Two teams and decide which one is the “Speaker” in it. (The speakers will have to make guess 12 words to their team so win the game, they will need to sit next to each others)

Set all the 30 word-cards in a 5x6 panel

Set up the board and place the 2 team s token on the starting line.

You can place the joker s cards next to the board.

The Speakers will need to launch the “Card randomizer”, to know what are their cards. 
 </p>
          <h2>First 5 minute</h2>
         <p>If you are the Speaker, you will have to think about a one-word clue that relate to your cards on the board. When you have a good clue in your mind, you say it. And then after you say the number of cards related to this clue.  (Exemple : “ Animal, 3”)
If you are parts of the guesser you will have your Speaker’s clue, and then touch the card, you think in the correct one.
The guessers can touch another card if the previous one is correct
The number of cards you have, is your place on the board.

         </p>
          <h2>Next 15 minutes to the end</h2>
          <p>Some of the tile on the board have some bonus or malus that can affect the way the game goes.
One at a time each team repeat the same pattern, until the first team reach the finish line on the board.
</p>
<h2>How to win the GAME</h2>
         <p>To win the game, you have to be the first team to arrive on the last tile of the board. </p>
         <h2>Equipement</h2>
         <p>To play this game players will need :
            the game board
            the cards 
         </p>
         <router-link to="/"><button>Return</button></router-link>
    </div>
</template>

<style scoped>
.card {
 background-color: #fefcf9;
  border: 5px solid #FBC60B;
  border-radius: 8px;
  padding: 18px;
  width: 300px;
  margin-left: 28rem;
  margin-top: 25px;
  /* margin: 10px; */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.card:hover {
  transform: scale(1.02);
}

h2 {
  color: #3498db;
}
h1 {
  color: #EC6655;
}

p {
  color: #333;
  text-align: start;
}
button{
  width:100px;
  margin: 5px;
  background: linear-gradient(45deg, #FFD700, #cc4def);
  border: none;
  border-radius: 8px;
  padding: 15px 30px;
  box-shadow: 0 4px 8px rgba(212, 62, 232, 0.5);
  position: relative;
  overflow: hidden;
  border: none;
}
button:hover{
    background-color: #cc4def;
    transition: box-shadow 0.10s;
  }
/* Ajoutez des règles pour les écrans de taille moyenne (par exemple, tablettes) */
@media only screen and (max-width: 933px) {
  .card {
    width: 50%;
    margin-left:130px;
  

  }
}

@media screen and (orientation: portrait) and (max-width: 935px) {
    .card {
    width: 50%;
    margin-left:100px;
  

  }
  }
@media screen and (orientation: landscape) and (max-width: 935px){
    .card {
    width: 50%;
    margin-left:130px;
  }
}


</style>