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


function Zad1() {
  return (
    <div>
      <h1>Książki</h1>  
      <div style={{ display: "flex" }}>          
        <div>
          <img style={{ width: "150px", height: "200px" }} src="https://m.media-amazon.com/images/I/71S7Z+YhJFL._AC_UF1000,1000_QL80_.jpg" alt="Hobbit" />
          <p>Hobbit</p>
          <p>1993</p>
          <p>327</p>
        </div>
        <div>
          <img style={{ width: "150px", height: "200px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQzUwX9ouNsD-0s4tNwSnfBVB68joisIlX6KUiEDO19w&s=10" alt="star wars" />
          <p>Star wars</p>
          <p>1999</p>
          <p>100</p>
        </div>
        <div>
          <img style={{ width: "150px", height: "200px" }} src="https://static.profinfo.pl/storage/image/core_products/2023/1/12/bee978063070ce5e83451e9d7d25cfb4/admin/preview/49233A01350KS_HD.jpg.webp" alt="harry potter" />
          <p>hgarry potter</p>
          <p>2002</p>
          <p>534</p>
        </div>
      </div>
    </div>
  );
}

export default Zad1;


//export default GreetMal
