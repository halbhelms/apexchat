<template>
<form @submit.prevent="submitForm">
    <div class="floating-form">
        <!-- Title -->
        <div class="floating-label">      
            <input class="floating-input" type="text" placeholder=" ">
            <span class="highlight"></span>
            <label>Title</label>
        </div>

        <!-- Message -->
        <div class="floating-label">      
            <textarea class="floating-input floating-textarea" placeholder=" "></textarea>
            <span class="highlight"></span>
            <label>Textarea</label>
        </div>

        <!-- Button -->
        <button>Save</button>   
    </div>
</form>
</template>

<script>
    export default {
        name: 'SupportForm',
        components: {},
        props: {},
        data() {
            return {
                title: " ",
                message: " "
            }
        },
        methods: {
            submitForm() {
                this.$store.dispatch('register_support_request', { title: this.title, message: this.message})
                this.title = " "
                this.message = " "
            }
        },
        computed: {}
    }
</script>

<style scoped>
/* My styling */
button {
    margin-top: 20px;
    width: 7rem;
    border: 1px solid navy;
    border-radius: 8px;
    background-color: rgb(0,138,230);
    font-weight: 600;
    color: rgb(196,220,239)
}
button:hover {
    background-color: blue;
}

form {
    margin-top: 20px;
    margin-left: 20px;
}

input {
    width: 50%;
    border: 1px solid silver;
    border-radius: 8px;
    padding-left: 4px;
    font-family: 'Dosis', sans-serif;
    box-shadow:L 0 0 6px silver;
}


/* https://codepen.io/dannibla/pen/amgRNR styling */
.floating-form {
  width:50%;
}

/****  floating-Lable style start ****/
.floating-label { 
  position:relative; 
  margin-bottom:20px; 
}
.floating-input , .floating-select {
  font-size:14px;
  padding:4px 4px;
  display:block;
  width:100%;
  /* height:30px; */
  /* background-color: transparent; */
  /* border:none; */
  /* border-bottom:1px solid #757575; */
}

.floating-input:focus , .floating-select:focus {
     outline:none;
     border-bottom:2px solid #5264AE; 
}

label {
  color:#999; 
  font-size:14px;
  font-weight:normal;
  position:absolute;
  pointer-events:none;
  left:5px;
  top:5px;
  transition:0.2s ease all; 
  -moz-transition:0.2s ease all; 
  -webkit-transition:0.2s ease all;
}

.floating-input:focus ~ label, .floating-input:not(:placeholder-shown) ~ label {
  top:-18px;
  font-size:14px;
  color:#5264AE;
}

.floating-select:focus ~ label , .floating-select:not([value=""]):valid ~ label {
  top:-18px;
  font-size:14px;
  color:#5264AE;
}

/* active state */
/* .floating-input:focus ~ .bar:before, .floating-input:focus ~ .bar:after, .floating-select:focus ~ .bar:before, .floating-select:focus ~ .bar:after {
  width:50%;
} */

*, *:before, *:after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

.floating-textarea {
   /* min-height: 30px;
   max-height: 260px;  */
   overflow:hidden;
  overflow-x: hidden; 
}

textarea {
    width: 50%;
    height: 200px;
    border: 1px silver;
    border-radius: 8px;
    padding-left: 4px;
}

/* highlighter */
.highlight {
  position:absolute;
  height:50%; 
  width:100%; 
  top:15%; 
  left:0;
  pointer-events:none;
  opacity:0.5;
}

/* active state */
.floating-input:focus ~ .highlight , .floating-select:focus ~ .highlight {
  -webkit-animation:inputHighlighter 0.3s ease;
  -moz-animation:inputHighlighter 0.3s ease;
  animation:inputHighlighter 0.3s ease;
}

/* animation */
@-webkit-keyframes inputHighlighter {
	from { background:#5264AE; }
  to 	{ width:0; background:transparent; }
}
@-moz-keyframes inputHighlighter {
	from { background:#5264AE; }
  to 	{ width:0; background:transparent; }
}
@keyframes inputHighlighter {
	from { background:#5264AE; }
  to 	{ width:0; background:transparent; }
}

</style>