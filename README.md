<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<meta name="theme-color" content="#07111d">
<title>کانتر مود</title>

<style>
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    -webkit-tap-highlight-color:transparent;
}

html{scroll-behavior:smooth}

body{
    min-height:100vh;
    padding:82px 12px 30px;
    font-family:system-ui,-apple-system,"Segoe UI",Tahoma,sans-serif;
    color:#fff;
    background:
        radial-gradient(circle at 12% 8%,rgba(30,105,180,.30),transparent 27%),
        radial-gradient(circle at 88% 82%,rgba(12,55,105,.28),transparent 30%),
        radial-gradient(circle at 50% 45%,rgba(80,95,110,.10),transparent 40%),
        linear-gradient(145deg,#05080d 0%,#101720 45%,#07111d 72%,#03060a 100%);
    overflow-x:hidden;
}

/* =========================
   لایه‌های نوری پس‌زمینه
========================= */

body::before{
    content:"";
    position:fixed;
    inset:-20%;
    z-index:-10;
    pointer-events:none;
    background:
        radial-gradient(circle at 20% 30%,rgba(35,120,205,.09),transparent 20%),
        radial-gradient(circle at 80% 65%,rgba(20,85,155,.10),transparent 23%);
    animation:ambientMove 16s ease-in-out infinite alternate;
}

@keyframes ambientMove{
    from{transform:translate3d(-2%,-1%,0) scale(1)}
    to{transform:translate3d(2%,1%,0) scale(1.05)}
}

/* =========================
   توپک‌های متحرک
========================= */

.bg-particles{
    position:fixed;
    inset:0;
    z-index:-5;
    overflow:hidden;
    pointer-events:none;
}

.particle{
    position:absolute;
    width:15px;
    height:15px;
    border-radius:50%;
    background:
        radial-gradient(circle at 32% 28%,#ffffff 0 12%,#cce9ff 30%,#67b9ff 68%,#1765a8 100%);
    box-shadow:
        0 0 12px rgba(130,205,255,.75),
        0 0 28px rgba(55,145,220,.45),
        0 0 55px rgba(20,95,170,.25);
    animation:floatParticle linear infinite;
    will-change:transform,opacity;
}

.particle:nth-child(1){left:4%;top:15%;width:17px;height:17px;animation-duration:18s;animation-delay:-5s}
.particle:nth-child(2){left:13%;top:72%;width:22px;height:22px;animation-duration:24s;animation-delay:-12s}
.particle:nth-child(3){left:25%;top:35%;width:14px;height:14px;animation-duration:20s;animation-delay:-7s}
.particle:nth-child(4){left:37%;top:82%;width:20px;height:20px;animation-duration:27s;animation-delay:-16s}
.particle:nth-child(5){left:49%;top:18%;width:16px;height:16px;animation-duration:22s;animation-delay:-9s}
.particle:nth-child(6){left:61%;top:64%;width:23px;height:23px;animation-duration:25s;animation-delay:-14s}
.particle:nth-child(7){left:72%;top:29%;width:17px;height:17px;animation-duration:19s;animation-delay:-4s}
.particle:nth-child(8){left:83%;top:76%;width:21px;height:21px;animation-duration:26s;animation-delay:-18s}
.particle:nth-child(9){left:93%;top:42%;width:15px;height:15px;animation-duration:21s;animation-delay:-11s}
.particle:nth-child(10){left:32%;top:8%;width:19px;height:19px;animation-duration:29s;animation-delay:-20s}
.particle:nth-child(11){left:67%;top:91%;width:15px;height:15px;animation-duration:23s;animation-delay:-6s}
.particle:nth-child(12){left:90%;top:12%;width:22px;height:22px;animation-duration:28s;animation-delay:-17s}
.particle:nth-child(13){left:19%;top:49%;width:16px;height:16px;animation-duration:17s;animation-delay:-8s}
.particle:nth-child(14){left:56%;top:45%;width:20px;height:20px;animation-duration:31s;animation-delay:-23s}
.particle:nth-child(15){left:77%;top:58%;width:15px;height:15px;animation-duration:20s;animation-delay:-3s}
.particle:nth-child(16){left:8%;top:88%;width:18px;height:18px;animation-duration:25s;animation-delay:-10s}
.particle:nth-child(17){left:44%;top:54%;width:14px;height:14px;animation-duration:21s;animation-delay:-15s}
.particle:nth-child(18){left:70%;top:7%;width:19px;height:19px;animation-duration:30s;animation-delay:-19s}
.particle:nth-child(19){left:87%;top:55%;width:16px;height:16px;animation-duration:23s;animation-delay:-13s}
.particle:nth-child(20){left:28%;top:93%;width:21px;height:21px;animation-duration:27s;animation-delay:-21s}

@keyframes floatParticle{
    0%{
        transform:translate3d(0,110vh,0) scale(.55) rotate(0deg);
        opacity:0;
    }

    8%{
        opacity:.85;
    }

    25%{
        transform:translate3d(-55px,55vh,0) scale(.82) rotate(90deg);
        opacity:.9;
    }

    50%{
        transform:translate3d(75px,-5vh,0) scale(1.08) rotate(180deg);
        opacity:.95;
    }

    75%{
        transform:translate3d(-65px,-65vh,0) scale(.86) rotate(270deg);
        opacity:.8;
    }

    100%{
        transform:translate3d(95px,-125vh,0) scale(.5) rotate(360deg);
        opacity:0;
    }
}

/* =========================
   منو
========================= */

.menu-button{
    position:fixed;
    top:14px;
    right:14px;
    width:52px;
    height:52px;
    z-index:10001;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    gap:5px;
    border:1px solid rgba(150,205,255,.18);
    border-radius:17px;
    background:
        linear-gradient(145deg,
        rgba(100,150,190,.18),
        rgba(255,255,255,.035));
    box-shadow:
        0 10px 35px rgba(0,0,0,.48),
        0 0 25px rgba(25,100,170,.10),
        inset 0 1px 0 rgba(255,255,255,.10);
    backdrop-filter:blur(22px);
    -webkit-backdrop-filter:blur(22px);
    cursor:pointer;
    transition:.3s ease;
}

.menu-button:hover{
    transform:translateY(-2px);
    border-color:rgba(120,200,255,.32);
}

.menu-button:active{transform:scale(.93)}

.menu-button span{
    width:23px;
    height:2px;
    border-radius:20px;
    background:#eaf7ff;
    transition:.3s ease;
}

.menu-button.active span:nth-child(1){
    transform:translateY(7px) rotate(45deg);
}

.menu-button.active span:nth-child(2){
    opacity:0;
    transform:scale(0);
}

.menu-button.active span:nth-child(3){
    transform:translateY(-7px) rotate(-45deg);
}

.menu-overlay{
    position:fixed;
    inset:0;
    z-index:9998;
    background:rgba(1,6,12,.67);
    backdrop-filter:blur(8px);
    -webkit-backdrop-filter:blur(8px);
    opacity:0;
    visibility:hidden;
    transition:.3s ease;
}

.menu-overlay.open{
    opacity:1;
    visibility:visible;
}

.side-menu{
    position:fixed;
    top:0;
    right:0;
    width:min(350px,88vw);
    height:100vh;
    z-index:10000;
    padding:82px 17px 25px;
    background:
        linear-gradient(145deg,
        rgba(18,29,41,.98),
        rgba(4,8,14,.99));
    border-left:1px solid rgba(130,195,240,.17);
    box-shadow:
        -25px 0 70px rgba(0,0,0,.65),
        -5px 0 35px rgba(20,90,150,.08);
    backdrop-filter:blur(30px);
    -webkit-backdrop-filter:blur(30px);
    transform:translateX(105%);
    transition:transform .38s cubic-bezier(.22,1,.36,1);
    overflow-y:auto;
}

.side-menu.open{transform:translateX(0)}

.menu-header{
    text-align:center;
    margin-bottom:25px;
}

.menu-logo{
    width:70px;
    height:70px;
    margin:auto auto 12px;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:22px;
    background:
        linear-gradient(145deg,
        rgba(100,160,205,.18),
        rgba(255,255,255,.035));
    border:1px solid rgba(150,210,250,.18);
    box-shadow:
        0 15px 35px rgba(0,0,0,.35),
        0 0 28px rgba(20,100,170,.10),
        inset 0 1px 0 rgba(255,255,255,.12);
    overflow:hidden;
}

.menu-logo img{
    width:48px;
    height:48px;
    object-fit:contain;
    border-radius:15px;
}

.menu-title{
    font-size:1.35rem;
    font-weight:900;
}

.menu-subtitle{
    margin-top:5px;
    color:rgba(210,235,255,.52);
    font-size:.78rem;
}

.menu-line{
    height:1px;
    margin:17px 4px;
    background:
        linear-gradient(
            90deg,
            transparent,
            rgba(110,185,240,.28),
            transparent
        );
}

.menu-link{
    width:100%;
    display:flex;
    align-items:center;
    gap:12px;
    padding:11px;
    margin:8px 0;
    color:#fff;
    text-decoration:none;
    border-radius:19px;
    background:
        linear-gradient(145deg,
        rgba(90,145,190,.105),
        rgba(255,255,255,.025));
    border:1px solid rgba(150,205,245,.105);
    box-shadow:
        inset 0 1px 0 rgba(255,255,255,.06),
        0 8px 25px rgba(0,0,0,.12);
    transition:.25s ease;
}

.menu-link:hover{
    transform:translateX(-4px);
    background:
        linear-gradient(145deg,
        rgba(80,155,215,.18),
        rgba(255,255,255,.045));
    border-color:rgba(130,205,255,.30);
}

.menu-link:active{transform:scale(.97)}

.menu-icon{
    width:45px;
    height:45px;
    min-width:45px;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:15px;
    background:
        linear-gradient(145deg,
        rgba(100,170,215,.16),
        rgba(255,255,255,.035));
    border:1px solid rgba(145,205,245,.12);
    box-shadow:inset 0 1px 0 rgba(255,255,255,.08);
    overflow:hidden;
}

.menu-icon svg{
    width:27px;
    height:27px;
}

.menu-text{
    display:flex;
    flex-direction:column;
    gap:2px;
}

.menu-text strong{font-size:.91rem}

.menu-text small{
    font-size:.68rem;
    color:rgba(210,235,255,.46);
}

/* =========================
   کانتینر
========================= */

.container{
    position:relative;
    width:100%;
    max-width:1050px;
    margin:auto;
    padding:20px 16px 35px;
    border-radius:31px;
    background:
        linear-gradient(145deg,
        rgba(100,125,145,.105),
        rgba(255,255,255,.025));
    border:1px solid rgba(160,210,245,.13);
    box-shadow:
        0 25px 70px rgba(0,0,0,.55),
        0 0 60px rgba(20,80,135,.07),
        inset 0 1px 0 rgba(255,255,255,.07);
    backdrop-filter:blur(22px);
    -webkit-backdrop-filter:blur(22px);
}

/* نوار بالا */

.topbar{
    width:100%;
    max-width:850px;
    margin:0 auto 22px;
    display:flex;
    justify-content:center;
}

.apps-top-button{
    display:flex;
    align-items:center;
    justify-content:center;
    gap:9px;
    width:min(260px,90%);
    padding:13px 22px;
    color:#fff;
    text-decoration:none;
    font-weight:850;
    font-size:.94rem;
    border-radius:19px;
    background:
        linear-gradient(145deg,
        rgba(85,150,200,.17),
        rgba(255,255,255,.035));
    border:1px solid rgba(150,215,255,.17);
    box-shadow:
        0 10px 30px rgba(0,0,0,.25),
        0 0 28px rgba(25,105,175,.08),
        inset 0 1px 0 rgba(255,255,255,.09);
    backdrop-filter:blur(18px);
    -webkit-backdrop-filter:blur(18px);
    transition:.25s;
}

.apps-top-button:hover{
    transform:translateY(-3px);
    border-color:rgba(120,205,255,.32);
}

.apps-top-button:active{transform:scale(.97)}

.apps-icon{
    width:27px;
    height:27px;
}

/* عنوان */

.page-title{
    text-align:center;
    margin:12px 0 24px;
    font-size:clamp(1.45rem,5vw,2rem);
    font-weight:950;
    letter-spacing:-.5px;
    text-shadow:
        0 5px 25px rgba(120,200,255,.14);
}

/* تصاویر */

.main-image,
.post-image{
    display:block;
    width:100%;
    max-width:850px;
    margin:17px auto;
    border-radius:27px;
    border:1px solid rgba(150,210,245,.14);
    box-shadow:
        0 18px 45px rgba(0,0,0,.45),
        0 0 35px rgba(25,100,165,.06);
    transition:.3s;
}

.main-image:hover,
.post-image:hover{
    transform:translateY(-3px);
    border-color:rgba(120,200,255,.25);
}

/* دکمه‌ها */

.btn-box{
    display:flex;
    justify-content:center;
    margin:12px 0;
}

.glass-btn{
    position:relative;
    width:min(390px,92%);
    display:flex;
    align-items:center;
    justify-content:center;
    min-height:54px;
    padding:13px 22px;
    color:#fff;
    text-decoration:none;
    font-size:.94rem;
    font-weight:850;
    border-radius:19px;
    background:
        linear-gradient(145deg,
        rgba(95,150,195,.15),
        rgba(255,255,255,.035));
    border:1px solid rgba(155,210,245,.16);
    box-shadow:
        0 12px 30px rgba(0,0,0,.27),
        0 0 28px rgba(25,100,165,.06),
        inset 0 1px 0 rgba(255,255,255,.10);
    backdrop-filter:blur(18px);
    -webkit-backdrop-filter:blur(18px);
    overflow:hidden;
    transition:.22s ease;
}

.glass-btn::before{
    content:"";
    position:absolute;
    top:0;
    left:-100%;
    width:55%;
    height:100%;
    background:
        linear-gradient(
            90deg,
            transparent,
            rgba(150,220,255,.14),
            transparent
        );
    transform:skewX(-20deg);
    transition:.6s;
}

.glass-btn:hover::before{left:150%}

.glass-btn:hover{
    transform:translateY(-3px);
    border-color:rgba(130,210,255,.34);
    background:
        linear-gradient(145deg,
        rgba(80,155,215,.20),
        rgba(255,255,255,.045));
}

.glass-btn:active{transform:scale(.96)}

.primary{
    background:
        linear-gradient(145deg,
        rgba(75,155,215,.21),
        rgba(255,255,255,.045));
    border-color:rgba(120,205,255,.25);
}

.danger{
    background:
        linear-gradient(145deg,
        rgba(50,105,155,.19),
        rgba(20,45,70,.08));
    border-color:rgba(105,175,225,.22);
}

/* دانلود */

.download-item{
    max-width:900px;
    margin:30px auto 42px;
    padding:12px;
    border-radius:28px;
    background:
        linear-gradient(145deg,
        rgba(85,125,155,.075),
        rgba(255,255,255,.018));
    border:1px solid rgba(145,200,235,.09);
    box-shadow:0 15px 45px rgba(0,0,0,.28);
}

iframe,
video{
    width:100%;
    display:block;
    border:1px solid rgba(145,205,240,.12);
    border-radius:24px;
    background:#03070c;
}

/* =========================
   کارت برنامه‌ها
========================= */

.apps-list{
    width:100%;
    max-width:850px;
    margin:25px auto;
}

.app-card{
    display:flex;
    align-items:center;
    gap:13px;
    width:100%;
    padding:12px;
    margin:15px 0;
    border-radius:23px;
    background:
        linear-gradient(145deg,
        rgba(90,145,185,.12),
        rgba(255,255,255,.025));
    border:1px solid rgba(150,205,240,.13);
    box-shadow:
        0 14px 40px rgba(0,0,0,.35),
        0 0 35px rgba(20,90,150,.06),
        inset 0 1px 0 rgba(255,255,255,.08);
    backdrop-filter:blur(20px);
    -webkit-backdrop-filter:blur(20px);
    transition:.25s ease;
}

.app-card:hover{
    transform:translateY(-3px);
    border-color:rgba(130,205,250,.30);
}

.app-card:active{transform:scale(.985)}

.app-image{
    width:72px;
    height:72px;
    min-width:72px;
    object-fit:cover;
    border-radius:18px;
    border:1px solid rgba(155,210,245,.14);
    box-shadow:0 8px 22px rgba(0,0,0,.4);
    background:#07111b;
}

.app-info{
    flex:1;
    min-width:0;
    text-align:right;
}

.app-info h3{
    font-size:.98rem;
    font-weight:900;
    margin-bottom:5px;
    color:#fff;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
}

.app-info p{
    font-size:.74rem;
    line-height:1.7;
    color:rgba(210,235,255,.48);
}

.app-download{
    flex-shrink:0;
    min-width:72px;
    display:flex;
    align-items:center;
    justify-content:center;
    padding:10px 13px;
    color:#fff;
    text-decoration:none;
    font-size:.73rem;
    font-weight:850;
    border-radius:14px;
    background:
        linear-gradient(145deg,
        rgba(90,165,215,.19),
        rgba(255,255,255,.04));
    border:1px solid rgba(145,210,250,.18);
    transition:.22s;
}

.app-download:hover{
    transform:translateY(-2px);
    background:
        linear-gradient(145deg,
        rgba(80,175,230,.26),
        rgba(255,255,255,.06));
}

.app-download:active{transform:scale(.94)}

/* =========================
   ارتباط با ما
========================= */

.contact-page{
    max-width:850px;
    margin:auto;
}

.contact-intro{
    text-align:center;
    color:rgba(210,235,255,.48);
    font-size:.82rem;
    line-height:1.9;
    margin:-8px auto 25px;
    max-width:600px;
}

.contact-list{
    display:flex;
    flex-direction:column;
    gap:12px;
    max-width:700px;
    margin:auto;
}

.contact-card{
    position:relative;
    display:flex;
    align-items:center;
    gap:13px;
    width:100%;
    padding:12px;
    min-height:82px;
    color:#fff;
    text-decoration:none;
    border-radius:22px;
    background:
        linear-gradient(145deg,
        rgba(90,145,185,.12),
        rgba(255,255,255,.025));
    border:1px solid rgba(150,205,240,.13);
    box-shadow:
        0 12px 32px rgba(0,0,0,.28),
        0 0 30px rgba(20,90,150,.05),
        inset 0 1px 0 rgba(255,255,255,.07);
    backdrop-filter:blur(18px);
    -webkit-backdrop-filter:blur(18px);
    transition:.28s ease;
    overflow:hidden;
}

.contact-card::before{
    content:"";
    position:absolute;
    inset:0;
    background:
        linear-gradient(
            110deg,
            transparent 15%,
            rgba(130,210,255,.08) 45%,
            transparent 70%
        );
    transform:translateX(-120%);
    transition:.65s ease;
}

.contact-card:hover::before{
    transform:translateX(120%);
}

.contact-card:hover{
    transform:translateY(-4px);
    border-color:rgba(130,210,255,.30);
    box-shadow:
        0 18px 42px rgba(0,0,0,.38),
        0 0 35px rgba(25,105,175,.09),
        inset 0 1px 0 rgba(255,255,255,.11);
}

.contact-card:active{
    transform:scale(.98);
}

.contact-icon{
    position:relative;
    width:54px;
    height:54px;
    min-width:54px;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:17px;
    background:
        linear-gradient(145deg,
        rgba(100,170,215,.17),
        rgba(255,255,255,.035));
    border:1px solid rgba(150,210,245,.14);
    box-shadow:
        inset 0 1px 0 rgba(255,255,255,.10),
        0 8px 22px rgba(0,0,0,.28),
        0 0 25px rgba(25,105,175,.06);
    overflow:hidden;
}

.contact-icon svg{
    width:34px;
    height:34px;
    display:block;
}

.contact-info{
    flex:1;
    min-width:0;
}

.contact-info strong{
    display:block;
    font-size:.94rem;
    font-weight:900;
    margin-bottom:3px;
}

.contact-info small{
    display:block;
    color:rgba(210,235,255,.45);
    font-size:.69rem;
}

.contact-arrow{
    width:32px;
    height:32px;
    display:flex;
    align-items:center;
    justify-content:center;
    color:rgba(180,225,255,.65);
    font-size:1.1rem;
}

/* بازگشت */

#backBtn{
    position:fixed;
    bottom:18px;
    left:17px;
    z-index:9000;
    display:none;
    padding:12px 19px;
    color:#fff;
    font-weight:850;
    border:1px solid rgba(145,205,245,.17);
    border-radius:17px;
    background:
        linear-gradient(145deg,
        rgba(40,80,115,.82),
        rgba(10,18,27,.84));
    box-shadow:
        0 12px 30px rgba(0,0,0,.42),
        0 0 25px rgba(20,100,170,.08);
    backdrop-filter:blur(18px);
    -webkit-backdrop-filter:blur(18px);
    cursor:pointer;
    transition:.25s;
}

#backBtn:hover{
    transform:translateY(-3px);
    border-color:rgba(130,205,255,.30);
}

