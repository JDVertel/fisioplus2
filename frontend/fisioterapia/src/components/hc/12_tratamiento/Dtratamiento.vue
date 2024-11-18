<!-- hc12_tratamiento -->
<template>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button
        class="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#panelsStayOpen-collapse12"
        aria-expanded="false"
        aria-controls="panelsStayOpen-collapse12"
      >
  
        Tratamiento
      </button>
    </h2>
    <div id="panelsStayOpen-collapse12" class="accordion-collapse collapse">
      <div class="accordion-body">
        <div class="mb-3">
          <textarea
            class="form-control textarea"
            id="exampleFormControlTextarea1"
            rows="3"
            v-model="planTratamiento"
            placeholder="plan de tratamiento"
          ></textarea>
        </div>
        <div class="mb-3">
          <textarea
            class="form-control textarea"
            id="exampleFormControlTextarea1"
            rows="3"
            v-model="objetivos"
            placeholder="objetivos"
          ></textarea>
        </div>
        <button class="btn btn-warning" @click="guardarInfo">+ Guardar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      planTratamiento: "",
      objetivos: "",
      NewAntec: [],
      ArraySaveConsulta: [],
    };
  },
  methods: {
    AddAntec(tipo, enf, detalle) {
      let item = {
        tipo: tipo,
        enfermedad: enf,
        detalleenf: detalle,
      };
      this.NewAntec = [...this.NewAntec, item];
    },
    guardarInfo() {
      this.ArraySaveConsulta = [];
      const datos = {
        planTratamiento: this.planTratamiento,
        objetivos: this.objetivos,
      };

      for (let propiedad in datos) {
        if (datos[propiedad]) {
          let element = {
            [propiedad]: datos[propiedad],
          };
          this.ArraySaveConsulta = {
            ...this.ArraySaveConsulta,
            ...element,
          };
        }
      }

      console.log("Datos guardados:", this.ArraySaveConsulta);
      console.log("Array de Antecedentes:", this.NewAntec);
    },
  },
};
</script>
