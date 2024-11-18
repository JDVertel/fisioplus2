<!-- hc10_analisis -->
<template>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button
        class="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#panelsStayOpen-collapse10"
        aria-expanded="false"
        aria-controls="panelsStayOpen-collapse10"
      >
 Analisis
      </button>
    </h2>
    <div id="panelsStayOpen-collapse10" class="accordion-collapse collapse">
      <div class="accordion-body">
        <div class="mb-3">
          <textarea
            class="form-control textarea"
            id="exampleFormControlTextarea1"
            rows="3"
            v-model="analisis"
            placeholder="analisis"
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
      analisis: "",
      ArraySaveConsulta: [],
    };
  },
  methods: {
    guardarInfo() {
      this.ArraySaveConsulta = [];
      const datos = {
        analisis: this.analisis,
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
    },
  },
};
</script>
