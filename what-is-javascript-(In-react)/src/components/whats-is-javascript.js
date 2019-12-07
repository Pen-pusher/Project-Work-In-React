import React from 'react';
// import { Scope } from "@babel/traverse"
// using of props as component


class Javascript extends React.Component {

    constructor() {
        super();
        this.state = {
            Js: "what is javascript ?",
            example: "hover on me to see a glimpse of javascript",
            variables: "How many types of variables are there?",
            var: "what is VAR ?",
            let: "What is LET ?",
            const: "What is CONST ?"

        }
    }
    javascript = () => {

        this.setState({
            Js: "JavaScript is a programming language usually run on the client side. It is used to interact with the user."
        });

    };
    doubleJavascript = () => {

        this.setState({
            Js: "oops i am gone"
        });

    };
    variable = () => {
        this.setState({
            variables: "So they are 3 types of variable 'var','let','const' "
        })
    }
    var = () => {
        this.setState({
            var: "Var statement declares a variable, optionally initializing it to a value"
        })
    }

    let = () => {
        this.setState({
            let: "The let statement declares a block scope local variable, optionally initializing it to a value."
        })
    }
    const = () => {
        this.setState({
            const: "This declaration creates a constant that can be either global or local to the function in which it is declared."
        })
    }

    example = () => {
        this.setState({
            example: "hover your mouse on me"

        })
    }





    render() {
        return (
            <div clasName="wrapper">
                <h2 className="js-header"> {this.state.Js}</h2>
                <h2 className="hover js-header"> {this.state.example}</h2>
                <button onClick={this.javascript} > Click me to know about javascript</button>
                <button onClick={this.doubleJavascript}> Click me once Please</button>

                <div>
                    <h2 className="js-header">{this.state.variables}</h2>
                    <h2 className="js-header">{this.state.var}</h2>
                    <h2 className="js-header">{this.state.let}</h2>
                    <h2 className="js-header">{this.state.const}</h2>



                    <button onClick={this.variable}> Click me know about types of variables</button>
                    <button onClick={this.var}> Click me know about "VAR"</button>
                    <button onClick={this.let}> Click me know about "LET"</button>
                    <button onClick={this.const}> Click me know about "CONSt"</button>




                </div>


            </div>
        )
    }

}



export default Javascript;

// var example
// 'function varTest() {
//  'var x = 1;
//  'if (true) {
//  'var x = 2; // same variable!
//  'console.log(x); // 2
//  '}
//  console.log(x); // 2
// }

// let allows you to declare variables that are limited in scope to the block, statement, or expression on which it is used. This is unlike the var keyword, which defines a variable globally, or locally to an entire function regardless of block scope.

// function varTest() {
//  var x = 1;
//  if (true) {
//  var x = 2; // same variable!
//  console.log(x); // 2
//  }
//  console.log(x); // 2
// }

// function letTest() {
//  let x = 1;
//  if (true) {
//  let x = 2; // different variable
//  console.log(x); // 2
//  }
//  console.log(x); // 1
// }

// const example

// const MY_FAV = 7;

// // this will throw an error
// MY_FAV = 20;

// // will print 7
// console.log("my favorite number is: " + MY_FAV);

// // trying to redeclare a constant throws an error
// const MY_FAV = 20;

// Type coercion means that when the operands of an operator are different types, one of them will be converted to an "equivalent" value of the other operand's type.

// == is not immune to JavaScript’s type conversion behavior. Expressions such as 5 == “5” will evaluate to true because JavaScript will attempt to convert one of them so that it’s comparing the same type of data.

// In many cases, that’s not desirable because you probably want to know if some data you’re comparing against is of a different type so that you can decide what to do about it.That’s where the === operator comes in.When you use ===, no type conversion will take place.Therefore, the expression 5 === “5” will evaluate to false.


// Primitive Datatypes are 1. Number 2. String 3. Boolean 4. Undefined 5. Null

// Non - Primitive Datatypes are 1.Object 2.Array

// Primitive have value, non - primitives have reference, this is the main difference


// Javascript has 5 data types that are passed by value: Boolean, null, undefined, String, and Number.We’ll call these primitive types.
// Javascript has 3 data types that are passed by reference: Array, Function, and Object.


// expression is anything that returns value and statement dosent return value

// When the equality operators are comparing primitives, they simply check if the values are the same.

// There are three logical operators in JavaScript: || (OR), && (AND), !(NOT).

// In classical programming, the logical OR is meant to manipulate boolean values only.If any of its arguments are true, it returns true, otherwise it returns false


// or operator first takes the truthy value  Evaluates operands from left to right.
// example of falsy value
// alert( true || true );   // true
// alert(false || true);  // true
// alert(true || false);  // true
// alert(false || false); // false

//and operator always looks for falsy value first
//  example of and operator
// // alert( true && true );   // true
// alert(false && true);  // false
// alert(true && false);  // false
// alert(false && false); // false


// !(NOT) Converts the operand to boolean type: true/false.
// Returns the inverse value

// A double NOT!! is sometimes used for converting a value to boolean type:

// That is, the first NOT converts the value to boolean and returns the inverse, and the second NOT inverses it again. 

// falsy value below
// false
// null
// undefined
// 0
// NaN
// "", '', `` (empty strings)


// In JavaScript, a truthy value is a value that translates to true when evaluated in a Boolean context.All values are truthy unless they are defined as falsy (i.e., except for false, 0, "", null, undefined, and NaN).


// Truthy -> Value that resolve to true in boolean context

// Falsy -> Value that resolve to false in boolean context

// function truthyOrFalsy(a) {
//     return a ? "truthy" : "falsy";
// }


// If null is a primitive, why does typeof(null) return "object"?

// in short: it is bug in ECMAScript, and the type should be null



// Identity / strict equality(===)
// The identity operator returns true if the operands are strictly equal(see above) with no type conversion



// Equality(==)
// The equality operator converts the operands if they are not of the same type, then applies strict comparison.




// The conditional(ternary) operator is the only JavaScript operator that takes three operands.This operator is frequently used as a shortcut for the if statement.


// https://medium.com/better-programming/implicit-and-explicit-coercion-in-javascript-b23d0cb1a750



// There are two types of coercion in JavaScript:
// Implicit Coercion: Type conversion is done implicitly by JavaScript.
// Explicit Coercion: Type conversion is done explicitly in code using the inbuilt functions like Number(), String(), Boolean(), etc.


// The == operator converts the data type of the values if they aren’t of the same type. To do a strict comparison, we use === operator where type conversion isn’t done.