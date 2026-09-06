<template>
    <div class="footer">
        <div class="container">
            <div class="footer__content">
                <ul>
                    <li>
                        <a href="https://t.me/Ibragimov_410">
                            <span
                                class="social-icon social-icon--telegram"
                                aria-hidden="true"
                            ></span>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/sardor74dev">
                            <span
                                class="social-icon social-icon--github"
                                aria-hidden="true"
                            ></span>
                        </a>
                    </li>
                    <li>
                        <a href="mailto:sardoribragimov.7410@gmail.com">
                            <span
                                class="social-icon social-icon--gmail"
                                aria-hidden="true"
                            ></span>
                        </a>
                    </li>
                </ul>
                <p class="footer__content-copyright">2026 Sardor Ibragimov</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style scoped>
.footer__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 10px;
}

.footer__content ul {
    display: flex;
    gap: 20px;
}

.footer__content ul li img {
    width: 32px;
    height: 32px;
}

.footer__content-copyright {
    color: var(--color-text-secondary);
}

.social-icon {
    display: block;
    width: 32px;
    height: 32px;
    background-color: var(--color-text);
    mask-position: center;
    mask-repeat: no-repeat;
    mask-size: contain;
    transition: background-color var(--transition-base);
}

.social-icon:hover {
    background-color: var(--color-accent);
}

.social-icon--gmail {
    mask-image: url("https://cdn.simpleicons.org/gmail");
}

.social-icon--telegram {
    mask-image: url("https://cdn.simpleicons.org/telegram");
}

.social-icon--github {
    mask-image: url("https://cdn.simpleicons.org/github");
}
</style>