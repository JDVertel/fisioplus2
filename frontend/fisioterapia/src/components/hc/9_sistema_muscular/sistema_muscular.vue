<!-- hc9_expmuscular -->
<template>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button
        class="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#panelsStayOpen-collapse9"
        aria-expanded="false"
        aria-controls="panelsStayOpen-collapse9"
      >
        Exploracion Muscular_ok
      </button>
    </h2>
    <div id="panelsStayOpen-collapse9" class="accordion-collapse collapse">
      <div class="accordion-body">
        
          <small>
            procedimiento actual diagnostico(funcional)fisioterapéutico pronóstico
            de enfermedad objetivos del tratamiento (generales y específicos) plan
            de atención y tratamientos observaciones.

          </small>
        
 
        <!--  -->

        <nav>
          <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <button
              class="nav-link active"
              id="nav-sist-muscular"
              data-bs-toggle="tab"
              data-bs-target="#nav-smuscular"
              type="button"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
            >
              Sistema Muscular
            </button>
            <button
              class="nav-link"
              id="nav-sist-muscular-general"
              data-bs-toggle="tab"
              data-bs-target="#nav-smusculargen"
              type="button"
              role="tab"
              aria-controls="nav-profile"
              aria-selected="false"
            >
              Eval Musc General
            </button>
            <button
              class="nav-link"
              id="nav-sist-muscular-detalle"
              data-bs-toggle="tab"
              data-bs-target="#nav-smusculardetall"
              type="button"
              role="tab"
              aria-controls="nav-contact"
              aria-selected="false"
            >
              Eval Musc Detallada
            </button>
          </div>
        </nav>
        <div class="tab-content" id="nav-tabContent">
          <div
            class="tab-pane fade show active"
            id="nav-smuscular"
            role="tabpanel"
            aria-labelledby="nav-sist-muscular"
            tabindex="0"
          >
            <br />
            <div class="row">
              <div class="col-12 col-md-6">
                <div class="mb-1">
                  <!--  -->
                  <select
                    v-model="tipoevaluacionM"
                    class="form-select form-select-sm textarea"
                    id="tipoevaluacionM"
                    @change="
                      busquedamuscular(
                        tipoevaluacionM,
                        data_smuscular,
                        'detalle'
                      )
                    "
                    aria-label="Default select example"
                  >
                    <option value="0">--Seleccione tipo de evaluacion--</option>
                    <option
                      v-for="item in data_smuscular"
                      :key="item.id"
                      :value="item.clase"
                    >
                      {{ item.clase }}
                    </option>
                  </select>
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="mb-1">
                  <!--  -->
                  <select
                    v-model="caracteristicaM"
                    class="form-select form-select-sm textarea"
                    id="gmuscular"
                    aria-label="Default select example"
                  >
                    <option value="0">--Seleccione caracteristica--</option>
                    <option v-for="i in consultamusc" :key="i.id" :value="i">
                      {{ i }}
                    </option>
                  </select>
                </div>
              </div>
            </div>

            <div class="mb-1">
              <textarea
                class="form-control form-control-sm textarea"
                id="exampleFormControlTextarea1"
                placeholder="Detalle"
                v-model="detalleM"
              ></textarea>
            </div>

            <button
              type="button"
              class="btn btn-primary btn-sm"
              v-if="tipoevaluacionM !='0' && caracteristicaM !='0' && detalleM !=''"
              @click="AddAntec('sistema_muscular', seval, caract, detalle)"
            >
             + Agregar
            </button>
          
            <div class="card">
              <div class="card-header">Registro</div>
              <table class="table table-sm">
                <thead>
                  <tr>
                    <th>Sistema</th>
                    <th>Evaluacion</th>
                    <th>Caracteristica</th>
                    <th>Detalle</th>
                    <th>Opc</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in NewAntec" :key="index">
                    <td>{{ item.sistema }}</td>
                    <td>{{ item.tipoEvaluacion }}</td>
                    <td>{{ item.caracteristica }}</td>
                    <td>{{ item.detalleenf }}</td>
                    <td>  <button
                          class="btn btn-sm btn-danger"
                          @click="eliminaritem(index)"
                        >
                          <i class="bi bi-trash-fill"></i>
                        </button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <!-- comienza aca -->
          <div
            class="tab-pane fade"
            id="nav-smusculargen"
            role="tabpanel"
            aria-labelledby="nav-sist-muscular-general"
            tabindex="0"
          >
          
              <br />
              <div class="row">
                <div class="col-12 col-md-5">
                  <div class="mb-1">
                    <select
                      class="form-select form-select-sm textarea"
                      id="emuscular"
                      aria-label="Small select example"
                      v-model="emuscular"
                      @change="
                        evalmuscular(emuscular, data_emuscular, 'musculo')
                      "
                    >
                      <option value="0">--Seleccione clase--</option>
                      <option
                        v-for="item in data_emuscular"
                        :key="item.id"
                        :value="item.clase"
                      >
                        {{ item.clase }}
                      </option>
                    </select>
                  </div>
                </div>
                <div class="col-12 col-md-5">
                  <div class="mb-1">
                    <select
                      class="form-select form-select-sm textarea"
                      id="emuscular_musc"
                      aria-label="Small select example"
                      v-model="musculo"
                    >
                      <option value="0">--Seleccione musculo--</option>
                      <option
                        v-for="ite in evalmusc"
                        :key="ite.id"
                        :value="ite"
                      >
                        {{ ite }}
                      </option>
                    </select>
                  </div>
                </div>

                <div class="col-12 col-md-2">
                  <div class="mb-1">
                    <select
                      v-model="eval_grado"
                      class="form-select form-select-sm textarea"
                      id="Ggmuscular"
                      aria-label="Small select example"
                    >
                      <option value="0">--Grado--</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>
                  <button 
              type="button"
                class="btn btn-primary btn-sm"
                v-if="emuscular !='0' && musculo !='0' && eval_grado !='0'"
                @click="
                  Addevalcuacion(
                    'eval_musc_general',
                    musculo,
                    eval_grado,
                    emuscular
                  )
                "
              >
                + Agregar
              </button>
                </div>
              
       
              <div class="row">
                <div class="col-12 col-md-6">
                  <div class="card">
                    <div class="card-header">Registro</div>

                    <table class="table table-sm">
                      <thead>
                        <tr>
                          <th>Eval</th>
                          <th>Clase</th>
                          <th>Musculo</th>
                          <th>Grado</th>
                          <th>Opc</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(ite, index) in NewAntec2" :key="index">
                          <td>{{ ite.sistema }}</td>
                          <td>{{ ite.clase }}</td>
                          <td>{{ ite.musculo }}</td>
                          <td>{{ ite.grado }}</td>
                          <td><button
                            class="btn btn-sm btn-danger"
                            @click="eliminaritemeval(index)"
                          >
                            <i class="bi bi-trash-fill"></i>
                          </button></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="col-12 col-md-6">
                  <div class="container">
                    <div class="col-12">
                      <div class="card">
                        <div class="card-header">Registro 1</div>
                        <table class="table table-sm">
                          <thead>
                            <tr>
                              <th>Eval</th>
                              <th>Clase</th>
                              <th>Musculo</th>
                              <th>Grado</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>Mark</td>
                              <td>1</td>
                              <td>Mark</td>
                            </tr>
                            <tr>
                              <td>Jacob</td>
                              <td>Jacob</td>
                              <td>Jacob</td>
                              <td>Jacob</td>
                            </tr>
                            <tr>
                              <td>Jacob</td>
                              <td>Jacob</td>
                              <td>Jacob</td>
                              <td>Jacob</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="card">
                        <div class="card-header">Registro 2</div>
                        <table class="table table-sm">
                          <thead>
                            <tr>
                              <th>Eval</th>
                              <th>Clase</th>
                              <th>Musculo</th>
                              <th>Grado</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Jacob</td>
                              <td>Jacob</td>
                              <td>Jacob</td>
                              <td>Jacob</td>
                            </tr>
                            <tr>
                              <td>Jacob</td>
                              <td>Jacob</td>
                              <td>Jacob</td>
                              <td>Jacob</td>
                            </tr>
                            <tr>
                              <td>Jacob</td>
                              <td>Jacob</td>
                              <td>Jacob</td>
                              <td>Jacob</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="nav-smusculardetall"
            role="tabpanel"
            aria-labelledby="nav-sist-muscular-detalle"
            tabindex="0"
          >
            
              <div class="accordion" id="accordionExpMuscular">
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseCuello"
                      aria-expanded="true"
                      aria-controls="collapsCuello"
                    >
                      Cuello
                    </button>
                  </h2>
                  <div
                    id="collapseCuello"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionExpMuscular"
                  >
                    <div class="accordion-body">
                      <div class="card">
                        <table class="table">
                          <thead>
                            <tr>
                              <th>movimiento</th>
                              <th>Izquierda</th>
                              <th>Derecha</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Extensión de la cabeza</td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>Extensión cervical</td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>Extensión combinada (cabeza y cervical)</td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>Flexión de la cabeza</td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>Flexión cervical</td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>Flexion combinada (cabeza y cervical)</td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>
                                Flexion y rotacion combinada
                                (esternocleidomastoideo)
                              </td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>Rotacion cervical</td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTronco"
                      aria-expanded="false"
                      aria-controls="collapseTronco"
                    >
                      Tronco
                    </button>
                  </h2>
                  <div
                    id="collapseTronco"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionExpMuscular"
                  >
                    <div class="accordion-body">
                      <div class="card">
                        <table class="table">
                          <thead>
                            <tr>
                              <th>movimiento</th>
                              <th>Izquierda</th>
                              <th>Derecha</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Extensión lumbar</td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>Extensión toráxica</td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>Extensión pélvica</td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>Flexión</td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>Rotacion</td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>Fuerza del diafragma</td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>
                                Inspiracion maxima menos espiracion completa
                                (prueba intercostal indirecta)
                              </td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>Tos espiración forzada indirecta</td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseHombro"
                      aria-expanded="false"
                      aria-controls="collapseHombro"
                    >
                      Hombro
                    </button>
                  </h2>
                  <div
                    id="collapseHombro"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionExpMuscular"
                  >
                    <div class="accordion-body">
                      <div class="card">
                        <table class="table">
                          <thead>
                            <tr>
                              <th>movimiento</th>
                              <th>Izquierda</th>
                              <th>Derecha</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Abdución y rotacion superior escapular</td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>Elevacion escapular</td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>Aduccion escapular</td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>Aduccion y rotacion inferior escapulares</td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>Flexión de hombro</td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>Extencion de hombro</td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>Elevacion parcial de hombro</td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>Abducción de hombro</td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>Abduccion horizontal de hombro</td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>Aduccion horizontal de hombro</td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>Rotacion externa de hombro</td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>Rotacion interna de hombro</td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseCodo"
                      aria-expanded="false"
                      aria-controls="collapseCodo"
                    >
                      Codo
                    </button>
                  </h2>
                  <div
                    id="collapseCodo"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionExpMuscular"
                  >
                    <div class="accordion-body">
                      <div class="card">
                        <table class="table">
                          <thead>
                            <tr>
                              <th>movimiento</th>
                              <th>Izquierda</th>
                              <th>Derecha</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Flexión</td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>Extensión</td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>Pronación</td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>Supinación</td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseMuneca"
                      aria-expanded="false"
                      aria-controls="collapseMuneca"
                    >
                      Muñeca
                    </button>
                  </h2>
                  <div
                    id="collapseMuneca"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionExpMuscular"
                  >
                    <div class="accordion-body">
                      <div class="card">
                        <table class="table">
                          <thead>
                            <tr>
                              <th>movimiento</th>
                              <th>Izquierda</th>
                              <th>Derecha</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Flexión</td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>Extención</td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>Desviacion radial</td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>Desviación cubital</td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseDedos"
                      aria-expanded="false"
                      aria-controls="collapseDedos"
                    >
                      Dedos de la mano
                    </button>
                  </h2>
                  <div
                    id="collapseDedos"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionExpMuscular"
                  >
                    <div class="accordion-body">
                      <div class="card">
                        <table class="table">
                          <thead>
                            <tr>
                              <th>movimiento</th>
                              <th>Izquierda</th>
                              <th>Derecha</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Flexión metacarpofalángica de dedo</td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>Flexión interfalángica proximal de dedo</td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>Flexión interfalángica distal de dedo</td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>Extensión metacarpofalángica de dedo</td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>Abducción de dedo</td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>aducción de dedo</td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>Flexión metacarpofalángica de pulgar</td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>Flexión interfalángica de pulgar</td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                            </tr>

                            <tr>
                              <td>Extensión interfalángica de pulgar</td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>Extensión interfalángica de pulgar</td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>Abducción carpometacarpiana del pulgar</td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>Aducción carpometarpiana del pulgar</td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>Aducción de pulgar</td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>Oposición de pulgar</td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>Oposición de meñique</td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseCadera"
                      aria-expanded="false"
                      aria-controls="collapseCadera"
                    >
                      Cadera
                    </button>
                  </h2>
                  <div
                    id="collapseCadera"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionExpMuscular"
                  >
                    <div class="accordion-body">
                      <div class="card">
                        <table class="table">
                          <thead>
                            <tr>
                              <th>movimiento</th>
                              <th>Izquierda</th>
                              <th>Derecha</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Flexión</td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>
                                Flexión, adbuccion y rotacion externa de cadera
                                con flexión de Rodilla (sartorio)
                              </td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>Extensión de cadera</td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>Extención de cadera (gluteo mayor)</td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>Abducción de cadera</td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>Abducción y flexión de cadera</td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>Aducción de cadera</td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>Rotación externa de cadera</td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>Rotación interna de cadera</td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseRodilla"
                      aria-expanded="false"
                      aria-controls="collapseRodilla"
                    >
                      Rodilla
                    </button>
                  </h2>
                  <div
                    id="collapseRodilla"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionExpMuscular"
                  >
                    <div class="accordion-body">
                      <div class="card">
                        <table class="table">
                          <thead>
                            <tr>
                              <th>movimiento</th>
                              <th>Izquierda</th>
                              <th>Derecha</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Flexión de la rodilla</td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>
                                Flexion de rodilla con rotacion externa de la
                                pierna
                              </td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>
                                Flexón de rodilla con rotacion interna de la
                                pierna
                              </td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>Extensión de la rodilla</td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTobillo"
                      aria-expanded="false"
                      aria-controls="collapseTobillo"
                    >
                      Tobillo
                    </button>
                  </h2>
                  <div
                    id="collapseTobillo"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionExpMuscular"
                  >
                    <div class="accordion-body">
                      <div class="card">
                        <table class="table">
                          <thead>
                            <tr>
                              <th>movimiento</th>
                              <th>Izquierda</th>
                              <th>Derecha</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Flexión plantar de tobillo</td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>Flexión plantar de tobillo (Sóleo)</td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>Flexión dorsal e inversión de pie</td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>Inversion de pie</td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>Eversión con flexión plantar</td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>Eversión con flexión dorsal</td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Grado"
                                  class="form-control"
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsededospies"
                        aria-expanded="false"
                        aria-controls="collapsededospies"
                      >
                        Dedos de los Pies
                      </button>
                    </h2>
                    <div
                      id="collapsededospies"
                      class="accordion-collapse collapse"
                      data-bs-parent="#accordionExpMuscular"
                    >
                      <div class="accordion-body">
                        <div class="card">
                          <table class="table">
                            <thead>
                              <tr>
                                <th>movimiento</th>
                                <th>Izquierda</th>
                                <th>Derecha</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  Flexión metatarsofalángica de dedo gordo
                                </td>
                                <td>
                                  <input
                                    type="number"
                                    placeholder="Grado"
                                    class="form-control"
                                  />
                                </td>
                                <td>
                                  <input
                                    type="number"
                                    placeholder="Grado"
                                    class="form-control"
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>Flexion metatarsofalángica de los dedos</td>
                                <td>
                                  <input
                                    type="number"
                                    placeholder="Grado"
                                    class="form-control"
                                  />
                                </td>
                                <td>
                                  <input
                                    type="number"
                                    placeholder="Grado"
                                    class="form-control"
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>Flexión interfalángica de dedo gordo</td>
                                <td>
                                  <input
                                    type="number"
                                    placeholder="Grado"
                                    class="form-control"
                                  />
                                </td>
                                <td>
                                  <input
                                    type="number"
                                    placeholder="Grado"
                                    class="form-control"
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>Flexión interfalángica de los dedos</td>
                                <td>
                                  <input
                                    type="number"
                                    placeholder="Grado"
                                    class="form-control"
                                  />
                                </td>
                                <td>
                                  <input
                                    type="number"
                                    placeholder="Grado"
                                    class="form-control"
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  Extension metatarsofalángica de dedo gordo
                                </td>
                                <td>
                                  <input
                                    type="number"
                                    placeholder="Grado"
                                    class="form-control"
                                  />
                                </td>
                                <td>
                                  <input
                                    type="number"
                                    placeholder="Grado"
                                    class="form-control"
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  Extención metatarsofalángica de los dedos
                                </td>
                                <td>
                                  <input
                                    type="number"
                                    placeholder="Grado"
                                    class="form-control"
                                  />
                                </td>
                                <td>
                                  <input
                                    type="number"
                                    placeholder="Grado"
                                    class="form-control"
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>Extensión interfalángica de dedo gordo</td>
                                <td>
                                  <input
                                    type="number"
                                    placeholder="Grado"
                                    class="form-control"
                                  />
                                </td>
                                <td>
                                  <input
                                    type="number"
                                    placeholder="Grado"
                                    class="form-control"
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>Extensión interfalángica de los dedos</td>
                                <td>
                                  <input
                                    type="number"
                                    placeholder="Grado"
                                    class="form-control"
                                  />
                                </td>
                                <td>
                                  <input
                                    type="number"
                                    placeholder="Grado"
                                    class="form-control"
                                  />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            
          </div>
        </div>

        <!-- Botón Guardar -->
        <button class="btn btn-warning mt-3" @click="guardarInfo">
          + Guardar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import {
  evaluacion_muscular,
  sistema_muscular,
} from "./../../../firebase/bd.js";
import {
  BuscarExpMuscularDetalleNombre,
  BuscarExpFisicaDetalleNombre,
} from "./../../backend/rutinas.js";

