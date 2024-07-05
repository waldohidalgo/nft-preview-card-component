<script>
import Footer from "./components/Footer.vue";

export default {
  components: {
    Footer,
  },
};
</script>

<template>
  <main class="bg-veryDarkBlueMainBg py-[62px] font-Outfit sm:py-[152px]">
    <div
      class="bg-veryDarkBlueCardBg w-[87%] mx-auto rounded-[18px] p-6 max-w-[351px] sm:p-[26px] shadow-[0_25px_0px_13px_rgba(0,0,0,0.1),0_24px_0px_43px_rgba(0,0,0,0.05)]"
    >
      <div class="relative group rounded-[10px] overflow-hidden cursor-pointer">
        <div
          class="absolute group-hover:w-full group-hover:h-full group-hover:bg-cyan/50 flex items-center justify-center"
        >
          <svg
            class="hidden group-hover:block"
            width="48"
            height="48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none" fill-rule="evenodd">
              <path d="M0 0h48v48H0z" />
              <path
                d="M24 9C14 9 5.46 15.22 2 24c3.46 8.78 12 15 22 15 10.01 0 18.54-6.22 22-15-3.46-8.78-11.99-15-22-15Zm0 25c-5.52 0-10-4.48-10-10s4.48-10 10-10 10 4.48 10 10-4.48 10-10 10Zm0-16c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6Z"
                fill="#FFF"
                fill-rule="nonzero"
              />
            </g>
          </svg>
        </div>
        <img
          src="./assets/image-equilibrium.jpg"
          alt="image equilibrium"
          class="w-full aspect-square"
        />
      </div>

      <div class="pt-[21px]">
        <h2
          class="text-white font-semibold text-[22px] hover:text-cyan cursor-pointer"
        >
          Equilibrium &num;3429
        </h2>
        <p
          class="text-softBlue mt-[11px] leading-[26px] sm:text-[17.5px] sm:[word-spacing:2px] font-light sm:mt-[14px]"
        >
          Our Equilibrium collection promotes balance and calm.
        </p>
        <div class="mt-3 flex items-center justify-between sm:mt-[21px]">
          <div class="flex items-center gap-[8px]">
            <svg width="11" height="18" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11 10.216 5.5 18 0 10.216l5.5 3.263 5.5-3.262ZM5.5 0l5.496 9.169L5.5 12.43 0 9.17 5.5 0Z"
                fill="#00FFF8"
              />
            </svg>
            <span class="text-cyan font-medium">0.041 ETH</span>
          </div>
          <div class="flex items-center gap-[8px]">
            <svg
              class="fill-softBlue"
              width="17"
              height="17"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.305 2.007a6.667 6.667 0 1 0 0 13.334 6.667 6.667 0 0 0 0-13.334Zm2.667 7.334H8.305a.667.667 0 0 1-.667-.667V6.007a.667.667 0 0 1 1.334 0v2h2a.667.667 0 0 1 0 1.334Z"
              />
            </svg>
            <span class="text-softBlue ms-auto text-[15px] sm:text-[16px]"
              >3 days left</span
            >
          </div>
        </div>
        <div
          class="h-[1px] w-full bg-veryDarkBlueLine mt-[14px] sm:mt-[22px]"
        ></div>
        <div class="flex gap-4 mt-[15px] items-center sm:mt-[16px]">
          <img
            class="w-[34px] aspect-square border-[1px] border-white rounded-full"
            src="./assets/image-avatar.png"
            alt="avatar"
          />
          <span class="text-softBlue text-[15px] sm:text-[16px]"
            >Creation of
            <span class="text-white ms-[2px] hover:text-cyan cursor-pointer"
              >Jules Wyvern</span
            ></span
          >
        </div>
      </div>
    </div>
  </main>
  <Footer />
</template>
