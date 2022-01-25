<template>
  <div class="home">
    <SendMsg />
  </div>
</template>

<script>
// @ is an alias to /src
import SendMsg from '@/components/SendMsg.vue'

export default {
  name: 'Home',
  components: {
    SendMsg
  }
}
</script>
