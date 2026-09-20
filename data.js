<!DOCTYPE html>
<html lang="fa" dir="rtl">

<head>

<meta charset="UTF-8">

<meta name="viewport"
content="width=device-width,initial-scale=1,viewport-fit=cover">

<meta name="theme-color" content="#03080f">

<title>مدیریت کانتر مود</title>

<style>

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    -webkit-tap-highlight-color:transparent;
}

html{
    scroll-behavior:smooth;
}

body{

    min-height:100vh;

    color:#fff;

    font-family:
        Tahoma,
        Arial,
        sans-serif;

    background:
        radial-gradient(
            circle at 10% 10%,
            rgba(35,150,220,.14),
            transparent 32%
        ),
        radial-gradient(
            circle at 90% 90%,
            rgba(20,100,170,.12),
            transparent 35%
        ),
        #03080f;

    overflow-x:hidden;
}

/* =========================================
   PARTICLES
========================================= */

#particles{
    position:fixed;
    inset:0;
    z-index:0;
    pointer-events:none;
    overflow:hidden;
}

.particle{

    position:absolute;

    bottom:-40px;

    border-radius:50%;

    background:
        radial-gradient(
            circle at 35% 30%,
            rgba(255,255,255,.95),
            rgba(60,185,245,.65) 35%,
            rgba(20,100,180,.08) 72%,
            transparent
        );

    box-shadow:
        0 0 20px rgba(35,160,230,.18);

    animation:
        particleMove linear infinite;
}

@keyframes particleMove{

    0%{
        transform:
            translate3d(0,30px,0)
            scale(.7);
        opacity:0;
    }

    12%{
        opacity:.7;
    }

    50%{
        transform:
            translate3d(40px,-55vh,0)
            scale(1);
    }

    85%{
        opacity:.35;
    }

    100%{
        transform:
            translate3d(-35px,-115vh,0)
            scale(.75);
        opacity:0;
    }
}

/* =========================================
   COMMON
========================================= */

button,
input,
textarea,
select{
    font-family:inherit;
}

button{
    cursor:pointer;
}

.hidden{
    display:none !important;
}

/* =========================================
   LOGIN
========================================= */

.login-screen{

    position:relative;

    z-index:5;

    min-height:100vh;

    display:flex;

    align-items:center;

    justify-content:center;

    padding:20px;
}

.login-card{

    width:min(460px,100%);

    padding:38px 28px;

    border-radius:30px;

    background:
        linear-gradient(
            145deg,
            rgba(255,255,255,.11),
            rgba(255,255,255,.035)
        );

    border:
        1px solid rgba(255,255,255,.14);

    box-shadow:
        0 35px 100px rgba(0,0,0,.55),
        inset 0 1px rgba(255,255,255,.13);

    backdrop-filter:
        blur(30px)
        saturate(150%);

    -webkit-backdrop-filter:
        blur(30px)
        saturate(150%);
}

.login-logo{

    width:105px;
    height:105px;

    display:block;

    margin:0 auto 20px;

    object-fit:cover;

    border-radius:50%;

    padding:5px;

    border:
        2px solid rgba(80,195,255,.7);

    box-shadow:
        0 0 40px rgba(35,155,235,.25);
}

.login-title{

    text-align:center;

    font-size:27px;

    font-weight:800;

    margin-bottom:8px;
}

.login-description{

    text-align:center;

    color:
        rgba(210,230,245,.62);

    font-size:13px;

    line-height:2;

    margin-bottom:25px;
}

.input{

    width:100%;

    min-height:52px;

    padding:12px 15px;

    color:#fff;

    background:
        rgba(0,0,0,.25);

    border:
        1px solid rgba(255,255,255,.12);

    border-radius:15px;

    outline:none;

    transition:.2s;

    margin-bottom:12px;
}

.input:focus{

    border-color:
        rgba(75,190,250,.55);

    box-shadow:
        0 0 0 4px
        rgba(45,165,230,.07);
}

textarea.input{
    min-height:100px;
    resize:vertical;
}

.login-button{

    width:100%;

    height:55px;

    border-radius:15px;

    border:
        1px solid rgba(100,205,255,.32);

    color:#fff;

    font-weight:800;

    background:
        linear-gradient(
            135deg,
            rgba(40,160,230,.55),
            rgba(20,80,130,.55)
        );

    box-shadow:
        0 12px 30px rgba(0,0,0,.25);

    transition:.2s;
}

.login-button:hover{
    transform:translateY(-2px);
}

.login-error{

    min-height:22px;

    margin-top:12px;

    text-align:center;

    color:#ff8996;

    font-size:13px;
}

.back-link{

    display:block;

    text-align:center;

    margin-top:20px;

    color:
        rgba(205,225,240,.55);

    text-decoration:none;

    font-size:13px;
}

/* =========================================
   ADMIN
========================================= */

.admin{

    position:relative;

    z-index:2;

    width:min(1250px,calc(100% - 24px));

    margin:12px auto 35px;

    display:none;
}

.header{

    padding:20px;

    margin-bottom:15px;

    border-radius:25px;

    background:
        linear-gradient(
            145deg,
            rgba(255,255,255,.10),
            rgba(255,255,255,.035)
        );

    border:
        1px solid rgba(255,255,255,.12);

    box-shadow:
        0 25px 70px rgba(0,0,0,.35),
        inset 0 1px rgba(255,255,255,.1);

    backdrop-filter:blur(25px);

    -webkit-backdrop-filter:blur(25px);

    display:flex;

    justify-content:space-between;

    align-items:center;

    gap:15px;
}

.header-title{

    font-size:25px;

    font-weight:900;
}

.header-subtitle{

    margin-top:6px;

    color:
        rgba(210,230,245,.5);

    font-size:12px;
}

.header-actions{

    display:flex;

    gap:8px;

    flex-wrap:wrap;
}

.btn{

    border:
        1px solid rgba(255,255,255,.12);

    border-radius:12px;

    padding:
        10px 14px;

    color:#fff;

    background:
        rgba(255,255,255,.06);

    transition:.2s;
}

