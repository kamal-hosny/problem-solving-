const areaOrPerimeter = function(l , w) {
    // Return your answer

    if(l == w) {
        return l * w
    } else {
        return (l + w )  * 2 
    }

  };

  console.log(areaOrPerimeter(3, 3));