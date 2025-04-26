let base = document.querySelector('.base')
const premiereCase = document.getElementById('premiere-case')
const boxs = document.querySelectorAll('.case')
const destroy = document.querySelector('.destroy')
const allCases =[]
const choix = []
let photoEnCours

//on met les boxs dans un tableau parce que c'est plus facile à utiliser

for(i=0;i<boxs.length; i++){
    allCases.push(boxs[i])
}
allCases.push(destroy)

let indexPhoto = 1

base.style.backgroundImage = `url(https://loremflickr.com/320/240?random=${indexPhoto})`
photoEnCours = `url(https://loremflickr.com/320/240?random=${indexPhoto})`

//for in c'est pour les objets
//for of c'est pour les tableaux

function nvBase(){
    
    const newBase = document.createElement('div')
    newBase.setAttribute('class', 'base')
    newBase.setAttribute('draggable', 'true')
    indexPhoto++
    newBase.style.backgroundImage = `url(https://loremflickr.com/320/240?random=${indexPhoto})`
    photoEnCours = `url(https://loremflickr.com/320/240?random=${indexPhoto})`
    premiereCase.appendChild(newBase)
    base = newBase
    console.log(indexPhoto)
}

for(const vide of allCases){

    vide.addEventListener('dragover', dragOver)
    //lorsqu'on survole avec la souris l'élement sur la zone
    vide.addEventListener('dragenter', dragEnter)
    //lorsqu'on on y entre
    vide.addEventListener('drop', dragDrop)
    //lorsqu'on le lache

}

function dragDrop(){
    
    if(this.id === "premiere-case"){
        return
    }
    // destroy
    if(this.id === "destroy"){
        base.remove()
        nvBase()
        return
    }
    //verouillage

    this.removeEventListener('drop', dragDrop)
    this.removeEventListener('dragenter', dragEnter)
    this.removeEventListener('dragover', dragOver)


    this.appendChild(base)
    this.childNodes[0].setAttribute('draggable', false)
    nvBase()

    choix.push(photoEnCours)
    if(choix.length === 3){
        setTimeout(()=>{
            alert("selection terminée !")
        },200)
    }
}

function dragOver(e){
    e.preventDefault()
}
function dragEnter(e){
    e.preventDefault()
}