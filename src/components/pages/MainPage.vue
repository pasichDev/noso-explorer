<template>
  <div class="container bg-light rounded-container ">

    <div class="container-sm ">
      <div class="row">
        <div class="col-xl-6 col-md-6 col-12 mb-4">
          <div class="card">
            <div class="card-body">
              <div class="align-items-center row">
                <div class="col">
                  <h6 class="text-uppercase text-muted mb-2">Block Height</h6>
                  <span class="h3 mb-0">158,562</span>
                  <span class="mt-n1 ms-2 badge bg-success-soft">+3.5%</span>
                </div>
                <div class="col-auto ">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round" class="feather feather-briefcase text-muted">
                    <g>
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-6 col-md-6 col-12  mb-4">
          <div class="card">
            <div class="card-body">
              <div class="align-items-center row">
                <div class="col ">
                  <h6 class="text-uppercase text-muted mb-2">Active Nodes</h6>
                  <span class="h3 mb-0">324</span>
                </div>
                <div class="col-auto">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round" class="feather feather-briefcase text-muted">
                    <g>
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-6 col-md-6 col-12  mb-4">
          <div class="card">
            <div class="card-body">
              <div class="align-items-center row">
                <div class="col">
                  <h6 class="text-uppercase text-muted mb-2"> Circulating Supply</h6>
                  <span class="h3 mb-0">7.94M / 21M</span>
                </div>
                <div class="col-auto">
                  <div class="chart chart-sparkline">
                    <canvas role="img" height="35" width="75"
                      style="display: block; box-sizing: border-box; height: 35px; width: 75px;"></canvas>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-6 col-md-6 col-12 mb-4">
          <div class="card">
            <div class="card-body">
              <div class="align-items-center row">
                <div class="col">
                  <h6 class="text-uppercase text-muted mb-2">Masternode Coins Locked</h6>
                  <span class="h3 mb-0">3.51M / 7.94M</span>
                </div>
                <div class="col-auto">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round" class="feather feather-clock text-muted">
                    <g>
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



    <div class="container bg-light rounded-container ">
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Transactions</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Blocks</a>
        </li>
      </ul>

    </div>
  </div>
</template>

<script>

export default {
  name: 'MainPage',


}
</script>