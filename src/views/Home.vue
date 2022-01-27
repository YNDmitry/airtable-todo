<template>
  <section
    class="
      antialiased
      bg-gray-100
      text-gray-600
      h-screen
      px-4
      flex
      items-center
      justify-center
    "
  >
    <div class="flex flex-col justify-center h-full w-max min-w-full">
      <div
        class="
          w-full
          max-w-5xl
          mx-auto
          bg-white
          shadow-lg
          rounded-sm
          border border-gray-200
        "
      >
        <header class="px-5 py-4 border-b border-gray-100">
          <h2 class="font-semibold text-gray-800">Customers</h2>
        </header>
        <div class="text-center">
          <button
            @click="showForm"
            type="button"
            class="w-1/2 m-auto bg-green-500 text-white py-2 my-4"
          >
            I WANT TO ADD A USER
          </button>
        </div>
        <div class="p-3">
          <div class="overflow-x-auto">
            <table class="table-auto w-full">
              <thead
                class="text-xs font-semibold uppercase text-gray-400 bg-gray-50"
              >
                <tr>
                  <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-left">Name</div>
                  </th>
                  <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-left">Email</div>
                  </th>
                  <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-left">Spent</div>
                  </th>
                  <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-center">Country</div>
                  </th>
                  <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-center"></div>
                  </th>
                </tr>
              </thead>
              <h1 v-if="isLoading" class="p-2 m-auto">Loading...</h1>
              <h1 v-else-if="tableData.length <= 0" class="p-2 mx-auto">
                Customers is empty
              </h1>
              <tbody v-else class="text-sm divide-y divide-gray-100">
                <tr v-for="el in tableData" :key="el" :id="el.id">
                  <td class="p-2 whitespace-nowrap">
                    <div class="flex items-center">
                      <div
                        class="
                          w-10
                          h-10
                          flex
                          justify-center
                          flex-shrink-0
                          mr-2
                          sm:mr-3
                        "
                      >
                        <img
                          class="rounded-full object-cover"
                          :src="
                            el.fields.Avatar ? el.fields.Avatar[0].url : placeholderImage
                          "
                          width="40"
                          height="40"
                          :alt="el.fields.Name"
                        />
                      </div>
                      <div class="font-medium text-gray-800">
                        {{ el.fields.Name }}
                      </div>
                    </div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-left">{{ el.fields.Email }}</div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-left font-medium text-green-500">
                      {{ '$' + el.fields.Spent }}
                    </div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-lg text-center">
                      {{ el.fields.Country ? el.fields.Country : '-' }}
                    </div>
                  </td>
                  <td class="p-2 whitespace-nowrap text-center">
                    <button type="button" class="text-lg" @click="remove(el.id)">
                      <img
                        src="../assets/images/times-solid.svg"
                        width="10"
                        alt=""
                      />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <dynamic-form
      v-if="isForm"
      @ldData="loadData"
      @hide="showForm"
      @submitAlert="showAlert"
      @setStatus="getStatus"
    ></dynamic-form>
  </section>

  <the-alert ref="alert" :title="alertTitle" :status="alertStatus"></the-alert>
</template>

<script>
import { key, apiKey } from '../api/index'
import DynamicForm from '../components/DynamicForm.vue'
import TheAlert from '../components/TheAlert.vue'

export default {
  name: 'Home',
  
  components: {
    DynamicForm,
    TheAlert,
  },

  data() {
    return {
      isLoading: true,
      tableData: null,
      isForm: false,
      alertStatus: null,
      alertTitle: 'Done',
      placeholderImage:
        'https://api-private.atlassian.com/users/8f525203adb5093c5954b43a5b6420c2/avatar',
    }
  },

  mounted() {
    this.loadData()
    this.loading()
  },

  methods: {
    showAlert() {
      this.$refs.alert.show()
    },

    getStatus(data) {
      return (this.alertStatus = data.status)
    },

    loading() {
      if (this.tableData !== null) {
        this.isLoading = false
      } else {
        this.isLoading = true
      }
    },

    async loadData() {
      let response = await fetch(key)

      if (response.ok) {
        let json = await response.json()
        this.tableData = json.records
        this.isLoading = false
      } else {
        this.alertTitle = 'Error ' + response.status
        this.alertStatus = response.ok
        this.showAlert()
      }
    },

    async remove(id) {
      await fetch(
        `https://api.airtable.com/v0/appVgmiQc5iKntuOo/Tasks/${id}?api_key=${apiKey}`,
        {
          method: 'DELETE',
        }
      )

      const index = this.tableData.indexOf(id, 1)
      this.tableData.splice(index, 1)
    },

    showForm() {
      if (this.isForm === false) {
        this.isForm = true
      } else {
        this.isForm = false
      }
    },
  },
}
</script>
