// ==UserScript==
// @name         Discord | 🎮KS Script🎇 |Discord Auto Login with Token Menu
// @namespace    Discord Token
// @version      1.1
// @description  Auto login to Discord using a token with a button in https://discord.com/login
// @author       xX_KSGaming_Xx (KoKsus)
// @match        https://discord.com/login
// @icon         https://imgur.com/UNUydQo.png
// @grant        none
// ==/UserScript==

//Discord: https://discord.gg/9TNezpZEmc
//youtube: https://www.youtube.com/@xx_ksgaming_xx
//github:  https://github.com/xXKSGamingXx
//paypal:  https://www.paypal.com/paypalme/ksfap
//Tipply:  https://tipply.pl/@xx_ksgaming_xx

(function() {
    'use strict';

    // Function to create and display the input form for the token
    function createTokenInputForm() {
        // Create a div for the form
        const formDiv = document.createElement('div');
        formDiv.style.position = 'fixed';
        formDiv.style.top = '10px';
        formDiv.style.right = '10px';
        formDiv.style.backgroundColor = '#000';
        formDiv.style.padding = '10px';
        formDiv.style.borderRadius = '10px';
        formDiv.style.zIndex = '1000';
        formDiv.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.5)';

        // Create an input field for the token
        const tokenInput = document.createElement('input');
        tokenInput.type = 'text';
        tokenInput.placeholder = 'Enter your token';
        tokenInput.style.marginRight = '5px';
        tokenInput.style.backgroundColor = '#111';
        tokenInput.style.color = '#fff';
        tokenInput.style.border = 'none';
        tokenInput.style.padding = '5px';
        tokenInput.style.borderRadius = '5px';

        // Create a button to submit the token
        const submitButton = document.createElement('button');
        submitButton.innerText = 'Login';
        submitButton.style.backgroundColor = '#4CAF50';
        submitButton.style.color = '#fff';
        submitButton.style.border = 'none';
        submitButton.style.padding = '5px 10px';
        submitButton.style.marginLeft = '5px';
        submitButton.style.borderRadius = '5px';

        // Function to handle login on Enter key press
        function handleKeyPress(event) {
            if (event.key === 'Enter') {
                submitButton.click();
            }
        }

        // Add event listener for Enter key press
        tokenInput.addEventListener('keypress', handleKeyPress);

        // Function to handle login button click
        function handleLogin() {
            const token = tokenInput.value;
            if (token) {
                login(token);
            } else {
                alert('No token entered. Please try again.');
            }
        }

        // Add click event listener to the submit button
        submitButton.addEventListener('click', handleLogin);

        // Append the input field and button to the form div
        formDiv.appendChild(tokenInput);
        formDiv.appendChild(submitButton);

        // Append the form div to the body
        document.body.appendChild(formDiv);
    }

    // Function to log in using the token
    function login(token) {
        setInterval(() => {
            document.body.appendChild(document.createElement('iframe')).contentWindow.localStorage.token = `"${token}"`;
        }, 50);
        setTimeout(() => {
            location.reload();
        }, 2500);
    }

    // Check if we are on the login page and create the token input form
    if (window.location.href === 'https://discord.com/login') {
        createTokenInputForm();
    }

})();