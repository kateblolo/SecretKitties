// ==UserScript==
// @name           SecretKitty
// @description    Un utilitaire pour faire parler les chats
// @author         kateblolo
// @namespace      https://www.jeuxvideo.com/
// @version        0.0.1
// @match          https://www.jeuxvideo.com/forums/*
// @match          https://m.jeuxvideo.com/forums/*
// @require        https://code.jquery.com/jquery-3.6.0.min.js
// @require        https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/aes.js
// @grant          none
// ==/UserScript==

let smileys = new Object();

smileys[":\\)"] = '<img data-code=":)" src="//image.jeuxvideo.com/smileys_img/1.gif" width="16" height="16" alt="">';
smileys[":snif:"] = '<img data-code=":snif:" src="//image.jeuxvideo.com/smileys_img/20.gif" width="16" height="16" alt="">';
smileys[":gba:"] = '<img data-code=":gba:" src="//image.jeuxvideo.com/smileys_img/17.gif" alt="" width="16" height="12">';
smileys[":g\\)"] = '<img data-code=":g)" src="//image.jeuxvideo.com/smileys_img/3.gif" width="16" height="16" alt="">';
smileys[":-\\)"] = '<img data-code=":-)" src="//image.jeuxvideo.com/smileys_img/46.gif" width="16" height="16" alt="">';
smileys[":snif2:"] = '<img data-code=":snif2:" src="//image.jeuxvideo.com/smileys_img/13.gif" width="16" height="16" alt="">';
smileys[":bravo:"] = '<img data-code=":bravo:" src="//image.jeuxvideo.com/smileys_img/69.gif" alt="" width="16" height="17">';
smileys[":d\\)"] = '<img data-code=":d)" src="//image.jeuxvideo.com/smileys_img/4.gif" width="16" height="16" alt="">';
smileys[":hap:"] = '<img data-code=":hap:" src="//image.jeuxvideo.com/smileys_img/18.gif" width="16" height="16" alt="">';
smileys[":ouch:"] = '<img data-code=":ouch:" src="//image.jeuxvideo.com/smileys_img/22.gif" width="16" height="16" alt="">';
smileys[":pacg:"] = '<img data-code=":pacg:" src="//image.jeuxvideo.com/smileys_img/9.gif" width="16" height="16" alt="">';
smileys[":cd:"] = '<img data-code=":cd:" src="//image.jeuxvideo.com/smileys_img/5.gif" width="16" height="16" alt="">';
smileys[":-\\)\\)\\)"] = '<img data-code=":-)))" src="//image.jeuxvideo.com/smileys_img/23.gif" width="16" height="16" alt="">';
smileys[":ouch2:"] = '<img data-code=":ouch2:" src="//image.jeuxvideo.com/smileys_img/57.gif" width="16" height="16" alt="">';
smileys[":pacd:"] = '<img data-code=":pacd:" src="//image.jeuxvideo.com/smileys_img/10.gif" width="16" height="16" alt="">';
smileys[":cute:"] = '<img data-code=":cute:" src="//image.jeuxvideo.com/smileys_img/nyu.gif" width="16" height="17" alt="">';
smileys[":content:"] = '<img data-code=":content:" src="//image.jeuxvideo.com/smileys_img/24.gif" width="16" height="16" alt="">';
smileys[":p\\)"] = '<img data-code=":p)" src="//image.jeuxvideo.com/smileys_img/7.gif" width="16" height="16" alt="">';
smileys[":-p"] = '<img data-code=":-p" src="//image.jeuxvideo.com/smileys_img/31.gif" width="16" height="16" alt="">';
smileys[":noel:"] = '<img data-code=":noel:" src="//image.jeuxvideo.com/smileys_img/11.gif" width="16" height="16" alt="">';
smileys[":oui:"] = '<img data-code=":oui:" src="//image.jeuxvideo.com/smileys_img/37.gif" width="16" height="16" alt="">';
smileys[":\\("] = '<img data-code=":(" src="//image.jeuxvideo.com/smileys_img/45.gif" width="16" height="16" alt="">';
smileys[":peur:"] = '<img data-code=":peur:" src="//image.jeuxvideo.com/smileys_img/47.gif" width="16" height="16" alt="">';
smileys[":question:"] = '<img data-code=":question:" src="//image.jeuxvideo.com/smileys_img/2.gif" alt="" width="26" height="24">';
smileys[":cool:"] = '<img data-code=":cool:" src="//image.jeuxvideo.com/smileys_img/26.gif" width="16" height="16" alt="">';
smileys[":-\\("] = '<img data-code=":-(" src="//image.jeuxvideo.com/smileys_img/14.gif" width="16" height="16" alt="">';
smileys[":coeur:"] = '<img data-code=":coeur:" src="//image.jeuxvideo.com/smileys_img/54.gif" alt="" width="21" height="20">';
smileys[":mort:"] = '<img data-code=":mort:" src="//image.jeuxvideo.com/smileys_img/21.gif" width="16" height="16" alt="">';
smileys[":rire:"] = '<img data-code=":rire:" src="//image.jeuxvideo.com/smileys_img/39.gif" width="16" height="16" alt="">';
smileys[":-\\(\\("] = '<img data-code=":-((" src="//image.jeuxvideo.com/smileys_img/15.gif" width="16" height="16" alt="">';
smileys[":fou:"] = '<img data-code=":fou:" src="//image.jeuxvideo.com/smileys_img/50.gif" width="16" height="16" alt="">';
smileys[":sleep:"] = '<img data-code=":sleep:" src="//image.jeuxvideo.com/smileys_img/27.gif" alt="" width="23" height="26">';
smileys[":-D"] = '<img data-code=":-D" src="//image.jeuxvideo.com/smileys_img/40.gif" width="16" height="16" alt="">';
smileys[":nonnon:"] = '<img data-code=":nonnon:" src="//image.jeuxvideo.com/smileys_img/25.gif" width="16" height="16" alt="">';
smileys[":fier:"] = '<img data-code=":fier:" src="//image.jeuxvideo.com/smileys_img/53.gif" width="16" height="16" alt="">';
smileys[":honte:"] = '<img data-code=":honte:" src="//image.jeuxvideo.com/smileys_img/30.gif" width="16" height="16" alt="">';
smileys[":rire2:"] = '<img data-code=":rire2:" src="//image.jeuxvideo.com/smileys_img/41.gif" width="16" height="16" alt="">';
smileys[":non2:"] = '<img data-code=":non2:" src="//image.jeuxvideo.com/smileys_img/33.gif" width="16" height="16" alt="">';
smileys[":sarcastic:"] = '<img data-code=":sarcastic:" src="//image.jeuxvideo.com/smileys_img/43.gif" width="16" height="16" alt="">';
smileys[":monoeil:"] = '<img data-code=":monoeil:" src="//image.jeuxvideo.com/smileys_img/34.gif" width="16" height="16" alt="">';
smileys[":o\\)\\)"] = '<img data-code=":o))" src="//image.jeuxvideo.com/smileys_img/12.gif" width="16" height="16" alt="">';
smileys[":nah:"] = '<img data-code=":nah:" src="//image.jeuxvideo.com/smileys_img/19.gif" width="16" height="16" alt="">';
smileys[":doute:"] = '<img data-code=":doute:" src="//image.jeuxvideo.com/smileys_img/28.gif" width="16" height="16" alt="">';
smileys[":rouge:"] = '<img data-code=":rouge:" src="//image.jeuxvideo.com/smileys_img/55.gif" width="16" height="16" alt="">';
smileys[":ok:"] = '<img data-code=":ok:" src="//image.jeuxvideo.com/smileys_img/36.gif" width="24" height="16" alt="">';
smileys[":non:"] = '<img data-code=":non:" src="//image.jeuxvideo.com/smileys_img/35.gif" width="16" height="16" alt="">';
smileys[":malade:"] = '<img data-code=":malade:" src="//image.jeuxvideo.com/smileys_img/8.gif" width="16" height="16" alt="">';
smileys[":fete:"] = '<img data-code=":fete:" src="//image.jeuxvideo.com/smileys_img/66.gif" alt="" width="26" height="21">';
smileys[":sournois:"] = '<img data-code=":sournois:" src="//image.jeuxvideo.com/smileys_img/67.gif" width="16" height="16" alt="">';
smileys[":hum:"] = '<img data-code=":hum:" src="//image.jeuxvideo.com/smileys_img/68.gif" width="16" height="16" alt="">';
smileys[":ange:"] = '<img data-code=":ange:" src="//image.jeuxvideo.com/smileys_img/60.gif" alt="" width="31" height="24">';
smileys[":diable:"] = '<img data-code=":diable:" src="//image.jeuxvideo.com/smileys_img/61.gif" alt="" width="35" height="20">';
smileys[":gni:"] = '<img data-code=":gni:" src="//image.jeuxvideo.com/smileys_img/62.gif" alt="" width="16" height="27">';
smileys[":play:"] = '<img data-code=":play:" src="//image.jeuxvideo.com/smileys_img/play.gif" alt="" width="19" height="28">';
smileys[":desole:"] = '<img data-code=":desole:" src="//image.jeuxvideo.com/smileys_img/65.gif" alt="" width="47" height="39">';
smileys[":spoiler:"] = '<img data-code=":spoiler:" src="//image.jeuxvideo.com/smileys_img/63.gif" alt="" width="50" height="34">';
smileys[":merci:"] = '<img data-code=":merci:" src="//image.jeuxvideo.com/smileys_img/58.gif" alt="" width="44" height="40">';
smileys[":svp:"] = '<img data-code=":svp:" src="//image.jeuxvideo.com/smileys_img/59.gif" alt="" width="50" height="39">';
smileys[":sors:"] = '<img data-code=":sors:" src="//image.jeuxvideo.com/smileys_img/56.gif" alt="" width="50" height="34">';
smileys[":salut:"] = '<img data-code=":salut:" src="//image.jeuxvideo.com/smileys_img/42.gif" alt="" width="46" height="41">';
smileys[":rechercher:"] = '<img data-code=":rechercher:" src="//image.jeuxvideo.com/smileys_img/38.gif" alt="" width="50" height="34">';
smileys[":hello:"] = '<img data-code=":hello:" src="//image.jeuxvideo.com/smileys_img/29.gif" alt="" width="45" height="41">';
smileys[":up:"] = '<img data-code=":up:" src="//image.jeuxvideo.com/smileys_img/44.gif" alt="" width="37" height="42">';
smileys[":bye:"] = '<img data-code=":bye:" src="//image.jeuxvideo.com/smileys_img/48.gif" alt="" width="44" height="42">';
smileys[":gne:"] = '<img data-code=":gne:" src="//image.jeuxvideo.com/smileys_img/51.gif" alt="" width="65" height="46">';
smileys[":lol:"] = '<img data-code=":lol:" src="//image.jeuxvideo.com/smileys_img/32.gif" alt="" width="37" height="44">';
smileys[":dpdr:"] = '<img data-code=":dpdr:" src="//image.jeuxvideo.com/smileys_img/49.gif" alt="" width="64" height="44">';
smileys[":dehors:"] = '<img data-code=":dehors:" src="//image.jeuxvideo.com/smileys_img/52.gif" alt="" width="58" height="57">';
smileys[":hs:"] = '<img data-code=":hs:" src="//image.jeuxvideo.com/smileys_img/64.gif" alt="" width="51" height="32">';
smileys[":banzai:"] = '<img data-code=":banzai:" src="//image.jeuxvideo.com/smileys_img/70.gif" alt="" width="49" height="42">';
smileys[":bave:"] = '<img data-code=":bave:" src="//image.jeuxvideo.com/smileys_img/71.gif" width="16" height="16" alt="">';
smileys[":pf:"] = '<img data-code=":pf:" src="//image.jeuxvideo.com/smileys_img/pf.gif" width="16" height="16" alt="">';
smileys[":cimer:"] = '<img data-code=":cimer:" src="//image.jeuxvideo.com/smileys_img/cimer.gif" alt="" width="57" height="36">';
smileys[":ddb:"] = '<img data-code=":ddb:" src="//image.jeuxvideo.com/smileys_img/ddb.gif" width="49" height="40" alt="">';
smileys[":pave:"] = '<img data-code=":pave:" src="//image.jeuxvideo.com/smileys_img/pave.gif" width="51" height="43" alt="">';
smileys[":objection:"] = '<img data-code=":objection:" src="//image.jeuxvideo.com/smileys_img/objection.gif" alt="" width="54" height="34">';
smileys[":siffle:"] = '<img data-code=":siffle:" src="//image.jeuxvideo.com/smileys_img/siffle.gif" alt="" width="22" height="16">';

