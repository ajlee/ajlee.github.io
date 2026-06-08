import { defineConfig } from "tinacms";

// Collection definition – must be defined before use
const PageCollection = {
  name: "page",
  label: "Pages",
  path: "_pages",           // subfolder – no escape error
  format: "md",
  fields: [
    { type: "string", name: "title", label: "Title", isTitle: true, required: true },
    { type: "string", name: "url", label: "Url", required: true, label: "Url for the page" },
    { type: "rich-text", name: "body", label: "Body", isBody: true },
  ],
};

export const GlobalConfigCollection: Collection = {
  name: "config",
  label: "Global Config",
  path: "_data",
  format: "yml",
  ui: {
    global: true,
  },
  fields: [
    {
      name: "seo",
      label: "General site config",
      type: "object",
      fields: [
        {
          name: "title",
          label: "Site title for SEO",
          type: "string",
          required: true,
        },
        {
          name: "description",
          label: "Site description for SEO",
          type: "string",
          required: true,
        },
        {
          name: "siteOwner",
          label: "Your Name, Company Name (Used in the footer",
          required: true,
          type: "string",
          ui: {
            defaultValue: "Your name here"
          },
        },
        {
          name: 'logo',
          label: 'Logo',
          type: 'image',
        }
        //Add more site settings here...
      ],
    },
    {
      name: "nav",
      label: "Site Navigation Menu (Reorder, Add, Remove)",
      type: "object",
      list: true,
      ui: {
        itemProps: (item) => {
          return {
            label: item.title
          };
        },
      },
      fields: [
        {
          name: "title",
          label: "Title of Nav Item",
          type: "string",
          required: true
        },
        {
          name: "link",
          label: "Path of the Nav Item",
          type: "string",
          required: true

        }
      ]
    },
    {
      name: "contactLinks",
      label: "Contact Links",
      type: "object",
      list: true,
      ui: {
        itemProps: (item) => {
          return {
            label: item.title
          }
        },
      },
      fields: [
        {
          name: "title",
          label: "Title",
          type: "string"
        },
        {
          name: "link",
          label: "Link",
          type: "string"
        },
        {
          name: "icon",
          label: "Icon",
          description: "Any Tabler icon name, e.g. tabler:brand-x, tabler:book-2, tabler:brand-github. Browse at https://icones.js.org/collection/tabler",
          type: "string"
        }
      ],
    },
    {
      name: "footerStarfield",
      label: "Show starfield in footer",
      type: "boolean",
    }

    // Add other config fields here...
  ]
}

export default defineConfig({
  branch: "main",
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID, // reads from .env or GitHub secrets
  token: process.env.TINA_TOKEN, 
  
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
    collections: [PageCollection, GlobalConfigCollection]
  },
});