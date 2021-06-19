$(document).on('click', '.open-iframe', function(event) {
    event.preventDefault();
    $('#modal-iframe').iziModal('open', this);
  });

  const title = $('.aaa').data('title')
  const author = $('.aaa').data('author')
  const url = $('.aaa').data('url')
  $('#modal-iframe').iziModal({
    width: 600, //横幅
    subtitle:author,
    iframe: true, //iframeを利用
    iframeHeight: 500, //iframeの高さ
    title:title,
    iframeURL: url,
  });
  
