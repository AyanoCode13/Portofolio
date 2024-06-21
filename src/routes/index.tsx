import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import About from "~/components/sections/about";
import Contect from "~/components/sections/contect";
import Hero from "~/components/sections/hero";
import Services from "~/components/sections/services";

export default component$(() => {
  return (
    <main class="min-h-screen mx-1 flex flex-col justify-center">
      <Hero />
      <About />
      <Services />
      <Contect />
    </main>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
