<template>
<div class="container">
    <nav>
      <img src="../assets/LOGO.png" class="logo" >
         <ul>
            <li><a href="#" @click.prevent="scrollToSection('#Hero')">Home</a></li>
            <li><a href="#" @click.prevent="scrollToSection('#project')">Projects</a></li>
            <li><a href="#" @click.prevent="scrollToSection('#section-1')">Contact</a></li>
          </ul>
    </nav>
</div>  
</template>

<script>
export default {
  methods: {
    scrollToSection(sectionRef) {
      const el = document.querySelector(sectionRef);
      el.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>
