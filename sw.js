/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","f197b19e2131783d8013887884816ad6"],["/about/img/bootstrap.svg","15282dff001376d035d9167b7633cb69"],["/about/img/c.svg","7984f1f99e00b58e6402c5624e1dc298"],["/about/img/flask.svg","318c795b48bf389a0ff4bd7951bcbe45"],["/about/img/git.svg","fef8e95112e6ab6f2169430ee510db5e"],["/about/img/hexo.svg","84964f5f2f2dcd35d50af7a8e989ab64"],["/about/img/javascript.svg","0c1f700da144243c526f252e59362138"],["/about/img/matlab.svg","7e661c31cff8ccf76487cc6eceafe7fb"],["/about/img/pandas.svg","e5833cf5789790b1464d49a4b5a0ef62"],["/about/img/photoshop.svg","f012a100ba46a3503cb88372c59492d3"],["/about/img/python.svg","cbea878ae2080a1a160bafe6b9d8fb34"],["/about/img/r.svg","190980c3f3cc216ed77f1cbf6721a49c"],["/about/img/vuejs.svg","404dd6eae9ce3e62d3168972573f805f"],["/about/index.html","a22d3de979b408f7c8102640da4634b6"],["/archives/2021/12/index.html","d80e4b19bee417cb22e980689ae871a7"],["/archives/2021/index.html","533d521bd7d2a5de0493efa349bf9555"],["/archives/2022/01/index.html","a02bb7f82b4d4a36c3867f43566e71fb"],["/archives/2022/02/index.html","33962e8b204f5c08d1c62f879261c9b4"],["/archives/2022/03/index.html","f2282cd9b7d713cdec612d59b917a0d4"],["/archives/2022/05/index.html","02066f853ac8623e3c367a21ba4ae9e4"],["/archives/2022/07/index.html","d883a3fb4d34702c2d9cffb8064ff744"],["/archives/2022/08/index.html","4365c0a648ed28245df8963658521c9d"],["/archives/2022/09/index.html","51c4119e1b13151e44a19fd1072b4cb7"],["/archives/2022/10/index.html","1b2a5471b11a324c100e52fb04c2e259"],["/archives/2022/12/index.html","8e81e7597aa8633024178bb1a2422b19"],["/archives/2022/index.html","c63decd75c3d0bf4a58581f53dc17beb"],["/archives/2022/page/2/index.html","9530233b64442ed73aab9a1e1470e005"],["/archives/2022/page/3/index.html","540cb2159c0475acc6d31dc5daec32c1"],["/archives/2023/01/index.html","1c05740ea1b86a9c9e03c7fbc8bd8de1"],["/archives/2023/04/index.html","2d68edf237a026e0fb9e2164d1e2294d"],["/archives/2023/05/index.html","6b53fbda8f37542ae3c4c0f64f42e990"],["/archives/2023/index.html","9d6e03a55fd9668413df755a1796b5fc"],["/archives/index.html","c7055208219c8d2150e59a5914150aa5"],["/archives/page/2/index.html","a0fb0d9ff528afe38e6030896b192462"],["/archives/page/3/index.html","f9f1906e80c1754115286573ba211c7a"],["/archives/page/4/index.html","b33f54126d515bc402aaf281193b1202"],["/article/aria2-mac.html","4b625477fe5f0622035d3ddde7beac5f"],["/article/aria2-mac/QQ20220319-175017.gif","454780fee2b91f678b4235252657bf51"],["/article/aria2-mac/image-20220319180124115.png","68b9da57a50b588418ebea16cf413d71"],["/article/aria2-mac/image-20220319180542315.png","3915787c421cbdc8919e47cf526ccb29"],["/article/aria2-mac/image-20231013145445532.png","3e8c1b2d1ed9d2885315cda6ae1168a9"],["/article/aria2-mac/image-20231013150326965.png","f0736c80bc38374b7699aad3166fad4c"],["/article/bilibili-qinglong.html","5cf74ecc4c13014234707f817dd176ad"],["/article/bilibili-qinglong/br_ys.29d7da3d.png","dd83e1b98ab55c90e50925ac8ae6c65c"],["/article/bilibili-qinglong/chrome-net-bnav.png","7ca7a34f97367d88dd7f176a44871ee9"],["/article/bilibili-qinglong/firefox-net-bnav.png","efc8e151403cd5642e5fe94d26e2ef23"],["/article/bilibili-qinglong/firefox-network.png","419f879a1445c7dfc1d1029db7392cf4"],["/article/bilibili-qinglong/image-20220907120359433.png","2b81a17772c468b3b1fde88d8931e399"],["/article/bilibili-qinglong/image-20220907120800606.png","d982b36a2dcc380ca6a2541d20d3f500"],["/article/bilibili-qinglong/image-20220907121154016.png","f1ada070322e37d89f3158f216fc1549"],["/article/bilibili-qinglong/image-20220907133801593.png","e344b384acc4ab372e8c4447a07010e7"],["/article/bilibili-qinglong/image-20220907133920012.png","ff35967c75969d9de098868a6a885250"],["/article/bilibili-qinglong/image-20220907134421036.png","615571544f1eaa576905efe6eb6a79cd"],["/article/bilibili-qinglong/ql_update.png","a3a6bb3c4b28044a6d123aa04970cff6"],["/article/brew-r-jupyter.html","3d6d45bbf93ba3a192eeb5517edb63c6"],["/article/brew-r-jupyter/image-20221010205123146.png","a023e72efe524542d060f0392f5fe875"],["/article/brew-r-jupyter/image-20230116115826253.png","b279f2073b9f897508a4d9c6f5381c53"],["/article/cactus-codeblock-beautify.html","dc31f0e21c53fc8cd5e5aa6a1fc7d79c"],["/article/cactus-codeblock-beautify/image-20211227172137422.png","f55ad7d779a7bac84e018d62e37d8d67"],["/article/cactus-codeblock-beautify/image-20211227223103409.png","00b88756b32862d55628bf3040b64a46"],["/article/cactus-codeblock-beautify/image-20211227223503492.png","a1ed71f7156d0ad9060ec0909219cf7d"],["/article/conda-r-jupyter.html","568c13ca56efcc455d30ba1f303926b8"],["/article/conda-r-jupyter/image-20221010174813001.png","73e50474bbb34364e9e375d6b856bd8e"],["/article/conda-r-jupyter/image-20221010182224588.png","ee7d48394048a48e6b4e6d58e99a5440"],["/article/conda-r-jupyter/image-20221010201826507.png","5f88914fc342830c51a51efa628d2ae6"],["/article/conda-r-jupyter/image-20221010205123146.png","a023e72efe524542d060f0392f5fe875"],["/article/conda-r-jupyter/image-20221017223737389.png","f8575662d56136a80721bde2e76ca762"],["/article/conda-r-jupyter/image-20221017233347844.png","d49b29f8953892ba28919f941485c241"],["/article/conda-r-jupyter/image-20221018152019887.png","59f218d059372310e7b6b835bac2acec"],["/article/conda-r-jupyter/image-20230718164847016.png","294f5c8f5489529fe98130775d648b72"],["/article/conda-r-jupyter/image-20231031123709807.png","a23ea9d0c0c3e0c8f7956061aea61e3c"],["/article/conda-r-jupyter/image-20231031124411574.png","ea4264b939f55bc55b9aa0ed9e75f446"],["/article/docker-easyconnect.html","8fc22b545d80616e67e54764bfd776a1"],["/article/docker-easyconnect/image-20221207135810619.png","34b5d84191774dc799f65075bebcf695"],["/article/docker-easyconnect/v2-31c51548fc67de83039eeedf10bf28c5_r.jpg","6e5a366407ab3a0fba8d6810ec7ecab4"],["/article/docker-easyconnect/v2-ef2d65c9a9b6b65228529a429261160c_r.jpg","1ee24092fe1ed310d3e5e7c9c4c96390"],["/article/docker-macos.html","f4f55f56c80932b3dc792700fecabb1d"],["/article/docker-macos/image-20221205153421353.png","1d3e367ba45f2c64adcb5ab328794763"],["/article/docker-macos/image-20221205160750680.png","baa535d5a9927e74f79772ce12d99624"],["/article/docker-macos/image-20221205160832483.png","3380780f7cf0917480016dcb794354fd"],["/article/docker-macos/image-20221213120548391.png","9f3a6aa7ca71c2047611e22f3c856e56"],["/article/docker-macos/image-20221213121901639.png","fa3f8576ebc13d4b298f111c5018b9d0"],["/article/fancybox-cactus.html","461959bcf4b9e94734097a643526df21"],["/article/fancybox-cactus/image-20220220160055554.png","3be34b425970f0fb07e22421f98e3c3c"],["/article/fancybox-cactus/image-20220220172801964.png","2d0ff85499440d4672fcc234369aebce"],["/article/fancybox-twikoo.html","8bac03e33fd856d9742c2dc37ed2bed6"],["/article/fancybox-twikoo/image-20220220160055554.png","3be34b425970f0fb07e22421f98e3c3c"],["/article/fancybox-twikoo/image-20220713151533510.png","df4eba3b13e5102e37c20ec52924e887"],["/article/fancybox-twikoo/image-20220713153543806.png","67e4b3b7ae6e2f6142fb84abc548ff92"],["/article/hkrpg-android-httpcanary.html","147af2732e8b2d6b397b136922a81fa8"],["/article/hkrpg-android-httpcanary/45178b70c463265af680caddd3928ded.jpg","a8eee0ef987725fcead76bba72114ea5"],["/article/hkrpg-android-httpcanary/604b8e25d070b048ab9dc06696edf7d9.jpg","b4f096a9869020f637608509671125fa"],["/article/hkrpg-android-httpcanary/6705379e1ff76bbd1a6a074f98de7367.jpg","6140b9da74b81ed76c495eea15462e32"],["/article/hkrpg-android-httpcanary/71ad2311b501ab487e9a3c4aab1d68fa.jpg","1526779455128af647bff56b07e3a143"],["/article/hkrpg-android-httpcanary/71fadae2e524ae6f917624f85c97aae6.jpg","af2a3953eaedb39f9e4583171a71861a"],["/article/hkrpg-android-httpcanary/a76589c08727b37ff2f27c652f65b096.jpg","a9cf5d7a54986bd29f8bca9e1dfcf25a"],["/article/hkrpg-android-httpcanary/b5ff3308b5a5db9490edb93c8b0b7801.jpg","fe7da40f441ea018119aab2e4c454b2f"],["/article/hkrpg-android-httpcanary/d72c53d6c63d85664929c6b8be132a4a.jpg","c364907d415fd0172e8f1059f78b67a2"],["/article/ios-app.html","510b359ea3ed1255359bcbea3bbc762e"],["/article/ios-jailbreak-genshin.html","a0cce4ef8417f54ca330ec60f154f3cd"],["/article/ios-jailbreak-genshin/error.png","3258b5be903e627e287d44ce061639a0"],["/article/ios-jailbreak-genshin/img.png","cb638559b6c673747959d5b05f11c41f"],["/article/jailbreak-plugin-backup.html","8e0b8efc548b31cd56dc7d5a9ac7a59b"],["/article/jetbrains-activate.html","c5b07c708d3d757f964c58e73551497f"],["/article/jetbrains-activate/image-20220106145338969.png","526f05aee91cfe88d9e365d5061dc623"],["/article/jetbrains-activate/image-20220321174826134.png","1875734f5a0fedf6154116d1d1348d77"],["/article/jetbrains-activate/image-20220417180532192.png","3c8f6bca4412db759b3962a57e7f48df"],["/article/jetbrains-activate/image-20220417181002264.png","d9fc15271adabb7aaf8e0620ec397931"],["/article/ksjsb-cookie.html","6c69e3f45a93edc9afc1e2bda9b3eb8b"],["/article/ksjsb-cookie/27CF6E70110624196EC27197E5CF15C9.jpg","76079f3256ac96a883b1a02191c422f2"],["/article/ksjsb-cookie/image-20220802122359062.png","75980863e668de7bd5f2d7809b9fcfeb"],["/article/ksjsb-cookie/image-20220802122429599.png","9a5b7cfa21262767db60a73eb678513f"],["/article/ksjsb-cookie/image-20220803112457171.png","b7edaab86a8561d677040b03298ed252"],["/article/ksjsb-cookie/image-20220803152512767.png","26a7797db34d100a44c6c2908162f4fe"],["/article/ksjsb-cookie/image-20220803152538456.png","520c7a6a9ab48f584e34c590abe92c31"],["/article/ksjsb-cookie/image-20220803152602866.png","44f49d9b1482d99d80809bdd3b8d70af"],["/article/ksjsb-cookie/image-20220803153019696.png","38788dd3c7d8ce25009721ca4fd02a8d"],["/article/ksjsb-cookie/image-20220803153132284.png","66e64708d0383a8f45a426aec77de5ea"],["/article/ksjsb-cookie/image-20220803182922295.png","1a667e5481450234d148424e49d4db3e"],["/article/ksjsb-cookie/image-20220803182943032.png","66666bb86a2d7d0729430a27c0ffa4e6"],["/article/ksjsb-cookie/qq_pic_merged_1659411129188.jpg","4e554dabcb6d0796ec17d8097097575e"],["/article/ksjsb-cookie/qq_pic_merged_1659411356354.jpg","5345f3ea3c84704dfcf8ff7608b123fc"],["/article/ksjsb-cookie/qq_pic_merged_1659411649769.jpg","30500dd2c912fd26c17559319f9a599c"],["/article/ksjsb-cookie/qq_pic_merged_1659411790619.jpg","34d01a3d1d225689fe4b8cdd9ec14604"],["/article/ksjsb-cookie/qq_pic_merged_1659412262964.jpg","30d472f9f8f4ff67ce932150aa921105"],["/article/ksjsb-cookie/qq_pic_merged_1659412524498.jpg","0b09ac23e725fdc1ffa14cbcea396734"],["/article/ksjsb-cookie/qq_pic_merged_1659412738397.jpg","10096f671b039d36d1a3e159f6aa8058"],["/article/ksjsb-cookie/qq_pic_merged_1659412828818.jpg","27c9af856d6a587a87191c9282d6440b"],["/article/ksjsb-cookie/qq_pic_merged_1659413729910.jpg","8a3bbcc85a0056822c81932b61c33995"],["/article/ksjsb-cookie/qq_pic_merged_1659413807817.jpg","dcf028230d083ae22634b65aee0ee791"],["/article/mac-tiling-yabai.html","57417082422fb4bf87c7ecfdfdc654c8"],["/article/mac-tiling-yabai/1161505-20220306151719494-1937640907.png","dde2f17a92990943b38c59796f73fa5e"],["/article/mac-tiling-yabai/image-20220520121029280.png","bf19b10655cb996a1846c629ec71d833"],["/article/omz-terminal.html","4fd6526194bc86ebaf6c53ef1fe83ea1"],["/article/omz-terminal/image-20221207141425504.png","bf628cfbf2df0572b09335b2620a62d0"],["/article/omz-terminal/image-20221207141800253.png","1a8f3c6bfd8635fdc41ad75881161de4"],["/article/omz-terminal/image-20221209104217575.png","8fcf14ea42574022948478ff5e7a0180"],["/article/passby-fix.html","8deabc8fc273b321801aea8481bdc817"],["/article/passby-fix/image-20220113161956969.png","32fd6226a2abc8dfb0cfe26f3afe64bb"],["/article/passby-fix/image-20220114222356631.png","b306360645c939840335348bd21d5745"],["/article/passby-fix/image-20220114222622805.png","1ead65bda5616df3044396cdcf1d777c"],["/article/passby-fix/image-20220114234532701.png","deaaf772068971a3e09c37fd72b4e974"],["/article/passby-fix/image-20221215103327735.png","9faa8ddba68284aae8fcbd923cdf1264"],["/article/qinglong-jd.html","a34aa71808ea2be8bc3ba01cfbeace8e"],["/article/qinglong-jd/image-20220310160646421.png","6dea01548f4b9087e612de86026de20a"],["/article/qinglong-jd/image-20220310161019853.png","320fefcb7c47828194a0b9549ef4d7af"],["/article/qinglong-jd/image-20220310161222686.png","c6b430ad0775b0b56b967dc24b532d44"],["/article/qinglong-jd/image-20220310162558349.png","be906206bd4d364364b900dede5f6394"],["/article/qinglong-jd/image-20220310163451895.png","35441635572f5bb677f3edfaa3879016"],["/article/qinglong-jd/image-20220310163958888.png","2319df0a79532d0c57920600ea7036ae"],["/article/qinglong-jd/image-20220310165735358.png","c6ae84ccf7a990a388445e14376d54e5"],["/article/qinglong-jd/image-20220602190147235.png","382044f1a181c47e82a7a18fa4295c2b"],["/article/switch-xcode-theos.html","f31f44e6b3e71d14a16e3e6473d0bbed"],["/article/switch-xcode-theos/image-20230425125903111.png","655cf17a47e9f80d96bee19b270d7215"],["/article/switch-xcode-theos/image-20230425125957865.png","8a727d4f2ee818def170516392838afb"],["/article/switch-xcode-theos/image-20230425130026558.png","35add95cf152538ccaf303d0a91f4811"],["/article/switch-xcode-theos/image-20230425130055545.png","1c6a2e26abaf5abda05a8348b2f64e39"],["/article/switch-xcode-theos/image-20230425193709252.png","5ab0ac549f6473609cd8ac0eb3bdf31b"],["/article/switch-xcode-theos/image-20230425194451808.png","18b7d142a48184ec4aaeeb1990b537e5"],["/article/switch-xcode-theos/image-20230425194524276.png","a4a92979c57b18b09179c88b229a44a7"],["/article/switch-xcode-theos/image-20230425194956911.png","4abe5771d7e3f6276f5cbc3026024a48"],["/article/switch-xcode-theos/image-20230425195518729.png","56b92d58a11c83ec1d76b6daf0830157"],["/article/switch-xcode-theos/image-20230425195747550.png","610548a04f5410bb0883454eb1e49164"],["/article/switch-xcode-theos/image-20230425200003721.png","11f1e7b2e02fc3ef1286e94b2dac9437"],["/article/switch-xcode-theos/image-20230425201635817.png","cc8622516059161c658845d1b17faa96"],["/article/takagi-san.html","b57e3b9eaef9b96a78628de878e00799"],["/atom.xml","15c805b0f2a28de1fdce6f599eb28339"],["/categories/backup/index.html","e561e012c8453c4687ce6aae94533e9b"],["/categories/backup/ios/index.html","6f4f5f521820bd4f6cab429ecb4d1dcb"],["/categories/crack-fix/index.html","a75fc54cb67ef801a49a58701655b1ab"],["/categories/crack-fix/ios/index.html","9cacad977dd1bf6852d371b691522658"],["/categories/fiddler/android/index.html","e9c974241432eaea1a4674d20d0a6ada"],["/categories/fiddler/index.html","8c264a0de6a1e95866e0b031424dd18c"],["/categories/index.html","1876c5cba57d61ca6b10585d902726af"],["/categories/random-mind/index.html","4b19c4c0e5a503b31b98f49bb176af49"],["/categories/theme/index.html","4bb865e3243aa5d4481bccd8bce2e475"],["/categories/tips/droplet/index.html","27ceb412d38272abb078bf19593a9489"],["/categories/tips/droplet/qinglong/index.html","596fbe46311ca4b01453718b0fb3b5c6"],["/categories/tips/fiddler/index.html","497ac64a0b828c17e96dce3325e40ab6"],["/categories/tips/index.html","52fac16ae75e14c4d4d38ab55ffddac9"],["/categories/tips/ios/index.html","e765bd484aecaa6ad3239d0a19b0ca5c"],["/categories/tips/macos/index.html","5718b0c7f002f4891564970afffa26c9"],["/categories/tips/page/2/index.html","90bc6bedeb434c18341cf793129e6c85"],["/categories/tips/unix/index.html","706ff14001500df964e2bff7d67db483"],["/css/fancybox.css","02c192ed04a03c94ea88d20fe1e3415c"],["/css/rtl.css","ab29fae71066b3c5b0547281ed2495a5"],["/css/style-dark.css","026cb2f0a5ae5d259413b0f7528e6079"],["/css/style.css","9e3aebc96ba1584a1dd9afc502c408e6"],["/images/apple-touch-icon.png","221a1df8cd96cda58e1d85d644e0907b"],["/images/comment_bg.png","11b6595db5912c6d78b08e96f1cc9023"],["/images/favicon-192x192.png","d47564268ac15e525c40066ebefb6139"],["/images/icons/icon-192x192.png","d47564268ac15e525c40066ebefb6139"],["/images/icons/icon-512x512.png","009f6a3dcb965e90463081d3a598a6e4"],["/images/logo.png","9b681f662f7c8094b35eaa700712ca4b"],["/images/violet.jpg","1fe5a7aecd5b2127ac785d9b8c9467ba"],["/index.html","56834c5ccf8c4b9317c9825150d7fae3"],["/js/main.js","d76d5b606754c4c72bc33338cd45a9c7"],["/js/search.js","ee92ecbdfdd2a8f32a09a175b89a8e57"],["/js/switch.js","f6eb72f46198a5527bc019886e321e23"],["/lib/april-fool/fool.js","77f2fd1134fe5d11ce31650d419fb092"],["/lib/april-fool/load.js","db6198bd516225c65cb4e3a522dc841c"],["/lib/april-fool/matter.js","0ed7c6e04f01e8051ad3480c93519b41"],["/lib/clipboard/clipboard.min.js","9de9f70b0468760fb7ea4f2d670fdbfe"],["/lib/fancybox/fancybox.umd.js","85fb0f0ead6f65d7f9e911cf9bea578c"],["/lib/font-awesome/css/all.min.css","27679c286f95b183404addd24cb556db"],["/lib/font-awesome/webfonts/fa-brands-400.eot","088a34f78f530102fd9661173b4a4f26"],["/lib/font-awesome/webfonts/fa-brands-400.svg","b2959afa7f6e67ee671326a9181e9cf5"],["/lib/font-awesome/webfonts/fa-brands-400.ttf","273dc9bf9778fd37fa61357645d46a28"],["/lib/font-awesome/webfonts/fa-brands-400.woff","f4920c94c0861c537f72ba36590f6362"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","822d94f19fe57477865209e1242a3c63"],["/lib/font-awesome/webfonts/fa-regular-400.eot","3ac49cb33f43a6471f21ab3df40d1b1e"],["/lib/font-awesome/webfonts/fa-regular-400.svg","fbd31d03755013709df427f75ca6394f"],["/lib/font-awesome/webfonts/fa-regular-400.ttf","ece54318791c51b52dfdc689efdb6271"],["/lib/font-awesome/webfonts/fa-regular-400.woff","a57bcf76c178aee452db7a57b75509b6"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","9efb86976bd53e159166c12365f61e25"],["/lib/font-awesome/webfonts/fa-solid-900.eot","7fb1cdd9c3b889161216a13267b55fe2"],["/lib/font-awesome/webfonts/fa-solid-900.svg","306202ccd1dff350a0a0fc714021653b"],["/lib/font-awesome/webfonts/fa-solid-900.ttf","2aa6edf8f296a43b32df35f330b7c81c"],["/lib/font-awesome/webfonts/fa-solid-900.woff","93f284548b42ab76fe3fd03a9d3a2180"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","f6121be597a72928f54e7ab5b95512a1"],["/lib/jquery/jquery.min.js","8fb8fee4fcc3cc86ff6c724154c49c42"],["/lib/justified-gallery/css/justifiedGallery.min.css","ceaa86fef1d6491660adf7244265affb"],["/lib/justified-gallery/js/jquery.justifiedGallery.min.js","b3c16bcda205ebe084ee04f4900b7dbc"],["/lib/meslo-LG/MesloLGL-Bold.ttf","6c475ed9d73a90d62c666b3d94f350d2"],["/lib/meslo-LG/MesloLGL-BoldItalic.ttf","1c5a059e12b5e0993699481455cf8b74"],["/lib/meslo-LG/MesloLGL-Italic.ttf","17ab93d9e2493a279171fa183279decc"],["/lib/meslo-LG/MesloLGL-Regular.ttf","265d62d86941c398f07704a80911ac92"],["/lib/meslo-LG/MesloLGM-Bold.ttf","4174a16af8cfe61e45d1ec4758227443"],["/lib/meslo-LG/MesloLGM-BoldItalic.ttf","33e53ff2022c98c3f3caa5c4682a1939"],["/lib/meslo-LG/MesloLGM-Italic.ttf","259bbc1d62105f728101523e3295ddd1"],["/lib/meslo-LG/MesloLGM-Regular.ttf","93e2fae291d0da752d78dc0b113591d9"],["/lib/meslo-LG/MesloLGS-Bold.ttf","a31874e50f29681640f88e00f2343c25"],["/lib/meslo-LG/MesloLGS-BoldItalic.ttf","2e752bcf18165adadef20e83389eb9a7"],["/lib/meslo-LG/MesloLGS-Italic.ttf","526d28c1d73dedca45091a1530541908"],["/lib/meslo-LG/MesloLGS-Regular.ttf","d20aa15f5ce240b12b2475042c6ead8e"],["/lib/twikoo/twikoo.all.min.js","36dfeb79ba30cb72e8c31ab673afb01f"],["/lib/vazir-font/Vazir-Black.eot","817f917ca1bd73fdafb73c8780633cdb"],["/lib/vazir-font/Vazir-Black.ttf","78fc370174609c35b98e3dcd38f53bfc"],["/lib/vazir-font/Vazir-Black.woff","65678ca9d6bca0505488538c49efa85f"],["/lib/vazir-font/Vazir-Black.woff2","53dea81209d52200d04acd7bf4fe04aa"],["/lib/vazir-font/Vazir-Bold.eot","6b4258266f6cc8ebe9c599e1a52591a1"],["/lib/vazir-font/Vazir-Bold.ttf","bff5dfbc9bea8d538bf7fb4579ec4f32"],["/lib/vazir-font/Vazir-Bold.woff","1dc06ca075e3e867a9a9253810983c69"],["/lib/vazir-font/Vazir-Bold.woff2","eb2e0810074169c14d979f723516e575"],["/lib/vazir-font/Vazir-Light.eot","4ccde095698e572025b49813ce57bf23"],["/lib/vazir-font/Vazir-Light.ttf","f949c9c6e0a78ca311d4f3bcc53222bc"],["/lib/vazir-font/Vazir-Light.woff","5aa1dcde9af46e421829e908db25dd75"],["/lib/vazir-font/Vazir-Light.woff2","f27550a062965ccf8614d6daed9fb37f"],["/lib/vazir-font/Vazir-Medium.eot","a8b87e489e09fd35814d4fe85d42e364"],["/lib/vazir-font/Vazir-Medium.ttf","f30326eff40bdab923a1de08cb394567"],["/lib/vazir-font/Vazir-Medium.woff","4308d08acc3cc132f457edfe36fb047c"],["/lib/vazir-font/Vazir-Medium.woff2","a88d0b18bd96794f94c006c4cd052622"],["/lib/vazir-font/Vazir-Thin.eot","7cb5ce0d4cbc438e3ef77535d84d4a0d"],["/lib/vazir-font/Vazir-Thin.ttf","a4b0ba433552c6442b0a312c4c42345f"],["/lib/vazir-font/Vazir-Thin.woff","47715ef73613e8f18aa5031b0a602539"],["/lib/vazir-font/Vazir-Thin.woff2","d580da1fc55f6253356ca89229532104"],["/lib/vazir-font/Vazir.eot","1f15de7bca7ce47b0e6a99fdc3f98272"],["/lib/vazir-font/Vazir.ttf","29d3b94592bc65baaa0c368ea99fbecd"],["/lib/vazir-font/Vazir.woff","525eba78808492d95b2e7a16881ce663"],["/lib/vazir-font/Vazir.woff2","2dfb8895f5d7884ddf3113972e03aaff"],["/lib/vazir-font/font-face.css","ec6ffa11abd6e540e0027bcb066f9090"],["/page/2/index.html","3c1a4fc959da32cd28c6f68cb1316e85"],["/page/3/index.html","91c699bddca82bdf3728af39ecc129f9"],["/robots.txt","8c2d460226aa5bd6ceccfaf0e83bd7f4"],["/search.xml","e65a0bffcee58b8a2acf784a2beb2e05"],["/search/index.html","6f053b116cee655a4d7f7a29e9b90dc1"],["/sitemap.xml","519976feb072f83fb6e5bac5778951a6"],["/submit.txt","8742564140790159ee602fd77e0e8f5a"],["/sw-register.js","a0afdec693c0495f8935981f1b33a03c"],["/tags/android/index.html","7fe52f1d686f6acf1eed0f8d5eb152ed"],["/tags/aria2/index.html","5ed0a9247c821918fc361a5daf149573"],["/tags/beautify/index.html","8cced2eeff0d14f16ba4ea44b1f9787d"],["/tags/bilibili/index.html","84f826b7af86a8daded3f44782af0a03"],["/tags/cactus/index.html","8f3cf427e7c076d72a7d6175525669bb"],["/tags/charles/index.html","31b27f8e162dc0bec958ba80807d723e"],["/tags/clash/index.html","b5fe0ce06ab84268130f20ce2fb34ed0"],["/tags/codeblock/index.html","eba4a40bf26f9c575da16df4372fc6c3"],["/tags/colima/index.html","7ce369823d98b5320e0b27242e97c098"],["/tags/conda/index.html","983657a3f00c713ceb9858a88efcc9b6"],["/tags/crack/index.html","ceec520616b06c793da253d778507359"],["/tags/docker/index.html","7261932c90d788f13e114b11c8a1d203"],["/tags/droplet/index.html","6cfd8599615947d7acec8883d402b3dd"],["/tags/easyconnect/index.html","636f0e0849e27d5e6daaa8dfa1f8c309"],["/tags/fancybox/index.html","ae79467379ab5abcd2247ed16dc6a768"],["/tags/genshin-impact/index.html","5e62795d9385f18c9979a1a8424038c7"],["/tags/hkrpg/index.html","b05567519dddd2c6180e548981dff7e2"],["/tags/httpcanary/index.html","e06ce550ee07681ca8ddf0559c101aa5"],["/tags/index.html","b991cdf5d308dbc852c2c100c09a66e2"],["/tags/ios/index.html","9476953820ac26b8c2b457614b9b7ef9"],["/tags/jailbreak/index.html","1e11d50a65f51182a98bd178abdfe1c8"],["/tags/jd/index.html","4ca72bbbb3ed986f6d7d7d32cc746df5"],["/tags/jetbrains/index.html","3f6b93fa55f7e89719bf967bbe741606"],["/tags/jupyter/index.html","95c0abf8f31a1adac71331bebd2534a4"],["/tags/ksjsb/index.html","59c28b8259499f3ea9dbe002a999f670"],["/tags/macos/index.html","62ec9533001b84ebe538d061e80e60f6"],["/tags/oh-my-zsh/index.html","c1ed206dcd04273f1a07b69206c3bba5"],["/tags/old-app/index.html","e16dc74d78188fdf639b09fec4a2d5dc"],["/tags/passby/index.html","82c2906fedcf0ef77a67989774a456a4"],["/tags/qinglong/index.html","97856935fbb8c25676d34d779eadbd3f"],["/tags/r/index.html","ea16d47bd989720df2aed1b88009f7f7"],["/tags/takagi-san/index.html","988477a2955d7632e8730db30296909a"],["/tags/terminal/index.html","d79473f3a27444cda00860f0e85078c4"],["/tags/theos/index.html","9633213e942e8550d769936b3432f0cc"],["/tags/twikoo/index.html","677794dc15ec11e11e9debb9e3624799"],["/tags/vmos/index.html","a0ba81e6a367d5431671959c37375f32"],["/tags/xcode/index.html","a5dd59d89f46a7799db521ee5ec34d26"],["/tags/yabai/index.html","d01b29ddda0e79ca1c6f20170e6e9a32"],["/tools/index.html","7ecb79a0f4b6c9c99b742b12f0946131"],["/year/css/style.css","a2c398405b1d9c8e5339298eeda8f10e"],["/year/index.html","65cd52828456914e9e63504f0c21164b"],["/year/js/script.js","02f2c242e65cfe8708bda71be832cfca"],["/year/js/style.js","af2ff04c499ae8a1d0dd11e514706473"]];
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
