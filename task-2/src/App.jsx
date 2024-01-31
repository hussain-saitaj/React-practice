import ColorItem from "./ColorItem";

const App = () =>{
  const colors =["blue", "red", "black", "yellow", "pink" ,"green","brown","gray"];
  return (
    <div id="container">
      <div className="color-selector"> 
            {
            colors.map((color,index) => <ColorItem  key ={index} color={color}/> )
            }  
      </div>
    </div>
  );
}

export default App;