.page-section{
    animation:pageIn .32s ease;
}

@keyframes pageIn{
    from{
        opacity:0;
        transform:translateY(12px);
    }

    to{
        opacity:1;
        transform:translateY(0);
    }
}

@media(max-width:600px){

    body{
        padding:76px 7px 25px;
    }

    .container{
        padding:16px 10px 30px;
        border-radius:25px;
    }

    .menu-button{
        width:49px;
        height:49px;
        top:11px;
        right:11px;
    }

    .side-menu{
        width:88vw;
        padding-top:76px;
    }

    .glass-btn{
        width:94%;
        min-height:52px;
        border-radius:17px;
    }

    .main-image,
    .post-image{
        border-radius:21px;
    }

    .download-item{
        padding:8px;
        border-radius:23px;
    }

    .app-card{
        gap:10px;
        padding:10px;
        border-radius:20px;
    }

    .app-image{
        width:64px;
        height:64px;
        min-width:64px;
        border-radius:16px;
    }

    .app-info h3{
        font-size:.85rem;
    }

    .app-info p{
        font-size:.66rem;
    }

    .app-download{
        min-width:62px;
        padding:9px 10px;
        font-size:.66rem;
        border-radius:12px;
    }

    .contact-card{
        min-height:76px;
        padding:10px;
        border-radius:19px;
    }

    .contact-icon{
        width:49px;
        height:49px;
        min-width:49px;
        border-radius:15px;
    }

    .contact-icon svg{
        width:31px;
        height:31px;
    }

    .contact-info strong{
        font-size:.84rem;
    }

    .contact-info small{
        font-size:.64rem;
    }
}
</style>
</head>

