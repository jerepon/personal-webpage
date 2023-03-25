class Galeria extends React.Component{
    constructor(props){
        super(props);
        this.state={
            mostrar:true,
    

        
    }
    this.mostrar = this.mostrar.bind(this)
}
mostrar(){
    let mostraractual=this.state.mostrar;


	this.setState({
		
		mostrar:!mostraractual,
		
	});
	
    
}

render(){
    let texto="";
    let clase="";
    let clase1="";
    if(this.state.mostrar){
        texto="Abrir galeria";
clase=" d-flex";
clase1=" d-none";
       
    }
    else{
        texto="Cerrar";
        clase=" d-flex";
        clase1=" d-flex";

        
    }
    
    return(

    <div>
        <h4 className="text text-white" >{this.props.dato}</h4>
       <button type="button" className={" text text-white btn btn-"+this.props.color+ clase  } onClick={this.mostrar}><strong>{texto}</strong> </button>

       <div className={"container"+ clase1}>
        <div className="row">
          <div className="col-12" >
      <div id={this.props.din} className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100   " src={this.props.enlace} alt="First slide" />
          </div>
          <div className="carousel-item">
          <img className="d-block w-100" src={this.props.enlace1} alt="Third slide"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={this.props.enlace2} alt="Third slide"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={this.props.enlace3} alt="Third slide"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={this.props.enlace4} alt="Third slide"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={this.props.enlace5} alt="Third slide"/>
          </div>
          <div className="carousel-item">
          <video className="d-block w-100"  src={this.props.enlace6} controls></video>
          </div>
          <div className="carousel-item">
          <video className="d-block w-100"  src={this.props.enlace7} controls></video>
          </div>
        </div>
        <a className="carousel-control-prev mb-5" href={"#"+this.props.din} role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href={"#"+this.props.din} role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      </div>
      </div>
</div>

       
        

    </div>

    );
}}
ReactDOM.render(<Galeria  dato="VIAJES" color="danger" enlace="/img/viajes1.jpg" enlace1="/img/viajes2.jpg" enlace2="/img/viajes3.jpg" enlace3="/img/viajes4.jpg" enlace4="/img/viajes5.jpg" enlace5="/img/viajes6.jpg" enlace6="/img/viajes7.mp4" enlace7="/img/viajes8.mp4" din="carrousel" />,document.getElementById("galeria"));

ReactDOM.render(<Galeria  dato="NATACIÓN " color="warning" enlace="/img/natacion1.jpg" enlace1="/img/natacion2.jpg" enlace2="/img/natacion3.jpg" enlace3="/img/natacion4.jpg" enlace4="/img/natacion5.jpg" enlace5="/img/natacion6.jpg" enlace6="/img/natacion7.mp4" enlace7="/img/natacion8.mp4" din="carrousel1"  />,document.getElementById("galeria1"))

