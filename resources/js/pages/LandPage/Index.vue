<template>
<div class="land">
      <div class="land-text">
    <h2>Earn by learning & cooperating in a new FairEconomy</h2>
    <b-btn variant="warning" href="#/Investors"><strong>How it works</strong></b-btn>
    </div>
</div>


</template>

<script>
    export default {
        name:'landpage',
    }
</script>


<style lang="scss">

.land {
    
   background-image: url("https://ak3.picdn.net/shutterstock/videos/7882573/thumb/1.jpg");
   height: 800px; 
   position: relative;
   background-size: cover;
}
.land-text {
  text-align: center;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-shadow: rgb(255, 255, 255) 0 0 10px, rgb(253, 250, 68) 2px 1px 1px;
  
}

</style>
