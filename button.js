function button()
{
    var x=document.getElementById("A").Value;
    var y=document.getElementById("B").Value;
    var z=document.getElementById("C").Value;
    var k=document.getElementById("D").value;
    var m=x+y+z+k;
    if(typeof x=="number" && typeof y=="number" && typeof z="number" && typeof k=="number")
    {
    window.alert(m);
}
else{
    alert("enter numerics only");
}