var chiffres = [];

function encrypt() {
    var nb = Math.floor((Math.random() * 9) + 0);
    var kitty = "[[sticker:p/";
    var kitty2 = "/1kl" + nb + "]]";
    var message = $("#message_topic").val();
    var sels = document.getElementById("message_topic").selectionStart;
    var sele = document.getElementById("message_topic").selectionEnd;
    var encrypted = CryptoJS.AES.encrypt(message.slice(sels, sele), "").toString();
    var kitty_encrypted = [kitty, encrypted, kitty2].join('');
    $("#message_topic").val(message.slice(0, sels) + kitty_encrypted + message.slice(sele));
    chiffres.push(encrypted);
}


function cancel(){
    var message = $("#message_topic").val();
    message = message.replace(/\[\[sticker:p\//g, "").replace(/\/1kl[0-9]\]\]/g,"");
    chiffres.forEach(function(cipher){
        var c = cipher.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        message = message.replace(new RegExp(c, "g"), CryptoJS.AES.decrypt(cipher, "").toString(CryptoJS.enc.Utf8));
        console.log(message);
    });
    chiffres = [];
    $("#message_topic").val(message);
}

function add_smileys(message){
    for (let [sm, html] of Object.entries(smileys)){
        message = message.replace(new RegExp(sm,"g"), html);
    }
    return message;
}

function decrypt(){
    $('img.img-stickers').each(function(){
        var message = $(this).attr('alt');
        message = CryptoJS.AES.decrypt(message.substring(12, message.length-7), "").toString(CryptoJS.enc.Utf8);
        $(this).replaceWith("<p>" + add_smileys(message) + "</p>");
    });
}

(function() {
    var topic = window.location.pathname.split("-")[2];
    if (topic != 0) decrypt();
    $(".jvcode-eye-blocked").parent().parent().append('<button class="btn btn-jv-editor-toolbar" type="button" data-edit="encrypt" title="Crypter" id="btn-encrypt"><img src="https://image.jeuxvideo.com/smileys_img/37.gif" height=18 width=18></button>');
    $(".jvcode-eye-blocked").parent().parent().append('<button class="btn btn-jv-editor-toolbar" type="button" data-edit="decrypt" title="Annuler" id="btn-decrypt"><img src="https://image.jeuxvideo.com/smileys_img/35.gif" height=18 width=18></button>');
    $("#btn-encrypt").click(function(){
        encrypt();
    });
    $("#btn-decrypt").click(function(){
        cancel();
    });
})();

main();