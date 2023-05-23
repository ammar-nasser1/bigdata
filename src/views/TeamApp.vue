<template>
  <div class="Company">
    <div class="pt-12 sm:pt-16 lg:pt-20">
      <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="text-center">
          <h2
            class="text-3xl font-extrabold text-gray-900 sm:text-3xl lg:text-4xl"
          >
            Our mission is to know Website down?
          </h2>
          <h2
            class="py-3 text-3xl font-extrabold text-teal-500 sm:text-3xl lg:text-4xl animate__animated animate__backInDown"
          >
            We Monitor & modify databases!
          </h2>

          <p
            class="max-w-md mx-auto text-xl leading-7 text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
          >
            Get notified by the simplest uptime monitoring service in the world,
            when your website is down . No more, no less.
          </p>
        </div>
      </div>
    </div>
    <div class="my-16 feedback"><AppFeedback /></div>

    <section class="relative text-gray-600 body-font">
      <div class="container flex flex-wrap px-5 py-24 mx-auto sm:flex-nowrap">
        <div
          class="relative flex items-end justify-start p-10 overflow-hidden bg-gray-300 rounded-lg lg:w-2/3 md:w-1/2 sm:mr-10"
        >
          <iframe
            width="100%"
            height="100%"
            class="absolute inset-0"
            frameborder="0"
            title="map"
            marginheight="0"
            marginwidth="0"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6699.771002769053!2d31.182933645184455!3d27.185226591904726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14450be607cb7bcd%3A0xba699162bfc01112!2sAsyut%2C%20Al%20Hamraa%20Ath%20Thaneyah%2C%20El%20Fateh%2C%20Assiut%20Governorate!5e0!3m2!1sen!2seg!4v1663589774483!5m2!1sen!2seg"
            style="filter: grayscale(0) contrast(1.2) opacity(0.8)"
          ></iframe>
          <div class="relative flex flex-wrap py-6 bg-white rounded shadow-md">
            <div class="px-6 lg:w-1/2">
              <h2
                class="text-lg font-semibold tracking-widest text-gray-900 title-font"
              >
                Instatus is based in Egypt
              </h2>
              <p class="mt-1">
                We have offices in the Egypt, and we build software for
                businesses around the globe.
              </p>
            </div>
            <div class="px-6 mt-4 lg:w-1/2 lg:mt-0">
              <h2
                class="text-sm font-semibold tracking-widest text-gray-900 title-font"
              >
                EMAIL
              </h2>
              <a class="leading-relaxed text-teal-500"
                >instatus6@gmail.com.com</a
              >
              <h2
                class="mt-4 text-sm font-semibold tracking-widest text-gray-900 title-font"
              >
                PHONE
              </h2>
              <p class="leading-relaxed">123-456-7890</p>
            </div>
          </div>
        </div>
        <div
          class="flex flex-col w-full mt-8 bg-white lg:w-1/3 md:w-1/2 md:ml-auto md:py-8 md:mt-0"
        >
          <h2 class="mb-1 text-lg font-medium text-gray-900 title-font">
            Contact us
          </h2>
          <p class="mb-5 leading-relaxed text-gray-600">
            You didn't find your answer in something? We are here to help!
          </p>
          <div class="relative mb-4">
            <label for="name" class="text-sm leading-7 text-gray-600"
              >Name</label
            >
            <input
              type="text"
              id="name"
              name="name"
              class="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-200"
              placeholder="Name"
            />
          </div>
          <div class="relative mb-4">
            <label for="email" class="text-sm leading-7 text-gray-600"
              >Email</label
            >
            <input
              type="email"
              id="email"
              name="email"
              class="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-200"
              placeholder="me@company.com ?"
            />
          </div>
          <div class="relative mb-4">
            <label for="message" class="text-sm leading-7 text-gray-600"
              >Message</label
            >
            <textarea
              id="message"
              name="message"
              class="w-full h-32 px-3 py-1 text-base leading-6 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none resize-none focus:border-teal-500 focus:ring-2 focus:ring-teal-200"
              placeholder="How can we help ?"
            ></textarea>
          </div>
          <button
            class="px-6 py-2 text-lg text-white bg-teal-500 border-0 rounded focus:outline-none hover:bg-teal-600"
          >
            Send
          </button>
          <p class="mt-3 text-xs text-gray-500">
            To get in touch with us you can use chat or email. To solve tickets
            faster, please use your account e-mail address.
          </p>
        </div>
      </div>
    </section>
    <app-teams />

    <div class="">
      <div>
        <section class="text-gray-600 body-font team">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col w-full mb-20 text-center">
              <h1 class="mb-4 text-2xl font-medium text-gray-900 title-font">
                Who Are We ?
              </h1>

              <p class="mx-auto lg:w-2/3 text-xl leading-7 text-gray-500">
                If you're here, you might feel the same way. At Instatus, we
                come to work every day to make Beautifully simple and reliable
                uptime monitoring and status page service.
              </p>
            </div>
            <div class="flex flex-wrap justify-center -m-4">
              <div class="p-4 lg:w-1/4 md:w-1/2">
                <div
                  class="flex flex-col items-center h-full text-center hover:scale-105 transition ease-out"
                >
                  <img
                    alt="team"
                    class="flex-shrink-0 object-cover object-center w-full h-56 mb-4 rounded-lg"
                    src="../assets/images/Alaa Ahmed.jpg"
                  />
                  <div class="w-full">
                    <h2 class="text-lg font-medium text-gray-900 title-font">
                      Alaa Ahmed
                    </h2>
                    <h3 class="mb-3 text-gray-500">Front-End Developer</h3>
                    <p class="mb-4">
                      DIY tote bag drinking vinegar cronut adaptogen squid fanny
                      pack vaporware.
                    </p>
                    <span class="inline-flex">
                      <a
                        class="text-gray-500"
                        alt="Github"
                        href="https://github.com/aahmed1009"
                        target="_blank"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                          />
                        </svg>
                      </a>
                      <a
                        class="ml-2 text-gray-500"
                        alt="linkedIn"
                        href="https://www.linkedin.com/in/alaa-%D9%90ahmed-6a36bb199/"
                        target="_blank"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                          />
                        </svg>
                      </a>
                      <!-- <a class="ml-2 text-gray-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          class="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
                          ></path>
                        </svg>
                      </a> -->
                    </span>
                  </div>
                </div>
              </div>
              <div class="p-4 lg:w-1/4 md:w-1/2">
                <div
                  class="flex flex-col items-center h-full text-center hover:scale-105 transition ease-out"
                >
                  <img
                    alt="team"
                    class="flex-shrink-0 object-cover object-center w-full h-56 mb-4 rounded-lg"
                    src="../assets/images/fathy.jpg"
                  />
                  <div class="w-full">
                    <h2 class="text-lg font-medium text-gray-900 title-font">
                      Mohamed Fathy
                    </h2>
                    <h3 class="mb-3 text-gray-500">Back-End Developer</h3>
                    <p class="mb-4">
                      DIY tote bag drinking vinegar cronut adaptogen squid fanny
                      pack vaporware.
                    </p>
                    <span class="inline-flex">
                      <a
                        class="text-gray-500"
                        alt="Github"
                        href="#"
                        target="_blank"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                          />
                        </svg>
                      </a>
                      <a
                        class="ml-2 text-gray-500"
                        alt="linkedIn"
                        href="#"
                        target="_blank"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                          />
                        </svg>
                      </a>
                      <!-- <a class="ml-2 text-gray-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          class="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
                          ></path>
                        </svg>
                      </a> -->
                    </span>
                  </div>
                </div>
              </div>
              <div class="p-4 lg:w-1/4 md:w-1/2">
                <div
                  class="flex flex-col items-center h-full text-center hover:scale-105 transition ease-out"
                >
                  <img
                    alt="team"
                    class="items-center flex-shrink-0 object-cover object-center w-full h-56 mb-4 rounded-lg"
                    src="../assets/images/1643668655909-1-1-1.jpg"
                  />
                  <div class="w-full">
                    <h2 class="text-lg font-medium text-gray-900 title-font">
                      Ammar Abd El-Naser
                    </h2>
                    <h3 class="mb-3 text-gray-500">Front-End Developer</h3>
                    <p class="mb-4">
                      DIY tote bag drinking vinegar cronut adaptogen squid fanny
                      pack vaporware.
                    </p>
                    <span class="inline-flex">
                      <a
                        class="text-gray-500"
                        alt="Github"
                        href="https://github.com/ammar-nasser1"
                        target="_blank"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                          />
                        </svg>
                      </a>
                      <a
                        class="ml-2 text-gray-500"
                        alt="linkedIn"
                        href="https://www.linkedin.com/in/ammar-abdel-nasser-6a1a071a5/"
                        target="_blank"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                          />
                        </svg>
                      </a>
                      <!-- <a class="ml-2 text-gray-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          class="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
                          ></path>
                        </svg>
                      </a> -->
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import AppTeams from "../components//AppTeams.vue";
import AppFeedback from "../components//AppFeedback.vue";

export default {
  components: { AppTeams, AppFeedback },
};
</script>

<style></style>
