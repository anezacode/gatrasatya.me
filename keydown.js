document.addEventListener('keydown', function(event1) {
  if (event1.key === 'f12') {
      event1.preventDefault();
      event1.preventDefault();
      console.log("[GS]: Akses Ditolak!");
      return false;
  }
});
document.addEventListener('keydown', function(event2) {
  if (event2.ctrlKey && event2.shiftKey && event2.key === 'i') {
      event2.preventDefault();
      event2.preventDefault();
      console.log("[GS]: Akses Ditolak!");
      return false;
  }
});
document.addEventListener('keydown', function(event3) {
  if (event3.ctrlKey && event3.shiftKey && event3.key === 'j') {
      event3.preventDefault();
      event3.preventDefault();
      console.log("[GS]: Akses Ditolak!");
      return false;
  }
});
document.addEventListener('keydown', function(event4) {
  if (event4.ctrlKey && event4.key === 'u') {
      event4.preventDefault();
      event4.preventDefault();
      console.log("[GS]: Akses Ditolak!");
      return false;
  }
});
document.addEventListener('keydown', function(event5) {
  if (event5.ctrlKey && event5.shiftKey && event5.key === 'c') {
      event5.preventDefault();
      event5.preventDefault();
      console.log("[GS]: Akses Ditolak!");
      return false;
  }
});
document.addEventListener('keydown', function(event6) {
  if (event6.ctrlKey && event6.shiftKey && event6.key === 'k') {
      event6.preventDefault();
      event6.preventDefault();
      console.log("[GS]: Akses Ditolak!");
      return false;
  }
});
document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.key === 'f8') {
      event.preventDefault();
      event.preventDefault();
      console.log("[GS]: Akses Ditolak!");
      return false;
  }
});

var isNS = (navigator.appName == "Netscape") ? 1 : 0;
if (navigator.appName == "Netscape")document.captureEvents(Event.MOUSEDOWN||Event.MOUSEUP);

function mischandler(){
  return false;
}

function mousehandler(e) {
  var myevent = (isNS) ? e : event;
  var eventbutton = (isNS) ? myevent.which : myevent.button;

  if ((eventbutton==2)||(eventbutton==3)) return false;
}

document.oncontextmenu = mischandler;
document.onmousedown = mousehandler;
document.onmouseup = mousehandler;
