const a={
    name:"Sachin",
    email:"ss@gmail.com",
    job:{
        position:"SDE"
    }
}

const b = {...a}
const c = JSON.parse(JSON.stringify(a))
b.job.position="FDE"
c.job.position="BDE"
console.log(a.job.position)
console.log(b.job.position)
console.log(c.job.position)

