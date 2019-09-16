<template>
   <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <div id="videos">
        <div id="subscriber"></div>
         <div id="publisher"></div>
<div id="screen-preview"></div>
    </div>

  </div>
</template>

<script>
 import OT from '@opentok/client'

    export default {
        created() {
        var apiKey = "46406472";
var sessionId = "2_MX40NjQwNjQ3Mn5-MTU2NjI0MjgxODA0M35Db0ExV3dTdjhKcHZHYkRrQjBteXJsY0N-fg";
var token = "T1==cGFydG5lcl9pZD00NjQwNjQ3MiZzaWc9NzliY2ZjOTlkMWFiMmI2MDYyY2MzZjczY2Q2NjczM2UyOWU4MzgxYTpzZXNzaW9uX2lkPTJfTVg0ME5qUXdOalEzTW41LU1UVTJOakkwTWpneE9EQTBNMzVEYjBFeFYzZFRkamhLY0haSFlrUnJRakJ0ZVhKc1kwTi1mZyZjcmVhdGVfdGltZT0xNTY2MjQyODYwJm5vbmNlPTAuODE0OTUzMDQwOTg2ODczOSZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNTY2MjQ2NDU5JmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9";

initializeSession();

// Handling all of our errors here by alerting them
function handleError(error) {
  if (error) {
    alert(error.message);
  }
}

function initializeSession() {
  var session = OT.initSession(apiKey, sessionId);

  // Subscribe to a newly created stream
  session.on('streamCreated', function(event) {
    session.subscribe(event.stream, 'subscriber', {
      insertMode: 'append',
      width: '100%',
      height: '100%'
    }, handleError);
  });

  // Create a publisher
  var publisher = OT.initPublisher('publisher', {
    insertMode: 'append',
    width: '100%',
    height: '100%'
  }, handleError);

  // Connect to the session
  session.connect(token, function(error) {
    // If the connection is successful, publish to the session
    if (error) {
      handleError(error);
    } else {
      session.publish(publisher, handleError);
    }
  });
 

OT.checkScreenSharingCapability(function(response) {
  if(!response.supported || response.extensionRegistered === false) {
    // This browser does not support screen sharing.
  } else if (response.extensionInstalled === false) {
    // Prompt to install the extension.
  } else {
    // Screen sharing is available. Publish the screen.
    var publisher = OT.initPublisher('screen-preview',
      {videoSource: 'screen'},
      function(error) {
        if (error) {
          // Look at error.message to see what went wrong.
        } else {
          session.publish(publisher, function(error) {
            if (error) {
              // Look error.message to see what went wrong.
            }
          });
        }
      }
    );
  }
});
var publishOptions = {};
publishOptions.maxResolution = { width: 1920, height: 1080 };
publishOptions.videoSource = 'screen';
OT.initPublisher('some-element-id', publishOptions);
var publishOptions = {videoSource: 'screen'};
var screenPublisherElement = document.createElement('div');
OT.initPublisher(screenPublisherElement, publishOptions);


    }
        }
        }
</script>

<style lang="scss" scoped>

</style>