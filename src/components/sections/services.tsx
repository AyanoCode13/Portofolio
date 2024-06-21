import { component$ } from "@builder.io/qwik";

export default component$(() => {
    return (
        <section
        id="services"
        class="flex flex-col min-h-fit items-center text-blue-950 font-medium"
      >
        <h2 class="text-4xl bg-white p-2 w-full text-center">Services</h2>
        <div class="flex flex-col items-center justify-center gap-3 md:flex-row my-5">
          <div class="card bg-base-100 shadow-xl lg:card-side justify-center">
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
    )
})