<template>
  <section
    class="flex flex-col-reverse items-center w-full mb-16 h-2/5 xl:container md:mx-auto md:my-0 sm:mx-auto sm:my-0 lg:flex-row"
  >
    <div
      class="flex flex-col justify-center text-center align-middle lg:text-left lg:pl-4"
    >
      <h1 class="mx-auto mt-8 text-5xl text-primary w-96">
        Next generation digital banking
      </h1>
      <p class="mx-auto my-4 text-lg text-base-500 w-96">
        Take your financial life online. Your Easybank account will be a
        one-stop-shop for spending, saving budgeting, investing, and much more
      </p>
      <div class="flex justify-center mb-16 lg:justify-start">
        <ButtonReqInvite />
      </div>
    </div>
    <div class="w-full overflow-hidden bg-intro-img">
      <img
        class="relative max-w-md mx-auto my-0 -top-40 lg:-top-20 lg:-right-40 lg:max-w-lg"
        src="~/assets/images/image-mockups.png"
      />
    </div>
  </section>
</template>
<style lang="css" scoped>
.bg-intro-img {
  background: url('~/assets/images/bg-intro-mobile.svg') no-repeat center center;
  background-size: cover;
  @media (min-width: 1024px) {
    background: url('~/assets/images/bg-intro-desktop.svg') no-repeat center
      center;
    background-position: 0% -100px;
    background-size: cover;
  }
  @media (min-width: 1536px) {
    background-position: 0% -400px;
  }
}
</style>
