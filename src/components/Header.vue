<template>
    <header class="header">
        <div class="container">
            <div class="header__content">         
                <div>
                    <button class="nav-toggle">
                        <span class="hamburger"></span>
                    </button>
                    <ul class="burger_menu">
                        <li class="menu_item">
                            <a href="#"><span class="menu_link">Home</span></a>
                        </li>
                        <li class="menu_item">
                            <a href="#"><span class="menu_link">About Us</span></a>
                        </li>
                        <li class="menu_item">
                            <a href="#"><span class="menu_link">Our Menu</span></a>
                        </li>
                        <li class="menu_item">
                            <a href="#"><span class="menu_link">Pages</span></a>
                        </li>
                        <li class="menu_item">
                            <a href="#"><span class="menu_link">Blog</span></a>
                        </li>
                        <li class="menu_item">
                            <a href="#"><span class="menu_link">Contact Us</span></a>
                        </li>
                    </ul>
                </div>
                <div class="signature">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 87 69"><path d="M 85 41.727 C 75.989 41.727 73.486 34.904 70.983 27.819 C 69.482 31.297 66.478 41.727 60.972 41.727 C 55.525 41.727 53.913 31.95 51.961 27.821 C 46.592 34.702 40.948 42.6 32.939 41.727 C 22.358 40.573 24.929 2 37.945 2 C 50.96 2 22.816 56.984 14.887 65.872 C 6.844 74.891 -5.763 27 8.407 21.863" stroke="#000" stroke-width="3" stroke-linejoin="round" stroke-linecap="round" fill="transparent" pathLength="1" stroke-dashoffset="0" stroke-dasharray="0.4151701608565054 1" will-change="auto"></path></svg>
                </div>
                <button>Remix</button>
            </div>
        </div>
    </header>
</template>

<style scoped>
.header {
    /* background-color: #333; */
    color: #fff;
    padding: 30px 0 0 0;
    position: relative;
    z-index: 1000;
}

.header__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
}

.header__logo {
    margin: 0;
}

.header__nav {
    display: flex;
    align-items: center;
    gap: 8px;
}

.header__nav ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
}

.header__nav li {
    margin-right: 1rem;
    padding: 12px 33px;
}

.header__nav a {
    color: #fff;
    text-decoration: none;
    font-size: 17px;
    font-weight: bold;
}

button {
    color: #000;
    font-size: 15px;
    font-weight: bold;
    background: #fff;
    /* border: 1px solid #fff;
    border-radius: 30px; */
    /* width: 147px;
    height: 46px; */
}

.burger_menu {
    display: flex;
    flex-direction: column;
    position: fixed;
    transform: translateY(-100%);
    transition: transform 0.2s;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
    background: black;
    opacity: 60%;
    padding-top: 4rem;
}

.nav-toggle {
    background-color: transparent;
    padding: 5px;
}

.hamburger {
    display: flex;
    z-index: 100;
    flex-direction: column;
    position: relative;
    width: 40px;
    height: 2px;
    background-color: #121212;
    cursor: pointer;
}

.hamburger::before,
.hamburger::after {
    display: block;
    content: "";
    width: 40px;
    height: 2px;
    position: absolute;
    right: 0;
    left: 0;
    background-color: #121212;
}

.hamburger::before {
    bottom: 10px;
}

.hamburger::after {
    top: 10px;
}

@media (max-width: 885px){
    .nav-toggle {
        display: block !important;
    }
}

.signature {
    width: 100px;
    display: flex;
    place-items: center;
}

button {
    background: var(--color-accent-secondary);
    color: white;
    padding: 8px 24px;
    border-radius: 50px;
    font-size: var(--text-base);
}

@media (max-width: 1000px) {
    .header {
        padding: 0;
    }
}
</style>