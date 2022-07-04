import React from "react";
import Games from '../../components/Games'



//CRIANDO UM COMPONENTE
const Home = () => {
   //FAZENDO A LÓGICA DO COMPONENTE

   const sendToMe = () => {
alert("Thank you for rating!")
    /*Choose a Game.SCORE = (/*SCORE THE GAME)*/
   };

   const listOfGames = [
    {N:1, NAME: "Metal Gear Solid 3", YEAR: 2004, trailerLink:"https://youtu.be/R88IT3At3rI", wikiLink:"https://en.wikipedia.org/wiki/Metal_Gear_Solid_3:_Snake_Eater", SCORE: null},
    {N:2, NAME: "Red Dead Redemption 2", YEAR: 2018, trailerLink:"https://youtu.be/F63h3v9QV7w", wikiLink:"https://en.wikipedia.org/wiki/Red_Dead_Redemption_2", SCORE: null},
    {N:3, NAME: "Final Fantasy VII - Remake", YEAR: 2020, trailerLink:"https://youtu.be/Z3xSGv3Hfio", wikiLink:"https://en.wikipedia.org/wiki/Final_Fantasy_VII_Remake", SCORE: null},
    {N:4, NAME: "Silent Hill", YEAR: 1999, trailerLink:"https://youtu.be/jsJalneW5OA", wikiLink:"https://en.wikipedia.org/wiki/Silent_Hill_(video_game)", SCORE: null},
    {N:5, NAME: "Metal Gear Solid", YEAR: 1998, trailerLink:"https://youtu.be/dkXwUDYMOJw", wikiLink:"https://en.wikipedia.org/wiki/Metal_Gear_Solid_(1998_video_game)", SCORE: null},
    {N:6, NAME: "Death Stranding", YEAR: 2019, trailerLink:"https://youtu.be/UcaMw4aCz4c", wikiLink:"https://en.wikipedia.org/wiki/Death_Stranding", SCORE: null},
    {N:7, NAME: "The Witcher 3", YEAR: 2015, trailerLink:"https://youtu.be/ehjJ614QfeM", wikiLink:"https://en.wikipedia.org/wiki/The_Witcher_3:_Wild_Hunt", SCORE: null},
    {N:8, NAME: "The Last of Us", YEAR: 2013, trailerLink:"https://youtu.be/WxjeV10H1F0", wikiLink:"https://en.wikipedia.org/wiki/The_Last_of_Us", SCORE: null},
    {N:9, NAME: "Metal Gear Solid V", YEAR: 2015, trailerLink:"https://youtu.be/Krc1t4HU8GI", wikiLink:"https://en.wikipedia.org/wiki/Metal_Gear_Solid_V:_The_Phantom_Pain", SCORE: null},
    {N:10, NAME: "Counter Strike", YEAR: 2012, trailerLink:"https://youtu.be/_Bh0l79aKmc", wikiLink:"https://en.wikipedia.org/wiki/Counter-Strike", SCORE: null},
    {N:11, NAME: "Chrono Cross", YEAR: 1999, trailerLink:"https://youtu.be/XaI-h5_Phww", wikiLink:"https://en.wikipedia.org/wiki/Chrono_Cross", SCORE: null},
    {N:12, NAME: "Heavy Rain", YEAR: 2010, trailerLink:"https://youtu.be/qXYAwAfJZJg", wikiLink:"https://en.wikipedia.org/wiki/Heavy_Rain", SCORE: null},
    {N:13, NAME: "Pokemon Fire Red", YEAR: 2004, trailerLink:"https://youtu.be/7Df6iOkYdHI", wikiLink:"https://en.wikipedia.org/wiki/Pok%C3%A9mon_FireRed_and_LeafGreen", SCORE: null},
    {N:14, NAME: "Final Fantasy VII", YEAR: 1997, trailerLink:"https://youtu.be/utVE4aUKYuY", wikiLink:"https://en.wikipedia.org/wiki/Final_Fantasy_VII", SCORE: null},
    {N:15, NAME: "Silent Hill 2", YEAR: 2001, trailerLink:"https://youtu.be/tfRgpj9r0Jg", wikiLink:"https://en.wikipedia.org/wiki/Silent_Hill_2", SCORE: null},
    {N:16, NAME: "Dino Crisis 2", YEAR: 2000, trailerLink:"https://youtu.be/3ZJTXtDFkFs", wikiLink:"https://en.wikipedia.org/wiki/Dino_Crisis_2", SCORE: null},
    {N:17, NAME: "Mega Man X", YEAR: 1994, trailerLink:"https://youtu.be/m14CIhd-tds", wikiLink:"https://en.wikipedia.org/wiki/Mega_Man_X", SCORE: null},
    {N:18, NAME: "Advance Wars", YEAR: 2001, trailerLink:"https://youtu.be/3QV6ttUY6xI", wikiLink:"https://en.wikipedia.org/wiki/Advance_Wars", SCORE: null},
    {N:19, NAME: "Spider-Man", YEAR: 2000, trailerLink:"https://youtu.be/Jrm452GfO1U", wikiLink:"https://en.wikipedia.org/wiki/Spider-Man_(2000_video_game)", SCORE: null},
    {N:20, NAME: "Rival School", YEAR: 1997, trailerLink:"https://youtu.be/dLtSVIOp570", wikiLink:"https://en.wikipedia.org/wiki/Rival_Schools:_United_by_Fate", SCORE: null},
   ];
   
   //O QUE VAI RETORNAR DO COMPONENTE EM HTML
    return (
        <div className="container">
                     <br />
                     <h1><center>LIST OF GAMES</center></h1>
            <br />
<p>
This list contains my favorite games, as a way to interact with users to share some of my love for gaming. I would like you to rate my favorite ones. If you don't recognize some games, it's not a problem, the buttons can show the trailer and wikipedia page.

</p>
  <p>
  The games are positioned according to my preference. Please, give the rating you think each one deserves. After rating all games apply through the "SEND" button.
</p>
            <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col" className="text-left"><h6>POSITION</h6></th>
      <th scope="col"><h6>NAME</h6></th>
      <th scope="col"><h6>YEAR</h6></th>
      <th scope="col" className="text-right"><h6>MORE INFO</h6></th>
      <th scope="col"><h6>YOUR SCORE</h6></th>
      
    </tr>
  </thead>
  <tbody>
{listOfGames.map((jogos) => (
  <Games joguinho={jogos}/>
  ))}
                         
  </tbody>
  
</table>
<div className="row">
                            < br />
                          <button onClick={sendToMe} id="buttonSend"><i class="fa fa-gamepad" aria-hidden="true"> </i> SEND</button>
                                  </div>
        </div>
        
    );
};


//PERMITE ENVIAR O COMPONENTE (NO CASO PARA INDEX.JS DO SRC PRINCIPAL)
export default Home;