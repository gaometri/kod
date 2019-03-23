$.getScript("https://www.gstatic.com/firebasejs/5.8.6/firebase.js").done(function(){
  function t(t, e, a, s) {
    var o,test = 0, l = s.find(t).eq(0),
      c = l.attr(a);
    if (null !== localStorage.getItem(e)) {
      var n = JSON.parse(localStorage[e]);
      for (i = 0; i < n.length; i++) n[i] === c && l.addClass(e)
    }
    firebase.database().ref(e + "/" + c + "/total").on("value", function(t) {
      o = t.val() || 0, l.find(".total").eq(0).html(o), test = 1
    }), l.on("click",function(t){
      if(test == 1){
      if (t.preventDefault(), $(this).toggleClass(e), $(this).hasClass(e)) {
        if (null === localStorage.getItem(e)) localStorage.setItem(e, JSON.stringify([c]));
        else {
          var a = JSON.parse(localStorage[e]);
          a.filter(function(t) {
            return t == c
          }).length || (a.push(c), localStorage.setItem(e, JSON.stringify(a)))
        }
        o++
      } else {
        for (var s = JSON.parse(localStorage[e]), l = 0; l < s.length; l++) s[l] === c && s.splice(l, 1);
        localStorage.setItem(e, JSON.stringify(s)), o--
      }
	  if(o <= 0){
	  o = 0;
	  }
      firebase.database().ref(e + "/" + c + "/total").set(o)
      }
    })
  }
  firebase.initializeApp({
        apiKey: "AIzaSyBPGd0afvZWZFMsmS5NBuNmnuO8cIZDbwI",
        authDomain: "like-1a1c1.firebaseapp.com",
        databaseURL: "https://like-1a1c1.firebaseio.com",
        projectId: "like-1a1c1",
        storageBucket: "like-1a1c1.appspot.com",
        messagingSenderId: "643594718742"
  }); /* Replace */
  $(".post-reaction").each(function() {
    // start 3 reactions
    t(".like-button", "like", "data-post-id", $(this));
    t(".love-button", "love", "data-post-id", $(this));
    t(".haha-button", "haha", "data-post-id", $(this));
    t(".wow-button", "wow", "data-post-id", $(this));
    t(".sad-button", "sad", "data-post-id", $(this));
    t(".angry-button", "angry", "data-post-id", $(this));
  });
  $(".comments-content .comment .comment-block").each(function() {
    var e = $(this),
      a = $(".comments-content").attr("data-post-comment");
    e.append(`<div class="comment-reaction"><a class="comment-like" data-comment-id="${a}-${e.parents("li").attr("id")}"><i class="fa fa-thumbs-up" style="font-weight:200!important"></i> <span class="total">0</span></a> <a class="comment-dislike" data-comment-id="${a}-${e.parents("li").attr("id")}"><i class="fa fa-thumbs-down"></i> <span class="total">0</span></a></div>`);
   // start 2 reactions
   t(".comment-like", "like-cmt", "data-comment-id", e);
   t(".comment-dislike", "dislike-cmt", "data-comment-id", e);
  });
});