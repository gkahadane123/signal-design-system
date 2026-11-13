Modal on an ink scrim; footer holds the primary action.

```jsx
<Dialog open={open} title="Request a demo" onClose={close}
  footer={<><Button variant="ghost" onClick={close}>Cancel</Button><Button onClick={send}>Send request</Button></>}>
  <Input label="Work email" />
</Dialog>
```
