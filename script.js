/* =========================================================
   COUNTER MOD
   Main Website Script
   ========================================================= */

(function () {

    "use strict";


    /* =====================================================
       DATA
    ===================================================== */

    const STORAGE_KEY = "counter_mod_site_data";


    function cloneData(data) {

        return JSON.parse(
            JSON.stringify(data)
        );

    }


    function getData() {

        try {

            const saved =
                localStorage.getItem(STORAGE_KEY);

            if (saved) {

                const parsed =
                    JSON.parse(saved);

                return {
                    ...cloneData(DEFAULT_DATA),
                    ...parsed,

                    site: {
                        ...cloneData(DEFAULT_DATA.site),
                        ...(parsed.site || {})
                    },

                    tutorial: {
                        ...cloneData(DEFAULT_DATA.tutorial),
                        ...(parsed.tutorial || {})
                    },

                    downloads:
                        Array.isArray(parsed.downloads)
                            ? parsed.downloads
                            : cloneData(DEFAULT_DATA.downloads),

                    apps:
                        Array.isArray(parsed.apps)
                            ? parsed.apps
                            : cloneData(DEFAULT_DATA.apps)
                };

            }

        } catch (error) {

            console.warn(
                "خطا در خواندن اطلاعات ذخیره شده:",
                error
            );

        }


        return cloneData(DEFAULT_DATA);

    }


    const DATA = getData();


    /* =====================================================
       ELEMENTS
    ===================================================== */

    const menuButton =
        document.getElementById("menuButton");

    const sideMenu =
        document.getElementById("sideMenu");

    const overlay =
        document.getElementById("overlay");

    const mainLogo =
        document.getElementById("mainLogo");

    const menuLogo =
        document.getElementById("menuLogo");

    const mainTitle =
        document.getElementById("mainTitle");

    const mainSubtitle =
        document.getElementById("mainSubtitle");

    const menuTitle =
        document.getElementById("menuTitle");

    const menuSubtitle =
        document.getElementById("menuSubtitle");

    const downloadsGrid =
        document.getElementById("downloadsGrid");

    const appsGrid =
        document.getElementById("appsGrid");


    /* =====================================================
       SITE INFORMATION
    ===================================================== */

    function setLink(id, url) {

        const element =
            document.getElementById(id);

        if (!element) return;

        element.href = url || "#";

    }


    function applySiteData() {

        const site = DATA.site || {};


        if (mainLogo) {

            mainLogo.src =
                site.mainImage || "";

        }


        if (menuLogo) {

            menuLogo.src =
                site.mainImage || "";

        }


        if (mainTitle) {

            mainTitle.textContent =
                site.title || "کانتر مود";

        }


        if (mainSubtitle) {

            mainSubtitle.textContent =
                site.subtitle || "";

        }


        if (menuTitle) {

            menuTitle.textContent =
                site.title || "کانتر مود";

        }


        if (menuSubtitle) {

            menuSubtitle.textContent =
                site.subtitle || "";

        }


        setLink(
            "channelButton",
            site.channel
        );


        setLink(
            "aiButton",
            site.aiUrl
        );


        setLink(
            "contactChannel",
            site.channel
        );


        setLink(
            "contactCreator",
            site.creatorUrl
        );


        setLink(
            "contactTelegram",
            site.telegram
        );


        setLink(
            "contactBale",
            site.bale
        );


        setLink(
            "contactAparat",
            site.aparat
        );


        setLink(
            "contactGroup",
            site.group
        );


        setLink(
            "menuChannel",
            site.channel
        );


        setLink(
            "menuCreator",
            site.creatorUrl
        );


        const aiLink =
            document.getElementById("menuAI");

        if (aiLink) {

            aiLink.href =
                site.aiUrl || "#";

        }

    }


    /* =====================================================
       PAGE SYSTEM
    ===================================================== */

    const pages = {

        home:
            document.getElementById("page-home"),

        contact:
            document.getElementById("page-contact"),

        downloads:
            document.getElementById("page-downloads"),

        tutorial:
            document.getElementById("page-tutorial"),

        apps:
            document.getElementById("page-apps")

    };


    function closeMenu() {

        if (sideMenu) {

            sideMenu.classList.remove("open");

        }

        if (overlay) {

            overlay.classList.remove("show");

        }

        document.body.style.overflow = "";

    }


    function openMenu() {

        if (sideMenu) {

            sideMenu.classList.add("open");

        }

        if (overlay) {

            overlay.classList.add("show");

        }

        document.body.style.overflow =
            "hidden";

    }


    function toggleMenu() {

        if (
            sideMenu &&
            sideMenu.classList.contains("open")
        ) {

            closeMenu();

        } else {

            openMenu();

        }

    }


    function showPage(pageName) {

        const target =
            pages[pageName];

        if (!target) return;


        Object.values(pages).forEach(
            page => {

                if (page) {

                    page.classList.remove(
                        "active"
                    );

                }

            }
        );


        target.classList.add("active");


        closeMenu();


        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });


        try {

            history.replaceState(
                null,
                "",
                "#" + pageName
            );

        } catch (error) {}

    }


    /* =====================================================
       PAGE BUTTONS
    ===================================================== */

    document.addEventListener(
        "click",
        function (event) {

            const element =
                event.target.closest(
                    "[data-page]"
                );

            if (!element) return;


            event.preventDefault();


            const page =
                element.dataset.page;


            if (pages[page]) {

                showPage(page);

            }

        }
    );


    /* =====================================================
       MENU
    ===================================================== */

    if (menuButton) {

        menuButton.addEventListener(
            "click",
            toggleMenu
        );

    }


    if (overlay) {

        overlay.addEventListener(
            "click",
            closeMenu
        );

    }


    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape"
            ) {

                closeMenu();

            }

        }
    );


    /* =====================================================
       DOWNLOADS
    ===================================================== */

    function renderDownloads() {

        if (!downloadsGrid) return;


        downloadsGrid.innerHTML = "";


        const downloads =
            Array.isArray(DATA.downloads)
                ? DATA.downloads
                : [];


        if (!downloads.length) {

            downloadsGrid.innerHTML = `

                <div
                    style="
                        grid-column:1/-1;
                        text-align:center;
                        padding:35px;
                        color:rgba(220,235,245,.65);
                    "
                >
                    هنوز مود منویی ثبت نشده است.
                </div>

            `;

            return;

        }


        downloads.forEach(
            function (item, index) {

                const card =
                    document.createElement("article");

                card.className =
                    "download-card";


                const image =
                    document.createElement("img");

                image.src =
                    item.image || "";

                image.alt =
                    item.title ||
                    "مود منو";

                image.loading =
                    index < 3
                        ? "eager"
                        : "lazy";


                image.onerror =
                    function () {

                        this.style.opacity =
                            ".35";

                    };


                const body =
                    document.createElement("div");

                body.className =
                    "download-body";


                const title =
                    document.createElement("h3");

                title.textContent =
                    item.title ||
                    "مود منو";


                const link =
                    document.createElement("a");

                link.className =
                    "action-button";

                link.textContent =
                    "مشاهده و دانلود";


                link.href =
                    item.url || "#";

                link.target =
                    "_blank";

                link.rel =
                    "noopener noreferrer";


                body.appendChild(title);

                body.appendChild(link);


                card.appendChild(image);

                card.appendChild(body);


                downloadsGrid.appendChild(card);

            }
        );

    }


    /* =====================================================
       APPS
    ===================================================== */

    function renderApps() {

        if (!appsGrid) return;


        appsGrid.innerHTML = "";


        const apps =
            Array.isArray(DATA.apps)
                ? DATA.apps
                : [];


        if (!apps.length) {

            appsGrid.innerHTML = `

                <div
                    style="
                        grid-column:1/-1;
                        text-align:center;
                        padding:35px;
                        color:rgba(220,235,245,.65);
                    "
                >
                    هنوز برنامه‌ای ثبت نشده است.
                </div>

            `;

            return;

        }


        apps.forEach(
            function (item) {

                const card =
                    document.createElement("article");

                card.className =
                    "app-card";


                const image =
                    document.createElement("img");

                image.src =
                    item.image || "";

                image.alt =
                    item.title ||
                    "برنامه";


                image.loading =
                    "lazy";


                const body =
                    document.createElement("div");

                body.className =
                    "app-body";


                const title =
                    document.createElement("h3");

                title.textContent =
                    item.title ||
                    "برنامه";


                const link =
                    document.createElement("a");

                link.className =
                    "action-button";

                link.textContent =
                    "دانلود برنامه";


                link.href =
                    item.url || "#";

                link.target =
                    "_blank";

                link.rel =
                    "noopener noreferrer";


                body.appendChild(title);

                body.appendChild(link);


                card.appendChild(image);

                card.appendChild(body);


                appsGrid.appendChild(card);

            }
        );

    }


    /* =====================================================
       TUTORIAL
    ===================================================== */

    function applyTutorial() {

        const frame =
            document.getElementById(
                "tutorialFrame"
            );

        const video =
            document.getElementById(
                "tutorialVideo"
            );


        if (frame) {

            frame.src =
                DATA.tutorial?.aparat || "";

        }


        if (video) {

            video.src =
                DATA.tutorial?.mp4 || "";

        }

    }


    /* =====================================================
       PARTICLES
    ===================================================== */

    function createParticles() {

        const container =
            document.getElementById(
                "particles"
            );

        if (!container) return;


        container.innerHTML = "";


        const count =
            window.innerWidth <= 500
                ? 14
                : 24;


        for (
            let i = 0;
            i < count;
            i++
        ) {

            const particle =
                document.createElement("span");


            particle.className =
                "particle";


            const size =
                3 +
                Math.random() * 6;


            particle.style.width =
                size + "px";

            particle.style.height =
                size + "px";


            particle.style.left =
                Math.random() * 100 + "%";


            particle.style.animationDuration =
                (10 + Math.random() * 18) + "s";


            particle.style.animationDelay =
                (-Math.random() * 25) + "s";


            particle.style.opacity =
                (.18 + Math.random() * .45);


            container.appendChild(
                particle
            );

        }

    }


    /* =====================================================
       TRIPLE TAP
       برای ورود به پنل مدیریت
    ===================================================== */

    let tapCount = 0;

    let tapTimer = null;


    function registerAdminTap() {

        tapCount++;


        clearTimeout(
            tapTimer
        );


        if (tapCount >= 3) {

            tapCount = 0;

            window.location.href =
                "admin.html";

            return;

        }


        tapTimer =
            setTimeout(
                function () {

                    tapCount = 0;

                },
                700
            );

    }


    if (menuButton) {

        menuButton.addEventListener(
            "click",
            registerAdminTap
        );

    }


    if (menuLogo) {

        menuLogo.addEventListener(
            "click",
            registerAdminTap
        );

    }


    /* =====================================================
       HASH NAVIGATION
    ===================================================== */

    function loadHashPage() {

        const hash =
            window.location.hash
                .replace("#", "")
                .trim();


        if (
            hash &&
            pages[hash]
        ) {

            showPage(hash);

        } else {

            showPage("home");

        }

    }


    window.addEventListener(
        "hashchange",
        loadHashPage
    );


    /* =====================================================
       IMAGE FALLBACK
    ===================================================== */

    if (mainLogo) {

        mainLogo.addEventListener(
            "error",
            function () {

                this.style.opacity = ".4";

            }
        );

    }


    if (menuLogo) {

        menuLogo.addEventListener(
            "error",
            function () {

                this.style.opacity = ".4";

            }
        );

    }


    /* =====================================================
       INITIALIZE
    ===================================================== */

    applySiteData();

    renderDownloads();

    renderApps();

    applyTutorial();

    createParticles();

    loadHashPage();


    /* =====================================================
       RESIZE PARTICLES
    ===================================================== */

    let resizeTimer = null;


    window.addEventListener(
        "resize",
        function () {

            clearTimeout(
                resizeTimer
            );


            resizeTimer =
                setTimeout(
                    function () {

                        createParticles();

                    },
                    350
                );

        }
    );


    /* =====================================================
       DEBUG
    ===================================================== */

    window.CounterMod =
        {

            data: DATA,

            goTo: showPage,

            openMenu: openMenu,

            closeMenu: closeMenu

        };


})();
