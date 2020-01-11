// Code your solution here

const findMatching = (drivers, string) => 
    drivers.filter( driver => 
        driver.toLowerCase() === string.toLowerCase()
    )


const fuzzyMatch = (drivers, string) => 
    drivers.filter( driver => 
        driver.startsWith(string)
    )

const matchName = (drivers, string) => 
    drivers.filter( driver => 
        driver.name === string
    )