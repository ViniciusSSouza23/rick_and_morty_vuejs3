<template>
  <div class="home-view pb-5 pt-4">
    <div class="container">
      <div class="custom-card mx-auto  mb-5 text-center">
        <h4>Welcome to Rick and Morty Wiki</h4>
        <hr />
        <div class="row">
          <div class="col-lg-6">
            <p class="mt-5 pt-5">
              This website is a Wiki about Rick and Morty, it was made
              with VueJs 3 using composition API. For the UI, I used Bootstrap 5
              and Element-Plus, I made this website to train VueJs with
              composition API, so enjoy your experiencie on my website, and if
              you have any suggestions fell free to send to me this suggestions
              on github.
            </p>
            <a href="https://github.com/ViniciusSSouza23" target="_blank"
              >GitHub</a
            >
          </div>
          <div class="col-lg-6">
            <img
              src="@/assets/imgs/rick_home.png"
              alt="Rick and Morty"
              class="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang='scss' scoped>
.home-view {
  .custom-card {
    @media screen and (min-width:991px) {
      width: 75%;
    }
    padding: 24px;
    border-radius: 20px;
    background-color: #bbbbbb;
    min-height: 60vh;
    p {
      color: #fff;
    }
    a {
      text-decoration: none;
    }
  }
}
</style>


