const ballContainer = document.querySelector('#ball-container')
const question = document.querySelector('#question')
const shakeButton = document.querySelector('#shake-button')

let answer = null

const messages = [
  'Probably',
  'It has been decided',
  'No doubt',
  'Most definitely',
  'You can count on it',
  'From what I see? Yes.',
  'Most likely',
  'Looks promising',
  'Yes',
  'All signs point to yes',
  'Answer is unclear, try again',
  'Come back later',
  'You are better off not knowing at this time',
  'Tired, unable to predict',
  'Think a little harder and try again',
  "Don't count on it",
  'I will have to say no',
  'All signs point to no',
  'Not looking too good',
  'Very unlikely',
  'Try looking elsewhere',
  'No',
]

const createAnswer = () => {
    const answerElement = document.createElement('p')
    answerElement.classList.add('fade', 'text-center', 'fs-3', 'fw-bold', 'bg-primary', 'text-light', 'px-2', 'py-3', 'rounded', 'w-50', 'position-absolute', 'top-50', 'start-50', 'translate-middle')
  
    const seed = Math.random() * messages.length - 1
    const randomIndex = seed > 0 ? Math.floor(seed) : Math.ceil(seed)
    
    answerElement.innerText = messages[randomIndex]
  
    return answerElement
  }
  
  const shakeBall = () => {
    ballContainer.classList.add('shake')
    if (answer) answer.remove()
  
    answer = createAnswer()
  
    setTimeout(()=>{
      ballContainer.classList.remove('shake')
      ballContainer.append(answer)
    }, 1000)
  
  }
  
  const checkQuestion = () => {
    return question.value.length > 0
  }
  
  shakeButton.addEventListener('click', () => {
    if(checkQuestion()) shakeBall()
  })
  
  question.addEventListener('keyup', (e) => {
    shakeButton.disabled = !checkQuestion()
  
    if (e.key === 'Enter' && checkQuestion()) shakeBall()
  })