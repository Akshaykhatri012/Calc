let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('btn'));

buttons.map(btn => {
    btn.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case 'C':
                display.innerText = " ";
                break;

            case '←':
                display.innerText = display.innerText.slice(0, -1);
                break;

            // case'':
            //     display.innerText = display.innerText;
            //     break;

            // case(e=='÷'):
            //     display.innerText = display.innerText(Number1/Number2);
            //     break;

            case '=':
                try {

                    display.innerText = eval(display.innerText);
                }
                catch {
                    display.innerText = 'NaN'
                }
                break;

            default:
                display.innerText += (e.target.innerText);

        }
    })
})

