<template>
    <div class="footer">
        <div class="container">
            <div class="footer__content">
                <ul>
                    <li>
                        <a href="https://t.me/Ibragimov_410">
                            <img src="https://cdn.simpleicons.org/telegram/black">
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/sardor74dev">
                            <img src="https://cdn.simpleicons.org/github/black">
                        </a>
                    </li>
                    <li>
                        <a href="mailto:sardoribragimov.7410@gmail.com">
                            <img src="https://cdn.simpleicons.org/gmail/black">
                        </a>
                    </li>
                </ul>
                <p>2026 Sardor Ibragimov</p>
            </div>
        </div>
    </div>
</template>

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
</style>