export default {
  data: () => ({
    data_smuscular: sistema_muscular,
    data_emuscular: evaluacion_muscular,
    emuscular: "0",
    tipoevaluacionM: "0",
    caracteristicaM: "0",
    musculo: "0",
    consultamusc: [],
    evalmusc: [],
    eval_grado: "0",
    detalleM: "",
    NewAntec: [],
    NewAntec2: [],
    ArraySaveConsulta: [],
  }),
  methods: {
    busquedamuscular(x, y, z) {
      this.consultamusc = BuscarExpFisicaDetalleNombre(x, y, z);
    },

    evalmuscular(x, y, z) {
      this.evalmusc = BuscarExpMuscularDetalleNombre(x, y, z);
    },

    AddAntec(tipo, enf, detalle) {
      let item = {
        sistema: "sistema muscular",
        tipoEvaluacion: this.tipoevaluacionM,
        caracteristica: this.caracteristicaM,
        detalleenf: this.detalleM,
      };
      this.NewAntec = [...this.NewAntec, item];
      console.log(this.NewAntec);
      this.limpiarcampos();
    },

    eliminaritem(index) {
      console.log(index);
      this.NewAntec.splice(index, 1);
    },
    limpiarcampos() {
      this.tipoevaluacionM = "0";
      this.caracteristicaM = "0";
      this.detalleM = "";


    },

    //Addevalcuacion('eval_musc_general', musculo, eval_grado)

    Addevalcuacion(tipo, enf, detalle) {
      let item = {
        sistema: "Evaluacion Muscular G",
        clase: this.emuscular,
        musculo: this.musculo,
        grado: this.eval_grado,
      };
      this.NewAntec2 = [...this.NewAntec2, item];
      console.log(this.NewAntec2);
      this.limpiarcamposeval();
    },


    
    eliminaritemeval(index) {
      console.log(index);
      this.NewAntec2.splice(index, 1);
    },
    limpiarcamposeval() {
      this.emuscular = "0";
      this.musculo = "0";
      this.eval_grado = "0";


    },

    guardarInfo() {
      this.ArraySaveConsulta = [];
      const datos = {
        smuscular: this.seval,
        emuscular: this.ecaracteristica,
        musculo: this.musculo,
        eval_grado: this.eval_grado,
        detalle: this.detalle,
      };

      console.log("Array de Antecedentes:", this.NewAntec);
    },
  },
};
</script>
