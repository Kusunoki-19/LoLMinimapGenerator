/**
 * Created by Kusunoki on 2017/04/17.
 */



var dragging = false;
//P mean Point
var dP = {
    x: 0,
    y: 0
};
var P = {
    x: 0,
    y: 0
};
var beforeP = {
    x: 0,
    y: 0
};
var scale = 1;
var target;

var additionalCode_pre = "";
var additionalCode_fol = "";


function startDrag(e) {
    //always started by Event of Click
    console.log('---------------------------start drag---------------------------');
    beforeP.x = e.clientX;
    beforeP.y = e.clientY;
    console.log('beforeP = (' + beforeP.x + ',' + beforeP.y + ')');
    dragging = true;
    target = this;
    targetE = e;
    $(this).css('z-index', '100');
}
function Dragging(e) {
    e.preventDefault();
    if (dragging) {
        console.log('---------------------------Dragging true---------------------------');
        P.x = e.clientX;
        P.y = e.clientY;
        dP.x = P.x - beforeP.x;
        dP.y = P.y - beforeP.y;

        //script動作確認用
        console.log('beforeP = (' + beforeP.x + ',' + beforeP.y + ')');
        console.log('P = (' + P.x + ',' + P.y + ')');
        console.log('dP = (' + dP.x + ',' + dP.y + ')');

        beforeP.x = e.clientX;
        beforeP.y = e.clientY;

        X = parseInt($(target).css('left')) + parseInt(dP.x);
        Y = parseInt($(target).css('top')) + parseInt(dP.y);
        console.log($(target).css('top'));
        console.log('X = ' + X + ' , Y = ' + Y);
        $(target).css({'left': X, 'top': Y})
    } else {
        console.log('---------------------------Dragging false---------------------------');
        $(target).css('z-index', '0');
    }
}
function endDrag() {
    console.log('---------------------------end drag---------------------------');
    dragging = false;
}

function mapScaleUp() {
    scale += 0.1;
    $('#LMMG-map').css('transform', 'scale(' + scale + ')');
}
function mapScaleDown() {
    scale -= 0.1;
    $('#LMMG-map').css('transform', 'scale(' + scale + ')');
}

function outputCode(){
    additionalCode_pre = '<!--lol minimap start-->\n<link rel="stylesheet" href="LMMGmap.css">';
    additionalCode_fol = '<!--lol minimap end-->\n';

    mapCode = document.getElementById("map-container").innerHTML;
    console.log(mapCode);

/*
    var needlessStr = new RegExp("><",'g');
    mapCode = mapCode.replace(needlessStr, ">\n<");
    console.log(mapCode);
*/


    var needlessStr = new RegExp("<!--(\"[^\"]*\"|\'[^\']*\'|[^\'\">])*-->",'g');
    mapCode = mapCode.replace(needlessStr, "");
    console.log(mapCode);

    var needlessStr = new RegExp("ng-repeat=\"([^\"]*)\"",'g');
    mapCode = mapCode.replace(needlessStr, "");
    console.log(mapCode);



    mapCode = additionalCode_pre + mapCode;
    mapCode = mapCode + additionalCode_fol;
    console.log(mapCode);


    document.getElementById("map-code").innerText = mapCode;
}

var explain =
    "使い方手順\n" +
    "\n1,アイコンのセット\n" +
    "アイコンをセットするには、「アイコンの追加・編集」の欄から、マップに出し合いチャンピオンを選びます。\n" +
    "そしてチームを選択して「add」をクリックします。\n" +
    "※間違えたチャンピオンを出してしまった場合は、消したいチャンピオンの「delete」をクリックします。\n" +
    "\n2,アイコンとマップの調整\n" +
    "まずは、マップの位置を調整します。\n" +
    "マップの移動は、マップ画像の上でドラッグ＆ドロップをすると、調整できます。\n" +
    "マップの尺度は、右上にある「+」、「-」をクリックすることで、調整できます。\n" +
    "アイコンの位置は、アイコン画像の上でドラッグ＆ドロップをすると、調整できます。\n" +
    "\n3,htmlコードの生成\n" +
    "「+」、「-」の下にある「↓」のボタンを押すことでhtmlコードを生成することができます。\n" +
    "生成したコードをコピーします。\n" +
    "生成したコードはブログや、ホームページで張り付けて使うことができます。\n" +
    "※discordや、skypeなどのコメント欄にはおそらく対応していません\n" +
    "※今後のバージョンアップで画像形式での出力も計画しております。\n";
function explainApp() {
    alert(explain);

}
var okBrowser =
    "対応ブラウザ\n" +
    "・「グーグルクローム」\n" +
    "・「インターネットエクスプローラー(ver11以降)」\n" +
    "・「マイクロソフトエッジ」\n" +
    "上記のブラウザーに対応しています。\n" +
    "※現在のインターネットエクスプローラーは、ほとんどver11です\n" +
    "\n" +
    "「ファイアーフォックス」では、ドラッグ＆ドロップの挙動に少し違いがありますが、使用できます。\n" +
    "\n" +
    "・「iPad,サファリ」\n" +
    "・「iPhone,サファリ」\n" +
    "上記のブラウザには対応していません。\n" +
    "※現在モバイルのタッチ操作には、対応していません。\n" +
    "\n" +
    "上記以外でのブラウザは動作確認しておりません。たいていのPCブラウザで使用できると考えております。\n";
function OKbrowser(){
    alert(okBrowser)
}


onload = function () {
    var mapOffset = $('#LMMG-map-frame').offset();
    iconOffSetX = 25 + mapOffset.left;
    iconOffSetY = 25 + mapOffset.top;

    //mapを動かすための機構
    $('#LMMG-map')
        .mousedown(startDrag)
        .mousemove(Dragging);
    $(document)
        .mouseup(endDrag);

    //dragging はマウスのボタンが押されているときはtrue　それ以外は、falseにする
    $(document).on("mousedown", ".LMMG-icons", startDrag);
    $(document).on("mousemove", ".LMMG-icons", Dragging);
    $(document).on("mouseup", ".LMMG-icons", endDrag);


};

