```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs only once after the initial render
    console.log('Component mounted');
    const handleResize = () => {
      console.log('Window resized');
      // Update state based on window size here
    };
    //Add event listener here for window resize
    window.addEventListener('resize', handleResize);
    return () => {
      console.log('Component unmounted');
      //Remove event listener when component unmounts
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```