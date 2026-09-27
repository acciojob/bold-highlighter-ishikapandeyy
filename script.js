let strng=document.querySelectorAll('strong')
let link=document.getElementsByTagName("a")

function highlight(onmouseover) {
    //Write your code here
  strng.forEach((element)=> {
        element.style.color = "rgb(0, 128, 0)";
    });

}

function return_normal(onmouseout ) {
    //Write your code here
strng.forEach((element)=> {
        element.style.color = "rgb(0, 0, 0)";
    });
    
}