.btn:hover{
    background:
        rgba(255,255,255,.11);

    transform:translateY(-1px);
}

.btn-blue{

    background:
        linear-gradient(
            135deg,
            rgba(40,160,230,.5),
            rgba(20,90,140,.45)
        );

    border-color:
        rgba(90,195,245,.3);
}

.btn-danger{

    background:
        rgba(210,55,70,.15);

    border-color:
        rgba(255,90,105,.25);

    color:#ffabb4;
}

.btn-green{

    background:
        rgba(35,170,105,.15);

    border-color:
        rgba(65,210,145,.25);

    color:#a6f2ce;
}

/* =========================================
   STATS
========================================= */

.stats{

    display:grid;

    grid-template-columns:
        repeat(4,1fr);

    gap:12px;

    margin-bottom:15px;
}

.stat{

    padding:18px;

    border-radius:20px;

    background:
        rgba(255,255,255,.055);

    border:
        1px solid rgba(255,255,255,.08);
}

.stat-number{

    font-size:27px;

    font-weight:900;

    margin-bottom:5px;
}

.stat-label{

    color:
        rgba(210,230,245,.5);

    font-size:12px;
}

/* =========================================
   NAV
========================================= */

.tabs{

    display:flex;

    gap:8px;

    flex-wrap:wrap;

    margin-bottom:15px;

    padding:8px;

    border-radius:19px;

    background:
        rgba(255,255,255,.045);

    border:
        1px solid rgba(255,255,255,.08);
}

.tab{

    border:0;

    color:
        rgba(220,235,245,.65);

    background:
        transparent;

    padding:
        11px 15px;

    border-radius:12px;
}

.tab.active{

    color:#fff;

    background:
        rgba(55,170,225,.18);

    border:
        1px solid rgba(80,190,240,.2);
}

/* =========================================
   SECTIONS
========================================= */

.section{

    display:none;

    padding:20px;

    border-radius:24px;

    background:
        linear-gradient(
            145deg,
            rgba(255,255,255,.09),
            rgba(255,255,255,.035)
        );

    border:
        1px solid rgba(255,255,255,.1);

    box-shadow:
        0 25px 70px rgba(0,0,0,.3);

    backdrop-filter:blur(24px);

    -webkit-backdrop-filter:blur(24px);
}

.section.active{
    display:block;
}

.section-head{

    display:flex;

    justify-content:space-between;

    align-items:center;

    gap:10px;

    margin-bottom:17px;

    flex-wrap:wrap;
}

.section-title{

    font-size:20px;

    font-weight:900;
}

/* =========================================
   CARDS
========================================= */

.items{

    display:grid;

    grid-template-columns:
        repeat(2,1fr);

    gap:12px;
}

.item{

    padding:14px;

    border-radius:18px;

    background:
        rgba(0,0,0,.16);

    border:
        1px solid rgba(255,255,255,.08);

    display:flex;

    gap:13px;

    align-items:center;
}

.item-image{

    width:85px;
    height:85px;

    flex:none;

    object-fit:cover;

    border-radius:14px;

    border:
        1px solid rgba(255,255,255,.1);

    background:#07111d;
}

.item-info{

    min-width:0;

    flex:1;
}

.item-title{

    font-size:15px;

    font-weight:800;

    margin-bottom:7px;

    overflow:hidden;

    text-overflow:ellipsis;

    white-space:nowrap;
}

.item-url{

    color:
        rgba(180,220,240,.45);

    font-size:10px;

    direction:ltr;

    text-align:right;

    overflow:hidden;

    text-overflow:ellipsis;

    white-space:nowrap;

    margin-bottom:10px;
}

.item-actions{

    display:flex;

    gap:6px;

    flex-wrap:wrap;
}

.small-btn{

    padding:
        7px 10px;

    border-radius:9px;

    border:
        1px solid rgba(255,255,255,.1);

    color:#fff;

    background:
        rgba(255,255,255,.055);

    font-size:11px;
}

.small-btn.edit{
    color:#a9e6ff;
}

.small-btn.delete{
    color:#ffabb4;
}

/* =========================================
   FORM
========================================= */

.form-grid{

    display:grid;

    grid-template-columns:
        repeat(2,1fr);

    gap:12px;
}

.form-group{

    display:flex;

    flex-direction:column;

    gap:7px;
}

.form-group.full{
    grid-column:1/-1;
}

.form-label{

    color:
        rgba(220,235,245,.65);

    font-size:12px;
}

.form-actions{

    margin-top:16px;

    display:flex;

    gap:8px;

    flex-wrap:wrap;
}

/* =========================================
   MODAL
========================================= */

.modal{

    position:fixed;

    inset:0;

    z-index:100;

    display:none;

    align-items:center;

    justify-content:center;

    padding:15px;

    background:
        rgba(0,0,0,.7);

    backdrop-filter:blur(8px);

    -webkit-backdrop-filter:blur(8px);
}

.modal.show{
    display:flex;
}

.modal-card{

    width:min(650px,100%);

    max-height:
        calc(100vh - 30px);

    overflow:auto;

    padding:22px;

    border-radius:25px;

    background:
        linear-gradient(
            145deg,
            #101c28,
            #07111a
        );

    border:
        1px solid rgba(255,255,255,.13);

    box-shadow:
        0 35px 100px rgba(0,0,0,.65);
}

.modal-title{

    font-size:20px;

    font-weight:900;

    margin-bottom:18px;
}

.modal-actions{

    display:flex;

    gap:8px;

    margin-top:16px;
}

/* =========================================
   EMPTY
========================================= */

.empty{

    padding:40px 20px;

    text-align:center;

    color:
        rgba(215,235,245,.45);

    border:
        1px dashed rgba(255,255,255,.1);

    border-radius:18px;
}

/* =========================================
   TOAST
========================================= */

.toast{

    position:fixed;

    z-index:300;

    left:50%;

    bottom:20px;

    transform:
        translate(-50%,20px);

    opacity:0;

    pointer-events:none;

    padding:
        12px 18px;

    border-radius:13px;

    background:
        rgba(15,28,40,.95);

    border:
        1px solid rgba(90,190,240,.25);

    box-shadow:
        0 15px 45px rgba(0,0,0,.4);

    font-size:12px;

    transition:.25s;
}

