const heading = document.getElementById('hello')
// const blurs = document.getElementsByTagName('h2')
// const heading2 = document.getElementsByClassName('h2-class')[0]
const heading2 = document.querySelector('.h2-class')
const h2list = document.querySelectorAll('h2')
const heading3 = h2list[h2list.length - 1]


setTimeout(() => {
    addStylesTo(heading, text = 'JavaScript')
},1000)
const link = heading3.querySelector('a')
link.addEventListener('click', (event) => {
    event.preventDefault()
    console.log('Click', event.target.getAttribute('href'))
    const url = event.target.getAttribute('href')
    window.location = url

})
setTimeout(() => {
    addStylesTo(heading2, text = 'Is already', color = 'red')
},2000)
setTimeout(() => {
    addStylesTo(heading3.children[0],text = ' Done', color = 'blue' ,fontSize = "2rem")
},3000)

function addStylesTo (node, text , color = 'red', fontSize) {
    node.textContent = text
    node.style.textAlign = 'center'
    node.style.color = color
    node.style.background = 'linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c)'
    node.style.padding = '2rem'
    node.style.display = 'block'
    node.style.width = '100%'
    if(fontSize){
        node.style.fontSize = fontSize
    }
    
    
}
heading.onclick = () => {
    if(heading.style.color === 'red'){
        heading.style.color = '#000'
        heading.style.background = '#fff'
    }
    else {
        heading.style.color = 'red'
        heading.style.background = '#000'
    }
}

heading2.addEventListener('dblclick', () => {
    if(heading2.style.color === 'red'){
        heading2.style.color = '#000'
        heading2.style.background = '#fff'
    }
    else {
        heading2.style.color = 'red'
        heading2.style.background = '#000'
    }
})