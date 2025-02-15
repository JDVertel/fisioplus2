<template>
  <div class="row row-cols-2 row-cols-md-4 row-cols-xl-6 g-4">
    <div class="col" v-for="servicio in serviciosFiltrados" :key="servicio.nombre">
      <div class="card tarjeta" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        <img :src="`${servicio.img}`" class="card-img-top imagenservicio" alt="..." />

        <div class="cuerpo">
          <h5 class="card-title"><strong>{{ servicio.nombre }}</strong></h5>
          <p class="card-text">{{ servicio.desc }}.</p>
        </div>

        <div class="pie">
          <strong>$ {{ servicio.precio }}</strong>

        </div>
      </div>
      <!-- MODAL -->
      <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">Precios y planes</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-6">
                  <div class="row">
                    nombre
                  </div>
                  <div class="row">
                    imagen
                  </div>
                </div>
                <div class="col-6">


                  <table class="table table-sm tabla-compacta">
                    <thead>
                      <tr>
                        <th scope="col">Cant</th>
                        <th scope="col">Valor</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>$ 30.000</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>$ 55.000</td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>$ 800.00</td>
                      </tr>
                      <tr>
                        <th scope="row">4</th>
                        <td>$ 100.000</td>
                      </tr>
                      <tr>
                        <th scope="row">5</th>
                        <td>$ 130.000</td>
                      </tr>
                    </tbody>
                  </table>

                </div>
              </div>
            </div>
            <div class="modal-footer">
              <div class="row">
                <div class="col-6"> <button type="button" v-on:click="reservaCitasW(servicio.nombre, this.telefono1)">
                    Solicitar 
                    <img width="20" height="20" src="https://img.icons8.com/fluency/48/whatsapp.png" alt="whatsapp" />
                  </button></div>
                <div class="col-6"> <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* import {
    servicios
} from "../../firebase/bd"; */

import {
  mapActions,
  mapState
} from "vuex";

export default {
  data: () => ({
    /*   dataservicios: servicios, */
    telefono1: "3024708544",
  }),

  methods: {
    ...mapActions("vitrina", [
      "load_Vitrina",
      "updateVitrinaP",
      "updateVitrinaS",
      "createEntradaVitrina",
      "DeleteItemVitrina",
      "CambiarEstadoVitrina",
    ]),

    reservaCitasW(link, celular) {
      const url = `https://wa.me/${celular}?text=>>>>%20Hola%20me%20interesa%20reservar%20una%20cita%20de%20( ${link} )%20desde%20tu%20pagina%20web%20<<<<`;
      window.open(url);
    },
  },

  computed: {
    ...mapState({
      serviciosFiltrados: (state) =>
        state.vitrina.entry.filter(
          (v) =>
            (v.tipo == "terapia" || v.tipo == "consulta") && v.publicado == true
        ),
    }),
  },

  created() {
    this.load_Vitrina();
  },
};
</script>
