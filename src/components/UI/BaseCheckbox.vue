<template>
    <div v-if="inDev" class="inDev">{{ $options.name }}</div>
    <div :class="base-checkbox" :style="style">
        <input :id="_id" type="checkbox" :checked="modelValue" @change="$emit('update:modelValue', $event.target.checked)" :required="_optional ? false : true">
        <label :for="_id">{{ _label }}</label>
    </div>
</template>

<script>
    export default {
        name: 'BaseCheckbox',

        components: {},

        props: {
            _id: {
                type: String,
                required: true,
            },

            _label: {
                type: String,
                required: true,
            },

            _optional: {
                type: Boolean,
                default: true,
            },

            modelValue: {
                type: Boolean,
                default: false,
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
    input {
        margin-right: 6px;
        font-family: inherit;
    }

    .base-checkbox {
        outline: 1px solid red;
    }
</style>