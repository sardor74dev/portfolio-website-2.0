<template>
    <section class="skills-marquee">
        <div class="skills-marquee__track" :style="marqueeStyle">
            <div class="skills-marquee__content">
                <span
                    v-for="item in data"
                    :key="item"
                    class="skills-marquee__item"
                >
                    {{ item }}
                </span>
            </div>

            <!-- Дубликат для бесконечной анимации -->
            <div
                class="skills-marquee__content"
                aria-hidden="true"
            >
                <span
                    v-for="item in data"
                    :key="`duplicate-${item}`"
                    class="skills-marquee__item"
                >
                    {{ item }}
                </span>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'SkillsMarquee',
    props: {
        data: {
            type: Array,
            required: true,
        },

        speed: {
            type: Number,
            default: 25,
        },

        direction: {
            type: String,
            default: 'left',
            validator(value) {
                return ['left', 'right'].includes(value);
            },
        },
    },
    computed: {
        marqueeStyle(){
            return {
                '--marquee-duration': `${this.speed}s`,
                '--marquee-direction':
                    this.direction === 'right'
                        ? 'reverse'
                        : 'normal',
            }
        }
    }
};
</script>

<style scoped>
.skills-marquee {
    width: 100%;
    overflow: hidden;
}

.skills-marquee__track {
    display: flex;
    width: max-content;
    animation-name: marquee;
    animation-duration: var(--marquee-duration);
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: var(--marquee-direction);
}

.skills-marquee__content {
    display: flex;
    align-items: center;
    flex-shrink: 0;
}

.skills-marquee__item {
    display: flex;
    align-items: center;
    gap: 24px;
    white-space: nowrap;
    font-family: "Big Shoulders", sans-serif;
    font-size: 128px;
    font-weight: 700;
    line-height: 1;
    letter-spacing: -0.05em;
    color: var(--color-accent);
    text-transform: uppercase;
}

/* Разделитель между скиллами */

.skills-marquee__item::after {
    content: '✦';

    margin-right: 24px;

    font-size: 0.4em;

    color: var(--color-surface);
}

@keyframes marquee {
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(-50%);
    }
}

@media (prefers-reduced-motion: reduce) {
    .skills-marquee__track {
        animation: none;
    }
}
</style>