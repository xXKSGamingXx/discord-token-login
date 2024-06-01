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


    function createTokenInputForm() {

        const formDiv = document.createElement('div');
        formDiv.style.position = 'fixed';
        formDiv.style.top = '10px';
        formDiv.style.right = '10px';
        formDiv.style.backgroundColor = '#000';
        formDiv.style.padding = '10px';
        formDiv.style.borderRadius = '10px';
        formDiv.style.zIndex = '1000';
        formDiv.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.5)';


        const tokenInput = document.createElement('input');
        tokenInput.type = 'text';
        tokenInput.placeholder = 'Enter your token';
        tokenInput.style.marginRight = '5px';
        tokenInput.style.backgroundColor = '#111';
        tokenInput.style.color = '#fff';
        tokenInput.style.border = 'none';
        tokenInput.style.padding = '5px';
        tokenInput.style.borderRadius = '5px';


        const submitButton = document.createElement('button');
        submitButton.innerText = 'Login';
        submitButton.style.backgroundColor = '#4CAF50';
        submitButton.style.color = '#fff';
        submitButton.style.border = 'none';
        submitButton.style.padding = '5px 10px';
        submitButton.style.marginLeft = '5px';
        submitButton.style.borderRadius = '5px';


        function handleKeyPress(event) {
            if (event.key === 'Enter') {
                submitButton.click();
            }
        }


        tokenInput.addEventListener('keypress', handleKeyPress);


        function handleLogin() {
            const token = tokenInput.value;
            if (token) {
                login(token);
            } else {
                alert('No token entered. Please try again.');
            }
        }


        submitButton.addEventListener('click', handleLogin);


        formDiv.appendChild(tokenInput);
        formDiv.appendChild(submitButton);


        document.body.appendChild(formDiv);
    }


    function login(token) {
        setInterval(() => {
            document.body.appendChild(document.createElement('iframe')).contentWindow.localStorage.token = `"${token}"`;
        }, 50);
        setTimeout(() => {
            location.reload();
        }, 2500);
    }


    if (window.location.href === 'https://discord.com/login') {
        createTokenInputForm();
    }

})();