<body>

<div class="bg-particles" aria-hidden="true">
    <span class="particle"></span>
    <span class="particle"></span>
    <span class="particle"></span>
    <span class="particle"></span>
    <span class="particle"></span>
    <span class="particle"></span>
    <span class="particle"></span>
    <span class="particle"></span>
    <span class="particle"></span>
    <span class="particle"></span>
    <span class="particle"></span>
    <span class="particle"></span>
    <span class="particle"></span>
    <span class="particle"></span>
    <span class="particle"></span>
    <span class="particle"></span>
    <span class="particle"></span>
    <span class="particle"></span>
    <span class="particle"></span>
    <span class="particle"></span>
</div>

<button class="menu-button" id="menuButton" aria-label="منو" aria-expanded="false" type="button">
    <span></span>
    <span></span>
    <span></span>
</button>

<div class="menu-overlay" id="menuOverlay"></div>

<aside class="side-menu" id="sideMenu">

    <div class="menu-header">
        <div class="menu-logo">
            <img id="menuLogo" alt="کانتر مود">
        </div>

        <div class="menu-title">کانتر مود</div>

        <div class="menu-subtitle">
            منوی اصلی و راه‌های ارتباطی
        </div>
    </div>

    <a href="#page1" class="menu-link menu-page-link">
        <span class="menu-icon">
            <svg viewBox="0 0 64 64">
                <path d="M10 30L32 11l22 19v23a3 3 0 0 1-3 3H13a3 3 0 0 1-3-3z"
                fill="none" stroke="white" stroke-width="5"
                stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M25 56V38h14v18"
                fill="none" stroke="white" stroke-width="5"/>
            </svg>
        </span>

        <span class="menu-text">
            <strong>صفحه اصلی</strong>
            <small>بازگشت به صفحه اول</small>
        </span>
    </a>

    <a href="#page5" class="menu-link menu-page-link">
        <span class="menu-icon">
            <svg viewBox="0 0 64 64">
                <rect x="8" y="8" width="19" height="19" rx="4"
                fill="none" stroke="white" stroke-width="5"/>
                <rect x="37" y="8" width="19" height="19" rx="4"
                fill="none" stroke="white" stroke-width="5"/>
                <rect x="8" y="37" width="19" height="19" rx="4"
                fill="none" stroke="white" stroke-width="5"/>
                <rect x="37" y="37" width="19" height="19" rx="4"
                fill="none" stroke="white" stroke-width="5"/>
            </svg>
        </span>

        <span class="menu-text">
            <strong>برنامه‌ها</strong>
            <small>برنامه‌های کاربردی</small>
        </span>
    </a>

    <a href="#page2" class="menu-link menu-page-link">
        <span class="menu-icon">
            <svg viewBox="0 0 64 64">
                <path d="M10 34a22 22 0 0 1 44 0v12a6 6 0 0 1-6 6h-7V37h13"
                fill="none" stroke="white" stroke-width="5"
                stroke-linecap="round"/>
                <path d="M10 37H7a5 5 0 0 0-5 5v4a6 6 0 0 0 6 6h7V37"
                fill="none" stroke="white" stroke-width="5"
                stroke-linecap="round"/>
            </svg>
        </span>

        <span class="menu-text">
            <strong>ارتباط با ما</strong>
            <small>کانال‌ها و پشتیبانی</small>
        </span>
    </a>

    <div class="menu-line"></div>

    <a href="https://rubika.ir/Counter2Mod" target="_blank" rel="noopener" class="menu-link">
        <span class="menu-icon">
            <svg viewBox="0 0 64 64">
                <rect x="8" y="8" width="48" height="48" rx="15"
                fill="none" stroke="white" stroke-width="4.5"/>
                <path d="M19 20h26M19 32h20M19 44h14"
                fill="none" stroke="white" stroke-width="5"
                stroke-linecap="round"/>
            </svg>
        </span>

        <span class="menu-text">
            <strong>کانال روبیکا</strong>
            <small>کانال اصلی کانتر مود</small>
        </span>
    </a>

    <a href="https://t.me/Counter2Mod" target="_blank" rel="noopener" class="menu-link">
        <span class="menu-icon">
            <svg viewBox="0 0 64 64">
                <path d="M56 10L8 29l19 7 7 19 22-45z"
                fill="none" stroke="white" stroke-width="5"
                stroke-linejoin="round"/>
                <path d="M27 36l12-10"
                fill="none" stroke="white" stroke-width="5"
                stroke-linecap="round"/>
            </svg>
        </span>

        <span class="menu-text">
            <strong>کانال تلگرام</strong>
            <small>عضویت در تلگرام</small>
        </span>
    </a>

    <a href="https://ble.ir/Countermod" target="_blank" rel="noopener" class="menu-link">
        <span class="menu-icon">
            <svg viewBox="0 0 64 64">
                <path d="M12 11h40a7 7 0 0 1 7 7v24a7 7 0 0 1-7 7H33L20 58v-9h-8a7 7 0 0 1-7-7V18a7 7 0 0 1 7-7z"
                fill="none" stroke="white" stroke-width="4.5"
                stroke-linejoin="round"/>
                <path d="M20 25h24M20 34h18"
                fill="none" stroke="white" stroke-width="5"
                stroke-linecap="round"/>
            </svg>
        </span>

        <span class="menu-text">
            <strong>کانال بله</strong>
            <small>صفحه ما در بله</small>
        </span>
    </a>

    <a href="https://www.aparat.com/Abolfazl_Hakerr/shorts" target="_blank" rel="noopener" class="menu-link">
        <span class="menu-icon">
            <svg viewBox="0 0 64 64">
                <rect x="7" y="12" width="50" height="40" rx="10"
                fill="none" stroke="white" stroke-width="4.5"/>
                <path d="M27 22l17 10-17 10z" fill="white"/>
            </svg>
        </span>

        <span class="menu-text">
            <strong>کانال آپارات</strong>
            <small>ویدیوها و آموزش‌ها</small>
        </span>
    </a>

    <a href="https://rubika.ir/joing/BAFCGFBCE0SVOLBSWKUNPCLEJNAMITSH"
       target="_blank" rel="noopener" class="menu-link">

        <span class="menu-icon">
            <svg viewBox="0 0 64 64">
                <circle cx="23" cy="23" r="9"
                fill="none" stroke="white" stroke-width="5"/>
                <circle cx="45" cy="26" r="7"
                fill="none" stroke="white" stroke-width="5"/>
                <path d="M8 52c1-10 8-15 16-15s15 5 16 15M39 38c8 0 14 5 16 14"
                fill="none" stroke="white" stroke-width="5"
                stroke-linecap="round"/>
            </svg>
        </span>

        <span class="menu-text">
            <strong>گپ روبیکا</strong>
            <small>ورود به گپ</small>
        </span>
    </a>

    <a href="https://rubika.ir/Abolfazl_Kazemi_SFG"
       target="_blank" rel="noopener" class="menu-link">

        <span class="menu-icon">
            <svg viewBox="0 0 64 64">
                <path d="M10 34a22 22 0 0 1 44 0v12a6 6 0 0 1-6 6h-7V37h13"
                fill="none" stroke="white" stroke-width="5"
                stroke-linecap="round"/>
                <path d="M10 37H7a5 5 0 0 0-5 5v4a6 6 0 0 0 6 6h7V37"
                fill="none" stroke="white" stroke-width="5"
                stroke-linecap="round"/>
                <path d="M41 52h6"
                fill="none" stroke="white" stroke-width="5"
                stroke-linecap="round"/>
            </svg>
        </span>

        <span class="menu-text">
            <strong>پشتیبانی</strong>
            <small>ارتباط با سازنده</small>
        </span>
    </a>

