import React from 'react';


function Home() {
//LOGIC





    return (
//HTML
<div class="container-fluid">

<section id="Topo">{/* TITULO HP */}


 <h1>H. P. Lovecraft</h1>
 < br/>
<h2>The Father of Cosmic Horror</h2>

<ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">About</a>{/* Tela inicial */}
  </li>
  <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Legacy</a> 
    {/* O que foi deixado */}
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Video Games</a></li>
      <li><a class="dropdown-item" href="#">Role PLay Games</a></li>
      <li><a class="dropdown-item" href="#">Audio</a></li>
      <li><a class="dropdown-item" href="#">Arte</a></li>

    </ul>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Books</a> {/* lista dos livros com download */}
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">More Informatio</a> {/*sites relevantes */}
  </li>

</ul>


 </section>

 <section>{/* IMAGEM HP */}

{/* IMAGEM HP LOVECRAFT
 <div class="img-comp-container">
  <div class="img-comp-img">
    <img src="img_snow.jpg" width="300" height="200">
  </div>
  <div class="img-comp-img img-comp-overlay">
    <img src="img_forest.jpg" width="300" height="200">
  </div>
</div>
    */}
</section>


<section id="About">

<div class="clearfix">
  <img src="https://cdn-0.citacoes.in/media/authors/hp-lovecraft_R52inhN.detail.jpeg" class="col-md-4 float-md-end mb-3 ms-md-3" alt="..."/>

  <p>
                Born in 1890, in Rhode Island. Lovecraft had an unusual childhood marked by tragedy A sickly child, Lovecraft spent many of his school years at home. 
                Lovecraft became a reclusive figure for several years, choosing to stay up late studying and reading and writing.
            </p>
            <p>
                Lovecraft started out as a would-be journalist, joining the United Amateur Press Association in 1914. Many of his early works were influenced by the writings of Lord Dunsany and Edgar Allan Poe. 
                The horror magazine Weird Tales bought some of Lovecraft's stories in 1923, giving him his first taste of literary success. 
                After his marriage failed, Lovecraft returned to Rhode Island and began work on some of his best stories.
                <strong>The Call of Cthulhu</strong> came out in 1928 in Weird Tales, and it perhaps best illustrated Lovecraft's efforts at creating an otherworldly type of terror. Lovecraft introduced readers to the first of many supernatural beings that would wreak havoc on humankind.  
            </p>
            <p>
                In his final years, Lovecraft was barely able to support himself. Lovecraft's passing was mourned by his colleagues and aspiring writers with whom he corresponded and collaborated. 
                Two of these friends, August Derleth and Donald Wandrei, formed a publishing company called Arkham House to promote and preserve Lovecraft's work. 
                Since his death, Lovecraft has earned greater acclaim than he enjoyed during his lifetime.
            </p>

  </div>
  </section>

{/* CORPO DE APRESENTAÇÃO HP */}




{/* FOOTER HP */}

<footer>
<div class="container-fluid">
        
            <div class="social-icons mt-4">
  <br/>
              <a href="https://www.linkedin.com/in/renan-botasse-275217235/" target="_blank"><i class="fab fa-linkedin"></i></a>  
              <a href="https://github.com/RenanBotasse" target="_blank"><i class="fab fa-github"></i></a>
              <a href="https://www.freecodecamp.org/renanBotasse" target="_blank"><i class="fab fa-free-code-camp"></i></a>
  
              <br/><br/><br/>
              renanBotasse
            </div>
        </div>
  
</footer>



</div>










        );
};

export default Home;