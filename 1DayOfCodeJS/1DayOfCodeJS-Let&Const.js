const pi = Math.PI
function main() {
    
    const r = parseFloat(readLine())

    const area = pi * r * r
    const perimeter = (2 * pi)* r

    console.log(area)
    console.log(perimeter)
    

    try {    
        // Attempt to redefine the value of constant variable PI
        PI = 0;
        // Attempt to print the value of PI
        console.log(PI);
    } catch(error) {
        console.error("You correctly declared 'PI' as a constant.");
    }
}