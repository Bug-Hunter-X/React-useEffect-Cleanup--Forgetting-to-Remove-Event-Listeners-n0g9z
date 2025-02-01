# React useEffect Cleanup: Forgetting to Remove Event Listeners

This example demonstrates a common error in React's `useEffect` hook: forgetting to remove event listeners in the cleanup function.  This can lead to memory leaks and unexpected behavior.

## The Problem

When an event listener is added within a `useEffect` hook but not removed in the cleanup function (the return function), the listener remains active even after the component unmounts.  This can cause problems, particularly with window event listeners that continue to fire after the component is no longer needed. 

## The Solution

The solution is simple: always remove event listeners (and other cleanup tasks) in the cleanup function of your `useEffect` hook.

## How to Reproduce

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Observe the console logs when you resize the window.  Note that even after the component unmounts, the resize event is still being logged. 
5. The solution file shows how to correctly remove the listener in the cleanup function. The console logs will then stop after the component is unmounted.
