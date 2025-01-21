<template>
  <div>
    <div class="container mt-3" id="panelbusqueda">
      <!--    <p>IDpaciente: {{ iduser }}</p>
      <p>IDips: {{ idips }}</p>
      <p>IDprof: {{ idprof }}</p> -->

      <div class="row">
        <h3 class="centrarcontenido">Historia Clinica</h3>
      </div>
      <div class="container centrarcontenido">
        <div class="row">
          <div class="col-10">
            <div class="container">
              <h5>Ingrese la identificacion del paciente a consultar</h5>
              <div class="row">
                <div class="col-5">
                  <select
                    class="form-select form-select-sm textarea"
                    id="inputGroupSelect01"
                    v-model="B_tipodoc"
                  >
                    <option selected value="0">Tipo Doc</option>
                    <option value="CC">CC</option>
                    <option value="TI">TI</option>
                    <option value="CE">CE</option>
                    <option value="PA">PAS</option>
                  </select>
                </div>
                <div class="col-5">
                  <input
                    type="number"
                    class="form-control form-control-sm textarea"
                    id="text_numdoc"
                    placeholder="# Documento"
                    v-model="B_numdoc"
                  />
                </div>
                <div class="col-2">
                  <button
                    class="btn btn-success btn-sm"
                    @click="BTN_Buscar_paciente()"
                    :disabled="BuscarP_isButtonDisabled"
                  >
                    Buscar
                  </button>
                </div>
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- **************************************************************************************************** -->
    <div id="register">
      <h6 class="display-6 text-center">Paciente no Encontrado !!!</h6>
      <Registro />
    </div>

    <div class="container">
      <h6 class="display-6">Registro de Historias clinicas</h6>
      <div class="table-responsive">
        <table class="table table-sm">
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Diagostico</th>
              <th>Tipo consulta</th>
              <th>Profesional</th>
              <th>Opc</th>
            </tr>
          </thead>
          <tbody class="table-group-divider">
            <tr>
              <td>vv</td>
              <td>vv</td>
              <td>vv</td>
              <td>ramon vertel</td>
              <td>
                <button class="btn btn-sm btn-danger">
                  <i class="bi bi-trash-fill"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import HCdetallada from "./h_clinica.vue";

import Registro from "./registroForm.vue";
export default {
  data: () => ({
    registrado: 1,
  }),

  created() {
    // Recuperar el parámetro 'id' de la ruta
    this.iduser = this.$route.params.idpaciente || "13862306";
    this.idips = this.$route.params.idips || "1";
    this.idprof = this.$route.params.idprof || "2";
  },
};
</script>

<style></style>