</aside>

<div class="container">

    <div class="topbar">
        <a href="#page5" class="apps-top-button menu-page-link">
            <svg class="apps-icon" viewBox="0 0 64 64">
                <rect x="8" y="8" width="19" height="19" rx="4"
                fill="none" stroke="white" stroke-width="5"/>
                <rect x="37" y="8" width="19" height="19" rx="4"
                fill="none" stroke="white" stroke-width="5"/>
                <rect x="8" y="37" width="19" height="19" rx="4"
                fill="none" stroke="white" stroke-width="5"/>
                <rect x="37" y="37" width="19" height="19" rx="4"
                fill="none" stroke="white" stroke-width="5"/>
            </svg>
            <span>برنامه‌ها</span>
        </a>
    </div>

    <div id="page1" class="page-section">

        <img
            src="https://cdn.imgurl.ir/uploads/x012403_InShot_20260625_163753784.png"
            class="main-image"
            alt="کانتر مود">

        <div class="page-title">
            کانتر مود روبیکا
        </div>

        <div class="btn-box">
            <a href="https://rubika.ir/Counter2Mod"
               target="_blank"
               rel="noopener"
               class="glass-btn primary">
                ورود به کانال روبیکا
            </a>
        </div>

        <div class="btn-box">
            <a href="#page3" class="glass-btn menu-page-link">
                دانلود کانتر۲ مود منو
            </a>
        </div>

        <div class="btn-box">
            <a href="#page4" class="glass-btn menu-page-link">
                آموزش نصب کانتر۲ مود منو
            </a>
        </div>

        <div class="btn-box">
            <a href="https://holobot.ir/s/html/هوش مصنوعی آفلاین.html"
               target="_blank"
               rel="noopener"
               class="glass-btn">
                هوش مصنوعی آفلاین
            </a>
        </div>

        <div class="btn-box">
            <a href="#page2"
               class="glass-btn danger menu-page-link">
                ارتباط با ما
            </a>
        </div>

    </div>

    <div id="page2" class="page-section" style="display:none">

        <div class="contact-page">

            <div class="page-title">
                ارتباط با ما
            </div>

            <div class="contact-intro">
                برای دریافت آخرین مودها، آموزش‌ها، برنامه‌ها و ارتباط با سازنده
                می‌توانید از یکی از راه‌های زیر وارد شوید.
            </div>

            <div class="contact-list">

                <a href="https://rubika.ir/Counter2Mod"
                   target="_blank"
                   rel="noopener"
                   class="contact-card">

                    <span class="contact-icon">
                        <svg viewBox="0 0 64 64">
                            <rect x="7" y="7" width="50" height="50" rx="16"
                            fill="none" stroke="white" stroke-width="4.5"/>
                            <path d="M18 20h28M18 32h22M18 44h15"
                            fill="none" stroke="white" stroke-width="5"
                            stroke-linecap="round"/>
                        </svg>
                    </span>

                    <span class="contact-info">
                        <strong>کانال روبیکا</strong>
                        <small>کانال اصلی کانتر مود</small>
                    </span>

                    <span class="contact-arrow">←</span>
                </a>

                <a href="https://t.me/Counter2Mod"
                   target="_blank"
                   rel="noopener"
                   class="contact-card">

                    <span class="contact-icon">
                        <svg viewBox="0 0 64 64">
                            <path d="M56 10L8 29l19 7 7 19 22-45z"
                            fill="none" stroke="white" stroke-width="5"
                            stroke-linejoin="round"/>
                            <path d="M27 36l12-10"
                            fill="none" stroke="white" stroke-width="5"
                            stroke-linecap="round"/>
                        </svg>
                    </span>

                    <span class="contact-info">
                        <strong>کانال تلگرام</strong>
                        <small>عضویت در کانال تلگرام</small>
                    </span>

                    <span class="contact-arrow">←</span>
                </a>

                <a href="https://ble.ir/Countermod"
                   target="_blank"
                   rel="noopener"
                   class="contact-card">

                    <span class="contact-icon">
                        <svg viewBox="0 0 64 64">
                            <path d="M12 11h40a7 7 0 0 1 7 7v24a7 7 0 0 1-7 7H33L20 58v-9h-8a7 7 0 0 1-7-7V18a7 7 0 0 1 7-7z"
                            fill="none" stroke="white" stroke-width="4.5"
                            stroke-linejoin="round"/>
                            <path d="M20 25h24M20 34h18"
                            fill="none" stroke="white" stroke-width="5"
                            stroke-linecap="round"/>
                        </svg>
                    </span>

                    <span class="contact-info">
                        <strong>کانال بله</strong>
                        <small>صفحه کانتر مود در بله</small>
                    </span>

                    <span class="contact-arrow">←</span>
                </a>

                <a href="https://www.aparat.com/Abolfazl_Hakerr/shorts"
                   target="_blank"
                   rel="noopener"
                   class="contact-card">

                    <span class="contact-icon">
                        <svg viewBox="0 0 64 64">
                            <rect x="7" y="12" width="50" height="40" rx="10"
                            fill="none" stroke="white" stroke-width="4.5"/>
                            <path d="M27 22l17 10-17 10z"
                            fill="white"/>
                        </svg>
                    </span>

                    <span class="contact-info">
                        <strong>کانال آپارات</strong>
                        <small>ویدیوها و آموزش‌های کانتر مود</small>
                    </span>

                    <span class="contact-arrow">←</span>
                </a>

                <a href="https://rubika.ir/joing/BAFCGFBCE0SVOLBSWKUNPCLEJNAMITSH"
                   target="_blank"
                   rel="noopener"
                   class="contact-card">

                    <span class="contact-icon">
                        <svg viewBox="0 0 64 64">
                            <circle cx="23" cy="23" r="9"
                            fill="none" stroke="white" stroke-width="5"/>
                            <circle cx="45" cy="26" r="7"
                            fill="none" stroke="white" stroke-width="5"/>
                            <path d="M8 52c1-10 8-15 16-15s15 5 16 15M39 38c8 0 14 5 16 14"
                            fill="none" stroke="white" stroke-width="5"
                            stroke-linecap="round"/>
                        </svg>
                    </span>

                    <span class="contact-info">
                        <strong>گپ روبیکا</strong>
                        <small>ورود به گپ و گفتگو</small>
                    </span>

                    <span class="contact-arrow">←</span>
                </a>

                <a href="https://rubika.ir/Abolfazl_Kazemi_SFG"
                   target="_blank"
                   rel="noopener"
                   class="contact-card">

                    <span class="contact-icon">
                        <svg viewBox="0 0 64 64">
                            <path d="M10 34a22 22 0 0 1 44 0v12a6 6 0 0 1-6 6h-7V37h13"
                            fill="none" stroke="white" stroke-width="5"
                            stroke-linecap="round"/>
                            <path d="M10 37H7a5 5 0 0 0-5 5v4a6 6 0 0 0 6 6h7V37"
                            fill="none" stroke="white" stroke-width="5"
                            stroke-linecap="round"/>
                            <path d="M41 52h6"
                            fill="none" stroke="white" stroke-width="5"
                            stroke-linecap="round"/>
                        </svg>
                    </span>

                    <span class="contact-info">
                        <strong>پشتیبانی</strong>
                        <small>ارتباط مستقیم با سازنده</small>
                    </span>

                    <span class="contact-arrow">←</span>
                </a>

            </div>
        </div>
    </div>

    <div id="page3" class="page-section" style="display:none">

        <div class="page-title">
            دانلود کانتر۲ مود منو
        </div>

        <div id="downloads"></div>

    </div>

    <div id="page4" class="page-section" style="display:none">

        <div class="page-title">
            آموزش نصب دیتا کانتر۲ مود منو
        </div>

        <div class="download-item">

            <iframe
                src="https://www.aparat.com/video/video/embed/videohash/rlk4a91/vt/frame"
                allowfullscreen
                style="aspect-ratio:16/9">
            </iframe>

        </div>

        <div class="download-item">

            <video controls>

                <source
                    src="https://cdn.imgurl.ir/uploads/p041630_InShot_20260601_025037109.mp4"
                    type="video/mp4">

            </video>

        </div>

    </div>

    <div id="page5" class="page-section" style="display:none">

        <div class="page-title">
            برنامه‌ها
        </div>

        <div class="apps-list">

            <!-- برنامه قبلی -->
            <div class="app-card">

                <img
                    class="app-image"
                    src="https://cdn.imgurl.ir/uploads/j13307_InShot_20260822_153149438.png"
                    alt="سورس ساز حرفه‌ای"
                    loading="lazy">

                <div class="app-info">

                    <h3>
                        سورس ساز حرفه‌ای
                    </h3>

                    <p>
                        سورس ساز حرفه‌ای ربات روبیکا
                    </p>

                </div>

                <a
                    class="app-download"
                    href="https://cdn.imgurl.ir/uploads/b590319___.zip"
                    target="_blank"
                    rel="noopener">
                    دانلود
                </a>

            </div>


            <!-- برنامه جدید: کد ساز سایت -->
            <div class="app-card">

                <img
                    class="app-image"
                    src="https://cdn.imgurl.ir/uploads/v069309_InShot_20260907_003520819.png"
                    alt="کد ساز سایت"
                    loading="lazy">

                <div class="app-info">

                    <h3>
                        کد ساز سایت
                    </h3>

                    <p>
                        کد ساز حرفه‌ای سایت
                    </p>

                </div>

                <a
                    class="app-download"
                    href="https://cdn.imgurl.ir/uploads/v73960___.zip"
                    target="_blank"
                    rel="noopener">
                    دانلود
                </a>

            </div>

        </div>

    </div>

