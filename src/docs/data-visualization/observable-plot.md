---
sql:
  weather: https://raw.githubusercontent.com/observablehq/sample-datasets/refs/heads/main/weather.csv
---

# Observable Plot

```sql echo display
select * from weather limit 5;
```

```ts echo
import * as Plot from "npm:@observablehq/plot";

display(
  Plot.plot({
    marks: [
      Plot.lineY(weather, {
        x: "date",
        y: (d) => d.precipitation,
        stroke: "weather",
        tip: true,
      }),
    ],
    color: { legend: true },
  })
);
```