.toast.show{

    opacity:1;

    transform:
        translate(-50%,0);
}

/* =========================================
   MOBILE
========================================= */

@media(max-width:800px){

    .stats{
        grid-template-columns:
            repeat(2,1fr);
    }

    .items{
        grid-template-columns:1fr;
    }

    .form-grid{
        grid-template-columns:1fr;
    }

    .form-group.full{
        grid-column:auto;
    }

}

@media(max-width:600px){

    .admin{
        width:
            calc(100% - 12px);
    }

    .header{
        align-items:flex-start;

        flex-direction:column;
    }

    .header-actions{
        width:100%;
    }

    .header-actions .btn{
        flex:1;
    }

    .stats{
        grid-template-columns:1fr 1fr;
    }

    .section{
        padding:14px;
    }

    .item{
        align-items:flex-start;
    }

    .item-image{
        width:70px;
        height:70px;
    }

}

</style>

</head>

<body>

<div id="particles"></div>


<!-- ==================================================
     LOGIN
================================================== -->

<div id="loginScreen" class="login-screen">

    <div class="login-card">

        <img
            class="login-logo"
            src="https://cdn.imgurl.ir/uploads/x012403_InShot_20260625_163753784.png"
            alt="کانتر مود"
        >

        <h1 class="login-title">
            پنل مدیریت
        </h1>

        <p class="login-description">
            مدیریت حرفه‌ای سایت کانتر مود
            <br>
            رمز مدیریت را وارد کنید.
        </p>

        <input
            id="password"
            class="input"
            type="password"
            placeholder="رمز مدیریت"
            autocomplete="current-password"
        >

        <button
            id="loginButton"
            class="login-button"
            type="button"
        >
            ورود به پنل مدیریت
        </button>

        <div
            id="loginError"
            class="login-error"
        ></div>

        <a
            class="back-link"
            href="index.html"
        >
            ← بازگشت به سایت
        </a>

    </div>

</div>


<!-- ==================================================
     ADMIN
================================================== -->

<div id="admin" class="admin">

    <header class="header">

        <div>

            <div class="header-title">
                مدیریت کانتر مود
            </div>

            <div class="header-subtitle">
                مدیریت کامل محتوای سایت
            </div>

        </div>

        <div class="header-actions">

            <button
                class="btn btn-green"
                id="saveButton"
            >
                💾 ذخیره
            </button>

            <button
                class="btn"
                id="exportButton"
            >
                📤 خروجی
            </button>

            <button
                class="btn"
                id="importButton"
            >
                📥 ورود اطلاعات
            </button>

            <button
                class="btn btn-danger"
                id="logoutButton"
            >
                خروج
            </button>

        </div>

    </header>


    <!-- STATS -->

    <div class="stats">

        <div class="stat">

            <div
                class="stat-number"
                id="modsCount"
            >
                0
            </div>

            <div class="stat-label">
                تعداد مودها
            </div>

        </div>

        <div class="stat">

            <div
                class="stat-number"
                id="appsCount"
            >
                0
            </div>

            <div class="stat-label">
                تعداد برنامه‌ها
            </div>

        </div>

        <div class="stat">

            <div
                class="stat-number"
                id="visitorsCount"
            >
                0
            </div>

            <div class="stat-label">
                بازدید محلی
            </div>

        </div>

        <div class="stat">

            <div
                class="stat-number"
                id="changesCount"
            >
                0
            </div>

            <div class="stat-label">
                تغییرات ذخیره‌شده
            </div>

        </div>

    </div>


    <!-- TABS -->

    <div class="tabs">

        <button
            class="tab active"
            data-tab="mods"
        >
            🎮 مودها
        </button>

        <button
            class="tab"
            data-tab="apps"
        >
            📱 برنامه‌ها
        </button>

        <button
            class="tab"
            data-tab="site"
        >
            ⚙️ اطلاعات سایت
        </button>

        <button
            class="tab"
            data-tab="tutorial"
        >
            🎬 آموزش
        </button>

        <button
            class="tab"
            data-tab="backup"
        >
            💾 پشتیبان
        </button>

    </div>


    <!-- ==================================================
         MODS
    ================================================== -->

    <section
        id="section-mods"
        class="section active"
    >

        <div class="section-head">

            <div class="section-title">
                مدیریت مودها
            </div>

            <button
                class="btn btn-blue"
                id="addModButton"
            >
                + افزودن مود
            </button>

        </div>

        <div
            id="modsList"
            class="items"
        ></div>

    </section>


    <!-- ==================================================
         APPS
    ================================================== -->

    <section
        id="section-apps"
        class="section"
    >

        <div class="section-head">

            <div class="section-title">
                مدیریت برنامه‌ها
            </div>

            <button
                class="btn btn-blue"
                id="addAppButton"
            >
                + افزودن برنامه
            </button>

        </div>

        <div
            id="appsList"
            class="items"
        ></div>

    </section>


    <!-- ==================================================
         SITE
    ================================================== -->

    <section
        id="section-site"
        class="section"
    >

        <div class="section-head">

            <div class="section-title">
                اطلاعات و لینک‌های سایت
            </div>

        </div>

        <div class="form-grid">

            <div class="form-group">

                <label class="form-label">
                    عنوان سایت
                </label>

                <input
                    class="input"
                    id="siteTitle"
                >

            </div>

            <div class="form-group">

                <label class="form-label">
                    زیرعنوان
                </label>

                <input
                    class="input"
                    id="siteSubtitle"
                >

            </div>

            <div class="form-group">

                <label class="form-label">
                    نام سازنده
                </label>

                <input
                    class="input"
                    id="siteCreator"
                >

            </div>

            <div class="form-group">

                <label class="form-label">
                    تصویر اصلی سایت
                </label>

                <input
                    class="input"
                    id="siteImage"
                    dir="ltr"
                >

            </div>

            <div class="form-group">

                <label class="form-label">
                    لینک کانال روبیکا
                </label>

                <input
                    class="input"
                    id="siteChannel"
                    dir="ltr"
                >

            </div>

            <div class="form-group">

                <label class="form-label">
                    لینک سازنده
                </label>

                <input
                    class="input"
                    id="siteCreatorUrl"
                    dir="ltr"
                >

            </div>

            <div class="form-group">

                <label class="form-label">
                    لینک تلگرام
                </label>

                <input
                    class="input"
                    id="siteTelegram"
                    dir="ltr"
                >

            </div>

            <div class="form-group">

                <label class="form-label">
                    لینک بله
                </label>

                <input
                    class="input"
                    id="siteBale"
                    dir="ltr"
                >

            </div>

            <div class="form-group">

                <label class="form-label">
                    لینک آپارات
                </label>

                <input
                    class="input"
                    id="siteAparat"
                    dir="ltr"
                >

            </div>

            <div class="form-group">

                <label class="form-label">
                    لینک سایت
                </label>

                <input
                    class="input"
                    id="siteWebsite"
                    dir="ltr"
                >

            </div>

            <div class="form-group full">

                <label class="form-label">
                    لینک گروه روبیکا
                </label>

                <input
                    class="input"
                    id="siteGroup"
                    dir="ltr"
                >

            </div>

            <div class="form-group full">

                <label class="form-label">
                    لینک هوش مصنوعی
                </label>

                <input
                    class="input"
                    id="siteAI"
                    dir="ltr"
                >

            </div>

        </div>

        <div class="form-actions">

            <button
                class="btn btn-green"
                id="saveSiteButton"
            >
                💾 ذخیره اطلاعات سایت
            </button>

        </div>

    </section>


    <!-- ==================================================
         TUTORIAL
    ================================================== -->

    <section
        id="section-tutorial"
        class="section"
    >

        <div class="section-head">

            <div class="section-title">
                مدیریت آموزش
            </div>

        </div>

        <div class="form-grid">

            <div class="form-group full">

                <label class="form-label">
                    لینک iframe آپارات
                </label>

                <input
                    class="input"
                    id="tutorialAparat"
                    dir="ltr"
                >

            </div>

            <div class="form-group full">

                <label class="form-label">
                    لینک ویدیوی MP4
                </label>

                <input
                    class="input"
                    id="tutorialMP4"
                    dir="ltr"
                >

            </div>

        </div>

        <div class="form-actions">

            <button
                class="btn btn-green"
                id="saveTutorialButton"
            >
                💾 ذخیره آموزش
            </button>

        </div>

    </section>


    <!-- ==================================================
         BACKUP
    ================================================== -->

    <section
        id="section-backup"
        class="section"
    >

        <div class="section-head">

            <div class="section-title">
                پشتیبان اطلاعات
            </div>

        </div>

        <p style="
            color:rgba(215,235,245,.58);
            font-size:13px;
            line-height:2;
            margin-bottom:15px;
        ">

            از این قسمت می‌توانی اطلاعات فعلی سایت را
            به صورت فایل JSON ذخیره کنی یا یک نسخه پشتیبان
            قبلی را دوباره وارد کنی.

        </p>

        <div class="form-actions">

            <button
                class="btn btn-blue"
                id="backupExport"
            >
                📤 دریافت فایل پشتیبان
            </button>

            <button
                class="btn"
                id="backupImport"
            >
                📥 وارد کردن پشتیبان
            </button>

            <button
                class="btn btn-danger"
                id="resetButton"
            >
                ♻️ بازگردانی اطلاعات اولیه
            </button>

        </div>

        <input
            type="file"
            id="fileInput"
            accept=".json,application/json"
            class="hidden"
        >

    </section>

