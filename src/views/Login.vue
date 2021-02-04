<template>
    <div class="login">
        <div class="contents">
            <div class="wrapper">
                <h2 class="title">User Login</h2>
                <form @submit.prevent="submitForm">
                    <div class="floating-form">
                        <!-- Title -->
                        <div class="floating-label">      
                            <input class="floating-input" type="text" placeholder=" " v-model="login.username">
                            <span class="highlight"></span>
                            <label>User Name</label>
                        </div>

                        <!-- Message -->
                        <div class="floating-label">      
                            <input class="floating-input" type="password" placeholder=" " v-model="login.password">
                            <span class="highlight"></span>
                            <label>Password</label>
                        </div>

                        <!-- Button -->
                        <div class="button">
                            <button class="btn fifth">
                                <span class="button-text">Login</span>
                            </button>
                        </div>
                    
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Login',

        components: {},

        props: [],

        data() {
            return {
                login: {
                    username: '',
                    password: ''
                }
            }
        },

        methods: {
            submitForm() {
                this.$store.dispatch('authenticate_login', this.login)
            }
        },

        computed: {}
    }
</script>

<style scoped>
.btn {
  background-color:lightblue;
  cursor: pointer;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-self: center;
      -ms-flex-item-align: center;
          align-self: center;
  line-height: 1;
  text-decoration: none;
  text-align: center;
  font-weight: 700;
}
.btn:hover, .btn:focus {
  color: #fff;
  outline: 0;
}

button {
    position: relative;
    /* margin-left: calc(60% - 6rem); */
    /* margin-top: 2rem; */
    margin: 0 auto;
}

h2.title {
    margin-left: 1rem;
    text-align: center;
    font-weight: 900;
}

h2 {
    text-align: center;
}

.button-text {
    position: relative;
    margin: auto;
}

.fifth {
  border-color: rgb(196,220,239);
  border-radius: 32px;
  color: rgb(0,138,230);
  position: relative;
  overflow: hidden;
  z-index: 1;
  -webkit-transition: color 150ms ease-in-out;
  transition: color 150ms ease-in-out;
}
.fifth:after {
  content: '';
  position: absolute;
  display: block;
  top: 0;
  left: 50%;
  -webkit-transform: translateX(-50%);
          transform: translateX(-50%);
  width: 0;
  height: 100%;
  background: rgb(0,138,230);
  z-index: -1;
  -webkit-transition: width 150ms ease-in-out;
  transition: width 300ms ease-in-out;
}
.fifth:hover {
  color: #fff;
  border: 0;
}
.fifth:hover:after {
  width: 110%;
}

/* My styling */
button {
    /* margin-top: 20px; */
    margin: 0 auto;
    width: 7rem;
    border: 1px solid navy;
    border-radius: 8px;
    background-color: rgb(0,138,230);
    font-weight: 600;
    color: rgb(196,220,239);
    /* text-align: center !important; */
    height: 1.5rem;
    border-color: navy !important;
}

form {
    margin-top: 20px;
    margin-left: 20px;
}

.login {
    height: 100vh;
    width: 100vw;
}

.contents {
    height: 300px;
    width: 500px;
    display: table;
    margin: 0 auto;
}

.wrapper {
    position: relative;
    margin-top: 5rem;
}

input {
    width: 50%;
    border: 1px solid silver;
    border-radius: 8px;
    /* padding-left: 4px; */
    font-family: 'Dosis', sans-serif;
    box-shadow:L 0 0 6px silver;
    /* margin: 0 auto !important; */
}

.floating-form {
    margin: 0 auto;
}




/* https://codepen.io/dannibla/pen/amgRNR styling */
.floating-form {
  width:50%;
  margin: 0 auto;
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