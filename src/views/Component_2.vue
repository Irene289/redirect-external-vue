<template>
  <div class="about">
    <ul>
      <li>
        <h3>Redirect while create</h3>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Component_2',
  created() {
    window.location.href = 'https://google.com'
  }
}
</script>

