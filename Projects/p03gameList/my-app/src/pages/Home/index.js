import React from "react";
import Games from '../../components/Games'
import Choose from '../../components/Choose'



//CRIANDO UM COMPONENTE
const Home = () => {
   //FAZENDO A LÓGICA DO COMPONENTE

   const userGrade = [];

   const listOfGames = [
    {N:1, NAME: "Metal Gear Solid 3", YEAR: 2004, trailerLink:"https://youtu.be/R88IT3At3rI", wikiLink:"https://en.wikipedia.org/wiki/Metal_Gear_Solid_3:_Snake_Eater", SCORE: userGrade[0]},
    {N:2, NAME: "Red Dead Redemption 2", YEAR: 2018, trailerLink:"https://youtu.be/F63h3v9QV7w", wikiLink:"https://en.wikipedia.org/wiki/Red_Dead_Redemption_2", SCORE: userGrade[1]},
    {N:3, NAME: "Final Fantasy VII - Remake", YEAR: 2020, trailerLink:"https://youtu.be/Z3xSGv3Hfio", wikiLink:"https://en.wikipedia.org/wiki/Final_Fantasy_VII_Remake", SCORE: userGrade[2]},
    {N:4, NAME: "Silent Hill", YEAR: 1999, trailerLink:"https://youtu.be/jsJalneW5OA", wikiLink:"https://en.wikipedia.org/wiki/Silent_Hill_(video_game)", SCORE: userGrade[3]},
    {N:5, NAME: "Metal Gear Solid", YEAR: 1998, trailerLink:"https://youtu.be/dkXwUDYMOJw", wikiLink:"https://en.wikipedia.org/wiki/Metal_Gear_Solid_(1998_video_game)", SCORE: userGrade[4]},
    {N:6, NAME: "Death Stranding", YEAR: 2019, trailerLink:"https://youtu.be/UcaMw4aCz4c", wikiLink:"https://en.wikipedia.org/wiki/Death_Stranding", SCORE: userGrade[5]},
    {N:7, NAME: "The Witcher 3", YEAR: 2015, trailerLink:"https://youtu.be/ehjJ614QfeM", wikiLink:"https://en.wikipedia.org/wiki/The_Witcher_3:_Wild_Hunt", SCORE: userGrade[6]},
    {N:8, NAME: "The Last of Us", YEAR: 2013, trailerLink:"https://youtu.be/WxjeV10H1F0", wikiLink:"https://en.wikipedia.org/wiki/The_Last_of_Us", SCORE: userGrade[7]},
    {N:9, NAME: "Metal Gear Solid V", YEAR: 2015, trailerLink:"https://youtu.be/Krc1t4HU8GI", wikiLink:"https://en.wikipedia.org/wiki/Metal_Gear_Solid_V:_The_Phantom_Pain", SCORE: userGrade[8]},
    {N:10, NAME: "Counter Strike", YEAR: 2012, trailerLink:"https://youtu.be/_Bh0l79aKmc", wikiLink:"https://en.wikipedia.org/wiki/Counter-Strike", SCORE: userGrade[9]},
    {N:11, NAME: "Chrono Cross", YEAR: 1999, trailerLink:"https://youtu.be/XaI-h5_Phww", wikiLink:"https://en.wikipedia.org/wiki/Chrono_Cross", SCORE: userGrade[10]},
    {N:12, NAME: "Heavy Rain", YEAR: 2010, trailerLink:"https://youtu.be/qXYAwAfJZJg", wikiLink:"https://en.wikipedia.org/wiki/Heavy_Rain", SCORE: userGrade[11]},
    {N:13, NAME: "Pokemon Fire Red", YEAR: 2004, trailerLink:"https://youtu.be/7Df6iOkYdHI", wikiLink:"https://en.wikipedia.org/wiki/Pok%C3%A9mon_FireRed_and_LeafGreen", SCORE: userGrade[12]},
    {N:14, NAME: "Final Fantasy VII", YEAR: 1997, trailerLink:"https://youtu.be/utVE4aUKYuY", wikiLink:"https://en.wikipedia.org/wiki/Final_Fantasy_VII", SCORE: userGrade[13]},
    {N:15, NAME: "Silent Hill 2", YEAR: 2001, trailerLink:"https://youtu.be/tfRgpj9r0Jg", wikiLink:"https://en.wikipedia.org/wiki/Silent_Hill_2", SCORE: userGrade[14]},
    {N:16, NAME: "Dino Crisis 2", YEAR: 2000, trailerLink:"https://youtu.be/3ZJTXtDFkFs", wikiLink:"https://en.wikipedia.org/wiki/Dino_Crisis_2", SCORE: userGrade[15]},
    {N:17, NAME: "Mega Man X", YEAR: 1994, trailerLink:"https://youtu.be/m14CIhd-tds", wikiLink:"https://en.wikipedia.org/wiki/Mega_Man_X", SCORE: userGrade[16]},
    {N:18, NAME: "Advance Wars", YEAR: 2001, trailerLink:"https://youtu.be/3QV6ttUY6xI", wikiLink:"https://en.wikipedia.org/wiki/Advance_Wars", SCORE: userGrade[17]},
    {N:19, NAME: "Spider-Man", YEAR: 2000, trailerLink:"https://youtu.be/Jrm452GfO1U", wikiLink:"https://en.wikipedia.org/wiki/Spider-Man_(2000_video_game)", SCORE: userGrade[18]},
    {N:20, NAME: "Rival School", YEAR: 1997, trailerLink:"https://youtu.be/dLtSVIOp570", wikiLink:"https://en.wikipedia.org/wiki/Rival_Schools:_United_by_Fate", SCORE: userGrade[19]},
   ];
   
   //O QUE VAI RETORNAR DO COMPONENTE EM HTML
    return (
        <div className="container">
                     <br />
                     <h1><center>LIST OF GAMES</center></h1>
            <br />
<p>This list contains my favorite games, as a way to interact with users to share some of my love for games, I would like if you rate my favorite games. If you don't recognize some games, it's no a problem, the buttons can show trailer and wikipedia page.</p>
  <p>
  The games are positioned according to my preference. You can choose the game through "Choose a Game", give the rating you think the game deserves, apply the rating through "Submit".
</p>
<p>
After you give all the grades, at the bottom of the page, you can send the grades directly to my server.
  <br />
</p>
          <div className="jumbotron">
            <div className="row">

              <br />
              <div className="col-4">
              <label>Choose a Game</label>
              <select className="form-control">
                {listOfGames.map((jogos) => (
                        <Choose joguinho={jogos}/>
                         ))};
                </select>
                  </div>
                     <div className="col-4">
                      <label>Score the Game</label>
                        <input type="number" min="0" max="10" className="form-control"/>
                          
                          </div>
                          <div className="col">
                            < br />
                          <button className="btn btn-success btn-lg btn-block">Submit</button>
                                  </div>
                          
                          </div>
                                  </div>
                                  <br />

            <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col" className="text-left"><h6>POSITION</h6></th>
      <th scope="col"><h6>NAME</h6></th>
      <th scope="col"><h6>YEAR</h6></th>
      <th scope="col" className="text-right"><h6>MORE INFO</h6></th>
      <th id="GRADE" scope="col"><h6>SCORE</h6></th>
      
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
                          <button className="btn btn-warning btn-lg btn-block">SEND</button>
                                  </div>
        </div>
        
    );
};


//PERMITE ENVIAR O COMPONENTE (NO CASO PARA INDEX.JS DO SRC PRINCIPAL)
export default Home;