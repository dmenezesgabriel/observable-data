# PGLite

_PGLite_ is a PostgreSQL SGBD on a single binary.

```ts echo display
import { PGlite } from "https://cdn.jsdelivr.net/npm/@electric-sql/pglite/dist/index.js";

const client = new PGlite();

await client.exec(`
  CREATE TABLE IF NOT EXISTS todo (
    id SERIAL PRIMARY KEY,
    task TEXT,
    done BOOLEAN DEFAULT false
  );
  INSERT INTO todo (task, done) VALUES ('Install PGlite from NPM', true);
  INSERT INTO todo (task, done) VALUES ('Load PGlite', true);
  INSERT INTO todo (task, done) VALUES ('Create a table', true);
  INSERT INTO todo (task, done) VALUES ('Insert some data', true);
  INSERT INTO todo (task) VALUES ('Update a task');
`);
```

```ts echo
async function displayTodos() {
  const results = await client.query(`SELECT * FROM todo`);
  return Inputs.table(results.rows);
}
```

<div class="card" style="padding: 0;">
    ${displayTodos()}
</div>

## With an ORM

```ts echo
import { integer, pgTable, varchar } from "npm:drizzle-orm/pg-core";
import { drizzle } from "npm:drizzle-orm/pglite";

client.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    age INTEGER,
    email VARCHAR(50)
  );
`);

const db = drizzle(client);

const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  age: integer().notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
});

const user: typeof usersTable.$inferInsert = {
  name: "John",
  age: 30,
  email: "john@example.com",
};

await db.insert(usersTable).values(user);
```

```ts echo
async function displayUsers() {
  const users = await db.select().from(usersTable);
  return Inputs.table(users);
}
```

<div class="card" style="padding: 0;">
    ${displayUsers()}
</div>

## Reference

- [drizzle docs](https://orm.drizzle.team/docs/connect-pglite)
