var $ = window.$

$('#sbmt').on('click', () => {
  event.preventDefault()
  var songName = $('#songName').val()
  var data = {
    songName: songName
  }
  console.log(songName)

  $.post('/song/create', data).then(function (r) {
    console.log(r)
    console.log('ping')
    getTable(r)

    getVideos(r)
  })
})

function getSongs() {
  $.get('/all/videos').then(function (r) {
    var songs = r
    getTable(songs)
    // console.log(r)
  })
    .catch(function (err) {
      console.log(err)
    })
}

getSongs()

function getTable(songs){
  // console.log(songs)
  $("#songs").empty()
  
  function getVideos () {
    $.get('/all/videos').then(function (r) {
      for (var i = 0; i < r.length; i++) {
        console.log(r[i].video_id)
        var songID = r[i].video_id
        onYouTubeIframeAPIReady(songID)
      }
    })
  }
  
  for (i = 0; i < songs.length; i++){
    var counter =i+1
    $("#songs").append(`
    <tr>
    <th scope="row">` + counter + `</th>
    <td><button id="downvote" data-value="` + songs[i].id + `" class="btn btn-primary">-</button> ` + songs[i].votes + ` <button  id="upvote" data-value="` + songs[i].id + `" class="btn btn-primary">+</button></td>
    <td><img src="` + songs[i].thumbnail_url + `"></td>
    <td>` + songs[i].song_name + `</td>
    </tr>`
    )
  }
}

$(document).on('click', '#upvote', function () {
  console.log('ping')
  var voteID = $(this).attr('data-value')
  console.log(voteID)
  $.ajax({
    url: '/song/upvote/' + voteID,
    type: 'PUT',
    success: function(somethin) {
      getSongs()
      console.log(somethin)
    }
  })
})

$(document).on('click', '#downvote', function () {
  console.log('ping')
  var voteID = $(this).attr('data-value')
  //console.log(voteID)
  $.ajax({
    url: '/song/downvote/' + voteID,
    type: 'PUT',
    success: function (somethin) {
      getSongs()
      console.log(somethin)
    }
  })
})

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script')

tag.src = 'https://www.youtube.com/iframe_api'
var firstScriptTag = document.getElementsByTagName('script')[0]
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player
function onYouTubeIframeAPIReady (video) {
  player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: video,
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  })
}

//create the index chosen from the video array
var index = 0

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {        
  if(event.data === 0) {
    index++
    $.get('/next/videos').then(function (r) {
      console.log(r)
    })
    .catch(function(err){
      console.log(err);
    })           
    playNewVideo();
  }
}
 
function playNewVideo(id){
  $.get('/all/videos').then(function (r) {
    var songs = r
    console.log(songs)
    console.log(songs[index].video_id)
    player.loadVideoById(songs[index].video_id)
    event.target.playVideo();
    playNewVideo(nextID)
  })
}

function stopVideo() {
  player.stopVideo()
}
