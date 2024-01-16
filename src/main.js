import { createApp } from 'vue'
import App from './App.vue'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'

export default{
  name: 'App',
  data(){
    return {
      house: [
          [ //entrance
            [ //floor
              { //apartment
                room: 1,
                square: 50,
                free: 'yes',
                disabled: true
              },
              {
                room: 2,
                square: 65,
                free: 'yes',
                disabled: true
              },
              {
                room: 3,
                square: 85,
                free: 'sold',
                disabled: true
              },
              {
                room: 4,
                square: 95,
                free: 'yes',
                disabled: true
              }
            ],
            [
              //apartment
              {
                room: 1,
                square: 50,
                free: 'sold',
                disabled: true
              },
              {
                room: 2,
                square: 65,
                free: 'yes',
                disabled: true
              },
              {
                room: 3,
                square: 85,
                free: 'yes',
                disabled: true
              },
              {
                room: 4,
                square: 95,
                free: 'yes',
                disabled: true
              }
            ],
            [
              //apartment
              {
                room: 1,
                square: 50,
                free: 'yes',
                disabled: true
              },
              {
                room: 2,
                square: 65,
                free: 'yes',
                disabled: true
              },
              {
                room: 3,
                square: 85,
                free: 'yes',
                disabled: true
              },
              {
                room: 4,
                square: 95,
                free: 'yes',
                disabled: true
              }
            ],
            [ //floor
              { //apartment
                room: 1,
                square: 50,
                free: 'yes',
                disabled: true
              },
              {
                room: 2,
                square: 65,
                free: 'sold',
                disabled: true
              },
              {
                room: 3,
                square: 85,
                free: 'yes',
                disabled: true
              },
              {
                room: 4,
                square: 95,
                free: 'yes',
                disabled: true
              }
            ],
            [
              //apartment
              {
                room: 1,
                square: 50,
                free: 'yes',
                disabled: true
              },
              {
                room: 2,
                square: 65,
                free: 'yes',
                disabled: true
              },
              {
                room: 3,
                square: 85,
                free: 'yes',
                disabled: true
              },
              {
                room: 1,
                square: 95,
                free: 'booked',
                disabled: true
              }
            ],
            [
              //apartment
              {
                room: 1,
                square: 50,
                free: 'sold',
                disabled: true
              },
              {
                room: 2,
                square: 65,
                free: 'yes',
                disabled: true
              },
              {
                room: 3,
                square: 85,
                free: 'yes',
                disabled: true
              },
              {
                room: 4,
                square: 95,
                free: 'sold',
                disabled: true
              }
            ],
            [ //floor
              { //apartment
                room: 1,
                square: 50,
                free: 'yes',
                disabled: true
              },
              {
                room: 2,
                square: 65,
                free: 'yes',
                disabled: true
              },
              {
                room: 3,
                square: 85,
                free: 'yes',
                disabled: true
              },
              {
                room: 4,
                square: 95,
                free: 'booked',
                disabled: true
              }
            ],
            [
              //apartment
              {
                room: 1,
                square: 50,
                free: 'yes',
                disabled: true
              },
              {
                room: 2,
                square: 65,
                free: 'yes',
                disabled: true
              },
              {
                room: 3,
                square: 85,
                free: 'yes',
                disabled: true
              },
              {
                room: 4,
                square: 95,
                free: 'yes',
                disabled: true
              }
            ],
            [
              //apartment
              {
                room: 1,
                square: 50,
                free: 'yes',
                disabled: true
              },
              {
                room: 2,
                square: 65,
                free: 'booked',
                disabled: true
              },
              {
                room: 3,
                square: 85,
                free: 'yes',
                disabled: true
              },
              {
                room: 4,
                square: 95,
                free: 'yes',
                disabled: true
              }
            ],
          ],
          [ //entrance
            [ //floor
              { //apartment
                room: 1,
                square: 50,
                free: 'booked',
                disabled: true
              },
              {
                room: 2,
                square: 65,
                free: 'yes',
                disabled: true
              },
              {
                room: 3,
                square: 85,
                free: 'booked',
                disabled: true
              },
              {
                room: 4,
                square: 95,
                free: 'yes',
                disabled: true
              }
            ],
            [
              //apartment
              {
                room: 1,
                square: 50,
                free: 'yes',
                disabled: true
              },
              {
                room: 4,
                square: 65,
                free: 'yes',
                disabled: true
              },
              {
                room: 3,
                square: 85,
                free: 'booked',
                disabled: true
              },
              {
                room: 4,
                square: 95,
                free: 'yes',
                disabled: true
              }
            ],
            [
              //apartment
              {
                room: 2,
                square: 50,
                free: 'booked',
                disabled: true
              },
              {
                room: 4,
                square: 65,
                free: 'sold',
                disabled: true
              },
              {
                room: 3,
                square: 85,
                free: 'yes',
                disabled: true
              },
              {
                room: 4,
                square: 95,
                free: 'yes',
                disabled: true
              }
            ],
            [ //floor
              { //apartment
                room: 1,
                square: 50,
                free: 'yes',
                disabled: true
              },
              {
                room: 2,
                square: 65,
                free: 'booked',
                disabled: true
              },
              {
                room: 3,
                square: 85,
                free: 'not-available',
                disabled: true
              },
              {
                room: 1,
                square: 95,
                free: 'booked',
                disabled: true
              }
            ],
            [
              //apartment
              {
                room: 1,
                square: 50,
                free: 'yes',
                disabled: true
              },
              {
                room: 2,
                square: 65,
                free: 'yes',
                disabled: true
              },
              {
                room: 3,
                square: 85,
                free: 'yes',
                disabled: true
              },
              {
                room: 4,
                square: 95,
                free: 'yes',
                disabled: true
              }
            ],
            [
              //apartment
              {
                room: 1,
                square: 50,
                free: 'yes',
                disabled: true
              },
              {
                room: 2,
                square: 65,
                free: 'yes',
                disabled: true
              },
              {
                room: 3,
                square: 85,
                free: 'yes',
                disabled: true
              },
              {
                room: 4,
                square: 95,
                free: 'yes',
                disabled: true
              }
            ],
            [ //floor
              { //apartment
                room: 1,
                square: 50,
                free: 'sold',
                disabled: true
              },
              {
                room: 2,
                square: 65,
                free: 'yes',
                disabled: true
              },
              {
                room: 3,
                square: 85,
                free: 'yes',
                disabled: true
              },
              {
                room: 2,
                square: 95,
                free: 'sold',
                disabled: true
              }
            ],
            [
              //apartment
              {
                room: 3,
                square: 50,
                free: 'yes',
                disabled: true
              },
              {
                room: 4,
                square: 65,
                free: 'yes',
                disabled: true
              },
              {
                room: 3,
                square: 85,
                free: 'yes',
                disabled: true
              },
              {
                room: 4,
                square: 95,
                free: 'yes',
                disabled: true
              }
            ],
            [
              //apartment
              {
                room: 2,
                square: 50,
                free: 'yes',
                disabled: true
              },
              {
                room: 3,
                square: 65,
                free: 'yes',
                disabled: true
              },
              {
                room: 2,
                square: 85,
                free: 'booked',
                disabled: true
              },
              {
                room: 3,
                square: 95,
                free: 'sold',
                disabled: true
              }
            ],
          ]
      ],
      header: ['Шахматка', 'Плитка', 'Список', 'Планировки', 'Планировки этажей', 'Фасады'],
      clickedLinkInHeader: '',
      numberOfRooms: [1, 2, 3, 4],
      numberOfRoomsForFilter: 'Выберите кол-во комнаты',
      type: ['Студия'],
      typeApparts: 'Выбрать',
      nameAppart: '',
      foundApparts: null,
      freeApparts: null,
      floorForNum: [1,2,3,4,5,6,7,8,9],
      filters: {
        appartOne: false,
        appartTwo: false,
        appartThree: false,
        appartFour: false,
        squareFrom: null,
        squareBefore: null
      },
    }
  },

  watch: {
    filters: {
      deep: true,
      handler: function() {
        this.filterHouse();
      }
    }
  },

  methods: {
    headerClicked(id){
      this.clickedLinkInHeader = this.header[id]
    },
    
    filterHouse(){
      this.house.forEach((entrance, idx) => {
        entrance.forEach((floor, id) => {
          floor.forEach((appart, idx) => {
            if ((this.filters.appartOne && appart.room === 1) || 
              (this.filters.appartTwo && appart.room === 2) || 
              (this.filters.appartThree && appart.room === 3) || 
              (this.filters.appartFour && appart.room === 4)) {
              appart.disabled = false
            }
            else{
              appart.disabled = true
            }
          })
        })
      });
    }
  }
}
createApp(App).mount('#app')
