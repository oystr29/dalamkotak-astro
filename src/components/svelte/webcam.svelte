<script>
/** @type {HTMLVideoElement | undefined}*/
let videoEl;
	navigator.mediaDevices.getUserMedia({video: true}).then(stream => {
	videoEl.srcObject = stream;
});

</script>

      <video bind:this={videoEl} autoplay playsinline class="w-screen h-screen object-cover absolute" id="">
        <track kind="captions" />
      </video>
