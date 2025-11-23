Haha yeah, that error is just your Mac saying:

> “I have no idea what **bun** is.” 🍞

So right now you don’t have the Bun runtime installed. Hono+Bun needs Bun itself (like Node, but different).

---

## 1️⃣ Install Bun on macOS

You’ve got two easy options. Pick one.

### Option A – Official install script (simple way)

Run this in your terminal:

```bash
curl -fsSL https://bun.sh/install | bash
```

When it finishes, either:

* restart your terminal, **or**
* manually reload your shell config:

```bash
source ~/.zshrc
```

Then confirm:

```bash
bun -v
```

If that prints a version, you’re good.

---

### Option B – Homebrew (if you use brew)

```bash
brew tap oven-sh/bun
brew install bun
```

Then:

```bash
bun -v
```

---

## 2️⃣ After Bun is installed

From your `hono-bun-boilerplate` folder:

```bash
bun install
bun run dev
```

Then open:

* `http://localhost:3000/`

and the other routes:

* `/info`
* `/about`
* `/framework`
* `/status`
* `/v1`

If after installing Bun you still get `command not found`, tell me what `echo $PATH` and `ls ~/.bun` show and we’ll fix the PATH wiring together.
