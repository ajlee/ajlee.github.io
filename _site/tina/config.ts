import { defineConfig } from "tinacms";

// Collection definition – must be defined before use
const PageCollection = {
  name: "page",
  label: "Pages",
  path: "_pages",           // subfolder – no escape error
  format: "md",
  fields: [
    { type: "string", name: "title", label: "Title", isTitle: true, required: true },
    { type: "rich-text", name: "body", label: "Body", isBody: true },
  ],
};

export default defineConfig({
  branch: "main",
  clientId: null,              // local development – no cloud
  token: null,                 // local development – no cloud
  
  server: {
    staticPaths: ["./uploads"],   // enable viewing of images in backend localhost
  },

  build: {
    outputFolder: "admin",
    publicFolder: ".",         // Jekyll root, not "public"
  },

  media: {
    tina: {
      mediaRoot: "uploads",    // non-empty string
      publicFolder: ".",       // match build.publicFolder
    },
  },

  schema: {
    collections: [PageCollection],
  },
});