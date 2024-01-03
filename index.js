let passwordLength = document.getElementById("passwordLength")
let password = document.getElementById("password")
let saveButton = document.getElementById("saveButton")

const generatorPassword = (len) => {
    const lowAlphabet ="abcdefghijklmnopqrstuvwxyz"
    const upperAlphabet ="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numeric ="0123456789"


    const data = lowAlphabet + upperAlphabet + numeric 
    let generator = '';
    for (let index = 0; index < len; index++){
        generator += data [~~(Math.random()* data.length)]
    }
    return generator

}
const getPassword = () =>{
    const newPassword = generatorPassword(passwordLength.value)
    password.value = newPassword
    setTimeout(() => {
        alert('Password has been generator!')
    },1000)

}
const savePassword =() =>{
document.title = password.value
saveButton.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(`password saya : ${document.title}`))
saveButton.setAttribute('download', 'MyPasswordGenerator.txt')
setTimeout(() => {
    alert('BERHASIL DI SIMPAN')
}, 1000)
}