$(document).ready(function(){
    $(".message-management-meny").hide();
    $(".message-management-meny-link").show();
    var isLeftPanelHidden = false;
    var isRightPanelHidden = false;
    var isFullUserProfile = false;
    let profile = $("main").html();
    $("main").hide();
    $(".message-management-meny-link").click(function(){
      $(".message-management-meny").toggle();
      //$(".message-management-meny").show();
    });
    $('.channels').click(function(){
      if ($(this).hasClass('is-active')) {return;}
      else {
        $('.is-active').removeClass('is-active');
        $(this).addClass('is-active');
      }
    });
    $('#left-panel-toggle').click(function(){
      if (!isLeftPanelHidden) {
        $('#channels-panel').css("width", "0");
        $('#chat').css("left", "66px");
        $('#channels-panel-2').hide();
        $('#messages').css("left", "76px");
        $(this).css("left", "50px");
        $('.editor').css("left", "76px");
      } else {
        $('#channels-panel').css("width", "250px");
        $('#chat').css("left", "316px");
        $('#channels-panel-2').show();
        $('#messages').css("left", "326px");
        $(this).css("left", "306px");
        $('.editor').css("left", "326px");
      }
      isLeftPanelHidden = !isLeftPanelHidden;
    });
    $('#right-panel-toggle').click(function(){
      if (!isRightPanelHidden) {
        $('#right-panel').css("width", "0");
        $('#chat').css("right", "0");
        $('.editor').css("right", "10px");
        $('#messages').css("right", "10px");
      } else {
        $('#right-panel').css("width", "250px");
        $('#chat').css("right", "250px");
        $('.editor').css("right", "260px");
        $('#messages').css("right", "260px");
      }
      isRightPanelHidden = !isRightPanelHidden;
    });
  });