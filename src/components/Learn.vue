<template>
    <div class="skills">
        <form @submit.prevent="addTech">
          <input v-validate="'min:5'" maxlength="16" placeholder="Press enter to add..." type="text" v-model="tech" name="tech">        
          <transition name="alert-in" enter-active-class="animated flipInX" leave-active-class="animated flipOutX">
            <p class="alert" v-if="errors.has('tech')">
              Please enter a minimum of 5 characters
            </p>
          </transition>          
        </form>
        <ul>
            <transition-group name="list" enter-active-class="animated bounceInLeft" 
            leave-active-class="animated bounceOutRight">
              <li v-for="(data, index) in technologies" :key="index">
                {{ data.name }}
                <i class="fa fa-minus-circle" v-on:click="removeTech(index)"></i>
            </li>
            </transition-group>
        </ul>
        <p class="alert-bar" v-if="technologies.length === 0">No learnings available</p>
    </div>
</template>

<script>
export default {
  name: "learn",
  data() {
    return {
      tech: "",
      technologies: [
        { name: "Vue JS" },
        { name: "Angular" },
        { name: "React JS" }
      ]
    };
  },
  methods: {
    addTech() {
      /// validate all errors b4 adding...
      this.$validator.validateAll().then(result => {
        if (result) {
          /// add the skill
          this.technologies.push({ name: this.tech });
          this.tech = "";
        } else {
          console.log(result);
        }
      });
    },
    removeTech(id) {
      this.technologies.splice(id, 1);
    }
  }
};
</script>

<style scoped>
.holder {
  background: #fff;
}

h1 {
  text-align: center;
}

ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

ul li {
  padding: 20px;
  font-size: 1.2em;
  background-color: #daf2ff;
  border-left: 5px solid #03a2ff;
  border-bottom: 1px solid #fff;
  margin-bottom: 2px;
  color: #3e5252;
}

p {
  text-align: center;
  padding: 30px 0;
  color: gray;
}

.container {
  box-shadow: 0px 0px 40px lightgray;
}

input {
  width: calc(100% - 40px);
  border: 0;
  padding: 20px;
  font-size: 1.2em;
  background-color: #525252;
  color: #fff;
}
.alert {
  background: #fdf2ce;
  font-weight: bold;
  display: inline-block;
  padding: 5px;
  margin-top: -10px;
}
.alert-bar{
  background: #fa5412;
  color: #fff;
  font-weight: bold;
  display: inline-block;
  padding: 20px;
  width: calc(100% - 40px);
}
i {
  cursor: pointer;
  float: right;
}
</style>

