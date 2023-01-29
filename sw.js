/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","30c4deb0179ce7d74695318fc0236ca6"],["/about/img/bootstrap.svg","15282dff001376d035d9167b7633cb69"],["/about/img/c.svg","7984f1f99e00b58e6402c5624e1dc298"],["/about/img/flask.svg","318c795b48bf389a0ff4bd7951bcbe45"],["/about/img/git.svg","fef8e95112e6ab6f2169430ee510db5e"],["/about/img/hexo.svg","84964f5f2f2dcd35d50af7a8e989ab64"],["/about/img/javascript.svg","0c1f700da144243c526f252e59362138"],["/about/img/matlab.svg","7e661c31cff8ccf76487cc6eceafe7fb"],["/about/img/pandas.svg","e5833cf5789790b1464d49a4b5a0ef62"],["/about/img/photoshop.svg","f012a100ba46a3503cb88372c59492d3"],["/about/img/python.svg","cbea878ae2080a1a160bafe6b9d8fb34"],["/about/img/r.svg","190980c3f3cc216ed77f1cbf6721a49c"],["/about/img/vuejs.svg","404dd6eae9ce3e62d3168972573f805f"],["/about/index.html","3785f811ceb73015e7ab686212ec6592"],["/archives/2021/10/index.html","938e64684ee68bc1cf9394a73457e595"],["/archives/2021/12/index.html","8bd2b755e5b8815aa5542d643f0be5ed"],["/archives/2021/index.html","060d8c94c1e69e909527eeb5e0b7047c"],["/archives/2022/01/index.html","c62c365467cba3b02a3125c129deb20b"],["/archives/2022/02/index.html","6817c9220fbee5654701e8cf544a9874"],["/archives/2022/03/index.html","ccfe0e62609bf1968e179120ae8fdb3b"],["/archives/2022/05/index.html","cdfa8935689c7d245bcaa10610197928"],["/archives/2022/06/index.html","149dabe8b21596413e602ca722d2b728"],["/archives/2022/07/index.html","5d73d4e41f8bc8484384db06bbb6c9d5"],["/archives/2022/08/index.html","ff0cd2815242bdd90e8c22b941653a2b"],["/archives/2022/09/index.html","95a10a31722849d32878117efb23a36b"],["/archives/2022/10/index.html","f227b4ef3180337682f9ef43db510ad7"],["/archives/2022/12/index.html","534aab4175d78b503287239e21e92799"],["/archives/2022/index.html","00348f4e505788d9f8d6f4357ce44fc2"],["/archives/2022/page/2/index.html","b05779eff0a038613d3f58d58ad8483f"],["/archives/2022/page/3/index.html","7ca14f093886cef39d38e7638bc348cb"],["/archives/2023/01/index.html","4e386b0caaae19159b881142c98f5f7c"],["/archives/2023/index.html","60abd7260d45d10fccc76adbcf933ad4"],["/archives/index.html","5a7fe246fe3b54b38752b50f9c95e601"],["/archives/page/2/index.html","2d37817db474581f050946d1f4160c77"],["/archives/page/3/index.html","533e19d76b2482cafa003f3a9539f364"],["/archives/page/4/index.html","92bd44288c5d2109d56716fd2e2951b1"],["/article/aria2-mac.html","24b0324f86ef0d2e45f1a3c9c760441d"],["/article/aria2-mac/QQ20220319-175017.gif","454780fee2b91f678b4235252657bf51"],["/article/aria2-mac/image-20220319180124115.png","68b9da57a50b588418ebea16cf413d71"],["/article/aria2-mac/image-20220319180542315.png","3915787c421cbdc8919e47cf526ccb29"],["/article/bilibili-qinglong.html","53febdb843b3ea69ec96fb88f2c5cadb"],["/article/bilibili-qinglong/br_ys.29d7da3d.png","dd83e1b98ab55c90e50925ac8ae6c65c"],["/article/bilibili-qinglong/chrome-net-bnav.png","7ca7a34f97367d88dd7f176a44871ee9"],["/article/bilibili-qinglong/firefox-net-bnav.png","efc8e151403cd5642e5fe94d26e2ef23"],["/article/bilibili-qinglong/firefox-network.png","419f879a1445c7dfc1d1029db7392cf4"],["/article/bilibili-qinglong/image-20220907120359433.png","2b81a17772c468b3b1fde88d8931e399"],["/article/bilibili-qinglong/image-20220907120800606.png","d982b36a2dcc380ca6a2541d20d3f500"],["/article/bilibili-qinglong/image-20220907121154016.png","f1ada070322e37d89f3158f216fc1549"],["/article/bilibili-qinglong/image-20220907133801593.png","e344b384acc4ab372e8c4447a07010e7"],["/article/bilibili-qinglong/image-20220907133920012.png","ff35967c75969d9de098868a6a885250"],["/article/bilibili-qinglong/image-20220907134421036.png","615571544f1eaa576905efe6eb6a79cd"],["/article/bilibili-qinglong/ql_update.png","a3a6bb3c4b28044a6d123aa04970cff6"],["/article/brew-r-jupyter.html","22c8c3f10cc7b74ad9d757f334ecca36"],["/article/brew-r-jupyter/image-20221010205123146.png","a023e72efe524542d060f0392f5fe875"],["/article/brew-r-jupyter/image-20230116115826253.png","b279f2073b9f897508a4d9c6f5381c53"],["/article/cactus-codeblock-beautify.html","3b2bc09aa2efb24c954eeb4bc6a8fd30"],["/article/cactus-codeblock-beautify/image-20211227172137422.png","f55ad7d779a7bac84e018d62e37d8d67"],["/article/cactus-codeblock-beautify/image-20211227223103409.png","00b88756b32862d55628bf3040b64a46"],["/article/cactus-codeblock-beautify/image-20211227223503492.png","a1ed71f7156d0ad9060ec0909219cf7d"],["/article/conda-r-jupyter.html","97e105c7511e55236f653c83c7695ebf"],["/article/conda-r-jupyter/image-20221010174813001.png","73e50474bbb34364e9e375d6b856bd8e"],["/article/conda-r-jupyter/image-20221010182224588.png","ee7d48394048a48e6b4e6d58e99a5440"],["/article/conda-r-jupyter/image-20221010201826507.png","5f88914fc342830c51a51efa628d2ae6"],["/article/conda-r-jupyter/image-20221010205123146.png","a023e72efe524542d060f0392f5fe875"],["/article/conda-r-jupyter/image-20221017223737389.png","f8575662d56136a80721bde2e76ca762"],["/article/conda-r-jupyter/image-20221017233347844.png","d49b29f8953892ba28919f941485c241"],["/article/conda-r-jupyter/image-20221018152019887.png","59f218d059372310e7b6b835bac2acec"],["/article/docker-easyconnect.html","346aff3cb41c97bd3e38e92cad6757d5"],["/article/docker-easyconnect/image-20221207135810619.png","34b5d84191774dc799f65075bebcf695"],["/article/docker-easyconnect/v2-31c51548fc67de83039eeedf10bf28c5_r.jpg","6e5a366407ab3a0fba8d6810ec7ecab4"],["/article/docker-easyconnect/v2-ef2d65c9a9b6b65228529a429261160c_r.jpg","1ee24092fe1ed310d3e5e7c9c4c96390"],["/article/docker-macos.html","9cd75ac2a10ab499113a65788046cb6c"],["/article/docker-macos/image-20221205153421353.png","1d3e367ba45f2c64adcb5ab328794763"],["/article/docker-macos/image-20221205160750680.png","baa535d5a9927e74f79772ce12d99624"],["/article/docker-macos/image-20221205160832483.png","3380780f7cf0917480016dcb794354fd"],["/article/docker-macos/image-20221213120548391.png","9f3a6aa7ca71c2047611e22f3c856e56"],["/article/docker-macos/image-20221213121901639.png","fa3f8576ebc13d4b298f111c5018b9d0"],["/article/fancybox-cactus.html","ed12a54ee34de91329b401a89c78f640"],["/article/fancybox-cactus/image-20220220160055554.png","3be34b425970f0fb07e22421f98e3c3c"],["/article/fancybox-cactus/image-20220220172801964.png","2d0ff85499440d4672fcc234369aebce"],["/article/fancybox-twikoo.html","06706bfef522d64806c266f2d1d8840f"],["/article/fancybox-twikoo/image-20220220160055554.png","3be34b425970f0fb07e22421f98e3c3c"],["/article/fancybox-twikoo/image-20220713151533510.png","df4eba3b13e5102e37c20ec52924e887"],["/article/fancybox-twikoo/image-20220713153543806.png","67e4b3b7ae6e2f6142fb84abc548ff92"],["/article/gift-code.html","2dcf1bacc5b47079c82d17a972207d9f"],["/article/ios-app.html","8b5f338ade6e27f69dceadf0e80aa2d8"],["/article/ios-jailbreak-genshin.html","7e4c62f047d1db2055a37bdf3db09e74"],["/article/ios-jailbreak-genshin/error.png","3258b5be903e627e287d44ce061639a0"],["/article/ios-jailbreak-genshin/img.png","cb638559b6c673747959d5b05f11c41f"],["/article/jailbreak-plugin-backup.html","a9be2f97bdcd55bca77e631d0532d9a0"],["/article/jetbrains-activate.html","0513bbb539e82eca5e179c09354c3212"],["/article/jetbrains-activate/image-20220106145338969.png","526f05aee91cfe88d9e365d5061dc623"],["/article/jetbrains-activate/image-20220321174826134.png","1875734f5a0fedf6154116d1d1348d77"],["/article/jetbrains-activate/image-20220417180532192.png","3c8f6bca4412db759b3962a57e7f48df"],["/article/jetbrains-activate/image-20220417181002264.png","d9fc15271adabb7aaf8e0620ec397931"],["/article/ksjsb-cookie.html","760a0329bece826329972de20922d402"],["/article/ksjsb-cookie/27CF6E70110624196EC27197E5CF15C9.jpg","76079f3256ac96a883b1a02191c422f2"],["/article/ksjsb-cookie/image-20220802122359062.png","75980863e668de7bd5f2d7809b9fcfeb"],["/article/ksjsb-cookie/image-20220802122429599.png","9a5b7cfa21262767db60a73eb678513f"],["/article/ksjsb-cookie/image-20220803112457171.png","b7edaab86a8561d677040b03298ed252"],["/article/ksjsb-cookie/image-20220803152512767.png","26a7797db34d100a44c6c2908162f4fe"],["/article/ksjsb-cookie/image-20220803152538456.png","520c7a6a9ab48f584e34c590abe92c31"],["/article/ksjsb-cookie/image-20220803152602866.png","44f49d9b1482d99d80809bdd3b8d70af"],["/article/ksjsb-cookie/image-20220803153019696.png","38788dd3c7d8ce25009721ca4fd02a8d"],["/article/ksjsb-cookie/image-20220803153132284.png","66e64708d0383a8f45a426aec77de5ea"],["/article/ksjsb-cookie/image-20220803182922295.png","1a667e5481450234d148424e49d4db3e"],["/article/ksjsb-cookie/image-20220803182943032.png","66666bb86a2d7d0729430a27c0ffa4e6"],["/article/ksjsb-cookie/qq_pic_merged_1659411129188.jpg","4e554dabcb6d0796ec17d8097097575e"],["/article/ksjsb-cookie/qq_pic_merged_1659411356354.jpg","5345f3ea3c84704dfcf8ff7608b123fc"],["/article/ksjsb-cookie/qq_pic_merged_1659411649769.jpg","30500dd2c912fd26c17559319f9a599c"],["/article/ksjsb-cookie/qq_pic_merged_1659411790619.jpg","34d01a3d1d225689fe4b8cdd9ec14604"],["/article/ksjsb-cookie/qq_pic_merged_1659412262964.jpg","30d472f9f8f4ff67ce932150aa921105"],["/article/ksjsb-cookie/qq_pic_merged_1659412524498.jpg","0b09ac23e725fdc1ffa14cbcea396734"],["/article/ksjsb-cookie/qq_pic_merged_1659412738397.jpg","10096f671b039d36d1a3e159f6aa8058"],["/article/ksjsb-cookie/qq_pic_merged_1659412828818.jpg","27c9af856d6a587a87191c9282d6440b"],["/article/ksjsb-cookie/qq_pic_merged_1659413729910.jpg","8a3bbcc85a0056822c81932b61c33995"],["/article/ksjsb-cookie/qq_pic_merged_1659413807817.jpg","dcf028230d083ae22634b65aee0ee791"],["/article/mac-tiling-yabai.html","1241c38ddab8b9b6ba50edccca22136e"],["/article/mac-tiling-yabai/1161505-20220306151719494-1937640907.png","dde2f17a92990943b38c59796f73fa5e"],["/article/mac-tiling-yabai/image-20220520121029280.png","bf19b10655cb996a1846c629ec71d833"],["/article/omz-terminal.html","08f72210aa3fb600d447d7dcdd16e37f"],["/article/omz-terminal/image-20221207141425504.png","bf628cfbf2df0572b09335b2620a62d0"],["/article/omz-terminal/image-20221207141800253.png","1a8f3c6bfd8635fdc41ad75881161de4"],["/article/omz-terminal/image-20221209104217575.png","8fcf14ea42574022948478ff5e7a0180"],["/article/passby-fix.html","958adb3cc714d672d4c08c1c4b3ea019"],["/article/passby-fix/image-20220113161956969.png","32fd6226a2abc8dfb0cfe26f3afe64bb"],["/article/passby-fix/image-20220114222356631.png","b306360645c939840335348bd21d5745"],["/article/passby-fix/image-20220114222622805.png","1ead65bda5616df3044396cdcf1d777c"],["/article/passby-fix/image-20220114234532701.png","deaaf772068971a3e09c37fd72b4e974"],["/article/passby-fix/image-20221215103327735.png","9faa8ddba68284aae8fcbd923cdf1264"],["/article/python-notebook.html","9cc6a6cccadde3fa3a0ebb7d422a23bf"],["/article/qinglong-jd.html","88ddb4c5ade563a6da02d29ee3b6e28f"],["/article/qinglong-jd/image-20220310160646421.png","6dea01548f4b9087e612de86026de20a"],["/article/qinglong-jd/image-20220310161019853.png","320fefcb7c47828194a0b9549ef4d7af"],["/article/qinglong-jd/image-20220310161222686.png","c6b430ad0775b0b56b967dc24b532d44"],["/article/qinglong-jd/image-20220310162558349.png","be906206bd4d364364b900dede5f6394"],["/article/qinglong-jd/image-20220310163451895.png","35441635572f5bb677f3edfaa3879016"],["/article/qinglong-jd/image-20220310163958888.png","2319df0a79532d0c57920600ea7036ae"],["/article/qinglong-jd/image-20220310165735358.png","c6ae84ccf7a990a388445e14376d54e5"],["/article/qinglong-jd/image-20220602190147235.png","382044f1a181c47e82a7a18fa4295c2b"],["/article/takagi-san.html","225d48fc50bf99f24cc60cc937b36515"],["/atom.xml","753efe54b4bb863e13b6c7a59ee18498"],["/categories/backup/index.html","89e6e4acf8cf44a55d6fb18ba5b61776"],["/categories/backup/ios/index.html","dbe8e620d5740c679f3fd2562a594a74"],["/categories/crack-fix/index.html","9ba605743da971bff86801c78deb94d0"],["/categories/crack-fix/ios/index.html","403eed5ca4aa73bf6fe61398ccf19825"],["/categories/free-share/index.html","aeaf68821880ac073954953552efaa90"],["/categories/index.html","0ba2d90c0d9a871e27cf0131341e7d99"],["/categories/random-mind/index.html","554efe6b54ee27dfa6c6a0fa8140e33b"],["/categories/study-life/index.html","f0abc6e8419c0dc4e8c6034f2ac79c60"],["/categories/theme/index.html","f0c22714cdb46f430abe3f8c43c81628"],["/categories/tips/droplet/index.html","8a901380c174ab068a35dcba7c5039f6"],["/categories/tips/droplet/qinglong/index.html","89827127e2c3b076762548e38522693a"],["/categories/tips/fiddler/index.html","a755d6fab594c6a8f1ac14ab318d332a"],["/categories/tips/index.html","bf74054bc08afddb0e9ee0a3a9d5eeac"],["/categories/tips/ios/index.html","b318c52e6a7c986f9ab1bb3e366b39c1"],["/categories/tips/macos/index.html","7d94b48ec3ed4d22f4bb37ce0896c0a8"],["/categories/tips/page/2/index.html","01baf7cb5977f1617b33a6287168635a"],["/categories/tips/unix/index.html","8a4e236562523b4e85a2f4f6c9af04cb"],["/css/fancybox.css","02c192ed04a03c94ea88d20fe1e3415c"],["/css/rtl.css","ab29fae71066b3c5b0547281ed2495a5"],["/css/style-dark.css","921351972eb89d1203f75a29735fa1d1"],["/css/style.css","29ba1fe25be30276381f912a8d3f0f63"],["/images/apple-touch-icon.png","221a1df8cd96cda58e1d85d644e0907b"],["/images/comment_bg.png","11b6595db5912c6d78b08e96f1cc9023"],["/images/favicon-192x192.png","d47564268ac15e525c40066ebefb6139"],["/images/icons/icon-192x192.png","d47564268ac15e525c40066ebefb6139"],["/images/icons/icon-512x512.png","009f6a3dcb965e90463081d3a598a6e4"],["/images/logo.png","9b681f662f7c8094b35eaa700712ca4b"],["/index.html","39451725e51297b2a5a05d69a5afb0a2"],["/js/main.js","d76d5b606754c4c72bc33338cd45a9c7"],["/js/search.js","ee92ecbdfdd2a8f32a09a175b89a8e57"],["/js/switch.js","f6eb72f46198a5527bc019886e321e23"],["/lib/clipboard/clipboard.min.js","9de9f70b0468760fb7ea4f2d670fdbfe"],["/lib/fancybox/fancybox.umd.js","85fb0f0ead6f65d7f9e911cf9bea578c"],["/lib/font-awesome/css/all.min.css","27679c286f95b183404addd24cb556db"],["/lib/font-awesome/webfonts/fa-brands-400.eot","088a34f78f530102fd9661173b4a4f26"],["/lib/font-awesome/webfonts/fa-brands-400.svg","b2959afa7f6e67ee671326a9181e9cf5"],["/lib/font-awesome/webfonts/fa-brands-400.ttf","273dc9bf9778fd37fa61357645d46a28"],["/lib/font-awesome/webfonts/fa-brands-400.woff","f4920c94c0861c537f72ba36590f6362"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","822d94f19fe57477865209e1242a3c63"],["/lib/font-awesome/webfonts/fa-regular-400.eot","3ac49cb33f43a6471f21ab3df40d1b1e"],["/lib/font-awesome/webfonts/fa-regular-400.svg","fbd31d03755013709df427f75ca6394f"],["/lib/font-awesome/webfonts/fa-regular-400.ttf","ece54318791c51b52dfdc689efdb6271"],["/lib/font-awesome/webfonts/fa-regular-400.woff","a57bcf76c178aee452db7a57b75509b6"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","9efb86976bd53e159166c12365f61e25"],["/lib/font-awesome/webfonts/fa-solid-900.eot","7fb1cdd9c3b889161216a13267b55fe2"],["/lib/font-awesome/webfonts/fa-solid-900.svg","306202ccd1dff350a0a0fc714021653b"],["/lib/font-awesome/webfonts/fa-solid-900.ttf","2aa6edf8f296a43b32df35f330b7c81c"],["/lib/font-awesome/webfonts/fa-solid-900.woff","93f284548b42ab76fe3fd03a9d3a2180"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","f6121be597a72928f54e7ab5b95512a1"],["/lib/jquery/jquery.min.js","8fb8fee4fcc3cc86ff6c724154c49c42"],["/lib/justified-gallery/css/justifiedGallery.min.css","ceaa86fef1d6491660adf7244265affb"],["/lib/justified-gallery/js/jquery.justifiedGallery.min.js","b3c16bcda205ebe084ee04f4900b7dbc"],["/lib/meslo-LG/MesloLGL-Bold.ttf","6c475ed9d73a90d62c666b3d94f350d2"],["/lib/meslo-LG/MesloLGL-BoldItalic.ttf","1c5a059e12b5e0993699481455cf8b74"],["/lib/meslo-LG/MesloLGL-Italic.ttf","17ab93d9e2493a279171fa183279decc"],["/lib/meslo-LG/MesloLGL-Regular.ttf","265d62d86941c398f07704a80911ac92"],["/lib/meslo-LG/MesloLGM-Bold.ttf","4174a16af8cfe61e45d1ec4758227443"],["/lib/meslo-LG/MesloLGM-BoldItalic.ttf","33e53ff2022c98c3f3caa5c4682a1939"],["/lib/meslo-LG/MesloLGM-Italic.ttf","259bbc1d62105f728101523e3295ddd1"],["/lib/meslo-LG/MesloLGM-Regular.ttf","93e2fae291d0da752d78dc0b113591d9"],["/lib/meslo-LG/MesloLGS-Bold.ttf","a31874e50f29681640f88e00f2343c25"],["/lib/meslo-LG/MesloLGS-BoldItalic.ttf","2e752bcf18165adadef20e83389eb9a7"],["/lib/meslo-LG/MesloLGS-Italic.ttf","526d28c1d73dedca45091a1530541908"],["/lib/meslo-LG/MesloLGS-Regular.ttf","d20aa15f5ce240b12b2475042c6ead8e"],["/lib/twikoo/twikoo.all.min.js","8acc990052b298508ff5ee6283790bb0"],["/lib/vazir-font/Vazir-Black.eot","817f917ca1bd73fdafb73c8780633cdb"],["/lib/vazir-font/Vazir-Black.ttf","78fc370174609c35b98e3dcd38f53bfc"],["/lib/vazir-font/Vazir-Black.woff","65678ca9d6bca0505488538c49efa85f"],["/lib/vazir-font/Vazir-Black.woff2","53dea81209d52200d04acd7bf4fe04aa"],["/lib/vazir-font/Vazir-Bold.eot","6b4258266f6cc8ebe9c599e1a52591a1"],["/lib/vazir-font/Vazir-Bold.ttf","bff5dfbc9bea8d538bf7fb4579ec4f32"],["/lib/vazir-font/Vazir-Bold.woff","1dc06ca075e3e867a9a9253810983c69"],["/lib/vazir-font/Vazir-Bold.woff2","eb2e0810074169c14d979f723516e575"],["/lib/vazir-font/Vazir-Light.eot","4ccde095698e572025b49813ce57bf23"],["/lib/vazir-font/Vazir-Light.ttf","f949c9c6e0a78ca311d4f3bcc53222bc"],["/lib/vazir-font/Vazir-Light.woff","5aa1dcde9af46e421829e908db25dd75"],["/lib/vazir-font/Vazir-Light.woff2","f27550a062965ccf8614d6daed9fb37f"],["/lib/vazir-font/Vazir-Medium.eot","a8b87e489e09fd35814d4fe85d42e364"],["/lib/vazir-font/Vazir-Medium.ttf","f30326eff40bdab923a1de08cb394567"],["/lib/vazir-font/Vazir-Medium.woff","4308d08acc3cc132f457edfe36fb047c"],["/lib/vazir-font/Vazir-Medium.woff2","a88d0b18bd96794f94c006c4cd052622"],["/lib/vazir-font/Vazir-Thin.eot","7cb5ce0d4cbc438e3ef77535d84d4a0d"],["/lib/vazir-font/Vazir-Thin.ttf","a4b0ba433552c6442b0a312c4c42345f"],["/lib/vazir-font/Vazir-Thin.woff","47715ef73613e8f18aa5031b0a602539"],["/lib/vazir-font/Vazir-Thin.woff2","d580da1fc55f6253356ca89229532104"],["/lib/vazir-font/Vazir.eot","1f15de7bca7ce47b0e6a99fdc3f98272"],["/lib/vazir-font/Vazir.ttf","29d3b94592bc65baaa0c368ea99fbecd"],["/lib/vazir-font/Vazir.woff","525eba78808492d95b2e7a16881ce663"],["/lib/vazir-font/Vazir.woff2","2dfb8895f5d7884ddf3113972e03aaff"],["/lib/vazir-font/font-face.css","ec6ffa11abd6e540e0027bcb066f9090"],["/page/2/index.html","5964f796bcf8c91fc49304f9a7acbff6"],["/page/3/index.html","13b63ab17c683556fdf4a405aa85a8d0"],["/robots.txt","8c2d460226aa5bd6ceccfaf0e83bd7f4"],["/search.xml","18acc6d3df9218c3fe796d68506b0ece"],["/search/index.html","61a22348ee4d38c0dbd019eaad5b499d"],["/sitemap.xml","99e4d0bf8a1f1e1a73a9e0190b351cbf"],["/submit.txt","328abd13986f8156dd4593a8c8e46e96"],["/sw-register.js","ef19e1909773411c3c61dbd9e1c07f9c"],["/tags/aria2/index.html","69449485befbfa58b25d7054c130e17f"],["/tags/beautify/index.html","ae34edae4f688e5dacc07853aff1cbad"],["/tags/bilibili/index.html","380a5f0b3f513b6c3bfbcf5b4dd44c22"],["/tags/cactus/index.html","186677487924709620b0e7ebe03843c0"],["/tags/charles/index.html","b2463a6223015eb0796c37fe52a1c22a"],["/tags/clash/index.html","812432eb47bc143bc3996ad439bb7047"],["/tags/codeblock/index.html","240396ef324950ea5ca9a8c441f70962"],["/tags/colima/index.html","5fa1b496d4edc06712feea19b1f9fa49"],["/tags/conda/index.html","d76c06e9e6e7b7a136d30cbb4e36d42f"],["/tags/crack/index.html","b8686767868cfaa9d2bf181cf0abf722"],["/tags/docker/index.html","4436e85e33748eeff4dfc3ebad4259d3"],["/tags/droplet/index.html","4c66bb204fba09a0b8981c6d6023ee5c"],["/tags/easyconnect/index.html","8d785559af170c9a3398487352e0523c"],["/tags/fancybox/index.html","395d4414b24ae31f4be875bcf3f3b865"],["/tags/genshin-impact/index.html","bcdf8ae59767cd8b397089aae01d1e83"],["/tags/gift/index.html","92d98d2d3355fdd51e1498cc39d9c669"],["/tags/httpcanary/index.html","bfe39846e4ba07c13e8c3e953246baed"],["/tags/index.html","0be2ebb12cfd1d09049e445f3b009ffe"],["/tags/ios/index.html","f740360ab38a9b9fcd78103225313697"],["/tags/jailbreak/index.html","02ebbcdcc7c6ceba2085597915338350"],["/tags/jd/index.html","0c092a9825f32813f24c9037de88b614"],["/tags/jetbrains/index.html","1e514a1d94cbae1dd87d5f59fd687434"],["/tags/jupyter/index.html","5f9f14372530a758b293672fa76a5438"],["/tags/ksjsb/index.html","46996c89352b8b1a206b2b7c5aa05f4d"],["/tags/macos/index.html","131aa08053943d2401874389794a1038"],["/tags/notebook/index.html","5ace771a7ab6cfab9ff24f29802265ab"],["/tags/oh-my-zsh/index.html","9441461f622288271c72101cff851331"],["/tags/old-app/index.html","26fa982861d9193cde13b9c7a6dc8525"],["/tags/passby/index.html","35cdbf4282330020235b39331997de14"],["/tags/python/index.html","6d2c775688e10046e19c2f08c863a740"],["/tags/qinglong/index.html","37b0971ecbc54982ca16942282cebc92"],["/tags/r/index.html","fd85ae393e27675910ca5d329db6a3a2"],["/tags/share/index.html","febe4a57dcdbd2399b21fc30510d72df"],["/tags/study/index.html","87def384aefe2ca35042c5e5bb184705"],["/tags/takagi-san/index.html","9c166d1d1113a962322a2d5300c7088b"],["/tags/terminal/index.html","2d6b1e835854deb79076efde57c58dc3"],["/tags/twikoo/index.html","f24f75eb449fd28386188df9ffb4c1bf"],["/tags/vmos/index.html","bb0dabcd751c9c586d93e1806c846cb2"],["/tags/yabai/index.html","f1e218a7432216cccc372d327819de9b"],["/tools/index.html","2cb86c695478bbf84e7e2178a80ef9da"],["/year/css/style.css","a2c398405b1d9c8e5339298eeda8f10e"],["/year/index.html","65cd52828456914e9e63504f0c21164b"],["/year/js/script.js","1744fd9c5c3da868b6e2f91ce7529d95"],["/year/js/style.js","af2ff04c499ae8a1d0dd11e514706473"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });



// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache 配置转换后的 toolbox 代码.

toolbox.router.get("/*", toolbox.cacheFirst, [{"origin":"vccv.cc"},{"origin":"cdn.jsdelivr.net"}]);





/* eslint-enable */
