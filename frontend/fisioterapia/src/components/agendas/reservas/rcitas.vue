<template>
  <!-- datos del store auth
<hr>
{{ user }}
<hr>

<hr>
id_ips :{{ id_ips }} - id_user: {{ id_user }}- rol: {{ rol }}- info:{{ info }}
<hr>

<hr>
{{ datapaciente }}
{{ dataAllCitasPaciente }}
<hr> -->
  <div>
    <div class="container">
      <div class="row vitrinahorizontal">
        <p>Seleccione la agenda a gestionar</p>
        <div class="col-12">
          <div class="card-container">
            <div
              class="card mb-2"
              v-for="agenda in dataAgendas"
              :key="agenda.id"
              @click="verListadoReservasByIdAgenda(agenda)"
            >
              <div
                class="card-content"
                v-bind:class="{
                  theme_clases: agenda.clase === 'clases',
                  theme_fisio: agenda.clase === 'fisioterapia',
                  theme_consulta: agenda.clase === 'consulta',
                }"
              >
                <h5 class="card_titulo">{{ getDayOfWeek(agenda.fecha) }}</h5>
                <hr />
                <div class="container card_detalle">
                  <h6>{{ agenda.fecha }}</h6>
                  <h6>{{ agenda.clase }}</h6>

                  <p>{{ verNombreProfesional(agenda.id_profesional) }}</p>
                </div>
                <hr />
                <div class="container card_contador">
                  <h5>{{ contarregistros(agenda.id) }}</h5>
                  Reservadas
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <br />
    <div class="container">
      <div class="row mb-3">
        <div class="col-10">
          <h5>Detalle de Agenda Seleccionada</h5>
          <hr />
          <div class="row">
            <div class="col-3">Fecha:{{ agendaarray.fecha }}</div>
            <div class="col-3">Profesional:{{ agendaarray.profesional }}</div>
            <div class="col-3">Tipo:</div>
            <div class="col-3">Clase:</div>
          </div>
          <hr />
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-primary btn-sm">
            <i class="bi bi-plus-circle"></i>
          </button>
        </div>
      </div>
    </div>
    <div class="container" v-if="sortedListaCitasDia.length != ''">
      <table class="table table-sm table-striped">
        <thead class="table-dark">
          <tr>
            <th scope="col">Hora</th>
            <th scope="col">Nombre</th>
            <th scope="col">Celular</th>
            <th scope="col">Tipo</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="cita in this.sortedListaCitasDia" :key="cita.id">
            <th>{{ cita.hora }}</th>
            <td>{{ cita.paciente }}</td>
            <td>{{ cita.telpaciente }}</td>
            <td>{{ cita.tipo }}</td>
          </tr>
        </tbody>
      </table>
      <br />
    </div>

    <br />

    <div class="container" style="background-color: #3453">
      <div class="container">
        <div class="row">
          <div class="container">
            <br />
            <h5>Selecciona tipo, profesional, fecha y hora de la reserva</h5>
            <div class="row">
              <div class="col-6 col-md-3">
                <select
                  class="form-select form-select-sm textarea"
                  id="inputGroupSelect_treserva"
                  v-model="t_reserva"
                  @change="filtarProf()"
                >
                  <option selected value="">Tipo de Reserva</option>
                  <option value="fisioterapia">Fisioterapia</option>
                  <option value="consulta">Consulta</option>
                  <option value="clases">Clase</option>
                </select>
              </div>
              <div class="col-6 col-md-3">
                <select
                  class="form-select form-select-sm textarea"
                  id="inputGroupSelect02"
                  v-model="p_reserva"
                  @change="filtrarFechasByProf()"
                >
                  <option selected value="">Profesionall</option>
                  <option
                    v-for="profactivo in this.profactivos"
                    :key="profactivo.id"
                    :value="profactivo.id"
                  >
                    {{ profactivo.name1 }} {{ profactivo.apell1 }}
                  </option>
                </select>
              </div>
              <div class="col-6 col-md-3">
                <select
                  class="form-select form-select-sm textarea"
                  id="miSelect"
                  v-model="f_reserva"
                  @change="VerListadoCitasAsignadas()"
                >
                  <option selected value="">Dia de reserva</option>
                  <option
                    v-for="fecha in this.fechasActivas"
                    :key="fecha.id"
                    :value="fecha.id"
                  >
                    {{ fecha.fecha }}
                  </option>
                </select>
              </div>

              <div class="col-6 col-md-3">
                <div class="input-group input-group-sm mb-3">
                  <span class="input-group-text" id="inputGroup-sizing-sm"
                    >Hora:</span
                  >
                  <input
                    type="time"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                    v-model="listahora"
                  />
                </div>
              </div>

              <button
                type="button "
                class="btn btn-success btn-sm"
                :disabled="GuardarR_isButtonDisabled"
              >
                Guardar cita
              </button>
            </div>
          </div>
          <br />
        </div>
      </div>
    </div>

    <div class="container">
      <br />
      <div class="card">
        <div class="card-body">
          <h5>Realizar una reserva</h5>
          <p class="card-text">Ingrese la identificacion del paciente</p>

          <div class="row">
            <div class="col-4 col-md-3">
              <select
                class="form-select form-select-sm textarea"
                id="inputGroupSelect01"
                v-model="B_tipodoc"
              >
                <option selected value="">Tipo Doc</option>
                <option value="CC">CC</option>
                <option value="TI">TI</option>
                <option value="CE">CE</option>
                <option value="PA">PAS</option>
              </select>
            </div>
            <div class="col-5 col-md-3">
              <input
                type="number"
                class="form-control form-control-sm textarea"
                id="text_numdoc"
                placeholder="# Documento"
                v-model="B_numdoc"
              />
            </div>

            <div class="col-3 col-md-3">
              <button
                class="btn btn-success btn-sm"
                @click="BTN_Buscar_paciente()"
                :disabled="BuscarP_isButtonDisabled"
              >
                Buscar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- paciente NO existe -->
    <div v-if="this.existepaciente == 2">
      <br />
      <div class="container">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Registro de nuevo paciente</h5>
            <p class="card-text">
              Paciente no encontrado, ingrese los siguientes datos para
              registarlo y poder realizar una reserva
            </p>

            <div class="row">
              <div class="col-6">
                <div class="input-group mb-1">
                  <input
                    type="text"
                    class="form-control form-control-sm textarea"
                    id="text_1nombre"
                    placeholder="1 Nombre"
                    v-model="name1"
                  />
                </div>
              </div>
              <div class="col-6">
                <div class="input-group mb-1">
                  <input
                    type="text"
                    class="form-control form-control-sm textarea"
                    id="text_2nombre"
                    placeholder="2 Nombre"
                    v-model="name2"
                  />
                </div>
              </div>
              <div class="col-6">
                <div class="input-group mb-1">
                  <input
                    type="text"
                    class="form-control form-control-sm textarea"
                    id="text_1apelli"
                    placeholder="1 Apellido"
                    v-model="apell1"
                  />
                </div>
              </div>
              <div class="col-6">
                <div class="input-group mb-1">
                  <input
                    type="text"
                    class="form-control form-control-sm textarea"
                    id="text_2apell"
                    placeholder="2 Apellido"
                    v-model="apell2"
                  />
                </div>
              </div>
              <div class="col-6">
                <div class="input-group mb-1">
                  <input
                    type="number"
                    class="form-control form-control-sm textarea"
                    id="text_tel"
                    placeholder="Celular"
                    v-model="celular"
                  />
                </div>
              </div>
              <div class="col-6">
                <div class="input-group mb-1">
                  <input
                    type="text"
                    class="form-control form-control-sm textarea"
                    id="text_direccion"
                    placeholder="Email"
                    v-model="email"
                  />
                </div>
              </div>
              <div class="col-12">
                <div class="input-group mb-1">
                  <input
                    type="text"
                    class="form-control form-control-sm textarea"
                    id="text_direccion"
                    placeholder="Direccion"
                    v-model="dir"
                  />
                </div>
              </div>
              <div class="col-12">
                <div class="input-group input-group-sm mb-3">
                  <span class="input-group-text" id="inputGroup-sizing-sm"
                    >F Nacimiento:</span
                  >
                  <input
                    type="date"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                    v-model="fnacimiento"
                  />
                </div>
              </div>
            </div>
            <button
              class="btn btn-warning btn-sm"
              @click="cancelar_cerrarmodal()"
            >
              Cancelar
            </button>
            <button
              class="btn btn-success btn-sm"
              @click="BTN_registar_Paciente()"
              :disabled="Guardar_p_isButtonDisabled"
            >
              Registrar cliente
            </button>
          </div>
        </div>
      </div>
    </div>

    <br />
    <!-- paciente SI existe -->
    <div class="container" v-if="this.existepaciente == 1">
      <div class="card">
        <div class="card-body">
          <div class="container">
            <h5>Datos del usuario</h5>

            <table class="table table-sm">
              <thead>
                <tr>
                  <th>Documento</th>
                  <th>Nombre</th>

                  <th>Opc</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="pac in datapaciente" :key="pac.id">
                  <td>{{ pac.numdoc }}</td>
                  <td>{{ pac.name1 }} {{ pac.apell1 }}</td>
                  <td>
                    <button
                      class="btn btn-success btn-sm"
                      @click="BTN_Guardar_cita()"
                    >
                      Reservar
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <!--  -->

        <!--  -->
        <div
          class="container"
          style="background-color: #007acc"
          v-if="this.dataAllCitasPaciente.length > 0"
        >
          <br />
          <div>
            <h5>Citas Vigentes del Paciente</h5>
          </div>

          <table class="table table-sm table-striped">
            <thead class="table-danger">
              <tr>
                <th scope="col">Fecha</th>
                <th scope="col">Hora</th>
                <th scope="col">Tipo</th>
                <th scope="col">Profesional</th>
                <th>Opc</th>
              </tr>
            </thead>
            <tbody class="table-group-divider">
              <tr v-for="cita in this.citaspaciente" :key="cita.id">
                <td>{{ cita.fecha }}</td>
                <td>{{ cita.hora }}</td>
                <td>{{ cita.tipo }}</td>
                <td>{{ this.nombreProfesional(cita.idprofesional) }}</td>
                <td>
                  <button
                    class="btn btn-danger btn-sm"
                    @click="BTN_eliminar_ItemCita(cita.id)"
                  >
                    x
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <br />
    </div>
    <div class="container home">
      <router-link to="/dashboard">Home</router-link>
    </div>
    <br /><br /><br />
  </div>
