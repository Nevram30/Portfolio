<template>
<div id="Hero">
  <div class="hero">
                        <svg        class="animation" 
                                    width="500"
                                    height="500" 
                                    viewBox="0 0 200 100" 
                                    xmlns="http://www.w3.org/2000/svg">
                                
                        <!-- CIRCLE-1 -->
                                <circle r="2" fill="black">
                                    <animateMotion
                                        dur="5s"
                                        repeatCount="indefinite"
                                        path="M20,
                                        10 C20,-50 180,150 180,
                                        10 C180-50 20,150 20,50 z" />
                                </circle>
                        <!-- CIRCLE-2 -->  
                                <circle r="2" fill="#DB1F48">
                                    <animateMotion
                                        dur="6s"
                                        repeatCount="indefinite"
                                        path="M20,
                                        50 C20,-50 180,150 180,
                                        50 C180-50 20,150 20,50 z" />
                                </circle>
                        <!-- CIRCLE-3 -->  
                                <circle r="2" fill="#004369">
                                        <animateMotion
                                        dur="25s"
                                        repeatCount="indefinite"
                                        path="M20,
                                        50 C20,-50 180,150 180,
                                        50 C180-50 20,150 20,50 z" />
                                </circle>
                        <!-- CIRCLE-4 -->  
                                <circle r="2" fill="#DB1F48">
                                    <animateMotion
                                        dur="20s"
                                        repeatCount="indefinite"
                                        path="M20,
                                        50 C20,-50 180,150 180,
                                        50 C180-50 20,150 20,50 z" />
                                </circle>
                        <!-- CIRCLE-5 -->  
                                <circle r="2" fill="#004369">
                                    <animateMotion
                                        dur="7s"
                                        repeatCount="indefinite"
                                        path="M20,
                                        50 C20,-50 180,150 180,
                                        50 C180-50 20,150 20,50 z" />
                                </circle>
                        <!-- CIRCLE-6 -->  
                                <circle r="2" fill="black">
                                    <animateMotion
                                        dur="3s"
                                        repeatCount="indefinite"
                                        path="M20,
                                        50 C20,-50 180,150 180,
                                        50 C180-50 20,150 20,50 z" />
                                </circle>
                        <!-- CIRCLE-7 -->  
                                <circle r="2" fill="#004369">
                                    <animateMotion
                                        dur="9s"
                                        repeatCount="indefinite"
                                        path="M20,
                                        50 C20,-50 180,150 180,
                                        50 C180-50 20,150 20,50 z" />
                                </circle>
                        </svg>
                        <!-- END-OF-SVG -->

                        <!-- PROFILE -->
                            <div class="fucos">
                                <div id="main-image">
                                    <img src="../assets/Ellipse 3.png" alt="LOGO">
                                </div>
                                    <div class="content-header">
                                        <div class="main-header">
                                            <h1>MARVEN M. PARAY</h1>
                                        </div>
                                            <div class="sub-content">
                                                <p>Hello There! I am a filipino <span id="content-header">Front-end</span> <span id="content-header-1">Developer</span> based in Philipppines.
                                                  <br>Let's create and develop web application in a Idealistic, Simple, and Creative way.<br></p>
                                            </div>
                                                <div class="new-button">
                                                    <button class="fade" @click="downloadFile">Download CV</button>
                                                </div>
                                    </div>
                            </div>
                    </div>
</div>
</template>

<script>
import Navbar from "../components/Navbar.vue";


export default {
    components: {
    Navbar,
  },
    methods: {
    downloadFile() {
      const url = "https://drive.google.com/file/d/1LaJjB-N7G21w4nnTAvkGOw1isdDTLrfq/view?usp=sharing"; // replace with your file URL
      const link = document.createElement("a");
      link.href = url;
      link.download = "RESUME.pdf"; // replace with your file name
      link.click();
    },
  },
}
</script>
<style>

</style>