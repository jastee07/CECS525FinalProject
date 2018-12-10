// CECS 525 Final Project
// Ryan Petit
// 10 December 2018



document.addEventListener("DOMContentLoaded", function(event) { 
    var URL = "localhost:8000";
    
    // Define Onclick functions

    (document.getElementById("power")).onclick = function() {
        var JSON = 
        {
            "command": "irsend SEND-ONCE IR KEY_POWER"
        };
        console.log(JSON);
        var xhr = new XMLHttpRequest();

        xhr.open('POST', URL);
        // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        // xhr.onload = function() {
        //     if (xhr.status === 200 && xhr.responseText !== newName) {
        //         alert('Something went wrong.  Name is now ' + xhr.responseText);
        //     }
        //     else if (xhr.status !== 200) {
        //         alert('Request failed.  Returned status of ' + xhr.status);
        //     }
        // };
        xhr.send(encodeURI(JSON));
        
    };// End power button

    (document.getElementById("raise_vol")).onclick = function() {
        var JSON = 
        {
            "command": "irsend SEND-ONCE IR KEY_VOLUMEUP"
        };
        console.log(JSON);
        var xhr = new XMLHttpRequest();

        xhr.open('POST', URL);
        // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(encodeURI(JSON));
    };// End raise volume button

    (document.getElementById("func_stop")).onclick = function() {
        var JSON = 
        {
            "command": "irsend SEND-ONCE IR KEY_STOP"
        };
        console.log(JSON);
        var xhr = new XMLHttpRequest();

        xhr.open('POST', URL);
        // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(encodeURI(JSON));
    };// End stop button

    // Row 2

    (document.getElementById("rwd")).onclick = function() {
        var JSON = 
        {
            "command": "irsend SEND-ONCE IR KEY_REWIND"
        };
        console.log(JSON);
        var xhr = new XMLHttpRequest();

        xhr.open('POST', URL);
        // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(encodeURI(JSON));
    };// End rewind button

    (document.getElementById("play_pause")).onclick = function() {
        var JSON = 
        {
            "command": "irsend SEND-ONCE IR KEY_PLAYPAUSE"
        };
        console.log(JSON);
        var xhr = new XMLHttpRequest();

        xhr.open('POST', URL);
        // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(encodeURI(JSON));
    };// End play pause button

    (document.getElementById("ffwd")).onclick = function() {
        var JSON = 
        {
            "command": "irsend SEND-ONCE IR KEY_FASTFORWARD"
        };
        console.log(JSON);
        var xhr = new XMLHttpRequest();

        xhr.open('POST', URL);
        // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(encodeURI(JSON));
    };// End fast forward button

    // Row 3

    (document.getElementById("down")).onclick = function() {
        var JSON = 
        {
            "command": "irsend SEND-ONCE IR KEY_DOWN"
        };
        console.log(JSON);
        var xhr = new XMLHttpRequest();

        xhr.open('POST', URL);
        // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(encodeURI(JSON));
    };// End down button

    (document.getElementById("lower_vol")).onclick = function() {
        var JSON = 
        {
            "command": "irsend SEND-ONCE IR KEY_VOLUMEDOWN"
        };
        console.log(JSON);
        var xhr = new XMLHttpRequest();

        xhr.open('POST', URL);
        // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(encodeURI(JSON));
    };// End lower volume button

    (document.getElementById("up")).onclick = function() {
        var JSON = 
        {
            "command": "irsend SEND-ONCE IR KEY_UP"
        };
        console.log(JSON);
        var xhr = new XMLHttpRequest();

        xhr.open('POST', URL);
        // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(encodeURI(JSON));
    };// End up button

    // Row 4

    (document.getElementById("zero")).onclick = function() {
        var JSON = 
        {
            "command": "irsend SEND-ONCE IR KEY_0"
        };
        console.log(JSON);
        var xhr = new XMLHttpRequest();

        xhr.open('POST', URL);
        // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(encodeURI(JSON));
    };// End zero button

    (document.getElementById("eq")).onclick = function() {
        var JSON = 
        {
            "command": "irsend SEND-ONCE IR KEY_EQUAL"
        };
        console.log(JSON);
        var xhr = new XMLHttpRequest();

        xhr.open('POST', URL);
        // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(encodeURI(JSON));
    };// End equal button

    (document.getElementById("st_rept")).onclick = function() {
        var JSON = 
        {
            "command": "irsend SEND-ONCE IR KEY_S"
        };
        console.log(JSON);
        var xhr = new XMLHttpRequest();

        xhr.open('POST', URL);
        // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(encodeURI(JSON));
    };// End S button

    // Row 5

    (document.getElementById("one")).onclick = function() {
        var JSON = 
        {
            "command": "irsend SEND-ONCE IR KEY_1"
        };
        console.log(JSON);
        var xhr = new XMLHttpRequest();

        xhr.open('POST', URL);
        // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(encodeURI(JSON));
    };// End one button

    (document.getElementById("two")).onclick = function() {
        var JSON = 
        {
            "command": "irsend SEND-ONCE IR KEY_2"
        };
        console.log(JSON);
        var xhr = new XMLHttpRequest();

        xhr.open('POST', URL);
        // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(encodeURI(JSON));
    };// End two button

    (document.getElementById("three")).onclick = function() {
        var JSON = 
        {
            "command": "irsend SEND-ONCE IR KEY_3"
        };
        console.log(JSON);
        var xhr = new XMLHttpRequest();

        xhr.open('POST', URL);
        // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(encodeURI(JSON));
    };// End three button

    // Row 6

    (document.getElementById("four")).onclick = function() {
        var JSON = 
        {
            "command": "irsend SEND-ONCE IR KEY_4"
        };
        console.log(JSON);
        var xhr = new XMLHttpRequest();

        xhr.open('POST', URL);
        // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(encodeURI(JSON));
    };// End four button

    (document.getElementById("five")).onclick = function() {
        var JSON = 
        {
            "command": "irsend SEND-ONCE IR KEY_5"
        };
        console.log(JSON);
        var xhr = new XMLHttpRequest();

        xhr.open('POST', URL);
        // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(encodeURI(JSON));
    };// End five button

    (document.getElementById("six")).onclick = function() {
        var JSON = 
        {
            "command": "irsend SEND-ONCE IR KEY_6"
        };
        console.log(JSON);
        var xhr = new XMLHttpRequest();

        xhr.open('POST', URL);
        // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(encodeURI(JSON));
    };// End six button

    // Row 7

    (document.getElementById("seven")).onclick = function() {
        var JSON = 
        {
            "command": "irsend SEND-ONCE IR KEY_7"
        };
        console.log(JSON);
        var xhr = new XMLHttpRequest();

        xhr.open('POST', URL);
        // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(encodeURI(JSON));
    };// End seven button

    (document.getElementById("eight")).onclick = function() {
        var JSON = 
        {
            "command": "irsend SEND-ONCE IR KEY_8"
        };
        console.log(JSON);
        var xhr = new XMLHttpRequest();

        xhr.open('POST', URL);
        // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(encodeURI(JSON));
    };// End eight button

    (document.getElementById("nine")).onclick = function() {
        var JSON = 
        {
            "command": "irsend SEND-ONCE IR KEY_9"
        };
        console.log(JSON);
        var xhr = new XMLHttpRequest();

        xhr.open('POST', URL);
        // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(encodeURI(JSON));
    };// End nine button

});
