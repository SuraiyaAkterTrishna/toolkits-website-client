import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='bg-teal-100  p-10 m-10 border rounded-lg'>
                <h1 className='text-4xl'>How will you improve the performance of a React Application?</h1>
                <br />
                <p className='text-2xl'>By following some tips, we can improve the performance of a React Application. They are given in below:</p>
                <br />
                <p className='text-2xl'>- Using Immutable Data Structures </p>
                <p className='text-2xl'>- Use of Function/Stateless Components and React.PureComponent</p>
                <p className='text-2xl'>- Code-splitting by using dynamic import()</p>
                <p className='text-2xl'>- Windowing or pst virtualization in React </p>
                <p className='text-2xl'>- Lazy loading images in React </p>
                <p className='text-2xl'>- Keeping component state local where necessary</p>
                <p className='text-2xl'>- Memoizing React components to prevent unnecessary re-renders</p>
                <p className='text-2xl'>- Use React.Fragments to Avoid Additional HTML Element Wrappers</p>
            </div>

            <div className='bg-fuchsia-100  p-10 m-10 border rounded-lg'>
                <h1 className='text-4xl'>What are the different ways to manage a state in a React application?</h1>
                <br />
                <p className='text-2xl'>There are four main types of state and we need to manage these states in different ways in our React apps:</p>
                <br />
                <p className='text-2xl'>- Local state: Local state is data we manage in one or another component. Local state is most often managed in React using the useState hook. There are so many tools built into the core React library for managing it. useState() is the first tool we should reach for to manage state in our components.</p>                
                <br />
                <p className='text-2xl'>- Global state: Global state is data we manage across multiple components. Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least. To manage it, however, we should opt for a third-party solution. Many developers are inclined to use built-in React features like the Context API to manage their state.</p>                
                <br />
                <p className='text-2xl'>- Server state: Data that comes from an external server that must be integrated with our UI state. Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state. Server state can be deceptively challenging to manage. At first, it seems we just need to fetch data and display it in the page. But then we need to display a loading spinner while we are waiting for the data. Then we need to handle errors and display them to the user as they arise.</p>                
                <br />
                <p className='text-2xl'>- URL state: URL state is often missing as a category of state, but it is an important one. URL state is quite easy to manage, usually through custom hooks that give us all the information we need about our location, history, and pathname. If you are using React Router, you can get all the information you need using useHistory or useLocation. In many cases, a lot of major parts of our application rely upon accessing URL state.</p>                
            </div>

            <div className='bg-green-100  p-10 m-10 border rounded-lg'>
                <h1 className='text-4xl'>How does prototypical inheritance work?</h1>
                <br />
                <p className='text-2xl'>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__. For instance, we have a user object with its properties and methods, and want to make admin and guest as slightly modified variants of it. We’d like to reuse what we have in user, not copy/reimplement its methods, just build a new object on top of it.</p>
            </div>

            <div className='bg-pink-100  p-10 m-10 border rounded-lg'>
                <h1 className='text-4xl'>Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts?</h1>
                <br />
                <p className='text-2xl'>We should not set the state directly in React. If we set products = [...] directly, then we can not fetch data dynamically from anywhere. We have use the state for the array element statically. But by using useState(), we can fetch and load data from our fake data or any kind server. That helps to set state for dynamic and can get the data dynamically also. </p>
            </div>

            <div className='bg-indigo-100  p-10 m-10 border rounded-lg'>
                <h1 className='text-4xl'>What is a unit test? Why should write unit tests?</h1>
                <br />
                <p className='text-2xl'>Programmers think that Integration Testing will catch all errors and do not execute the unit test. Once units are integrated, very simple errors which could have very easily found and fixed in unit tested take a very long time to be traced and fixed. Truth is Unit testing increase the speed of development. Unit testing allows the programmer to refactor code at a later date, and make sure the module still works correctly. The procedure is to write test cases for all functions and methods so that whenever a change causes a fault, it can be quickly identified and fixed. Developers looking to learn what functionality is provided by a unit and how to use it can look at the unit tests to gain a basic understanding of the unit API.</p>
            </div>
        </div>
    );
};

export default Blogs;