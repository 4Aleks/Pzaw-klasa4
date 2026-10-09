function Greet({age, name}){
  if (age > 30){
    return(
      <p>Witaj {name}</p>
    );
  }else{
    return(
        <p> hej kolego</p>
    );
  }
}


function GreetMal(props){
  return(
          <div>
            <Greet name="Mario" age={45} />
            <Greet name="lUIGI" age={12} />
          </div>
        );
}


function zad1(props){
    <h1>Filmy</h1>

    <div></div>




}


export default GreetMal