</div>

<button id="backBtn" type="button">
    ← بازگشت
</button>

<script>

const mainLogo =
"https://cdn.imgurl.ir/uploads/x012403_InShot_20260625_163753784.png";

document.getElementById("menuLogo").src = mainLogo;

/* =========================
   دانلودها
========================= */

const downloads = [

[
"https://cdn.imgurl.ir/uploads/e746382_IMG_20260808_025040_118.jpg",
"کانتر۲ مود منو",
"https://rubika.ir/Counter2Mod/BGGHEFCCGGEEHABG"
],

[
"https://cdn.imgurl.ir/uploads/g317464_IMG_20260808_025337_614.jpg",
"کانتر۲ مود منو FL",
"https://rubika.ir/Counter2Mod/BGHHBEGBJCFFIABG"
],

[
"https://cdn.imgurl.ir/uploads/a959848_IMG_20260808_025622_329.jpg",
"کانتر۲ مود منو دوتایی جدید",
"https://rubika.ir/Counter2Mod/BGIFJAHFDCFBEABG"
],

[
"https://cdn.imgurl.ir/uploads/f81909_IMG_20260808_025755_228.jpg",
"کانتر۲ مود منو جدید",
"https://rubika.ir/Counter2Mod/BGIFJCIFEHDGHABG"
],

[
"https://cdn.imgurl.ir/uploads/b23474_IMG_20260808_031051_878.jpg",
"کانتر۲ مود منو دوتایی بدون دیتا",
"https://rubika.ir/Counter2Mod/BGIGECDHJDIAEABG"
],

[
"https://cdn.imgurl.ir/uploads/r5684_IMG_20260808_031236_395.jpg",
"کانتر۲ مود منو خفن",
"https://rubika.ir/Counter2Mod/BGIIDHGHIDCDBABG"
],

[
"https://cdn.imgurl.ir/uploads/j57884_IMG_20260808_031406_004.jpg",
"کانتر۲ مود منو FL تکی",
"https://rubika.ir/Counter2Mod/BGIIDJEHJCJHJABG"
],

[
"https://cdn.imgurl.ir/uploads/x476408_IMG_20260808_031536_987.jpg",
"مود منو بدون دیتا با قابلیت جدید",
"https://rubika.ir/Counter2Mod/BGIIEHBICCBJAABG"
],

[
"https://cdn.imgurl.ir/uploads/r961755_IMG_20260810_031416_025.jpg",
"کانتر۲ مود منو",
"https://rubika.ir/Counter2Mod/BGIIFIGIHBGBCABG"
],

[
"https://cdn.imgurl.ir/uploads/q598661_IMG_20260810_031554_512.jpg",
"کانتر۲ مود منو",
"https://rubika.ir/Counter2Mod/BGJBDGGCHHDCAABG"
],

[
"https://cdn.imgurl.ir/uploads/t56451_IMG_20260810_031748_934.jpg",
"کانتر۲ مود منو جدید",
"https://rubika.ir/Counter2Mod/BGJBDHICIBHHDABG"
],

[
"https://cdn.imgurl.ir/uploads/l71334_IMG_20260810_031929_347.jpg",
"کانتر۲ مود منو بدون لگ",
"https://rubika.ir/Counter2Mod/BGJBEFBDBGFDHABG"
],

[
"https://cdn.imgurl.ir/uploads/h2234_IMG_20260810_032045_066.jpg",
"کانتر۲ مود منو",
"https://rubika.ir/Counter2Mod/BGJBGHIECBFCGABG"
],

[
"https://cdn.imgurl.ir/uploads/i110244_IMG_20260810_032223_507.jpg",
"کانتر۲ مود منو دیتا دار",
"https://rubika.ir/Counter2Mod/BGJEIHCADDDDHABG"
],

[
"https://cdn.imgurl.ir/uploads/i82081_IMG_20260810_032353_830.jpg",
"کانتر۲ مود منو خفن",
"https://rubika.ir/Counter2Mod/BGJEIIDAEAGCDABG"
],

[
"https://cdn.imgurl.ir/uploads/q320766_IMG_20260810_032513_782.jpg",
"کانتر۲ مود منو فارسی بدون دیتا",
"https://rubika.ir/Counter2Mod/BGJEJHGAIFFEEABG"
],

[
"https://cdn.imgurl.ir/uploads/n84727_IMG_20260810_032630_103.jpg",
"کانتر۲ مود منو",
"https://rubika.ir/Counter2Mod/BGJHHJIFCAFFDABG"
],

[
"https://cdn.imgurl.ir/uploads/l460626_IMG_20260810_032754_104.jpg",
"کانتر۲ مود شده بدون منو",
"https://rubika.ir/Counter2Mod/BGJHIIAFGDAIJABG"
],

[
"https://cdn.imgurl.ir/uploads/z19771_IMG_20260810_032905_970.jpg",
"کانتر۲ مود منو",
"https://rubika.ir/Counter2Mod/BGJHJBCFIDAHDABG"
],

[
"https://cdn.imgurl.ir/uploads/v898901_IMG_20260810_033310_913.jpg",
"کانتر۲ مود منو عالی",
"https://rubika.ir/Counter2Mod/BHAAHJDADEDFJABG"
],

[
"https://cdn.imgurl.ir/uploads/p742_IMG_20260810_033449_119.jpg",
"کانتر۲ مود منو",
"https://rubika.ir/Counter2Mod/BHJJIEDHAJFEIABG"
],

[
"https://cdn.imgurl.ir/uploads/o448790_IMG_20260810_035533_382.jpg",
"کانتر۲ مود منو جدید خفن",
"https://rubika.ir/Counter2Mod/BIAAFFHAFGHEFABG"
]

];

