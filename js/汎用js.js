// アコーディオンメニュー ※このファイルに入れておく必要あり
$(function(){
    $('.JSMenuAction').each(function(){
        $(this).on('click',function(){
            $("+.submenu",this).slideToggle();
            return false;
        });
    });
});


// ワード変換
function PCNameChange() {
    // 変更前のワードを取得
    var PC_Before01 = document.getElementById('PCName01').value;
    var PC_Before02 = document.getElementById('PCName02').value;
    var PC_Before03 = document.getElementById('PCName03').value;
    var PC_Before04 = document.getElementById('PCName04').value;
    // 変更後のワードを取得
    var PC_After01 = document.getElementById('NameChange01').value;
    var PC_After02 = document.getElementById('NameChange02').value;
    var PC_After03 = document.getElementById('NameChange03').value;
    var PC_After04 = document.getElementById('NameChange04').value;
    // テキストを取得
    var PC_Text = document.getElementById('TextArea01').value;
    // テキスト変換
    var NameConversion01 = PC_Text.replace(new RegExp(PC_Before01, 'g'), PC_After01);
    var NameConversion02 = NameConversion01.replace(new RegExp(PC_Before02, 'g'), PC_After02);
    var NameConversion03 = NameConversion02.replace(new RegExp(PC_Before03, 'g'), PC_After03);
    var NameConversion04 = NameConversion03.replace(new RegExp(PC_Before04, 'g'), PC_After04);
    // 変換したテキストをテキストエリアに戻す
    document.getElementById('TextArea01').value = NameConversion04;
}

//戦闘Rコピペ
function BattleRound_Onclick() {
    var GetButtleRound = document.getElementById('BattleRound').value;
    var GBR = GetButtleRound + "R目：";
    navigator.clipboard.writeText(GBR);
}


function BattleActionPC01_Onclick() {
    var GetBattleActionPC01 = document.getElementById('BattleActionPC01').value;
    var GBAPC01 = "行動者：" + GetBattleActionPC01;
    navigator.clipboard.writeText(GBAPC01);
}
function BattleActionPC02_Onclick() {
    var GetBattleActionPC02 = document.getElementById('BattleActionPC02').value;
    var GBAPC02 = "行動者：" + GetBattleActionPC02;
    navigator.clipboard.writeText(GBAPC02);
}
function BattleActionPC03_Onclick() {
    var GetBattleActionPC03 = document.getElementById('BattleActionPC03').value;
    var GBAPC03 = "行動者：" + GetBattleActionPC03;
    navigator.clipboard.writeText(GBAPC03);
}
function BattleActionPC04_Onclick() {
    var GetBattleActionPC04 = document.getElementById('BattleActionPC04').value;
    var GBAPC04 = "行動者：" + GetBattleActionPC04;
    navigator.clipboard.writeText(GBAPC04);
}
function BattleActionPC05_Onclick() {
    var GetBattleActionPC05 = document.getElementById('BattleActionPC05').value;
    var GBAPC05 = "行動者：" + GetBattleActionPC05;
    navigator.clipboard.writeText(GBAPC05);
}
function BattleActionPC06_Onclick() {
    var GetBattleActionPC06 = document.getElementById('BattleActionPC06').value;
    var GBAPC06 = "行動者：" + GetBattleActionPC06;
    navigator.clipboard.writeText(GBAPC06);
}



// 狂気表 ----------------------------------
function 一時的狂気_変数1() {
    var html = "";
html += '<li class="MainMenu_List">';
html += '<a class="MenuTitle JSMenuAction" href="">チャット用テキスト</a>';
html += '<ul class="submenu sub_nomalcss_menu">';
html += '<script>一時的狂気_変数2();</script>';
html += '</ul>';
html += '</li>';
    document.write(html);
}

function 一時的狂気_変数2() {
var 一時的狂気_count = 0;
var 一時的狂気_List = {
0: {Title:"挨拶", text:"お客様、大変お待たせいたしました。"},
1: {Title:"〆", text:"お問い合わせいただきありがとうございました。"},
2: {Title:"名前と日付", text:"お問い合わせいただきありがとうございました。"}
};
while(一時的狂気_count < Object.keys(一時的狂気_List).length) {
    document.write("<li class='ListTitle copy_List' data-clipboard-text='"+一時的狂気_List[一時的狂気_count].text+"'>"+一時的狂気_List[一時的狂気_count].Title+"</li>");
    一時的狂気_count ++
}
}

function 不定の狂気_変数1() {
    var html = "";
html += '<li class="MainMenu_List">';
html += '<a class="MenuTitle JSMenuAction" href="">不定の狂気</a>';
html += '<ul class="submenu sub_nomalcss_menu">';
html += '<script>不定の狂気_変数2();</script>';
html += '</ul>';
html += '</li>';
    document.write(html);
}

function 不定の狂気_変数2() {
var 不定の狂気_count = 0;
var 不定の狂気_List = {
0: {Title:"1", text:"1: 健忘症（親しい者のことを最初に忘れる；言語や肉体的な技能は働くが、知的な技能は働かない）あるいは昏迷/緊張症（短期の表を参照＞我慢することはできるが意志も興味もない；強制的に単純な行動をとらせることはできるが、自発的に行動することはできない）。"},
1: {Title:"2", text:"2: 激しい恐怖症（逃げ出すことはできるが、恐怖の対象はどこへ行っても見える。）"},
2: {Title:"3", text:"3: 幻覚。"},
3: {Title:"4", text:"4: 奇妙な性的嗜好（露出症、過剰性欲、奇形愛好症など。1d111で異常性癖ダイスを振ることもできる。"},
4: {Title:"5", text:"5: フェティッシュ（探索者はある物、ある種類の物、人物に対し異常なまでに執着する）。"},
5: {Title:"6", text:"6: 制御不能のチック、震え、あるいは会話や文章で人と交流ができなくなる。"},
6: {Title:"7", text:"7: 心因性視覚障害、心因性難聴、単数あるいは複数の四肢の機能障害。"},
7: {Title:"8", text:"8: 短時間の心因反応（支離滅裂、妄想、常軌を逸した振舞い、幻覚など）。"},
8: {Title:"9", text:"9: 一時的偏執症。"},
9: {Title:"10", text:"10: 強迫観念に取りつかれた行動（手を洗い続ける、祈る、特定のリズムで歩く、割れ目をまたがない、銃を絶え間なくチェックし続けるなど）。"},
10: {Title:"振ってええよ", text:"短期の一時的狂気表で判定していただきます。1d10で狂気の内容を決定してください。"}
};
while(不定の狂気_count < Object.keys(不定の狂気_List).length) {
    document.write("<li class='ListTitle copy_List' data-clipboard-text='"+不定の狂気_List[不定の狂気_count].text+"'>"+不定の狂気_List[不定の狂気_count].Title+"</li>");
    不定の狂気_count ++
}
}
