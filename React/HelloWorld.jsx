export default function HelloWorld(){
    const lista = [
    {
        name: "Thomás",
        idade: 17,
        escola: "senai" 

    },
    {
        name: "Maria",
        idade: 18,
        escola: "sesi"


    }
        
];
     const MapPessoa = ({pessoa}) => {
        return pessoa.map((ps,index) =>
        <div key={index}>

            <h1>{ps.name}</h1>
            <h1>{ps.idade}</h1>
            <h1>{ps.escola}</h1>
        
        </div>
          
            
        )
    
     } 

     return (
        <>
        
        <MapPessoa pessoa={lista} />
        
        
        </>


     )
    
    }
    
    
    
  
