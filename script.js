function main(){
    d3.selectAll("body")
        .append("div")
        .on("mouseover", function(){
        d3.select(this)
            .style("background-color", "firebrick")
         })
         .on("mouseout", function(){
            d3.select(this)
            .style("background-color", "gray")
         })
            
}