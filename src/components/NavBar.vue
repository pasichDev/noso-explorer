<template>
  <div class="container is-widescreen">
    <nav class="navbar is-transparent">
      <div class="navbar-brand">
        <a class="navbar-item" href="#/">
          <img src="img/logonoso.svg" alt="Logo">
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
            <a class="navbar-item" href="#/blocks">
              Blocks
            </a>
            <a class="navbar-item" href="#/transactions">
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
  <br />
</template>

<script>
document.addEventListener('DOMContentLoaded', () => {
  // Handle navbar burger toggle
  const navbarBurgers = document.querySelectorAll('.navbar-burger');
  navbarBurgers.forEach(el => {
    el.addEventListener('click', () => {
      const targetId = el.dataset.target;
      const targetEl = document.getElementById(targetId);

      el.classList.toggle('is-active');
      if (targetEl) {
        targetEl.classList.toggle('is-active');
      }
    });
  });

  // Handle dropdown toggle
  const dropdowns = document.querySelectorAll('.dropdown');
  dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', (event) => {
      event.stopPropagation();
      dropdown.classList.toggle('is-active');
    });
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', (event) => {
    const isDropdown = event.target.matches('.dropdown, .dropdown *');
    if (!isDropdown) {
      dropdowns.forEach(dropdown => {
        dropdown.classList.remove('is-active');
      });
    }
  });
});


</script>
