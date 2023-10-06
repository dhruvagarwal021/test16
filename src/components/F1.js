import "./Style.css";
function F1()
{
    const mystyle={color:"blue",backgroundColor:"orange",width:"270px"}
    return(
        <div>
            <h1 style={{color:"red"}}>Inline styling</h1>
            <h1 style={mystyle}>Internal Styling</h1>
            <h1 class="c1">External Style</h1>
            <h1 class="text-primary text-center m-5 bg-dark">BootStrap Styling</h1>
        </div>
    );
}

export default F1;