const downloadsBox =
document.getElementById("downloads");

downloads.forEach(function(item){

    const card =
    document.createElement("div");

    card.className =
    "download-item";

    card.innerHTML = `

        <img
            src="${item[0]}"
            class="post-image"
            alt="${item[1]}"
            loading="lazy">

        <div class="btn-box">

            <a
                href="${item[2]}"
                target="_blank"
                rel="noopener"
                class="glass-btn primary">
                دانلود پست بالا
            </a>

        </div>
    `;

    downloadsBox.appendChild(card);

});

/* =========================
   منو
========================= */

const menuButton =
document.getElementById("menuButton");

const sideMenu =
document.getElementById("sideMenu");

const menuOverlay =
document.getElementById("menuOverlay");

function openMenu(){

    sideMenu.classList.add("open");
    menuOverlay.classList.add("open");
    menuButton.classList.add("active");

    menuButton.setAttribute(
        "aria-expanded",
        "true"
    );
}

function closeMenu(){

    sideMenu.classList.remove("open");
    menuOverlay.classList.remove("open");
    menuButton.classList.remove("active");

    menuButton.setAttribute(
        "aria-expanded",
        "false"
    );
}

menuButton.addEventListener(
    "click",
    function(){

        if(sideMenu.classList.contains("open")){
            closeMenu();
        }else{
            openMenu();
        }

    }
);

