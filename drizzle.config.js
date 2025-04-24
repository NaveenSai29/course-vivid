import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./configs/schema.js",
  out: "./drizzle",
  dbCredentials:{
    url: 'postgresql://neondb_owner:npg_m8X5eKLRNHrA@ep-dark-moon-a4ayg3yf-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require'
  }
});
