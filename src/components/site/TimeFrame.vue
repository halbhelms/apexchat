<template>
    <div class="time-frame">
        <label class="radio radio-before">
        
        <span class="radio__input">
            <input type="radio" name="timeframe" value="lastLogin" v-model="picked">
            <span class="radio__control"></span>
        </span>
        <span class="radio__label">Since last login</span>
        </label>

        <label class="radio radio-before">
        <span class="radio__input">
            <input type="radio" name="timeframe" value="last30" v-model="picked">
            <span class="radio__control"></span>
        </span>
        <span class="radio__label">Last 30 days</span>
        </label>

        <label class="radio radio-before">
        <span class="radio__input">
            <input type="radio" name="timeframe" value="last60" v-model="picked">
            <span class="radio__control"></span>
        </span>
        <span class="radio__label">Last 60 days</span>
        </label>
    </div>

    Picked: {{ picked }}
</template>

<script>
    export default {
        name: 'TimeFrame',

        components: {},

        props: [],

        data() {
            return {
                picked: 'one',
            }
        },

        methods: {},

        computed: {}
    }
</script>

<style scoped>
:root {
    color: rgb(0,138,230);
    font-size: 12px;
  /* --defaultColor: rgb(0,138,230); */
}

*,
*:before,
*:after {
  box-sizing: border-box;
}

/* *{outline: 1px dashed blue}; */

.time-frame {
    position: absolute;
    width: 400px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    justify-content: center;
}

.radio {
  display: grid;
  width: 140px;
  /* grid-template-columns: -webkit-min-content auto; */
  grid-template-columns: 1rem 1fr;
  grid-gap: 0.5em;
  font-size: .9rem;
  text-align: left;
  /* color: rgb(0,138,230); */
}
.radio:focus-within .radio__label {
  transform: scale(1.05);
  opacity: 1;
}

.radio__label {
  line-height: 1;
  transition: 200ms all ease-in-out;
  opacity: 0.8;
}

.radio__input {
  display: flex;
}
.radio__input input {
  opacity: 0;
  width: 0;
  height: 0;
}
.radio__input input:focus + .radio__control {
  box-shadow: 0 0 0 0.05em #fff, 0 0 0.15em 0.1em var(--defaultColor);
  color: rgb(0,138,230);
}

.radio-gradient input:checked + .radio__control {
  background: rgb(0,138,230);
}

.radio-before .radio__control {
  display: grid;
  place-items: center;
}
.radio-before input + .radio__control::before {
  content: "";
  width: 0.5em;
  height: 0.5em;
  box-shadow: inset 0.5em 0.5em rgb(0,138,230);;
  border-radius: 50%;
  transition: 200ms transform ease-in-out;
  transform: scale(0);
}
.radio-before input:checked + .radio__control::before {
  transform: scale(1);
}

.radio__control {
  display: block;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  border: 0.1em solid rgb(0,138,230);;
  transform: translateY(-0.05em);
}
</style>