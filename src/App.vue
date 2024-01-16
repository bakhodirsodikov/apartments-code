<template>
  <div class="container-fluid text-center" >
    <header class="header">
      <ul class="nav nav-pills justify-content-center">
        <li class="nav-item" v-for="(titles, id) in header" :key="id">
          <a class="nav-link " aria-current="page" href="#" 
          @click="headerClicked(id)" 
          :class="{active : clickedLinkInHeader == titles }">{{ titles }}</a>
        </li>
      </ul>
    </header>
    <main v-if="clickedLinkInHeader === 'Шахматка'">
      <div class="filter__container d-flex flex-column flex-md-row my-4 justify-content-md-between">
        <div class="room__filter-container d-flex flex-column justify-content-start m-2">
          <p class="m-0">Кол-во комнаты</p>
          <div class="number__rooms d-flex align-items-center">
            <div class="num__container d-flex align-items-center">
              <label for="appartOne" class="checkbox">
                <input type="checkbox" class="checkbox__input" id="appartOne" v-model="filters.appartOne">
                <span class="checkbox__box">1 </span>
              </label>
              <label for="appartTwo" class="checkbox">
                <input type="checkbox" class="checkbox__input" id="appartTwo" v-model="filters.appartTwo">
                <span class="checkbox__box">2</span>
              </label>
              <label for="appartThree" class="checkbox">
                <input type="checkbox" class="checkbox__input" id="appartThree" v-model="filters.appartThree">
                <span class="checkbox__box">3</span>
              </label>
              <label for="appartFour" class="checkbox">
                <input type="checkbox" class="checkbox__input" id="appartFour" v-model="filters.appartFour">
                <span class="checkbox__box">4</span>
              </label>
            </div>
          </div>
        </div>
        <div class="room__filter-container d-flex flex-column justify-content-start m-2">
          <p class="m-0">Тип квартиры</p>
          <div class="dropdown filter__dropdown">
            <a class="btn btn-info dropdown-toggle w-100" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              {{ typeApparts }}
            </a>
            <ul class="dropdown-menu w-100 dropdown__content">
              <li><a class="dropdown-item" href="#" 
                v-for="(type, idx) in type" 
                :key="idx"
                @click="typeApparts = type">
                  {{ type }}
                </a></li>
            </ul>
          </div>
        </div>
        <div class="room__filter-container d-flex flex-column justify-content-start m-2">
          <p class="m-0">Площадь в кв.м</p>
          <div class="input-group d-flex">
            <input type="number" class="form-control square__filter" placeholder="от" v-model="filters.squareFrom">
            <input type="number" class="form-control square__filter" placeholder="до" v-model="filters.squareBefore">
          </div>
        </div>
        <div class="color-meanig d-flex align-items-center">
          <div class="d-flex flex-row mx-1">
            <span class="color free"></span> &nbsp;
            <p class="m-0">Свободно</p>
          </div>
          <div class="d-flex flex-row mx-1">
            <span class="color booked"></span> &nbsp;
            <p class="m-0">Забронированные</p>
          </div>
          <div class="d-flex flex-row mx-1">
            <span class="color sold"></span> &nbsp;
            <p class="m-0">Проданные</p>
          </div>
          <div class="d-flex flex-row mx-1">
            <span class="color not-available"></span> &nbsp;
            <p class="m-0">Недоступные</p>
          </div>
        </div>
      </div>
      <div class="content__container d-flex flex-column">
        <div class="info__container d-flex justify-content-around">
          <h6>Дом: {{nameAppart}}</h6>
          <h6>Найдено: {{ foundApparts }}</h6>
          <h6>Свободно: {{ freeApparts }}</h6>
        </div>
        <div class="content d-flex ">
          <div class="num__of-loor d-flex flex-column">
            <p class="">№</p>
            <div class="num-floor d-flex flex-column-reverse">
              <p class="" v-for="num in floorForNum" :key="num.id">{{ num }}</p>
            </div>
          </div>
          <div class="entrance d-flex flex-column border-end" 
          v-for="(entrance, idx) in house" 
          :key="idx">
            <div class="mb-3">Подъезд {{ idx + 1 }}</div>
            <div class="floors-container d-flex flex-column-reverse h-100">
              <div class="floor d-flex justify-content-around mb-3" v-for="floor in entrance" :key="floor.id">
                <div class="apparts d-flex justify-content-center" 
                v-for="appart in floor" :key="appart.room">
                  <span class="not-available"
                  :class="{'free' : appart.free === 'yes', 'booked' : appart.free === 'booked', 'sold' : appart.free === 'sold', 'disabled': appart.disabled == true}">
                    {{ appart.room }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>



<style src="./style/app.css">

</style>

<script src="./main.js">

</script>