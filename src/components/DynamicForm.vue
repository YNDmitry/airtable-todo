<template>
  <transition name="pop" appear>
    <div class="fixed z-10">
      <div class="bg-black/50 py-10 text-white text-center z-70 relative">
        <h1 class="text-5xl">Add user</h1>
        <Form
          :validation-schema="schema"
          @submit="onSubmit"
          class="flex flex-col justify-center p-4 text-black w-30 h-1/2 mt-9"
        >
          <div
            class="
              flex flex-wrap
              justify-center
              flex-col
              m-auto
              mb-3
              mx-28
              text-left
            "
          >
            <div class="flex flex-col mx-2 my-3 overflow-hidden relative">
              <Field name="avatar" type="text" placeholder="Avatar" />
              <ErrorMessage name="avatar" class="text-red-400" />
            </div>
            <div class="flex flex-col mx-2 my-3">
              <Field name="name" type="text" placeholder="Name" />
              <ErrorMessage name="name" class="text-red-400" />
            </div>
            <div class="flex flex-col mx-2 my-3">
              <Field name="email" type="email" placeholder="Email" />
              <ErrorMessage name="email" class="text-red-400" />
            </div>
            <div class="flex flex-col mx-2 my-3">
              <Field name="spent" type="number" placeholder="Spent" />
              <ErrorMessage name="spent" class="text-red-400" />
            </div>
            <div class="flex flex-col mx-2 my-3">
              <Field as="select" name="country">
                <option value="">Select country</option>
                <option value="RU">Russia</option>
                <option value="NZ">New Zealand</option>
                <option value="USA">USA</option>
                <option value="AD">Amsterdam</option>
                <option value="GM">Germany</option>
                <option value="PS">Paris</option>
              </Field>
              <ErrorMessage name="country" class="text-red-400" />
            </div>
          </div>
          <button
            type="submit"
            class="w-1/6 m-auto bg-green-500 text-white py-2"
          >
            Add
          </button>
        </Form>
      </div>
      <button
        @click="hideForm"
        type="button"
        class="h-6 absolute right-5 top-2 text-4xl text-white"
      >
        <img
          src="../assets/images/times-solid.svg"
          width="25"
          class="text-white"
        />
      </button>
    </div>
  </transition>
  <transition name="fade" appear>
    <div
      @click="hideForm"
      class="fixed top-0 bottom-0 right-0 left-0 bg-black/80"
    ></div>
  </transition>
</template>

<script>
import * as yup from 'yup'
import { Field, Form, ErrorMessage } from 'vee-validate'
import { key, apiKey } from '../api/index'

export default {
  name: 'DynamicForm',

  components: {
    Field,
    Form,
    ErrorMessage,
  },

  data() {
    const schema = yup.object().shape({
      name: yup.string().required(),
      email: yup.string().email().required(),
      spent: yup.number().required().min(10),
      country: yup.string().required(),
    })
    return {
      schema,
      isStatus: null,
    }
  },

  emits: ['ldData', 'hide', 'submitAlert', 'setStatus'],

  methods: {
    hideForm() {
      this.$emit('hide')
    },

    setStatus() {
      this.$emit('setStatus', {
        status: this.isStatus,
      })
    },

    async onSubmit(currentValues) {
      const fields = {
        records: [
          {
            fields: {
              Name: currentValues.name,
              Email: currentValues.email,
              Spent: currentValues.spent,
              Country: currentValues.country,
              Avatar: [
                { url: currentValues.avatar ? currentValues.avatar : '' },
              ],
            },
          },
        ],
        typecast: true,
      }

      let res = await fetch(key, {
        method: 'POST',
        headers: {
          Authorization: 'Bearer ' + apiKey,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(fields),
      })

      this.isStatus = res.ok

      if (res.ok) {
        this.setStatus()
        this.hideForm()
        this.$emit('ldData')
        this.$emit('submitAlert')
      } else {
        this.$emit('submitAlert')
      }
    },
  },
}
</script>
