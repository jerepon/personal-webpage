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
        
      <img class="d-block w-100" src="/img/mewtwo.jpg" alt="First slide"/>
      <p class="mt-3 letra1"> Creación de lógica jugable de videjuego inspirado en Pokemón
</p>
<button type="button" class="btn btn-success"><strong><a href="https://lumetrio.com/proyectos/ver/132" target="blank">Ver Proyecto</a></strong></button>

      
    </div>
    
    <div class="carousel-item">
    <h3>Página Web E-Commerce</h3>
        
      <img class="d-block w-100" src="/img/commerce.jpg" alt="Second slide"/>
      <p class="mt-3 letra1"> Plataforma que permite realizar transacciones comerciales de productos online </p>
      <button type="button" class="btn btn-success"><strong><a href="https://lumetrio.com/proyectos/ver/180" target="blank">Ver Proyecto</a></strong></button>
      
    </div>
    <div class="carousel-item ">
    <h3>Jeresmart Cinema</h3>
      <img class="d-block w-100" src="/img/pelis.jpg" alt="Third slide"/>
      <p class="mt-3 letra1"> Plataforma online para poder ver y descargar películas y series </p>
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


