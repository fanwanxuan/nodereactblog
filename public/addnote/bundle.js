!function(e){function t(o){if(n[o])return n[o].exports;var d=n[o]={exports:{},id:o,loaded:!1};return e[o].call(d.exports,d,d.exports,t),d.loaded=!0,d.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)}({0:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var d=n(88),r=(o(d),{init:function(){console.log("addnoteinit"),this.addnote()},addnote:function(){var e=this;document.getElementById("addnote_sub_btn").addEventListener("click",function(t){var n=document.getElementById("addnote_form");if(n.title.value.trim())if(n.content.value.trim()){var o=new XMLHttpRequest;o.open("post","/addnote"),console.log(n.title.value),o.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=UTF-8"),o.onreadystatechange=function(e){if(4==o.readyState&&200==o.status){var t=JSON.parse(o.responseText);console.log(t),document.getElementById("new_status").innerHTML="√发表成功：",document.getElementById("new_title").innerHTML=t.title,document.getElementById("new_status_box").style.display="block"}},o.send("title="+n.title.value+"&content="+n.content.value+"&tags="+n.tags.value)}else document.getElementById("addnote_title").style.borderColor="#C4C4C4",e.showError("addnote_con","new_status_box","内容不能为空");else document.getElementById("addnote_con").style.borderColor="#C4C4C4",e.showError("addnote_title","new_status_box","标题不能为空")})},showError:function(e,t,n){var o=document.getElementById(t);o.innerHTML=n,document.getElementById(e).style.borderColor="red",o.style.display="block"}});r.init()},88:function(e,t){}});