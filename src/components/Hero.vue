<template>
    <section id="home" class="hero">
        <div class="container">
            <div class="hero__content">
                <span>{{ heroData?.title }}</span>
                <div class="hero__content-title">
                    <h1>Sardor</h1>
                    <h1>Ibragimov</h1>
                </div>
                <div class="hero__content-star">
                    <svg
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M24 0
                            C21.8 13.8 13.8 21.8 0 24
                            C13.8 26.2 21.8 34.2 24 48
                            C26.2 34.2 34.2 26.2 48 24
                            C34.2 21.8 26.2 13.8 24 0Z"
                            fill="currentColor"
                        />
                    </svg>
                </div>
                <p>{{ heroData?.description }}</p>
                <a class="hero__content-download-cv" href="/Сардор_Ибрагимов_CV.pdf" download>
                    <svg width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <title/>
                        <g id="Complete">
                            <g id="download">
                                <g>
                                    <path d="M3,12.3v7a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2v-7" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                    <g>
                                        <polyline data-name="Right" fill="none" id="Right-2" points="7.9 12.3 12 16.3 16.1 12.3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                        <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="12" x2="12" y1="2.7" y2="14.2"/>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                    {{ $t('hero.downloadCV') }}
                </a>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios';

export default {
    data(){
        return {
            hero_data: null
        }
    },
    mounted(){
        this.getHeroData()
    },
    methods: {
        async getHeroData(){
            try {
                const { data } = await axios.get('https://071f4809201d9e24.mokky.dev/hero')
                const item = data[0]
                this.hero_data = item
                console.log(this.hero_data, this.$i18n.locale)
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
    },
    computed: {
        heroData() {
            return this.hero_data?.translations?.[this.$i18n.locale];
        },
    }
}
</script>

<style scoped>
.hero__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    width: 100%;
    position: relative;
}

span {
    color: var(--color-text-secondary);
    font-size: var(--text-sm);
    text-transform: uppercase;
}

p {
    font-size: var(--text-mxl);
    color: var(--color-text);
    text-align: center;
    max-width: 550px;
}

.hero__content-title {
    text-align: center;
}

h1 {
    font-family: "Big Shoulders", sans-serif;
    font-size: var(--text-hero);
    color: var(--color-accent);
    text-transform: uppercase;
}

.hero__content-star {
    color: var(--color-accent);
}

.hero__content-download-cv {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background: var(--color-accent);
    color: var(--color-text-reverse);
    font-size: var(--text-base);
    font-weight: 500;
    border: none;
    border-radius: 8px;
    padding: 15px 30px;
    margin: 40px 0 0 0;
    transition: all 0.3s ease;
}

.hero__content-download-cv:hover {
    background: var(--color-surface);
    cursor: pointer;
    color: var(--color-text);
}

@media (max-width: 1000px) {
    h1 {
        font-size: 120px;
    }
    span {
        font-size: var(--text-xs);
    }
    p {
        font-size: var(--text-base);
    }
}

@media (max-width: 425px) {
    h1 {
        font-size: 100px;
    }
    .hero__content-download-cv {
        padding: 12px 24px;
        font-size: var(--text-sm);
        width: 100%;
    }
}

@media (max-width: 375px) {
    h1 {
        font-size: 90px;
    }
}
</style>