import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Aprendiendo JavaScript",
      customCss: [],
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
            {
              label: "Los operadores de comparación",
              link: "/guides/example4/",
            },
            {
              label: "Operadores lógicos en JavaScript",
              link: "/guides/example5/",
            },
            { label: "Variables", link: "/guides/example6/" },
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
