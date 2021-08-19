const ul = document.querySelector('.container-ul')
const pesquisarInput = document.getElementById('pesquisarInput')

const urlApi = 'https://rickandmortyapi.com/api/character'

function heandleError(response){
    if(!response.ok){
        throw Error(response.status)
    } 
    return response
}



 async function getData(){
       const data = await fetch(urlApi)
       .then(response => heandleError(response))
       return data.json()
    
} 

 getData().then(json => viewTemplate(json))

 function viewTemplate (json){

    json.results.map(dados => {
        const bgSpecies = dados.species === "Human" ? 'bg-yellow-200' : 'bg-gray-600'
        const pStyle = 'bg-gray-100 shadow m-2 rounded-lg p-2'
    
        const divCard = document.createElement('div')
        divCard.classList = `m-10 rounded-xl shadow ${bgSpecies}`

        const divImg = document.createElement('div')
        divImg.classList = 'flex justify-center'
        const img = document.createElement('img')
        img.classList = 'rounded-xl rounded-b-none w-full'
        img.setAttribute('src', `${dados.image}`)

        const divInfo = document.createElement('div')
        divInfo.classList = 'p-4'
        const pName = document.createElement('p')
        pName.classList = 'bg-green-600 text-white font-semibold shadow m-2 rounded-lg p-2'
        pName.textContent = `Name: ${dados.name}`
        const pGender = document.createElement('p')
        pGender.classList = `${pStyle}`
        pGender.textContent = `Gender: ${dados.gender}`
        const pSpecies =document.createElement('p')
        pSpecies.classList = `${pStyle}`
        pSpecies.textContent = `Species: ${dados.species}`
        const pStatus = document.createElement('p')
        pStatus.classList = `${pStyle}`
        pStatus.textContent = `Status: ${dados.status}`

        divImg.appendChild(img)

        divInfo.appendChild(pName)
        divInfo.appendChild(pGender)
        divInfo.appendChild(pSpecies)
        divInfo.appendChild(pStatus)

        divCard.appendChild(divImg)
        divCard.appendChild(divInfo)
        
        ul.appendChild(divCard)
       
    })
    
}


getData().then(json => pesquisaTemplate(json))
    
 function pesquisaTemplate (json){
    
   pesquisarInput.addEventListener('input', () => {
       const pesquisar = pesquisarInput.value
       const result = json.results.filter(pesq => pesq.name.indexOf(pesquisar) >= 0)
       ul.innerHTML = ''
       result.map(dados => {
           const bgSpecies = dados.species === "Human" ? 'bg-yellow-200' : 'bg-gray-600'
           const pStyle = 'bg-gray-100 shadow m-2 rounded-lg p-2'
       
           const divCard = document.createElement('div')
           divCard.classList = `m-10 rounded-xl shadow ${bgSpecies}`
   
           const divImg = document.createElement('div')
           divImg.classList = 'flex justify-center'
           const img = document.createElement('img')
           img.classList = 'rounded-xl rounded-b-none w-full'
           img.setAttribute('src', `${dados.image}`)
   
           const divInfo = document.createElement('div')
           divInfo.classList = 'p-4'
           const pName = document.createElement('p')
           pName.classList = 'bg-green-600 text-white font-semibold shadow m-2 rounded-lg p-2'
           pName.textContent = `Name: ${dados.name}`
           const pGender = document.createElement('p')
           pGender.classList = `${pStyle}`
           pGender.textContent = `Gender: ${dados.gender}`
           const pSpecies =document.createElement('p')
           pSpecies.classList = `${pStyle}`
           pSpecies.textContent = `Species: ${dados.species}`
           const pStatus = document.createElement('p')
           pStatus.classList = `${pStyle}`
           pStatus.textContent = `Status: ${dados.status}`
   
           divImg.appendChild(img)
   
           divInfo.appendChild(pName)
           divInfo.appendChild(pGender)
           divInfo.appendChild(pSpecies)
           divInfo.appendChild(pStatus)
   
           divCard.appendChild(divImg)
           divCard.appendChild(divInfo)
           
           ul.appendChild(divCard)
       })
        
   })
  
}

