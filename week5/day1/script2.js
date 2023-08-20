function handleClick() {
    // console.log("Button was clicked");
    const div = document.getElementById('innerdiv');

    const button = document.createElement('button');
    button.textContent = 'Click Me!';

    div.appendChild(button);

    button.addEventListener('click', function(event){
        console.log(event.target);
    })

    const input = document.createElement('input');
    input.setAttribute('name', 'innerinput')

    input.addEventListener('input', function(event) {
        // console.log(event.target.value);
        handleInput(event);
        alert('dcndf');
    });

    input.addEventListener('input', handleInput);

    input.appendChild(input);
}


function handleInput(e) {
    console.log(e.target.name, e.target.value);
}

function handleOver(e){
    // const div = document.querySelector('div');
    // console.log(e.target);
    e.target.style.backgroundColor = 'yellow';
}

function handleLeave(e) {
    e.target.style.backgroundColor = 'red';
}