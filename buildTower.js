const buildTower = num =>{
    let tower =[]
    for(let i =0; i<num; i++){
        let str = "*".repeat(2 * i + 1)
        let spaces = " ".repeat(num - i -1)
        tower.push(spaces + str + spaces)
    }
    return tower
}
console.log(buildTower(16))