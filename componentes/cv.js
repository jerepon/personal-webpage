class Curriculum extends React.Component{
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
        texto="Ver cv";
clase=" d-flex";
clase1=" d-none";
       
    }
    else{
        texto="Ocultar";
        clase=" d-flex";
        clase1=" d-flex";

        
    }
    
    return(

    <div >
        <button className={"btn btn-primary "+clase} type="button" onClick={this.mostrar}><strong>{texto}</strong></button>
        <img src="/img/cv2022.jpg" className={"fotocv"+clase1} />

       
        

    </div>

    );
}}
ReactDOM.render(<Curriculum   />,document.getElementById("cv"));