</div>


<!-- ==================================================
     MODAL
================================================== -->

<div
    id="modal"
    class="modal"
>

    <div class="modal-card">

        <div
            id="modalTitle"
            class="modal-title"
        >
            افزودن
        </div>

        <div class="form-grid">

            <div class="form-group full">

                <label class="form-label">
                    عنوان
                </label>

                <input
                    id="itemTitle"
                    class="input"
                >

            </div>

            <div class="form-group full">

                <label class="form-label">
                    لینک تصویر
                </label>

                <input
                    id="itemImage"
                    class="input"
                    dir="ltr"
                >

            </div>

            <div class="form-group full">

                <label class="form-label">
                    لینک دانلود / لینک مطلب
                </label>

                <input
                    id="itemUrl"
                    class="input"
                    dir="ltr"
                >

            </div>

        </div>

        <div class="modal-actions">

            <button
                class="btn btn-green"
                id="modalSave"
            >
                ذخیره
            </button>

            <button
                class="btn"
                id="modalCancel"
            >
                لغو
            </button>

        </div>

    </div>

</div>


<div
    id="toast"
    class="toast"
></div>


<script>

/* ==================================================
   اطلاعات اولیه
================================================== */

const DEFAULT_DATA = {

    site:{
        title:"کانتر مود",
        subtitle:"کانتر مود روبیکا",
        creator:"ابوالفضل کاظمی",

        mainImage:
        "https://cdn.imgurl.ir/uploads/x012403_InShot_20260625_163753784.png",

        aiUrl:
        "https://holobot.ir/s/html/هوش%20مصنوعی%20آفلاین.html",

        channel:
        "https://rubika.ir/Counter2Mod",

        creatorUrl:
        "https://rubika.ir/Abolfazl_Kazemi_SFG",

        telegram:
        "https://t.me/Counter2Mod",

        bale:
        "https://ble.ir/Countermod",

        aparat:
        "https://www.aparat.com/Abolfazl_Hakerr/shorts",

        website:
        "https://B2n.ir/Counter2Mod",

        group:
        "https://rubika.ir/joing/BAFCGFBCE0SVOLBSWKUNPCLEJNAMITSH"
    },

    tutorial:{
        aparat:
        "https://www.aparat.com/video/video/embed/videohash/rlk4a91/vt/frame",

        mp4:
        "https://cdn.imgurl.ir/uploads/p041630_InShot_20260601_025037109.mp4"
    },

    downloads: [

        {
            id:1,
            title:"کانتر۲ مود منو",
            image:"https://cdn.imgurl.ir/uploads/e746382_IMG_20260808_025040_118.jpg",
            url:"https://rubika.ir/Counter2Mod/BGGHEFCCGGEEHABG"
        },

        {
            id:2,
            title:"کانتر۲ مود منو FL",
            image:"https://cdn.imgurl.ir/uploads/g317464_IMG_20260808_025040_118.jpg",
            url:"https://rubika.ir/Counter2Mod/BGHHBEGBJCFFIABG"
        },

        {
            id:3,
            title:"کانتر۲ مود منو دوتایی جدید",
            image:"https://cdn.imgurl.ir/uploads/a959848_IMG_20260808_025040_118.jpg",
            url:"https://rubika.ir/Counter2Mod/BGIFJAHFDCFBEABG"
        },

        {
            id:4,
            title:"کانتر۲ مود منو جدید",
            image:"https://cdn.imgurl.ir/uploads/f81909_IMG_20260808_025040_118.jpg",
            url:"https://rubika.ir/Counter2Mod/BGIFJCIFEHDGHABG"
        },

        {
            id:5,
            title:"کانتر۲ مود منو دوتایی بدون دیتا",
            image:"https://cdn.imgurl.ir/uploads/b23474_IMG_20260808_025040_118.jpg",
            url:"https://rubika.ir/Counter2Mod/BGIGECDHJDIAEABG"
        },

        {
            id:6,
            title:"کانتر۲ مود منو خفن",
            image:"https://cdn.imgurl.ir/uploads/r5684_IMG_20260808_025040_118.jpg",
            url:"https://rubika.ir/Counter2Mod/BGIIDHGHIDCDBABG"
        },

        {
            id:7,
            title:"کانتر۲ مود منو FL تکی",
            image:"https://cdn.imgurl.ir/uploads/j57884_IMG_20260808_025040_118.jpg",
            url:"https://rubika.ir/Counter2Mod/BGIIDJEHJCJHJABG"
        },

        {
            id:8,
            title:"مود منو بدون دیتا با قابلیت جدید",
            image:"https://cdn.imgurl.ir/uploads/x476408_IMG_20260808_025040_118.jpg",
            url:"https://rubika.ir/Counter2Mod/BGIIEHBICCBJAABG"
        },

        {
            id:9,
            title:"کانتر۲ مود منو",
            image:"https://cdn.imgurl.ir/uploads/r961755_IMG_20260808_025040_118.jpg",
            url:"https://rubika.ir/Counter2Mod/BGIIFIGIHBGBCABG"
        },

        {
            id:10,
            title:"کانتر۲ مود منو",
            image:"https://cdn.imgurl.ir/uploads/q598661_IMG_20260808_025040_118.jpg",
            url:"https://rubika.ir/Counter2Mod/BGJBDGGCHHDCAABG"
        },

        {
            id:11,
            title:"کانتر۲ مود منو جدید",
            image:"https://cdn.imgurl.ir/uploads/t56451_IMG_20260808_025040_118.jpg",
            url:"https://rubika.ir/Counter2Mod/BGJBDHICIBHHDABG"
        },

        {
            id:12,
            title:"کانتر۲ مود منو بدون لگ",
            image:"https://cdn.imgurl.ir/uploads/l71334_IMG_20260808_025040_118.jpg",
            url:"https://rubika.ir/Counter2Mod/BGJBEFBDBGFDHABG"
        },

        {
            id:13,
            title:"کانتر۲ مود منو",
            image:"https://cdn.imgurl.ir/uploads/h2234_IMG_20260808_025040_118.jpg",
            url:"https://rubika.ir/Counter2Mod/BGJBGHIECBFCGABG"
        },

        {
            id:14,
            title:"کانتر۲ مود منو دیتا دار",
            image:"https://cdn.imgurl.ir/uploads/i110244_IMG_20260808_025040_118.jpg",
            url:"https://rubika.ir/Counter2Mod/BGJEIHCADDDDHABG"
        },

        {
            id:15,
            title:"کانتر۲ مود منو خفن",
            image:"https://cdn.imgurl.ir/uploads/i82081_IMG_20260808_025040_118.jpg",
            url:"https://rubika.ir/Counter2Mod/BGJEIIDAEAGCDABG"
        },

        {
            id:16,
            title:"کانتر۲ مود منو فارسی بدون دیتا",
            image:"https://cdn.imgurl.ir/uploads/q320766_IMG_20260808_025040_118.jpg",
            url:"https://rubika.ir/Counter2Mod/BGJEJHGAIFFEEABG"
        },

        {
            id:17,
            title:"کانتر۲ مود منو",
            image:"https://cdn.imgurl.ir/uploads/n84727_IMG_20260808_025040_118.jpg",
            url:"https://rubika.ir/Counter2Mod/BGJHHJIFCAFFDABG"
        },

        {
            id:18,
            title:"کانتر۲ مود شده بدون منو",
            image:"https://cdn.imgurl.ir/uploads/l460626_IMG_20260808_025040_118.jpg",
            url:"https://rubika.ir/Counter2Mod/BGJHIIAFGDAIJABG"
        },

        {
            id:19,
            title:"کانتر۲ مود منو",
            image:"https://cdn.imgurl.ir/uploads/z19771_IMG_20260808_025040_118.jpg",
            url:"https://rubika.ir/Counter2Mod/BGJHJBCFIDAHDABG"
        },

        {
            id:20,
            title:"کانتر۲ مود منو عالی",
            image:"https://cdn.imgurl.ir/uploads/v898901_IMG_20260808_025040_118.jpg",
            url:"https://rubika.ir/Counter2Mod/BHAAHJDADEDFJABG"
        },

        {
            id:21,
            title:"کانتر۲ مود منو",
            image:"https://cdn.imgurl.ir/uploads/p742_IMG_20260808_025040_118.jpg",
            url:"https://rubika.ir/Counter2Mod/BHJJIEDHAJFEIABG"
        },

        {
            id:22,
            title:"کانتر۲ مود منو جدید خفن",
            image:"https://cdn.imgurl.ir/uploads/o448790_IMG_20260808_025040_118.jpg",
            url:"https://rubika.ir/Counter2Mod/BIAAFFHAFGHEFABG"
        }

    ],

    apps:[

        {
            id:1,
            title:"سورس ساز حرفه‌ای",
            image:
            "https://cdn.imgurl.ir/uploads/j13307_InShot_20260822_153149438.png",
            url:
            "https://cdn.imgurl.ir/uploads/b590319___.zip"
        },

        {
            id:2,
            title:"کد ساز سایت",
            image:
            "https://cdn.imgurl.ir/uploads/v069309_InShot_20260907_003520819.png",
            url:
            "https://cdn.imgurl.ir/uploads/v73960___.zip"
        }

    ]

};


