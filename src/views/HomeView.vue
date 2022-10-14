<template>
  <div>

    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>


        <v-flex id="container_datos" xs6 v-for="empleado in empleados" :key="empleado.id">



          <v-card max-width="550" outlined class="pa-4 pb-2 card-custom">
            <v-list-item three-line>
              <v-list-item-content style="text-align: left;">


                <v-list-item-title style="color:#fff;border-radius: 2px;" class="text-h5 grey darken-4 pa-2">
                  {{empleado.nombre}}
                </v-list-item-title>



                <v-card-actions class="pl-2">
                  <h4 style="text-transform:uppercase;color:red;padding:0px;">{{empleado.puesto}}</h4>
                  <v-spacer></v-spacer>

                  <div id="estatus" style="color:#33691E;" class="text-overline light-green lighten-4 pl-4 pr-4">
                    {{empleado.estatus}}
                  </div>

                </v-card-actions>



                <v-list-item-content id="content_box">

                  <table style="width:100%">
                    <tr class="grey lighten-2">
                      <th>Sexo</th>
                      <td>{{empleado.sexo}}</td>
                    </tr>
                    <tr>
                      <th>Fecha de Nacimiento</th>
                      <td>{{empleado.fecha_nacimiento}}</td>
                    </tr>
                    <tr class="grey lighten-2">
                      <th>Edad</th>
                      <td>{{empleado.edad}}</td>
                    </tr>
                    <tr>
                      <th>Teléfono</th>
                      <td>{{empleado.tel}}</td>
                    </tr>
                    <tr class="grey lighten-2">
                      <th>Correo</th>
                      <td>{{empleado.correo}}</td>
                    </tr>
                    <tr>
                      <th>Puesto</th>
                      <td>{{empleado.puesto}}</td>
                    </tr>
                    <tr class="grey lighten-2">
                      <th>Turno</th>
                      <td>{{empleado.turno}}</td>
                    </tr>
                  </table>
                  <div style="color:#fff;" class="text-overline grey darken-4 lighten-4 pl-4 mt-4">
                    Datos Personales
                  </div>

                  <table style="width:100%">
                    <tr class="grey lighten-2">
                      <th>RFC</th>
                      <td>{{empleado.rfc}}</td>
                    </tr>
                    <tr>
                      <th>Dirección</th>
                      <td>{{empleado.colonia}}</td>
                    </tr>
                    <tr class="grey lighten-2">
                      <th>Calle</th>
                      <td>{{empleado.calle}}</td>
                    </tr>
                    <tr>
                      <th>No. Interior</th>
                      <td>{{empleado.num_domicilio}}</td>
                    </tr>
                    <tr class="grey lighten-2">
                      <th>Codigo Postal</th>
                      <td>{{empleado.codigo_postal}}</td>
                    </tr>
                  </table>
                </v-list-item-content>

              </v-list-item-content>

            </v-list-item>

          </v-card>
        </v-flex>
      </v-layout>
    </v-container>



  </div>
</template>

<style>
table,
th,
td {
  border-collapse: collapse;
}

th,
td {
  padding: 10px;
}

td {
  text-align: right;
}

#content_box {
  display: none;
}

#container_datos {
  cursor: pointer;
}

#container_datos:hover #content_box {
  display: block;
}
.card-custom{
  margin-top:50px;
  border-radius: 15px !important;
  box-shadow: 0px 5px 9px rgba(50,100,200,0.15);
}
</style>


<script>


export default {
  data() {
    return {
      empleados: []
    }
  },
  created: function () {
    this.consultarEmpleados();
  },
  methods: {
    consultarEmpleados() {
      fetch('http://localhost/empleados/')
        .then(respuesta => respuesta.json())
        .then((datosRespuesta) => {
          console.log(datosRespuesta)
          this.empleados = []
          if (typeof datosRespuesta[0].success === 'undefined') {
            this.empleados = datosRespuesta;
          }
        })
    },
    borrarEmpleado(id) {
      console.log(id);

      fetch('http://localhost/empleados/?borrar=' + id)
        .then(respuesta => respuesta.json())
        .then((datosRespuesta) => {
          console.log(datosRespuesta)
          window.location.href = "administracion"
        })
    }
  }
}

</script>
