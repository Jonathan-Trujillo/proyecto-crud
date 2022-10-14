<template>
  <div>
    <v-container>
      <form style=" gap:0px;margin-top:60px;" v-on:submit.prevent="agregarRegistro">
        <v-container style="display:grid;grid-template-columns: auto auto auto auto auto; ">
          <v-container>
            <div> Nombre: </div>
            <input type="text" name="nombre" class="rounded grey lighten-3 pl-4" required maxlength="45"
              v-model="empleado.nombre">
          </v-container>
          <v-container>
            <div> sexo: </div>
            <input type="text" name="sexo" class="rounded grey lighten-3 pl-4" required maxlength="45"
              v-model="empleado.sexo">
          </v-container>
          <v-container>
            <div> Etatus: </div>
            <input type="text" name="estatus" class="rounded grey lighten-3 pl-4" required maxlength="45"
              v-model="empleado.estatus">
          </v-container>
          <v-container>
            <div> Correo: </div>
            <input type="email" name="correo" class="rounded grey lighten-3 pl-4" required maxlength="45"
              v-model="empleado.correo">
          </v-container>
          <v-container>
            <div> Teléfono: </div>
            <input type="tel" name="tel" class="rounded grey lighten-3 pl-4" required maxlength="45"
              v-model="empleado.tel">
          </v-container>
          <v-container>
            <div> Puesto: </div>
            <input type="text" name="puesto" class="rounded grey lighten-3 pl-4" required maxlength="45"
              v-model="empleado.puesto">
          </v-container>
          <v-container>
            <div> Departamento: </div>
            <input type="text" name="departamento" class="rounded grey lighten-3 pl-4" required maxlength="45"
              v-model="empleado.departamento">
          </v-container>
          <v-container>
            <div> Turno: </div>
            <input type="text" name="turno" class="rounded grey lighten-3 pl-4" required maxlength="45"
              v-model="empleado.turno">
          </v-container>
          <v-container>
            <div> RFC: </div>
            <input type="text" name="rfc" class="rounded grey lighten-3 pl-4" required maxlength="45"
              v-model="empleado.rfc">
          </v-container>
          <v-container>
            <div> Direccion: </div>
            <input type="text" name="colonia" class="rounded grey lighten-3 pl-4" required maxlength="45"
              v-model="empleado.colonia">
          </v-container>
          <v-container>
            <div> Calle: </div>
            <input type="text" name="calle" class="rounded grey lighten-3 pl-4" required maxlength="45"
              v-model="empleado.calle">
          </v-container>
          <v-container>
            <div> No. Interior: </div>
            <input type="text" name="num_domicilio" class="rounded grey lighten-3 pl-4" required maxlength="45"
              v-model="empleado.num_domicilio">
          </v-container>
          <v-container>
            <div> Codigo Postal: </div>
            <input type="number" name="codigo_postal" class="rounded grey lighten-3 pl-4" required maxlength="45"
              v-model="empleado.codigo_postal">
          </v-container>
          <v-container>
            <div> Fecha de Nacimiento: </div>
            <input type="date" id="fecha" name="fecha_nacimiento" class="rounded grey lighten-3 pl-4 pr-4" required
              v-model="empleado.fecha_nacimiento"  v-on:change="myDate()">
          </v-container>
          <v-container>
            <div> Edad: </div>
            <input type="text" id="edadData" value="" name="edad" class="rounded grey lighten-3 pl-4" required maxlength="45"
              v-model="empleado.edad">
          </v-container>
        </v-container>
        <v-container style="display:flex;justify-content:right;gap:20px;width:100%; text-align: center;"> <button type="submit"
            style="background:#1976D2;color:#fff;border-radius:50px;text-decoration:none;font-weight:500; padding: 5px 20px;">Agregar</button>
          <router-link :to="{name:'administracion'}"
            style="background:#f00;color:#fff;border-radius: 50px;padding:8px 20px;text-decoration: none;font-weight:500;">
            Cancelar</router-link>
        </v-container>
      </form>
    </v-container>
   </div>

</template>


<script>

function getAge(dateString) {


var today = new Date();
var birthDate = new Date(dateString);
var age = today.getFullYear() - birthDate.getFullYear();
var m = today.getMonth() - birthDate.getMonth();
if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
}
return age;

}
export default {
  data() {
    return {
      empleado: {}
    }
  },
  methods: {



    myDate() {
        var g =    document.getElementById("fecha").value;
        document.getElementById('edadData').value = getAge(g);
             
        },

    agregarRegistro() {
      console.log(this.empleado);
      var datosEnviar = {
        nombre: this.empleado.nombre,
        sexo: this.empleado.sexo,
        estatus: this.empleado.estatus,
        fecha_nacimiento: this.empleado.fecha_nacimiento,
        edad: this.empleado.edad,
        correo: this.empleado.correo,
        tel: this.empleado.tel,
        puesto: this.empleado.puesto,
        departamento: this.empleado.departamento,
        turno: this.empleado.turno,
        rfc: this.empleado.rfc,
        colonia: this.empleado.colonia,
        calle: this.empleado.calle,
        num_domicilio: this.empleado.num_domicilio,
        codigo_postal: this.empleado.codigo_postal
      }

      fetch('http://localhost/empleados/?insertar=1', {
        method: 'POST',
        body: JSON.stringify(datosEnviar)
      })
        .then(respuesta => respuesta.json())
        .then((datosRespuesta => {
          console.log(datosRespuesta);
          window.location.href = 'administracion'
        }))



    }
  }

}
</script>