/* ==================================================
   ابزارها
================================================== */

const STORAGE_KEY =
    "counter_mod_site_data";

const CHANGES_KEY =
    "counter_mod_changes";


let data;

let editingType = null;

let editingId = null;


/* ==================================================
   کپی امن اطلاعات
================================================== */

function clone(obj){

    return JSON.parse(
        JSON.stringify(obj)
    );

}


/* ==================================================
   بارگذاری اطلاعات
================================================== */

function loadData(){

    try{

        const saved =
            localStorage.getItem(
                STORAGE_KEY
            );

        if(saved){

            const parsed =
                JSON.parse(saved);

            data = Object.assign(
                clone(DEFAULT_DATA),
                parsed
            );

            data.site =
                Object.assign(
                    clone(DEFAULT_DATA.site),
                    parsed.site || {}
                );

            data.tutorial =
                Object.assign(
                    clone(DEFAULT_DATA.tutorial),
                    parsed.tutorial || {}
                );

            data.downloads =
                Array.isArray(parsed.downloads)
                    ? parsed.downloads
                    : clone(DEFAULT_DATA.downloads);

            data.apps =
                Array.isArray(parsed.apps)
                    ? parsed.apps
                    : clone(DEFAULT_DATA.apps);

        }else{

            data =
                clone(DEFAULT_DATA);

        }

    }catch(error){

        console.error(error);

        data =
            clone(DEFAULT_DATA);

    }

}


