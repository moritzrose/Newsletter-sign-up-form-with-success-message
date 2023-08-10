"use strict"



const emailInput = document.getElementById("inputEmail")
const submitButton = document.getElementById("submitButton")
const subscribeWindow = document.getElementById("subscribeWindow")
const emailAddress = document.getElementById("email-adress")
const successWindow = document.getElementById("succesWindow")
const dismissButton = document.getElementById("dismiss-btn")

const subscriber = {}

document.addEventListener("DOMContentLoaded", () => {
    submitButton.addEventListener("click", (event) => {
        event.preventDefault()
        subscriber.email = emailInput.value
        emailInput.value = ""
        subscribeWindow.style.display = "none"
        successWindow.style.display = "unset"
        emailAddress.innerText = subscriber.email
    })

    dismissButton.addEventListener("click", () => {
        subscribeWindow.style.display = "flex"
        successWindow.style.display = "none"

    })
})

