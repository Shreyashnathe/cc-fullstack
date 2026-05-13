function getRes(input)
{
     return "demo";
}
function solve()
{
    let input = document.getElementById("in").value;

    let space = document.getElementsByClassName("arena");

    space[0].innerHTML += "you : " + "<br>";
    space[0].innerHTML += input + "<br>";
    space[0].innerHTML += "bot" + "<br>";
    
    let res=getRes(input);
    space[0].innerHTML += res + "<br>";
}