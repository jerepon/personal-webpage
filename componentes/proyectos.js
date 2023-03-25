class Proyectos extends React.Component{
    constructor(props){
        super(props);
        this.state={
          
    

        
    }
   
}

render(){
  
    
    return(

   <div>
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
        <h3>Pokemón Edicion Mew-two</h3>
        
        <img class="d-block w-100" src="/img/POKEMONMEWTWO.jpg" alt="First slide" width="100" height="200"/>
      <p class="mt-3 letra1"> Creación de lógica jugable de videjuego inspirado en Pokemón(JAVASCRIPT)
</p>
<button type="button" class="btn btn-success"><strong><a href="https://serene-bubblegum-2b2e9a.netlify.app/" target="blank">Ver Proyecto</a></strong></button>

      
    </div>
    
    <div class="carousel-item">
    <h3>Proyecto React Pokedex</h3>
        
    <img class="d-block w-100" src="/img/pokedex.jpg" alt="Second slide" width="100" height="200"/>
      <p class="mt-3 letra1"> Mi proyecto es una aplicación web desarrollada en React que utiliza las APIs de la base de datos mundial de Pokemons. Los usuarios pueden buscar y visualizar información detallada sobre los distintos Pokemons, incluyendo su descripción, habilidades, estadísticas y más. </p>
      <button type="button" class="btn btn-success"><strong><a href="https://loquacious-fudge-7fcaed.netlify.app" target="blank">Ver Proyecto</a></strong></button>
      
    </div>
    <div class="carousel-item ">
    <h3>Proyecto terrohole</h3>
    <img class="d-block w-100" src="/img/pelis.jpg" alt="Third slide" width="100" height="200"/>
      <p class="mt-3 letra1"> Se trata de una red social diseñada para los amantes del terror, desarrollada en Django. En ella, los usuarios pueden disfrutar de películas, leer historias y estar al día con las últimas novedades en el mundo del terror. Además, la plataforma permite interactuar en vivo con otros aficionados y compartir gustos e intereses en común. </p>
      <button type="button" class="btn btn-success"><strong><a href="https://lumetrio.com/proyectos/ver/182" target="blank">Ver Proyecto</a></strong></button>

     
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>



       </div>
         
        
        

       
        


    );
}}
ReactDOM.render(<Proyectos     />,document.getElementById("proyectos"));


