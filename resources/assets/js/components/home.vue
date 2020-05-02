<template>
    <div>
    <nav class="panel column is-offset-2 is-8">
    <p class="panel-heading">
     Vuejs Phonebook
    <button class="button is-link is-outlined" @click="addOpen">
      Add New
    </button>
</p>

    <div class="panel-block">
      <p class="control has-icons-left">
        <input class="input" type="text" placeholder="Search">
        <span class="icon is-left">
          <i class="fa fa-search" aria-hidden="true"></i>
        </span>
      </p>
    </div>

    <a class="panel-block is-active">
     <span class="column is-9">
         Market
     </span>

      <span class="column is-1">
        <i class="has-text-danger fa fa-trash"></i>
      </span>
      <span class="column is-1">
        <i class="has-text-info fa fa-edit"></i>
      </span>
      <span class="column is-1">
        <i class="has-text-primary fa fa-eye"></i>
      </span>
    </a>
  </nav>
<Add :openmodal="addActive" @closeRequest='close'></Add>
  </div>
</template>

<script>
let Add = require('./add.vue');
export default{
    components:{
        Add
    },
    data(){
    return{
        addActive : ''
    }
    },

    methods:{
        addOpen(){
            this.addActive = 'is-active';
        },
        close(){
            this.addActive = ''
        }
    }
}
</script>
