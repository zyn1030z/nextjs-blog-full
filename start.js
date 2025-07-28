import { spawn, exec } from "child_process";

console.log("🚀 Starting Next.js development server...");

// Kill any process on port 3000
exec("lsof -ti:3000 | xargs kill -9", (error) => {
  if (error) {
    console.log("No process found on port 3000");
  } else {
    console.log("✅ Killed process on port 3000");
  }

  // Start the development server
  const devServer = spawn("bun", ["dev"], {
    stdio: "inherit",
    shell: true,
  });

  devServer.on("error", (error) => {
    console.error("❌ Error starting server:", error);
  });

  devServer.on("close", (code) => {
    console.log(`Server stopped with code ${code}`);
  });
});
