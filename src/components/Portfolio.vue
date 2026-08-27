<template>
    <section class="portfolio">
        <div class="container">
            <div class="portfolio__content">
                <SectionTitle title="Projects" />
                <div class="projects__grid">
                    <article
                        v-for="project in projects"
                        :key="project.title"
                        class="project-card"
                    >
                        <img
                            class="project-card__image"
                            :src="project.image"
                            :alt="project.title"
                        />

                        <div class="project-card__overlay">
                            <div class="project-card__content">
                                <span class="project-card__number">
                                    {{ project.number }}
                                </span>

                                <h3 class="project-card__title">
                                    {{ project.title }}
                                </h3>

                                <p class="project-card__description">
                                    {{ project.description }}
                                </p>

                                <div class="project-card__stack">
                                    <span
                                        v-for="tech in project.stack"
                                        :key="tech"
                                    >
                                        {{ tech }}
                                    </span>
                                </div>
                            </div>

                            <span class="project-card__arrow">
                                ->
                            </span>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import SectionTitle from './SectionTitle.vue';

export default {
    name: 'ProjectsSection',
    components: {
        SectionTitle
    },
    data() {
        return {
            projects: [
                {
                    number: '01',
                    title: 'SovTest',
                    description:
                        'Corporate website with a modern and responsive interface.',
                    image: '/sovtest.jpg',
                    stack: [
                        'Vue',
                        'Laravel',
                        'Inertia',
                        'Tailwind',
                    ],
                },
                {
                    number: '02',
                    title: 'SovTest',
                    description:
                        'Corporate website with a modern and responsive interface.',
                    image: '/sovtest.jpg',
                    stack: [
                        'Vue',
                        'Laravel',
                        'Inertia',
                        'Tailwind',
                    ],
                },
                {
                    number: '03',
                    title: 'SovTest',
                    description:
                        'Corporate website with a modern and responsive interface.',
                    image: '/sovtest.jpg',
                    stack: [
                        'Vue',
                        'Laravel',
                        'Inertia',
                        'Tailwind',
                    ],
                },
                {
                    number: '04',
                    title: 'SovTest',
                    description:
                        'Corporate website with a modern and responsive interface.',
                    image: '/sovtest.jpg',
                    stack: [
                        'Vue',
                        'Laravel',
                        'Inertia',
                        'Tailwind',
                    ],
                },
            ],
        };
    },
};
</script>

<style scoped>
.portfolio__content {
    display: flex;
    flex-direction: column;
    gap: 64px;
}

.portfolio__list {
    display: grid;
    grid-template-columns: repeat(2, minmax(50px, 1fr));
    grid-auto-rows: minmax(0, 1fr);
    gap: 40px;
}

.projects__grid {
    display: grid;
    grid-template-columns:
        repeat(2, minmax(0, 1fr));
    gap: 24px;
}

.project-card {
    position: relative;

    aspect-ratio: 16 / 10;

    overflow: hidden;

    cursor: pointer;

    background: var(--color-surface);
}

.project-card__image {
    width: 100%;
    height: 100%;

    object-fit: cover;

    transition:
        transform 0.6s ease,
        filter 0.6s ease;
}

.project-card__overlay {
    position: absolute;
    inset: 0;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding: 32px;

    background:
        linear-gradient(
            to top,
            rgba(0, 0, 0, 0.8),
            rgba(0, 0, 0, 0.25)
        );

    opacity: 0;

    transition: opacity 0.4s ease;
}

.project-card:hover .project-card__overlay {
    opacity: 1;
}

.project-card:hover .project-card__image {
    transform: scale(1.05);

    filter: brightness(0.65);
}

.project-card__content {
    align-self: flex-start;

    transform: translateY(20px);
    opacity: 0;

    transition:
        transform 0.5s ease,
        opacity 0.5s ease;
}

.project-card:hover .project-card__content {
    transform: translateY(0);
    opacity: 1;
}

.project-card__arrow {
    align-self: flex-end;

    font-size: 2rem;
    color: #fff;

    transform: translate(-10px, 10px);
    opacity: 1;

    transition:
        transform 0.5s ease,
        opacity 0.5s ease;
}

.project-card:hover .project-card__arrow {
    transform: translate(0, 0);
    opacity: 1;
}

.project-card__number {
    display: block;

    margin-bottom: 12px;

    font-size: var(--text-sm);

    color: rgba(255, 255, 255, 0.6);
}

.project-card__title {
    font-size: var(--text-h3);

    color: #fff;
}

.project-card__description {
    max-width: 400px;

    margin-top: 12px;

    color: rgba(255, 255, 255, 0.75);
}

.project-card__stack {
    display: flex;
    flex-wrap: wrap;

    gap: 8px;

    margin-top: 24px;
}

.project-card__stack span {
    padding: 6px 10px;

    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: var(--radius-full);

    font-size: var(--text-xs);

    color: #fff;

    background: rgba(255, 255, 255, 0.08);

    backdrop-filter: blur(8px);
}

@media (max-width: 768px) {
    .projects__grid {
        grid-template-columns: 1fr;
    }

    .project-card__overlay {
        opacity: 1;
    }

    .project-card__content,
    .project-card__arrow {
        transform: none;
        opacity: 1;
    }

    .project-card__image {
        filter: brightness(0.65);
    }
}
</style>