---
sql:
  quakes: https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.csv
---

# DuckDB WASM API

Using DuckDB on _client side_ to query data.

```js echo
import { DuckDBClient } from "npm:@observablehq/duckdb";

const conn = await DuckDBClient.of();

const result = await conn.query(`SELECT 42 as result`);

display(Inputs.table(result));
```

Or

```js echo
import { sql } from "npm:@observablehq/duckdb";

const result = await sql`SELECT 42 as result`;

display(Inputs.table(result));
```

## With SQL

**FrontMatter**:

```yml
---
sql:
  quakes: https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.csv
---
```

```js echo
const someQuakes = await sql`SELECT * from quakes LIMIT 10`;

display(Inputs.table(someQuakes));
```

```sql id=[top] echo display
SELECT * from quakes LIMIT 5; -- as top
```

```js echo
display(top);
```

## Reference

- [Observable duckdb](https://observablehq.com/framework/lib/duckdb)