/* ==================================================
   ذخیره
================================================== */

function saveData(showMessage=true){

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(data)
    );

    let changes =
        parseInt(
            localStorage.getItem(CHANGES_KEY) || "0",
            10
        );

    changes++;

    localStorage.setItem(
        CHANGES_KEY,
        String(changes)
    );

    updateStats();

    if(showMessage){

        toast(
            "تغییرات با موفقیت ذخیره شد."
        );

    }

}


/* ==================================================
   Toast
================================================== */

let toastTimer;

function toast(message){

    const box =
        document.getElementById("toast");

    box.textContent =
        message;

    box.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer =
        setTimeout(
            function(){

                box.classList.remove("show");

            },
            2500
        );

}


/* ==================================================
   Login
================================================== */

const ADMIN_PASSWORD =
    "Abolfazl1389";


function login(){

    const input =
        document.getElementById("password");

    const error =
        document.getElementById("loginError");

    if(
        input.value ===
        ADMIN_PASSWORD
    ){

        sessionStorage.setItem(
            "counter_mod_admin",
            "true"
        );

        document.getElementById(
            "loginScreen"
        ).style.display = "none";

        document.getElementById(
            "admin"
        ).style.display = "block";

        loadData();

        renderAll();

    }else{

        error.textContent =
            "رمز مدیریت اشتباه است.";

        input.value = "";

        input.focus();

    }

}


document.getElementById(
    "loginButton"
).addEventListener(
    "click",
    login
);


document.getElementById(
    "password"
).addEventListener(
    "keydown",
    function(e){

        if(e.key === "Enter"){

            e.preventDefault();

            login();

        }

    }
);


/* ==================================================
   Logout
================================================== */

document.getElementById(
    "logoutButton"
).addEventListener(
    "click",
    function(){

        sessionStorage.removeItem(
            "counter_mod_admin"
        );

        location.reload();

    }
);


/* ==================================================
   Render All
================================================== */

function renderAll(){

    renderMods();

    renderApps();

    renderSite();

    renderTutorial();

    updateStats();

}


/* ==================================================
   Stats
================================================== */

function updateStats(){

    document.getElementById(
        "modsCount"
    ).textContent =
        data.downloads.length;


    document.getElementById(
        "appsCount"
    ).textContent =
        data.apps.length;


    document.getElementById(
        "visitorsCount"
    ).textContent =
        localStorage.getItem(
            "counter_mod_visitors"
        ) || "0";


    document.getElementById(
        "changesCount"
    ).textContent =
        localStorage.getItem(
            CHANGES_KEY
        ) || "0";

}


/* ==================================================
   Render Mods
================================================== */

function renderMods(){

    const list =
        document.getElementById(
            "modsList"
        );

    if(!data.downloads.length){

        list.innerHTML =
            '<div class="empty">هنوز هیچ مودی ثبت نشده است.</div>';

        return;

    }

    list.innerHTML =
        data.downloads.map(
            function(item){

                return `

                <div class="item">

                    <img
                        class="item-image"
                        src="${escapeAttr(item.image)}"
                        onerror="this.style.opacity='.25'"
                    >

                    <div class="item-info">

                        <div class="item-title">
                            ${escapeHtml(item.title)}
                        </div>

                        <div class="item-url">
                            ${escapeHtml(item.url)}
                        </div>

                        <div class="item-actions">

                            <button
                                class="small-btn edit"
                                onclick="editItem('downloads',${item.id})"
                            >
                                ✏️ ویرایش
                            </button>

                            <button
                                class="small-btn delete"
                                onclick="deleteItem('downloads',${item.id})"
                            >
                                🗑 حذف
                            </button>

                        </div>

                    </div>

                </div>

                `;

            }
        ).join("");

}


/* ==================================================
   Render Apps
================================================== */

