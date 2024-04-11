<template>
  <div class="container is-widescreen">
    <nav class="navbar is-transparent">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img  src="img/logonoso.svg" alt="Logo">
          NosoExplorer
        </a>
        <div class="navbar-burger js-burger" data-target="navbarExampleTransparentExample">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="navbarExampleTransparentExample" class="navbar-menu">
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            Blockchain
          </a>
          <div class="navbar-dropdown">
            <a class="navbar-item">
              Blocks
            </a>
            <a class="navbar-item">
              Transactions
            </a>
            <a class="navbar-item">
              Masternodes
            </a>
            <hr class="navbar-divider">
            <a class="navbar-item">
              Top Accounts
            </a>
            <a class="navbar-item">
              Statistics
            </a>
          </div>
        </div>

        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            Resources
          </a>
          <div class="navbar-dropdown">
            <a class="navbar-item">
              Wallets
            </a>
            <a class="navbar-item">
              Exchanges
            </a>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="field is-grouped">
              <div class="field has-addons">
                <div class="control has-icons-left ">
                  <input class="input" type="text" placeholder="Address / Tx ID / Block ID">
                  <span class="icon is-small is-left">
                    <i class="fas fa-search fa-xs"></i>
                  </span>
                </div>


              </div>
              <div class="dropdown">
                <div class="dropdown-trigger">
                  <button class="button" aria-haspopup="true" aria-controls="dropdown-menu3">
                    <span>Mainnet</span>
                    <span class="icon is-small">
                      <i class="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                  </button>
                </div>
                <div class="dropdown-menu" id="dropdown-menu3" role="menu">
                  <div class="dropdown-content">
                    <a href="#" class="dropdown-item"> Testnet </a>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>

  </div>
</template>

<script>
document.addEventListener('DOMContentLoaded', function () {

  var dropdown = document.querySelector('.dropdown');

  dropdown.addEventListener('click', function (event) {
    event.stopPropagation();
    dropdown.classList.toggle('is-active');
  });
});

</script>
