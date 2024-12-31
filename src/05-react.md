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

:::card

<div id="reactNode"></div>

:::
