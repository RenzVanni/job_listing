# Job listings with filtering

This is a simple yet responsive job listing website yet, with filtering functionality.

All jobs was stored in a state

```javascript
const [jobs, setJobs] = useState(data);
```

and use map to display all jobs in the state.

In order to filter this jobs this is reaponsible for it,

```javascript
const onTools = (e) => {
  const toolValue = e.target.textContent;
  setTools((prev) => {
    if (prev.includes(toolValue)) {
      return prev;
    }
    return [...prev, toolValue];
  });
  console.log(tools);
};
```

if the value of tools match to the jobs this this code will filter the jobs

```javascript
useEffect(() => {
  if (tools.length) {
    setJobs(
      data.filter(
        (job) =>
          job.languages.some((lang) => tools.includes(lang)) ||
          job.tools.some((tool) => tools.includes(tool))
      )
    );
  } else {
    setJobs(data);
  }
}, [tools]);
```

The filtered jobs was stored in a state

```javascript
const [tools, setTools] = useState([]);
```

this _tools_ and _clearTools_ will now be pass as parameter to **Filter Component**

```javascript
{
  tools.length <= 0 || <Filter tools={tools} clearTools={clearTools} />;
}
```

if the tools length is not less than or equal to zero it will show the **Filter Component**.

On the Filter Component the value of tools was stored in a state

```javascript
const [inFilter, setInFilter] = useState(tools);
```

and when the tools updates it use the useEffect to update the state.

```javascript
useEffect(() => {
  setInFilter(tools);
}, [tools]);
```
