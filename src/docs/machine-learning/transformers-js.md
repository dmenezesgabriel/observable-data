# Transformers.js

Running ML models on browser with `transformers.js`.

## Sentiment Analysis

```js
const sentimentTextAreaOptions = {
  label: "Your text to analyze:",
  placeholder: "What’s in your mind?",
  value: `I like Sundays!`,
  rows: 6,
  submit: true,
};

const sentimentTextArea = view(Inputs.textarea(sentimentTextAreaOptions));
```

```js echo
import { pipeline } from "npm:@huggingface/transformers";

let pipe = await pipeline("sentiment-analysis");

let sentiment = await pipe(sentimentTextArea);
```

Output:

:::card
${Inputs.table(sentiment)}
:::
