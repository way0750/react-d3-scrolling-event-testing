var node = d3.select(this.DOMnode);
    node.transition()
        .style({'background-color': 'blue', opacity: 1})
        .duration(2000)
        .transition()
        .style({"animation-duration": "3s", "animation-name": "fancy", "animation-iteration-count": "infinite", "animation-direction": "alternate"})
        .duration(3000); 


for getting windows current x and y:
    window.scrollY
to go to specific location:
  window.scroll(0, 0); or window.scrollByPages(1);????
