import Toastify from 'toastify-js'

const initConfig = {
    text: '',
    duration: 3000,
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {},
}

function showMessage(msg, mood){
    Toastify({
        ...initConfig,
        text: msg,
        style: {
            background: mood,
        },
    }).showToast()
}

export function showSuccessMessage(msg){
    showMessage(msg, 'green')
}

export function showErrorMessage(msg){
    showMessage(msg, 'red')
}