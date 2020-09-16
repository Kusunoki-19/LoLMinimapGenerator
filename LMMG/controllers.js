/**
 * Created by Kusunoki on 2017/04/19.
 */

angular.module('mapGeneApp', [])
    .controller('iconListController', function () {
        var iconList = this;
        iconList.champ = [
            { key : "MonkeyKing", name : "ウーコン"},
            { key : "Jax", name : "ジャックス"},
            { key : "Shaco", name : "シャコ"},
            { key : "Warwick", name : "ワーウィック"},
            { key : "Xayah", name : "ザヤ"},
            { key : "Nidalee", name : "ニダリー"},
            { key : "Zyra", name : "ザイラ"},
            { key : "Kled", name : "クレッド"},
            { key : "Brand", name : "ブランド"},
            { key : "Rammus", name : "ラムス"},
            { key : "Illaoi", name : "イラオイ"},
            { key : "Corki", name : "コーキ"},
            { key : "Braum", name : "ブラウム"},
            { key : "Darius", name : "ダリウス"},
            { key : "Tryndamere", name : "トリンダメア"},
            { key : "MissFortune", name : "フォーチュン"},
            { key : "Yorick", name : "ヨリック"},
            { key : "Xerath", name : "ゼラス"},
            { key : "Sivir", name : "シヴィア"},
            { key : "Riven", name : "リヴェン"},
            { key : "Orianna", name : "オリアナ"},
            { key : "Gangplank", name : "ガングプランク"},
            { key : "Malphite", name : "マルファイト"},
            { key : "Poppy", name : "ポッピー"},
            { key : "Karthus", name : "カーサス"},
            { key : "Jayce", name : "ジェイス"},
            { key : "Nunu", name : "ヌヌ"},
            { key : "Trundle", name : "トランドル"},
            { key : "Graves", name : "グレイブス"},
            { key : "Morgana", name : "モルガナ"},
            { key : "Gnar", name : "ナー"},
            { key : "Lux", name : "ラックス"},
            { key : "Shyvana", name : "シヴァーナ"},
            { key : "Renekton", name : "レネクトン"},
            { key : "Fiora", name : "フィオラ"},
            { key : "Jinx", name : "ジンクス"},
            { key : "Kalista", name : "カリスタ"},
            { key : "Fizz", name : "フィズ"},
            { key : "Kassadin", name : "カサディン"},
            { key : "Sona", name : "ソナ"},
            { key : "Irelia", name : "イレリア"},
            { key : "Viktor", name : "ビクター"},
            { key : "Rakan", name : "ラカン"},
            { key : "Kindred", name : "キンドレッド"},
            { key : "Cassiopeia", name : "カシオペア"},
            { key : "Maokai", name : "マオカイ"},
            { key : "Thresh", name : "スレッシュ"},
            { key : "Kayle", name : "ケイル"},
            { key : "Hecarim", name : "ヘカリム"},
            { key : "Khazix", name : "カ＝ジックス"},
            { key : "Olaf", name : "オラフ"},
            { key : "Ziggs", name : "ジグス"},
            { key : "Syndra", name : "シンドラ"},
            { key : "DrMundo", name : "ドクター・ムンド"},
            { key : "Karma", name : "カルマ"},
            { key : "Annie", name : "アニー"},
            { key : "Akali", name : "アカリ"},
            { key : "Volibear", name : "ボリベア"},
            { key : "Yasuo", name : "ヤスオ"},
            { key : "Kennen", name : "ケネン"},
            { key : "Rengar", name : "レンガー"},
            { key : "Ryze", name : "ライズ"},
            { key : "Shen", name : "シェン"},
            { key : "Zac", name : "ザック"},
            { key : "Talon", name : "タロン"},
            { key : "Swain", name : "スウェイン"},
            { key : "Bard", name : "バード"},
            { key : "Sion", name : "サイオン"},
            { key : "Vayne", name : "ヴェイン"},
            { key : "Nasus", name : "ナサス"},
            { key : "Fiddlesticks", name : "フィドル"},
            { key : "TwistedFate", name : "フェイト"},
            { key : "Chogath", name : "チョ＝ガス"},
            { key : "Udyr", name : "ウディア"},
            { key : "Lucian", name : "ルシアン"},
            { key : "Ivern", name : "アイバーン"},
            { key : "Leona", name : "レオナ"},
            { key : "Caitlyn", name : "ケイトリン"},
            { key : "Sejuani", name : "セジュアニ"},
            { key : "Nocturne", name : "ノクターン"},
            { key : "Zilean", name : "ジリアン"},
            { key : "Azir", name : "アジール"},
            { key : "Rumble", name : "ランブル"},
            { key : "Taliyah", name : "タリヤ"},
            { key : "Teemo", name : "ティーモ"},
            { key : "Urgot", name : "アーゴット"},
            { key : "Amumu", name : "アムム"},
            { key : "Galio", name : "ガリオ"},
            { key : "Heimerdinger", name : "ハイマー"},
            { key : "Anivia", name : "アニビア"},
            { key : "Ashe", name : "アッシュ"},
            { key : "Velkoz", name : "ヴェル＝コズ"},
            { key : "Singed", name : "シンジド"},
            { key : "Skarner", name : "スカーナー"},
            { key : "Varus", name : "ヴァルス"},
            { key : "Twitch", name : "トゥイッチ"},
            { key : "Garen", name : "ガレン"},
            { key : "Blitzcrank", name : "ブリッツ"},
            { key : "MasterYi", name : "マスター・イー"},
            { key : "Elise", name : "エリス"},
            { key : "Alistar", name : "アリスター"},
            { key : "Katarina", name : "カタリナ"},
            { key : "Ekko", name : "エコー"},
            { key : "Mordekaiser", name : "モルデカイザー"},
            { key : "Lulu", name : "ルル"},
            { key : "Camille", name : "カミール"},
            { key : "Aatrox", name : "エイトロックス"},
            { key : "Draven", name : "ドレイヴン"},
            { key : "TahmKench", name : "タム・ケンチ"},
            { key : "Pantheon", name : "パンテオン"},
            { key : "XinZhao", name : "シン・ジャオ"},
            { key : "AurelionSol", name : "オレリオン・ソル"},
            { key : "LeeSin", name : "リー・シン"},
            { key : "Taric", name : "タリック"},
            { key : "Malzahar", name : "マルザハール"},
            { key : "Lissandra", name : "リサンドラ"},
            { key : "Diana", name : "ダイアナ"},
            { key : "Tristana", name : "トリスターナ"},
            { key : "RekSai", name : "レク＝サイ"},
            { key : "Vladimir", name : "ブラッドミア"},
            { key : "JarvanIV", name : "ジャーヴァンⅣ"},
            { key : "Nami", name : "ナミ"},
            { key : "Jhin", name : "ジン"},
            { key : "Soraka", name : "ソラカ"},
            { key : "Veigar", name : "ベイガー"},
            { key : "Janna", name : "ジャンナ"},
            { key : "Nautilus", name : "ノーチラス"},
            { key : "Evelynn", name : "イブリン"},
            { key : "Gragas", name : "グラガス"},
            { key : "Zed", name : "ゼド"},
            { key : "Vi", name : "ヴァイ"},
            { key : "KogMaw", name : "コグ＝マウ"},
            { key : "Ahri", name : "アーリ"},
            { key : "Quinn", name : "クイン"},
            { key : "Leblanc", name : "ルブラン"},
            { key : "Ezreal", name : "エズリアル"}
        ];

        //最初っからあるアイコンの設定
        iconList.icons = [
            {champ: 'Ashe', team:'Blue' ,del:false}
        ];


        //select部分の初期値を設定
        var rand = Math.floor( (Math.random() * 100) % iconList.champ.length ) ;
        iconList.iconData = iconList.champ[rand].key;
        //radio部分の初期値を設定
        iconList.teamData = "Blue";


        iconList.addToIcon = function() {
            iconList.icons.push({champ:iconList.iconData, top: 0,left: 0, team:iconList.teamData ,del:false});
            iconList.iconData = '';
            iconList.teamData = '';

            //select部分の初期値を設定
            var rand = Math.floor( (Math.random() * 100) % iconList.champ.length ) ;
            iconList.iconData = iconList.champ[rand].key;
            //radio部分の初期値を設定
            iconList.teamData = "Blue";
        };


        iconList.delete = function() {
            var oldIcons = iconList.icons;
            iconList.icons = [];
            console.log("----------function delete forEach-");
            angular.forEach(oldIcons, function(icon) {
                console.log(icon.champ + '\t-->' + icon.del);
                if (icon.del) console.log('\t.del == true will be deleted');
                if (!icon.del) iconList.icons.push(icon);
            });
            console.log("----------------------------------");
        };


    });