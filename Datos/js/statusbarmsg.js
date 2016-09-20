// ******** Status Bar Javascript Magic by Likno 1.0 **********
function statusbarmsg_start() {clearInterval(statusbarmsg.sttm);statusbarmsg_init();if (arguments.length>0) statusbarmsg_init2(arguments[0]);statusbarmsg.sttm=setInterval ("doEffect('statusbarmsg')",10);}
function statusbarmsg_stop() {clearInterval(statusbarmsg.sttm);window.status="";}

statusbarmsg_init();
function statusbarmsg_init() {statusbarmsg={stel:0,stft:"Bienvenidos al sitio web del Colegio de Especialidades Avanzadas en Sexualidad y Salud A.C   -   Powered by: Virgen Systems",stec:1,stcel:1,stce:-1,stcl:-1,stls:-1,stcs:0,sttg:0,stea:["Bienvenidos al sitio web del Colegio de Especialidades Avanzadas en Sexualidad y Salud A.C   -   Powered by: Virgen Systems",0,14,1]};}
function statusbarmsg_init2 (en) {statusbarmsg.stea=[statusbarmsg.stea[(en-1)*4],statusbarmsg.stea[(en-1)*4+1],statusbarmsg.stea[(en-1)*4+2],statusbarmsg.stea[(en-1)*4+3]];statusbarmsg.stec=1;statusbarmsg.stel=0;}
function doEffect(es) {var s=eval(es);if (s.stce==s.stec) {if (s.stcel==s.stel) {clearInterval(s.sttm);window.status=s.stft;return;} else {if (s.stel>0) s.stcel++;s.stce=-1;s.stcl=s.stls;}}if (s.stcl==s.stls) {s.stce++;s.sttx=s.stea[s.stce*4];s.sttp=s.stea[s.stce*4+1];s.stsd=s.stea[s.stce*4+2];s.stls=s.stea[s.stce*4+3];s.stcl=0;s.stsp=1;s.sttg=0;}if (21-s.stsd-s.sttg==0) {var stres=eval("stEffect"+s.sttp+"(s.sttx,s.stsp++,es);");s.sttg=0;if (stres!="") window.status=stres;else {s.stcl++;s.stsp=1;}}s.sttg++;}
function stEffect0(text,step){if (step>text.length) return "";else return text.substring(0,step);}
statusbarmsg_start();