//  Copia este objeto completo dentro de tu sgc-injector o tu index para interceptar y forzar pruebas locales
export const mockResponseFromPronto  = {
  data: {  //Axios wrapper
    data: {  //GraphQL wrapper
      maintenanceManager_FindTasks: [
        //  ─── MOQUEGUA ────────────────────────────────────────────────────────
        {
          id: 859001,
          csgID: 202611,
          customerCode: "20261100199",
          address: {
            ubigeo: { department: "MOQUEGUA", province: "ILO", district: "ILO" },
            street: "Av. Mariano Lino Urquieta Nro. 420",
          },
          dateTimeFrom: "2026-08-30T11:30:00Z",
        },
        {
          id: 859002,
          csgID: 202612,
          customerCode: "20261100288",
          address: {
            ubigeo: { department: "MOQUEGUA", province: "ILO", district: "PACOCHA" },
            street: "Urb. Ciudad Nueva Mz. G Lote 12",
          },
          dateTimeFrom: "2026-08-30T21:00:00Z"
        },
        {
          id: 859003,
          csgID: 202616,
          customerCode: "20261100377",
          address: {
            ubigeo: { department: "MOQUEGUA", province: "MARISCAL NIETO", district: "MOQUEGUA" },
            street: "Calle Ayacucho Nro. 150",
          },
          dateTimeFrom: "2026-08-30T15:00:00Z"
        },

        // //   ─── TACNA ───────────────────────────────────────────────────────────
         {
           id: 859004,
           customerCode: "20261200466",
           address: {
             ubigeo: { department: "TACNA", province: "TACNA", district: "CORONEL GREGORIO ALBARRACIN" },
             street: "Av. Municipal Asoc. Vista Alegre Mz. 4 Lote 9",
           },
           dateTimeFrom: "2026-08-30T17:00:00Z"
         },
         {
           id: 859005,
           customerCode: "20261200555",
           address: {
             ubigeo: { department: "TACNA", province: "TACNA", district: "TACNA" },
             street: "Calle San Camilo Nro. 215",
           },
           dateTimeFrom: "2026-08-30T19:00:00Z"
         },
         {
           id: 859006,
           customerCode: "20261200644",
           address: {
             ubigeo: { department: "TACNA", province: "TACNA", district: "POCOLLAY" },
             street: "Jr. Hermanos Reynoso Nro. 310",
           },
           dateTimeFrom: "2026-08-30T13:00:00Z"
         },

        //   ─── PUNO ────────────────────────────────────────────────────────────
         {
           id: 859007,
           customerCode: "20261300733",
           address: {
             ubigeo: { department: "PUNO", province: "SAN ROMAN", district: "JULIACA" },
             street: "Jr. Mariano Nuñez Nro. 745",
           },
           dateTimeFrom: "2026-08-30T11:30:00Z"
         },
         {
           id: 859008,
           customerCode: "20261300822",
           address: {
             ubigeo: { department: "PUNO", province: "PUNO", district: "PUNO" },
             street: "Av. La Torre Nro. 1105",
           },
           dateTimeFrom: "2026-08-30T17:00:00Z"
         },
         {
           id: 859009,
           customerCode: "20261300911",
           address: {
             ubigeo: { department: "PUNO", province: "SAN ROMAN", district: "JULIACA" },
             street: "Av. Circunvalación Nro. 1420",
           },
           dateTimeFrom: "2026-08-30T21:00:00Z"
         },

        //   ─── CUSCO ───────────────────────────────────────────────────────────
         {
           id: 859010,
           customerCode: "20261401000",
           address: {
             ubigeo: { department: "CUSCO", province: "CUSCO", district: "WANCHAQ" },
             street: "Av. De la Cultura Nro. 804",
           },
           dateTimeFrom: "2026-08-30T15:00:00Z"
         },
         {
           id: 859011,
           customerCode: "20261401111",
           address: {
             ubigeo: { department: "CUSCO", province: "CUSCO", district: "SANTIAGO" },
             street: "Jr. Antonio Lorena Nro. 512",
           },
           dateTimeFrom: "2026-08-30T19:00:00Z"
         },
         {
           id: 859012,
           customerCode: "20261401222",
           address: {
             ubigeo: { department: "CUSCO", province: "CUSCO", district: "SAN SEBASTIAN" },
             street: "Urb. Santa Rosa Mz. B Lote 4",
           },
           dateTimeFrom: "2026-08-30T13:00:00Z"
         },

        //   ─── AREQUIPA ────────────────────────────────────────────────────────
         {
           id: 859013,
           customerCode: "20261501333",
           address: {
             ubigeo: { department: "AREQUIPA", province: "AREQUIPA", district: "CERRO COLORADO" },
             street: "Av. Aviación Km 6.5 Urb. Las Mercedes",
           },
           dateTimeFrom: "2026-08-30T11:30:00Z"
         },
         {
           id: 859014,
           customerCode: "20261501444",
           address: {
             ubigeo: { department: "AREQUIPA", province: "AREQUIPA", district: "YANAHUARA" },
             street: "Calle Lima Nro. 302",
           },
           dateTimeFrom: "2026-08-30T21:00:00Z"
         },
         {
           id: 859015,
           customerCode: "20261501555",
           address: {
             ubigeo: { department: "AREQUIPA", province: "AREQUIPA", district: "JOSE LUIS BUSTAMANTE Y R." },
             street: "Av. Dolores Nro. 104",
           },
           dateTimeFrom: "2026-08-30T17:00:00Z"
         }
      ]
    }
  }
};