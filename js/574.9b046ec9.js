"use strict";(self["webpackChunkhello_world"]=self["webpackChunkhello_world"]||[]).push([[574],{7574:function(t,e,a){a.r(e),a.d(e,{default:function(){return d}});var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"wow",rawName:"v-wow",value:{"animation-name":"bounceIn","animation-duration":"1s"},expression:"{ 'animation-name': 'bounceIn', 'animation-duration': '1s' }"}],attrs:{id:"pokemon-detail"}},[a("h5",{staticClass:"pokemon-name"},[t._v("Name: "+t._s(t.pokemonDetail.name))]),a("h5",{staticClass:"pokemon-number"},[t._v("Number: "+t._s(t.pokemonDetail.num))]),a("div",{staticClass:"table-infor"},[a("div",{staticClass:"pokemon-card"},[a("img",{directives:[{name:"wow",rawName:"v-wow",value:{"animation-name":"bounceIn","animation-duration":"1s"},expression:"{ 'animation-name': 'bounceIn', 'animation-duration': '1s' }"}],staticClass:"pokemon-img",attrs:{src:t.pokemonDetail.img,alt:""}})]),a("div",{staticClass:"box-detail-1"},[a("table",{staticClass:"pokemon-data"},[a("tbody",[a("tr",[a("th",{staticClass:"pokemon-height left"},[t._v("Height:")]),a("td",[t._v(t._s(t.pokemonDetail.height))])]),a("tr",[a("th",{staticClass:"pokemon-weight left"},[t._v("Weight:")]),a("td",[t._v(t._s(t.pokemonDetail.weight))])]),a("tr",[a("th",{staticClass:"pokemon-candy left"},[t._v("Candy:")]),a("td",[t._v(t._s(t.pokemonDetail.candy))])]),a("tr",[a("th",{staticClass:"pokemon-egg left"},[t._v("Egg:")]),a("td",[t._v(t._s(t.pokemonDetail.egg))])]),a("tr",[a("th",{staticClass:"pokemon-candy_count left"},[t._v("Candy count:")]),a("td",[t._v(t._s(t.pokemonDetail.candy_count))])])])])]),a("div",{staticClass:"box-detail-2"},[a("table",[a("tbody",[a("tr",[a("td",[t._v("Type:")]),t._l(t.pokemonDetail.type,(function(e){return a("td",{key:e,staticClass:"pokemon-type",class:[t.typeColor(e)]},[t._v(" "+t._s(e)+" ")])}))],2)])]),a("table",[a("tbody",[a("tr",[a("td",[t._v("Weaknesses:")]),t._l(t.pokemonDetail.weaknesses,(function(e){return a("td",{key:e,staticClass:"pokemon-type",class:[t.typeColor(e)]},[t._v(" "+t._s(e)+" ")])}))],2)])])])]),a("div",[t._v(" Pokemon Go: "),a("table",[a("tbody",[a("tr",[a("th",{staticClass:"pokemon-egg"},[t._v("egg")]),a("td",[t._v(t._s(t.pokemonDetail.egg))])]),a("tr",[a("th",{staticClass:"pokemon-spawn_chance"},[t._v("spawn_chance")]),a("td",[t._v(t._s(t.pokemonDetail.spawn_chance))])]),a("tr",[a("th",{staticClass:"pokemon-avg_spawns"},[t._v("avg_spawns")]),a("td",[t._v(t._s(t.pokemonDetail.avg_spawns))])]),a("tr",[a("th",{staticClass:"pokemon-spawn_time"},[t._v("spawn_time")]),a("td",[t._v(t._s(t.pokemonDetail.spawn_time))])]),a("tr",[a("th",{staticClass:"pokemon-multipliers"},[t._v("multipliers")]),a("td",[t._v(t._s(t.pokemonDetail.multipliers))])])])])]),a("div",{staticClass:"pokemon-Weaknesses"},[t._v("Evolution:")]),a("div",{staticClass:"pokemon-evolutions"}),a("div",{staticClass:"footer"},[t._v("©Pokemon.com All copyright")])])},n=[],s=a(6166),i=a.n(s);const l={Grass:"grassType",Poison:"poisonType",Fire:"fireType",Water:"waterType",Bug:"bugType",Flying:"flyingType",Ground:"groundType",Psychic:"psychicType",Electric:"electricType",Normal:"normalType",Dragon:"dragonType",Fighting:"fightingType",Rock:"rockType",Ice:"iceType",Dark:"darkType",Ghost:"ghostType"};var p={name:"PokemonDetail",data(){return{pokemonDetail:{}}},created(){},mounted(){i().get("https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json").then((t=>{const e=this.$route.params.id,a=t.data.pokemon.find((t=>t.id===Number(e)));this.pokemonDetail=a}))},methods:{typeColor(t){return l[t]}}},m=p,r=a(1001),c=(0,r.Z)(m,o,n,!1,null,null,null),d=c.exports}}]);
//# sourceMappingURL=574.9b046ec9.js.map