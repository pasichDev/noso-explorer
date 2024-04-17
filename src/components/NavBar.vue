<template>

  <div class="container-sm">
    <nav class="navbar navbar-expand-lg navbar-dark shadow-5-strong">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"> <img src="img/logonoso.svg" alt="Logo" width="48" height="48">
          NosoScan</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
          aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarScroll">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">

            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                data-bs-toggle="dropdown" aria-expanded="false">
                Blockchain
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Blocks</a></li>
                <li><a class="dropdown-item" href="#">Transactions</a></li>
                <li><a class="dropdown-item" href="#">Masternodes</a></li>
                <li>
                  <hr class="dropdown-divider">
                </li>
                <li><a class="dropdown-item" href="#">Top Accounts</a></li>
                <li><a class="dropdown-item" href="#">Statistics</a></li>

              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button"
                data-bs-toggle="dropdown" aria-expanded="false">
                Resources
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                <li><a class="dropdown-item" href="#">Wallets</a></li>
                <li><a class="dropdown-item" href="#">Exchanges</a></li>

              </ul>
            </li>

          </ul>

          <form class="d-flex">
            <div class="input-group mb-3">
              <input type="text" class="form-control" placeholder="Address / Tx ID / Block ID"
                aria-label="Address / Tx ID / Block ID" aria-describedby="button-addon2">
              <button class="btn btn-outline-light" type="button" id="button-addon2">Search</button>
            </div>
          </form>
        </div>
      </div>
    </nav>

  </div>
</template>
<script>
export default {

};
</script>
