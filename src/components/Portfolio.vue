<template>
    <section id="portfolio" class="portfolio">
        <div class="container">
            <div class="portfolio__content">
                <SectionTitle :title="$t('sections.projects')" />

                <div class="projects__grid">
                    <article
                        v-for="project in projects"
                        :key="project.id"
                        class="project-card"
                        tabindex="0"
                        @click="openProject(project)"
                        @keydown.enter.prevent="openProject(project)"
                        @keydown.space.prevent="openProject(project)"
                    >
                        <img
                            class="project-card__image"
                            :src="project.images?.[0]"
                            :alt="project.translations?.[$i18n.locale]?.title || 'Project preview'"
                        />

                        <div class="project-card__overlay">
                            <div class="project-card__content">
                                <span class="project-card__number">
                                    0{{ project.id }}
                                </span>

                                <h3 class="project-card__title">
                                    {{ project.translations?.[$i18n.locale]?.title || project.title || 'Project' }}
                                </h3>

                                <p
                                    :title="project.translations?.[$i18n.locale]?.description || project.description"
                                    class="project-card__description"
                                >
                                    {{ project.translations?.[$i18n.locale]?.description || project.description }}
                                </p>

                                <div v-if="project.technologies?.length" class="project-card__stack">
                                    <span
                                        v-for="tech in project.technologies"
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

        <ProjectModal :project="selectedProject" @close="closeProject" />
    </section>
</template>

<script>
import axios from 'axios';
import SectionTitle from './SectionTitle.vue';
import ProjectModal from './ProjectModal.vue';

export default {
    name: 'ProjectsSection',
    components: {
        SectionTitle,
        ProjectModal,
    },
    data() {
        return {
            projects: [],
            selectedProject: null,
        };
    },
    mounted() {
        this.getProjects();
    },
    beforeUnmount() {
        document.body.style.overflow = '';
    },
    methods: {
        async getProjects() {
            try {
                const response = await axios.get('https://071f4809201d9e24.mokky.dev/projects');
                this.projects = response.data;
            } catch (error) {
                console.error('Failed to fetch projects:', error);
            }
        },
        openProject(project) {
            this.selectedProject = project;
            document.body.style.overflow = 'hidden';
        },
        closeProject() {
            this.selectedProject = null;
            document.body.style.overflow = '';
        },
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
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 24px;
}

.project-card {
    position: relative;
    aspect-ratio: 16 / 10;
    overflow: hidden;
    cursor: pointer;
    background: var(--color-surface);
    outline: none;
}

.project-card:focus-visible {
    box-shadow: 0 0 0 2px var(--color-accent);
}

.project-card__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    transition: transform 0.6s ease, filter 0.6s ease;
}

.project-card__overlay {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 32px;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.25));
    opacity: 0;
    transition: opacity 0.4s ease;
}

.project-card:hover .project-card__overlay,
.project-card:focus-visible .project-card__overlay {
    opacity: 1;
}

.project-card:hover .project-card__image,
.project-card:focus-visible .project-card__image {
    transform: scale(1.05);
    filter: brightness(0.65);
}

.project-card__content {
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    gap: 12px;
    transform: translateY(20px);
    opacity: 0;
    transition: transform 0.5s ease, opacity 0.5s ease;
}

.project-card:hover .project-card__content,
.project-card:focus-visible .project-card__content {
    transform: translateY(0);
    opacity: 1;
}

.project-card__arrow {
    align-self: flex-end;
    font-size: 2rem;
    color: #fff;
    transform: translate(-10px, 10px);
    opacity: 1;
    transition: transform 0.5s ease, opacity 0.5s ease;
}

.project-card:hover .project-card__arrow,
.project-card:focus-visible .project-card__arrow {
    transform: translate(0, 0);
    opacity: 1;
}

.project-card__number {
    display: block;
    font-size: var(--text-sm);
    color: rgba(255, 255, 255, 0.6);
}

.project-card__title {
    font-size: var(--text-h3);
    color: #fff;
}

.project-card__description {
    max-width: 400px;
    color: rgba(255, 255, 255, 0.75);
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    overflow: hidden;
}

.project-card__stack {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
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

@media (max-width: 1000px) {
    .portfolio__content {
        gap: 40px;
    }
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

    .project-card__description {
        font-size: var(--text-sm);
    }

    .project-card__arrow {
        display: none;
    }
}

@media (max-width: 640px) {
    .project-card__overlay {
        padding: 24px;
    }
}

@media (max-width: 425px) {
    .project-card__content {
        gap: 6px;
    }

    .project-card__overlay {
        padding: 16px;
    }
}
</style>
