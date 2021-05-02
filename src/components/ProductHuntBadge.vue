<template>
  <div class="badge">
    <a
      href="https://www.producthunt.com/posts/vacate?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-vacate"
      target="_blank"
      ><img
        src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=293963&theme=light"
        alt="Vacate - Log out of all your online accounts with single click | Product Hunt"
        style="width: 250px; height: 54px"
        width="250"
        height="54"
    /></a>
  </div>
</template>
<style scoped>
.badge {
  position: fixed;
  bottom: 32px;
  right: 32px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
}

@media only screen and (max-width: 600px) {
  .badge {
    justify-content: center;
    right: 0px;
  }
}
</style>