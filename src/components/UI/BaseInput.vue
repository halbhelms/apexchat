<template>
    <div v-if="inDev" class="inDev">{{ $options.name }}</div>
    <div class="wrapper">
      <div :style="style">
        <div class="form-control">
          <input 
            @focus="hideLabel"
            @focusout="showLabel"
            v-bind="$attrs" 
            :id="_id" 
            :name="_id" 
            :type="_type" 
            :value="modelValue" 
            @input="$emit('update:modelValue', $event.target.value)" 
            :required="_optional ? false : true"
            :minlength="_minlength"
          >
          <label :for="_id" :class="[focused ? 'off' : 'on']">{{ _label }}</label>
        </div>
      </div>
  </div>
</template>

<script>
    export default {
        name: 'BaseInput',

        components: {},

        props: {
            _id: {
                type: String,
                required: true,
            },

            _label: {
                type: String,
                required: true
            },

            _type: {
                type: String,
                default: 'text'
            },

            _optional: {
                type: Boolean,
                default: false,
            },

            _styles: {
              type: Object,
              default: ()=>{}
            },

            _minlength: {
              type: Number,
              default: 0,
            },

            modelValue: {
                type: [String, Number],
                default: '',
            }
        },
        
        data() {
            return {
                defaultStyles: {
                    fontFamily: 'inherit',
                    fontSize: 'inherit',
                },
                focused: false,               
            }        
        },

        methods: {
          hideLabel() {
            this.focused = true
          },

          showLabel() {
            this.focused = false
          },
        },

        computed: {
            style() {
                return {...this.defaultStyles, ...this.$props._styles}
            },          
        }
    }
</script>

<style scoped>

.form-control {
  margin-top: 18px;
}

label {
  padding-left: 6px;
}

label.on {
  border-color: #0080E6;
  background: #0080E6;
  color: white;
  font-size: .6rem;
  position: relative;
  text-align: left;
  margin-left: 0;
  display:block;
  transition: all .4s;
}

label.off {
  border-color: silver;
  background: white;
  color: white;
  font-size: .6rem;
  position: relative;
  text-align: left;
  margin-left: 0;
  display:block;  
  transition: all .4s;
}

* {
  box-sizing: border-box;
}

input {
  font-family: inherit;
}

/* .wrapper {
    width: 600px;
}

.errors {
  width: 220px;
  border: 1px solid red;
  position: relative;
  top: -42px;
  left: 340px;
  color: red;
  font-size: .7rem;
  text-align: left;
  font-style: italic;
} */

div {
  width: 320px;
  /* margin-left: 20px; */
  /* float: left; */
  /* margin: 20px; */
}

div > div {
  position: relative;
  overflow: hidden;
}

/* div input:valid {
  background: white;
} */

/* div input[class='edit'] {
    background: white;
} */

div input, div textarea {
  width: 100%;
  border: 1px solid silver;
  /* background: none; */
  position: relative;
  top: 0;
  left: 0;
  z-index: 1;
  padding: 8px 12px;
  outline: 0;
}
/* div input:valid, div textarea:valid {
  background: white;
} */
div input:focus, div textarea:focus {
  border-color: #0080E6;
}


/* div input:focus + label, div textarea:focus + label {
  /* background: #0080E6;
  color: white;
  font-size: 70%;
  padding: 1px 6px;
  z-index: 2; 
} 
*/

div textarea {
  display: block;
  resize: vertical;
}

div.go-bottom{
  margin-top: 16px;
}

div.go-bottom input, div.go-bottom textarea {
  padding: 12px 12px 12px 12px;
}
/* div.go-bottom label {
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
} */
/* div.go-bottom input:focus, div.go-bottom textarea:focus {
  padding: 4px 6px 20px 6px;
} */
/* div.go-bottom input:focus + label, div.go-bottom textarea:focus + label {
  top: 100%;
  margin-top: -16px;
} */

div.go-right label {
  top: 2px;
  right: 100%;
  width: 100%;
  margin-right: -100%;
  bottom: 2px;
}
div.go-right input:focus + label, div.go-right textarea:focus + label {
  right: 0;
  margin-right: 0;
  width: 40%;
  padding-top: 5px;
}
</style> 