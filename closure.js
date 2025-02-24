// Closures
function pizza (topping) {
    let slice = 12;

    function eat () {
        slice--;
        console.log(` I just eat a piece of pizza, ${slice}'s remaining`)
    }

    function description () {
        console.log(`remaining pizza slice = ${slice}, on my ${topping} pizza`)
    }

    function remake () {
        let slice = 99;
        console.log(`slice ${slice}`)
    }

    return { eat, description, remake }
}

let pop = pizza('cheese')
pop.description();
pop.eat();
pop.description();
pop.remake();


function counter (number) {
    let solution = 0;

    function add (num) {
        if (!num) return;
        solution++
        console.log(`I ADD numbers ${solution}`)
        add(num-1)
    }

    add(number)

    return solution;
}

// counter(5);