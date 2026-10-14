import { useEffect } from "react";

function Title() {

    let ourStyle = {
        color: 'blue',
        fontSize: 60,
        textAlign: 'center'
    }

    function add_numbers(num1, num2) {
        console.log(num1 + num2);
    }


    useEffect(() => {

        add_numbers(323, 4343)
        console.log("Something is happening here")

    }, []);


    
    return (
        <h1 style={ourStyle}>OUR WEBSITE</h1>
    )
}

export default Title;