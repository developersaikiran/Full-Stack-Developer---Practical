## 1. Javascript Questions 

#### 1. What is JavaScript, and what is it used for?
JavaScript is a programming language primarily used to make web pages interactive. Instead of static pages, JavaScript lets pages respond to user actions. It’s a core part of web development alongside HTML and CSS, making sites dynamic and user-friendly.
---

#### 2. What’s the difference between JavaScript and Java?
While similarly named, JavaScript and Java are different. Java is an object-oriented language used in various applications, from Android app development to financial trading systems. JavaScript, on the other hand, is mainly for web pages.


#### 3. How do you include JavaScript in an HTML page?

To add JavaScript to an HTML page, use the <script> tag. You can write the code between the tags or link to an external .js file using the src attribute. For example: <script src=”yourScript.js”></script>. 


#### 4. What are the different data types in JavaScript?
    JavaScript has several data types:
- **Number**: For numeric values
- **String**: For text or characters
- **Boolean**: True or false values
- **Undefined**: When a variable hasn’t been assigned a value
- **Null**: Represents no value or no object
- **Object**: For complex data structures
- **Symbol**: A unique value that’s not equal to any other value

#### 5. Explain the purpose of callback functions in JavaScript.

A callback function is a function passed into another function as an argument. It’s then called (or executed) inside that outer function. 

Sometimes you want to make sure certain actions finish before another starts. Callbacks ensure tasks happen in the correct order, especially in asynchronous tasks.


#### 6. What is the **this** keyword in JavaScript, and how does it work?

In JavaScript, this is a reference to the object that’s currently interacting. Its value depends on how a function is called. Inside a method, this refers to the owner object. In a stand-alone function, it’s the global object. It’s a way to access properties or methods of the current object.


#### 7. Explain the difference between == and === in JavaScript.

In JavaScript, == checks if values are equal, but it doesn’t mind if they’re different types. For instance, ‘5’ and 5 are seen as equal. 

On the other hand, === checks both value and type. So, ‘5’ and 5 are not equal with === because they’re different types (string vs. number).


#### 8. What is Data Structure?

A data structure is defined as a particular way of storing and organizing data in our devices to use the data efficiently and effectively. The main idea behind using data structure is to minimize the time and space complexities. An efficient data structure takes minimum memory space and minimum time to execute the data.    


#### 9. What is array?
An array is a fundamental data structure in javascript used to store a collection of elements. These elements can be any data type, including numbers, strings or objects. These elements are stored in a specific sequence, and you can access each element by its index.

```
let arrayName = [value1, value2, ...]; // Method 1
let arrayName = new Array(); // Method 2
```





