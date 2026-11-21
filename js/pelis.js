/*
 * pelis.js — Catálogo de películas usado por peliculas.html … peliculas7.html
 *
 * Para AGREGAR una película, añade una línea al INICIO del arreglo PELIS:
 *   { t: "Título (2026)", img: "URL del póster", v: "URL del .mp4" }    → se reproduce en el reproductor #video
 *   { t: "Título (2026)", img: "URL del póster", e: "URL de la página" } → se abre en una pestaña nueva
 *
 * El año entre paréntesis al final del título alimenta el filtro "Año".
 */
(function () {
  'use strict';

  // ------------------------------------------------------------------
  // Datos
  // ------------------------------------------------------------------
  var PELIS = [
    {"t":"Sleepwalker (2026)","img":"https://image.tmdb.org/t/p/w600_and_h900_face/760SP4VsZagpyB9WLfeZykE3DFg.jpg","e":"https://arianathankspecial.com/e/o0qwhojl46ph"},
    {"t":"9 lunas (2026)","img":"https://image.tmdb.org/t/p/w600_and_h900_face/aQ9uc9CtgN05qedbD8aSFp6NQn5.jpg","e":"https://arianathankspecial.com/e/ylq9mvazr6tx"},
    {"t":"Un buen abogado (2026)","img":"https://image.tmdb.org/t/p/w600_and_h900_face/tVJITyPQXww6DypTDlpILM0Ppzi.jpg","e":"https://arianathankspecial.com/e/drkvdn9lmnl1"},
    {"t":"The 12 Dates of Christmas (2026)","img":"https://image.tmdb.org/t/p/w600_and_h900_face/w82vKEoYNZ9SxYxvccxO85CnZKE.jpg","e":"https://arianathankspecial.com/e/lxcyqreii0hj"},
    {"t":"Don't Let the Sun (2026)","img":"https://image.tmdb.org/t/p/w600_and_h900_face/aRVlgVMyCuEHiPlGbnOydsVaD85.jpg","e":"https://arianathankspecial.com/e/yu4h23deeupb"},
    {"t":"The Restoration at Grayson Manor (2026)","img":"https://image.tmdb.org/t/p/w600_and_h900_face/m9aKkiCwlQWri27z9WEwezfkUcw.jpg","e":"https://arianathankspecial.com/e/b0dmn5zynfic"},
    {"t":"A Richer Christmas (2026)","img":"https://a.ltrbxd.com/resized/film-poster/1/6/5/5/5/4/5/1655545-a-richer-christmas-0-1000-0-1500-crop.jpg?v=3587408da4","e":"https://arianathankspecial.com/e/nc8peg9relzp"},
    {"t":"Terrell & T.O. (2026)","img":"https://image.tmdb.org/t/p/w600_and_h900_face/tur8rRYXYeWN7Kq2CWEPC5PiJr0.jpg","e":"https://arianathankspecial.com/e/hrbhu60kl13b"},
    {"t":"Savage Mountain (2026)","img":"https://image.tmdb.org/t/p/w600_and_h900_face/zp749VDFadCAsUcWmNXI2j1h1mV.jpg","e":"https://arianathankspecial.com/e/xjbg4zlbayiv"},
    {"t":"Robotica (2026)","img":"https://image.tmdb.org/t/p/w600_and_h900_face/fZD9b4RRmFWwYVn6MCcrHebTDDc.jpg","e":"https://arianathankspecial.com/e/zffgcuctu1d9"},
    {"t":"El Club del Pie Izquierdo (2026)","img":"https://a.ltrbxd.com/resized/film-poster/1/6/0/9/6/9/3/1609693-el-club-del-pie-izquierdo-0-1000-0-1500-crop.jpg?v=eb971738c6","e":"https://arianathankspecial.com/e/yh4lb7jrux3h"},
    {"t":"The Last Temptation of Becky (2026)","img":"https://image.tmdb.org/t/p/w600_and_h900_face/dS2EUbnMyfv1bWsGa6GBgzwp5cF.jpg","e":"https://arianathankspecial.com/e/pjjh83luu5kp"},
    {"t":"Perfectos mentirosos (2026)","img":"https://image.tmdb.org/t/p/w600_and_h900_face/1amYmUeoBi23kGcR2pWQclEzXk2.jpg","e":"https://caseyseemavoid.com/e/mizvvfxkr0ji"},
    {"t":"Un monstruo amable (2026)","img":"https://image.tmdb.org/t/p/w600_and_h900_face/bBPDstXaaQAGueDMVTS29vhHLfs.jpg","e":"https://caseyseemavoid.com/e/rxnbi8muk2oi"},
    {"t":"Culpa Tuya: Londres (2026)","img":"https://image.tmdb.org/t/p/w600_and_h900_face/oeOmayFaiGz6km5vShPpDBQnZf1.jpg","e":"https://caseyseemavoid.com/e/3gsm2rqo6371"},
    {"t":"Maestros Del Crimen (2026)","img":"https://image.tmdb.org/t/p/w600_and_h900_face/8K4lZ5oepk3kArMWfQuqSegxSRe.jpg","e":"https://caseyseemavoid.com/e/snzwzdmiyulm"},
    {"t":"Gordon (2026)","img":"https://image.tmdb.org/t/p/w500/mstDPKNKgSGFvVFVdfzeMNkcyw2.jpg","e":"https://caseyseemavoid.com/e/arzji16uqjut"},
    {"t":"Son Yemek (2026)","img":"https://image.tmdb.org/t/p/w600_and_h900_face/5VhfAWFs005xxN9akWJ2VIF5ozJ.jpg","e":"https://caseyseemavoid.com/e/i7r3c3vvaa3w"},
    {"t":"Guarding Stars (2026)","img":"https://image.tmdb.org/t/p/w600_and_h900_face/wQUXEPumBrVJR3Fe9h0xnwcnyFp.jpg","e":"https://caseyseemavoid.com/e/9ryecmnfzuvk"},
    {"t":"Madden (2026)","img":"https://image.tmdb.org/t/p/w600_and_h900_face/bRa83oPFFPqaAF3wrpVWPqqfFel.jpg","e":"https://caseyseemavoid.com/e/pvodijw4xdgm"},
    {"t":"Monkey’s Magic Merry Go Round (2026)","img":"https://media.themoviedb.org/t/p/w300_and_h450_face/rMJ4hIdvCCmBGXGASLLV08q8Z07.jpg","e":"https://caseyseemavoid.com/e/om70xm9jiozf"},
    {"t":"No Rest for the Wicked (2026)","img":"https://image.tmdb.org/t/p/w600_and_h900_face/wFjWt33Atg3j43hR7Q0cH1y9uY6.jpg","e":"https://caseyseemavoid.com/e/3vkywl2g0bcz"},
    {"t":"Cobarde (2026)","img":"https://image.tmdb.org/t/p/w600_and_h900_face/uN8NTdWa6TfPCa9kJWwh8fKJn8Z.jpg","e":"https://caseyseemavoid.com/e/vd3lxkxfcl0l"},
    {"t":"Suzane von Richthofen: Lo que el tiempo no borra (2026)","img":"https://www.sinsitio.site/uploads/posts/2026-11/medium/lo.jpg","e":"https://caseyseemavoid.com/e/waff01nzjbzi"},
    {"t":"Mahou Shoujo Madoka Magica: Walpurgisnacht Rising (2026)","img":"https://media.themoviedb.org/t/p/w300_and_h450_face/g4kCd4rMuN7G3VQQDUT6mLbrBqQ.jpg","e":"https://caseyseemavoid.com/e/6x3nvdlpqqm9"},
    {"t":"El deshielo (2026)","img":"https://image.tmdb.org/t/p/w600_and_h900_face/4vP54uZTDAnycDyVwp0i6L9jWmN.jpg","e":"https://caseyseemavoid.com/e/sfsswsldi84f"},
    {"t":"Fightland (2026)","img":"https://image.tmdb.org/t/p/w600_and_h900_face/dPHG2GEIFHkjMtswYltBAEU4UK4.jpg","e":"https://caseyseemavoid.com/e/sbpn9ytd0hxq"},
    {"t":"A Proud Family Wizmas (2026)","img":"https://image.tmdb.org/t/p/w600_and_h900_face/8JY6G5DSp8NUweUz5xJ5NtyqSp3.jpg","e":"https://caseyseemavoid.com/e/ixphnhthkf1b"},
    {"t":"El deshielo (2026)","img":"https://imgs.search.brave.com/a82QAZtAbCsIGTsZgr2zX2LDVyE_ffwzV9y2-PKUlHc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wb3N0/ZXJzLm1vdmllcG9z/dGVyZGIuY29tLzI2/XzEwLzIwMjYvNDAw/OTY5ODYvbF9jb21l/LWF3YXktd2l0aC1t/ZS0yMDI2LW1vdmll/LXBvc3Rlcl83YTgz/MDg2Yy5qcGc_dj0y","e":"https://caseyseemavoid.com/e/9b8zqau4bycf"},
    {"t":"Marrow (2026)","img":"https://image.tmdb.org/t/p/w600_and_h900_face/jBDIainOGJbpjiyCrfRgPvzpiia.jpg","e":"https://caseyseemavoid.com/e/xz8nlkeanww8"},
    {"t":"Extra Geography (2026)","img":"https://image.tmdb.org/t/p/w600_and_h900_face/yhHRpLhtaFXGYMsE5LuaRvZYs77.jpg","e":"https://caseyseemavoid.com/e/j6jjmvdqtzlz"},
    {"t":"Avedon (2026)","img":"https://image.tmdb.org/t/p/w600_and_h900_face/ziyEHM0P1TgvhVXIqqguoMAD0TJ.jpg","e":"https://caseyseemavoid.com/e/oejuzfel8v3u"},
    {"t":"Como robar un banco (2026)","img":"https://image.tmdb.org/t/p/w600_and_h900_face/xS35fgWgRdF2em5MGxg5WG9dPKd.jpg","e":"https://caseyseemavoid.com/e/ukrmnzxtfcfw"},
    {"t":"Heartland (2026)","img":"https://image.tmdb.org/t/p/w600_and_h900_face/zhxlzxBlO1sWB1rPn7RmAoeQ2na.jpg","e":"https://caseyseemavoid.com/e/aoqdxg59kx6g"},
    {"t":"La Psicopata (2026)","img":"https://mx.web.img2.acsta.net/c_310_420/img/06/d1/06d147ca04f80b0ecb3b4ed27fb59dd3.jpg","e":"https://caseyseemavoid.com/e/9rivk3rrbfaw"},
    {"t":"Ebenezer: Los fantasmas de Navidad (2026)","img":"https://image.tmdb.org/t/p/w600_and_h900_face/ekfB30eDEJAHHEW7yI4gLcq0k3A.jpg","e":"https://caseyseemavoid.com/e/e5wehg3m5x7k"},
    {"t":"La venganza del Charro Negro (2026)","img":"https://image.tmdb.org/t/p/w600_and_h900_face/in3F0moyJ5EDpwRmXRFV9UVac1B.jpg","e":"https://caseyseemavoid.com/e/y6p2jqeqq6rn"},
    {"t":"Insecta (2026)","img":"https://image.tmdb.org/t/p/w600_and_h900_face/3FzjY7P79R5sb3hCQUWEy7MT6Fs.jpg","e":"https://caseyseemavoid.com/e/gyaawhvbtj8c"},
    {"t":"Ser Heumann (2026)","img":"https://image.tmdb.org/t/p/w600_and_h900_face/bFw3y0v6xl24qxG36ve1ZjNnufo.jpg","e":"https://caseyseemavoid.com/e/dpefld5ewibz"},
    {"t":"Snoopy presenta: 12 días de Snoopy (2026)","img":"https://image.tmdb.org/t/p/w600_and_h900_face/bC0Rb0Mls2b493O3ic2IypUFo57.jpg","e":"https://caseyseemavoid.com/e/84xd4jiwfnie"},
    {"t":"Allen (2026)","img":"https://image.tmdb.org/t/p/w600_and_h900_face/alhhrpj1PSAn5bfz4Os1k7Bweoj.jpg","e":"https://caseyseemavoid.com/e/o44mlukgwj3c"},
    {"t":"El intercambio navideño (2026)","img":"https://image.tmdb.org/t/p/w600_and_h900_face/xKhsKS0VY21uHXTBk5Wyrx9VfPZ.jpg","e":"https://caseyseemavoid.com/e/rjiez2tzsqbv"},
    {"t":"No nos rendimos (2026)","img":"https://image.tmdb.org/t/p/w600_and_h900_face/6cHYHIv2tcUAZsyzUi5Hcwa1IAB.jpg","e":"https://caseyseemavoid.com/e/1tn4xw8kyziz"},
    {"t":"Les Mariages de Saint Antoine (2026)","img":"https://i.ibb.co/TqLV7QDt/1b9944d3834b.jpg","e":"https://caseyseemavoid.com/e/tj0har4ngir6"},
    {"t":"Blue Heron (2026)","img":"https://image.tmdb.org/t/p/w600_and_h900_face/8qy2dbkyeLj0Jh2lUPLCNTHMmxy.jpg","e":"https://caseyseemavoid.com/e/er6b4bcenkjv"},
    {"t":"Fresh Meat (2026)","img":"https://image.tmdb.org/t/p/w600_and_h900_face/cbDWLVV7b3RAHvQBMd7eSvR5gBy.jpg","e":"https://caseyseemavoid.com/e/rsqwtfptgoik"},
    {"t":"The Floaters (2026)","img":"https://image.tmdb.org/t/p/w600_and_h900_face/6VHAOIOO4MJXv19EtW5WFVRWztH.jpg","e":"https://caseyseemavoid.com/e/lhvwq83jid0h"},
    {"t":"The Gospel of Christmas (2026)","img":"https://image.tmdb.org/t/p/w600_and_h900_face/kzTJg0zhWJRDHJPYEpSqxkFigTv.jpg","e":"https://caseyseemavoid.com/e/sjevss8aaimw"},
    {"t":"Atonement (2026)","img":"https://image.tmdb.org/t/p/w600_and_h900_face/zQPB0tL1sH1r54EDlqMugYqmcuu.jpg","e":"https://caseyseemavoid.com/e/kbhzv2wwwmgj"},
    {"t":"Reckless (2026)","img":"https://image.tmdb.org/t/p/w600_and_h900_face/m9eKFDSRFkCBoFw2oPRAUvTEUCH.jpg","e":"https://caseyseemavoid.com/e/poppe7bs6rdb"},
    {"t":"Everybody Digs Bill Evans (2026)","img":"https://image.tmdb.org/t/p/w600_and_h900_face/fGwz8f16pYPErspL0QpQYvOZMZj.jpg","e":"https://caseyseemavoid.com/e/vgtqdclsqjdf"},
    {"t":"Ha-Chan, Shake Your Booty! (2026)","img":"https://image.tmdb.org/t/p/w600_and_h900_face/w98RWv9o05OhXYfTvauDrotRZ13.jpg","e":"https://caseyseemavoid.com/e/tgzq02qeupca"},
    {"t":"Portrait of an Artist: Stephen Curry (2026)","img":"https://lumiere-a.akamaihd.net/v1/images/p_disneymovies_portrait_of_an_artist_stephen_curry_v2_9a03c509.jpeg","e":"https://caseyseemavoid.com/e/bfmcuxjejrmi"},
    {"t":"Tina Arena: Unravel Me (2026)","img":"https://a.ltrbxd.com/resized/film-poster/1/5/9/0/8/5/5/1590855-tina-arena-unravel-me-0-1000-0-1500-crop.jpg?v=7a6b5317f3","e":"https://caseyseemavoid.com/e/hwz6nmdnoyyx"},
    {"t":"El mono (2025)","img":"https://assets.biggerpicture.ai/assets/HO-1600/eventmaster/1136_4.png","v":"https://ia903207.us.archive.org/9/items/Kmonito/Kmonito.mp4"},
    {"t":"La compañera perfecta (2025)","img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH_jwdXm6FHdNgv88RD39gMGgIDCDG8LRpOA&s","v":"https://ia601300.us.archive.org/30/items/Copernico/Copernico.mp4"},
    {"t":"Capitan America el nuevo mundo (2025)","img":"https://image.tmdb.org/t/p/original/xVwP4GCbEfO66JSSyonnAhU3Fad.jpg","v":"https://ia601404.us.archive.org/3/items/dobereiner/D%C3%B6bereiner.mp4"},
    {"t":"Sonic (2025)","img":"https://es.web.img2.acsta.net/c_210_280/img/c3/70/c3703dc747fb19cf232978ea08e8e9f4.jpg","v":"https://ia600808.us.archive.org/1/items/sonet-3.5/Sonet3.5-.mp4"},
    {"t":"Kraven el cazador (2024)","img":"https://static.cinepolis.com/resources/mx/movies/posters/414x603/48347-701766-20241210092337.jpg","v":"https://ia800609.us.archive.org/14/items/Crackets/Crackets.mp4"},
    {"t":"Paddington: Aventura en la selva (2024)","img":"https://static.cinepolis.com/resources/mx/movies/posters/414x603/48473-746696-20241216112244.jpg","v":"https://ia600806.us.archive.org/5/items/padding-pillow/Padding%20pillow.mp4"},
    {"t":"Código: Traje Rojo (2024)","img":"https://static.cinepolis.com/resources/mx/movies/posters/414x603/47807-327301-20241010043952.jpg","v":"https://ia800609.us.archive.org/35/items/Superklaus/Superklaus.mp4"},
    {"t":"Mufasa el rey leon (2024)","img":"https://static.cinepolis.com/resources/mx/movies/posters/414x603/48461-436544-20241217084917.jpg","v":"https://ia800702.us.archive.org/33/items/Mufarse/Mufarse.mp4"},
    {"t":"EL Conde de montecristo (2024)","img":"https://static.cinepolis.com/resources/mx/movies/posters/414x603/47299-843109-20240830022501.jpg","v":"https://ia904501.us.archive.org/16/items/konde_202502/Konde.mp4"},
    {"t":"El robo perfecto: Pantera (2025)","img":"https://static.cinepolis.com/resources/mx/movies/posters/414x603/48621-607155-20241218051239.jpg","v":"https://ia904502.us.archive.org/32/items/robber-inprogress/RobberInprogress.mp4"},
    {"t":"MaXXXine (2024)","img":"https://static.cinepolis.com/resources/mx/movies/posters/414x603/46698-644406-20240621115458.jpg","v":"https://ia800806.us.archive.org/6/items/Maximad/Maximad.mp4"},
    {"t":"The Apprentice. La historia de Trump (2024)","img":"https://megustaelcine.com/wp-content/uploads/2024/10/POSTER-El-aprendiz.jpg","v":"https://ia800609.us.archive.org/1/items/beginner_202502/Beginner.mp4"},
    {"t":"Superman: La historia de Christopher Reeve (2024)","img":"https://static.cinepolis.com/resources/mx/movies/posters/414x603/47893-122524-20241010010020.jpg","v":"https://ia600808.us.archive.org/29/items/ese-man/Ese-man.mp4"},
    {"t":"Moana 2 (2024)","img":"https://static.cinepolis.com/resources/mx/movies/posters/414x603/48111-551207-20241128085911.jpg","v":"https://ia903201.us.archive.org/7/items/mamona-2/Mamona2.mp4"},
    {"t":"Jurado Nº 2 (2024)","img":"https://m.media-amazon.com/images/S/pv-target-images/709d19ee83c23c1cff8d6114545decf12e5f66bba1ed844f4222ae31bd468e5d.jpg","v":"https://ia601408.us.archive.org/15/items/neta-melo-juras-num-2/NetaMeloJurasNum2.mp4"},
    {"t":"Wicked (2024)","img":"https://static.cinepolis.com/resources/mx/movies/posters/414x603/47963-399604-20241120081300.jpg","v":"https://ia903200.us.archive.org/29/items/dekci-w-21/DekciW21.mp4"},
    {"t":"Gladiator 2 (2024)","img":"https://pics.filmaffinity.com/Gladiator_II-808387712-large.jpg","v":"https://ia601501.us.archive.org/24/items/Peleadordos/Peleadordos.mp4"},
    {"t":"No hables con extraños (2024)","img":"https://static.cinepolis.com/resources/mx/movies/posters/414x603/47213-327845-20240822060321.jpg","v":"https://ia600805.us.archive.org/25/items/elcocono/elcocono.mp4"},
    {"t":"Venom el ultimo baile (2024)","img":"https://static.cinepolis.com/resources/mx/movies/posters/414x603/47607-774281-20241024062218.jpg","v":"https://ia600409.us.archive.org/20/items/Bennim/Bennim.mp4"},
    {"t":"Terrifier 3: Payaso Siniestro (2024)","img":"https://static.cinepolis.com/resources/mx/movies/posters/414x603/48015-422893-20241017113401.jpg","v":"https://ia800806.us.archive.org/34/items/yaso-3/Yaso3.mp4"},
    {"t":"Hellboy: The Crooked Man (2024)","img":"https://www.findelahistoria.com/web/wp-content/uploads/2024/07/Hellboy-The-Crooked-Man-poster.jpg","v":"https://ia601709.us.archive.org/0/items/diablillo-pillo/DiablilloPillo.mp4"},
    {"t":"Robot Salvaje (2024)","img":"https://static.cinepolis.com/resources/mx/movies/posters/414x603/47427-649819-20240911011247.jpg","v":"https://hetbuild860092.takeplcdn.art/d/e2zpwlcjo7hvw4m63wv5j3kot4gnhzwutlulh3qejplieoll2hxidzhfmp2hgqxwambk65jb/Um9ib3Qgc2FsdmFqZSAoMjAyNCk=.LAT.mp4"},
    {"t":"Al rescate de Fondo de Bikini (2024)","img":"https://www.justwatch.com/images/poster/318099780/s718/al-rescate-de-fondo-de-bikini-la-pelicula-de-arenita-mejillas.jpg","v":"https://ia800109.us.archive.org/13/items/bob-toronja/BobToronja.ia.mp4"},
    {"t":"La Sustancia (2024)","img":"https://pics.filmaffinity.com/La_sustancia-259383439-large.jpg","v":"https://ia600608.us.archive.org/26/items/simi-active/SimiActive.mp4"},
    {"t":"Joker: Folie à Deux (2024)","img":"https://cdn.mallmarina.cl/mallconcepcion/uploads/2024/09/Joker-2.jpg","e":"https://gamovideo.com/gqtg2wddawqy"},
    {"t":"Transformers Uno (2024)","img":"https://moviecrazyplanet.com/wp-content/uploads/2024/07/Transformers-Uno-Chris-Hemsworth-.jpg","e":"https://gamovideo.com/9lnh1lej8qkd"},
    {"t":"Instintos asesinos (2024)","img":"https://image.tmdb.org/t/p/original/wIDulcEDrbW5tLaAHIUqODaTGG6.jpg","e":"https://gamovideo.com/nkhr5b5o3ez5"},
    {"t":"Tipos de Gentileza (2024)","img":"https://static.cinepolis.com/resources/mx/movies/posters/414x603/47098-323896-20240812011446.jpg","e":"https://gamovideo.com/86zg4j4qc25y"},
    {"t":"Borderlands (2024)","img":"https://image.tmdb.org/t/p/w500//865DntZzOdX6rLMd405R0nFkLmL.jpg","e":"https://gamovideo.com/uv8ulhzazwg5"},
    {"t":"El cuervo (2024)","img":"https://megustaelcine.com/wp-content/uploads/2024/08/POSTER-El-cuervo-2024-717x1024.jpg","e":"https://gamovideo.com/s2d9kxwzm81w"},
    {"t":"Beetlejuice Beetlejuice (2024)","img":"https://static.cinepolis.com/resources/mx/movies/posters/414x603/47141-607088-20240904070840.jpg","v":"https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fsep24%2FVer%20Beetlejuice%20Beetlejuice%20online%20HD%20-%20Cuevana%202.mp4"},
    {"t":"Miller (2024)","img":"https://image.tmdb.org/t/p/w500/sIFz9N45kbGHScotbeK1r1LZXQi.jpg","v":"https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fjul24%2FVer%20Un%20lugar%20en%20silencio-%20D%C3%ADa%20uno%20online%20HD%20-%20Cuevana%202.mp4"},
    {"t":"Lift: Un robo de primera clase (2024)","img":"https://image.tmdb.org/t/p/w500/46sp1Z9b2PPTgCMyA87g9aTLUXi.jpg","v":"https://axa4wow3dcia.objectstorage.us-phoenix-1.oci.customer-oci.com/n/axa4wow3dcia/b/bucket-20201001-1658/o/pelis2024%2FVer%20Lift-%20Un%20robo%20de%20primera%20clase%20Online%20Castellano%20Latino%20Subtitulada%20HD%20-%20HDFull.mp4"},
    {"t":"Alien: Romulus (2024)","img":"https://image.tmdb.org/t/p/w500//b33nnKl1GSFbao4l3fZDDqsMx0F.jpg","v":"https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fago24%2FVer%20Alien-%20Romulus%20online%20HD%20-%20Cuevana%202.mp4"},
    {"t":"Colateral (2024)","img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuPEON5NKz5tx6ovoCBuCN15uY8Ija_eZQnw&s","v":"https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fago24%2FVer%20Colateral%20online%20HD%20-%20Cuevana%202.mp4"},
    {"t":"Mi villano favorito 4 (2024)","img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfiG3w8NkOgQMSEm5Mp7wBKuhyhJh3YeaPfg&s","v":"https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fago24%2FVer%20Mi%20villano%20favorito%204%20online%20HD%20-%20Cuevana%202.mp4"},
    {"t":"Deadpool and Wolverine (2024)","img":"https://i.pinimg.com/736x/6f/4a/b8/6f4ab823d4a61e08724d647c14daa888.jpg","v":"https://ia801505.us.archive.org/28/items/picina-y-tacos-al-pastor/picina%20y%20tacos%20al%20pastor.mp4"},
    {"t":"La Joven y El Mar (2024)","img":"https://www.lavanguardia.com/peliculas-series/images/movie/poster/2024/5/w1280/oyQXRZD0CHC4sf3lMph3X3cJzSw.jpg","v":"https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fjul24%2FVer%20La%20Joven%20y%20El%20Mar%20online%20HD%20-%20Cuevana%202.mp4"},
    {"t":"Un detective suelto en Hollywood 4 (2024)","img":"https://image.tmdb.org/t/p/w500/zszRKfzjM5jltiq8rk6rasKVpUv.jpg","v":"https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fjul24%2FVer%20Un%20detective%20suelto%20en%20Hollywood-%20Axel%20F.%20online%20HD%20-%20Cuevana%202.mp4"},
    {"t":"En las profundidades del Sena (2024)","img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEHfhTF0oy6skJekzn-urBiUqvITm35cc_Hf0TZgHDYn3XF8AnShEj7tsymx88fGU5npQ&usqp=CAU","v":"https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fjun24%2FVer%20En%20las%20profundidades%20del%20Sena%20online%20HD%20-%20Cuevana%202.mp4"},
    {"t":"Winnie the Pooh: Sangre y miel 2 (2024)","img":"https://static.cinepolis.com/resources/mx/movies/posters/414x603/46050-191463-20240411040001.jpg","v":"https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fjun24%2FWatch%20Winnie%20the%20Pooh%20Blood%20and%20Honey%202024%20WEBDLSCR1080L4T%20mp4.mp4"},
    {"t":"Winnie the Pooh: Sangre y miel 1 (2023)","img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAsMHxazymkapJQdamK14_mH4GX4yj7j9nPg&s","v":"https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Foctubre%2FWatch%20Winnie%20the%20Pooh%20Miel%20Y%20Sangre%20mp4.mp4"},
    {"t":"Atlas (2024)","img":"https://image.tmdb.org/t/p/w500/bcM2Tl5HlsvPBnL8DKP9Ie6vU4r.jpg","v":"https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fmay24%2FVer%20Atlas%20online%20HD%20-%20Cuevana%202.mp4"},
    {"t":"Mi Querida Oni (2024)","img":"https://image.tmdb.org/t/p/w500/k69kkwsipkPn7Nzq488kHGQTPo.jpg","v":"https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fmay24%2FVer%20Mi%20Querida%20Oni%20online%20HD%20-%20Cuevana%202.mp4"},
    {"t":"Bad Boys: Hasta la muerte (2024)","img":"https://static.cinepolis.com/resources/mx/movies/posters/414x603/46315-649869-20240605010322.jpg","v":"https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fjun24%2FVer%20Bad%20Boys-%20Hasta%20la%20muerte%20online%20HD%20-%20Cuevana%202.mp4"},
    {"t":"El planeta de los simios: nuevo reino (2024)","img":"https://storage.googleapis.com/citicinemas-store/Movie-1723/poster/E7hGtIrEAXzs/46045-576386-20240410104502.jpg","v":"https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fmay24%2FVer%20El%20planeta%20de%20los%20simios-%20Nuevo%20reino%20online%20HD%20-%20Cuevana%202.mp4"},
    {"t":"Furiosa: De la saga Mad Max (2024)","img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-mWDsHg6vmNN6cYUiSo2_MksBvQJpe2tnsA&s","v":"https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fmay24%2FVer%20Furiosa-%20De%20la%20saga%20Mad%20Max%20online%20HD%20-%20Cuevana%202.mp4"},
    {"t":"Tarot de la muerte (2024)","img":"https://static.cinepolis.com/resources/mx/movies/posters/414x603/45970-108450-20240403081904.jpg","v":"https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fmay24%2FVer%20Tarot%20de%20la%20muerte%20online%20HD%20-%20Cuevana%202.mp4"},
    {"t":"Sin glasear (2024)","img":"https://media.filmelier.com/tit/9F7PZQ/poster/sin-glasear_Gsg31pQ.jpeg","v":"https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fmay24%2FVer%20Sin%20glasear%20online%20HD%20-%20Cuevana%202.mp4"},
    {"t":"Luna sin miel (2024)","img":"https://image.tmdb.org/t/p/w500/v2YJ94cEfV8ORTPUqdBrwMosJbR.jpg","v":"https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fmay24%2FVer%20Luna%20Sin%20Miel%20online%20HD%20-%20Cuevana%202.mp4"},
    {"t":"Fiesta en la Madriguera (2024)","img":"https://pics.filmaffinity.com/Fiesta_en_la_madriguera-375852656-large.jpg","v":"https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fmay24%2FVer%20Fiesta%20en%20la%20Madriguera%20online%20HD%20-%20Cuevana%202.mp4"},
    {"t":"Garfield: La película (2024)","img":"https://static.cinepolis.com/resources/mx/movies/posters/414x603/46123-684523-20240430031929.jpg","v":"https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fmay24%2FGarfield%20Fuera%20de%20Casa%20fastplay.mp4"},
    {"t":"El especialista (2024)","img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBs2mFO9J3RgyBZsobQwi2-yTPZXsOknAN4zkfsDVqbdbjeENaFWLqihChov-NChFc-uA&usqp=CAU","v":"https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fabr24%2FVer%20Profesi%C3%B3n%20peligro%20online%20HD%20-%20Cuevana%202.mp4"},
    {"t":"Abigail (2024)","img":"https://image.tmdb.org/t/p/w500/5Ggf38fEAhOCdgvfLOfUcfEQTQT.jpg","v":"https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fmay24%2FVer%20Abigail%20online%20HD%20-%20Cuevana%202.mp4"},
    {"t":"El Pájaro Loco se va de campamento (2024)","img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsRyAwfEhE0LMmjXQsOVTyLzAF7lANPpKCQUK4dYOUWjn3kpaakaDhvT6ham5FlfW5z_g&usqp=CAU","v":"https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fsep24%2FVer%20Beetlejuice%20Beetlejuice%20online%20HD%20-%20Cuevana%202.mp4"},
    {"t":"Rebel Moon (Parte dos) (2024)","img":"https://image.tmdb.org/t/p/w500/cxevDYdeFkiixRShbObdwAHBZry.jpg","v":"https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fabr24%2FVer%20Rebel%20Moon%20-%20Parte%20Dos-%20La%20Guerrera%20que%20Deja%20Marcas%20online%20HD%20-%20Cuevana%202.mp4"},
    {"t":"Desafiantes (2024)","img":"https://image.tmdb.org/t/p/w500/H6vke7zGiuLsz4v4RPeReb9rsv.jpg","v":"https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fabr24%2FVer%20Desafiantes%20online%20HD%20-%20Cuevana%202.mp4"},
    {"t":"El Arca de Noé (2024)","img":"https://image.tmdb.org/t/p/w342/fRaBjht3S1HU6lJrz2SoFwwOZQM.jpg","v":"https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fmar24%2FVer%20Arca%20de%20No%C3%A9%20online%20HD%20-%20Cuevana%202.mp4"},
    {"t":"Los Menospreciados (2024)","img":"https://image.tmdb.org/t/p/w500/qjx6CMGEqYheoOhwUrDDAyke9z1.jpg","v":"https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fene24%2FVer%20Los%20menospreciados%20online%20HD%20-%20Cuevana%202.mp4"},
    {"t":"Código 8 (Parte 2) (2024)","img":"https://images.justwatch.com/poster/312328260/s718/codigo-8.jpg","v":"https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Ffeb24%2FVer%20C%C3%B3digo%208-%20Renegados%20(Parte%20II)%20online%20HD%20-%20Cuevana%202.mp4"},
    {"t":"Baghead: Contacto con la muerte (2023)","img":"https://static.cinepolis.com/resources/mx/movies/posters/414x603/45298-186406-20240125044141.jpg","v":"https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fabr24%2FVer%20Baghead-%20Contacto%20Con%20La%20Muerte%20online%20HD%20-%20Cuevana%202.mp4"},
    {"t":"Imaginario: Juguete diabólico (2024)","img":"https://moviefilms.com.uy/wp-content/uploads/2023/12/Imaginario.jpg","v":"https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fmar24%2FVer%20Imaginario-%20juguete%20diab%C3%B3lico%20online%20HD%20-%20Cuevana%202.mp4"},
    {"t":"Ricky Stanicky: El impostor (2024)","img":"https://image.tmdb.org/t/p/w500/oJQdLfrpl4CQsHAKIxd3DJqYTVq.jpg","v":"https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fmar24%2FVer%20Ricky%20Stanicky-%20El%20impostor%20online%20HD%20-%20Cuevana%202.mp4"},
    {"t":"Diario de mi Vagina (2024)","img":"https://m.media-amazon.com/images/S/pv-target-images/9eeda69afbfe596d9d652b7f00f3aeb9e612fec80a464b28210ac04b53448b49.jpg","v":"https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fmar24%2FVer%20Diario%20de%20mi%20vagina%20online%20HD%20-%20Cuevana%202.mp4"},
    {"t":"Apocalipsis Fantasma (2024)","img":"https://static.cinepolis.com/resources/mx/movies/posters/414x603/45515-606465-20240320095056.jpg","v":"https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fabr24%2FVer%20Ghostbusters-%20Apocalipsis%20fantasma%20online%20HD%20-%20Cuevana%202.mp4"},
    {"t":"Damsel (2024)","img":"https://image.tmdb.org/t/p/w500/sMp34cNKjIb18UBOCoAv4DpCxwY.jpg","v":"https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fmar24%2FVer%20Damsel%20online%20HD%20-%20Cuevana%202.mp4"},
    {"t":"Atrapados en lo Profundo (2024)","img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdnP6dGaZj99SsixT3FJe6YGjFVpZlBkDzDzXFzAb7hKnPAkX2LQigXHK9_KdOmn_0Fq8&usqp=CAU","v":"https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fmar24%2FVer%20Atrapados%20en%20lo%20Profundo%20online%20HD%20-%20Cuevana%202.mp4"},
    {"t":"Frida (2024)","img":"https://image.tmdb.org/t/p/w500/qfPjPZF2AqB2XnXPFcHlYtlQRS3.jpg","v":"https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fmar24%2FWatch%20Frida%202024%201080L4T%20mp4.mp4"},
    {"t":"Un ladrón romántico (2024)","img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT26E-oIQ0BOqwm97UXPi99Tnh235RLgBF2mIRnuuMQ2Q&s","v":"https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fmar24%2FVer%20Un%20ladr%C3%B3n%20rom%C3%A1ntico%20online%20HD%20-%20Cuevana%202.mp4"},
    {"t":"La primera profecía","img":"https://www.mubis.es/media/movies/7895/324462/la-primera-profecia-original.jpg","v":"https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fabr24%2FVer%20La%20primera%20profec%C3%ADa%20online%20HD%20-%20Cuevana%202.mp4"},
    {"t":"Arthur (2024)","img":"https://es.web.img2.acsta.net/pictures/24/01/10/17/08/1200463.jpg","v":"https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fabr24%2FVer%20Arthur%20online%20HD%20-%20Cuevana%202.mp4"},
    {"t":"Godzilla y Kong: El nuevo imperio (2024)","img":"https://es.web.img2.acsta.net/pictures/24/02/27/16/28/3250275.jpg","v":"https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fabr24%2FVer%20Godzilla%20y%20Kong-%20El%20nuevo%20imperio%20online%20HD%20-%20Cuevana%202.mp4"},
    {"t":"Damsel (2024)","img":"https://image.tmdb.org/t/p/w500/sMp34cNKjIb18UBOCoAv4DpCxwY.jpg","v":"https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fmar24%2FVer%20Damsel%20online%20HD%20-%20Cuevana%202.mp4"},
    {"t":"Kung Fu Panda 4 (2024)","img":"https://image.tmdb.org/t/p/w500/wkfG7DaExmcVsGLR4kLouMwxeT5.jpg","v":"https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fmar24%2FWatch%20Kung%20Panda%202024%201080p%20CAMRip%20LAT%20DUB%201XBET%20mp4.mp4"},
    {"t":"Megamente el sindicato del mal (2024)","img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk9oxWy9BXcuoHYuggc43qush4yRTiQ6rfbL6S2X-WCPlVYxzr4xtyrYmSWE7gd6gADeg&usqp=CAU","v":"https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fmar24%2FVer%20Megamente%20contra%20el%20sindicato%20de%20Doom%20online%20HD%20-%20Cuevana%202.mp4"},
    {"t":"Duna - Parte dos (2024)","img":"https://mx.web.img2.acsta.net/pictures/24/01/24/20/40/2403201.jpg","v":"https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fmar24%2FVer%20Duna-%20Parte%20dos%20online%20HD%20-%20Cuevana%202.mp4"},
    {"t":"Bob Marley: la leyenda (2024)","img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVTijhP5A--1pwgp21Ra9GqI7mYYC0n101WA&s","v":"https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Ffeb24%2FVer%20Bob%20Marley-%20La%20leyenda%20online%20HD%20-%20Cuevana%202.mp4"},
    {"t":"Madame Web (2024)","img":"https://image.tmdb.org/t/p/w500/rULWuutDcN5NvtiZi4FRPzRYWSh.jpg","v":"https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Ffeb24%2FVer%20Madame%20Web%20online%20HD%20-%20Cuevana%202.mp4"},
    {"t":"Ricky Stanicky: El impostor (2024)","img":"https://play-lh.googleusercontent.com/b4brmc3O6UtWP7W1jlAPPC35i8tfRZztnn6-GCFjAobAKP7P8vkl0H-RhRtLZUbeuEyTWp7B6NpuJvJNYW8=w240-h480-rw","v":"https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Ffeb24%2FVer%20Chicas%20pesadas%20online%20HD%20-%20Cuevana%202.mp4"},
    {"t":"Pobres criaturas (2023)","img":"https://images.justwatch.com/poster/312181920/s718/pobres-criaturas.jpg","v":"https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Ffeb24%2FVer%20Pobres%20Criaturas%20online%20HD%20-%20Cuevana%202.mp4"},
    {"t":"El astronauta (2024)","img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9k15gwJdGQMfLFsIIX5Qo6KMxPY2UAo_mQB_nA9TsBkdMgsBDRlHIafOdMorQ62sxMj8&usqp=CAU","v":"https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fmar24%2FVer%20El%20astronauta%20online%20HD%20-%20Cuevana%202.mp4"},
    {"t":"El bufón (2023)","img":"https://media.filmelier.com/tit/kRiequ/poster/el-bufon_3A3gQuA.jpeg","v":"https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fdiciembre%2FVer%20El%20buf%C3%B3n%20online%20HD%20-%20Cuevana%202.mp4"},
    {"t":"Welcome al Norte (2023)","img":"https://image.tmdb.org/t/p/w500/9sA8HGHvbm9CqIJZfFmFZxgsOH6.jpg","v":"https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fnoviembre%2FVer%20Welcome%20al%20Norte%20online%20HD%20-%20Cuevana%202.mp4"},
    {"t":"1962 Halloween Masacre (2023)","img":"https://image.tmdb.org/t/p/w500/t2gpwYUF5xZUOiJKKg23ydpmjKk.jpg","v":"https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fnoviembre%2FVer%201962%20Halloween%20Massacre%20online%20HD%20-%20Cuevana%202.mp4"},
    {"t":"El arte de matar (2023)","img":"https://www.mubis.es/media/movies/7837/322026/el-arte-de-matar-original.jpg","v":"https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fdiciembre%2FVer%20El%20arte%20de%20matar%20online%20HD%20-%20Cuevana%202.mp4"},
    {"t":"Los Archies (2023)","img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2G0LGxj8psURJiZfYnzupQ3xdbs42eEotxkaJQ9mUCPTSF9xjVJlfgD7sI1JPmNn-q6I&usqp=CAU","v":"https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fdiciembre%2FVer%20Los%20Archies%20online%20HD%20-%20Cuevana%202.mp4"},
    {"t":"Napoleón (2023)","img":"https://www.sonypictures.com.mx/sites/mexico/files/2024-01/Key-Art_1400x2100_Napoleon_Mx.jpg","v":"https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fnoviembre%2FWatch%20Napoleon%202023%201080p%20CAMRip%20LAT%20DUB%20Juga%20Bet%20mkv.mp4"},
    {"t":"La sociedad de la nieve (2023)","img":"https://22minutoscon.com/wp-content/uploads/2023/10/portada-foto-destacada.jpg","v":"https://axa4wow3dcia.objectstorage.us-phoenix-1.oci.customer-oci.com/n/axa4wow3dcia/b/bucket-20201001-1658/o/Ver%20La%20sociedad%20de%20la%20nieve%20online%20HD%20-%20Cuevana%202.mp4"},
    {"t":"Noche de paz (2023)","img":"https://www.cinematte.com.es/wp-content/uploads/2022/12/noche-de-paz-154154009-large-656a00d127463.jpeg","v":"https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fdiciembre%2FVer%20Noche%20de%20paz%20online%20HD%20-%20Cuevana%202%20(CAM).mp4"},
    {"t":"Pollitos en fuga: el origen de los nuggets (2023)","img":"https://media.filmelier.com/tit/1JSFKK/poster/pollitos-en-fuga-el-origen-de-los-nuggets_LU38SRk.jpeg","v":"https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fdiciembre%2FVer%20Pollitos%20en%20fuga-%20El%20origen%20de%20los%20nuggets%20online%20HD%20-%20Cuevana%202.mp4"},
    {"t":"Wonka (2023)","img":"https://pics.filmaffinity.com/Wonka-476523968-large.jpg","v":"https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fdiciembre%2FVer%20Wonka%20online%20HD%20-%20Cuevana%202.mp4"},
    {"t":"El pastor (2023)","img":"https://image.tmdb.org/t/p/w185/eLqChOdjG1i1LEuXQlmGsAEsClV.jpg","v":"https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fdiciembre%2FVer%20The%20Shepherd%20online%20HD%20-%20Cuevana%202.mp4"},
    {"t":"Silber y el libro de los sueños (2023)","img":"https://image.tmdb.org/t/p/original/yD6A6BFYl8crNfZ3vs6LzxD8c1g.jpg","v":"https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fdiciembre%2FVer%20Silber%20y%20el%20libro%20de%20los%20sue%C3%B1os%20online%20HD%20-%20Cuevana%202.mp4"},
    {"t":"Mavka: Guardiana del bosque (2023)","img":"https://image.tmdb.org/t/p/original/6EJUEeC9dQglAJhLqluX70hE7Xs.jpg","v":"https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fdiciembre%2FVer%20Mavka-%20Guardiana%20del%20bosque%20online%20HD%20-%20Cuevana%202.mp4"},
    {"t":"En el desierto (2023)","img":"https://media.filmelier.com/tit/DBhKZS/poster/en-el-desierto_TvySbTo.jpeg","v":"https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fdiciembre%2FVer%20%D9%86%D8%A7%D9%82%D8%A9%20online%20HD%20-%20Cuevana%202.mp4"},
    {"t":"Pollitos en fuga: el origen de los nuggets (2023)","img":"https://play-lh.googleusercontent.com/mPZOhdgclWR_E8v5XPJVcq5-814EU5dvmBHOWYdqubm___k-00E4F3uaFcc_vNhiYbudMSZPChsMSuNNVg","v":"https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fdiciembre%2FVer%20El%20Sexto%20Bus%20online%20HD%20-%20Cuevana%202.mp4"},
    {"t":"Aquaman y el reino perdido (2023)","img":"/imagenes/Aquaman","v":"https://axa4wow3dcia.objectstorage.us-phoenix-1.oci.customer-oci.com/n/axa4wow3dcia/b/bucket-20201001-1658/o/Ver%20Aquaman%20y%20el%20reino%20perdido%20Online%20Castellano%20Latino%20Subtitulada%20HD%20-%20HDFull.mp4"},
    {"t":"Trolls 3: Se Armó La Banda (2023)","img":"https://www.serantes.com/wp-content/uploads/2023/10/SKATROLLS3.jpg","v":"https://notabasica.com/612132/Trolls%203%20-%20Se%20Arm%C3%B3%20la%20Banda.mp4"},
    {"t":"Five Nights at Freddy's","img":"https://es.web.img3.acsta.net/c_310_420/pictures/23/09/20/15/05/0470801.jpg","v":"https://notabasica.com/612132/FiveNightsAtFreddys.mp4"},
    {"t":"Los juegos del hambre: balada de pájaros cantores y serpientes (2023)","img":"https://i.blogs.es/946bf1/balada-de-pajaros-cantores/650_1200.jpg","v":"https://dl.dropbox.com/scl/fi/9b5sq647zyj29oyz9i9ir/Ju3g0S-h4mbr3-s0ngs.mp4?rlkey=dghwp74cu106iym294iyqlra9"},
    {"t":"Resistencia (2023)","img":"https://static.cinepolis.com/resources/mx/movies/posters/414x603/43631-480432-20230908013228.jpg","v":"https://dl.dropbox.com/scl/fi/c2nsu7t0pph2pv60v2x2k/creator.mkv?rlkey=80ib396dostkw9vgnuxawqu03"},
    {"t":"Obi-Wan Kenobi Patterson Cut (2023)","img":"https://upload.wikimedia.org/wikipedia/en/9/9f/Obi_Wan_Kenobi_Patterson_Cut_poster.png","v":"https://dl.dropbox.com/scl/fi/0yy8fzh9ek2ga3frkqxmf/0B1W4N.mp4?rlkey=0xjaggovyhslntruukbufes3r"},
    {"t":"Radical (2023)","img":"https://image.tmdb.org/t/p/w500/zwcmjn3qKhP7kUmpgNT0f61xzU3.jpg","v":"https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Foctubre%2FVer%20Radical%20online%20HD%20-%20Cuevana%202.mp4"},
    {"t":"Los asesinos de la luna (2023)","img":"https://www.lahiguera.net/cinemania/pelicula/10653/los_asesinos_de_la_luna-cartel-11388.jpg","v":"https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Foctubre%2FVer%20Los%20asesinos%20de%20la%20luna%20online%20HD%20-%20Cuevana%202.mp4"},
    {"t":"el justiciero capitulo final","img":"https://www.cartelera.com.uy/imagenes_espectaculos/moviedetail13/35268.jpg","v":"https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Foctubre%2FVer%20El%20Justiciero-%20Cap%C3%ADtulo%20final%20online%20HD%20-%20Cuevana%202.mp4"},
    {"t":"Plan de estudios","img":"https://media.filmelier.com/tit/8tKDaY/poster/plan-de-estudios_uxRsh_Q.jpeg","v":"https://tvinnov.online/CINECAN/The.Lesson.2023.HDCAM/The.Lesson.2023.HDCAM.c1nem4.x264-SUNSCREEN.mp4"},
    {"t":"Nowhere (2023)","img":"https://pics.filmaffinity.com/nowhere-676226361-mmed.jpg","v":"https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fseptiembre%2FVer%20Nowhere%20online%20HD%20-%20Cuevana%202.mp4"},
    {"t":"El lado dulce de la traición (2023)","img":"https://image.tmdb.org/t/p/w500/3MxgXI3VO7QCNnP0mPBjxLIemNM.jpg","v":"https://od.lk/s/NV8xODg5NDUwOTFf/HDVER%20El%20lado%20dulce%20de%20la%20traici%C3%B3n%202023.mp4"},
    {"t":"La maldición del hombre lobo (2022)","img":"https://www.lavanguardia.com/peliculas-series/images/movie/poster/2022/9/w1280/qDukjmqZsgyLN7UKsaGoO69Txcq.jpg","v":"https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Foctubre%2FVer%20Hombre%20Lobo%20por%20la%20Noche%20a%20color%20online%20HD%20-%20Cuevana%202.mp4"},
    {"t":"Papás a la antigua (2023)","img":"https://image.tmdb.org/t/p/w500/krA2iXd1PK1vhg4jeWfbSD4fSJi.jpg","v":"https://od.lk/s/NV8xODg4OTAyNzZf/HDVer%20Pap%C3%A1s%20a%20la%20antigua%202023.mp4"},
    {"t":"Monster High 2 (2023)","img":"https://image.tmdb.org/t/p/w500/mClrCMfGpOqTSiuCTSK67WZ92x5.jpg","v":"https://od.lk/s/NV8xODg5MjAxODhf/HDVer%20Monster%20High%202%202023.mp4"},
    {"t":"La libreta negra (2023)","img":"https://image.tmdb.org/t/p/w500/wUvUcLTxc83k4l8psyO2pDYHHB3.jpg","v":"https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fseptiembre%2FVer%20La%20Libreta%20Negra%20online%20HD%20-%20Cuevana%202.mp4"},
    {"t":"Soltera codiciada 2 (2023)","img":"https://image.tmdb.org/t/p/w500/19CG7aTgNRF8DvM3Cla4Zn2qWzh.jpg","v":"https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fseptiembre%2FVer%20Soltera%20codiciada%202%20online%20HD%20-%20Cuevana%202.mp4"},
    {"t":"¿Quieres ser mi hijo? (2023)","img":"https://image.tmdb.org/t/p/w500/9GuvODahvuFqdhuZ16aBLR4UJoP.jpg","v":"https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fseptiembre%2FVer%20%C2%BFQuieres%20ser%20mi...%20hijo-%20online%20HD%20-%20Cuevana%202.mp4"},
    {"t":"La monja 2 (2023)","img":"https://www.ecartelera.com/carteles/11500/11562/006.jpg","v":"http://vod169.myworldtv.net:9090/vod/mwtv/movies/The%20Num%202%20720p%20Dual%202023.mp4?token=UyQpomRtneDv8ZoQodXnzw&exp=1702445236"},
    {"t":"Los indestructibles 4 (2023)","img":"https://www.cinepremiere.com.mx/wp-content/uploads/2023/06/Indestructibles-4-Poster.jpg","v":"https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fseptiembre%2FVer%20Los%20indestructibles%204%20online%20HD%20-%20Cuevana%202.mp4"},
    {"t":"Mini Espias: El armagedón (2023)","img":"https://image.tmdb.org/t/p/w500//vd8YdaH7dzeIMGTNwQinlSiA1gV.jpg","v":"https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fseptiembre%2FVer%20Miniesp%C3%ADas-%20Armaged%C3%B3n%20online%20HD%20-%20Cuevana%202.mp4"},
    {"t":"Mision: Imposible - Sentencia mortal parte uno (2023)","img":"https://static.cinepolis.com/resources/mx/movies/posters/414x603/42401-631342-20230712030354.png","v":"https://archive.org/download/mision-imposible-sentencia-mortal-parte-uno_202308/Misión_Imposible_-_Sentencia_mortal_parte_uno.mp4"},
    {"t":"A través del mar (2023)","img":"https://pics.filmaffinity.com/A_travaes_del_mar-918065562-large.jpg","v":"https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fjulio%2FVer%20Misi%C3%B3n-%20Imposible%20-%20Sentencia%20mortal%20parte%20uno%20online%20HD%20-%20Cuevana%202%20Espa%C3%B1ol.mp4"},
    {"t":"Ladybug and Cat Noir Awakening (2023)","img":"https://www.ibs.it/images/9788891586049_0_536_0_75.jpg","v":"https://tvinnov.online/CINECAN/Ladybug.and.Cat.Noir.Awakening.2023/Ladybug.and.Cat.Noir.Awakening.2023.HDCAM.c1nem4..mp4"},
    {"t":"La Dama del Silencio: El caso Mataviejitas","img":"https://image.tmdb.org/t/p/w500/qmW8mPhcdOP3v36Gz8WEeDdewFN.jpg","v":"https://archive.org/download/01_20230805_20230805_2010/01.mp4"},
    {"t":"Blood (2023)","img":"https://pics.filmaffinity.com/Blood-252460606-large.jpg","v":"https://archive.org/download/01_20230811_20230811_1800/01.mp4"},
    {"t":"Resident Evil: Isla de la Muerte (2023)","img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqoRrig1CMfY9RfzWxEdEzzl9KhyggVp2gxLO7Rc35owV4qxut56pR3dOCcd5atFw2nmY&usqp=CAU","v":"https://archive.org/download/01_20230801_20230801_2328/01.mp4"},
    {"t":"Agente Stone","img":"https://image.tmdb.org/t/p/original/682SlpyatX0HjgjQPOKu0VwpKfl.jpg","v":"https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fagosto%2FWatch%20Blue%20Beetle%202023%201080p%20CAMRip%20LAT%20DUB%20mp4.mp4"},
    {"t":"The Seven Deadly Sins: El rencor de Edimburgo 2","img":"https://image.tmdb.org/t/p/w500/516MFML05KWiPfiQNAsVCGMySc7.jpg","v":"https://archive.org/download/01_20230808_20230808_2003/01.mp4"},
    {"t":"Los tres mosqueteros: D’Artagnan","img":"https://static.cinepolis.com/resources/mx/movies/posters/414x603/41815-771272-20230404124232.jpg","v":"https://archive.org/download/01_20230805_20230805_2028/01.mp4"},
    {"t":"Blue Beetle","img":"https://image.tmdb.org/t/p/w500//gvtMN1IWBqqPYYlPy2saWaPbmP9.jpg","v":"https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fagosto%2FWatch%20Blue%20Beetle%202023%201080p%20CAMRip%20LAT%20DUB%20mp4.mp4"},
    {"t":"Gran Turismo","img":"https://image.tmdb.org/t/p/w500/51tqzRtKMMZEYUpSYkrUE7v9ehm.jpg","v":"https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fagosto%2FVer%20Gran%20Turismo-%20De%20jugador%20a%20corredor%20online%20HD%20-%20Cuevana%202%20Espa%C3%B1ol.mp4"},
    {"t":"Liga de la justicia: mundo de guerra","img":"https://cloudfront-us-east-1.images.arcpublishing.com/abccolor/4DTKOZQAHFCXNL7ASC5IVS5YCE.webp","v":"https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fagosto%2FVer%20Tortugas%20Ninja-%20Caos%20mutante%20online%20HD%20-%20Cuevana%202%20Espa%C3%B1ol%20CAM.mp4"},
    {"t":"MEGALODÓN 2: EL GRAN ABISMO","img":"https://static.cinepolis.com/resources/mx/movies/posters/414x603/42650-169278-20230602013018.jpg","v":"https://archive.org/download/01_20230804_20230804_1500/01.mp4"},
    {"t":"Mansión Encantada","img":"https://pics.filmaffinity.com/Mansiaon_encantada-851868317-large.jpg","v":"https://main.cinedecalidad.xyz/mexicanas/mansionencantada.mp4"},
    {"t":"Liga de la justicia: mundo de guerra","img":"https://image.tmdb.org/t/p/w500//qmevjlNDaWoEughGlXFWHbQ4TaR.jpg","v":"https://archive.org/download/01_20230801_20230801_2043/01.mp4"},
    {"t":"Oppenheimer","img":"https://image.tmdb.org/t/p/w500//8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg","v":"https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fjulio%2FVer%20Oppenheimer-%20el%20dilema%20de%20la%20bomba%20at%C3%B3mica%20online%20HD%20-%20Cuevana%202%20Espa%C3%B1ol.mp4"},
    {"t":"Barbie (2023)","img":"https://image.tmdb.org/t/p/w500//iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg","v":"https://archive.org/download/01_20230722_20230722_1543/01.mp4"},
    {"t":"Insidious: La puerta roja","img":"https://image.tmdb.org/t/p/w500/uS1AIL7I1Ycgs8PTfqUeN6jYNsQ.jpg","v":"https://main.cinedecalidad.xyz/mexicanas/insidiousroja.mp4"},
    {"t":"Unos suegros de armas tomar","img":"https://image.tmdb.org/t/p/w500/5dliMQ2ODbGNoq0hlefdnuXQxMw.jpg","v":"https://archive.org/download/01_20230718_20230718_1833/01.mp4"},
    {"t":"nna Nicole Smith: Tú no me conoces","img":"https://pics.filmaffinity.com/Anna_Nicole_Smith_Tau_no_me_conoces-396663730-large.jpg","v":"https://archive.org/download/01_20230520_20230520_2211/01.mp4"},
    {"t":"El frío en los huesos","img":"https://image.tmdb.org/t/p/w500/2BwerQH4tZvHU6zUlC77aDw7pLt.jpg","v":"https://archive.org/download/01_20230718_20230718_2134/01.mp4"},
    {"t":"Indiana Jones dial del destino","img":"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgdjMbKlNLq7dHJ1bHnFL9Fc5uU_uaDn7sSJT_7qZAxYRb-OvlPIX-S87nJe6dJom6a570xQ4aOTRQfMx69ivcgwqR8TGkqwQKJQmckkFkimwpTrlftL1wqawRQJcUB3D8jpt92VV2IGHYx2lhLI7x7jedKOdlzJPGDhI_7cfSv1HYdilAMhoUzzZQzpycf/s791/355095296_6236710693044644_3531237923405411584_n.jpg","v":"https://tvinnov.online/CINECAN/ndiana%20Jones%20and%20the%20Dial%20of%20Destiny/ndiana%20Jones%20and%20the%20Dial%20of%20Destiny%20lat%20cam.mp4"},
    {"t":"Krakens y Sirenas: Conoce a Los Gillman","img":"https://static.cinepolis.com/resources/mx/movies/posters/414x603/42321-262149-20230616020218.jpg","v":"https://tvinnov.online/CINECAN/Ruby%20Gillman%20Teenage%20Kraken/Ruby%20Gillman,%20Teenage%20Kraken%20LAT%20CAM.mp4"},
    {"t":"Elementos","img":"https://static.cinepolis.com/resources/mx/movies/posters/414x603/41816-371949-20230505020537.jpg","v":"https://archive.org/download/elementos_202306/EL-1080_PeliculasySeriesHD.mp4"},
    {"t":"Los caballeros del zodiaco","img":"https://static.cinepolis.com/resources/mx/movies/posters/414x603/42099-134368-20230427103539.jpg","v":"https://objectstorage.us-phoenix-1.oraclecloud.com/n/axa4wow3dcia/b/bucket-20201001-1658/o/2023pelis%2Fmayooo%2FVer%20Los%20Caballeros%20del%20Zodiaco-%20Saint%20Seiya%20-%20El%20inicio%20online%20HD%20-%20Cuevana%202%20Espa%C3%B1ol.mp4"},
    {"t":"Culpa mia","img":"https://pics.filmaffinity.com/Culpa_maia-785263687-large.jpg","v":"https://archive.org/download/01_20230623_20230623_2005/01.mp4"},
    {"t":"Spider Man Across The Spider Verse(2023)","img":"https://static.cinepolis.com/img/peliculas/42459/1/1/42459.jpg","v":"https://cdnst14.tokyvideo.com/videos/267/267927/mp4/34f477892eb6ccb82def0268c9303fcc9e85fa3dc52a3fea828877ff4d9b4021.mp4?secure=D2MqoKUPtE_iXLwvYjt2bQ%3D%3D%2C1701839153"},
    {"t":"Flash","img":"https://pics.filmaffinity.com/Flash-205686824-mmed.jpg","v":"https://archive.org/download/01_20230718_20230718_2038/01.mp4"},
    {"t":"Misión de rescate 2","img":"https://i0.wp.com/cinemedios.com/wp-content/uploads/2023/05/misionderescate2_poster-1.jpg?w=210&h=310&ssl=1","v":"https://objectstorage.us-phoenix-1.oraclecloud.com/n/axa4wow3dcia/b/bucket-20201001-1658/o/2023pelis%2Fjunn%2FVer%20Tyler%20Rake%202%20Online%20Castellano%20Latino%20Subtitulada%20HD%20-%20HDFull.mp4"},
    {"t":"Demonio negro","img":"https://static.cinepolis.com/resources/mx/movies/posters/414x603/42319-658122-20230428091407.jpg","v":"https://objectstorage.us-phoenix-1.oraclecloud.com/n/axa4wow3dcia/b/bucket-20201001-1658/o/2023pelis%2Fmayooo%2FVer%20Demonio%20negro%20online%20HD%20-%20Cuevana%202%20Espa%C3%B1ol.mp4"},
    {"t":"Black Clover: La espada del rey mago","img":"https://image.tmdb.org/t/p/w500//9YEGawvjaRgnyW6QVcUhFJPFDco.jpg","v":"https://archive.org/download/01_20230623_20230623_1910/01.mp4"},
    {"t":"Sustitutos","img":"https://image.tmdb.org/t/p/w500/u3M1bVxEbIe3BVkFJWwMi8DIea1.jpg","v":"https://archive.org/download/01_20230509_20230509/01.mp4"},
    {"t":"Hynoptic","img":"https://image.tmdb.org/t/p/w500//3IhGkkalwXguTlceGSl8XUJZOVI.jpg","v":"https://objectstorage.us-phoenix-1.oraclecloud.com/n/axa4wow3dcia/b/bucket-20201001-1658/o/2023pelis%2Fmayooo%2FVer%20Hypnotic%20online%20HD%20-%20Cuevana%202%20Espa%C3%B1ol.mp4"},
    {"t":"Transformers: el despertar de las bestias","img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEHK8yn3u06A4VWfSFI3AywzAenBuxPJbmnw&s","v":"https://main.cinedecalidad.xyz/mexicanas/TransformersDespertar.mp4"},
    {"t":"Un Año Inolvidable – Verano 2023","img":"https://image.tmdb.org/t/p/w500//jNO8smUkyNbL2t6HU6EBnJCSf6r.jpg","v":"https://archive.org/download/01_20230609_20230609_2029/01.mp4"},
    {"t":"Tin & Tina","img":"https://image.tmdb.org/t/p/w500//gwVAb3hMYl5F68mvKGl2eqDOj0G.jpg","v":"https://archive.org/download/01_20230602_20230602_2101/01.mp4"},
    {"t":"La sirenita","img":"https://image.tmdb.org/t/p/w500//ym1dxyOk4jFcSl4Q2zmRrA5BEEN.jpg","v":"https://objectstorage.us-phoenix-1.oraclecloud.com/n/axa4wow3dcia/b/bucket-20201001-1658/o/2023pelis%2Fmayooo%2FVer%20La%20sirenita%20online%20HD%20-%20Cuevana%202%20Espa%C3%B1ol.mp4"},
    {"t":"Ghosting","img":"https://image.tmdb.org/t/p/w500/liLN69YgoovHVgmlHJ876PKi5Yi.jpg","v":"https://archive.org/download/01_20230423/01.mp4"},
    {"t":"El Club de los Asesinos","img":"https://image.tmdb.org/t/p/w500/y2d2SBqK33mGOG2CqAYMo3YbWE4.jpg","v":"https://archive.org/download/01_20230504_20230504_1804/01.mp4"},
    {"t":"One Piece Film Red","img":"https://image.tmdb.org/t/p/w500/ogDXuVkO92GcETZfSofXXemw7gb.jpg","v":"https://archive.org/download/01_(2023)0408_(2023)0408_1938/01.mp4"},
    {"t":"Agente Fortune: El gran engaño","img":"https://static.cinepolis.com/resources/mx/movies/posters/414x603/41150-106834-20221205043048.jpg","v":"https://archive.org/download/01_(2023)0409_(2023)0409_2310/01.mp4"},
    {"t":"Saw X","img":"https://cinembrollos.com/wp-content/uploads/2023/09/saw_x_ver5.jpg","v":"https://dl.dropbox.com/scl/fi/7w27cklxw9ieg2izoom6z/S4WX.mp4?rlkey=6tt829to3rtb6puuvg380h7n6"},
    {"t":"Black Knight","img":"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/78W8tIM3PgIO6OIMfugi6p1GHNT.jpg","v":"https://archive.org/download/01_20230514_20230514_2127/01.mp4"},
    {"t":"Crater","img":"https://image.tmdb.org/t/p/w500//n8ZpMwYT02XjpQHpSxn1eJw5Zpz.jpg","v":"https://archive.org/download/01_20230514_20230514_2220/01.mp4"},
    {"t":"Sombras de un crimen","img":"https://static.cinepolis.com/resources/mx/movies/posters/414x603/41753-892183-20230217030119.jpg","v":"https://archive.org/download/01_20230513/01.mp4"},
    {"t":"Royalteen: La princesa Margrethe","img":"https://www.lavanguardia.com/peliculas-series/images/movie/poster/2023/5/w1280/1OJDfBoMXYrkSkLQOqtWD3bHnKX.jpg","v":"https://archive.org/download/01_20230514_20230514_2224/01.mp4"},
    {"t":"La madre","img":"https://pics.filmaffinity.com/La_madre-219102487-large.jpg","v":"https://archive.org/download/01_20230512_20230512_2326/01.mp4"},
    {"t":"Renfield","img":"https://pics.filmaffinity.com/Renfield-758566468-large.jpg","v":"https://archive.org/download/01_20230504_20230504_1831/01.mp4"},
    {"t":"Peter pan & Wendy","img":"https://image.tmdb.org/t/p/w500//9NXAlFEE7WDssbXSMgdacsUD58Y.jpg","v":"https://archive.org/download/01_20230429_20230429/01.mp4"},
    {"t":"El exorcista del Papa","img":"https://static.cinepolis.com/resources/mx/movies/posters/414x603/41961-584178-20230310125105.jpg","v":"https://archive.org/download/01_20230504_20230504_1822/01.mp4"},
    {"t":"Las Momias y El Anillo Perdido","img":"https://static.cinepolis.com/resources/mx/movies/posters/414x603/41760-508243-20230221105251.png","v":"https://archive.org/download/01_(2023)0409_(2023)0409_2336/01.mp4"},
    {"t":"Dungeons & Dragons: Honor entre ladrones","img":"https://static.cinepolis.com/resources/mx/movies/posters/414x603/41749-830563-20230329061508.jpg","v":"https://archive.org/download/01_(2023)0408_(2023)0408_2027/01.mp4"},
    {"t":"Supercell","img":"https://image.tmdb.org/t/p/w500//gbGHezV6yrhua0KfAgwrknSOiIY.jpg","v":"https://archive.org/download/01_20230422_20230422_1907/01.mp4"},
    {"t":"Winnie the Pooh: Miel y Sangre","img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFk8U65qN7m2RyjjzzF-IexAU0tLoP4k3XqrjXiTbkFfyA-HfV0dy-Abd7fl3K9XjX_L4&usqp=CAU","v":"https://archive.org/download/01_(2023)0409_(2023)0409_2336/01.mp4"},
    {"t":"Ant-Man and the Wasp: Quantumania","img":"https://lumiere-a.akamaihd.net/v1/images/ant-man_and_the_wasp_quantumania_poster_2_la_6eea32a6.jpeg?region=0,0,743,1100","v":"https://tgdownloads.dltelegram.workers.dev/1001886225227/2413"},
    {"t":"Creed III","img":"https://cloudfront-us-east-1.images.arcpublishing.com/infobae/ZX4JT7D7BJDJNIUZYUBD7EFKAU.jpg","v":"https://objectstorage.us-phoenix-1.oraclecloud.com/n/axa4wow3dcia/b/bucket-20201001-1658/o/2023pelis%2Ffeb%2FVer%20Creed%20III%20online%20HD%20-%20Cuevana%202%20Espa%C3%B1ol.mp4"},
    {"t":"Winnie the Pooh: Miel y Sangre","img":"https://editorial.aristeguinoticias.com/wp-content/uploads/2022/12/winnie-the-pooh-miel-y-sangre-poster-espanol-scaled.jpg","v":"https://archive.org/download/01_20230130_20230130_2128/01.mp4"},
    {"t":"Evil Dead El despertar","img":"https://i.postimg.cc/rwKPZ2NF/evildead.jpg","v":"https://tgdownloads.dltelegram.workers.dev/1001886225227/2324"},
    {"t":"Power Rangers: Ayer, hoy y siempre","img":"https://image.tmdb.org/t/p/w500/vc87upO8vcAGj9OmgH3AIz6ikKB.jpg","v":"https://objectstorage.us-phoenix-1.oraclecloud.com/n/axa4wow3dcia/b/bucket-20201001-1658/o/2023pelis%2Ffeb%2FVer%20Creed%20III%20online%20HD%20-%20Cuevana%202%20Espa%C3%B1ol.mp4"},
    {"t":"Embaucadores","img":"https://image.tmdb.org/t/p/w500/tq8x5F17q95T1j0up5rpzXFAylN.jpg","v":"https://image.tmdb.org/t/p/w500/tq8x5F17q95T1j0up5rpzXFAylN.jpg"},
    {"t":"Bear Cocaine","img":"https://posterspy.com/wp-content/uploads/2022/12/Cocaine_Bear_Poster.jpg","v":"https://tgdownloads.dltelegram.workers.dev/1001829780398/57009"},
    {"t":"Llaman a la puerta","img":"https://www.mubis.es/media/users/12828/309855/FB_IMG_1669667935584-original.jpg","v":"https://archive.org/download/llaman-a-la-puerta_202302/Llaman a la puerta.ia.mp4"},
    {"t":"Identidad desbloqueada","img":"https://image.tmdb.org/t/p/w500//oGHr8yUOXtVK0mGoZURZqqbwXXj.jpg","v":"https://archive.org/download/01_20230227_20230227_1914/01.mp4"},
    {"t":"Una boda Explosiva","img":"https://www.nextgame.es/wp-content/uploads/2022/10/Una-Boda-Explosiva-trailer.png","v":"https://ia804706.us.archive.org/13/items/b0d_45-pl0M0/b0d_45-pl0M0.mp4"},
    {"t":"Avatar: El Camino del Agua","img":"https://www.cartelera.com.uy/imagenes_espectaculos/moviedetail13/33404.jpg","v":"https://objectstorage.us-phoenix-1.oraclecloud.com/n/axa4wow3dcia/b/bucket-20201001-1658/o/2022pelicu%2Fdici%2FVer%20Avatar-%20El%20sentido%20del%20agua%20Online%20Castellano%20Latino%20Subtitulada%20HD%20-%20HDFull.mp4"},
    {"t":"M3gan","img":"https://i.ebayimg.com/images/g/mIgAAOSwUX5kZIV3/s-l400.jpg","v":"https://archive.org/download/m-333gan-dual-latino-ingles/M333gan DUAL(Latino-Inglés).mp4"},
    {"t":"Vecino gruñon","img":"https://static.cinepolis.com/img/peliculas/41145/1/1/41145.jpg","v":"https://ia804707.us.archive.org/21/items/1-v-3c-1n-0-gru-n-0n/1_v3c1n0-gruN%CC%830n.mp4"},
    {"t":"El piloto","img":"https://es.web.img3.acsta.net/pictures/23/01/16/17/21/5753145.jpg","v":"https://ia801609.us.archive.org/20/items/3-l-p-1l-0-t-0/3L_P1l0-t0.mp4"},
    {"t":"Fresh","img":"https://es.web.img2.acsta.net/pictures/22/03/21/17/30/4116877.jpg","v":"https://ia904706.us.archive.org/0/items/fr35h.lat/fr35h.lat.mp4"},
    {"t":"Narvik","img":"https://image.tmdb.org/t/p/w500//gU4mmINWUF294Wzi8mqRvi6peMe.jpg","v":"https://archive.org/download/01_20230130_20230130_2041/01.mp4"},
    {"t":"Magic mike's last dance","img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS7f6Ya7WpgKXzR2Ha6WPJXnz1DQcjEg9egl6AfZlu-pZjUOC_eLtw8iPgnm06mCGx9Do&usqp=CAU","v":"https://tgdownloads.dltelegram.workers.dev/1001829780398/55685"},
    {"t":"Viking Wolf","img":"https://image.tmdb.org/t/p/w500//abBDzmy35A3Nkupn6wK2DKyFamd.jpg","v":"https://archive.org/download/01_20230207_20230207_2245/01.mp4"},
    {"t":"La bala perdida 2","img":"https://www.lavanguardia.com/peliculas-series/images/movie/poster/2022/11/w1280/p6HNFpXiXIdyMRJTrfkgaPkFCK.jpg","v":"https://objectstorage.us-phoenix-1.oraclecloud.com/n/axa4wow3dcia/b/bucket-20201001-1658/o/2022pelicu%2Fnoviembr%2FVer%20Bala%20perdida%202%20(2022)%20Online%20%E2%80%93%20CineHDPlus.mp4"},
    {"t":"R.I.P.D 2: La rebelión de los condenados","img":"https://image.tmdb.org/t/p/original/oJJWjiMKExSi241NpKUqVIxWfH6.jpg","v":"https://objectstorage.us-phoenix-1.oraclecloud.com/n/axa4wow3dcia/b/bucket-20201001-1658/o/2022pelicu%2Fnoviembr%2FVer%20R.I.P.D.%202-%20Rise%20of%20the%20Damned%20Online%20Castellano%20Latino%20Subtitulada%20HD%20-%20HDFull.mp4"},
    {"t":"La mujer rey","img":"https://static.cinepolis.com/img/peliculas/40276/1/1/40276.jpg","v":"https://objectstorage.us-phoenix-1.oraclecloud.com/n/axa4wow3dcia/b/bucket-20201001-1658/o/2022pelicu%2Fnoviembr%2FVer%20La%20Mujer%20Rey%20Online%20Castellano%20Latino%20Subtitulada%20HD%20-%20HDFull.mp4"},
    {"t":"Babylon","img":"https://image.tmdb.org/t/p/w500//wjOHjWCUE0YzDiEzKv8AfqHj3ir.jpg","v":"https://archive.org/download/01_20230203_20230203/01.mp4"},
    {"t":"Teen Wolf","img":"https://image.tmdb.org/t/p/w500//wAkpPm3wcHRqZl8XjUI3Y2chYq2.jpg","v":"https://archive.org/download/01_20230130_20230130_2101/01.mp4"},
    {"t":"A todas partes","img":"https://es.web.img2.acsta.net/pictures/23/01/30/15/11/2244443.jpg","v":"https://archive.org/download/01_20230217_20230217_1536/01.mp4"},
    {"t":"Black Adam","img":"https://i.ebayimg.com/images/g/9hMAAOSwYBFjGYkt/s-l1200.webp","v":"http://199.188.103.26/rombwgshgfhgdsjr/85455532potroxvix/Pel%C3%ADculas/Black%20Adam%202022latHD.mp4"},
    {"t":"Mírame","img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpjhoia5od42mgyuWDf8IkBx2G8jFFbYYgQY8A8HihakBbCRPWm4A9s-8V_iQRzxc83Wc&usqp=CAU","v":"https://ia804700.us.archive.org/13/items/m_1r4-m3/m_1r4-m3.mp4"},
    {"t":"Hasta la muerte","img":"https://pics.filmaffinity.com/Till_Death_Hasta_que_la_muerte_nos_separe-895474287-large.jpg","v":"http://proteiosmorelia.site/stuff/till.mp4"},
    {"t":"El tubo","img":"https://es.web.img3.acsta.net/pictures/21/07/22/15/42/2192431.jpg","v":"https://www.colegiofederaldeperitos.org/stuff/tubo.mp4"},
    {"t":"Dependientes 3","img":"https://image.tmdb.org/t/p/original/uESLvTixBpo6LE9RVZtRhwSdBDJ.jpg","v":"https://www.colegiofederaldeperitos.org/stuff/clerks3.mp4"},
    {"t":"Hallowen el final","img":"https://pics.filmaffinity.com/Halloween_El_final-885815456-large.jpg","v":"https://www.colegiofederaldeperitos.org/stuff/halloween.mp4"},
    {"t":"moon","img":"https://pics.filmaffinity.com/deo_mun-579180002-mmed.jpg","v":"https://www.colegiofederaldeperitos.org/stuff/cerveza.mp4"},
    {"t":"Cyrano","img":"https://upload.wikimedia.org/wikipedia/en/thumb/e/e4/Cyrano_poster.jpg/220px-Cyrano_poster.jpg","v":"https://casiano.store/stuff/cyrano.mp4"},
    {"t":"Mi dulce monstruo","img":"https://static.cinepolis.com/resources/mx/movies/posters/414x603/39643-378416-20220708041757.jpg","v":"https://casiano.store/stuff/dulce.mp4"},
    {"t":"Los perdonados","img":"https://pics.filmaffinity.com/Los_perdonados-711017451-large.jpg","v":"https://casiano.store/stuff/forgiven.mp4"},
    {"t":"El mar del norte","img":"https://image.tmdb.org/t/p/original/4KzGSEJvAszqJqfC0k4O7gRE1cS.jpg","v":"https://polimor.club/movies/marnorte.mp4"},
    {"t":"El extraño","img":"https://www.lavanguardia.com/peliculas-series/images/movie/poster/2022/10/w1280/vYhPCfSDlLObeV5bUIkmeUyR4gl.jpg","v":"https://www.colegiofederaldeperitos.org/stuff/extrano.mp4"},
    {"t":"Érase Una Vez Un Genio","img":"https://static.cinepolis.com/resources/mx/movies/posters/414x603/39908-115310-20220812023302.jpg","v":"https://www.alianzajuridicainteramericana.com/movies/esperando.mp4"},
    {"t":"Fantasmas de guerra","img":"https://image.tmdb.org/t/p/w500/wDLthZ6Hgn8RY55p0bkcmLV4Nw6.jpg","v":"https://www.alianzajuridicainteramericana.com/movies/war.mp4"},
    {"t":"Emergencia en el aire","img":"https://pecime.com.mx/wp-content/uploads/2022/09/3.-Emergencia-en-el-aire-714x1024.jpg","v":"https://casiano.store/stuff/emergenciabien.mp4"},
    {"t":"Pinocho","img":"https://pics.filmaffinity.com/Pinocho-256590713-large.jpg","v":"http://proteiosmorelia.site/stuff/pinocho.mp4"},
    {"t":"La bestia","img":"https://es.web.img3.acsta.net/c_310_420/pictures/22/06/20/14/53/4061901.jpg","v":"https://polimor.club/movies/bestia.mp4"},
    {"t":"Vértigo","img":"https://static.cinepolis.com/resources/mx/movies/posters/414x603/39753-784619-20220722063400.jpg","v":"https://polimor.club/movies/vertigo.mp4"},
    {"t":"Pig","img":"https://es.web.img3.acsta.net/pictures/22/05/25/17/54/5230446.jpg","v":"https://www.colegiofederaldeperitos.org/stuff/pig.mp4"},
    {"t":"La caída","img":"https://decine21.com/img/upload/obras/la-caida-46339/la-caida-46339-c.jpg","v":"https://www.colegiofederaldeperitos.org/stuff/caida.mp4"},
    {"t":"Medieval","img":"https://pics.filmaffinity.com/Medieval-943570499-large.jpg","v":"https://www.colegiofederaldeperitos.org/stuff/medieval.mp4"},
    {"t":"Causeway","img":"https://images.justwatch.com/poster/300974125/s718/causeway.%7Bformat%7D","v":"https://www.colegiofederaldeperitos.org/stuff/resurgir.mp4"},
    {"t":"Sonríe","img":"https://notify.com.ar/sonidera/wp-content/uploads/sites/7/2022/09/Sonrie.jpg","v":"https://www.colegiofederaldeperitos.org/stuff/smile2.mp4"},
    {"t":"Pasaje al paraíso","img":"https://static.cinepolis.com/resources/mx/movies/posters/414x603/39883-743882-20220812022834.jpg","v":"https://www.colegiofederaldeperitos.org/stuff/viaje.mp4"},
    {"t":"Malcriados","img":"https://mx.web.img3.acsta.net/pictures/23/02/01/19/25/0306121.jpg","v":"https://ia801603.us.archive.org/33/items/m-4l-c-r-14-2/M4l-c_r14-2.mp4"},
    {"t":"¡Nop!","img":"https://d2iltjk184xms5.cloudfront.net/uploads/photo/file/432245/small_7c1513335e89b414939c6a26486f4117-994_poster.jpg","v":"https://ia801603.us.archive.org/33/items/m-4l-c-r-14-2/M4l-c_r14-2.mp4"},
    {"t":"Chernóbil: La Película","img":"https://culturizarte.cl/wp-content/uploads/2021/10/chernobil.jpg","v":"https://ia802601.us.archive.org/3/items/ch-3rn-0/Ch3rn_0.mp4"},
    {"t":"Huesera","img":"https://pics.filmaffinity.com/Huesera-823576509-large.jpg","v":"https://ia904706.us.archive.org/0/items/hu-3-53.r-4/Hu3_53.r4.mp4"},
    {"t":"Jung E","img":"https://mx.web.img3.acsta.net/pictures/23/01/20/12/19/2283426.jpg","v":"https://ia904705.us.archive.org/30/items/j-u-n-6-3/J_uN6_3.mp4"},
    {"t":"Amor al cuadrado","img":"https://www.ennetflix.mx/media/15/amor-al-cuadrado_81259382.jpg","v":"https://tgdownloads.dltelegram.workers.dev/1001886225227/2393"},
    {"t":"Tren bala","img":"https://pics.filmaffinity.com/bullet_train-757922812-large.jpg","v":"https://ia801402.us.archive.org/4/items/tr_3n/b_ull3t.mp4"},
    {"t":"La Huérfana: el origen","img":"https://pics.filmaffinity.com/orphan_first_kill-880267341-large.jpg","v":"https://ia801508.us.archive.org/12/items/f-1r-5t-k-1ll/F1r5t_K1ll.mp4"},
    {"t":"Depredador la presa","img":"https://lumiere-a.akamaihd.net/v1/images/depredador_la_presa_poster_2_496bbe49.jpeg?region=0,0,770,1100","v":"https://ia601502.us.archive.org/31/items/p.R3_y/p.R3_y0k.mp4"},
    {"t":"Tormenta infinita","img":"https://musicimage.xboxlive.com/catalog/video.movie.8D6KGWXND26B/image?locale=es-es&mode=crop&purposes=BoxArt&q=90&h=300&w=200&format=jpg","v":"https://ia801507.us.archive.org/7/items/1nf-1n-1t-3.5t-0rm/1nf1n1t3.5t0rm.mp4"},
    {"t":"Minions: nace un villano","img":"https://pics.filmaffinity.com/minions_the_rise_of_gru-608394212-large.jpg","v":"https://ia802505.us.archive.org/11/items/m-1n-1-0n-5/m-1n-1-0n-5.mp4"},
    {"t":"El Valet","img":"https://lumiere-a.akamaihd.net/v1/images/p_243_ster_lightyear_9209f1b3.jpeg","v":"https://ia601505.us.archive.org/28/items/l-1-y-3.4-r/L1_y3.4R.mp4"},
    {"t":"Cruz de Hierro: El camino a Normandía","img":"https://pics.filmaffinity.com/iron_cross_the_road_to_normandy-587205455-large.jpg","v":"https://ia801500.us.archive.org/2/items/1r-0n-cr-055/1r0n_Cr%20055.mp4"},
    {"t":"Chip y Dale: Al Rescate","img":"https://pics.filmaffinity.com/the_valet-243941141-large.jpg","v":"https://ia801406.us.archive.org/19/items/3-l-v-4-l-3-t/3L_v%204L3_t.mp4"},
    {"t":"moon","img":"https://pics.filmaffinity.com/chip_n_dale_rescue_rangers-335785940-large.jpg","v":"https://ia601508.us.archive.org/20/items/ch-1-p-n/Ch_1P%20%27n%20.mp4"},
    {"t":"Red","img":"https://m.media-amazon.com/images/I/513XjcK7OmL._SY344_BO1,204,203,200_QL70_ML2_.jpg","v":"https://archive.org/download/r-3dd-2022/R3dd2022.mp4"},
    {"t":"The Batman","img":"https://pics.filmaffinity.com/the_batman-449856406-large.jpg","v":"https://archive.org/download/b-4-t-m-4-n/B4%20t_m4N.mp4"},
    {"t":"Resident Evil: Bienvenidos a Raccoon City","img":"https://pics.filmaffinity.com/resident_evil_welcome_to_raccoon_city-764554100-large.jpg","v":"https://ia601405.us.archive.org/23/items/rp-189-pr/RP189PR.mp4"},
    {"t":"Hotel Transylvania: transformanía","img":"https://m.media-amazon.com/images/I/71iwxS0LgUS.jpg","v":"https://ia601502.us.archive.org/17/items/0t-31tr-4n-51lv-4n-142022/0t31tr4n51lv4n142022.mp4"},
    {"t":"Matrix Resurrecciones","img":"https://pics.filmaffinity.com/the_matrix_resurrections-864937945-large.jpg","v":"https://ia801406.us.archive.org/19/items/3-l-v-4-l-3-t/3L_v%204L3_t.mp4"},
    {"t":"Ghostbusters: el legado (2021)","img":"https://pics.filmaffinity.com/ghostbusters_afterlife-667822266-large.jpg","v":"https://ia601504.us.archive.org/31/items/c4s42021/c4s42021.mp4"},
    {"t":"Merry me","img":"https://pics.filmaffinity.com/marry_me-852565093-large.jpg","v":"https://ia802508.us.archive.org/26/items/c-454-t-3-c-0nm-1-g-0/C454%20t3%20c0nm1%20g0.ia.mp4"},
    {"t":"Ambulancia","img":"https://pics.filmaffinity.com/ambulance-409574561-large.jpg","v":"https://ia601400.us.archive.org/13/items/4m-bu-14nc-14/4mBu_14nc14.mp4"},
    {"t":"Thor: Amor y trueno","img":"https://static.cinepolis.com/img/peliculas/39361/1/1/39361.jpg","v":"https://ia801500.us.archive.org/3/items/t-h-0-r/T_h0-r.mp4"},
    {"t":"Morbius","img":"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/086a3ff3-cfc9-4353-b023-f99822788b9a/df3v63t-c19e83aa-1008-4bed-a072-90b87e74aede.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA4NmEzZmYzLWNmYzktNDM1My1iMDIzLWY5OTgyMjc4OGI5YVwvZGYzdjYzdC1jMTllODNhYS0xMDA4LTRiZWQtYTA3Mi05MGI4N2U3NGFlZGUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.omw8Igy8csWoQHmfKpeWegP7FGMvOOVEDdNqNORCEJw","v":"https://ia902507.us.archive.org/14/items/m-0r-b-1-u-5./M0r_b1%20u5..mp4"},
    {"t":"Mortal Combat","img":"https://pics.filmaffinity.com/Mortal_Kombat-143448809-large.jpg","v":"https://archive.org/download/m-0rt-4l-k-0mb-4/M0rt4l%20K0mb4%2B.mp4"},
    {"t":"La Liga de la Justicia de Zack Snyder","img":"https://mundosuperman.com/wp-content/uploads/2020/05/Snyder-Cut.jpg","v":"http://ia601506.us.archive.org/6/items/meme-5/jus.mp4"}
  ];

  var PAGE_SIZE = 48;
  var PROXY = 'https://api.codetabs.com/v1/proxy/?quest=';

  // TMDB (misma llave que usa app.js / apitmd.html)
  var TMDB_KEY = '192e0b9821564f26f52949758ea3c473';
  var TMDB_API = 'https://api.themoviedb.org/3';
  var TMDB_IMG = 'https://image.tmdb.org/t/p/w342';
  var TMDB_LANG = 'es-MX';
  var CACHE_KEY = 'pelis-sinopsis-v1';
  var CACHE_DAYS = 30;
  var PLACEHOLDER = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 300">' +
    '<rect width="200" height="300" fill="#22224a"/>' +
    '<text x="100" y="160" font-size="60" text-anchor="middle" fill="#8888c8">🎬</text></svg>'
  );

  // ------------------------------------------------------------------
  // Utilidades
  // ------------------------------------------------------------------
  function normalizeText(s) {
    return String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
  }

  function yearOf(title) {
    var m = /\((\d{4})\)\s*$/.exec(title);
    return m ? m[1] : '';
  }

  function normalizeUrl(url) {
    url = String(url || '').trim();
    // archive.org admite https: evita bloqueos por "mixed content" en páginas https
    if (location.protocol === 'https:' && /^http:\/\/([\w-]+\.)*archive\.org\//i.test(url)) {
      url = 'https' + url.slice(4);
    }
    return url;
  }

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  }

  // ------------------------------------------------------------------
  // Reproductor (#video)
  // ------------------------------------------------------------------
  var statusBar = null;

  function getPlayer() {
    return document.getElementById('video');
  }

  function getStatusBar(player) {
    if (statusBar && statusBar.isConnected) return statusBar;
    statusBar = el('div', 'pelis-now');
    statusBar.setAttribute('role', 'status');
    statusBar.setAttribute('aria-live', 'polite');
    statusBar.hidden = true;
    player.parentNode.insertBefore(statusBar, player);
    return statusBar;
  }

  function setStatus(player, text, link) {
    var bar = getStatusBar(player);
    bar.textContent = text || '';
    if (link) {
      var a = el('a', 'pelis-now-link', 'Abrir el video en una pestaña nueva ↗');
      a.href = link;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      bar.appendChild(document.createTextNode(' '));
      bar.appendChild(a);
    }
    bar.classList.toggle('is-error', !!link);
    bar.hidden = !text;
  }

  function playSrc(player, src) {
    player.src = src;
    player.load();
    var p = player.play();
    if (p && typeof p.catch === 'function') {
      p.catch(function (err) {
        // Si el navegador bloquea el audio, reproducir en silencio (el usuario puede activarlo)
        if (err && err.name === 'NotAllowedError' && !player.muted) {
          player.muted = true;
          player.play().catch(function () {});
        }
      });
    }
  }

  function videoUrl(url, title) {
    var player = getPlayer();
    if (!player) return;
    url = normalizeUrl(url);
    if (!url) return;

    player.pause();
    // Un <source> hijo hace que el evento "error" no llegue al <video>,
    // por eso se elimina y se usa video.src directamente.
    Array.prototype.slice.call(player.querySelectorAll('source')).forEach(function (s) {
      s.parentNode.removeChild(s);
    });
    player.loop = false;
    player.muted = false;

    var proxyUrl = PROXY + encodeURIComponent(url);
    var label = title ? '«' + title + '»' : 'el video';

    player.onerror = function () {
      var current = player.getAttribute('src');
      if (current !== url && current !== proxyUrl) { // otro script cambió el video
        player.onerror = null;
        return;
      }
      if (current === url) {
        console.warn('pelis.js: falló la reproducción directa, reintentando con proxy…', url);
        setStatus(player, 'Reintentando ' + label + '…');
        playSrc(player, proxyUrl);
      } else {
        player.onerror = null;
        setStatus(player, 'No se pudo reproducir ' + label + ' aquí.', url);
      }
    };
    player.onplaying = function () {
      if (player.getAttribute('src') === url || player.getAttribute('src') === proxyUrl) {
        setStatus(player, 'Reproduciendo ' + label);
      }
    };

    setStatus(player, 'Cargando ' + label + '…');
    playSrc(player, url);
    (player.parentNode || player).scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  // Global: lo usan los atributos onclick antiguos y js/m3u_loader.js
  window.videoUrl = videoUrl;

  // ------------------------------------------------------------------
  // Sinopsis desde TMDB
  // ------------------------------------------------------------------
  var memCache = {};      // resultados de esta sesión (incluye "no encontrada")
  var pending = {};       // evita pedir dos veces la misma película a la vez

  function readCache() {
    try { return JSON.parse(localStorage.getItem(CACHE_KEY)) || {}; } catch (e) { return {}; }
  }

  function writeCache(title, info) {
    try {
      var all = readCache();
      all[title] = { at: Date.now(), info: info };
      var keys = Object.keys(all);
      if (keys.length > 400) { // límite para no llenar el almacenamiento
        keys.sort(function (a, b) { return all[a].at - all[b].at; });
        keys.slice(0, keys.length - 400).forEach(function (k) { delete all[k]; });
      }
      localStorage.setItem(CACHE_KEY, JSON.stringify(all));
    } catch (e) { /* almacenamiento lleno o bloqueado: se ignora */ }
  }

  function cleanTitle(title) {
    return String(title).replace(/\(\d{4}\)\s*$/, '').replace(/\s+/g, ' ').trim();
  }

  // Si el póster viene de TMDB, su nombre de archivo identifica la película exacta
  function tmdbPosterPath(img) {
    if (!/(tmdb\.org|themoviedb\.org)\//i.test(img)) return '';
    var m = /\/t\/p\/[^/]+\/+([\w-]+\.(?:jpg|jpeg|png|webp))/i.exec(img);
    return m ? '/' + m[1] : '';
  }

  function tmdbGet(path, params) {
    var qs = 'api_key=' + TMDB_KEY;
    Object.keys(params || {}).forEach(function (k) {
      if (params[k] !== '' && params[k] != null) qs += '&' + k + '=' + encodeURIComponent(params[k]);
    });
    return fetch(TMDB_API + path + '?' + qs).then(function (r) {
      if (!r.ok) throw new Error('TMDB ' + r.status);
      return r.json();
    });
  }

  function pickResult(results, peli, query) {
    if (!results || !results.length) return null;
    var poster = tmdbPosterPath(peli.img);
    var q = normalizeText(query);
    var byPoster = poster && results.filter(function (r) { return r.poster_path === poster; })[0];
    if (byPoster) return byPoster;
    var exact = results.filter(function (r) {
      return normalizeText(r.title) === q || normalizeText(r.original_title) === q;
    })[0];
    return exact || results[0];
  }

  function searchTmdb(peli) {
    var query = cleanTitle(peli.t);
    var year = yearOf(peli.t);
    var attempts = [{ query: query, year: year }];
    if (year) attempts.push({ query: query, year: '' });
    var short = query.split(/\s*[:\-–]\s+/)[0];
    if (short && short !== query && short.length > 2) attempts.push({ query: short, year: year });

    function next(i) {
      if (i >= attempts.length) return Promise.resolve(null);
      var a = attempts[i];
      return tmdbGet('/search/movie', { query: a.query, year: a.year, language: TMDB_LANG, include_adult: 'false' })
        .then(function (data) { return pickResult(data.results, peli, a.query) || next(i + 1); });
    }
    return next(0);
  }

  function fetchSinopsis(peli) {
    var key = peli.t;
    if (Object.prototype.hasOwnProperty.call(memCache, key)) return Promise.resolve(memCache[key]);
    var stored = readCache()[key];
    if (stored && Date.now() - stored.at < CACHE_DAYS * 864e5) {
      memCache[key] = stored.info;
      return Promise.resolve(stored.info);
    }
    if (pending[key]) return pending[key];

    pending[key] = searchTmdb(peli).then(function (hit) {
      if (!hit) return null;
      return tmdbGet('/movie/' + hit.id, { language: TMDB_LANG }).then(function (d) {
        var info = {
          id: d.id,
          title: d.title || hit.title,
          original: d.original_title || '',
          overview: d.overview || hit.overview || '',
          date: d.release_date || hit.release_date || '',
          vote: d.vote_average || 0,
          votes: d.vote_count || 0,
          runtime: d.runtime || 0,
          genres: (d.genres || []).map(function (g) { return g.name; }),
          poster: d.poster_path || hit.poster_path || ''
        };
        if (info.overview) return info;
        // Sin sinopsis en español: se intenta en inglés
        return tmdbGet('/movie/' + hit.id, { language: 'en-US' }).then(function (en) {
          info.overview = en.overview || '';
          info.overviewLang = 'en';
          return info;
        }, function () { return info; });
      });
    }).then(function (info) {
      memCache[key] = info;
      if (info) writeCache(key, info);
      delete pending[key];
      return info;
    }, function (err) {
      delete pending[key]; // error de red: no se guarda, se puede reintentar
      throw err;
    });
    return pending[key];
  }

  // ------------------------------------------------------------------
  // Ventana de sinopsis (<dialog>)
  // ------------------------------------------------------------------
  var modal = null;

  function formatRuntime(min) {
    if (!min) return '';
    var h = Math.floor(min / 60), m = min % 60;
    return (h ? h + ' h ' : '') + (m ? m + ' min' : '');
  }

  function getModal() {
    if (modal) return modal;
    var dlg = el('dialog', 'pelis-modal');
    dlg.setAttribute('aria-labelledby', 'pelis-modal-titulo');

    var closeBtn = el('button', 'pelis-modal-cerrar', '×');
    closeBtn.type = 'button';
    closeBtn.setAttribute('aria-label', 'Cerrar');

    var body = el('div', 'pelis-modal-cuerpo');
    var poster = el('img', 'pelis-modal-poster');
    poster.alt = '';
    poster.referrerPolicy = 'no-referrer';
    poster.onerror = function () { poster.src = PLACEHOLDER; };

    var info = el('div', 'pelis-modal-info');
    var title = el('h3', 'pelis-modal-titulo');
    title.id = 'pelis-modal-titulo';
    var original = el('p', 'pelis-modal-original');
    var meta = el('p', 'pelis-modal-meta');
    var text = el('p', 'pelis-modal-texto');
    text.setAttribute('aria-live', 'polite');
    var actions = el('div', 'pelis-modal-acciones');
    var credit = el('p', 'pelis-modal-credito');

    info.appendChild(title);
    info.appendChild(original);
    info.appendChild(meta);
    info.appendChild(text);
    info.appendChild(actions);
    info.appendChild(credit);
    body.appendChild(poster);
    body.appendChild(info);
    dlg.appendChild(closeBtn);
    dlg.appendChild(body);
    document.body.appendChild(dlg);

    function close() {
      if (typeof dlg.close === 'function') dlg.close(); else dlg.removeAttribute('open');
    }
    closeBtn.addEventListener('click', close);
    // Clic fuera del recuadro (en el fondo oscuro) cierra la ventana
    dlg.addEventListener('click', function (ev) { if (ev.target === dlg) close(); });

    modal = { dlg: dlg, poster: poster, title: title, original: original, meta: meta, text: text,
      actions: actions, credit: credit, close: close, token: 0 };
    return modal;
  }

  function openSinopsis(peli, onPlay) {
    var m = getModal();
    var token = ++m.token;

    m.poster.src = peli.img;
    m.title.textContent = peli.t;
    m.original.textContent = '';
    m.original.hidden = true;
    m.meta.textContent = '';
    m.meta.hidden = true;
    m.text.textContent = 'Buscando sinopsis…';
    m.text.className = 'pelis-modal-texto is-cargando';
    m.credit.textContent = '';

    m.actions.textContent = '';
    var action;
    if (peli.v) {
      action = el('button', 'btn btn-danger fw-bold', '▶ Ver aquí');
      action.type = 'button';
      action.addEventListener('click', function () { m.close(); onPlay(); });
    } else {
      action = el('a', 'btn btn-primary fw-bold', '↗ Abrir película');
      action.href = peli.e;
      action.target = '_blank';
      action.rel = 'noopener noreferrer';
    }
    m.actions.appendChild(action);

    if (!m.dlg.open) {
      if (typeof m.dlg.showModal === 'function') m.dlg.showModal(); else m.dlg.setAttribute('open', '');
    }
    action.focus();

    fetchSinopsis(peli).then(function (info) {
      if (token !== m.token) return; // el usuario ya abrió otra película
      if (!info) {
        m.text.textContent = 'No encontramos la sinopsis de esta película en TMDB.';
        m.text.className = 'pelis-modal-texto is-vacio';
        return;
      }
      if (info.poster && !tmdbPosterPath(peli.img)) m.poster.src = TMDB_IMG + info.poster;
      var year = (info.date || '').slice(0, 4);
      m.title.textContent = info.title + (year ? ' (' + year + ')' : '');
      if (info.original && normalizeText(info.original) !== normalizeText(info.title)) {
        m.original.textContent = 'Título original: ' + info.original;
        m.original.hidden = false;
      }
      var parts = [];
      if (info.votes) parts.push('★ ' + info.vote.toFixed(1));
      if (info.runtime) parts.push(formatRuntime(info.runtime));
      if (info.genres.length) parts.push(info.genres.slice(0, 3).join(', '));
      m.meta.textContent = parts.join('  ·  ');
      m.meta.hidden = !parts.length;
      m.text.className = 'pelis-modal-texto';
      m.text.textContent = info.overview || 'Esta película no tiene sinopsis en TMDB.';
      if (info.overviewLang === 'en' && info.overview) m.text.textContent += ' (sinopsis disponible solo en inglés)';
      var link = el('a', null, 'Ver en TMDB');
      link.href = 'https://www.themoviedb.org/movie/' + info.id + '?language=' + TMDB_LANG;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      m.credit.appendChild(document.createTextNode('Datos de TMDB · '));
      m.credit.appendChild(link);
    }, function () {
      if (token !== m.token) return;
      m.text.textContent = 'No se pudo consultar la sinopsis. Revisa tu conexión e inténtalo de nuevo.';
      m.text.className = 'pelis-modal-texto is-vacio';
    });
  }

  // ------------------------------------------------------------------
  // Estilos (se inyectan una sola vez)
  // ------------------------------------------------------------------
  function injectStyles() {
    if (document.getElementById('pelis-styles')) return;
    var style = document.createElement('style');
    style.id = 'pelis-styles';
    style.textContent = [
      '.video-grid-responsive{list-style:none;display:grid;grid-template-columns:repeat(2,1fr);gap:10px;padding:0;}',
      '@media (min-width:500px){.video-grid-responsive{grid-template-columns:repeat(3,1fr);}}',
      '@media (min-width:768px){.video-grid-responsive{grid-template-columns:repeat(4,1fr);}}',
      '@media (min-width:992px){.video-grid-responsive{grid-template-columns:repeat(6,1fr);}}',
      '.pelis-catalogo{margin:20px auto;max-width:1400px;padding:0 10px;color:#fff;}',
      '.pelis-toolbar{display:flex;flex-wrap:wrap;gap:8px;align-items:center;margin-bottom:12px;}',
      '.pelis-toolbar .pelis-buscar{flex:1 1 220px;min-width:0;}',
      '.pelis-toolbar select{flex:0 1 180px;width:auto;}',
      '.pelis-contador{flex:1 0 100%;font-size:.9rem;opacity:.85;}',
      '@media (min-width:768px){.pelis-contador{flex:0 0 auto;}}',
      '.pelis-card{margin:0;position:relative;}',
      '.pelis-info{position:absolute;top:6px;left:6px;z-index:2;display:flex;align-items:center;justify-content:center;width:34px;height:34px;padding:0;border:0;border-radius:50%;background:rgba(0,0,0,.72);color:#fff;cursor:pointer;transition:background .15s ease,transform .15s ease;}',
      '.pelis-info:hover{background:#ffc107;color:#000;transform:scale(1.08);}',
      '.pelis-info:focus-visible{outline:3px solid #ffc107;outline-offset:2px;}',
      '.pelis-modal{width:min(760px,94vw);max-height:90vh;padding:0;border:0;border-radius:12px;background:#15152e;color:#f1f1f6;box-shadow:0 20px 60px rgba(0,0,0,.6);overflow:auto;}',
      '.pelis-modal::backdrop{background:rgba(0,0,0,.75);}',
      '.pelis-modal-cerrar{position:absolute;top:8px;right:10px;z-index:1;width:38px;height:38px;border:0;border-radius:50%;background:rgba(255,255,255,.12);color:#fff;font-size:26px;line-height:1;cursor:pointer;}',
      '.pelis-modal-cerrar:hover{background:rgba(255,255,255,.25);}',
      '.pelis-modal-cuerpo{display:flex;gap:20px;padding:22px;}',
      '.pelis-modal-poster{flex:0 0 200px;width:200px;aspect-ratio:2/3;height:auto;object-fit:cover;border-radius:8px;background:#22224a;}',
      '.pelis-modal-info{flex:1;min-width:0;padding-right:28px;}',
      '.pelis-modal-titulo{margin:0 0 6px;font-size:1.5rem;font-weight:bold;color:#fff;}',
      '.pelis-modal-original{margin:0 0 6px;font-size:.9rem;color:#c3c3d8;}',
      '.pelis-modal-meta{margin:0 0 12px;font-size:.9rem;color:#ffd54f;}',
      '.pelis-modal-texto{margin:0 0 16px;line-height:1.55;font-size:1rem;}',
      '.pelis-modal-texto.is-cargando,.pelis-modal-texto.is-vacio{color:#c3c3d8;font-style:italic;}',
      '.pelis-modal-credito{margin:14px 0 0;font-size:.8rem;color:#a9a9c4;}',
      '.pelis-modal-credito a{color:#7fc8ff;}',
      '@media (max-width:575px){.pelis-modal-cuerpo{flex-direction:column;align-items:center;padding:18px;}.pelis-modal-poster{flex-basis:auto;width:150px;}.pelis-modal-info{padding-right:0;width:100%;}}',
      '.pelis-card-link{display:block;width:100%;padding:0;border:0;background:none;color:inherit;text-align:left;text-decoration:none;cursor:pointer;border-radius:8px;}',
      '.pelis-card-link:hover,.pelis-card-link:focus{color:inherit;text-decoration:none;}',
      '.pelis-card-link:focus-visible{outline:3px solid #ffc107;outline-offset:2px;}',
      '.pelis-poster{position:relative;display:block;aspect-ratio:2/3;overflow:hidden;border-radius:8px;background:#22224a;}',
      '.pelis-poster img{width:100%;height:100%;object-fit:cover;padding:0;border:0;border-radius:8px;transition:transform .25s ease;}',
      '.pelis-card-link:hover .pelis-poster img,.pelis-card-link:focus-visible .pelis-poster img{transform:scale(1.05);}',
      '.pelis-badge{position:absolute;top:6px;right:6px;padding:2px 7px;border-radius:12px;font-size:.75rem;font-weight:bold;background:rgba(0,0,0,.7);color:#fff;}',
      '.pelis-badge.is-play{background:rgba(220,20,60,.9);}',
      '.pelis-titulo{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;margin-top:5px;font-size:.85rem;line-height:1.2;}',
      '.pelis-card.is-active .pelis-poster{box-shadow:0 0 0 3px #ffc107;}',
      '.pelis-vacio{text-align:center;padding:20px;}',
      '.pelis-now{margin:8px 0;padding:8px 12px;border-radius:6px;background:rgba(0,0,0,.55);color:#fff;font-size:.95rem;}',
      '.pelis-now.is-error{background:rgba(160,0,30,.85);}',
      '.pelis-now-link{color:#ffd54f;font-weight:bold;}'
    ].join('\n');
    document.head.appendChild(style);
  }

  // ------------------------------------------------------------------
  // Catálogo (web component <menu-component>)
  // ------------------------------------------------------------------
  function buildCard(peli, index) {
    var li = el('li', 'pelis-card');
    var isPlay = !!peli.v;
    var link;

    if (isPlay) {
      link = el('button', 'pelis-card-link');
      link.type = 'button';
      link.title = 'Ver aquí: ' + peli.t;
    } else {
      link = el('a', 'pelis-card-link');
      link.href = peli.e;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.title = 'Abrir en pestaña nueva: ' + peli.t;
    }
    link.setAttribute('data-index', index);

    var poster = el('span', 'pelis-poster');
    var img = el('img', 'img_video_nav img-thumbnail w-100');
    img.alt = '';
    img.loading = 'lazy';
    img.decoding = 'async';
    img.referrerPolicy = 'no-referrer';
    img.width = 200;
    img.height = 300;
    img.onerror = function () { img.onerror = null; img.src = PLACEHOLDER; };
    img.src = peli.img;

    var badge = el('span', 'pelis-badge' + (isPlay ? ' is-play' : ''), isPlay ? '▶ Ver' : '↗ Ir');
    badge.setAttribute('aria-hidden', 'true');

    poster.appendChild(img);
    poster.appendChild(badge);
    link.appendChild(poster);
    link.appendChild(el('span', 'pelis-titulo', peli.t));
    li.appendChild(link);

    // Lupa: botón aparte (no puede ir dentro del botón/enlace de la tarjeta)
    var info = el('button', 'pelis-info');
    info.type = 'button';
    info.title = 'Ver sinopsis';
    info.setAttribute('aria-label', 'Ver sinopsis de ' + peli.t);
    info.setAttribute('data-index', index);
    info.innerHTML = LUPA_SVG; // SVG fijo, no contiene datos externos
    li.appendChild(info);
    return li;
  }

  var LUPA_SVG = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false">' +
    '<circle cx="10.5" cy="10.5" r="6.5" fill="none" stroke="currentColor" stroke-width="2.5"/>' +
    '<line x1="15.5" y1="15.5" x2="21" y2="21" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/></svg>';

  function buildOption(value, text) {
    var o = el('option', null, text);
    o.value = value;
    return o;
  }

  function Catalogo(root) {
    var self = this;
    this.cards = PELIS.map(buildCard);
    this.search = PELIS.map(function (p) { return normalizeText(p.t); });
    this.years = PELIS.map(function (p) { return yearOf(p.t); });
    this.shown = PAGE_SIZE;

    var section = el('section', 'pelis-catalogo');
    section.setAttribute('aria-label', 'Catálogo de películas');

    var toolbar = el('div', 'pelis-toolbar');
    this.input = el('input', 'form-control pelis-buscar');
    this.input.type = 'search';
    this.input.placeholder = 'Buscar película…';
    this.input.setAttribute('aria-label', 'Buscar película');

    this.yearSelect = el('select', 'form-select pelis-anio');
    this.yearSelect.setAttribute('aria-label', 'Filtrar por año');
    this.yearSelect.appendChild(buildOption('', 'Todos los años'));
    Array.from(new Set(this.years.filter(Boolean))).sort().reverse().forEach(function (y) {
      self.yearSelect.appendChild(buildOption(y, y));
    });

    this.typeSelect = el('select', 'form-select pelis-tipo');
    this.typeSelect.setAttribute('aria-label', 'Filtrar por tipo');
    this.typeSelect.appendChild(buildOption('', 'Todas'));
    this.typeSelect.appendChild(buildOption('v', '▶ Ver aquí'));
    this.typeSelect.appendChild(buildOption('e', '↗ Enlace externo'));

    this.counter = el('span', 'pelis-contador');
    this.counter.setAttribute('aria-live', 'polite');

    toolbar.appendChild(this.input);
    toolbar.appendChild(this.yearSelect);
    toolbar.appendChild(this.typeSelect);
    toolbar.appendChild(this.counter);

    this.grid = el('ul', 'video-grid-responsive pelis-grid');
    this.grid.id = 'video_navigation';
    this.cards.forEach(function (c) { self.grid.appendChild(c); });

    this.empty = el('p', 'pelis-vacio', 'No se encontraron películas con esos filtros.');
    this.empty.hidden = true;

    var moreWrap = el('div', 'text-center mt-3 mb-4');
    this.moreBtn = el('button', 'btn btn-primary btn-lg pelis-mas', 'Ver más películas');
    this.moreBtn.type = 'button';
    moreWrap.appendChild(this.moreBtn);

    section.appendChild(toolbar);
    section.appendChild(this.grid);
    section.appendChild(this.empty);
    section.appendChild(moreWrap);

    var floatBtn = el('a', 'float-pelis');
    floatBtn.href = '#videos';
    floatBtn.title = 'Ir al reproductor';
    floatBtn.setAttribute('aria-label', 'Ir al reproductor');
    var icon = el('i', 'fas fa-film my-float-pelis');
    icon.setAttribute('aria-hidden', 'true');
    floatBtn.appendChild(icon);

    // Se antepone al contenido existente para no borrar nada que esté dentro de la etiqueta
    root.insertBefore(floatBtn, root.firstChild);
    root.insertBefore(section, root.firstChild);

    var timer;
    this.input.addEventListener('input', function () {
      clearTimeout(timer);
      timer = setTimeout(function () { self.shown = PAGE_SIZE; self.apply(); }, 150);
    });
    this.yearSelect.addEventListener('change', function () { self.shown = PAGE_SIZE; self.apply(); });
    this.typeSelect.addEventListener('change', function () { self.shown = PAGE_SIZE; self.apply(); });
    this.moreBtn.addEventListener('click', function () { self.shown += PAGE_SIZE; self.apply(); });

    this.grid.addEventListener('click', function (ev) {
      var lupa = ev.target.closest('.pelis-info');
      if (lupa) {
        var j = Number(lupa.getAttribute('data-index'));
        if (PELIS[j]) openSinopsis(PELIS[j], function () { self.play(j); });
        return;
      }
      var link = ev.target.closest('.pelis-card-link');
      if (!link || link.tagName !== 'BUTTON') return; // los <a> externos se abren solos
      self.play(Number(link.getAttribute('data-index')));
    });

    this.apply();
  }

  Catalogo.prototype.play = function (i) {
    var peli = PELIS[i];
    if (!peli || !peli.v) return;
    this.cards.forEach(function (c) { c.classList.remove('is-active'); });
    this.cards[i].classList.add('is-active');
    videoUrl(peli.v, peli.t);
  };

  Catalogo.prototype.apply = function () {
    var q = normalizeText(this.input.value).trim();
    var terms = q ? q.split(/\s+/) : [];
    var year = this.yearSelect.value;
    var type = this.typeSelect.value;
    var matches = 0;

    for (var i = 0; i < PELIS.length; i++) {
      var p = PELIS[i];
      var ok = (!year || this.years[i] === year) &&
        (!type || (type === 'v' ? !!p.v : !!p.e));
      for (var k = 0; ok && k < terms.length; k++) {
        if (this.search[i].indexOf(terms[k]) === -1) ok = false;
      }
      if (ok) matches++;
      this.cards[i].hidden = !(ok && matches <= this.shown);
    }

    var visible = Math.min(matches, this.shown);
    this.counter.textContent = matches === PELIS.length && visible === matches
      ? matches + ' películas'
      : 'Mostrando ' + visible + ' de ' + matches + (matches === 1 ? ' película' : ' películas');
    this.empty.hidden = matches > 0;
    this.moreBtn.hidden = matches <= this.shown;
  };

  class MenuComponent extends HTMLElement {
    connectedCallback() {
      if (this._pelisReady) return; // evita duplicar el catálogo si el elemento se mueve
      this._pelisReady = true;
      injectStyles();
      new Catalogo(this);
    }
  }

  if (window.customElements && !customElements.get('menu-component')) {
    customElements.define('menu-component', MenuComponent);
  }
})();
