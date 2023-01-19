const button = document.getElementById('addInfo')
let devs = []

function updateArraySize() {
    var arraySize = devs.length;
    document.getElementById("totalDevH5").innerHTML = 'Total de desenvolvedores: ' + arraySize;
}

if (devs.length === 0) {
    document.getElementById("devRegistration").style.display = "none"
}

button.addEventListener('click', function(ev){
    ev.preventDefault()
    const form = document.getElementById('registrationForm')
    const name = document.getElementById('name').value

    if(name === ''){
        alert("Preencha o nome!")
    }else{
        const labelName = document.createElement('label')
        labelName.innerText = "Com quais tecnologias " + name + " trabalha:"
        labelName.appendChild(document.createElement('br'))
        const techName = document.createElement('input')
        techName.type = 'text'
        techName.id = 'techName'
        
        const divInput = document.createElement('div')
        divInput.classList = 'divInput'
        
        const hr = document.createElement('hr')

        const labelExpQuest = document.createElement('label')
        labelExpQuest.innerText = 'A quanto tempo trabalha com essas tecnologias:'
        labelExpQuest.className = 'labelExpQuest'
        labelExpQuest.appendChild(document.createElement('br'))
        
        const inputExp = document.createElement('input')
        inputExp.name = 'inputExp'
        inputExp.type = 'radio'
        inputExp.value = '0 - 2 Anos'
        const labelExp = document.createElement('label')
        labelExp.innerText = '0 - 2 Anos'
        labelExp.appendChild(document.createElement('br'))

        const inputExp2 = document.createElement('input')
        inputExp2.name = 'inputExp'
        inputExp2.type = 'radio'
        inputExp2.value = '3 - 5 Anos'
        const labelExp2 = document.createElement('label')
        labelExp2.innerText = '3 - 5 Anos'
        labelExp2.appendChild(document.createElement('br'))

        const inputExp3 = document.createElement('input')
        inputExp3.name = 'inputExp'
        inputExp3.type = 'radio'
        inputExp3.value = 'Mais de 5 anos'
        const labelExp3 = document.createElement('label')
        labelExp3.innerText = 'Mais de 5 anos'
        labelExp3.appendChild(document.createElement('br'))

        const divQuestion = document.createElement('div')
        divQuestion.id = name
        divQuestion.className = 'blockDev'

        const buttonCreate = document.createElement('button')
        buttonCreate.id = 'buttonCreate'
        buttonCreate.innerText = 'CADASTRAR'

        const labelForRemove = document.createElement('label')
        labelForRemove.id = 'nameForRemove'
        labelForRemove.innerText = 'Digite o nome do desenvolvedor para cancelar este cadastro:'
        const inputForRemove = document.createElement('input')
        inputForRemove.id = 'nameForRemove'
        const buttonForRemove = document.createElement('button')
        buttonForRemove.id = 'nameForRemove'
        buttonForRemove.innerText = 'Cancelar'
        
        divInput.append(labelExpQuest, inputExp,labelExp, inputExp2,labelExp2, inputExp3,labelExp3)
        divQuestion.append(labelName,techName, divInput, buttonCreate,labelForRemove, inputForRemove, buttonForRemove, document.createElement('br'))
        form.appendChild(divQuestion)
        document.getElementById('name').value = ''

        if(devs.length > 0){
            document.getElementById("devRegistration").style.display = "block"
          }

        buttonCreate.addEventListener('click', function(ev){
            ev.preventDefault()

            const devRegistration = document.getElementById('devRegistration')

            const divForDevRegistration = document.createElement('div')
            divForDevRegistration.id = name
            divForDevRegistration.className = 'devRegistrationDiv'

            const nameConfirm = document.createElement('span')
            nameConfirm.innerText = 'Nome: ' + name

            const techConfirm = document.createElement('span')
            techConfirm.innerText = ' Tecnologias: ' + techName.value

            const inputValue = document.querySelector('input[name="inputExp"]:checked').value
            const inputConfirm = document.createElement('span')
            inputConfirm.innerText = ' Tempo de experiencia: ' + inputValue

            if(techName.value === ''){
                alert('Preencha todos os campos corretamente!')
            }else{
                divForDevRegistration.append(nameConfirm, techConfirm, inputConfirm)
                devRegistration.append(divForDevRegistration)
                form.removeChild(divQuestion)
                const technology = techName.value
                const timeExperience = inputValue
                devs.push({name,
                technology,
                timeExperience,
                })

                if(devs.length >=1){
                    document.getElementById("devRegistration").style.display = "block"
                }

                updateArraySize()
                console.log(devs)
            }
        })

        buttonForRemove.addEventListener('click', function(ev){
            ev.preventDefault()

            const nameForRemove = document.getElementById(inputForRemove.value)
            const name = document.getElementById('name').value

            if(nameForRemove === null){
                alert('O nome não confere')
            }else if(nameForRemove.value == name.value){
                nameForRemove.remove()
            }
        })
    }
})

const removeDevsButton = document.getElementById('removeDevsButton')

    removeDevsButton.addEventListener('click', function(ev){
    ev.preventDefault()

    const removeDevsInput2 = document.getElementById('removeDevsInput2')
    const removeDevs = document.getElementById(removeDevsInput2.value)

    let found = false

    for(i = 0; i < devs.length; i++){
        if(devs[i].name == removeDevsInput2.value){
            devs.splice(i, 1)
            console.log(devs)
            found = true
            removeDevs.remove()
            alert(removeDevsInput2.value + " foi removido com sucesso!")
            removeDevsInput2.value = ''
            if (devs.length === 0) {
                document.getElementById("devRegistration").style.display = "none"
            }
            updateArraySize()
        }
    }
    if(!found){
    alert(removeDevsInput2.value + " não foi encontrado em nosso sistema!")
    }
})

