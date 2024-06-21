import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <section
        id="home"
      class="hero min-h-screen"
      style={{ backgroundImage: "url(/splash.png)" }}
    >
      <div class="hero-overlay bg-opacity-60"></div>
      <div class="hero-content flex-col lg:flex-row">
        <img
          src="/hero.jpg"
          class="min-w-sm rounded-3xl shadow-2xl"
          width={500}
          height={500}
        />
        <div>
          <h1 class="text-5xl font-bold">Hello There!</h1>
          <p class="py-6 text-3xl font-semibold">
            My name is Andrew and I am a freelance fullstack developer
          </p>
          <button class="btn btn-primary">Let's Connect</button>
        </div>
      </div>
    </section>
  );
});
