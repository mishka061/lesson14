//большой вариант
fetch('http://127.0.0.1:5500/index.html')
.then(data => {
    console.log(data)
    data.text().then(data2 =>{
        console.log(data2)
    })
})


//средний вариант
fetch('http://127.0.0.1:5500/index.html')
.then(data => {
    console.log(data)
    return data.text()
})
.then(data => {
    console.log(data)
})


//короткий вариант
fetch('http://127.0.0.1:5500/index.html')
.then(data =>  data.text())
.then(data => console.log(data))

let a = new Promise((resolve, reject)=>{
    fetch('http://127.0.0.1:5500/index.html')
    .then(data=>{
        resolve(data.text())
    })
})
let b = new Promise ((resolve, reject)=>{
    fetch('http://127.0.0.1:5500/index.html')
    .then(data=>{
        resolve(data.text())
    })
})



a.then(data =>{
    console.log(data)
})
Promise.all([a,b]).then(data =>{
    console.log(data)
})