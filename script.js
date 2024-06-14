// U14123683
function main(){
    d3.selectAll("body") 
    // adds a div element to the HTML body
        .append("div")
        // when moused over, changes background to firebrick
        .on("mouseover", function(){
        d3.select(this)
            .style("background-color", "firebrick")
         })
         // when mouse leaves, reverts background to gray
         .on("mouseout", function(){
            d3.select(this)
            .style("background-color", "gray")
         })
            
}