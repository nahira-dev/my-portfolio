const user = {
    username: 'Hilmi',
    password: '123',
}
const rand1 = Math.floor(Math.random() * 100) + 1
const rand2 = Math.floor(Math.random() * 10) + 1

const landingElm = document.getElementById('myPage')
const pgloaderElm = document.getElementById('pgloader')
const wrapperElm = document.getElementById('wrapper')
const usernameElm = document.getElementById('username')
const passwordElm = document.getElementById('password')
const btnLoginElm = document.getElementById('login')
const jawabElm = document.getElementById('jawabannya')

const jw1 = document.getElementById('jw1')
jw1.innerHTML='<input type="text" value="'+rand1+'+'+rand2+'" class="mt-1 px-4 text-center py-2 w-full border rounded-md focus:ring focus:ring-indigo-300"/>'
const jawaban =rand1+rand2
btnLoginElm.addEventListener('click', function () {
    const username = usernameElm.value
    const password = passwordElm.value
    const jawabannya = jawabElm.value

    if (username !== "" && password !== "") {
        if ((username.toLowerCase() === user.username.toLowerCase()) && (password === user.password)) {
            if(jawabannya == jawaban){
                alert('Anda Berhasil Login')
                landingElm.style.display = 'none'
                pgloaderElm.style.display = 'block'
                wrapperElm.style.display = 'block'
            } else {
                alert('Gagal Login, Jawaban Anda Salah')
            }            

        } else {
            alert('Username dan Password anda salah')
        }
    } else {
        alert('Username dan Password harus diisi dulu')
    }

})




