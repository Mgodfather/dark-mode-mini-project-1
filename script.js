
//my logic/code=====>
// const body = document.querySelector('body')
// const box = document.querySelector('.specific-section .text-box h1')

// const bothInputBox = document.querySelectorAll('input')

// bothInputBox.forEach((checkBoxes) => {
//     checkBoxes.addEventListener('change', (checkbox) => {
//         // console.log(checkbox.target.id);
//         if (checkbox.target.id === 'for-full-screen') {
//             body.classList.toggle('active-full')
//             box.classList.toggle('active-specific-section')
//         } else {
//             box.classList.toggle('not-active')
//             box.classList.toggle('active-specific-section')
//         }
//     })
// })



//again my logic with different approach ==>

// const body = document.body
// const box = document.querySelector('.specific-section .text-box h1')
// const forFullScreen = document.querySelector('#for-full-screen')
// const forSpecificBox = document.querySelector('#for-specefic-screen')

// forFullScreen.addEventListener('change', (e) => {
//     body.classList.toggle('active-full')
//     forSpecificBox.checked = true

//     if (!body.classList.contains('active-full')) {
//         forSpecificBox.checked = false
//         box.classList.add('active-specific-section')
//         if (!forSpecificBox.checked) {
//             box.classList.remove('active-specific-section')
//         }
//     }
//     if (forFullScreen.checked) {
//         box.classList.add('active-specific-section')
//     }
// })
// // 2362023
// forSpecificBox.addEventListener('change', (e) => {
//     if (forFullScreen.checked) {
//         box.classList.toggle('active-specific-section')
//     } else {
//         box.classList.toggle('active-specific-section')
//     }
// })


//this is expert logic / code (procoder) and its also simple from my above different approach ==>

const body = document.body
const box = document.querySelector('.specific-section .text-box h1')
const forFullScreen = document.querySelector('#for-full-screen')
const forSpecificBox = document.querySelector('#for-specefic-screen')

const darkModeValueForScreen = JSON.parse(localStorage.getItem('forFullScreen')) 
const darkModeValueForSpeceficBox = JSON.parse(localStorage.getItem('forSpecificBox'))

if (darkModeValueForScreen) {
    forFullScreen.checked = true
} if (darkModeValueForSpeceficBox) {
    forSpecificBox.checked = true
}
fullScreenDarkMode()
darkModeForSpeceficContainer()

forFullScreen.addEventListener('change', (e) => {
    fullScreenDarkMode()
    darkModeForSpeceficContainer()
})

function fullScreenDarkMode() {
    // if (forFullScreen.checked) {
    //     body.classList.add('active-full')
    //     localStorage.setItem('forFullScreen', true)
    // } else {
    //     body.classList.remove('active-full')
    //     localStorage.setItem('forFullScreen', false)
    // }
    // forSpecificBox.checked = forFullScreen.checked   

    changeTheme(forFullScreen, body, 'forFullScreen')
}

function darkModeForSpeceficContainer() {
    // if (forSpecificBox.checked) {
    //     box.classList.add('active-specific-section')
    //     localStorage.setItem('forSpecificBox', true)
    // } else {
    //     box.classList.remove('active-specific-section')
    //     localStorage.setItem('forSpecificBox', false)
    // }
    changeTheme(forSpecificBox, box, 'forSpecificBox')
}

function changeTheme(inputCheckBox, contentTheme, localStorageKey) {
    if (inputCheckBox.checked) {
        contentTheme.classList.add('dark')
        localStorage.setItem(localStorageKey, true)
    } else {
        contentTheme.classList.remove('dark')
        localStorage.setItem(localStorageKey, false)
    }
}

forSpecificBox.addEventListener('change', darkModeForSpeceficContainer)