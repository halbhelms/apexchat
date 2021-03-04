<template>
    <div v-if="inDev" class="inDev">{{ $options.name }}</div>
    <div class="base-select" :style="style">
        <label v-if="_label" :for="_id">{{ _label }}</label>
        <select 
            :name="_name" 
            :id="_id" 
            :value="modelValue"
            v-bind="{
                ...$attrs,
                onChange: ($event) => { $emit('update:modelValue', $event.target.value) }
            }">
            <!-- options for select -->
            <option
                v-for="option in _options"
                :key="option"
                :value="option"
                :selected="option === modelValue"
            >
                {{ option }}
            </option>
        </select>
    </div>
</template>

<script>
    export default {
        name: 'BaseSelect',

        components: {},

        props: {
            _id: {
                type:String,
                required: true
            },

            _label: {
                type: String,
                required: false
            },

            modelValue: {
                type: [ String, Number ],
                default: '', 
            },

            _name: {
                type: String,
                default: 'base-select'
            },

            _options: {
                type: Array,
                required: true,
            },

            _styles: {
                type: Object,
                default: ()=> {},
            },
        },

        data() {
            return {
                defaultStyles: {
                    fontFamily: 'inherit',
                    fontSize: 'inherit',
                }
            }
        },

        methods: {},

        computed: {
            style() {
                return {...this.defaultStyles, ...this.$props._styles}
            }
        }
    }
</script>

<style scoped>
    label{
        margin-right: 6px;
    }    

    select {
        font-family: inherit;
    }

    /* .base-select {
        margin-top: 16px;
    }  */
</style>