function renderApps(){

    const list =
        document.getElementById(
            "appsList"
        );

    if(!data.apps.length){

        list.innerHTML =
            '<div class="empty">هنوز هیچ برنامه‌ای ثبت نشده است.</div>';

        return;

    }

    list.innerHTML =
        data.apps.map(
            function(item){

                return `

                <div class="item">

                    <img
                        class="item-image"
                        src="${escapeAttr(item.image)}"
                        onerror="this.style.opacity='.25'"
                    >

                    <div class="item-info">

                        <div class="item-title">
                            ${escapeHtml(item.title)}
                        </div>

                        <div class="item-url">
                            ${escapeHtml(item.url)}
                        </div>

                        <div class="item-actions">

                            <button
                                class="small-btn edit"
                                onclick="editItem('apps',${item.id})"
                            >
                                ✏️ ویرایش
                            </button>

                            <button
                                class="small-btn delete"
                                onclick="deleteItem('apps',${item.id})"
                            >
                                🗑 حذف
                            </button>

                        </div>

                    </div>

                </div>

                `;

            }
        ).join("");

}


/* ==================================================
   Escape
================================================== */

function escapeHtml(value){

    return String(value ?? "")
        .replace(/&/g,"&amp;")
        .replace(/</g,"&lt;")
        .replace(/>/g,"&gt;")
        .replace(/"/g,"&quot;")
        .replace(/'/g,"&#039;");

}


function escapeAttr(value){

    return escapeHtml(value);

}


/* ==================================================
   Modal
================================================== */

function openModal(type,id=null){

    editingType =
        type;

    editingId =
        id;

    const modal =
        document.getElementById("modal");

    const title =
        document.getElementById("modalTitle");

    const inputTitle =
        document.getElementById("itemTitle");

    const inputImage =
        document.getElementById("itemImage");

    const inputUrl =
        document.getElementById("itemUrl");


    if(id === null){

        title.textContent =
            type === "downloads"
                ? "افزودن مود جدید"
                : "افزودن برنامه جدید";

        inputTitle.value = "";

        inputImage.value = "";

        inputUrl.value = "";

    }else{

        const arr =
            data[type];

        const item =
            arr.find(
                function(x){
                    return Number(x.id) === Number(id);
                }
            );

        if(!item) return;

        title.textContent =
            type === "downloads"
                ? "ویرایش مود"
                : "ویرایش برنامه";

        inputTitle.value =
            item.title || "";

        inputImage.value =
            item.image || "";

        inputUrl.value =
            item.url || "";

    }

    modal.classList.add("show");

    setTimeout(
        function(){
            inputTitle.focus();
        },
        100
    );

}


document.getElementById(
    "modalCancel"
).addEventListener(
    "click",
    function(){

        document.getElementById(
            "modal"
        ).classList.remove("show");

    }
);


/* ==================================================
   Save Modal
================================================== */

document.getElementById(
    "modalSave"
).addEventListener(
    "click",
    function(){

        const title =
            document.getElementById(
                "itemTitle"
            ).value.trim();

        const image =
            document.getElementById(
                "itemImage"
            ).value.trim();

        const url =
            document.getElementById(
                "itemUrl"
            ).value.trim();


        if(!title){

            toast(
                "عنوان را وارد کن."
            );

            return;

        }


        if(!url){

            toast(
                "لینک را وارد کن."
            );

            return;

        }


        if(editingId === null){

            const ids =
                data[editingType]
                    .map(
                        x => Number(x.id) || 0
                    );

            const newId =
                ids.length
                    ? Math.max(...ids) + 1
                    : 1;

            data[editingType].push({

                id:newId,

                title:title,

                image:image,

                url:url

            });

            toast(
                "مورد جدید اضافه شد."
            );

        }else{

            const item =
                data[editingType].find(
                    x =>
                    Number(x.id) ===
                    Number(editingId)
                );

            if(item){

                item.title =
                    title;

                item.image =
                    image;

                item.url =
                    url;

            }

            toast(
                "اطلاعات ویرایش شد."
            );

        }


        saveData(false);

        renderAll();

        document.getElementById(
            "modal"
        ).classList.remove("show");

    }
);


/* ==================================================
   Add
================================================== */

document.getElementById(
    "addModButton"
).addEventListener(
    "click",
    function(){

        openModal(
            "downloads"
        );

    }
);


document.getElementById(
    "addAppButton"
).addEventListener(
    "click",
    function(){

        openModal(
            "apps"
        );

    }
);


/* ==================================================
   Edit
================================================== */

function editItem(type,id){

    openModal(
        type,
        id
    );

}


/* ==================================================
   Delete
================================================== */

function deleteItem(type,id){

    const item =
        data[type].find(
            x =>
            Number(x.id) ===
            Number(id)
        );

    if(!item) return;


    const ok =
        confirm(
            "آیا از حذف «" +
            item.title +
            "» مطمئنی؟"
        );

    if(!ok) return;


    data[type] =
        data[type].filter(
            x =>
            Number(x.id) !==
            Number(id)
        );


    saveData(false);

    renderAll();

    toast(
        "مورد حذف شد."
    );

}


/* ==================================================
   Site Form
================================================== */

function renderSite(){

    const s =
        data.site;

    document.getElementById("siteTitle").value =
        s.title || "";

    document.getElementById("siteSubtitle").value =
        s.subtitle || "";

    document.getElementById("siteCreator").value =
        s.creator || "";

    document.getElementById("siteImage").value =
        s.mainImage || "";

    document.getElementById("siteChannel").value =
        s.channel || "";

    document.getElementById("siteCreatorUrl").value =
        s.creatorUrl || "";

    document.getElementById("siteTelegram").value =
        s.telegram || "";

    document.getElementById("siteBale").value =
        s.bale || "";

    document.getElementById("siteAparat").value =
        s.aparat || "";

    document.getElementById("siteWebsite").value =
        s.website || "";

    document.getElementById("siteGroup").value =
        s.group || "";

    document.getElementById("siteAI").value =
        s.aiUrl || "";

}


/* ==================================================
   Save Site
================================================== */

document.getElementById(
    "saveSiteButton"
).addEventListener(
    "click",
    function(){

        data.site.title =
            document.getElementById(
                "siteTitle"
            ).value.trim();

        data.site.subtitle =
            document.getElementById(
                "siteSubtitle"
            ).value.trim();

        data.site.creator =
            document.getElementById(
                "siteCreator"
            ).value.trim();

        data.site.mainImage =
            document.getElementById(
                "siteImage"
            ).value.trim();

        data.site.channel =
            document.getElementById(
                "siteChannel"
            ).value.trim();

        data.site.creatorUrl =
            document.getElementById(
                "siteCreatorUrl"
            ).value.trim();

        data.site.telegram =
            document.getElementById(
                "siteTelegram"
            ).value.trim();

        data.site.bale =
            document.getElementById(
                "siteBale"
            ).value.trim();

        data.site.aparat =
            document.getElementById(
                "siteAparat"
            ).value.trim();

        data.site.website =
            document.getElementById(
                "siteWebsite"
            ).value.trim();

        data.site.group =
            document.getElementById(
                "siteGroup"
            ).value.trim();

        data.site.aiUrl =
            document.getElementById(
                "siteAI"
            ).value.trim();


        saveData();

    }
);


/* ==================================================
   Tutorial
================================================== */

function renderTutorial(){

    document.getElementById(
        "tutorialAparat"
    ).value =
        data.tutorial.aparat || "";

    document.getElementById(
        "tutorialMP4"
    ).value =
        data.tutorial.mp4 || "";

}


document.getElementById(
    "saveTutorialButton"
).addEventListener(
    "click",
    function(){

        data.tutorial.aparat =
            document.getElementById(
                "tutorialAparat"
            ).value.trim();

        data.tutorial.mp4 =
            document.getElementById(
                "tutorialMP4"
            ).value.trim();

        saveData();

    }
);


/* ==================================================
   Tabs
================================================== */

document.querySelectorAll(
    ".tab"
).forEach(
    function(tab){

        tab.addEventListener(
            "click",
            function(){

                document.querySelectorAll(
                    ".tab"
                ).forEach(
                    x =>
                    x.classList.remove(
                        "active"
                    )
                );

                document.querySelectorAll(
                    ".section"
                ).forEach(
                    x =>
                    x.classList.remove(
                        "active"
                    )
                );


                tab.classList.add(
                    "active"
                );


                const target =
                    document.getElementById(
                        "section-" +
                        tab.dataset.tab
                    );

                if(target){

                    target.classList.add(
                        "active"
                    );

                }

            }
        );

    }
);


/* ==================================================
   Save All
================================================== */

document.getElementById(
    "saveButton"
).addEventListener(
    "click",
    function(){

        saveData();

    }
);


/* ==================================================
   Export
================================================== */

function exportData(){

    const json =
        JSON.stringify(
            data,
            null,
            4
        );

    const blob =
        new Blob(
            [json],
            {
                type:
                "application/json"
            }
        );

    const url =
        URL.createObjectURL(blob);

    const a =
        document.createElement("a");

    a.href =
        url;

    a.download =
        "counter-mod-backup.json";

    document.body.appendChild(a);

    a.click();

    a.remove();

    URL.revokeObjectURL(url);

    toast(
        "فایل پشتیبان ساخته شد."
    );

}


document.getElementById(
    "exportButton"
).addEventListener(
    "click",
    exportData
);


document.getElementById(
    "backupExport"
).addEventListener(
    "click",
    exportData
);


/* ==================================================
   Import
================================================== */

function startImport(){

    document.getElementById(
        "fileInput"
    ).click();

}


document.getElementById(
    "importButton"
).addEventListener(
    "click",
    startImport
);


document.getElementById(
    "backupImport"
).addEventListener(
    "click",
    startImport
);


document.getElementById(
    "fileInput"
).addEventListener(
    "change",
    function(){

        const file =
            this.files[0];

        if(!file) return;


        const reader =
            new FileReader();


        reader.onload =
            function(){

                try{

                    const imported =
                        JSON.parse(
                            reader.result
                        );


                    if(
                        !imported ||
                        !imported.site ||
                        !Array.isArray(
                            imported.downloads
                        ) ||
                        !Array.isArray(
                            imported.apps
                        )
                    ){

                        throw new Error(
                            "invalid"
                        );

                    }


                    data =
                        imported;


                    saveData(false);

                    renderAll();

                    toast(
                        "اطلاعات با موفقیت وارد شد."
                    );


                }catch(error){

                    toast(
                        "فایل پشتیبان معتبر نیست."
                    );

                }


            };


        reader.readAsText(file);

        this.value = "";

    }
);


/* ==================================================
   Reset
================================================== */

document.getElementById(
    "resetButton"
).addEventListener(
    "click",
    function(){

        const ok =
            confirm(
                "تمام تغییرات محلی حذف و اطلاعات اولیه برگردانده شود؟"
            );

        if(!ok) return;


        data =
            clone(DEFAULT_DATA);


        localStorage.removeItem(
            STORAGE_KEY
        );


        saveData(false);

        renderAll();


        toast(
            "اطلاعات اولیه بازگردانی شد."
        );

    }
);


/* ==================================================
   Particles
================================================== */

const particles =
    document.getElementById(
        "particles"
    );


for(
    let i=0;
    i<28;
    i++
){

    const p =
        document.createElement(
            "span"
        );

    p.className =
        "particle";

    const size =
        3 +
        Math.random() * 7;

    p.style.width =
        size + "px";

    p.style.height =
        size + "px";

    p.style.left =
        Math.random() * 100 + "%";

    p.style.animationDuration =
        10 +
        Math.random() * 18 +
        "s";

    p.style.animationDelay =
        -Math.random() * 20 +
        "s";

    particles.appendChild(p);

}


/* ==================================================
   Start
================================================== */

if(
    sessionStorage.getItem(
        "counter_mod_admin"
    ) === "true"
){

    document.getElementById(
        "loginScreen"
    ).style.display =
        "none";

    document.getElementById(
        "admin"
    ).style.display =
        "block";

    loadData();

    renderAll();

}

</script>

</body>

</html>
