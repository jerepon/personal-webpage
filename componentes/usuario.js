class Bienvenida extends React.Component{
	constructor(props){
		super(props);
		this.state={
			mostrar:localStorage.getItem("mostrar"),
			usuario:localStorage.getItem("usuario"),
			user:localStorage.getItem("user"),
			email:localStorage.getItem("email"),
			contra:localStorage.getItem("contra"),
			panel:false,
			
			
			
		}
		this.alerta = this.alerta.bind(this);
		this.newusuario=this.newusuario.bind(this);
		this.cambiovalor=this.cambiovalor.bind(this),
		this.cambiovalor1=this.cambiovalor1.bind(this),
		this.cambiovalor2=this.cambiovalor2.bind(this),
		this.panelusuario=this.panelusuario.bind(this),
		this.volverpanel=this.volverpanel.bind(this),
		this.borrar=this.borrar.bind(this)

		

	}

	borrar(){
		
		alert("PERFIL BORRADO");
		
		
		localStorage.removeItem("user");
		localStorage.removeItem("email");
		localStorage.removeItem("contra");
		localStorage.removeItem("usuario"),
		localStorage.removeItem("mostrar"),



		
		this.setState({
			panel:false,
			
			
			user:"",
			email:"",
			contra:""
		});
		
		
		

		




	}

	volverpanel(){
		this.setState({
			panel:false
		})
	}

	panelusuario(){
		this.setState({
			panel:true
		})

	}

	

	cambiovalor(event){
		let datoingresado=event.target.value;
		this.setState({
			user:datoingresado
		})
	}

	cambiovalor1(event){
		let datoingresado=event.target.value;
		this.setState({
			email:datoingresado
		})
	}

	cambiovalor2(event){
		let datoingresado=event.target.value;
		this.setState({
			contra:datoingresado
		})
	}
	

newusuario(){
if(this.state.user.length>0 && this.state.email.length>10   && this.state.contra.length>0)
	{alert("nuevo usuario creado");
	
		let mostraractual=this.state.mostrar;
		this.setState({
			
			mostrar:true,
			usuario:true,
		});
		
	
	localStorage.setItem("user",this.state.user);
	localStorage.setItem("email",this.state.email);
	localStorage.setItem("contra",this.state.contra);
	
	localStorage.setItem("mostrar",this.state.mostrar);
	
	
	

	
	}
	else{alert("FALTAN COMPLETAR DATOS ,O EL MAIL INGRESADO NO CUMPLE NI CON EL FORMATO NI CON LA  LONGITUD ADECUADA")
			this.setState({
				
				mostrar:false
			})

		}
		
		
	
	}


	
	alerta(){
  
		let mostraractual=this.state.mostrar;


	this.setState({
		
		mostrar:!mostraractual,
		usuario:localStorage.setItem("usuario",false),
	});
	
		
		
	}


render(){
let clase="";
let texto="";
let clase1="";
let clase2="";
let clase3="";
let texto2="";


if(this.state.panel){
	texto2="volver";
	clase3=" d-flex flex-wrap d-lg-inline-block flex-wrap";
	clase1=" d-none";
	clase2=" d-none";
	clase=" d-none";

}

else if(this.state.mostrar && this.state.usuario && this.state.user.length>0){
	clase1=" d-flex flex-wrap d-lg-inline-block flex-wrap";
	clase=" d-none";
	clase2=" d-none";
	clase3=" d-none";
	texto2="Panel de usuario"
 }

else if(this.state.mostrar ){
	clase= " d-flex flex-wrap d-lg-inline-block ";
	texto="Volver";
	clase1=" d-none ";
	clase3=" d-none";

 }
 else {
	clase=" d-none";
	texto="Crear mi usuario";
	clase1=" d-none";
	clase3=" d-none"
	
	
}


	return(
	<div className="mt-4  "  >
	<button type="button" className={" btn btn-primary  mx-3"+clase2} onClick={this.alerta}><strong>{texto}</strong></button>
	<p className={"mx-3"+ clase}>Usuario </p>
	<input className={clase} type="text"  placeholder="nombre" onChange={this.cambiovalor} ></input>
	<p className={"mx-3"+ clase}>EMail </p>
	<input className={clase} type="Email"  placeholder="Email" onChange={this.cambiovalor1}></input>
	<p className={"mx-3"+ clase}>Contraseña </p>
	<input className={clase} type="password"  placeholder="clave" onChange={this.cambiovalor2}></input>
	<button className={"btn  btn-success mx-3"+ clase} type="button" onClick={this.newusuario} ><strong>Crear</strong></button>
	<p className={ "letra1" +clase1}>Bienvenido a mi página,{this.state.user}  </p>
	<br></br>
	<button className={"btn btn-warning text text-white"+clase1} type="button" onClick={this.panelusuario}><strong>{texto2}</strong></button>
	<h3 className={clase3}>Panel de usuario</h3>
	<br></br>
	<p className={"mx-3 letra1"+clase3}>Usuario:{this.state.user}</p>
	<p  className={"mx-3 letra1"+clase3}>Email:{this.state.email}</p>
	<p  className={"mx-3 letra1"+clase3}>Contraseña:{this.state.contra}</p>
	<br></br>
	<button className={"btn btn-warning my-3 text text-white"+clase3} type="button" onClick={this.volverpanel}><strong>Volver</strong></button>
	
	<br></br>
	<button className={"btn btn-danger"+clase3} type="button" onClick={this.borrar} ><strong>Eliminar perfil</strong></button>
	
	
	
	
	
	</div>
	
		

		
		
		
		);
	

}
}
ReactDOM.render(<Bienvenida    />,document.getElementById("usuario"));



