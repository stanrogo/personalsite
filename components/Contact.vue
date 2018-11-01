<template>
<section id="contact">
  <span class="contact-links">
    <span class="contact-link"><font-awesome-icon :icon="['fab', 'twitter']" />
      <a target="_blank" href="https://twitter.com/stanrogo">Twitter</a>
    </span> |
    <span class="contact-link"><font-awesome-icon :icon="['fab', 'linkedin']" />
      <a target="_blank" href="https://nl.linkedin.com/in/stanleyclark">LinkedIn</a>
    </span> |
    <span class="contact-link"><font-awesome-icon :icon="['fas', 'envelope']" />
      <a href="mailto:me@stanrogo.com?Subject=Hey%20Stanley%20!%20I%20was%20looking%20for%20me%20information" target="_top">me@stanrogo.com</a>
    </span> |
    <span class="contact-link"><font-awesome-icon :icon="['fab', 'skype']" />
      <a target="_blank" href="tel:+31647051992">+31647051992</a>
    </span>
  </span>
</section>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faLinkedin, faSkype } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faTwitter);
library.add(faLinkedin);
library.add(faSkype);
library.add(faEnvelope);

export default {
    name: 'Contact',
    components: {
      FontAwesomeIcon,
    },
};
</script>

<style lang="scss">
@import './assets/scss/variables';

#contact{
  .contact-links{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    max-width: 600px;
    margin: 0 auto;
  }

  .contact-link{
    padding: 0 1rem;
  }

  [class*="fa-"]{
    margin-right: 0.5rem;
  }
}
</style>
