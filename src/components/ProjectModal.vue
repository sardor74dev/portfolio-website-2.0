<template>
  <transition name="modal-fade">
    <div
      v-if="project"
      class="project-modal__backdrop"
      @click.self="close"
    >
      <div
        ref="modal"
        class="project-modal"
        role="dialog"
        aria-modal="true"
        :aria-label="projectTitle"
        @keydown.esc="close"
        @keydown.left="previousImage"
        @keydown.right="nextImage"
        tabindex="-1"
      >
        <button
          type="button"
          class="project-modal__close"
          aria-label="Close project details"
          @click="close"
        >
          ×
        </button>

        <div class="project-modal__media">
          <img
            v-if="project.images?.length"
            :src="currentImage"
            :alt="`${projectTitle} preview ${currentIndex + 1}`"
          />

          <button
            v-if="hasMultipleImages"
            type="button"
            class="project-modal__navigation project-modal__navigation--previous"
            aria-label="Previous project image"
            @click="previousImage"
          >
            <span aria-hidden="true">&#8592;</span>
          </button>

          <button
            v-if="hasMultipleImages"
            type="button"
            class="project-modal__navigation project-modal__navigation--next"
            aria-label="Next project image"
            @click="nextImage"
          >
            <span aria-hidden="true">&#8594;</span>
          </button>

          <span v-if="hasMultipleImages" class="project-modal__counter">
            {{ currentIndex + 1 }} / {{ projectImages.length }}
          </span>
        </div>

        <div class="project-modal__content">
          <span class="project-modal__eyebrow">
            0{{ project.id }}
          </span>

          <h3 class="project-modal__title">
            {{ projectTitle }}
          </h3>

          <p class="project-modal__description">
            {{ projectDescription }}
          </p>

          <div v-if="project.technologies?.length" class="project-modal__stack">
            <span v-for="tech in project.technologies" :key="tech">
              {{ tech }}
            </span>
          </div>

          <div v-if="projectLinks.length" class="project-modal__actions">
            <a
              v-for="link in projectLinks"
              :key="link.label"
              :href="link.url"
              target="_blank"
              rel="noreferrer"
            >
              {{ link.label }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'ProjectModal',
  props: {
    project: {
      type: Object,
      default: null,
    },
  },
  emits: ['close'],
  data() {
    return {
      currentIndex: 0,
    };
  },
  computed: {
    currentTranslation() {
      return (
        this.project?.translations?.[this.$i18n.locale] ||
        this.project?.translations?.ru ||
        this.project?.translations?.en ||
        {}
      );
    },
    projectTitle() {
      return this.currentTranslation.title || 'Project';
    },
    projectDescription() {
      return this.currentTranslation.description || 'Project description is not available yet.';
    },
    projectImages() {
      return this.project?.images || [];
    },
    currentImage() {
      return this.projectImages[this.currentIndex];
    },
    hasMultipleImages() {
      return this.projectImages.length > 1;
    },
    projectLinks() {
      const links = [];

      if (this.project?.project_link) {
        links.push({ label: 'Visit project', url: this.project.project_link });
      }

      if (this.project?.github) {
        links.push({ label: 'GitHub', url: this.project.github });
      }

      if (this.project?.demo) {
        links.push({ label: 'Live demo', url: this.project.demo });
      }

      return links;
    },
  },
  watch: {
    project: {
      immediate: true,
      handler() {
        this.currentIndex = 0;
        this.$nextTick(() => {
          if (this.project) this.$refs.modal?.focus();
        });
      },
    },
  },
  methods: {
    previousImage() {
      if (!this.hasMultipleImages) return;
      this.currentIndex =
        (this.currentIndex - 1 + this.projectImages.length) % this.projectImages.length;
    },
    nextImage() {
      if (!this.hasMultipleImages) return;
      this.currentIndex = (this.currentIndex + 1) % this.projectImages.length;
    },
    close() {
      this.$emit('close');
    },
  },
};
</script>

<style scoped>
.project-modal__backdrop {
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: grid;
  place-items: center;
  padding: 24px;
  background: rgba(10, 10, 12, 0.75);
  backdrop-filter: blur(6px);
}

.project-modal {
  position: relative;
  width: min(100%, 980px);
  max-height: 90vh;
  overflow-y: auto;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 28px;
  background: var(--color-bg);
  box-shadow: 0 32px 80px rgba(0, 0, 0, 0.45);
}

.project-modal__media {
  position: relative;
  width: 100%;
  height: 340px;
  aspect-ratio: 16 / 9;
  background: rgba(255, 255, 255, 0.04);
}

.project-modal__media img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.project-modal__navigation {
  position: absolute;
  top: 50%;
  display: grid;
  place-items: center;
  width: 48px;
  height: 48px;
  border: 1px solid rgba(255, 255, 255, 0.28);
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.48);
  color: #fff;
  font-size: 1.5rem;
  transform: translateY(-50%);
  transition: background 0.2s ease, transform 0.2s ease;
}

.project-modal__navigation:hover {
  background: rgba(0, 0, 0, 0.72);
}

.project-modal__navigation--previous {
  left: 20px;
}

.project-modal__navigation--next {
  right: 20px;
}

.project-modal__counter {
  position: absolute;
  right: 20px;
  bottom: 16px;
  padding: 5px 9px;
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.52);
  color: #fff;
  font-size: var(--text-xs);
}

.project-modal__content {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 32px;
}

.project-modal__eyebrow {
  font-size: var(--text-sm);
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-accent);
}

.project-modal__title {
  font-size: clamp(2rem, 4vw, 3rem);
  color: var(--color-text);
}

.project-modal__description {
  max-width: 60ch;
  color: var(--color-text-secondary);
}

.project-modal__stack {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.project-modal__stack span {
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 999px;
  padding: 7px 12px;
  background: rgba(255, 255, 255, 0.04);
  color: var(--color-text);
  font-size: var(--text-sm);
}

.project-modal__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 8px;
}

.project-modal__actions a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 0 18px;
  border-radius: 999px;
  background: var(--color-accent);
  color: #fff;
  font-weight: 600;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.project-modal__actions a:hover {
  transform: translateY(-1px);
  opacity: 0.96;
}

.project-modal__close {
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 2;
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.38);
  color: #fff;
  font-size: 2rem;
  line-height: 1;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.25s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .project-modal__backdrop {
    padding: 12px;
  }

  .project-modal__media {
    height: 240px;
  }

  .project-modal__content {
    padding: 24px 18px 20px;
  }

  .project-modal__navigation {
    width: 40px;
    height: 40px;
  }

  .project-modal__navigation--previous {
    left: 12px;
  }

  .project-modal__navigation--next,
  .project-modal__counter {
    right: 12px;
  }
}
</style>
