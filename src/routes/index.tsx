import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <main class="min-h-screen">
      <section id="hero">
        <div>
          <div
            class="hero min-h-screen min-w-max"
            style={{ backgroundImage: "url(/splash.png)" }}
          >
            <div class="hero-overlay bg-opacity-60"></div>
            <div class="hero-content text-center text-neutral-content">
            <img src="/hero.jpg" class="max-w-3xl rounded-full shadow-2xl" width={600} height={600}/>
              <div class="max-w-md">
                <h1 class="mb-5 text-5xl font-extrabold">Hello there,</h1>
                <h2 class="mb-5 text-2xl font-bold">
                  My name is Andrei Lazar and I am fullstack freelance developer with 3+ years of experience.
                </h2>
                <button class="btn btn-primary text-xl">Get a Quote</button>
                <h3 class="text-2xl font-semibold py-6">Check my Socials</h3>
                <footer class="flex md:flex-row justify-center items-start gap-3">
                  
                  <button class="btn btn-primary">Linkedin</button>
                  <button class="btn btn-primary">Github</button>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="services" class="min-h-screen">
        <div class="flex flex-col items-center justify-center gap-3 md:flex-row">
          <div class="card bg-base-100 shadow-xl lg:card-side">
            <figure>
              <img
                width="400"
                height="400"
                src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
                alt="Album"
              />
            </figure>
            <div class="card-body">
              <h2 class="card-title">New album is released!</h2>
              <p>Click the button to listen on Spotiwhy app.</p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">Listen</button>
              </div>
            </div>
          </div>
          <div class="card bg-base-100 shadow-xl lg:card-side">
            <figure>
              <img
                width="400"
                height="400"
                src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
                alt="Album"
              />
            </figure>
            <div class="card-body">
              <h2 class="card-title">New album is released!</h2>
              <p>Click the button to listen on Spotiwhy app.</p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">Listen</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" class="min-h-screen">
        contact
      </section>
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
