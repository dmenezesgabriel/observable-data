# React.Js

```jsx echo
import { createRoot } from "npm:react-dom/client";

function Greet() {
  return <div>Hello, from React!</div>;
}

const domNode = document.getElementById("reactNode");
const root = createRoot(domNode);

root.render(<Greet />);
```

Output:

:::card

<div id="reactNode"></div>

:::

```jsx echo
import Button from "npm:@mui/material/Button";

function HelloButton() {
  return <Button variant="contained">Hello world</Button>;
}

const domNode = document.getElementById("muiButton");
const root = createRoot(domNode);

root.render(<HelloButton />);
```

Output:

:::card

<div id="muiButton"></div>

:::
