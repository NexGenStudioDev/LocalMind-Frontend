<!-- TypeScript Project setup -->

# 1.) 🧩 Step 1: Install pnpm (if not already installed)

npm install -g pnpm

# 2.) Check it’s installed:

pnpm -v

# 3.) 🧱 Step 3: Create a new project

pnpm create vite@latest localmind-frontend --template react-ts

# 4.) Then move into that folder:

cd localmind-frontend

# 5.) Step 5: Install dependencies
Now install all packages (from your package.json) using pnpm:

pnpm install

# 6.) run the server first then check your server is run or not

pnpm run dev

# 7.) 🛠️ Step :7 Fix TypeScript SVG import error (important)

Since you are using TypeScript, you need to tell it that .svg files are valid imports.

📄 Create a new file in src:

src/custom.d.ts

Then add this line:

declare module '*.svg';

💡 “declare” means: “Hey TypeScript, when you see .svg files — don’t worry, they’re okay.”

# 8.) Optional — Clean default code

You can delete extra lines from App.tsx and make it clean to test everything.

# ``` code part here 
function App() {
  return (
    <div>
      <h1>Hello from App 🚀</h1>
      <button>click me</button>
    </div>
  );
}

export default App; // 👈 must have this ```



# 9.) Tailwind Setup in Typesript (for Vite + React + TS)

pnpm install tailwindcss @tailwindcss/vite

# 10.) 