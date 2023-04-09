<script setup>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import Projects from './components/Projects.vue'




</script>

<template>
<div class="container">
          <Navbar />
          <Hero />         
                    <!-- ABOUT-SECTION -->
                    <!-- <section id="about">-->
                    <!-- Image and Content -->
                    <!-- <div class="row row-mobile">
                                <div class="about-col-1">
                                    <img src="./assets/About-image1.png" alt="">
                                </div>
                                    <div class="about-col-2">
                                        <h2>About Me</h2>
                                        <p id ="paragraph-content">Hey! I am a filipino front-end developer based in Philipppines.
                                          Let's create and develop web application in a Idealistic, Simple, and Creative way. 
                                        </p>
                                            <div class="tab-titles">
                                                <p class="tab-links active-link" @click="isVisible">Skills</p>
                                                <p class="tab-links" @click="isVisible">Experience</p>                            
                                                <p class="tab-links" @click="isVisible">Education</p>
                                                <p class="tab-links" @click="isVisible">Certificates</p>                               
                                            </div>
                                            <div class="tab-contents active-tab" id="skills">
                                                <ul>
                                                    <li><span>UI/UX</span><br>Designing Web App Interface</li>
                                                    <li><span>Creative Design</span><br>Creating design ideas of a Web-based interface</li>
                                                    <li><span>Front-end Web Development</span><br>Create and Develop front-end in a simple way</li>
                                                    <li><span>Logo Design</span><br>Creating logo design ideas for a project based</li>
                                                </ul>   
                                            </div>
                                            <div class="tab-contents" id="experience" v-if="isVisible">
                                                <ul>
                                                    <li><span>UI/UX Designer Intern</span><br>Wela School System</li>
                                                    <li><span>Freelance Graphic Designer</span><br>Client based project</li>
                                                    <li><span>IT Instructor</span><br>Gabriel Taborin College of Davao Inc.</li>
                                                    <li><span>Front-end Developer</span><br>Own based project</li>
                                                </ul>
                                            </div>
                                            <div class="tab-contents" id="education">
                                                <ul>
                                                    <li><span>Bachelor of Science in Information Systems</span><br>Davao Del Norte State College</li>
                                                    <li><span>Graphic Design</span><br>Alison Empower Yourself Online Course</li>
                                                    <li><span>Front-end Web Development Libraries</span><br>Freecodecamp</li> 
                                                    <li><span>Understanding HTML/CSS/JavaScript</span><br>Sololearn Online Course</li> 
                                                </ul>
                                            </div>
                                            <div class="tab-contents" id="certificates">
                                                <ul>
                                                    <li><span>Certified Graphic Designer</span><br>Alison Empower Yourself 21-july-2022</li>
                                                    <li><span>Web Responsive Design</span><br><a href="https://www.sololearn.com/certificates/CT-BD0WULUK">https://www.sololearn.com/certificates/CT-BD0WULUK</a></li>
                                                    <li><span>HTML/CSS/JavaScript</span><br>
                                                        <a href="https://www.sololearn.com/certificates/CT-AIQEVORM">https://www.sololearn.com/certificates/CT-AIQEVORM</a><br>
                                                        <a href="https://www.sololearn.com/certificates/CT-XFHO5LCX">https://www.sololearn.com/certificates/CT-XFHO5LCX</a><br>
                                                        <a href="https://www.sololearn.com/certificates/CT-HS79N0MY">https://www.sololearn.com/certificates/CT-HS79N0MY</a>
                                                    </li>
                                                    <li><span>Front-end Web Development</span></li>
                                                    <a href="https://www.freecodecamp.org/certification/fcc36d8dde8-c44c-4dea-938e-2c0a3d855533/front-end-development-libraries">https://www.freecodecamp.org/certification/fcc36d8dde8-c44c-4dea-938e-2c0a3d855533/front-end-development-libraries</a>
                                                </ul>
                                            </div>
                                    </div>
                    </div>
                    </section>-->

                    <!-- TOOLS USED -->
                    <!-- Basic Language -->
                    <div>
                    <div class="basic-lang">
                      <h2 v-motion-fade-visible>Programming Language Tools</h2>
                      <p>knowledgable in basic to advanced <br> html, css, and javascript languages.</p>
                      <div v-motion-slide-visible-once-right><img src="./assets/Basic-lang.png" alt="basic-lang"></div>
                    </div>
                    </div>
                    <!-- Set-up Environment Tool -->
                    <div class="set-up">
                      <h3 v-motion-fade-visible>Set-Up Environment Tool</h3>
                      <p>I used Set-up environment tool such as vite <br> to set-up front-end framework.</p>
                      <div class="set-up-img" v-motion-slide-visible-once-right ><img src="./assets/Vite.png" alt="Set-Up-Env-Tool"></div>
                    </div>
                    <!-- CSS-Framework Tool -->
                    <div class="css-frame">
                      <h3 v-motion-fade-visible>CSS Framework</h3>
                      <p>I used SASS and Tailwind <br> CSS framework for my projects.</p>
                      <div class="set-up-img" v-motion-slide-visible-once-right ><img src="./assets/cssframework.png" alt="Set-Up-Env-Tool"></div>
                    </div>
                    <!-- STACK DEVELOPMENT -->
                    <div id ="stack">
                    <h3 v-motion-fade-visible>Front-end Development Framework</h3>
                    <p>I used Vue js fron-end framework to easily manage certain pages and<br> 
                    used it as components. To minimize and reduce code scope for my projects.</p>
                    <div class="stack-dev" v-motion-slide-visible-once-right>
                      <div class="vue-img"><img src="./assets/Vue.png" alt=""></div>
                    </div>
                    </div>
                    <!-- PROJECTS -->
                    <Projects />

</div>
</template>