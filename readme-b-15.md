
### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?

<!-- Answer to the ques no 1 -->

getElementById - it only selects one elements by its id..
getElementsByClassName - it picks all the elements with the same class and also give a list..
querySelector - it only choose the first match and also use css selector such as - class , id etc..
querySelectorAll - it search all he matches and gives static  list where as querySelector gives live list...

<!-- Answer to the ques no 2 -->

const div = document.createElement("div"); 
div.innerText = "Whats Up Polapain";                
document.body.appendChild(div);

<!-- Answer to the ques no 3 -->

It works like a tree, like when we click a child element then the event will happen in the child element then it will climb up to the parent then grandparent up to the document.. 

<!-- Answer to the ques no 4 -->

we can use Event delegation rather than addEventListener because it sits on the parent div and when we click any place on the div it will give the notice..event delegation is faster and easier than addEventListener.

<!-- Answer to the ques no 5 -->

preventDefault() - it actually stop the default systems ,like we can use it in form section because in default it reloads ,when we use it it wont reload..

stopPropagation() - we use it for stopping the bubbling up child to the parent..