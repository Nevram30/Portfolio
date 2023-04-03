
<template>
  <div class="new-button">
    <button class="fade"  @click="scrollToTop">Scroll to Top</button>
  </div>
</template>

<style scoped>

.new-button{
  text-align: center;
  padding-top: 5rem;
}
button{
  cursor: pointer;
}
.fade {
  background-color: #DB1F48;
  color: #fff;
  transition: background-color 1s;
  padding: 5px 20px;
}
.fade:hover {
  background-color: #004369;
}
</style>

<script>
export default {
    methods: {
      scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      },
    },
  };
</script>