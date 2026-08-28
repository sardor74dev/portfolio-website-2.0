<template>
    <section id="home" class="hero">
        <div class="container">
            <div class="hero__content">
                <span>building web experiences since - y:2024</span>
                <div class="hero__content-title">
                    <h1>Sardor</h1>
                    <h1>Ibragimov</h1>
                </div>
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
                        fill="#1f67f1"
                    />
                </svg>
                <p>I'm Sardor Ibragimov — a Frontend Developer focused on building modern, responsive, and user-friendly web experiences.</p>
            </div>
        </div>
    </section>
</template>

<script>

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
    color: #12121280;
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
    color: var(--color-text-secondary);
    text-transform: uppercase;
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
}

@media (max-width: 375px) {
    h1 {
        font-size: 90px;
    }
}
</style>