<!DOCTYPE html>
<html>
  <!-- include A-Frame -->
  <script src="https://aframe.io/releases/1.0.4/aframe.min.js"></script>
  <!-- include ar.js for A-Frame -->
  <script src="https://cdn.rawgit.com/jeromeetienne/AR.js/1.5.0/aframe/build/aframe-ar.js"></script>

  <!-- <script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js"></script>
  <script src="https://raw.githack.com/AR-js-org/studio-backend/master/src/modules/marker/tools/gesture-detector.js"></script>
  <script src="https://raw.githack.com/AR-js-org/studio-backend/master/src/modules/marker/tools/gesture-handler.js"></script> -->

  <body style="margin: 0px; overflow: hidden;">
    <a-scene embedded arjs>
      <a-marker preset="custom" type="pattern" url="markerq.patt">
        <a-image src="../assets/imgs/samuele-errico-piccarini-MyjVReZ5GLQ-unsplash.jpg" rotation="-90 0 0" width="3" height="4"></a-image>
        <!-- <a-image src="../assets/imgs/andrew-pons-Os7C4iw2rDc-unsplash.jpg" rotation="-90 0 0" width="3" height="4" position="-4 0 0"></a-image> -->
      </a-marker>
      <!-- <a-marker preset="['hiro', 'kanji', 'euler', 'Euler']" type="unknown" url="../assets/markers/pattern-Euler.patt22">
        <a-image src="../assets/imgs/joey-banks-YApiWyp0lqo-unsplash.jpg" rotation="-90 0 0" width="3" height="4" ></a-image>
      </a-marker>

      <a-marker preset="['hiro', 'kanji', 'euler', 'Euler']" type="unknown" url="../assets/markers/pattern-Euler.patt">
        <a-image src="../assets/imgs/joey-banks-YApiWyp0lqo-unsplash.jpg" rotation="-90 0 0" width="3" height="4" ></a-image>
      </a-marker> -->

      <!-- <a-marker
                type="pattern"
                preset="custom"
                url="marker.patt"
                emitevents="true"
            >
                <a-image
                    src="asset.jpeg"
                    scale="1 1 1"
                    class="clickable"
                    rotation="-90 0 0"
                ></a-image>
      </a-marker> -->

      <a-entity camera></a-entity>
    </a-scene>

    <!-- <a-scene
            arjs="trackingMethod: best; sourceType: webcam; debugUIEnabled: false;"
            id="scene"
            embedded
            embedded arjs
        >
            <a-marker
                id="animated-marker"
                type="pattern"
                preset="custom"
                url="marker.patt"
                emitevents="true"
            >
                <a-image
                    src="asset.jpeg"
                    scale="1 1 1"
                    class="clickable"
                    rotation="-90 0 0"
                ></a-image>
            </a-marker>

            <a-entity camera></a-entity>
        </a-scene> -->
    </body>
  </body>
</html>