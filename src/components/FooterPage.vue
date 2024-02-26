<template>
    <div id="footer">
        <div id="site-map">
          <h2>Website-Karte</h2>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/about">Über uns</a></li>
            <li><a href="/contact">Kontakt</a></li>
            <li><a href="/impressum">Impressum</a></li>
            <!-- Fügen Sie weitere Links hinzu -->
          </ul>
        </div>
      
        <div id="social-media">
          <h2>Folgen Sie uns</h2>
          <a href="https://www.facebook.com/yourpage">Facebook</a>
          <a href="https://www.twitter.com/yourpage">Twitter</a>
          <a href="https://www.instagram.com/yourpage">Instagram</a>
        </div>
    </div>
</template>

<script>
export default {
  name: 'FooterPage',
}
</script>


<style>
#footer {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  background-color: #f8f8f8;
  border-top: 1px solid #ddd;
  margin-top: 16px;
  }

  #site-map ul {
    list-style-type: none;
    padding: 0;
  }

  #site-map ul li a, #social-media a {
    color: black;
    text-decoration: none;
  }

  #social-media a {
    display: block; /* Jeder Link wird auf einer neuen Zeile angezeigt */
  }
</style>