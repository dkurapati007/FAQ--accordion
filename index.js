const detailsState=document.querySelectorAll('#detailsTag');


detailsState.forEach((detailsState)=>{detailsState.addEventListener("toggle",()=>
{
    imageIcon=detailsState.querySelector("img");
if(detailsState.open){
   
    imageIcon.src="./assets/images/icon-minus.svg";   
}
else
{
    
    imageIcon.src="./assets/images/icon-plus.svg";
}
}
)});