</template>

<!-- --------------------------------------------------------------------------------------------------- -->

<script>
import registroPaciente from "@/components/usuarios/registro.vue";

import { mapActions, mapState } from "vuex";
import moment from "moment";
export default {
  data: () => ({
    //Auth
    //parametros de consulta de paciente
    B_tipodoc: "",
    B_numdoc: "",
    id: "",
    //formulario de reservas---
    t_reserva: "",
    p_reserva: "",
    f_reserva: "",
    profactivos: "",

    //-----------------------------
    //  list  -  parametro - valor
    //parametros de consulta pacientes
    paramsPaciente: [],
    //parametros de consulta profesionales
    paramsProfesionales: [],
    //parametros para buscar citas por fechas
    paramsFechasCitas: [],
    //--------------agendamiento
    fechasActivas: "",
    //----------------parametros para guardar citas
    params_GuardarFechaCita: [],
    //---variables de fecha
    paramsDelCitas: [],
    listahora: "",
    //---parametros consulta de tabla de citas del dia seleccionado
    params_citasDia: [],
    ListaCitasDia: [],
    desord_ListaCitasDia: [],
    paramsClear: [],
    // adicionar usuario
    name1: "",
    name2: "",
    apell1: "",
    apell2: "",
    celular: "",
    email: "",
    dir: "",
    fnacimiento: "",
    paramsGuardarPaciente: [],
    paramsClosetModalPac: [],
    paramsCitasPaciente: [],
    citaspaciente: [],
    idpaciente: "",
    valorSeleccionadoSelect: "",
    btnagendar: false,
    id_agenda: "",
    agendaarray: [],
    countListaReservas: "",
    params: [],
  }),

  /* --------------------------------------------------------------------------- */

  components: {
    registroPaciente,
  },

  /* ------------------------------------------------------------------------ */

  methods: {
    ...mapActions("Agendas", [
      "getDatabyParam",
      "loadProfesionales",
      "getDataByRangoSuperior",
      "createEntradaCitaNueva",
      "getDatarCitasFecha",
      "getDataUsersbyParam",
      "DeleteItem",
      "clearDataStoreA",
      "createEntradanewPaciente",
      "ClosetModalNewPaciente",
      "NewgetDataUsersbyParam",
      "getCountbyParam",
    ]),
    /* =================================================== */
    /* ---------PACIENTES---------------------------------------------------------------------------------------------------------------------------------------------------------- */

    BTN_Buscar_paciente() {
      this.idpaciente = this.B_tipodoc + this.B_numdoc;
      this.paramsPaciente = [
        {
          bd: "pacientes",
          parametro: "numdoc",
          valor: this.idpaciente,
          rta: "setStatePaciente",
        },
      ];
      this.getDataUsersbyParam(this.paramsPaciente);
      this.GetCitasVigentesPaciente();
    },

    async BTN_registar_Paciente() {
      this.idpaciente = this.B_tipodoc + this.B_numdoc;
      this.paramsGuardarPaciente = [
        {
          numdoc: this.idpaciente,
          name1: this.name1,
          name2: this.name2,
          apell1: this.apell1,
          apell2: this.apell2,
          celular: this.celular,
          email: this.email,
          dir: this.dir,
          fnacimiento: this.fnacimento,
          bd: "pacientes",
        },
      ];
      await this.createEntradanewPaciente(this.paramsGuardarPaciente[0]);
      this.BTN_Buscar_paciente();
    },

    /* =================================================== */
    /* ----------------PROFESIONALES--------------------------------------------------------------------------------------------------------------------------------------------------- */

    nombreProfesional(dataID) {
      const nombreProf = this.dataprofesionales.filter(
        (prof) => prof.id == dataID
      );
      const resultado = nombreProf[0];
      return resultado.name1 + " " + resultado.apell1;
    },

    BTN_Reservar_BuscarProfesionales() {
      this.btnagendar = true;
    },

    GetAllProfesionalesToIPS() {
      this.paramsProfesionales = [
        {
          bd: "profesionales",
          parametro: "id_ips",
          valor: this.id_ips,
          rta: "setStateProfesionales",
        },
      ];
      this.getDataUsersbyParam(this.paramsProfesionales);
    },

    filtarProf() {
      this.profactivos = this.dataprofesionales.filter(
        (profesional) => profesional.tipo == this.t_reserva
      );
      console.log("filtrado de profesionales", this.profactivos);
    },

    /* =================================================== */
    /* ------------------------------CITAS------------------------------------------------------------------------------------------------------------------------------------- */
    async GetCitasVigentesPaciente() {
      this.paramsCitasPaciente = [
        {
          bd: "citas",
          parametro1: "fecha",
          valor1: this.diaformatedfecha,
          rta: "setStateCitasPaciente",
        },
      ];
      await this.NewgetDataUsersbyParam(this.paramsCitasPaciente);
      this.filtrarcitasPaciente_reservadas();
      this.VerListadoCitasAsignadas();
    },

    filtrarcitasPaciente_reservadas() {
      console.log("ejecutando filtrocitaspaciente");
      this.citaspaciente = this.dataAllCitasPaciente.filter(
        (reg) => reg.numdoc == this.idpaciente
      );
      console.log("citas del paciente ", this.citaspaciente);
    },

    async BTN_eliminar_ItemCita(id) {
      this.paramsDelCitas = [
        {
          id: id,
          bd: "citas",
        },
      ];
      await this.DeleteItem(this.paramsDelCitas[0]);
      this.GetCitasVigentesPaciente();
    },

    async VerListadoCitasAsignadasNew(data) {
      this.params_citasDia = [
        {
          bd: "citas",
          parametro: "id_agenda",
          valor: data,
          rta: "setStateCitas",
        },
      ];
      this.desord_ListaCitasDia = await this.getDatabyParam(
        this.params_citasDia
      );
    },
    /* -------------------------------- */
    contarregistros() {},
    /* -------------------------------- */

    async BTN_Guardar_cita() {
      this.capturalabeldeselect();
      this.btnagendar = false;
      this.params_GuardarFechaCita = [
        {
          paciente:
            this.datapaciente[0].name1 + " " + this.datapaciente[0].apell1,
          numdoc: this.datapaciente[0].numdoc,
          telpaciente: this.datapaciente[0].celular,
          estado: "0",
          hora: this.listahora,
          id_agenda: this.f_reserva,
          tipo: this.t_reserva,
          fecha: this.valorSeleccionadoSelect,
          idprofesional: this.p_reserva,
          bd: "citas",
        },
      ];
      await this.createEntradaCitaNueva(this.params_GuardarFechaCita[0]);
      this.GetCitasVigentesPaciente();
      this.vaciarcamposReservas();
    },

    filtrarFechasByProf() {
      console.log(" datos agendas cargados", this.dataAgendas);

      this.fechasActivas = this.dataAgendas.filter(
        (registro) =>
          registro.id_profesional === this.p_reserva &&
          registro.clase === this.t_reserva
      );
      console.log("Fechas del profesional activas:", this.fechasActivas[0]);
      this.desord_ListaCitasDia = [];
      this.f_reserva = "";
    },

    /*  GetAllcitasToPaciente() {
             console.log("ejecutando buscarallcitas pacientes")
             this.paramsCitasPaciente = [{
                 bd: "citas",
                 parametro1: "fecha",
                 valor1: this.diaformatedfecha,
                 rta: "setStateCitasPaciente"
             }]
             this.NewgetDataUsersbyParam(this.paramsCitasPaciente);

         }, */

    Get_Agendamiento_pacientes_fecha() {
      this.paramsFechasCitas = [
        {
          bd: "agendas",
          parametro: "fecha",
          valor: this.diaformatedfecha,
          rta: "setStateAgendas",
        },
      ];
      this.getDataByRangoSuperior(this.paramsFechasCitas);
    },
    /* =================================================== */
    /* -------------------AGENDAS----------------------------------------------------------------------------------------------------------------------------------------------- */

    capturalabeldeselect() {
      const selectElement = document.getElementById("miSelect");
      this.valorSeleccionadoSelect =
        selectElement.options[selectElement.selectedIndex].textContent;
    },

    /* =================================================== */
    /* ------------------SISTEMAS------------------------------------------------------------------------------------------------------------------------------------------------ */

    DeleteStore() {
      this.paramsClear[
        {
          ruta: "DeleteStoreM",
        }
      ];
      this.clearDataStoreA(this.paramsClear);
    },

    vaciarcamposReservas() {
      this.f_reserva = "";
      this.p_reserva = "";
      this.t_reserva = "";
      this.listahora = "";
      console.log("vaciando de campos del formulario de reservas");
    },

    getDayOfWeek(dateString) {
      const date = new Date(dateString);
      const days = [
        "Domingo",
        "Lunes",
        "Martes",
        "Miércoles",
        "Jueves",
        "Viernes",
        "Sábado",
      ];
      return days[date.getDay()];
    },

    verNombreProfesional(idprof) {
      const profesional = this.dataprofesionales.find(
        (prof) => prof.id === idprof
      );
      const name = profesional.name1 + " " + profesional.apell1;
      return name;
    },

    verListadoReservasByIdAgenda(id_agendas) {
      this.agendaarray = id_agendas;
      this.VerListadoCitasAsignadasNew(id_agendas.id);
    },
  },

  computed: {
    ...mapState("Agendas", [
      "datapaciente",
      "existepaciente",
      "dataprofesionales",
      "existeprofesionales",
      "dataCitas",
      "dataAgendas",
      "dataAllCitasPaciente",
    ]),
    ...mapState("Auth", ["user", "id_ips", "id_user", "rol", "info"]),

    sortedListaCitasDia() {
      return this.desord_ListaCitasDia.sort((a, b) => {
        const hourA = a.hora.split(":")[0];
        const hourB = b.hora.split(":")[0];
        return hourA - hourB;
      });
    },

    BuscarP_isButtonDisabled() {
      return !this.B_tipodoc || !this.B_numdoc;
    },

    GuardarR_isButtonDisabled() {
      return (
        !this.t_reserva || !this.p_reserva || !this.listahora || !this.f_reserva
      );
    },

    Guardar_p_isButtonDisabled() {
      return (
        !this.name1 ||
        !this.apell1 ||
        !this.celular ||
        !this.email ||
        !this.dir ||
        !this.fnacimiento
      );
    },

    /*  */
    formattedDate() {
      return moment(this.fecha_agenda).format("YYYY-MM-DD");
    },
    diaformatedfecha() {
      return moment(new Date()).format("YYYY-MM-DD");
    },
    /* Fecha a Dia de semana */

    /*  */
  },

  /* ------------------------------------------------------------------------ */

  created() {
    this.DeleteStore();
    this.GetAllProfesionalesToIPS();
    this.Get_Agendamiento_pacientes_fecha();
    /*  this.GetAllcitasToPaciente() */
  },
};
</script>

<style>
centrado {
  align-content: center;
}
</style>
