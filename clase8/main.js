var estudiantes = [ "Victor", "Alvaro", "Angel", "Laura"];

const obtenerEstudiantes = () => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(estudiantes)
        },3000)
    })
}

obtenerEstudiantes().then(res => {
    console.log(res)
})