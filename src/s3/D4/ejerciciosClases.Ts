class pelicula {
    // propiedades
  

    // inicializar un objeto
    // instancia un objeto
    constructor(private _imagen: string, private _nombre: string,private _ranking: number,private _genero: string,private _duracion:string ) {  
    }

    set imagen(value:string){

     this._imagen = value;

    }
    set nombre(value:string){

        this._nombre = value;
            
    }
    set ranking(value:number){

        this._ranking = value;
        
    }
    set genero(value:string){

        this._genero = value;
        
    }
    set duracion(value:string){

        this._duracion = value
    }
    


    get imagen(){

       return this._imagen;
   
       }
       get nombre(){
   
           return this._nombre;
               
       }
       get ranking(){
   
           return this._ranking;
           
       }
       get genero(){
   
           return this._genero ;
           
       }
       get duracion(){
   
           return this._duracion;
       }
    
}