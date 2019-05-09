<template> <div>  
  <div class="land">
    <img src="http://wp.magnium-themes.com/barrel/barrel-11/wp-content/uploads/2017/02/girl-laptop-street.jpg" class="responsive">
    </div>
    <div class="land-text">
      <h1>Earn by learning/cooperating in a new FairEconomy</h1>
      <b-btn class="btn" href="#/Investors">
        Get started
      </b-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "landpage"
};
</script>


<style lang="scss">
.responsive {
  width: 100%;
  height: auto;
  filter: brightness(0.5);
}
.land-text {
  letter-spacing: 4px;
  text-align: center;
  position: absolute;
  top:300px;
  left: 50%;
  transform: translate(-50%, -50%);
  height: auto;
  color: white;
  text-shadow: rgb(238, 238, 238) 0 0 10px, rgb(253, 250, 68) 1px 1px 1px;
}
.btn{
  background-color: #3E5FFE;
}
</style>
