// If file is using *.es6 extension we must include the extension in the import statement
import { sum, square, variable, MyClass } from './import';

// 25
console.log(square(5));

var cred = {
    name: 'Roy Batty',
    enrollmentNo: 7734
}

var x = new MyClass(cred);

// Roy Batty
console.log(x.getName());
