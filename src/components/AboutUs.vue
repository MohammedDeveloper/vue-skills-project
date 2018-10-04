<template>
  <div class="aboutUs">
    <h1 v-if="name">Hello {{ name }}</h1>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis dolor facere magnam iure accusamus ut eveniet, maxime praesentium repudiandae eaque reiciendis laboriosam quia enim deleniti eos ducimus id repellendus repellat dicta. Hic dignissimos amet culpa debitis eos at consequatur, fuga commodi. Ut voluptate et quos. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate at voluptas quibusdam magnam a reprehenderit, possimus corporis hic nam laudantium autem ab culpa delectus deleniti aspernatur quo, nisi, quod sit ea accusantium maiores! Unde, ullam. Magni sapiente officiis error, hic ut itaque alias modi expedita, excepturi ducimus iusto quibusdam placeat?
    </p>
  </div>
</template>

<script>
export default {
  name: "aboutUs",
  data() {
    return {
      name: this.$route.params.name
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  text-align: justify;
}
</style>
