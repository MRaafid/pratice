function loop(max, even = 0) {
    if (even <= max) 
        {
            if (even % 2 === 0) 
                {
                    console.log(even);
                }
            return loop(max, even + 1); // Recursive call
        }
  }
  
  //loop(10);
  //loop(100);
  function a(max, i = 0)
    {
        if (i <= max)
            {
                console.log(i);
                return a(max, i+1)
            }
        
    }
    a(10)