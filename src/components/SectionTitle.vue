<template>
    <div class="section-title">
        <h2 class="section-title__text">
            {{ title }}
        </h2>

        <div class="section-title__line">
            <span class="section-title__arrow"></span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SectionTitle',

    props: {
        title: {
            type: String,
            required: true,
        },
    },
};
</script>

<style scoped>
.section-title {
    display: flex;
    align-items: center;
    gap: 24px;

    width: 100%;
}

.section-title__text {
    flex-shrink: 0;
    font-size: 32px;
    line-height: 140%;
    letter-spacing: .04em;
    color: var(--color-text-secondary);
    font-family: 'Big Shoulders', sans-serif;
    text-transform: uppercase;
}

@media (max-width: 1000px){
    .section-title__text {
        font-size: 30px;
    }
}

.section-title__line {
    position: relative;

    flex: 1;
    height: 4px;

    background: var(--color-border);

    transform-origin: left;

    transition:
        transform 0.5s ease,
        background-color 0.3s ease;
}

.section-title__arrow {
    position: absolute;

    top: 50%;
    right: -2px;

    width: 15px;
    height: 15px;

    border-top: 4px solid var(--color-accent);
    border-right: 4px solid var(--color-accent);

    opacity: 0;

    transform:
        translateY(-50%)
        translateX(-8px)
        rotate(45deg);

    transition:
        opacity 0.2s ease,
        transform 0.5s ease;
}


/* Hover */

.section-title:hover .section-title__line {
    background: var(--color-accent);

    transform: scaleX(1.05);
}

.section-title:hover .section-title__arrow {
    opacity: 1;

    transform:
        translateY(-50%)
        translateX(0)
        rotate(45deg);
}
</style>