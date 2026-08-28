<template>
    <section id="skills" class="skills">
        <Marquee
            :data="skills"
            :speed="60"
            direction="left"
        />
        <Marquee
            :data="skills"
            :speed="60"
            direction="right"
        />
        <!-- <div class="skills__title">
            skills
        </div>
        <span class="skills__subtitle">Using now:</span>
        <ul>
            <li v-for="skill in skills[0]" :key="skill.slug">
                <img :src="`https://cdn.simpleicons.org/${skill.slug}`" :alt="skill.name" />
                <span>{{ skill.name }}</span>
            </li>
        </ul>
        <span class="skills__subtitle">Learning:</span>
        <ul>
            <li v-for="skill in skills[1]" :key="skill.slug">
                <img :src="`https://cdn.simpleicons.org/${skill.slug}`" :alt="skill.name" />
                <span>{{ skill.name }}</span>
            </li>
        </ul>
        <span class="skills__subtitle">Other skills:</span>
        <ul>
            <li v-for="skill in skills[2]" :key="skill.slug">
                <div class="skill__wrapper">
                    <img :src="`https://flags.restcountries.com/v5/w640/${skill.slug}.png`">
                </div>
                <span>{{ skill.name }}</span>
                <span>{{ skill.level }}</span>
            </li>
        </ul> -->
    </section>
</template>

<script>
import Marquee from './Marquee.vue';

export default {
    name: "Skills",
    components: {
        Marquee
    },
    data(){
        return {
            skills: [
                'HTML',
                'CSS',
                'JavaScript',
                'Vue',
                'Pinia',
                'Git',
                'Tailwind CSS',
            ],
        }
    }
//     data() {
//         return {
//             skills: [
//                 [
//                     {
//                         name: "HTML5",
//                         slug: "html5",
//                         color: "#E34F26"
//                     },
//                     {
//                         name: "CSS3",
//                         slug: "css",
//                         color: "#663399"
//                     },
//                     {
//                         name: "JavaScript",
//                         slug: "javascript",
//                         color: "#F7DF1E"
//                     },
//                     {
//                         name: "TailwindCSS",
//                         slug: "tailwindcss",
//                         color: "#06B6D4"
//                     },
//                     {
//                         name: "Vue.js",
//                         slug: "vuedotjs",
//                         color: "#4FC08D"
//                     },
//                     {
//                         name: "Git",
//                         slug: "git",
//                         color: "#F05032"
//                     },
//                     {
//                         name: "GitHub",
//                         slug: "github",
//                         color: "#F05032"
//                     },
//                     {
//                         name: "Pinia",
//                         slug: "pinia",
//                         color: "#FFD859"
//                     }
//                 ],
//                 [
//                     {
//                         name: "Typescript",
//                         slug: "typescript",
//                         color: "#3178C6"
//                     },
//                     {
//                         name: "React Native",
//                         slug: "react",
//                         color: "#61DAFB"
//                     },
//                     {
//                         name: "Expo",
//                         slug: "expo",
//                         color: "#1C2024"
//                     },
//                 ],
//                 [
//                     {
//                         name: "Uzbek Native",
//                         slug: "uz",
//                         color: "#E34F26"
//                     },
//                     {
//                         name: "Russian Advanced",
//                         slug: "ru",
//                         color: "#663399"
//                     },
//                     {
//                         name: "English Intermediate",
//                         slug: "gb",
//                         color: "#F7DF1E"
//                     }            
//                 ]
//             ],            
//         }
//     }
}
</script>

<style scoped>

</style>