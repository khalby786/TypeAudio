(function(){

/* mousetrap v1.6.3 craig.is/killing/mice */
(function(q,u,c){function v(a,b,g){a.addEventListener?a.addEventListener(b,g,!1):a.attachEvent("on"+b,g)}function z(a){if("keypress"==a.type){var b=String.fromCharCode(a.which);a.shiftKey||(b=b.toLowerCase());return b}return n[a.which]?n[a.which]:r[a.which]?r[a.which]:String.fromCharCode(a.which).toLowerCase()}function F(a){var b=[];a.shiftKey&&b.push("shift");a.altKey&&b.push("alt");a.ctrlKey&&b.push("ctrl");a.metaKey&&b.push("meta");return b}function w(a){return"shift"==a||"ctrl"==a||"alt"==a||
"meta"==a}function A(a,b){var g,d=[];var e=a;"+"===e?e=["+"]:(e=e.replace(/\+{2}/g,"+plus"),e=e.split("+"));for(g=0;g<e.length;++g){var m=e[g];B[m]&&(m=B[m]);b&&"keypress"!=b&&C[m]&&(m=C[m],d.push("shift"));w(m)&&d.push(m)}e=m;g=b;if(!g){if(!p){p={};for(var c in n)95<c&&112>c||n.hasOwnProperty(c)&&(p[n[c]]=c)}g=p[e]?"keydown":"keypress"}"keypress"==g&&d.length&&(g="keydown");return{key:m,modifiers:d,action:g}}function D(a,b){return null===a||a===u?!1:a===b?!0:D(a.parentNode,b)}function d(a){function b(a){a=
a||{};var b=!1,l;for(l in p)a[l]?b=!0:p[l]=0;b||(x=!1)}function g(a,b,t,f,g,d){var l,E=[],h=t.type;if(!k._callbacks[a])return[];"keyup"==h&&w(a)&&(b=[a]);for(l=0;l<k._callbacks[a].length;++l){var c=k._callbacks[a][l];if((f||!c.seq||p[c.seq]==c.level)&&h==c.action){var e;(e="keypress"==h&&!t.metaKey&&!t.ctrlKey)||(e=c.modifiers,e=b.sort().join(",")===e.sort().join(","));e&&(e=f&&c.seq==f&&c.level==d,(!f&&c.combo==g||e)&&k._callbacks[a].splice(l,1),E.push(c))}}return E}function c(a,b,c,f){k.stopCallback(b,
b.target||b.srcElement,c,f)||!1!==a(b,c)||(b.preventDefault?b.preventDefault():b.returnValue=!1,b.stopPropagation?b.stopPropagation():b.cancelBubble=!0)}function e(a){"number"!==typeof a.which&&(a.which=a.keyCode);var b=z(a);b&&("keyup"==a.type&&y===b?y=!1:k.handleKey(b,F(a),a))}function m(a,g,t,f){function h(c){return function(){x=c;++p[a];clearTimeout(q);q=setTimeout(b,1E3)}}function l(g){c(t,g,a);"keyup"!==f&&(y=z(g));setTimeout(b,10)}for(var d=p[a]=0;d<g.length;++d){var e=d+1===g.length?l:h(f||
A(g[d+1]).action);n(g[d],e,f,a,d)}}function n(a,b,c,f,d){k._directMap[a+":"+c]=b;a=a.replace(/\s+/g," ");var e=a.split(" ");1<e.length?m(a,e,b,c):(c=A(a,c),k._callbacks[c.key]=k._callbacks[c.key]||[],g(c.key,c.modifiers,{type:c.action},f,a,d),k._callbacks[c.key][f?"unshift":"push"]({callback:b,modifiers:c.modifiers,action:c.action,seq:f,level:d,combo:a}))}var k=this;a=a||u;if(!(k instanceof d))return new d(a);k.target=a;k._callbacks={};k._directMap={};var p={},q,y=!1,r=!1,x=!1;k._handleKey=function(a,
d,e){var f=g(a,d,e),h;d={};var k=0,l=!1;for(h=0;h<f.length;++h)f[h].seq&&(k=Math.max(k,f[h].level));for(h=0;h<f.length;++h)f[h].seq?f[h].level==k&&(l=!0,d[f[h].seq]=1,c(f[h].callback,e,f[h].combo,f[h].seq)):l||c(f[h].callback,e,f[h].combo);f="keypress"==e.type&&r;e.type!=x||w(a)||f||b(d);r=l&&"keydown"==e.type};k._bindMultiple=function(a,b,c){for(var d=0;d<a.length;++d)n(a[d],b,c)};v(a,"keypress",e);v(a,"keydown",e);v(a,"keyup",e)}if(q){var n={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",
18:"alt",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"ins",46:"del",91:"meta",93:"meta",224:"meta"},r={106:"*",107:"+",109:"-",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},C={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/","|":"\\"},B={option:"alt",command:"meta","return":"enter",
escape:"esc",plus:"+",mod:/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"meta":"ctrl"},p;for(c=1;20>c;++c)n[111+c]="f"+c;for(c=0;9>=c;++c)n[c+96]=c.toString();d.prototype.bind=function(a,b,c){a=a instanceof Array?a:[a];this._bindMultiple.call(this,a,b,c);return this};d.prototype.unbind=function(a,b){return this.bind.call(this,a,function(){},b)};d.prototype.trigger=function(a,b){if(this._directMap[a+":"+b])this._directMap[a+":"+b]({},a);return this};d.prototype.reset=function(){this._callbacks={};
this._directMap={};return this};d.prototype.stopCallback=function(a,b){if(-1<(" "+b.className+" ").indexOf(" mousetrap ")||D(b,this.target))return!1;if("composedPath"in a&&"function"===typeof a.composedPath){var c=a.composedPath()[0];c!==a.target&&(b=c)}return"INPUT"==b.tagName||"SELECT"==b.tagName||"TEXTAREA"==b.tagName||b.isContentEditable};d.prototype.handleKey=function(){return this._handleKey.apply(this,arguments)};d.addKeycodes=function(a){for(var b in a)a.hasOwnProperty(b)&&(n[b]=a[b]);p=null};
d.init=function(){var a=d(u),b;for(b in a)"_"!==b.charAt(0)&&(d[b]=function(b){return function(){return a[b].apply(a,arguments)}}(b))};d.init();q.Mousetrap=d;"undefined"!==typeof module&&module.exports&&(module.exports=d);"function"===typeof define&&define.amd&&define(function(){return d})}})("undefined"!==typeof window?window:null,"undefined"!==typeof window?document:null);

  console.log("1 is good.")
  function countWords(str) {
    var count = 0,
                i,
                j = str.length;

    for (i = 0; i <= j;i++){
        if (str.charAt(i) == " ") {
            count ++;
        }
    }
    return count + 1;  
}

function countTextbox(){
    var count = countWords(document.getElementById('textbox').innerHTML);
    document.getElementById('wc').innerHTML = "WORD COUNT: " + count;
}
console.log("2 is good")
function initWordCount(){
    setInterval(function(){
        countTextbox();
    }, 1000);
    
}


function saveText(){
    // autosave every second
    var field = document.getElementById("textbox");
    if ( localStorage.getItem("autosave")) {
       field.innerHTML = localStorage.getItem("autosave");
    }
    setInterval(function(){
       localStorage.setItem("autosave", field.innerHTML);
    }, 1000);
    
}
console.log("3 is excellent.")

function handleFiles(event) {
	var files = event.target.files;
	$("#rlly").attr("src", URL.createObjectURL(files[0]));
	document.getElementById("rllly").load();
  var fileNameForText = files[0].name;
  document.getElementById("rll").style.display = "none";
  document.getElementById("rll").style.top = 0;

}
  



document.getElementById("rll").addEventListener("change", handleFiles, false);


function rewindAudio() {
// Check for audio element support.
	if (window.HTMLAudioElement) {
		try {
			var oAudio = document.getElementById('rllly');
			oAudio.currentTime -= 3.0;
		}
		catch (e) {
			// Fail silently but show in F12 developer tools console
			if(window.console && console.error("Error:" + e));
		}
	}
	if (event.keyCode == 112/* && event.shiftKey*/) {
	event.preventDefault();
	if (window.HTMLAudioElement) {
		try {
			var oAudio = document.getElementById('rllly');
			oAudio.currentTime -= 3.0;
		}
		catch (e) {
			// Fail silently but show in F12 developer tools console
			if(window.console && console.error("Error:" + e));
		}
	}
}
}

function fastAudio() {
// Check for audio element support.
	if (window.HTMLAudioElement) {
		try {
			var oAudio = document.getElementById('rllly');
			oAudio.currentTime += 3.0;
		}
		catch (e) {
			// Fail silently but show in F12 developer tools console
			if(window.console && console.error("Error:" + e));
		}
	}
	if (event.keyCode == 113/* && event.shiftKey*/) {
	event.preventDefault();
	if (window.HTMLAudioElement) {
		try {
			var oAudio = document.getElementById('rllly');
			oAudio.currentTime += 3.0;
		}
		catch (e) {
			// Fail silently but show in F12 developer tools console
			if(window.console && console.error("Error:" + e));
		}
	}
}
}
/*Thank you, Eliot Bentley*/
function playPause() {
	if (event.keyCode == 27) {
		event.preventDefault();	
		var oAudio = document.getElementById('rllly');
		if (oAudio.paused) {
			oAudio.play();
		} else {
			oAudio.pause();
		}
	}
}

  // get timestamp
// var timestamp;
function getTimestamp(){
    console.log("Suprise")
    // get timestap
    var time = document.getElementById('rllly').currentTime  
    var minutes = Math.floor(time / 60);
    var seconds = ("0" + Math.round( time - minutes * 60 ) ).slice(-2);
    return minutes+":"+seconds;
};

function insertTimestamp(){
    document.execCommand('insertHTML',false,
    '<span class="timestamp" contenteditable="false" data="hi" onclick="var x = this; setFromTimestamp(\'' + getTimestamp() + '\', x);">' + getTimestamp() + '</span>&nbsp;'
    );
    $('.timestamp').each(function( index ) {
        $( this )[0].contentEditable = false;
    });
}
  
function timestamps() {
  if (event.keyCode == 114) {
    event.preventDefault();
    insertTimestamp();
    return false;
  }
}


document.addEventListener('keydown', rewindAudio);
document.addEventListener('keydown', fastAudio);
document.addEventListener('keydown', playPause);
document.addEventListener('keydown', timestamps)

!function(a,b){"undefined"!=typeof module?module.exports=b():"function"==typeof define&&"object"==typeof define.amd?define(b):this[a]=b()}("Progressor",function(){function a(a){this._media=a.media,this._bar=a.bar,this._text=a.text,this._time=a.time,this.initProgressBar(),this.initMedia()}return a.prototype.initMedia=function(){this._media.addEventListener("timeupdate",this.updateProgress.bind(this),!1),this._media.addEventListener("timeupdate",this.updateTimeCount.bind(this),!1),this.addClickEvents(),this.updateTimeCount(this._media)},a.prototype.initProgressBar=function(){this._textBox=document.createElement("span"),this._textBox.textContent=this._text||"",this._bar.style.position="relative",this._bar.style.zIndex=1,this._bar.className=this._bar.className+" progressor",this._progress=document.createElement("div"),this._progress.className="progressor-progress",this._progress.style.width="0%",this._progress.style.height="100%",this._progress.style.position="absolute",this._progress.style.top=0,this._progress.style.zIndex=-1,this._bar.style.webkitUserSelect="none",this._bar.style.userSelect="none",this._bar.appendChild(this._textBox),this._bar.appendChild(this._progress)},a.prototype.updateProgress=function(){this.updateTimeCount();var a=0;this._media.currentTime>0&&(a=100/this._media.duration*this._media.currentTime),this._bar.getElementsByTagName("div")[0].style.width=a+"%"},a.prototype.formatTime=function(a){var b=Math.floor(a/60),c=("0"+Math.round(a-60*b)).slice(-2);return b+":"+c},a.prototype.updateTimeCount=function(){if(this._time){var a=this.formatTime(this._media.currentTime),b=this.formatTime(this._media.duration);isNaN(this._media.duration)===!0&&(b="00:00"),this._time.innerHTML=a+"/"+b}},a.prototype.timeFromCursorPosition=function(a,b,c){var d=a.getBoundingClientRect(),e=b.clientX-d.left,f=e/d.width;return f*c},a.prototype.setMediaProgress=function(a){this._media.currentTime=this.timeFromCursorPosition(this._bar,a,this._media.duration),this.updateProgress()},a.prototype.remove=function(){function a(a){var b=a.cloneNode(!0);a.parentNode.replaceChild(b,a)}this._time.innerHTML="",this._bar.removeChild(this._textBox),this._bar.removeChild(this._progress),this._bar.style.position="",this._bar.style.zIndex="",this._bar.style.webkitUserSelect="",this._bar.style.userSelect="",this._bar.classList.remove("progressor"),a(this._bar),a(this._media)},a.prototype.addClickEvents=function(){var a=!1,b=!1,c="",d=function(c){a=!0,b=!this._media.paused,this._media.pause(),this.setMediaProgress(c)},e=function(){clearInterval(c),a=!1,1==b&&(this._media.play(),b=!1)},f=function(b){a===!0&&(c=setInterval(this.setMediaProgress(b),1e3))};this._bar.addEventListener("mousedown",d.bind(this)),document.addEventListener("mouseup",e.bind(this)),document.addEventListener("mousemove",f.bind(this))},a});
  
function init(){
    saveText();
    initWordCount();
    handleFiles();  
    rewindAudio();
    fastAudio();
    playPause();
    timestamps();
}

init(); 

})();

function splitTimestamp(hms){
    var a = hms.split(':');
    var seconds = (+a[0]) * 60 + (+a[1]); 
    return seconds;
}

$('.timestamp *:not(:has("*"))').click(function(){
    var clickts = $(this).data('timestamp');
});

function setFromTimestamp(clickts, element){
    console.log(element.childNodes.length);
    if (element.childNodes.length == 1) {
        document.getElementById('rllly').currentTime = splitTimestamp(clickts);
    }
}
