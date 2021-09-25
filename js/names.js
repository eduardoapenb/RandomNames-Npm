

function showNames(number){
    let names = ['Liam', 'Danna', 'Sofia', 'Erica', 'Jose', 'Rocio', 'Carlos','Hector', 'Eduardo']
    let namesString = ""

    for(let i=0; i<number; i++){
        namesString += names[i] 
    }
    return namesString
}

function getNumber(){
    let numbers = Number(document.getElementById('names').value)
    let showNamesText = showNames(numbers)
    document.getElementById('output').innerHTML = showNamesText
}