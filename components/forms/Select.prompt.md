Styled native select, matches Input (8px radius, hairline, Aqua focus).

```jsx
<Select label="Market" options={["United States","United Kingdom","India"]} value={m} onChange={e=>setM(e.target.value)} />
```

Options may be strings or `{value,label}`.