menuOverlay.addEventListener(
    "click",
    closeMenu
);

/* =========================
   صفحات
========================= */

let historyStack = [];

let currentPageId = "page1";

const backBtn =
document.getElementById("backBtn");

function showPage(id){

    const target =
    document.getElementById(id);

    if(!target){
        return;
    }

    document
    .querySelectorAll(".page-section")
    .forEach(function(section){

        section.style.display = "none";

    });

    target.style.display = "block";

    currentPageId = id;

    backBtn.style.display =
        historyStack.length
        ? "block"
        : "none";

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
}

function goBack(){

    if(historyStack.length === 0){
        return;
    }

    const previous =
    historyStack.pop();

    showPage(previous);
}

backBtn.addEventListener(
    "click",
    goBack
);

document.body.addEventListener(
    "click",
    function(event){

        const link =
        event.target.closest("a");

        if(!link){
            return;
        }

        const href =
        link.getAttribute("href");

        if(
            href &&
            href.startsWith("#")
        ){

            event.preventDefault();

            const pageId =
            href.substring(1);

            if(
                pageId &&
                pageId !== currentPageId
            ){

                historyStack.push(
                    currentPageId
                );

                showPage(pageId);
            }

            if(
                link.classList.contains(
                    "menu-page-link"
                )
            ){

                closeMenu();

            }
        }
    }
);

document.addEventListener(
    "keydown",
    function(event){

        if(event.key === "Escape"){
            closeMenu();
        }

    }
);

window.addEventListener(
    "load",
    function(){
        showPage("page1");
    }
);

</script>

</body>
</html>
