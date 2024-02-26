import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "My Docs",
      social: {
        github: "https://github.com/withastro/starlight",
      },
      sidebar: [
        {
          label: "Introduccion",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "¿Qué es JavaScript?", link: "/guides/example/" },
            { label: "La consola del navegador", link: "/guides/example2/" },
            { label: "Tipos de datos", link: "/guides/example3/" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
