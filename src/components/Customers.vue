<template>
    <div class="customers">

        <ul v-if="customers && customers.length > 0">
            <li v-for="(customer, index) in customers"
                :key="index">
                <icon name="person"
                      class="icon"
                      size="xxl"
                      :class="customer.contact_status"/>
                <p>{{customer.global_id}}</p>
            </li>
        </ul>

        <h3 v-else>
            You have no customers yet.
        </h3>

    </div>
</template>

<script>
    import Api from '../services/api';
    import Icon from './Generic/Icon/Icon';

    export default {
        name: 'Customers',
        data() {
            return {
                customers: []
            };
        },
        created() {
            Api.getCustomers().then(data => {
                this.customers = data.result;
            });
        },
        components: {
            Icon
        }
    };
</script>

<style scoped lang="scss">
    @import "../../src/assets/scss/colors";

    .customers {
    }

    ul {
        list-style: none;

        li {
            padding: 10px;
            margin: 10px 0;
            background: $color-gray-4;
            font-size: .9rem;
            display: flex;
            align-items: center;
        }

        .icon {
            margin-right: 15px;
            color: $color-red;

            &.online {
                color: $color-green;
            }
        }
    }

</style>
